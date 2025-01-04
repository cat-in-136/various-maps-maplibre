import Encoding from 'encoding-japanese';
//import type Encoding from '@types/encoding-japanese';
import * as MaplibreCompondLayerUI from '../lib/maplibre-compound-layer-ui';

interface GSIMapLayerConfig {
	url: string;
	[propName: string]: unknown;
}

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

export class GSIMapLayers {
	#data: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[];
	constructor() {
		this.#data = [];
	}

	getGroup(): MaplibreCompondLayerUI.LayerConfig.LayerGroup {
		return {
			type: 'LayerGroup',
			title: '国土地理院レイヤー',
			entries: this.#data
		};
	}

	async load(layers: GSIMapLayerConfig[] = GSIMAPLAYERS): Promise<void> {
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
		this.#data.push(...data);
	}
}
