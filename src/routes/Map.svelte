<script>
	import { onMount } from 'svelte';
	// maplibre-gl
	import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	// maplibre-gl-geocoder
	import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';
	import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';

	const initMap = () => {
		const map = new maplibregl.Map({
			container: 'map',
			center: [138.75, 36],
			zoom: 5,
			hash: true,
			style: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/blank.json'
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
		const geocoderApi = {
			forwardGeocode: async (config) => {
				const features = [];
				try {
					const request = `https://nominatim.openstreetmap.org/search?q=${
						config.query
					}&format=geojson&polygon_geojson=1&addressdetails=1`;
					const response = await fetch(request);
					const geojson = await response.json();
					for (const feature of geojson.features) {
						const center = [
							feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
							feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2
						];
						const point = {
							type: 'Feature',
							geometry: {
								type: 'Point',
								coordinates: center
							},
							place_name: feature.properties.display_name,
							properties: feature.properties,
							text: feature.properties.display_name,
							place_type: ['place'],
							center
						};
						features.push(point);
					}
				} catch (e) {
					console.error(`Failed to forwardGeocode with error: ${e}`);
				}

				return {
					features
				};
			}
		};
		map.addControl(
			new MaplibreGeocoder(geocoderApi, {
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
