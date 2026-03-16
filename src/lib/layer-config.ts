import maplibregl from 'maplibre-gl';

import { PetitLogic } from './petitlogic';

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
				])
		};
		if (layer.styleSwapOptions?.diff) {
			styleSwapOptions.diff = layer.styleSwapOptions?.diff;
		}
		return styleSwapOptions;
	} else {
		return layer.styleSwapOptions || {};
	}
}

export const LayerConfig = {
	LayerFormat: undefined as unknown as LayerFormat,
	Layer: undefined as unknown as Layer,
	LayerGroup: undefined as unknown as LayerGroup,
	LayerConfigEntry: undefined as unknown as LayerConfigEntry,
	createStyleSwapOption
};
