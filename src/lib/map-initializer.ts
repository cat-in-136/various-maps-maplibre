import maplibregl from 'maplibre-gl';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';
import type {
	CarmenGeojsonFeature,
	MaplibreGeocoderApi,
	MaplibreGeocoderApiConfig,
	MaplibreGeocoderFeatureResults
} from '@maplibre/maplibre-gl-geocoder';
import * as VectorTextProtocol from 'maplibre-gl-vector-text-protocol';

import { DynamicAttributionControl } from '$lib/dynamic_attribution_control';
import { GSIMapLayers } from '$lib/gsimaplayers/gsimaplayers';
import { AncientLayers, OthersLayers } from '$lib/gsimaplayers/variousmapslocallayerstxt';
import * as MaplibreCompondLayerUI from '$lib/maplibre-compound-layer-ui';
import type { LayerConfigEntry, LayerGroup } from '$lib/layer-config';
import { isLayer, isLayerGroup, isLayerTextJson, isMapStyleJson } from '$lib/layer-config';
import {
	BASE_LAYER_DEFAULT,
	OVERLAY_LAYER_DEFAULT,
	setupFreeLayersAttributionHandling
} from '$lib/maplibre-compound-layer-data/free';
import * as NonfreeLayer from '$lib/maplibre-compound-layer-data/nonfree';
import { getTerrainSources } from '$lib/maplibre-compound-layer-data/terrain';
import { getGsiDemProtocolAction } from '$lib/maplibre-gsi-dem-protocol';
import { getGeoJsonProtocolAction } from '$lib/maplibre-gl-geojson-tiles-qiita';
import {
	getCloudSatelliteToPngProtocolAction,
	getJmaLayerProtocolAction
} from '$lib/maplibre-live-satellite-layer-protocol';
import { getPmtilesProtocol } from '$lib/maplibre-pmtiles-protocol';

type SetDark = (isDark: boolean) => void;

type NominatimGeojson = {
	features?: Array<{
		bbox?: [number, number, number, number];
		properties?: Record<string, unknown>;
	}>;
};

const DARK_ID_REGEX = /(dark|black|hybrid|imagery|satellite|fiord-color|arcgis-Nova)/i;

async function readJson(file: File): Promise<unknown> {
	return JSON.parse(await file.text());
}

function createDndLayerId(file: File): string {
	const rand = Math.random().toString(32).substring(2);
	return `${file.name.replaceAll(/[-_.\s]/g, '-')}-${rand}`;
}

function createDndTitle(): string {
	const now = new Date();
	return `Drag and Drop (${now.getHours().toString().padStart(2, '0')}:${now
		.getMinutes()
		.toString()
		.padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')})`;
}

function createDndGroup(title: string, entries: LayerConfigEntry[]): LayerGroup {
	return {
		type: 'LayerGroup',
		title,
		entries
	};
}

