import type { LayerConfigEntry } from '$lib/layer-config';

import osm_liberty_style from '$lib/static/assets/map-data/osm-liberty-style.min.json?url';
import osm_liberty_en_style from '$lib/static/assets/map-data/osm-liberty-en-style.min.json?url';
import osm_maptiler_3d_style from '$lib/static/assets/map-data/osm-maptiler-3d-gl-style.min.json?url';
import osm_railways_catin136 from '$lib/static/assets/map-data/osm-railways-catin136.min.overlay.json?url';
import openrailwaymap_style_standard_light from '$lib/static/assets/map-data/openrailwaymap-style-standard-infrastructure.overlay.json?url';
import openrailwaymap_style_standard_speed from '$lib/static/assets/map-data/openrailwaymap-style-standard-speed.overlay.json?url';
import openrailwaymap_style_standard_train_protection from '$lib/static/assets/map-data/openrailwaymap-style-standard-train-protection.overlay.json?url';
import openrailwaymap_style_standard_electrification from '$lib/static/assets/map-data/openrailwaymap-style-standard-electrification.overlay.json?url';
import openrailwaymap_style_standard_tracks from '$lib/static/assets/map-data/openrailwaymap-style-standard-tracks.overlay.json?url';
import openrailwaymap_style_standard_operator from '$lib/static/assets/map-data/openrailwaymap-style-standard-operator.overlay.json?url';
import openrailwaymap_style_standard_routes from '$lib/static/assets/map-data/openrailwaymap-style-standard-routes.overlay.json?url';
import openrailwaymap_style_standard_light_abandoned_razed from '$lib/static/assets/map-data/openrailwaymap-style-standard-infrastructure-abandoned-razed.overlay.json?url';

