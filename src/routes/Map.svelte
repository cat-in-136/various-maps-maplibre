<script lang="ts">
	import { onMount } from 'svelte';
	import { initMap } from '$lib/map-initializer';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';
	import '$lib/maplibre-compound-layer-ui.css';

	let isDark = false;

	onMount(() => {
		initMap((value) => {
			isDark = value;
		});
	});
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