async function createDroppedLayerEntries(file: File): Promise<{
	base: LayerConfigEntry[];
	overlay: LayerConfigEntry[];
}> {
	const base: LayerConfigEntry[] = [];
	const overlay: LayerConfigEntry[] = [];
	const id = createDndLayerId(file);

	if (/layers.*\.txt(\.json)?$/i.test(file.name)) {
		let json: unknown;
		try {
			json = await readJson(file);
		} catch {
			console.debug(`Unsupported JSON format: ${file.name}`);
			return { base, overlay };
		}
		if (isLayerTextJson(json)) {
			overlay.push(createDndGroup(file.name, json.layers));
		} else {
			console.debug(`Unsupported JSON format: ${file.name}`);
		}
	} else if (/\.overlay\.json$/i.test(file.name)) {
		let json: unknown;
		try {
			json = await readJson(file);
		} catch {
			console.debug(`Unsupported JSON format: ${file.name}`);
			return { base, overlay };
		}
		if (isMapStyleJson(json)) {
			overlay.push({
				type: 'Layer',
				id: `dndfile-${id}`,
				title: file.name,
				url: URL.createObjectURL(file)
			});
		} else {
			console.debug(`Unsupported JSON format: ${file.name}`);
		}
	} else if (/\.json$/i.test(file.name)) {
		let json: unknown;
		try {
			json = await readJson(file);
		} catch {
			console.debug(`Unsupported JSON format: ${file.name}`);
			return { base, overlay };
		}
		if (isMapStyleJson(json)) {
			base.push({
				type: 'Layer',
				id: `dndfile-${id}`,
				title: file.name,
				url: URL.createObjectURL(file)
			});
		} else {
			console.debug(`Unsupported JSON format: ${file.name}`);
		}
	} else if (/\.gpx$/i.test(file.name) || file.type === 'application/gpx+xml') {
		overlay.push({
			type: 'Layer',
			id: `dndfile-${id}`,
			title: file.name,
			url: `gpx://${URL.createObjectURL(file)}`,
			attribution: '',
			layerFormat: { single: 'geojson' }
		});
	} else if (/\.kml$/i.test(file.name) || file.type === 'application/vnd.google-earth.kml+xml') {
		overlay.push({
			type: 'Layer',
			id: `dndfile-${id}`,
			title: file.name,
			url: `kml://${URL.createObjectURL(file)}`,
			attribution: '',
			layerFormat: { single: 'geojson' }
		});
	} else if (/\.geojson$/i.test(file.name)) {
		overlay.push({
			type: 'Layer',
			id: `dndfile-${id}`,
			title: file.name,
			url: URL.createObjectURL(file),
			layerFormat: { single: 'geojson' }
		});
	} else {
		console.debug(`Unsupported format: ${file.name}`);
	}

	return { base, overlay };
}

function collectDroppedFiles(dataTransfer: DataTransfer | null): File[] {
	const files: File[] = [];

	if (dataTransfer?.items) {
		[...dataTransfer.items].forEach((item) => {
			if (item.kind === 'file') {
				const file = item.getAsFile();
				if (file) files.push(file);
			}
		});
	} else if (dataTransfer?.files) {
		[...dataTransfer.files].forEach((file) => files.push(file));
	}

	return files;
}

function createExternalMapsHtml(lat: number, lng: number, zoom: number): string {
	const roundedZoom = Math.round(zoom);
	return `<div>
        External Maps:
        <ul>
          <li><a href="https://www.google.com/maps/@${lat},${lng},${zoom}z">Google Maps</a></li>
          <li><a href="https://www.google.com/maps/@?api=1&amp;map_action=pano&amp;viewpoint=${lat},${lng}">Google Maps Street View</a></li>
          <li><a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&amp;zoom=${roundedZoom}">OpenStreetMap</a></li>
          <li><a href="https://maps.gsi.go.jp/#${roundedZoom}/${lat}/${lng}/&amp;base=std&amp;ls=std&amp;disp=1">地理院地図</a></li>
          <li><a href="https://maps.gsi.go.jp/vector/#${zoom}/${lat}/${lng}/&amp;ls=vstd&amp;disp=1&amp;d=l">地理院地図 Vector</a></li>
          <li><a href="https://maps.qchizu.xyz/#${roundedZoom}/${lat}/${lng}/&amp;base=std&amp;ls=std&amp;disp=1&amp;vs=c1g1j0h0k0l0u0t0z0r0s0m0f1&amp;d=m">全国Q地図</a></li>
        </ul>
      </div>`;
}

export function createMap(): maplibregl.Map {
	const firstBaseLayer = BASE_LAYER_DEFAULT[0];
	if (!isLayerGroup(firstBaseLayer)) {
		throw new Error('BASE_LAYER_DEFAULT must start with a LayerGroup');
	}

	const firstBaseGroup = firstBaseLayer.entries[0];
	if (!isLayerGroup(firstBaseGroup)) {
		throw new Error('First base layer group must contain a LayerGroup');
	}

	const firstLayer = firstBaseGroup.entries[0];
	if (!isLayer(firstLayer) || typeof firstLayer.url !== 'string') {
		throw new Error('First base layer entry must be a Layer');
	}

	return new maplibregl.Map({
		container: 'map',
		center: [138.75, 36],
		zoom: 4,
		hash: true,
		attributionControl: false,
		style: firstLayer.url
	});
}

