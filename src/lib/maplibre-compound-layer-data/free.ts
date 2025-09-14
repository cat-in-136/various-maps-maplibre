import * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';
import { Map } from 'maplibre-gl';
import { DynamicAttributionControl } from '../dynamic_attribution_control';

import {
	OSM_VECTOR_BASE_LAYERS,
	OSM_RASTER_BASE_LAYERS,
	OSM_VECTOR_OVERLAY_LAYERS,
	OSM_RASTER_OVERLAY_LAYERS
} from './osm';
import { GSI_VECTOR_BASE_LAYERS } from './gsi';
import {
	ARCGIS_VECTOR_BASE_LAYERS,
	ARCGIS_RASTER_BASE_LAYERS,
	ARCGIS_VECTOR_OVERLAY_LAYERS,
	hookDynamicAttributionCtrlForArcGISLayers
} from './arcgis';
import { ICGC_VECTOR_BASE_LAYERS } from './icgc';
import { MISC_BASE_LAYERS, MISC_OVERLAY_LAYERS } from './free-misc';
import { ANCIENT_MAPS_OVERRAY_LAYERS } from './ancient-maps';

export const BASE_LAYER_DEFAULT: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	...OSM_VECTOR_BASE_LAYERS,
	...GSI_VECTOR_BASE_LAYERS,
	...ARCGIS_VECTOR_BASE_LAYERS,
	...ICGC_VECTOR_BASE_LAYERS,
	...OSM_RASTER_BASE_LAYERS,
	...ARCGIS_RASTER_BASE_LAYERS,
	...MISC_BASE_LAYERS
];

export const OVERLAY_LAYER_DEFAULT: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	...OSM_VECTOR_OVERLAY_LAYERS,
	...ARCGIS_VECTOR_OVERLAY_LAYERS,
	...OSM_RASTER_OVERLAY_LAYERS,
	...MISC_OVERLAY_LAYERS,
	...ANCIENT_MAPS_OVERRAY_LAYERS
];

export function hookDynamicAttributionCtrlForFreeLayers(
	map: Map,
	attributionCtrl: DynamicAttributionControl
): void {
	hookDynamicAttributionCtrlForArcGISLayers(map, attributionCtrl);
}
