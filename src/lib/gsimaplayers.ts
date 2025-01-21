import Encoding from 'encoding-japanese';
//import type Encoding from '@types/encoding-japanese';
import * as MaplibreCompondLayerUI from '../lib/maplibre-compound-layer-ui';

interface GSIMapLayerConfig {
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
						const respBuff = await response.bytes();
						return JSON.parse(
							Encoding.convert(respBuff, {
								to: 'UNICODE',
								type: 'string'
							})
						);
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
		const elements_to_remove: any[] = [];
		for (const d of data) {
			if (d?.type === 'LayerGroup') {
				if (Array.isArray(d.entries)) {
					GSIMapLayers.#fixData(d.entries, convFn);
				}
			}
			if (convFn) {
				const ret = convFn(d);
				if (ret === undefined) {
					elements_to_remove.push(d);
				}
			}
		}
		data.filter((item) => !elements_to_remove.includes(item));
	}
}
