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
				if (layerGroup.title === '今昔マップ【谷謙二氏】') {
					return undefined; // 今昔マップはすでにロードされているので除外
				}
			} else if (v?.type === 'Layer') {
				const layer = v as MaplibreCompondLayerUI.LayerConfig.Layer;
				if (layer.url.endsWith('.json')) {
					return undefined;
				}
				if (!layer.url.startsWith('https://')) {
					layer.url = new URL(layer.url, QCHIZULAYERS[0].url).href;
				} else if (layer.url.startsWith('./layers_json')) {
					layer.url = new URL(`../${layer.url}`, QCHIZULAYERS[0].url).href;
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
