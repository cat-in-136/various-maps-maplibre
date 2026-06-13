import type { Layer, LayerConfigEntry, LayerGroup } from '$lib/layer-config';
import { isLayerGroup, isLayerTextJson } from '$lib/layer-config';

export interface GSIMapLayerConfig {
	url: string;
	[propName: string]: unknown;
}

type GSIMapLayersConvFn = (v: LayerConfigEntry) => LayerConfigEntry | undefined;

const GSIMAPLAYERS: GSIMapLayerConfig[] = [
	{
		url: 'https://maps.gsi.go.jp/layers_txt/layers1.txt'
	},
	{
		url: 'https://maps.gsi.go.jp/layers_txt/layers2.txt'
	},
	{
		url: 'https://maps.gsi.go.jp/layers_txt/layers3.txt'
	},
	{
		url: 'https://maps.gsi.go.jp/layers_txt/layers4.txt'
	},
	{
		url: 'https://maps.gsi.go.jp/layers_txt/layers5.txt'
	},
	{
		url: 'https://maps.gsi.go.jp/layers_txt/layers6.txt'
	},
	{
		url: 'https://maps.gsi.go.jp/layers_txt/layers7.txt'
	}
];

const GSIMAPLAYERS_CONV_FN: GSIMapLayersConvFn = (v) => {
	if (v?.type === 'Layer') {
		const layer = v as Layer;
		if (!layer.url.startsWith('https://')) {
			layer.url = new URL(layer.url, GSIMAPLAYERS[0].url).href;
		}
		if (!layer.attribution) {
			layer.attribution = '国土地理院';
		}
	}
	return v;
};

export class GSIMapLayers {
	#data: LayerConfigEntry[];
	constructor() {
		this.#data = [];
	}

	getGroup(title: string = '国土地理院レイヤー'): LayerGroup {
		return {
			type: 'LayerGroup',
			title,
			entries: this.#data
		};
	}

	async load(
		layers: GSIMapLayerConfig[] = GSIMAPLAYERS,
		convFn: GSIMapLayersConvFn = GSIMAPLAYERS_CONV_FN
	): Promise<void> {
		const results = await Promise.all(
			layers.map(async (config) => {
				const url = config.url;
				const response = await fetch(url);
				if (response.ok) {
					try {
						const json = await response.json();
						return { json, url };
					} catch (e) {
						console.debug(`Failed to load ${url}`, e);
					}
					return undefined;
				} else {
					return undefined;
				}
			})
		);

		const data = results.flatMap((v) => v?.json?.layers);

		for (const result of results) {
			if (result?.json?.layers) {
				await GSIMapLayers.#resolveSrc(result.json.layers, result.url);
			}
		}

		GSIMapLayers.#fixData(data, convFn);
		this.#data.push(...data);
	}

	static async #resolveSrc(
		data: LayerConfigEntry[],
		baseUrl: string,
		visited: Set<string> = new Set()
	): Promise<void> {
		const srcMap = new Map<LayerGroup, string>();

		const tasks: Promise<void>[] = [];

		for (const d of data) {
			if (isLayerGroup(d) && typeof d.src === 'string') {
				const srcUrl = new URL(d.src, baseUrl).href;
				if (visited.has(srcUrl)) {
					console.debug(`Skipped circular src ${srcUrl}`);
					continue;
				}
				visited.add(srcUrl);
				tasks.push(
					fetch(srcUrl)
						.then((response) => {
							if (!response.ok) return undefined;
							return response.json();
						})
						.then((json) => {
							if (isLayerTextJson(json)) {
								d.entries = json.layers;
								srcMap.set(d, srcUrl);
							}
						})
						.catch((e) => {
							console.debug(`Failed to load src ${srcUrl}`, e);
						})
				);
			}
		}

		await Promise.all(tasks);

		for (const d of data) {
			if (isLayerGroup(d) && Array.isArray(d.entries)) {
				const childBaseUrl = srcMap.get(d) ?? baseUrl;
				await GSIMapLayers.#resolveSrc(d.entries, childBaseUrl, visited);
			}
		}
	}

	static #fixData(data: LayerConfigEntry[], convFn: GSIMapLayersConvFn) {
		for (const d of data) {
			if (d?.type === 'LayerGroup') {
				if (Array.isArray(d.entries)) {
					GSIMapLayers.#fixData(d.entries, convFn);
				}
			}
		}

		if (convFn) {
			for (let i = data.length - 1; i >= 0; i--) {
				if (convFn(data[i]) === undefined) {
					data.splice(i, 1);
				}
			}
		}
	}
}