export const OSM_VECTOR_BASE_LAYERS: LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'OSM Vector',
		entries: [
			{
				type: 'LayerGroup',
				title: 'OSMFJ',
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
						type: 'Layer',
						id: 'base-osm-maptiler-3d',
						title: 'OSM Maptiler 3D',
						url: osm_maptiler_3d_style
					},
					{
						type: 'LayerGroup',
						title: 'OSM Liberty',
						entries: [
							{
								type: 'Layer',
								id: 'base-osm-liberty',
								title: 'OSM Liberty',
								url: osm_liberty_style
							},
							{
								type: 'Layer',
								id: 'base-osm-liberty-en',
								title: 'OSM Liberty English',
								url: osm_liberty_en_style
							}
						]
					},
					{
						type: 'LayerGroup',
						title: 'tris5572/map-style',
						entries: [
							{
								type: 'Layer',
								id: 'base-tris5572-dark',
								title: 'dark',
								url: 'https://tris5572.github.io/map-style/dark/style.json'
							},
							{
								type: 'Layer',
								id: 'base-tris5572-light',
								title: 'light',
								url: 'https://tris5572.github.io/map-style/light/style.json'
							}
						]
					},
					{
						type: 'LayerGroup',
						title: 'optgeo/openmaptiles',
						entries: [
							{
								type: 'Layer',
								id: 'base-optgeo-openmaptiles-build',
								title: '3D Building',
								url: 'https://optgeo.github.io/openmaptiles/build.json'
							},
							{
								type: 'Layer',
								id: 'base-optgeo-openmaptiles-green',
								title: 'Green',
								url: 'https://optgeo.github.io/openmaptiles/green.json'
							},
							{
								type: 'Layer',
								id: 'base-optgeo-openmaptiles-style',
								title: 'Plain',
								url: 'https://optgeo.github.io/openmaptiles/style.json'
							}
						]
					}
				]
			},
			{
				type: 'LayerGroup',
				title: 'KotobaMedia Tileserver',
				entries: [
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-ja-light',
						title: 'OSM Japan Light',
						url: 'https://tiles.kmproj.com/styles/osm-ja-light.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-ja-dark',
						title: 'OSM Japan Dark',
						url: 'https://tiles.kmproj.com/styles/osm-ja-dark.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-ja-grayscale',
						title: 'OSM Japan Grayscale',
						url: 'https://tiles.kmproj.com/styles/osm-ja-grayscale.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-ja-black',
						title: 'OSM Japan Black',
						url: 'https://tiles.kmproj.com/styles/osm-ja-black.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-ja-white',
						title: 'OSM Japan White',
						url: 'https://tiles.kmproj.com/styles/osm-ja-white.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-en-light',
						title: 'OSM Japan EN Light',
						url: 'https://tiles.kmproj.com/styles/osm-en-light.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-en-dark',
						title: 'OSM Japan EN Dark',
						url: 'https://tiles.kmproj.com/styles/osm-en-dark.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-en-grayscale',
						title: 'OSM Japan EN Grayscale',
						url: 'https://tiles.kmproj.com/styles/osm-en-grayscale.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-en-black',
						title: 'OSM Japan EN Black',
						url: 'https://tiles.kmproj.com/styles/osm-en-black.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-osm-en-white',
						title: 'OSM Japan EN White',
						url: 'https://tiles.kmproj.com/styles/osm-en-white.json'
					},
					{
						type: 'Layer',
						id: 'base-kotobamedia-print-handwriting',
						title: 'Print Handwriting',
						url: 'https://tiles.kmproj.com/styles/print-handwriting.json'
					}
				]
			},
			{
				type: 'LayerGroup',
				title: 'Netsyms Basemaps',
				entries: [
					{
						type: 'Layer',
						id: 'base-netsyms-osm-liberty',
						title: 'OSM Liberty',
						url: 'https://maps.netsyms.net/styles/osm-liberty/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-klokantech-basic',
						title: 'Klokantech Basic',
						url: 'https://maps.netsyms.net/styles/klokantech-basic/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-klokantech-3d',
						title: 'Klokantech 3D',
						url: 'https://maps.netsyms.net/styles/klokantech-3d/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-osm-liberty-printmaps',
						title: 'OSM Liberty: Print Mode',
						url: 'https://maps.netsyms.net/styles/osm-liberty-printmaps/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-osm-liberty-hillshading',
						title: 'OSM Liberty with hillshading',
						url: 'https://maps.netsyms.net/styles/osm-liberty-hillshading/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-opentopomap',
						title: 'OpenTopoMap',
						url: 'https://maps.netsyms.net/styles/opentopomap/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-klokantech-terrain',
						title: 'Klokantech Terrain',
						url: 'https://maps.netsyms.net/styles/klokantech-terrain/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-klokantech-terrain-freehills',
						title: 'Klokantech Terrain with Free Hillshading',
						url: 'https://maps.netsyms.net/styles/klokantech-terrain-freehills/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-positron',
						title: 'Positron',
						url: 'https://maps.netsyms.net/styles/positron/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-toner',
						title: 'Toner',
						url: 'https://maps.netsyms.net/styles/toner/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-cassini',
						title: 'Cassini',
						url: 'https://maps.netsyms.net/styles/cassini/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-osm-liberty-dark',
						title: 'OSM Liberty Dark',
						url: 'https://maps.netsyms.net/styles/osm-liberty-dark/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-dark-matter',
						title: 'Dark Matter',
						url: 'https://maps.netsyms.net/styles/dark-matter/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-fiord-color',
						title: 'Fiord Color',
						url: 'https://maps.netsyms.net/styles/fiord-color/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-oled-black',
						title: 'OLED Black',
						url: 'https://maps.netsyms.net/styles/oled-black/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-terranquest-3d',
						title: 'TerranQuest 3D',
						url: 'https://maps.netsyms.net/styles/terranquest-3d/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-terranquest-flat',
						title: 'TerranQuest Flat',
						url: 'https://maps.netsyms.net/styles/terranquest-flat/style.json'
					},
					{
						type: 'Layer',
						id: 'base-netsyms-terranquest-simple',
						title: 'TerranQuest Simple',
						url: 'https://maps.netsyms.net/styles/terranquest-simple/style.json'
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
				title: 'Overture Maps',
				entries: [
					{
						type: 'Layer',
						id: 'base-overture-default',
						title: 'Default',
						url: 'https://cholmes.github.io/overture-pmtiles-styles/style.json'
					},
					{
						type: 'Layer',
						id: 'base-overture-satellite',
						title: 'Satellite',
						url: 'https://cholmes.github.io/overture-pmtiles-styles/style-satellite.json'
					},
					{
						type: 'Layer',
						id: 'base-overture-dark',
						title: 'Dark',
						url: 'https://cholmes.github.io/overture-pmtiles-styles/style-dark.json'
					},
					{
						type: 'Layer',
						id: 'base-overture-positron',
						title: 'Positron',
						url: 'https://cholmes.github.io/overture-pmtiles-styles/style-positron.json'
					}
				]
			}
		]
	}
];

