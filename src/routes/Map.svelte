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
	import { BASE_LAYER_DEFAULT } from '../lib/maplibre-compound-layer-defaults';

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
			const gsimaplayers = new GSIMapLayers();
			await gsimaplayers.load();

			const layerswitcher = new MaplibreCompondLayerUI.MapLibreCompondLayerSwitcherControl();
			layerswitcher.addBase(BASE_LAYER_DEFAULT);
			map.addControl(layerswitcher);
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
