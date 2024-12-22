<script>
	import { onMount } from 'svelte';
	import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';

	onMount(() => {
		const map = new maplibregl.Map({
			container: 'map',
			center: [138.75, 36],
			zoom: 5,
			hash: true,
			style: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/blank.json'
		});

		map.addControl(
			new maplibregl.NavigationControl({
				visualizePitch: true,
				showZoom: true,
				showCompass: true
			}),
			'top-left'
		);
	});
</script>

<div id="map"></div>

<style>
	#map {
		width: 100%;
		height: 100%;
	}
</style>