export const OSM_RASTER_BASE_LAYERS: LayerConfigEntry[] = [
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

export const OSM_VECTOR_OVERLAY_LAYERS: LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'OSM Vector',
		entries: [
			{
				type: 'LayerGroup',
				title: 'OSMFJ',
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
					},
					{
						type: 'Layer',
						id: 'overlay-osm-mountains',
						title: 'OSM OpenMapTiles Mountain Peaks',
						url: 'https://tile.openstreetmap.jp/styles/openmaptiles/style.json',
						styleSwapOptions: {
							transformStyle: (_previous, next) => {
								return { ...next, layers: next.layers.filter((v) => v.id === 'mountain_peak') };
							}
						}
					},
					{
						type: 'Layer',
						id: 'overlay-osm-liberty',
						title: 'OSM Liberty Labels',
						url: osm_liberty_style,
						styleSwapOptions: {
							transformStyle: (_previous, next) => {
								return { ...next, layers: next.layers.filter((v) => v.type === 'symbol') };
							}
						}
					},
					{
						type: 'Layer',
						id: 'overlay-osm-liberty-en',
						title: 'OSM Liberty English Labels',
						url: osm_liberty_en_style,
						styleSwapOptions: {
							transformStyle: (_previous, next) => {
								return { ...next, layers: next.layers.filter((v) => v.type === 'symbol') };
							}
						}
					},
					{
						type: 'Layer',
						id: 'overlay-osm-liberty-building-3d',
						title: 'OSM Liberty Building 3D',
						url: osm_liberty_style,
						styleSwapOptions: {
							transformStyle: (_previous, next) => {
								return { ...next, layers: next.layers.filter((v) => v.type === 'fill-extrusion') };
							}
						}
					},
					{
						type: 'Layer',
						id: 'overlay-osm-3d-building',
						title: 'OSM Maptiler 3D Building (Color)',
						url: osm_maptiler_3d_style,
						styleSwapOptions: {
							transformStyle: (_previous, next) => {
								return { ...next, layers: next.layers.filter((v) => v.type === 'fill-extrusion') };
							}
						}
					},
					{
						type: 'Layer',
						id: 'overlay-osm-railways-catin136',
						title: 'OSM Railways',
						url: osm_railways_catin136
					}
				]
			},
			{
				type: 'LayerGroup',
				title: 'Netsyms',
				entries: [
					{
						type: 'Layer',
						id: 'overlay-netsyms-opentopomap-contours',
						title: 'OpenTopoMap Contours',
						url: 'https://maps.netsyms.net/styles/opentopomap/style.json',
						styleSwapOptions: {
							transformStyle: (_previous, next) => {
								return {
									...next,
									sources: { contours: next.sources['contours'] },
									layers: next.layers.filter(
										(v) => (v.type === 'symbol' || v.type === 'line') && v.source === 'contours'
									)
								};
							}
						}
					}
				]
			},
			{
				type: 'LayerGroup',
				title: 'OpenRailwayMap',
				entries: [
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-style-standard-infrastructure',
						title: 'Infrastructure',
						url: openrailwaymap_style_standard_light
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-style-standard-speed',
						title: 'Speed',
						url: openrailwaymap_style_standard_speed
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-style-standard-train-protection',
						title: 'Train Protection',
						url: openrailwaymap_style_standard_train_protection
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-style-standard-electrification',
						title: 'Electrification',
						url: openrailwaymap_style_standard_electrification
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-style-standard-tracks',
						title: 'Tracks',
						url: openrailwaymap_style_standard_tracks
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-style-standard-operator',
						title: 'Operator',
						url: openrailwaymap_style_standard_operator
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-style-standard-routes',
						title: 'Routes',
						url: openrailwaymap_style_standard_routes
					},
					{
						type: 'Layer',
						id: 'overlay-openrailwaymap-style-standard-infrastructure-abandoned-razed',
						title: 'Abandoned Razed',
						url: openrailwaymap_style_standard_light_abandoned_razed
					}
				]
			}
		]
	}
];

export const OSM_RASTER_OVERLAY_LAYERS: LayerConfigEntry[] = [
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
