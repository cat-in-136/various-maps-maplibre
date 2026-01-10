import * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';

import tjmsy_orilibre_global_osmfj_netsyms from '../../../static/assets/map-data/tjmsy-orilibre-global-osmfj-netsyms.min.json?url';

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
				id: 'base-tjmsy-orilibre-global',
				title: 'tjmsy/orilibre Global (modified)',
				url: tjmsy_orilibre_global_osmfj_netsyms,
				html: `<a href="https://github.com/tjmsy/orilibre">tjmsy/orilibre</a>'s Global, converted into a maplibre style json and modified to use OSMFJ and Netsyms.`
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
