import Encoding from 'encoding-japanese';
//import type Encoding from '@types/encoding-japanese';

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
	#data: any[];
	constructor() {
		this.#data = [];
	}
	async load(layers: GSIMapLayerConfig[] = GSIMAPLAYERS): Promise<any> {
		const data = await Promise.all(
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
		);
		this.#data.push(...data.filter(Boolean));
		console.debug({ data: this.#data });
	}
}