export function createGeocoderApi(): MaplibreGeocoderApi {
	return {
		forwardGeocode: async (
			config: MaplibreGeocoderApiConfig
		): Promise<MaplibreGeocoderFeatureResults> => {
			const results: MaplibreGeocoderFeatureResults = { type: 'FeatureCollection', features: [] };
			try {
				const request = new URL('https://nominatim.openstreetmap.org/search');
				request.searchParams.set('q', String(config.query ?? ''));
				request.searchParams.set('format', 'geojson');
				request.searchParams.set('polygon_geojson', '1');
				request.searchParams.set('addressdetails', '1');

				const response = await fetch(request);
				if (!response.ok) return results;

				const geojson = (await response.json()) as NominatimGeojson;
				for (const feature of geojson.features ?? []) {
					if (!feature.bbox) continue;
					const center = new maplibregl.LngLatBounds(feature.bbox).getCenter();
					const displayName =
						typeof feature.properties?.display_name === 'string'
							? feature.properties.display_name
							: `${center.lat}, ${center.lng}`;
					const point: CarmenGeojsonFeature = {
						type: 'Feature',
						geometry: {
							type: 'Point',
							coordinates: center.toArray()
						},
						bbox: feature.bbox,
						id: displayName,
						place_name: displayName,
						properties: feature.properties ?? {},
						place_type: ['place'],
						text: displayName
					};
					results.features.push(point);
				}
			} catch (e) {
				console.error(`Failed to forwardGeocode with error: ${e}`);
			}

			return results;
		},
		reverseGeocode: async (): Promise<MaplibreGeocoderFeatureResults> => {
			return Promise.reject(new Error('Reverse geocoding is not supported'));
		}
	};
}

export function addMapControls(
	map: maplibregl.Map,
	attributionCtrl: DynamicAttributionControl
): void {
	map.addControl(attributionCtrl);

	map.addControl(
		new maplibregl.NavigationControl({
			visualizePitch: true,
			showZoom: true,
			showCompass: true
		}),
		'bottom-right'
	);

	map.addControl(
		new maplibregl.ScaleControl({
			maxWidth: 200,
			unit: 'metric'
		})
	);

	map.addControl(
		new MaplibreGeocoder(createGeocoderApi(), {
			maplibregl,
			zoom: 14
		})
	);

	map.addControl(
		new maplibregl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: false
			},
			fitBoundsOptions: { maxZoom: 18 },
			trackUserLocation: true,
			showUserLocation: true
		})
	);
}

export function registerProtocols(map: maplibregl.Map): void {
	map.on('load', () => {
		maplibregl.addProtocol('geojson-tile', getGeoJsonProtocolAction());
		VectorTextProtocol.addProtocols(maplibregl);
		maplibregl.addProtocol('jma', getJmaLayerProtocolAction('jma'));
		maplibregl.addProtocol(
			'cloud-satellite-png',
			getCloudSatelliteToPngProtocolAction('cloud-satellite-png')
		);
		maplibregl.addProtocol('gsidem', getGsiDemProtocolAction('gsidem'));
		maplibregl.addProtocol('pmtiles', getPmtilesProtocol());
	});
}

export function setupLayerSwitcher(
	map: maplibregl.Map,
	attributionCtrl: DynamicAttributionControl
): MaplibreCompondLayerUI.MapLibreCompondLayerSwitcherControl {
	const layerswitcher = new MaplibreCompondLayerUI.MapLibreCompondLayerSwitcherControl();

	map.on('load', async () => {
		const nonFreeKeys = NonfreeLayer.getLayerNonfreeKeysFromURL();

		layerswitcher.addBase(BASE_LAYER_DEFAULT);
		layerswitcher.addBase(NonfreeLayer.getBaseLayerNonfree(nonFreeKeys));
		map.addControl(layerswitcher);

		const firstBaseLayer = layerswitcher.baseLayerEntriesAll().next().value;
		if (firstBaseLayer) {
			layerswitcher.setBaseLayerEntriesSelected(firstBaseLayer, true);
		}

		layerswitcher.addOverlay(OVERLAY_LAYER_DEFAULT);
		layerswitcher.addOverlay(NonfreeLayer.getOverlayLayerNonfree(nonFreeKeys));

		const gsimaplayers = new GSIMapLayers();
		const ancientlayers = new AncientLayers();
		const otherslayers = new OthersLayers();
		await Promise.all([gsimaplayers.load(), ancientlayers.load(), otherslayers.load()]);
		layerswitcher.addOverlay(gsimaplayers.getGroup());
		layerswitcher.addOverlay(ancientlayers.getGroup());
		layerswitcher.addOverlay(otherslayers.getGroup());

		layerswitcher.addTerrain(getTerrainSources(nonFreeKeys));

		setupFreeLayersAttributionHandling(map, attributionCtrl);
	});

	return layerswitcher;
}

