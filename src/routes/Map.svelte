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

	import { GSIMapLayers } from '../lib/gsimaplayers';
	import * as MaplibreCompondLayerUI from '../lib/maplibre-compound-layer-ui';
	import '../lib/maplibre-compound-layer-ui.css';
	import {
		BASE_LAYER_DEFAULT,
		OVERLAY_LAYER_DEFAULT
	} from '../lib/maplibre-compound-layer-defaults';

	const initMap = () => {
		const map = new maplibregl.Map({
			container: 'map',
			center: [138.75, 36],
			zoom: 4,
			hash: true,
			style: BASE_LAYER_DEFAULT[0].entries[0].url as string
		});

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

		map.on('load', async () => {
			const layerswitcher = new MaplibreCompondLayerUI.MapLibreCompondLayerSwitcherControl();
			layerswitcher.addBase(BASE_LAYER_DEFAULT);
			map.addControl(layerswitcher);
			for (const layer of layerswitcher.baseLayerEntriesAll()) {
				layerswitcher.setBaseLayerEntriesSelected(layer, true);
				break;
			}

			layerswitcher.addOverlay(OVERLAY_LAYER_DEFAULT);

			const gsimaplayers = new GSIMapLayers();
			const qchizulayers = new GSIMapLayers();
			await Promise.all([
				gsimaplayers.load(),
				qchizulayers.load(
					[
						{
							url: 'https://qchizu.github.io/qchizu/layers_txt/layers99.txt'
						}
					],
					(v) => {
						if (
							(v as MaplibreCompondLayerUI.LayerConfig.LayerGroup | undefined)?.type ===
							'LayerGroup'
						) {
							const layerGroup = v as MaplibreCompondLayerUI.LayerConfig.LayerGroup;
							if (!layerGroup.entries || layerGroup.entries?.length === 0) {
								return undefined;
							}
						} else if (
							(v as MaplibreCompondLayerUI.LayerConfig.Layer | undefined)?.type === 'Layer'
						) {
							const layer = v as MaplibreCompondLayerUI.LayerConfig.Layer;
							if (!layer.url.startsWith('https://')) {
								return undefined;
							}
							if (!layer.id) {
								const rand = Math.random().toString(32).substring(2);
								layer.id = `autoid-${rand}`;
							}
						}
						return v;
					}
				)
			]);
			layerswitcher.addOverlay(gsimaplayers.getGroup());
			layerswitcher.addOverlay(qchizulayers.getGroup('全国Q地図'));
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
          <li><a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=${Math.round(zoom)}">OpenStreetMap</a></li>
          <li><a href="https://maps.gsi.go.jp/#${Math.round(zoom)}/${lat}/${lng}/&base=std&ls=std&disp=1">地理院地図</a></li>
          <li><a href="https://maps.gsi.go.jp/vector/#${zoom}/${lat}/${lng}/&ls=vstd&disp=1&d=l">地理院地図 Vector</a></li>
          <li><a href="https://maps.qchizu.xyz/#${Math.round(zoom)}/${lat}/${lng}/&base=std&ls=std&disp=1&vs=c1g1j0h0k0l0u0t0z0r0s0m0f1&d=m">全国Q地図</a></li>
        </ul>
      </div>`
				)
				.addTo(map);
		});
	};
	onMount(initMap);
</script>

<div id="map"></div>

<style>
	#map {
		width: 100%;
		height: 100%;
	}
</style>
