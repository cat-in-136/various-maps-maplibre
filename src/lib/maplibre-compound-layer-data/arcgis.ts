import * as maplibregl from 'maplibre-gl';

import * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';
import { DynamicAttributionControl } from '../dynamic_attribution_control';
import arcgis_osm_junction_names from '../../../static/assets/map-data/arcgis-OpenStreetMap-v2-junction-names.min.overlay.json?url';

type ArcGISCoverageArea = {
	bbox: [number, number, number, number];
	score: number;
	zoomMax: number;
	zoomMin: number;
};

type ArcGISContributor = {
	attribution: string;
	coverageAreas: ArcGISCoverageArea[];
};

type ArcGISAttributionData = {
	contributors: ArcGISContributor[];
};

const ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE: maplibregl.TransformStyleFunction = (
	_previous,
	next
) => {
	const sprite =
		Array.isArray(next.sprite) || next.sprite?.startsWith('https://')
			? next.sprite
			: 'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/resources/sprites/sprite';
	const glyphs = next.glyphs?.startsWith('https://')
		? next.glyphs
		: 'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf';
	return {
		...next,
		sprite,
		glyphs,
		sources: {
			esri: {
				type: 'vector',
				tiles: [
					'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf'
				],
				maxzoom: 22,
				attribution:
					'Sources: Esri, TomTom, Garmin, FAO, NOAA, USGS, © OpenStreetMap contributors, and the GIS User Community'
			}
		}
	};
};

const ARCGIS_OSM_TRANSFORM_STYLE: maplibregl.TransformStyleFunction = (_previous, next) => {
	const sprite =
		Array.isArray(next.sprite) || next.sprite?.startsWith('https://')
			? next.sprite
			: 'https://basemaps.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer/resources/sprites/sprite';
	const glyphs = next.glyphs?.startsWith('https://')
		? next.glyphs
		: 'https://basemaps.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf';
	return {
		...next,
		sprite,
		glyphs,
		sources: {
			esri: {
				type: 'vector',
				tiles: [
					'https://basemaps.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf'
				],
				maxzoom: 22,
				attribution:
					'Map data © OpenStreetMap contributors, Microsoft, Facebook, Google, Esri Community Maps contributors, Map layer by Esri'
			},
			contours: {
				type: 'vector',
				tiles: [
					'https://basemaps.arcgis.com/arcgis/rest/services/World_Contours_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf'
				],
				maxzoom: 22
			},
			hillshade: {
				type: 'vector',
				tiles: [
					'https://basemaps.arcgis.com/arcgis/rest/services/World_Hillshade_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf'
				],
				maxzoom: 22
			}
		}
	};
};

export const ARCGIS_VECTOR_BASE_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'ArcGIS Vector',
		entries: [
			{
				type: 'Layer',
				id: 'base-arcgis-World-Basemap-v2',
				title: 'World Basemap v2',
				url: 'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-World-Street-Map-Local',
				title: 'World Street Map (Local Language)',
				url: 'https://www.arcgis.com/sharing/rest/content/items/7549fb39378a485ca0c9d18a2d968c15/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-World-Navigation-Map',
				title: 'World Navigation Map',
				url: 'https://www.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-World-Navigation-Map-Local',
				title: 'World Navigation Map (Local Language)',
				url: 'https://www.arcgis.com/sharing/rest/content/items/72be31d1fa6a42fc895d9a3c0fd8aeef/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-World-Topographic-Map',
				title: 'World Topographic Map',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-Light-Gray-Canvas-Base',
				title: 'Light Gray Canvas Base',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-Outline',
				title: 'Outline',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/ba99a4a4f5ce48debbeca6713e051f1e/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-Dark-Gray-Canvas-Base',
				title: 'Dark Gray Canvas Base',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-Modern-Antique',
				title: 'Modern Antique',
				url: 'https://www.arcgis.com/sharing/rest/content/items/effe3475f05a4d608e66fd6eeb2113c0/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-Mid-Centry',
				title: 'Mid-Century',
				url: 'https://www.arcgis.com/sharing/rest/content/items/7675d44bb1e4428aa2c30a9b68f97822/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-Color-Pencil',
				title: 'Color Pencil',
				url: 'https://www.arcgis.com/sharing/rest/content/items/4cf7e1fb9f254dcda9c8fbadb15cf0f8/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-Nova',
				title: 'Nova',
				url: 'https://www.arcgis.com/sharing/rest/content/items/75f4dfdff19e445395653121a95a85db/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'base-arcgis-OpenStreetMap-v2',
				title: 'OpenStreetMap_v2',
				url: 'https://basemaps.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_OSM_TRANSFORM_STYLE
				}
			}
		]
	}
];

