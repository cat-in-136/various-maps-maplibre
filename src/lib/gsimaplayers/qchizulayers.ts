import { GSIMapLayers } from './gsimaplayers';
import * as MaplibreCompondLayerUI from '../../lib/maplibre-compound-layer-ui';

const QCHIZULAYERS: { url: string }[] = [
	{
		url: 'https://qchizu.github.io/qchizu/layers_txt/reinfolib.txt'
	},
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
					layer.url.startsWith('http://gis.biodic.go.jp/') || // CORS not allowed
					layer.url === './layers_json/54_ksj_kokuyurinya_2018_01.json' // pmtiles
				) {
					return undefined;
				} else if (layer.url.startsWith('./layers_json/reinfolib_')) {
					layer.url = `https://qchizu.github.io/qchizu/${layer.url.substring(2)}`;
					layer.styleSwapOptions = {
						// Replace Qchizu-API-proxy reinfolib URL with Geolonia CDN URL
						transformStyle: (_previous, next) => {
							const QCHIZU_REINFOLIB_PROXY_URI_REGEX =
								/^https:\/\/api\.qchizu\.jp\/proxy\.php\?url=https:\/\/www\.reinfolib\.mlit\.go\.jp\/ex-api\/external\/([^?]+)\?response_format=pbf&z=\{z\}&x=\{x\}&y=\{y\}(&?)/;

							for (const k in next.sources) {
								const source = next.sources[k];
								if (
									source.type === 'vector' &&
									Array.isArray(source.tiles) &&
									(source.tiles as Array<string>).some((v) =>
										v.match(QCHIZU_REINFOLIB_PROXY_URI_REGEX)
									)
								) {
									source.tiles = (source.tiles as Array<string>).map((v) =>
										v.replace(
											QCHIZU_REINFOLIB_PROXY_URI_REGEX,
											(_match: string, p1: string, p2: string) => {
												const rest = p2 ? '?' : '';
												return `https://du6jhqfvlioa4.cloudfront.net/ex-api/external/${p1}/{z}/{x}/{y}.pbf${rest}`;
											}
										)
									);
									source.attribution +=
										'| <a href="https://blog.geolonia.com/2025/04/18/mlit-estate-library-proxy-api">Geolonia</a>';
								}
							}
							return next;
						}
					};
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
