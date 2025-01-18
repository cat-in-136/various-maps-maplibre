import type * as MaplibreCompondLayerUI from './maplibre-compound-layer-ui';

import gsi_light from '../../static/assets/map-data/gsi-light.min.json?url';
import gsi_ort_label from '../../static/assets/map-data/gsi-ort-label.min.json?url';
import gsi_ort_hybrid_light from '../../static/assets/map-data/gsi-ort-hybrid-light-catin136.min.json?url';
import gsi_h_std from '../../static/assets/map-data/gsi-h-std.min.json?url';
import gsi_h_pale from '../../static/assets/map-data/gsi-h-pale.min.json?url';
import gsi_railway from '../../static/assets/map-data/gsi-railway.min.json?url';
import gsi_land from '../../static/assets/map-data/gsi-land.min.json?url';
import gsi_river from '../../static/assets/map-data/gsi-river.min.json?url';

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
			},
			{
				type: 'LayerGroup',
				title: 'その他の地図',
				entries: [
					{
						type: 'Layer',
						id: 'extra-gsi-light',
						title: '軽い標準地図',
						url: gsi_light,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-ort-label',
						title: '写真+注記',
						url: gsi_ort_label,
						maxNativeZoom: 18.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-hybrid-light',
						title: '写真+軽い標準地図',
						url: gsi_ort_hybrid_light,
						maxNativeZoom: 18.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-h-std',
						title: '標準+陰影',
						url: gsi_h_std,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-h-pale',
						title: '淡色+陰影',
						url: gsi_h_pale,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-railway',
						title: '鉄道路線図',
						url: gsi_railway,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-land',
						title: '地形だけ地図',
						url: gsi_land,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-river',
						title: '川だけ地図',
						url: gsi_river,
						maxNativeZoom: 17.9
					}
				]
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
				layerFormat: { tile: 'raster' },
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
				layerFormat: { tile: 'raster' },
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
				layerFormat: { tile: 'raster' },
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
				layerFormat: { tile: 'raster' },
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
				layerFormat: { tile: 'raster' },
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
				layerFormat: { tile: 'raster' },
				maxZoom: 13,
				minZoom: 1,
				attribution: 'Tiles &copy; ESRI, NAVTEQ, DeLorme'
			}
		]
	},
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
			},
			// https://maps.qchizu.xyz/layers_txt/layers98.txt
			{
				type: 'LayerGroup',
				title: '今昔マップ',
				entries: [
					{
						type: 'LayerGroup',
						title: '福岡・北九州',
						entries: [
							{
								type: 'Layer',
								id: 'k_fukuoka_00',
								title: '福岡・北九州1922年～1926年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukuoka/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukuoka_01',
								title: '福岡・北九州1936年～1938年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukuoka/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukuoka_02',
								title: '福岡・北九州1948年～1956年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukuoka/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukuoka_03',
								title: '福岡・北九州1967年～1972年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukuoka/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukuoka_04',
								title: '福岡・北九州1982年～1986年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukuoka/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukuoka_05',
								title: '福岡・北九州1991年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukuoka/05/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '佐賀・久留米',
						entries: [
							{
								type: 'Layer',
								id: 'k_saga_2man',
								title: '佐賀・久留米1900年～1911年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/saga/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_saga_00',
								title: '佐賀・久留米1914年～1926年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/saga/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_saga_01',
								title: '佐賀・久留米1931年～1940年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/saga/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_saga_02',
								title: '佐賀・久留米1958年～1964年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/saga/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_saga_03',
								title: '佐賀・久留米1977年～1982年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/saga/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_saga_04',
								title: '佐賀・久留米1998年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/saga/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '大牟田・島原',
						entries: [
							{
								type: 'Layer',
								id: 'k_omuta_00',
								title: '大牟田・島原1910年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omuta/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omuta_01',
								title: '大牟田・島原1941～1942年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omuta/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omuta_02',
								title: '大牟田・島原1970年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omuta/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omuta_03',
								title: '大牟田・島原1983～1987年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omuta/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omuta_04',
								title: '大牟田・島原1993～1994年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omuta/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omuta_05',
								title: '大牟田・島原1999～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omuta/05/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '長崎',
						entries: [
							{
								type: 'Layer',
								id: 'k_nagasaki_2man',
								title: '長崎1900年～1901年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagasaki/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagasaki_00',
								title: '長崎1924年～1926年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagasaki/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagasaki_01',
								title: '長崎1954年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagasaki/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagasaki_02',
								title: '長崎1970年～1970年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagasaki/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagasaki_03',
								title: '長崎1982年～1983年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagasaki/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagasaki_04',
								title: '長崎1996年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagasaki/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '佐世保',
						entries: [
							{
								type: 'Layer',
								id: 'k_sasebo_2man',
								title: '佐世保1900年～1901年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sasebo/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sasebo_00',
								title: '佐世保1924年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sasebo/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sasebo_01',
								title: '佐世保1971年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sasebo/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sasebo_02',
								title: '佐世保1985年～1987年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sasebo/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sasebo_03',
								title: '佐世保1997年～1998年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sasebo/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '熊本',
						entries: [
							{
								type: 'Layer',
								id: 'k_kumamoto_2man',
								title: '熊本1900年～1901年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kumamoto/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kumamoto_00',
								title: '熊本1926年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kumamoto/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kumamoto_01',
								title: '熊本1965年～1971年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kumamoto/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kumamoto_02',
								title: '熊本1983年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kumamoto/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kumamoto_03',
								title: '熊本1998年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kumamoto/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '八代',
						entries: [
							{
								type: 'Layer',
								id: 'k_yatsushiro_00',
								title: '八代1913年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yatsushiro/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yatsushiro_01',
								title: '八代1951年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yatsushiro/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yatsushiro_02',
								title: '八代1968年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yatsushiro/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yatsushiro_03',
								title: '八代1983～1986年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yatsushiro/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yatsushiro_04',
								title: '八代1997～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yatsushiro/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '大分',
						entries: [
							{
								type: 'Layer',
								id: 'k_oita_00',
								title: '大分1914年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/oita/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_oita_01',
								title: '大分1973年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/oita/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_oita_02',
								title: '大分1984年～1986年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/oita/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_oita_03',
								title: '大分1997年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/oita/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '宮崎',
						entries: [
							{
								type: 'Layer',
								id: 'k_miyazaki_00',
								title: '宮崎1902年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyazaki/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_miyazaki_01',
								title: '宮崎1935年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyazaki/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_miyazaki_02',
								title: '宮崎1962年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyazaki/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_miyazaki_03',
								title: '宮崎1979年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyazaki/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_miyazaki_04',
								title: '宮崎1999年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyazaki/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '延岡',
						entries: [
							{
								type: 'Layer',
								id: 'k_nobeoka_00',
								title: '延岡1901年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nobeoka/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nobeoka_01',
								title: '延岡1932～1942年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nobeoka/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nobeoka_02',
								title: '延岡1965年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nobeoka/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nobeoka_03',
								title: '延岡1978～1978年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nobeoka/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nobeoka_04',
								title: '延岡1999～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nobeoka/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '都城',
						entries: [
							{
								type: 'Layer',
								id: 'k_miyakonojyou_00',
								title: '都城1902年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyakonojyou/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_miyakonojyou_01',
								title: '都城1932年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyakonojyou/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_miyakonojyou_02',
								title: '都城1966年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyakonojyou/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_miyakonojyou_03',
								title: '都城1979～1980年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyakonojyou/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_miyakonojyou_04',
								title: '都城1998～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/miyakonojyou/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '鹿児島',
						entries: [
							{
								type: 'Layer',
								id: 'k_kagoshima_5man',
								title: '鹿児島1902年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kagoshima/5man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kagoshima_2man',
								title: '鹿児島1902年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kagoshima/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kagoshima_00',
								title: '鹿児島1932年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kagoshima/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kagoshima_01',
								title: '鹿児島1966年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kagoshima/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kagoshima_02',
								title: '鹿児島1982年～1983年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kagoshima/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kagoshima_03',
								title: '鹿児島1996年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kagoshima/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '沖縄本島南部',
						entries: [
							{
								type: 'Layer',
								id: 'k_okinawas_00',
								title: '沖縄本島南部1919年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/okinawas/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_okinawas_01',
								title: '沖縄本島南部1973年～1975年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/okinawas/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_okinawas_02',
								title: '沖縄本島南部1992年～1994年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/okinawas/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_okinawas_03',
								title: '沖縄本島南部2005年～2008年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/okinawas/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '旭川',
						entries: [
							{
								type: 'Layer',
								id: 'k_asahikawa_00',
								title: '旭川1916年～1917年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/asahikawa/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_asahikawa_01',
								title: '旭川1950年～1952年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/asahikawa/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_asahikawa_02',
								title: '旭川1972年～1974年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/asahikawa/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_asahikawa_03',
								title: '旭川1986年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/asahikawa/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_asahikawa_04',
								title: '旭川1999年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/asahikawa/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '札幌',
						entries: [
							{
								type: 'Layer',
								id: 'k_sapporo_00',
								title: '札幌1916年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sapporo/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sapporo_01',
								title: '札幌1935年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sapporo/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sapporo_02',
								title: '札幌1950年～1952年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sapporo/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sapporo_03',
								title: '札幌1975年～1976年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sapporo/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sapporo_04',
								title: '札幌1995年～1998年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sapporo/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '釧路',
						entries: [
							{
								type: 'Layer',
								id: 'k_kushiro_00',
								title: '釧路1897年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kushiro/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kushiro_01',
								title: '釧路1922年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kushiro/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kushiro_02',
								title: '釧路1958年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kushiro/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kushiro_03',
								title: '釧路1981年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kushiro/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kushiro_04',
								title: '釧路2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kushiro/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '苫小牧',
						entries: [
							{
								type: 'Layer',
								id: 'k_tomakomai_00',
								title: '苫小牧1896年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tomakomai/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tomakomai_01',
								title: '苫小牧1935年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tomakomai/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tomakomai_02',
								title: '苫小牧1954～1955年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tomakomai/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tomakomai_03',
								title: '苫小牧1983～1984年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tomakomai/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tomakomai_04',
								title: '苫小牧1993～1999年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tomakomai/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '帯広',
						entries: [
							{
								type: 'Layer',
								id: 'k_obihiro_00',
								title: '帯広1896年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/obihiro/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_obihiro_01',
								title: '帯広1930年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/obihiro/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_obihiro_02',
								title: '帯広1956～1957年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/obihiro/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_obihiro_03',
								title: '帯広1985年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/obihiro/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_obihiro_04',
								title: '帯広1998～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/obihiro/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '室蘭',
						entries: [
							{
								type: 'Layer',
								id: 'k_muroran_00',
								title: '室蘭1896年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/muroran/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_muroran_01',
								title: '室蘭1917年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/muroran/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_muroran_02',
								title: '室蘭1955年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/muroran/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_muroran_03',
								title: '室蘭1986～1987年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/muroran/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_muroran_04',
								title: '室蘭1998～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/muroran/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '函館',
						entries: [
							{
								type: 'Layer',
								id: 'k_hakodate_00',
								title: '函館1915年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hakodate/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hakodate_01',
								title: '函館1951年～1955年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hakodate/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hakodate_02',
								title: '函館1968年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hakodate/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hakodate_03',
								title: '函館1986年～1989年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hakodate/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hakodate_04',
								title: '函館1996年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hakodate/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '青森',
						entries: [
							{
								type: 'Layer',
								id: 'k_aomori_00',
								title: '青森1912年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aomori/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_aomori_01',
								title: '青森1939年～1955年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aomori/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_aomori_02',
								title: '青森1970年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aomori/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_aomori_03',
								title: '青森1984年～1989年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aomori/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_aomori_04',
								title: '青森2003年～2011年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aomori/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '弘前',
						entries: [
							{
								type: 'Layer',
								id: 'k_hirosaki_00',
								title: '弘前1912年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hirosaki/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hirosaki_01',
								title: '弘前1939年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hirosaki/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hirosaki_02',
								title: '弘前1970年～1971年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hirosaki/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hirosaki_03',
								title: '弘前1980年～1986年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hirosaki/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hirosaki_04',
								title: '弘前1994年～1997年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hirosaki/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '盛岡',
						entries: [
							{
								type: 'Layer',
								id: 'k_morioka_00',
								title: '盛岡1811年～1912年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/morioka/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_morioka_01',
								title: '盛岡1939年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/morioka/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_morioka_02',
								title: '盛岡1968年～1969年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/morioka/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_morioka_03',
								title: '盛岡1983年～1988年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/morioka/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_morioka_04',
								title: '盛岡1999年～2002年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/morioka/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '岩手県南',
						entries: [
							{
								type: 'Layer',
								id: 'k_iwatekennan_00',
								title: '岩手県南1913年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iwatekennan/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_iwatekennan_01',
								title: '岩手県南1951年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iwatekennan/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_iwatekennan_02',
								title: '岩手県南1968年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iwatekennan/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_iwatekennan_03',
								title: '岩手県南1985～1986年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iwatekennan/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_iwatekennan_04',
								title: '岩手県南1996～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iwatekennan/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '東北地方太平洋岸(5万分1)',
						entries: [
							{
								type: 'Layer',
								id: 'k_tohoku_pacific_coast_00',
								title: '東北地方太平洋岸(5万分1)1901年～1913年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tohoku_pacific_coast/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tohoku_pacific_coast_01',
								title: '東北地方太平洋岸(5万分1)1949年～1953年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tohoku_pacific_coast/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tohoku_pacific_coast_02',
								title: '東北地方太平洋岸(5万分1)1969年～1982年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tohoku_pacific_coast/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tohoku_pacific_coast_03',
								title: '東北地方太平洋岸(5万分1)1990年～2008年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tohoku_pacific_coast/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '仙台',
						entries: [
							{
								type: 'Layer',
								id: 'k_sendai_00',
								title: '仙台1928年～1933年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sendai/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sendai_01',
								title: '仙台1946年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sendai/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sendai_02',
								title: '仙台1963年～1967年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sendai/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sendai_03',
								title: '仙台1977年～1978年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sendai/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_sendai_04',
								title: '仙台1995年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/sendai/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '秋田',
						entries: [
							{
								type: 'Layer',
								id: 'k_akita_00',
								title: '秋田1912年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/akita/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_akita_01',
								title: '秋田1971年～1972年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/akita/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_akita_02',
								title: '秋田1985年～1990年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/akita/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_akita_03',
								title: '秋田2006年～2007年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/akita/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '山形',
						entries: [
							{
								type: 'Layer',
								id: 'k_yamagata_2man',
								title: '山形1901年～1903年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamagata/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yamagata_00',
								title: '山形1931年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamagata/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yamagata_01',
								title: '山形1970年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamagata/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yamagata_02',
								title: '山形1980年～1989年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamagata/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yamagata_03',
								title: '山形1999年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamagata/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '米沢',
						entries: [
							{
								type: 'Layer',
								id: 'k_yonezawa_00',
								title: '米沢1908～1910年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yonezawa/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yonezawa_01',
								title: '米沢1952～1953年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yonezawa/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yonezawa_02',
								title: '米沢1970～1973年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yonezawa/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yonezawa_03',
								title: '米沢1984年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yonezawa/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yonezawa_04',
								title: '米沢1999～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yonezawa/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '庄内',
						entries: [
							{
								type: 'Layer',
								id: 'k_syonai_00',
								title: '庄内1913年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/syonai/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_syonai_01',
								title: '庄内1934年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/syonai/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_syonai_02',
								title: '庄内1974年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/syonai/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_syonai_03',
								title: '庄内1987年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/syonai/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_syonai_04',
								title: '庄内1997～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/syonai/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '福島',
						entries: [
							{
								type: 'Layer',
								id: 'k_fukushima_00',
								title: '福島1908年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukushima/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukushima_01',
								title: '福島1931年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukushima/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukushima_02',
								title: '福島1972年～1973年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukushima/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukushima_03',
								title: '福島1983年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukushima/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukushima_04',
								title: '福島1996年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukushima/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '会津',
						entries: [
							{
								type: 'Layer',
								id: 'k_aizu_00',
								title: '会津1908年～1910年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aizu/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_aizu_01',
								title: '会津1931年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aizu/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_aizu_02',
								title: '会津1972年～1975年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aizu/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_aizu_03',
								title: '会津1988年～1991年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aizu/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_aizu_04',
								title: '会津1997年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/aizu/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '関東(5万分1)',
						entries: [
							{
								type: 'Layer',
								id: 'k_kanto_00',
								title: '関東(5万分1)1894年～1915年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kanto/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kanto_01',
								title: '関東(5万分1)1928年～1945年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kanto/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kanto_02',
								title: '関東(5万分1)1972年～1982年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kanto/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kanto_03',
								title: '関東(5万分1)1988年～2008年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kanto/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '首都圏',
						entries: [
							{
								type: 'Layer',
								id: 'k_tokyo50_2man',
								title: '首都圏1896年～1909年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokyo50_00',
								title: '首都圏1917年～1924年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokyo50_01',
								title: '首都圏1927年～1939年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokyo50_02',
								title: '首都圏1944年～1954年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokyo50_03',
								title: '首都圏1965年～1968年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokyo50_04',
								title: '首都圏1975年～1978年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokyo50_05',
								title: '首都圏1983年～1987年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/05/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokyo50_06',
								title: '首都圏1992年～1995年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/06/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokyo50_07',
								title: '首都圏1998年～2005年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokyo50/07/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '新潟',
						entries: [
							{
								type: 'Layer',
								id: 'k_niigata_00',
								title: '新潟1911年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/niigata/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_niigata_01',
								title: '新潟1931年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/niigata/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_niigata_02',
								title: '新潟1967年～1968年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/niigata/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_niigata_03',
								title: '新潟1983年～1985年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/niigata/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_niigata_04',
								title: '新潟2000年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/niigata/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '金沢・富山',
						entries: [
							{
								type: 'Layer',
								id: 'k_kanazawa_2man',
								title: '金沢・富山1909年～1910年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kanazawa/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kanazawa_00',
								title: '金沢・富山1930年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kanazawa/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kanazawa_01',
								title: '金沢・富山1968年～1969年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kanazawa/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kanazawa_02',
								title: '金沢・富山1981年～1985年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kanazawa/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kanazawa_03',
								title: '金沢・富山1994年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kanazawa/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '浜松・豊橋',
						entries: [
							{
								type: 'Layer',
								id: 'k_hamamatsu_2man',
								title: '浜松・豊橋1889年～1890年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hamamatsu/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hamamatsu_00',
								title: '浜松・豊橋1916年～1918年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hamamatsu/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hamamatsu_01',
								title: '浜松・豊橋1938年～1950年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hamamatsu/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hamamatsu_02',
								title: '浜松・豊橋1956年～1959年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hamamatsu/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hamamatsu_03',
								title: '浜松・豊橋1975年～1988年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hamamatsu/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hamamatsu_04',
								title: '浜松・豊橋1988年～1995年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hamamatsu/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hamamatsu_05',
								title: '浜松・豊橋1996年～2010年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hamamatsu/05/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '長野',
						entries: [
							{
								type: 'Layer',
								id: 'k_nagano_00',
								title: '長野1912年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagano/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagano_01',
								title: '長野1937年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagano/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagano_02',
								title: '長野1960年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagano/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagano_03',
								title: '長野1972年～1973年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagano/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagano_04',
								title: '長野1985年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagano/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_nagano_05',
								title: '長野2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/nagano/05/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '松本',
						entries: [
							{
								type: 'Layer',
								id: 'k_matsumoto_00',
								title: '松本1910年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsumoto/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsumoto_01',
								title: '松本1931年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsumoto/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsumoto_02',
								title: '松本1974年～1975年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsumoto/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsumoto_03',
								title: '松本1987年～1992年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsumoto/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsumoto_04',
								title: '松本1996年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsumoto/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '伊那',
						entries: [
							{
								type: 'Layer',
								id: 'k_ina_00',
								title: '伊那1911年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/ina/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_ina_01',
								title: '伊那1951～1952年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/ina/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_ina_02',
								title: '伊那1976年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/ina/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_ina_03',
								title: '伊那1987～1990年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/ina/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_ina_04',
								title: '伊那1998～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/ina/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '福井',
						entries: [
							{
								type: 'Layer',
								id: 'k_fukui_2man',
								title: '福井1909年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukui/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukui_00',
								title: '福井1930年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukui/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukui_01',
								title: '福井1969年～1973年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukui/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukui_02',
								title: '福井1988年～1990年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukui/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_fukui_03',
								title: '福井1996年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/fukui/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '中京圏',
						entries: [
							{
								type: 'Layer',
								id: 'k_chukyo_2man',
								title: '中京圏1888年～1898年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_chukyo_00',
								title: '中京圏1920年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_chukyo_01',
								title: '中京圏1932年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_chukyo_02',
								title: '中京圏1937年～1938年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_chukyo_03',
								title: '中京圏1947年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_chukyo_04',
								title: '中京圏1959年～1960年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_chukyo_05',
								title: '中京圏1968年～1973年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/05/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_chukyo_06',
								title: '中京圏1976年～1980年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/06/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_chukyo_07',
								title: '中京圏1984年～1989年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/07/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_chukyo_08',
								title: '中京圏1992年～1996年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/chukyo/08/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '津',
						entries: [
							{
								type: 'Layer',
								id: 'k_tsu_2man',
								title: '津1892年～1898年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tsu/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tsu_00',
								title: '津1920年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tsu/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tsu_01',
								title: '津1937年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tsu/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tsu_02',
								title: '津1959年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tsu/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tsu_03',
								title: '津1980年～1982年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tsu/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tsu_04',
								title: '津1991年～1999年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tsu/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '伊賀',
						entries: [
							{
								type: 'Layer',
								id: 'k_iga_00',
								title: '伊賀1892年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iga/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_iga_01',
								title: '伊賀1937年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iga/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 15,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_iga_02',
								title: '伊賀1968年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iga/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_iga_03',
								title: '伊賀1980～1986年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iga/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_iga_04',
								title: '伊賀1996～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/iga/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '近江',
						entries: [
							{
								type: 'Layer',
								id: 'k_omi_2man',
								title: '近江1891～1909年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omi/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omi_00',
								title: '近江1920～1922年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omi/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omi_01',
								title: '近江1954年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omi/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omi_02',
								title: '近江1967～1971年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omi/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omi_03',
								title: '近江1979～1986年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omi/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_omi_04',
								title: '近江1992～1999年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/omi/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '京阪神圏',
						entries: [
							{
								type: 'Layer',
								id: 'k_keihansin_2man',
								title: '京阪神圏1892年～1910年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_keihansin_00',
								title: '京阪神圏1922年～1923年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_keihansin_01',
								title: '京阪神圏1927年～1935年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_keihansin_02',
								title: '京阪神圏1947年～1950年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_keihansin_03',
								title: '京阪神圏1954年～1956年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_keihansin_03x',
								title: '京阪神圏1961年～1964年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/03x/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_keihansin_04',
								title: '京阪神圏1967年～1970年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_keihansin_05',
								title: '京阪神圏1975年～1979年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/05/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_keihansin_06',
								title: '京阪神圏1983年～1988年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/06/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_keihansin_07',
								title: '京阪神圏1993年～1997年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/keihansin/07/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '姫路',
						entries: [
							{
								type: 'Layer',
								id: 'k_himeji_2man',
								title: '姫路1903年～1910年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/himeji/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_himeji_00',
								title: '姫路1923年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/himeji/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_himeji_01',
								title: '姫路1967年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/himeji/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_himeji_02',
								title: '姫路1981年～1985年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/himeji/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_himeji_03',
								title: '姫路1997年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/himeji/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '和歌山',
						entries: [
							{
								type: 'Layer',
								id: 'k_wakayama_2man',
								title: '和歌山1908年～1912年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/wakayama/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_wakayama_00',
								title: '和歌山1934年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/wakayama/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_wakayama_01',
								title: '和歌山1947年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/wakayama/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_wakayama_02',
								title: '和歌山1966年～1967年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/wakayama/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_wakayama_03',
								title: '和歌山1984年～1985年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/wakayama/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_wakayama_04',
								title: '和歌山1998年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/wakayama/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '鳥取',
						entries: [
							{
								type: 'Layer',
								id: 'k_tottori_2man',
								title: '鳥取1897年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tottori/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tottori_00',
								title: '鳥取1932年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tottori/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tottori_01',
								title: '鳥取1973年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tottori/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tottori_02',
								title: '鳥取1988年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tottori/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tottori_03',
								title: '鳥取1999年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tottori/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '松江・米子',
						entries: [
							{
								type: 'Layer',
								id: 'k_matsue_00',
								title: '松江・米子1915年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsue/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsue_01',
								title: '松江・米子1934年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsue/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsue_02',
								title: '松江・米子1975年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsue/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsue_03',
								title: '松江・米子1989年～1990年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsue/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsue_04',
								title: '松江・米子1997年～2003年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsue/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '岡山・福山',
						entries: [
							{
								type: 'Layer',
								id: 'k_okayama_2man',
								title: '岡山・福山1895年～1897年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/okayama/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_okayama_00',
								title: '岡山・福山1925年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/okayama/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_okayama_01',
								title: '岡山・福山1965年～1970年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/okayama/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_okayama_02',
								title: '岡山・福山1978年～1984年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/okayama/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_okayama_03',
								title: '岡山・福山1990年～1998年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/okayama/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '広島',
						entries: [
							{
								type: 'Layer',
								id: 'k_hiroshima_2man',
								title: '広島1894～1899年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hiroshima/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hiroshima_00',
								title: '広島1925～1932年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hiroshima/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hiroshima_01',
								title: '広島1950～1954年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hiroshima/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hiroshima_02',
								title: '広島1967～1969年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hiroshima/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hiroshima_03',
								title: '広島1984～1990年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hiroshima/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_hiroshima_04',
								title: '広島1992～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/hiroshima/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '山口',
						entries: [
							{
								type: 'Layer',
								id: 'k_yamaguchi_2man',
								title: '山口1897年～1909年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamaguchi/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yamaguchi_00',
								title: '山口1922年～1927年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamaguchi/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yamaguchi_01',
								title: '山口1936年～1951年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamaguchi/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yamaguchi_02',
								title: '山口1969年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamaguchi/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yamaguchi_03',
								title: '山口1983年～1989年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamaguchi/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_yamaguchi_04',
								title: '山口2000年～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/yamaguchi/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '徳島',
						entries: [
							{
								type: 'Layer',
								id: 'k_tokushima_2man',
								title: '徳島1896年～1909年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokushima/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokushima_00',
								title: '徳島1917年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokushima/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokushima_01',
								title: '徳島1928年～1934年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokushima/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokushima_02',
								title: '徳島1969年～1970年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokushima/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokushima_03',
								title: '徳島1981年～1987年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokushima/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_tokushima_04',
								title: '徳島1997年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/tokushima/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '高松',
						entries: [
							{
								type: 'Layer',
								id: 'k_takamatsu_2man',
								title: '高松1896年～1910年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/takamatsu/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_takamatsu_00',
								title: '高松1928年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/takamatsu/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_takamatsu_01',
								title: '高松1969年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/takamatsu/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_takamatsu_02',
								title: '高松1983年～1984年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/takamatsu/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_takamatsu_03',
								title: '高松1990年～2000年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/takamatsu/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '松山',
						entries: [
							{
								type: 'Layer',
								id: 'k_matsuyama_2man',
								title: '松山1903年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsuyama/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsuyama_00',
								title: '松山1928年～1955年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsuyama/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsuyama_01',
								title: '松山1968年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsuyama/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsuyama_02',
								title: '松山1985年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsuyama/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_matsuyama_03',
								title: '松山1998年～1999年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/matsuyama/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '東予',
						entries: [
							{
								type: 'Layer',
								id: 'k_toyo_00',
								title: '東予1898～1906年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/toyo/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_toyo_01',
								title: '東予1928年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/toyo/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_toyo_02',
								title: '東予1966～1969年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/toyo/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_toyo_03',
								title: '東予1984～1989年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/toyo/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_toyo_04',
								title: '東予1994～2001年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/toyo/04/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: '高知',
						entries: [
							{
								type: 'Layer',
								id: 'k_kochi_2man',
								title: '高知1906年～1907年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kochi/2man/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kochi_00',
								title: '高知1933年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kochi/00/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kochi_01',
								title: '高知1965年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kochi/01/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kochi_02',
								title: '高知1982年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kochi/02/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							},
							{
								type: 'Layer',
								id: 'k_kochi_03',
								title: '高知1998年～2003年',
								url: 'https://ktgis.net/kjmapw/kjtilemap/kochi/03/{z}/{x}/{y}.png',
								scheme: 'tms',
								attribution:
									'<a target="_blank"href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>',
								minZoom: 8,
								maxZoom: 17,
								maxNativeZoom: 16,
								html: '<div class="gsi_layerinfo_title">今昔マップ（旧版地形図）</div><br>縮尺：1:25,000（一部1:20,000、1:50,000）<br>発行者：国土地理院、地理調査所、陸地測量部<br>測量年：<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>で確認できます。<br>※この地図は、時系列地形図閲覧サイト「<a target="_blank" href="http://ktgis.net/kjmapw/index.html">今昔マップ on the web</a>」（(C)谷 謙二）で配信されている地図タイルを読み込んで表示しています。使用に当たっては、<a target="_blank" href="http://ktgis.net/kjmapw/note.html">同Webサイトの定める規約</a>に従ってください。'
							}
						]
					}
				]
			}
		]
	},
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
