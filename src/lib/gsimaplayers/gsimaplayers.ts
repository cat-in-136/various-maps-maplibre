import * as MaplibreCompondLayerUI from '../../lib/maplibre-compound-layer-ui';

export interface GSIMapLayerConfig {
	url: string;
	[propName: string]: unknown;
}

type GSIMapLayersConvFn = (
	v: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry
) => MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry | undefined;

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
		const layer = v as MaplibreCompondLayerUI.LayerConfig.Layer;
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
	#data: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[];
	constructor() {
		this.#data = [];
	}

	getGroup(title: string = '国土地理院レイヤー'): MaplibreCompondLayerUI.LayerConfig.LayerGroup {
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
		const data = (
			await Promise.all(
				layers.map(async (config) => {
					const url = config.url;
					const response = await fetch(url);
					if (response.ok) {
						try {
							return await response.json();
						} catch (e) {
							console.debug(`Failed to load ${url}`, e);
						}
						return undefined;
					} else {
						return undefined;
					}
				})
			)
		).flatMap((v) => v?.layers);
		GSIMapLayers.#fixData(data, convFn);
		this.#data.push(...data);
	}

	static #fixData(data: any[], convFn: GSIMapLayersConvFn) {
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