export function setupStyleImageLoader(map: maplibregl.Map): void {
	const styleImageMissingImageLoader = new Map<string, Promise<void>>();
	map.on('styleimagemissing', (e) => {
		const id = String(e.id);
		const match = id.match(/(https?:)?\/\//);
		if (match) {
			const url = match[0] === '//' ? `https:${id}` : id;
			if (!styleImageMissingImageLoader.has(id)) {
				styleImageMissingImageLoader.set(
					id,
					map
						.loadImage(url)
						.then((image) => {
							map.addImage(id, image.data);
							styleImageMissingImageLoader.delete(id);
						})
						.catch((error) => console.error({ error }))
				);
			}
		}
	});
}

export function setupGlobe(map: maplibregl.Map): void {
	map.on('load', () => {
		map.setProjection({ type: 'globe' });
		map.addControl(new maplibregl.GlobeControl());
	});
}

export function setupDarkMode(
	map: maplibregl.Map,
	layerswitcher: MaplibreCompondLayerUI.MapLibreCompondLayerSwitcherControl,
	setDark: SetDark
): void {
	map.on('styledata', () => {
		const layerId = layerswitcher.baseLayerEntriesSelected().next().value?.id || '';
		setDark(map.getSky() === undefined && DARK_ID_REGEX.test(layerId));
	});
}

export function setupExternalMapsPopup(map: maplibregl.Map): void {
	map.on('contextmenu', (e: maplibregl.MapMouseEvent) => {
		const { lng, lat } = e.lngLat;
		const zoom = map.getZoom();
		new maplibregl.Popup()
			.setLngLat(e.lngLat)
			.setHTML(createExternalMapsHtml(lat, lng, zoom))
			.addTo(map);
	});
}

export function setupDragAndDrop(
	map: maplibregl.Map,
	layerswitcher: MaplibreCompondLayerUI.MapLibreCompondLayerSwitcherControl
): void {
	map.getContainer().addEventListener('dragover', (e) => e.preventDefault(), false);
	map.getContainer().addEventListener(
		'drop',
		async (e) => {
			e.preventDefault();

			const baseEntries: LayerConfigEntry[] = [];
			const overlayEntries: LayerConfigEntry[] = [];
			for (const file of collectDroppedFiles(e.dataTransfer)) {
				const entries = await createDroppedLayerEntries(file);
				baseEntries.push(...entries.base);
				overlayEntries.push(...entries.overlay);
			}

			const title = createDndTitle();
			if (baseEntries.length > 0) {
				layerswitcher.addBase(createDndGroup(title, baseEntries));
			}
			if (overlayEntries.length > 0) {
				layerswitcher.addOverlay(createDndGroup(title, overlayEntries));
			}
		},
		false
	);
}

export function initMap(setDark: SetDark): void {
	const map = createMap();
	const attributionCtrl = new DynamicAttributionControl();

	addMapControls(map, attributionCtrl);
	registerProtocols(map);

	const layerswitcher = setupLayerSwitcher(map, attributionCtrl);

	setupStyleImageLoader(map);
	setupGlobe(map);
	setupDarkMode(map, layerswitcher, setDark);
	setupExternalMapsPopup(map);
	setupDragAndDrop(map, layerswitcher);
}
