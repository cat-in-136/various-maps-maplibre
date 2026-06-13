import maplibregl from 'maplibre-gl';

import { PetitLogic } from '$lib/petitlogic';

export type LayerFormat =
	| 'style'
	| { tile: 'raster' | 'vector' | 'geojson' }
	| { single: 'geojson' };

export interface Layer {
	type: string;
	id: string;
	title: string;
	url: string;
	html?: string;
	description?: string;
	legendUrl?: string;
	maxNativeZoom?: number;
	maxZoom?: number;
	minZoom?: number;
	tileSize?: number;
	scheme?: 'xyz' | 'tms';
	attribution?: string;
	layerFormat?: LayerFormat;
	styleSwapOptions?: maplibregl.StyleSwapOptions & {
		transformStyleByExpression?: unknown;
	};
	[propName: string]: unknown;
}

export interface LayerGroup {
	type: 'LayerGroup';
	title: string;
	html?: string;
	entries: LayerConfigEntry[];
	[propName: string]: unknown;
}

export type LayerConfigEntry = LayerGroup | Layer;

export function isLayer(entry: LayerConfigEntry | undefined): entry is Layer {
	return entry?.type === 'Layer';
}

export function isLayerGroup(entry: LayerConfigEntry | undefined): entry is LayerGroup {
	return entry?.type === 'LayerGroup';
}

export function isMapStyleJson(
	value: unknown
): value is { version: number; sources: object; layers: object } {
	if (typeof value !== 'object' || value === null) return false;
	const obj = value as { version?: unknown; sources?: unknown; layers?: unknown };
	return obj.version === 8 && typeof obj.sources === 'object' && typeof obj.layers === 'object';
}

export function isLayerTextJson(value: unknown): value is { layers: LayerConfigEntry[] } {
	if (typeof value !== 'object' || value === null) return false;
	const obj = value as { layers?: unknown };
	if (!Array.isArray(obj.layers)) return false;
	return obj.layers.every((entry) => entry?.type === 'Layer' || entry?.type === 'LayerGroup');
}

export type TerrainSource = {
	title: string;
	source: maplibregl.RasterDEMSourceSpecification;
};

export function createStyleSwapOption(layer: Layer): maplibregl.StyleSwapOptions {
	if (layer.styleSwapOptions?.transformStyleByExpression) {
		const r = new PetitLogic();
		const styleSwapOptions: maplibregl.StyleSwapOptions = {
			transformStyle: (previous, next) =>
				r.evaluate([
					'let',
					'previous',
					previous,
					'next',
					next,
					layer.styleSwapOptions?.transformStyleByExpression
				]) as maplibregl.StyleSpecification
		};
		if (layer.styleSwapOptions?.diff) {
			styleSwapOptions.diff = layer.styleSwapOptions?.diff;
		}
		return styleSwapOptions;
	} else {
		return layer.styleSwapOptions || {};
	}
}
