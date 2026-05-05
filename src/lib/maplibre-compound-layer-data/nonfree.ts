import { type LayerConfig } from '$lib/layer-config';
import maptiler_ocean_bathymetric_contours from '$lib/static/assets/map-data/maptiler-ocean-bathymetric-contours-catin136.min.overlay.json?url';

type LayerNonfreeKeys = {
	maptiler?: string;
};

export function getLayerNonfreeKeysFromURL(
	url: Location | URL = window.location
): LayerNonfreeKeys {
	const urlurl = url instanceof Location ? new URL(url.href) : url;
	const searchParams = urlurl.searchParams;
	const hashParams = new URLSearchParams(urlurl.hash.replace(/^#/, ''));

	const keys: LayerNonfreeKeys = {};
	if (searchParams.has('maptiler_key')) {
		keys.maptiler = searchParams.get('maptiler_key') as string;
	}
	if (hashParams.has('maptiler_key')) {
		keys.maptiler = hashParams.get('maptiler_key') as string;
	}

	console.debug({ url, keys, searchParams, hashParams });

	return keys;
}

export function getBaseLayerNonfree(keyes: LayerNonfreeKeys): LayerConfig.LayerConfigEntry[] {
	const entries: LayerConfig.LayerConfigEntry[] = [];
	if (keyes['maptiler']) {
		const key = keyes['maptiler'];
		entries.push({
			type: 'LayerGroup',
			title: 'Maptiler',
			entries: [
				{
					type: 'LayerGroup',
					title: 'Standard maps',
					entries: [
						{
							type: 'Layer',
							id: 'base-maptiler-aquarelle',
							title: 'Aquarelle',
							url: `https://api.maptiler.com/maps/aquarelle/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-aquarelle-v4',
							title: 'Aquarelle v4',
							url: `https://api.maptiler.com/maps/aquarelle-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-backdrop',
							title: 'Backdrop',
							url: `https://api.maptiler.com/maps/backdrop/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-backdrop-v4',
							title: 'Backdrop v4',
							url: `https://api.maptiler.com/maps/backdrop-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-backdrop-v4-dark',
							title: 'Backdrop Dark v4',
							url: `https://api.maptiler.com/maps/backdrop-v4-dark/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-backdrop-v4-light',
							title: 'Backdrop Light v4',
							url: `https://api.maptiler.com/maps/backdrop-v4-light/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-basic-v2',
							title: 'Basic',
							url: `https://api.maptiler.com/maps/basic-v2/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-bright-v2',
							title: 'Bright',
							url: `https://api.maptiler.com/maps/bright-v2/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-base-v4',
							title: 'Base v4',
							url: `https://api.maptiler.com/maps/base-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-dataviz',
							title: 'Dataviz',
							url: `https://api.maptiler.com/maps/dataviz/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-dataviz-v4',
							title: 'Dataviz v4',
							url: `https://api.maptiler.com/maps/dataviz-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-dataviz-v4-dark',
							title: 'Dataviz Dark v4',
							url: `https://api.maptiler.com/maps/dataviz-v4-dark/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-dataviz-v4-light',
							title: 'Dataviz Light v4',
							url: `https://api.maptiler.com/maps/dataviz-v4-light/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-landscape',
							title: 'Landscape',
							url: `https://api.maptiler.com/maps/landscape/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-landscape-v4',
							title: 'Landscape v4',
							url: `https://api.maptiler.com/maps/landscape-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-landscape-v4-dark',
							title: 'Landscape Dark v4',
							url: `https://api.maptiler.com/maps/landscape-v4-dark/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-landscape-v4-vivid',
							title: 'Landscape Vivid v4',
							url: `https://api.maptiler.com/maps/landscape-v4-vivid/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-ocean',
							title: 'Ocean',
							url: `https://api.maptiler.com/maps/ocean/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-ocean-v4',
							title: 'Ocean v4',
							url: `https://api.maptiler.com/maps/ocean-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-ocean-v4-dark',
							title: 'Ocean Dark v4',
							url: `https://api.maptiler.com/maps/ocean-v4-dark/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-openstreetmap',
							title: 'OpenStreetMap',
							url: `https://api.maptiler.com/maps/openstreetmap/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-openstreetmap-dark',
							title: 'OpenStreetMap Dark',
							url: `https://api.maptiler.com/maps/openstreetmap-dark/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-outdoor-v2',
							title: 'Outdoor',
							url: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-outdoor-v4',
							title: 'Outdoor v4',
							url: `https://api.maptiler.com/maps/outdoor-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-outdoor-v4-dark',
							title: 'Outdoor Dark v4',
							url: `https://api.maptiler.com/maps/outdoor-v4-dark/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-hybrid-v4',
							title: 'Satellite Hybrid v4',
							url: `https://api.maptiler.com/maps/hybrid-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-hybrid-v4-dark',
							title: 'Satellite Hybrid Dark v4',
							url: `https://api.maptiler.com/maps/hybrid-v4-dark/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-satellite',
							title: 'Satellite',
							url: `https://api.maptiler.com/maps/satellite/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-satellite-v4',
							title: 'Satellite v4',
							url: `https://api.maptiler.com/maps/satellite-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-streets-v2',
							title: 'Streets',
							url: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-streets-v4',
							title: 'Streets v4',
							url: `https://api.maptiler.com/maps/streets-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-streets-v4-dark',
							title: 'Streets Dark v4',
							url: `https://api.maptiler.com/maps/streets-v4-dark/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-streets-v4-pastel',
							title: 'Streets Pastel v4',
							url: `https://api.maptiler.com/maps/streets-v4-pastel/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-toner-v2',
							title: 'Toner',
							url: `https://api.maptiler.com/maps/toner-v2/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-topo-v2',
							title: 'Topo',
							url: `https://api.maptiler.com/maps/topo-v2/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-topo-v4',
							title: 'Topo v4',
							url: `https://api.maptiler.com/maps/topo-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-topo-v4-dark',
							title: 'Topo Dark v4',
							url: `https://api.maptiler.com/maps/topo-v4-dark/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-topo-v4-pastel',
							title: 'Topo Pastel v4',
							url: `https://api.maptiler.com/maps/topo-v4-pastel/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-topo-v4-topographique',
							title: 'Topo Topographique v4',
							url: `https://api.maptiler.com/maps/topo-v4-topographique'/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-winter-v2',
							title: 'Winter',
							url: `https://api.maptiler.com/maps/winter-v2/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-winter-v4',
							title: 'Winter v4',
							url: `https://api.maptiler.com/maps/winter-v4/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-winter-v4-dark',
							title: 'Winter Dark v4',
							url: `https://api.maptiler.com/maps/winter-v4-dark/style.json?key=${key}`
						}
					]
				},
				{
					type: 'LayerGroup',
					title: 'Japan',
					entries: [
						{
							type: 'Layer',
							id: 'base-maptiler-jp-gsi-standard',
							title: 'JP GSI Standard',
							url: `https://api.maptiler.com/maps/jp-gsi-standard/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-jp-mierune-streets',
							title: 'JP MIERUNE Streets',
							url: `https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-jp-mierune-gray',
							title: 'JP MIERUNE Gray',
							url: `https://api.maptiler.com/maps/jp-mierune-gray/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-jp-mierune-dark',
							title: 'JP MIERUNE Dark',
							url: `https://api.maptiler.com/maps/jp-mierune-dark/style.json?key=${key}`
						}
					]
				},
				{
					type: 'LayerGroup',
					title: 'Netherlands',
					entries: [
						{
							type: 'Layer',
							id: 'base-maptiler-nl-cartiqo-topo',
							title: 'NL Cartiqo',
							url: `https://api.maptiler.com/maps/nl-cartiqo-topo/style.json?key=${key}`
						}
					]
				},
				{
					type: 'LayerGroup',
					title: 'Switzerland',
					entries: [
						{
							type: 'Layer',
							id: 'base-maptiler-cadastre',
							title: 'CH Cadastre',
							url: `https://api.maptiler.com/maps/cadastre/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-ch-swisstopo-lbm',
							title: 'CH swisstopo LBM',
							url: `https://api.maptiler.com/maps/ch-swisstopo-lbm/style.json?key=${key}`
						}
					]
				},
				{
					type: 'LayerGroup',
					title: 'United Kingdom',
					entries: [
						{
							type: 'Layer',
							id: 'base-maptiler-uk-openzoomstack-road',
							title: 'UK OS Open Zoomstack',
							url: `https://api.maptiler.com/maps/uk-openzoomstack-road/style.json?key=${key}`
						}
					]
				}
			]
		});
	}
	//{
	//	const miscGroup: LayerConfig.LayerGroup = {
	//		type: 'LayerGroup',
	//		title: 'Misc (non free)',
	//		entries: []
	//	};
	//	if (keyes['maptiler']) {
	//		const key = keyes['maptiler'];
	//		miscGroup.entries.push();
	//	}
	//	if (miscGroup.entries.length > 0) {
	//		entries.push(miscGroup);
	//	}
	//}
	return entries;
}

export function getOverlayLayerNonfree(keys: LayerNonfreeKeys): LayerConfig.LayerConfigEntry[] {
	const entries: LayerConfig.LayerConfigEntry[] = [];

	if (keys['maptiler']) {
		const key = keys['maptiler'];
		entries.push({
			type: 'LayerGroup',
			title: 'Maptiler',
			entries: [
				{
					type: 'Layer',
					id: 'overlay-maptiler-contours',
					title: 'Contours',
					url: `https://api.maptiler.com/maps/topo-v4/style.json?key=${key}`,
					styleSwapOptions: {
						transformStyle: (_previous, next) => {
							return {
								...next,
								sources: {
									contours: next.sources.contours
								},
								layers: next.layers.filter((v) => 'source' in v && v.source === 'contours')
							};
						}
					}
				},
				{
					type: 'Layer',
					id: 'overlay-maptiler-ocean-bathymetric-contours',
					title: 'Bathymetric Contours',
					url: maptiler_ocean_bathymetric_contours,
					styleSwapOptions: {
						transformStyle: (_previous, next) => {
							return JSON.parse(JSON.stringify(next).replaceAll('{key}', `${key}`));
						}
					}
				},
				{
					type: 'Layer',
					id: 'overlay-maptiler-outdoor',
					title: 'Outdoor',
					url: `https://api.maptiler.com/maps/outdoor-v4/style.json?key=${key}`,
					styleSwapOptions: {
						transformStyle: (_previous, next) => {
							return {
								...next,
								sources: {
									outdoor: next.sources.outdoor
								},
								layers: next.layers.filter((v) => 'source' in v && v.source === 'outdoor')
							};
						}
					}
				}
			]
		});
	}

	return entries;
}
