import type * as MaplibreCompondLayerUI from './maplibre-compound-layer-ui';

export const BASE_LAYER_DEFAULT: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry<MaplibreCompondLayerUI.LayerConfig.BaseLayer>[] =
	[
		{
			type: 'LayerGroup',
			title: 'OSM Vector',
			entries: [
				{
					type: 'Layer',
					id: 'base-osm-bright',
					title: 'Bright JA',
					url: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json'
				},
				{
					type: 'Layer',
					id: 'base-osm-bright',
					title: 'Bright EN',
					url: 'https://tile.openstreetmap.jp/styles/osm-bright-en/style.json'
				},
				{
					type: 'Layer',
					id: 'base-osm-vector',
					title: 'OSM OpenMapTiles',
					url: 'https://tile.openstreetmap.jp/styles/openmaptiles/style.json'
				},
				{
					type: 'Layer',
					id: 'base-osm-maptiler-basic-ja',
					title: 'Maptiler Basic JA',
					url: 'https://tile.openstreetmap.jp/styles/maptiler-basic-ja/style.json'
				},
				{
					type: 'Layer',
					id: 'base-osm-maptiler-basic-en',
					title: 'Maptiler Basic EN',
					url: 'https://tile.openstreetmap.jp/styles/maptiler-basic-en/style.json'
				},
				{
					type: 'Layer',
					id: 'base-osm-tonar-ja',
					title: 'OSM Maptiler Toner JA',
					url: 'https://tile.openstreetmap.jp/styles/maptiler-toner-ja/style.json'
				},
				{
					type: 'Layer',
					id: 'base-osm-tonar-ja',
					title: 'OSM Maptiler Toner EN',
					url: 'https://tile.openstreetmap.jp/styles/maptiler-toner-en/style.json'
				}
			]
		},
		{
			type: 'LayerGroup',
			title: '地理院地図Vector',
			entries: [
				{
					type: 'Layer',
					id: 'base-std',
					title: '標準地図',
					url: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json',
					maxNativeZoom: 17.9
				},
				{
					type: 'Layer',
					id: 'base-pale',
					title: '淡色地図',
					url: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/pale.json',
					maxNativeZoom: 17.9
				},
				{
					type: 'Layer',
					id: 'base-std',
					title: '白地図',
					url: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/blank.json',
					maxNativeZoom: 17.9
				}
			]
		},
		{
			type: 'LayerGroup',
			title: 'CartoCDN Basemaps',
			entries: [
				{
					type: 'Layer',
					id: 'base-cartocdn-dark-matter',
					title: 'Dark Matter',
					url: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
				},
				{
					type: 'Layer',
					id: 'base-cartocdn-dark-matter-nolabels',
					title: 'Dark Matter No Labels',
					url: 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json'
				},
				{
					type: 'Layer',
					id: 'base-cartocdn-positron',
					title: 'Positron',
					url: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
				},
				{
					type: 'Layer',
					id: 'base-cartocdn-positron-nolabels',
					title: 'Positron No Labels',
					url: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json'
				},
				{
					type: 'Layer',
					id: 'base-cartocdn-voyager',
					title: 'Voyager',
					url: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json'
				},
				{
					type: 'Layer',
					id: 'base-cartocdn-voyager-nolabels',
					title: 'Voyager No Labels',
					url: 'https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json'
				}
			]
		},
		{
			type: 'LayerGroup',
			title: 'ICGC Vector',
			entries: [
				{
					type: 'Layer',
					id: 'base-icgc-main',
					title: 'ICGC Main',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-mapa-base-fosc',
					title: 'ICGC Dark Base Map',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-ombra-hipsometria-corbes',
					title: 'ICGC Shadow Hypsometry Contours',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_ombra_hipsometria_corbes.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-ombra-fosca',
					title: 'ICGC Dark Shadow',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_ombra_fosca.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-orto-estandard',
					title: 'ICGC Standard Orthophoto',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_orto_estandard.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-orto-estandard-gris',
					title: 'ICGC Standard Orthophoto Gray',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_orto_estandard_gris.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-orto-hibrida',
					title: 'ICGC Hybrid Orthophoto',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_orto_hibrida.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-geologic-riscos',
					title: 'ICGC Geological Risks',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_geologic_riscos.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-orto-estandard-gris',
					title: 'ICGC Standard Orthophoto',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_orto_estandard_gris.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-orto-hibrida',
					title: 'ICGC Hybrid Orthophoto',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_orto_hibrida.json'
				},
				{
					type: 'Layer',
					id: 'base-icgc-geologic-riscos',
					title: 'ICGC Geological Risks',
					url: 'https://geoserveis.icgc.cat/contextmaps/icgc_geologic_riscos.json'
				}
			]
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
					type: 'LayerGroup',
					title: 'MapLibre Demo Tiles',
					entries: [
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
