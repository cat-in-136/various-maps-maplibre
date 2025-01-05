import type * as MaplibreCompondLayerUI from './maplibre-compound-layer-ui';

export const BASE_LAYER_DEFAULT: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
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
	},
	{
		type: 'LayerGroup',
		title: 'Esri Raster',
		entries: [
			{
				type: 'Layer',
				id: 'base-enri-raster-topograph',
				title: 'Esri Topograph',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
				maxZoom: 19,
				minZoom: 1,
				attribution:
					'Tiles &copy; <a href="https://static.arcgis.com/attribution/World_Topo_Map" target="_blank">Esri</a>'
			},
			{
				type: 'Layer',
				id: 'base-enri-raster-streets',
				title: 'Esri Streets',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
				maxZoom: 19,
				minZoom: 1,
				attribution:
					'Tiles &copy; <a href="https://static.arcgis.com/attribution/World_Street_Map" target="_blank">Esri</a>'
			},
			{
				type: 'Layer',
				id: 'base-enri-raster-natgeo',
				title: 'Esri National Geographic',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
				maxZoom: 19,
				minZoom: 1,
				attribution:
					'Tiles &copy; <a href="https://static.arcgis.com/attribution/NatGeo_World_Map" target="_blank">Esri</a>'
			},
			{
				type: 'Layer',
				id: 'base-enri-raster-ocean',
				title: 'Esri Ocean',
				url: 'https://server.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
				maxZoom: 19,
				minZoom: 1,
				attribution:
					'Tiles &copy; <a href="https://static.arcgis.com/attribution/Ocean_Basemap" target="_blank">Esri</a>'
			},
			{
				type: 'Layer',
				id: 'base-enri-raster-imagery',
				title: 'Esri Imagery',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
				maxZoom: 19,
				minZoom: 1,
				attribution:
					'Tiles &copy; Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community'
			},
			{
				type: 'Layer',
				id: 'base-enri-raster-shadedrelief',
				title: 'Esri Shaded Relief',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
				maxZoom: 13,
				minZoom: 1,
				attribution: 'Tiles &copy; ESRI, NAVTEQ, DeLorme'
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

export const OVERLAY_LAYER_DEFAULT: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: '古地図',
		entries: [
			{
				type: 'LayerGroup',
				title: '歴史的農業環境(農研機構)',
				entries: [
					{
						type: 'Layer',
						id: 'overlay-rapid16',
						title: '迅速測図（関東平野、1880年代）',
						url: 'https://habs.rad.naro.go.jp/rapid16/{z}/{x}/{y}.png',
						scheme: 'tms',
						minZoom: 8,
						maxZoom: 17,
						attribution:
							'<a target="_blank" href="https://www.naro.go.jp/laboratory/niaes/">農研機構農業環境研究部門</a>'
					},
					{
						type: 'Layer',
						id: 'overlay-Tokyo5000-900913',
						title: '東京五千分の一（1883年）',
						url: 'https://boiledorange73.sakura.ne.jp/ws/tile/Tokyo5000-900913/{z}/{x}/{y}.png', //"https://habs.rad.naro.go.jp/tokyo5k/{z}/{x}/{y}.png"
						minZoom: 8,
						maxZoom: 18,
						attribution:
							'<a target="_blank" href="https://www.naro.go.jp/laboratory/niaes/">農研機構農業環境研究部門</a>'
					}
				]
			}
		]
	}
];