export const ARCGIS_RASTER_BASE_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'ArcGIS Raster',
		entries: [
			{
				type: 'Layer',
				id: 'base-arcgis-esri-raster-topograph',
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
				id: 'base-arcgis-esri-raster-streets',
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
				id: 'base-arcgis-esri-raster-natgeo',
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
				id: 'base-arcgis-esri-raster-ocean',
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
				id: 'base-arcgis-esri-raster-imagery',
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
				id: 'base-arcgis-esri-raster-shadedrelief',
				title: 'Esri Shaded Relief',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
				layerFormat: { tile: 'raster' },
				maxZoom: 13,
				minZoom: 1,
				attribution: 'Tiles &copy; ESRI, NAVTEQ, DeLorme'
			}
		]
	}
];

export const ARCGIS_VECTOR_OVERLAY_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: 'ArcGIS Vector',
		entries: [
			{
				type: 'Layer',
				id: 'overlay-arcgis-Hybrid-Reference-Layer',
				title: 'Hybrid Reference Layer',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/30d6b8271e1849cd9c3042060001f425/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'overlay-arcgis-Hybrid-Reference-Layer',
				title: 'Hybrid Reference Layer (Local Language)',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/2a2e806e6e654ea78ecb705149ceae9f/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'overlay-arcgis-Light-Gray-Canvas-Reference',
				title: 'Light Gray Canvas Reference',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'overlay-arcgis-Light-Gray-Canvas-Reference-Local',
				title: 'Light Gray Canvas Reference (Local Language)',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/3ffec1551cd14606a286622c634b0bb4/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'overlay-arcgis-Dark-Gray-Canvas-Reference',
				title: 'Dark Gray Canvas Reference',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'overlay-arcgis-Dark-Gray-Canvas-Reference-Local',
				title: 'Dark Gray Canvas Reference (Local Language)',
				url: 'https://esri.maps.arcgis.com/sharing/rest/content/items/7465191cfa1f425fbe41e4d44450d559/resources/styles/root.json',
				styleSwapOptions: {
					transformStyle: ARCGIS_WORLD_BASEMAP_TRANSFORM_STYLE
				}
			},
			{
				type: 'Layer',
				id: 'overlay-arcgis-OSM-Junction-Names',
				title: '交差点名',
				url: arcgis_osm_junction_names
			},
			{
				type: 'Layer',
				id: 'overlay-arcgis-Railway-ksj',
				title: '鉄道路線図タイル',
				url: 'https://www.arcgis.com/sharing/rest/content/items/cad7c5b698184691ab2a5a7dafcfe2d9/resources/styles/root.json'
			}
		]
	}
];

