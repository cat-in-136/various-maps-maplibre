import { type LayerConfig } from '$lib/layer-config';
import { Map } from 'maplibre-gl';
import { DynamicAttributionControl } from '$lib/dynamic_attribution_control';

import {
	OSM_VECTOR_BASE_LAYERS,
	OSM_RASTER_BASE_LAYERS,
	OSM_VECTOR_OVERLAY_LAYERS,
	OSM_RASTER_OVERLAY_LAYERS
} from '$lib/maplibre-compound-layer-data/osm';
import { GSI_VECTOR_BASE_LAYERS } from '$lib/maplibre-compound-layer-data/gsi';

import { ICGC_VECTOR_BASE_LAYERS } from '$lib/maplibre-compound-layer-data/icgc';
import { WEATHER_OVERLAY_LAYERS } from '$lib/maplibre-compound-layer-data/weather';
import { MISC_BASE_LAYERS } from '$lib/maplibre-compound-layer-data/free-misc';

export const BASE_LAYER_DEFAULT: LayerConfig.LayerConfigEntry[] = [
	...OSM_VECTOR_BASE_LAYERS,
	...GSI_VECTOR_BASE_LAYERS,
	...ARCGIS_VECTOR_BASE_LAYERS,
	...ICGC_VECTOR_BASE_LAYERS,
	...OSM_RASTER_BASE_LAYERS,
	...ARCGIS_RASTER_BASE_LAYERS,
	...MISC_BASE_LAYERS
];

export const OVERLAY_LAYER_DEFAULT: LayerConfig.LayerConfigEntry[] = [
	...OSM_VECTOR_OVERLAY_LAYERS,
	...ARCGIS_VECTOR_OVERLAY_LAYERS,
	...OSM_RASTER_OVERLAY_LAYERS,
	...WEATHER_OVERLAY_LAYERS
];

import {
	ARCGIS_VECTOR_BASE_LAYERS,
	ARCGIS_RASTER_BASE_LAYERS,
	ARCGIS_VECTOR_OVERLAY_LAYERS,
	setupArcGISAttributionHandling
} from '$lib/maplibre-compound-layer-data/arcgis';

export function setupFreeLayersAttributionHandling(
	map: Map,
	attributionCtrl: DynamicAttributionControl
): void {
	setupArcGISAttributionHandling(map, attributionCtrl);
}
