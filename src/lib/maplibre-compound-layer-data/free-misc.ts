import * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';

import tjmsy_orilibre_global_maptiler from '../../../static/assets/map-data/tjmsy-orilibre-global-maptiler.min.json?url';

export const MISC_BASE_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'Misc',
		entries: [
			{
				type: 'Layer',
				id: 'base-rekichizu-mierune',
				title: 'れきちず',
				url: 'https://mierune.github.io/rekichizu-style/styles/street/style.json'
			},
			{
				type: 'Layer',
				id: 'base-rekichizu-mierune-hiragana',
				title: 'れきちず（ひらがな）',
				url: 'https://mierune.github.io/rekichizu-style/styles/street/style_hira.json'
			},
			{
				type: 'Layer',
				id: 'base-rekichizu-mierune-hiragana',
				title: 'れきちず（英語）',
				url: 'https://mierune.github.io/rekichizu-style/styles/street/style_en.json'
			},
			{
				type: 'Layer',
				id: 'base-tjmsy-orilibre-global-without-contour',
				title: 'tjmsy/orilibre Global without Contour',
				url: tjmsy_orilibre_global_maptiler,
				html: `<a href="https://github.com/tjmsy/orilibre">tjmsy/orilibre</a>'s Global (without Contour), converted into a maplibre style json.`,
				styleSwapOptions: {
					transformStyle: (_previous, next) => {
						// Remove the source with id 'contours'
						if (next.sources && next.sources['contours']) {
							delete next.sources['contours'];
						}

						// Remove layers that reference the 'contours' source
						if (next.layers) {
							next.layers = next.layers.filter((layer) => {
								return !('source' in layer && layer.source === 'contours');
							});
						}
						return next;
					}
				}
			},
			{
				type: 'LayerGroup',
				title: 'Debug',
				entries: [
					{
						type: 'Layer',
						id: 'base-debug-empty-style',
						title: 'Empty Style',
						url: 'https://unpkg.com/maputnik/src/config/empty-style.json'
					},
					{
						type: 'Layer',
						id: 'base-demotiles',
						title: 'MapLibre World',
						url: 'https://demotiles.maplibre.org/style.json'
					},
					{
						type: 'Layer',
						id: 'base-demotiles-debug-tiles',
						title: 'Debug',
						url: 'https://demotiles.maplibre.org/debug-tiles/style.json'
					}
				]
			}
		]
	}
];

export const MISC_OVERLAY_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'その他の外部地図',
		entries: [
			{
				type: 'Layer',
				id: 'overlay-plateau-ortho',
				title: 'PLATEAU-Ortho',
				url: 'https://api.plateauview.mlit.go.jp/tiles/plateau-ortho-2023/{z}/{x}/{y}.png',
				minZoom: 10,
				maxZoom: 18,
				attribution: '<a href="https://www.mlit.go.jp/plateau/">国土交通省Project PLATEAU</a>'
			}
		]
	}
];