export function hookDynamicAttributionCtrlForArcGISLayers(
	map: maplibregl.Map,
	attributionCtrl: DynamicAttributionControl
): void {
	const attributionData: {
		[propName: string]: Promise<void> | ArcGISAttributionData | undefined;
	} = {};

	function getEnriSourceAndURI(): Set<[string, [string, string]]> {
		const enriURLs = new Set<[string, [string, string]]>();
		const { sources } = map.getStyle();

		const PATTERN =
			/^https:\/\/basemaps\.arcgis\.com\/arcgis\/rest\/services\/([^/]+)\/VectorTileServer\/tile\/\{z\}\/\{y\}\/\{x\}\.pbf$/;
		for (const sourceId of Object.keys(sources)) {
			const source = sources[sourceId];

			if (
				source.type === 'vector' &&
				Array.isArray(source.tiles) &&
				typeof source.tiles[0] === 'string'
			) {
				const url = source.tiles[0];
				const matches = url.match(PATTERN);
				if (matches && matches[1]) {
					enriURLs.add([sourceId, [url, matches[1]]]);
				}
			}
		}

		return enriURLs;
	}

	function intersects(bounds1: maplibregl.LngLatBounds, bounds2: maplibregl.LngLatBounds): boolean {
		const b1sw = bounds1.getSouthWest();
		const b1ne = bounds1.getNorthEast();

		const b2sw = bounds2.getSouthWest();
		const b2ne = bounds2.getNorthEast();

		// If one rectangle is on the left side of the other, they don't intersect.
		// The same applies to top, bottom, and right sides.
		const noOverlap =
			b1sw.lng > b2ne.lng || b1ne.lng < b2sw.lng || b1sw.lat > b2ne.lat || b1ne.lat < b2sw.lat;

		// The intersection is the opposite of a non-overlapping condition.
		return !noOverlap;
	}

	const POWERED_BY_ESRI_ATTRIBUTION_STRING = 'Powered by Esri';
	function updateAttributationText() {
		const enriURLs = getEnriSourceAndURI();
		const zoom = map.getZoom();
		const mapBounds = map.getBounds();

		let updateNeeded = false;
		for (const [sourceId, [url, _name]] of enriURLs) {
			const attributions = attributionData[url];
			if (
				attributions &&
				!(attributions instanceof Promise) &&
				Array.isArray(attributions.contributors)
			) {
				const esriAttributions: Array<{ attribution: string; score: number }> =
					attributions.contributors
						.map((contributor) => {
							const maxScore = contributor.coverageAreas
								.filter(
									(area) =>
										zoom >= area.zoomMin &&
										zoom <= area.zoomMax &&
										intersects(
											new maplibregl.LngLatBounds([
												area.bbox[1],
												area.bbox[0],
												area.bbox[3],
												area.bbox[2]
											]),
											mapBounds
										)
								)
								.reduce((max, area) => (area.score > max ? area.score : max), -Infinity);

							return maxScore === -Infinity
								? null
								: { attribution: contributor.attribution, score: maxScore };
						})
						.filter((v) => !!v);

				if (esriAttributions.length > 0) {
					esriAttributions.sort((a, b) => b.score - a.score);

					const newAttributions =
						`${POWERED_BY_ESRI_ATTRIBUTION_STRING} | ` +
						(esriAttributions.length === 1
							? `Source: ${esriAttributions[0].attribution}`
							: `Sources: ${esriAttributions
									.map((v) => v.attribution)
									.reduce((acc, curr, i, arr) =>
										i === arr.length - 1 ? `${acc}, and ${curr}` : `${acc}, ${curr}`
									)}`);

					const source = map.getSource(sourceId);
					if (source && source.attribution !== newAttributions) {
						source.attribution = newAttributions;
						updateNeeded = true;
					}
				}
			}
		}

		if (updateNeeded) {
			attributionCtrl.updateAttributions();
		}
	}

	function onAttributeWillUpdate() {
		const { sources } = map.getStyle();

		const enriURLs = getEnriSourceAndURI();

		for (const [_sourceId, [enriURL, name]] of enriURLs) {
			const attributionURL = `https://static.arcgis.com/attribution/Vector/${name}`;
			if (attributionData[enriURL] === undefined) {
				attributionData[enriURL] = fetch(attributionURL)
					.then((response) => response.json())
					.then((data) => {
						attributionData[enriURL] = data as ArcGISAttributionData;
						attributionCtrl.updateAttributions();
					})
					.catch((error) => {
						console.error({ error });
					});
			}
		}

		if (enriURLs.size > 0) {
			map.on('moveend', updateAttributationText);
			updateAttributationText();
		} else {
			map.off('moveend', updateAttributationText);
		}
	}
	attributionCtrl.on('attributionwillupdate', onAttributeWillUpdate);
}
