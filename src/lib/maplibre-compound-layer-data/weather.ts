import * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';

export const WEATHER_OVERLAY_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'Weather',
		entries: [
			{
				type: 'LayerGroup',
				title: '気象庁',
				entries: [
					{
						type: 'Layer',
						id: 'overlay-weather-jma-nowc',
						title: '気象庁降水ナウキャスト（最新）',
						url: 'jma://nowc/surf/hrpn/{z}/{x}/{y}.png',
						layerFormat: { tile: 'raster' },
						minZoom: 4,
						maxZoom: 10,
						attribution:
							'<a href="https://www.jma.go.jp/jma/kishou/info/coment.html">© Japan Meteorological Agency</a>'
					}
				]
			}
		]
	}
];
