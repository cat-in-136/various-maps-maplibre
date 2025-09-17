import { GSIMapLayers } from '../lib/gsimaplayers';
import * as MaplibreCompondLayerUI from '../lib/maplibre-compound-layer-ui';

const QCHIZULAYERS: { url: string }[] = [
	{
		url: 'https://qchizu.github.io/qchizu/layers_txt/layers99.txt'
	}
];

export class QChizuLayers extends GSIMapLayers {
	getGroup(title: string = '全国Q地図'): MaplibreCompondLayerUI.LayerConfig.LayerGroup {
		return super.getGroup(title);
	}

	async load() {
		await super.load(QCHIZULAYERS, (v) => {
			if (v?.type === 'LayerGroup') {
				const layerGroup = v as MaplibreCompondLayerUI.LayerConfig.LayerGroup;
				if (!layerGroup.entries || layerGroup.entries?.length === 0) {
					return undefined;
				}
				if ('src' in layerGroup) {
					return undefined; // external reference currently unsupport.
				}
				if (layerGroup.title === '今昔マップ【谷謙二氏】') {
					return undefined; // 今昔マップはすでにロードされているので除外
				}
			} else if (v?.type === 'Layer') {
				const layer = v as MaplibreCompondLayerUI.LayerConfig.Layer;
				if (
					layer.url.endsWith('.pm.json') || // pmtiles
					/{-[xyz]}/.test(layer.url) || // TMS tiles
					layer.url.includes('/optimal_bvmap/') || // 国土地理院最適化ベクトルタイル
					layer.url.startsWith('https://mapdata.qchizu.xyz/') || // CORS not allowed
					layer.url.startsWith('http://gis.biodic.go.jp/') || // CORS not allowed
					layer.url === './layers_json/54_ksj_kokuyurinya_2018_01.json' // pmtiles
				) {
					return undefined;
				} else if (layer.url.startsWith('./layers_json/')) {
					layer.url = `https://qchizu.github.io/qchizu/${layer.url.substring(2)}`;
				} else if (layer.url.startsWith('http://')) {
					if (location.protocol == 'https:') {
						return undefined; // access to http: from https: not allowed
					}
				} else if (!layer.url.startsWith('https://')) {
					layer.url = new URL(layer.url, QCHIZULAYERS[0].url).href;
				}
				if (!layer.id) {
					const rand = Math.random().toString(32).substring(2);
					layer.id = `autoid-${rand}`;
				}
			}
			return v;
		});
	}
}
