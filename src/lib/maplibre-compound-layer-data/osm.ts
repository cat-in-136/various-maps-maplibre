import * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';

export const OSM_VECTOR_BASE_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
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
				type: 'Layer',
				id: 'base-osm-liberty-ja',
				title: 'OSM Liberty JA',
				url: '../../../static/assets/map-data/osm-liberty-ja-style.min.json?url'
			}
		]
	}
];

export const OSM_RASTER_BASE_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'OSM Raster',
		entries: [
			{
				type: 'Layer',
				id: 'base-osm-raster-mapnik',
				title: 'OSM mapnik',
				url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
				maxZoom: 19,
				attribution:
					'Map data &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors.'
			},
			{
				type: 'Layer',
				id: 'base-osm-raster-opentopomap',
				title: 'Open Topo Map',
				url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png',
				maxZoom: 17,
				attribution:
					'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
			}
		]
	}
];

export const OSM_VECTOR_OVERLAY_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'OSM Vector',
		entries: [
			{
				type: 'LayerGroup',
				title: 'Tonar',
				entries: [
					{
						type: 'Layer',
						id: 'overlay-osm-tonar-labels-ja',
						title: 'OSM Maptiler Toner Labels JA',
						url: 'https://tile.openstreetmap.jp/styles/maptiler-toner-ja/style.json',
						styleSwapOptions: {
							transformStyle: (_previous, next) => {
								return { ...next, layers: next.layers.filter((v) => v.type === 'symbol') };
							}
						}
					},
					{
						type: 'Layer',
						id: 'overlay-osm-tonar-labels-en',
						title: 'OSM Maptiler Toner Labels EN',
						url: 'https://tile.openstreetmap.jp/styles/maptiler-toner-en/style.json',
						styleSwapOptions: {
							transformStyle: (_previous, next) => {
								return { ...next, layers: next.layers.filter((v) => v.type === 'symbol') };
							}
						}
					},
					{
						type: 'Layer',
						id: 'overlay-osm-tonar-lines',
						title: 'OSM Maptiler Toner Lines',
						url: 'https://tile.openstreetmap.jp/styles/maptiler-toner-ja/style.json',
						styleSwapOptions: {
							transformStyle: (_previous, next) => {
								return { ...next, layers: next.layers.filter((v) => v.type === 'line') };
							}
						}
					}
				]
			},
			{
				type: 'Layer',
				id: 'overlay-osm-liberty-ja',
				title: 'OSM Liberty JA Labels',
				url: '../../../static/assets/map-data/osm-liberty-ja-style.min.json?url',
				styleSwapOptions: {
					transformStyle: (_previous, next) => {
						return { ...next, layers: next.layers.filter((v) => v.type === 'symbol') };
					}
				}
			}
		]
	}
];

export const OSM_RASTER_OVERLAY_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'OSM Raster',
		entries: [
			{
				type: 'LayerGroup',
				title: 'OpenRailwayMap',
				entries: [
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-standard',
						title: 'Standard',
						url: 'https://tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 19,
						attribution:
							'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>, Style: <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a> <a href="http://www.openrailwaymap.org/">OpenRailwayMap</a> and OpenStreetMap'
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-standard',
						title: 'Electrification',
						url: 'https://tiles.openrailwaymap.org/electrification/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 19,
						attribution:
							'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>, Style: <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a> <a href="http://www.openrailwaymap.org/">OpenRailwayMap</a> and OpenStreetMap'
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-maxspeed',
						title: 'Maxspeed',
						url: 'https://tiles.openrailwaymap.org/maxspeed/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 19,
						attribution:
							'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>, Style: <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a> <a href="http://www.openrailwaymap.org/">OpenRailwayMap</a> and OpenStreetMap'
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-signals',
						title: 'Signals',
						url: 'https://tiles.openrailwaymap.org/signals/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 19,
						attribution:
							'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>, Style: <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a> <a href="http://www.openrailwaymap.org/">OpenRailwayMap</a> and OpenStreetMap'
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-gauge',
						title: 'Gauge',
						url: 'https://tiles.openrailwaymap.org/gauge/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 19,
						attribution:
							'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>, Style: <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a> <a href="http://www.openrailwaymap.org/">OpenRailwayMap</a> and OpenStreetMap'
					}
				]
			},
			{
				type: 'LayerGroup',
				title: 'waymarkedtrails',
				entries: [
					{
						type: 'Layer',
						id: 'overlay-waymarkedtrails-hiking',
						title: 'Hiking',
						url: 'https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 18,
						attribution:
							'© <a href="https://www.waymarkedtrails.org">Waymarked Trails</a>, © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-waymarkedtrails-cycling',
						title: 'Cycling',
						url: 'https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 18,
						attribution:
							'© <a href="https://www.waymarkedtrails.org">Waymarked Trails</a>, © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-waymarkedtrails-mtb',
						title: 'MTB',
						url: 'https://tile.waymarkedtrails.org/mtb/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 18,
						attribution:
							'© <a href="https://www.waymarkedtrails.org">Waymarked Trails</a>, © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-waymarkedtrails-skating',
						title: 'Skating',
						url: 'https://tile.waymarkedtrails.org/skating/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 18,
						attribution:
							'© <a href="https://www.waymarkedtrails.org">Waymarked Trails</a>, © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-waymarkedtrails-riding',
						title: 'Riding',
						url: 'https://tile.waymarkedtrails.org/riding/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 18,
						attribution:
							'© <a href="https://www.waymarkedtrails.org">Waymarked Trails</a>, © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-waymarkedtrails-slopes',
						title: 'Slopes',
						url: 'https://tile.waymarkedtrails.org/slopes/{z}/{x}/{y}.png',
						minZoom: 2,
						maxZoom: 18,
						attribution:
							'© <a href="https://www.waymarkedtrails.org">Waymarked Trails</a>, © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
					}
				]
			},
			{
				type: 'Layer',
				id: 'overlay-opensnowmap-ski-pistes',
				title: 'OpenSnowMap ski pistes',
				url: 'https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png',
				attribution:
					'Map data &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors.'
			}
		]
	}
];
