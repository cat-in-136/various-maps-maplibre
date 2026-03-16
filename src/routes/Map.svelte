<script lang="ts">
	import { onMount } from 'svelte';
	// maplibre-gl
	import * as maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	// maplibre-gl-geocoder
	import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';
	import type {
		CarmenGeojsonFeature,
		MaplibreGeocoderApi,
		MaplibreGeocoderApiConfig,
		MaplibreGeocoderFeatureResults
	} from '@maplibre/maplibre-gl-geocoder';
	import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';
	import * as VectorTextProtocol from 'maplibre-gl-vector-text-protocol';

	import { GSIMapLayers } from '../lib/gsimaplayers/gsimaplayers';
	import { AncientLayers, OthersLayers } from '../lib/gsimaplayers/variousmapslocallayerstxt';
	import * as MaplibreCompondLayerUI from '../lib/maplibre-compound-layer-ui';
	import { type LayerConfig } from '../lib/layer-config';
	import '../lib/maplibre-compound-layer-ui.css';
	import {
		BASE_LAYER_DEFAULT,
		OVERLAY_LAYER_DEFAULT,
		setupFreeLayersAttributionHandling
	} from '../lib/maplibre-compound-layer-data/free';
	import * as NonfreeLayer from '../lib/maplibre-compound-layer-data/nonfree';
	import { getTerrainSources } from '../lib/maplibre-compound-layer-data/terrain';
	import { getGsiDemProtocolAction } from '../lib/maplibre-gsi-dem-protocol';
	import { getGeoJsonProtocolAction } from '../lib/maplibre-gl-geojson-tiles-qiita';
	import { DynamicAttributionControl } from '../lib/dynamic_attribution_control';
	import {
		getJmaLayerProtocolAction,
		getCloudSatelliteToPngProtocolAction
	} from '../lib/maplibre-live-satellite-layer-protocol';

	let isDark = false;

	const initMap = () => {
		const map = new maplibregl.Map({
			container: 'map',
			center: [138.75, 36],
			zoom: 4,
			hash: true,
			attributionControl: false,
			style: (BASE_LAYER_DEFAULT[0] as any).entries[0].entries[0].url as string
		});

		// Dynamic Attribution control
		const attributionCtrl = new DynamicAttributionControl();
		map.addControl(attributionCtrl);

		// Navigation (Zoom) control
		map.addControl(
			new maplibregl.NavigationControl({
				visualizePitch: true,
				showZoom: true,
				showCompass: true
			}),
			'bottom-right'
		);

		// Scale control
		map.addControl(
			new maplibregl.ScaleControl({
				maxWidth: 200,
				unit: 'metric'
			})
		);

		// Geocoder control
		// https://maplibre.org/maplibre-gl-js/docs/examples/geocoder/
		const geocoderApi: MaplibreGeocoderApi = {
			forwardGeocode: async (
				config: MaplibreGeocoderApiConfig
			): Promise<MaplibreGeocoderFeatureResults> => {
				const results: MaplibreGeocoderFeatureResults = { type: 'FeatureCollection', features: [] };
				try {
					const request = `https://nominatim.openstreetmap.org/search?q=${
						config.query
					}&format=geojson&polygon_geojson=1&addressdetails=1`;
					const response = await fetch(request);
					const geojson = await response.json();
					console.debug(geojson);
					for (const feature of geojson.features) {
						const bbox = feature.bbox as [number, number, number, number];
						const center = new maplibregl.LngLatBounds(bbox).getCenter();
						const point: CarmenGeojsonFeature = {
							type: 'Feature',
							geometry: {
								type: 'Point',
								coordinates: center.toArray()
							},
							bbox: feature.bbox as [number, number, number, number],
							id: feature.properties.display_name as string,
							place_name: feature.properties.display_name as string,
							properties: feature.properties,
							place_type: ['place'],
							text: feature.properties.display_name as string
						};
						results.features.push(point);
					}
				} catch (e) {
					console.error(`Failed to forwardGeocode with error: ${e}`);
				}

				return results;
			},
			reverseGeocode: async (
				_config: MaplibreGeocoderApiConfig
			): Promise<MaplibreGeocoderFeatureResults> => {
				return Promise.reject();
			}
		};
		map.addControl(
			new MaplibreGeocoder(geocoderApi, {
				maplibregl,
				zoom: 14
			})
		);
		// Geolocate control
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

		// Add Protocols
		map.on('load', () => {
			maplibregl.addProtocol('geojson-tile', getGeoJsonProtocolAction());
			VectorTextProtocol.addProtocols(maplibregl);
			maplibregl.addProtocol('jma', getJmaLayerProtocolAction('jma'));
			maplibregl.addProtocol(
				'cloud-satellite-png',
				getCloudSatelliteToPngProtocolAction('cloud-satellite-png')
			);
			maplibregl.addProtocol('gsidem', getGsiDemProtocolAction('gsidem'));
		});

		const layerswitcher = new MaplibreCompondLayerUI.MapLibreCompondLayerSwitcherControl();
		map.on('load', async () => {
			const nonFreeKeys = NonfreeLayer.getLayerNonfreeKeysFromURL();

			layerswitcher.addBase(BASE_LAYER_DEFAULT);
			layerswitcher.addBase(NonfreeLayer.getBaseLayerNonfree(nonFreeKeys));
			console.debug({ layerswitcher });
			map.addControl(layerswitcher);
			for (const layer of layerswitcher.baseLayerEntriesAll()) {
				layerswitcher.setBaseLayerEntriesSelected(layer, true);
				break;
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

		// Automatically load style images if the ID is URL text
		const styleImageMissingImageLoader = new Map<string, Promise<void>>();
		map.on('styleimagemissing', (e) => {
			const id = String(e.id);
			const match = id.match(/(https?:)?\/\//);
			if (match) {
				const url = match[0] === '//' ? 'https:' + id : id;
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

		// Globe button
		map.on('load', () => {
			map.setProjection({ type: 'globe' }); // Earth is not flat.
			map.addControl(new maplibregl.GlobeControl());
		});

		// Dark mode handling
		map.on('styledata', () => {
			const layer_id: string = layerswitcher.baseLayerEntriesSelected().next().value?.id || '';
			const DARK_ID_REGEX = /(dark|black|hybrid|imagery|satellite|fiord-color|arcgis-Nova)/i;
			isDark = map.getSky() === undefined && DARK_ID_REGEX.test(layer_id);
		});

		map.on('contextmenu', (e: maplibregl.MapMouseEvent) => {
			const { lng, lat } = e.lngLat;
			const zoom = map.getZoom();
			new maplibregl.Popup()
				.setLngLat(e.lngLat)
				.setHTML(
					`<div>
        External Maps:
        <ul>
          <li><a href="https://www.google.com/maps/@${lat},${lng},${zoom}z">Google Maps</a></li>
          <li><a href="https://www.google.com/maps/@?api=1&amp;map_action=pano&amp;viewpoint=${lat},${lng}">Google Maps Street View</a></li>
          <li><a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&amp;zoom=${Math.round(zoom)}">OpenStreetMap</a></li>
          <li><a href="https://maps.gsi.go.jp/#${Math.round(zoom)}/${lat}/${lng}/&amp;base=std&amp;ls=std&amp;disp=1">地理院地図</a></li>
          <li><a href="https://maps.gsi.go.jp/vector/#${zoom}/${lat}/${lng}/&amp;ls=vstd&amp;disp=1&amp;d=l">地理院地図 Vector</a></li>
          <li><a href="https://maps.qchizu.xyz/#${Math.round(zoom)}/${lat}/${lng}/&amp;base=std&amp;ls=std&amp;disp=1&amp;vs=c1g1j0h0k0l0u0t0z0r0s0m0f1&amp;d=m">全国Q地図</a></li>
        </ul>
      </div>`
				)
				.addTo(map);
		});

		map.getContainer().addEventListener('dragover', (e) => e.preventDefault(), false);
		map.getContainer().addEventListener(
			'drop',
			async (e) => {
				e.preventDefault();

				const files: File[] = [];

				if (e.dataTransfer?.items) {
					[...e.dataTransfer.items].forEach((item, _i) => {
						if (item.kind === 'file') {
							const file = item.getAsFile();
							if (file) {
								files.push(file);
							}
						}
					});
				} else if (e.dataTransfer?.files) {
					[...e.dataTransfer.files].forEach((file, _i) => {
						files.push(file);
					});
				}

				const base_entries: LayerConfig.LayerConfigEntry[] = [];
				const overlay_entries: LayerConfig.LayerConfigEntry[] = [];
				for (const file of files) {
					const rand = Math.random().toString(32).substring(2);
					const id = `${file.name.replaceAll(/[-_.\s]/g, '-')}-${rand}`;

					if (/layers.*\.txt(\.json)?$/i.test(file.name)) {
						const json = await file.text().then(JSON.parse);
						console.debug({ json, file });
						if (
							Array.isArray(json.layers) &&
							(json.layers[0].type === 'Layer' || json.layers[0].type === 'LayerGroup')
						) {
							overlay_entries.push({
								type: 'LayerGroup',
								title: file.name,
								entries: json.layers
							});
						} else {
							console.debug(`Unsupported JSON format: ${file.name}`);
						}
					} else if (/\.overlay\.json$/i.test(file.name)) {
						const json = await file.text().then(JSON.parse);
						if (
							json.version === 8 &&
							typeof json.sources === 'object' &&
							typeof json.layers === 'object'
						) {
							overlay_entries.push({
								type: 'Layer',
								id: `dndfile-${id}`,
								title: file.name,
								url: URL.createObjectURL(file)
							});
						} else {
							console.debug(`Unsupported JSON format: ${file.name}`);
						}
					} else if (/\.json$/i.test(file.name)) {
						const json = await file.text().then(JSON.parse);
						if (
							json.version === 8 &&
							typeof json.sources === 'object' &&
							typeof json.layers === 'object'
						) {
							base_entries.push({
								type: 'Layer',
								id: `dndfile-${id}`,
								title: file.name,
								url: URL.createObjectURL(file)
							});
						} else {
							console.debug(`Unsupported JSON format: ${file.name}`);
						}
					} else if (/\.gpx$/i.test(file.name) || file.type === 'application/gpx+xml') {
						overlay_entries.push({
							type: 'Layer',
							id: `dndfile-${id}`,
							title: file.name,
							url: `gpx://${URL.createObjectURL(file)}`,
							attribution: '', // workaround to avoid attribution error
							layerFormat: { single: 'geojson' }
						});
					} else if (
						/\.kml$/i.test(file.name) ||
						file.type === 'application/vnd.google-earth.kml+xml'
					) {
						overlay_entries.push({
							type: 'Layer',
							id: `dndfile-${id}`,
							title: file.name,
							url: `kml://${URL.createObjectURL(file)}`,
							attribution: '', // workaround to avoid attribution error
							layerFormat: { single: 'geojson' }
						});
					} else if (/\.geojson$/i.test(file.name)) {
						overlay_entries.push({
							type: 'Layer',
							id: `dndfile-${id}`,
							title: file.name,
							url: URL.createObjectURL(file),
							layerFormat: { single: 'geojson' }
						});
					} else {
						console.debug(`Unsupported format: ${file.name}`);
					}
				}

				const now = new Date();
				const title = `Drag and Drop (${now.getHours().toString().padStart(2, '0')}:${now
					.getMinutes()
					.toString()
					.padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')})`;
				if (base_entries.length > 0) {
					layerswitcher.addBase({
						type: 'LayerGroup',
						title,
						entries: base_entries
					});
				}
				if (overlay_entries.length > 0) {
					layerswitcher.addOverlay({
						type: 'LayerGroup',
						title,
						entries: overlay_entries
					});
				}
			},
			false
		);
	};
	onMount(initMap);
</script>

<div id="map" class:dark={isDark}></div>

<style>
	#map {
		width: 100%;
		height: 100%;
	}
	#map:global(.dark) {
		background-color: #000;
	}
</style>
