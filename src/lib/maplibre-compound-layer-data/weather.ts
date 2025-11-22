import * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';

export const WEATHER_OVERLAY_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'Weather',
		entries: [
			{
				type: 'Layer',
				id: 'overlay-weather-jma-nowc',
				title: '気象庁降水ナウキャスト（最新）',
				url: 'jma://nowc/surf/hrpn/{z}/{x}/{y}.png',
				minZoom: 4,
				maxZoom: 10,
				attribution:
					'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
			},
			{
				type: 'LayerGroup',
				title: '気象庁ひまわり衛星画像（最新）',
				entries: [
					{
						type: 'Layer',
						id: 'overlay-weather-jma-satimg-B13-TBB',
						title: '赤外画像',
						url: 'jma://satimg/B13/TBB/{z}/{x}/{y}.jpg',
						minZoom: 3,
						maxZoom: 6,
						attribution:
							'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-weather-jma-satimg-B13-TBB-png',
						title: '赤外画像（透過）',
						url: 'jma://satimg/B13/TBB/{z}/{x}/{y}.jpg.png',
						minZoom: 3,
						maxZoom: 6,
						attribution:
							'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-weather-jma-satimg-B03-ALBD',
						title: '可視画像',
						url: 'jma://satimg/B03/ALBD/{z}/{x}/{y}.jpg',
						minZoom: 3,
						maxZoom: 6,
						attribution:
							'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-weather-jma-satimg-B03-ALBD-png',
						title: '可視画像（透過）',
						url: 'jma://satimg/B03/ALBD/{z}/{x}/{y}.jpg.png',
						minZoom: 3,
						maxZoom: 6,
						attribution:
							'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-weather-jma-satimg-B08-TBB',
						title: '水蒸気画像',
						url: 'jma://satimg/B08/TBB/{z}/{x}/{y}.jpg',
						minZoom: 3,
						maxZoom: 6,
						attribution:
							'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-weather-jma-satimg-B08-TBB-png',
						title: '水蒸気画像（透過）',
						url: 'jma://satimg/B08/TBB/{z}/{x}/{y}.jpg.png',
						minZoom: 3,
						maxZoom: 6,
						attribution:
							'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-weather-jma-satimg-REP-ETC',
						title: 'トゥルーカラー再現画像',
						url: 'jma://satimg/REP/ETC/{z}/{x}/{y}.jpg',
						minZoom: 3,
						maxZoom: 6,
						attribution:
							'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-weather-jma-satimg-SND-ETC',
						title: '雲頂強調画像',
						url: 'jma://satimg/SND/ETC/{z}/{x}/{y}.jpg',
						minZoom: 3,
						maxZoom: 6,
						attribution:
							'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
					}
				]
			}
		]
	}
];
