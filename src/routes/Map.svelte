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

	//export type LayerConfigEntry<L extends ILayer> = LayerGroup<L> | L;
	const BASE_LAYER_DEFAULT: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry<MaplibreCompondLayerUI.LayerConfig.BaseLayer>[] =
		[
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
						url: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json'
					},
					{
						type: 'Layer',
						id: 'base-pale',
						title: '淡色地図',
						url: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/pale.json'
					},
					{
						type: 'Layer',
						id: 'base-std',
						title: '白地図',
						url: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/blank.json'
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
				title: 'Debug',
				entries: [
					{
						type: 'Layer',
						id: 'base-debug-empty-style',
						title: 'Empty Style',
						url: 'https://unpkg.com/maputnik/src/config/empty-style.json'
					},
					{
						type: 'LayerGroup',
						title: 'MapLibre Demo Tiles',
						entries: [
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
