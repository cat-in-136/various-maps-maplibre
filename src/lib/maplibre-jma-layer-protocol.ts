import * as maplibregl from 'maplibre-gl';

/** Type of https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json */
type JMA_TARGETTIMES_N1_TYPE = Array<{
	basetime: string;
	validtime: string;
	[propName: string]: unknown;
}>;

class SingletonFetch<T> {
	#url: string;
	#fetchPromise: Promise<T> | undefined = undefined;
	#currentAbortController: AbortController | undefined = undefined;
	#cache: { json: T } | undefined = undefined;

	constructor(url: string) {
		this.#url = url;
	}

	async fetch(abortController: AbortController): Promise<T> {
		if (this.#fetchPromise === undefined) {
			this.#currentAbortController = abortController;
			this.#fetchPromise = fetch(this.#url, { signal: abortController.signal })
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json() as Promise<T>;
				})
				.then((json) => {
					this.#cache = { json };
					return json;
				})
				.catch((error) => {
					if (error.name === 'AbortError') {
						this.#fetchPromise = undefined;
						this.#currentAbortController = undefined;
						throw error;
					}
					this.#fetchPromise = undefined;
					this.#currentAbortController = undefined;
					throw error;
				});
		} else if (this.#cache !== undefined) {
			return Promise.resolve(this.#cache.json);
		}
		return this.#fetchPromise;
	}

	async clearCache() {
		if (this.#cache !== undefined) {
			this.#cache = undefined;
		}
		if (this.#currentAbortController !== undefined) {
			this.#currentAbortController.abort();
			this.#currentAbortController = undefined;
		}
		this.#fetchPromise = undefined;
	}
}

const JMA_TARGETTIMES_N1_CACHE = new SingletonFetch<JMA_TARGETTIMES_N1_TYPE>(
	'https://www.jma.go.jp/bosai/jmatile/data/nowc/targetTimes_N1.json'
);

async function getNowCastTile(
	params: Parameters<maplibregl.AddProtocolAction>[0],
	abortController: Parameters<maplibregl.AddProtocolAction>[1]
): ReturnType<maplibregl.AddProtocolAction> {
	const zxyMatch = params.url.match(`//nowc/surf/hrpn/([0-9]+)/([0-9]+)/([0-9]+)\\.`);
	if (!zxyMatch) {
		throw new Error(`Invalid URL format: ${params.url}`);
	}
	const [, z, x, y] = zxyMatch;

	const targetTimes = await JMA_TARGETTIMES_N1_CACHE.fetch(abortController);
	const { basetime } = targetTimes[0];
	if (!basetime) {
		//throw new Error('No basetime found in targetTimes_N1.json');
		return { data: undefined };
	}
	const url = `https://www.jma.go.jp/bosai/jmatile/data/nowc/${basetime}/none/${basetime}/surf/hrpns/${z}/${x}/${y}.png`;

	const response = await fetch(url, { signal: abortController.signal });
	if (!response.ok) {
		throw new Error(`Network response was not ok for URL: ${url}`);
	}
	const arrayBuffer = await response.arrayBuffer();
	return { data: arrayBuffer };
}

/** Get MapLibre protocol action for JMA tiles
 *
 * @param protocol Protocol name (e.g., "jma")
 * @returns Protocol action
 */
export function getJmaLayerProtocolAction(protocol: string): maplibregl.AddProtocolAction {
	return async (params, abortController) => {
		if (!params.url.startsWith(`${protocol}://`)) {
			throw new Error(`Tile URL must be starts with ${protocol}://`);
		}

		if (params.url.startsWith(`${protocol}://nowc/surf/hrpn/`)) {
			return getNowCastTile(params, abortController);
		} else {
			throw new Error(`Unsupported URL: ${params.url}`);
		}
	};
}
