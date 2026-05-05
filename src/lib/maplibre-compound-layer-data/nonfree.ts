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

type MaptilerLayerDef = { mapId: string; title: string };
type MaptilerGroupDef = { title: string; layers: MaptilerLayerDef[] };

const maptilerGroups: MaptilerGroupDef[] = [
	{
		title: 'Standard maps',
		layers: [
			{ mapId: 'aquarelle', title: 'Aquarelle' },
			{ mapId: 'aquarelle-v4', title: 'Aquarelle v4' },
			{ mapId: 'backdrop', title: 'Backdrop' },
			{ mapId: 'backdrop-v4', title: 'Backdrop v4' },
			{ mapId: 'backdrop-v4-dark', title: 'Backdrop Dark v4' },
			{ mapId: 'backdrop-v4-light', title: 'Backdrop Light v4' },
			{ mapId: 'basic-v2', title: 'Basic' },
			{ mapId: 'bright-v2', title: 'Bright' },
			{ mapId: 'base-v4', title: 'Base v4' },
			{ mapId: 'dataviz', title: 'Dataviz' },
			{ mapId: 'dataviz-v4', title: 'Dataviz v4' },
			{ mapId: 'dataviz-v4-dark', title: 'Dataviz Dark v4' },
			{ mapId: 'dataviz-v4-light', title: 'Dataviz Light v4' },
			{ mapId: 'landscape', title: 'Landscape' },
			{ mapId: 'landscape-v4', title: 'Landscape v4' },
			{ mapId: 'landscape-v4-dark', title: 'Landscape Dark v4' },
			{ mapId: 'landscape-v4-vivid', title: 'Landscape Vivid v4' },
			{ mapId: 'ocean', title: 'Ocean' },
			{ mapId: 'ocean-v4', title: 'Ocean v4' },
			{ mapId: 'ocean-v4-dark', title: 'Ocean Dark v4' },
			{ mapId: 'openstreetmap', title: 'OpenStreetMap' },
			{ mapId: 'openstreetmap-dark', title: 'OpenStreetMap Dark' },
			{ mapId: 'outdoor-v2', title: 'Outdoor' },
			{ mapId: 'outdoor-v4', title: 'Outdoor v4' },
			{ mapId: 'outdoor-v4-dark', title: 'Outdoor Dark v4' },
			{ mapId: 'hybrid-v4', title: 'Satellite Hybrid v4' },
			{ mapId: 'hybrid-v4-dark', title: 'Satellite Hybrid Dark v4' },
			{ mapId: 'satellite', title: 'Satellite' },
			{ mapId: 'satellite-v4', title: 'Satellite v4' },
			{ mapId: 'streets-v2', title: 'Streets' },
			{ mapId: 'streets-v4', title: 'Streets v4' },
			{ mapId: 'streets-v4-dark', title: 'Streets Dark v4' },
			{ mapId: 'streets-v4-pastel', title: 'Streets Pastel v4' },
			{ mapId: 'toner-v2', title: 'Toner' },
			{ mapId: 'topo-v2', title: 'Topo' },
			{ mapId: 'topo-v4', title: 'Topo v4' },
			{ mapId: 'topo-v4-dark', title: 'Topo Dark v4' },
			{ mapId: 'topo-v4-pastel', title: 'Topo Pastel v4' },
			{ mapId: 'topo-v4-topographique', title: 'Topo Topographique v4' },
			{ mapId: 'winter-v2', title: 'Winter' },
			{ mapId: 'winter-v4', title: 'Winter v4' },
			{ mapId: 'winter-v4-dark', title: 'Winter Dark v4' }
		]
	},
	{
		title: 'Japan',
		layers: [
			{ mapId: 'jp-gsi-standard', title: 'JP GSI Standard' },
			{ mapId: 'jp-mierune-streets', title: 'JP MIERUNE Streets' },
			{ mapId: 'jp-mierune-gray', title: 'JP MIERUNE Gray' },
			{ mapId: 'jp-mierune-dark', title: 'JP MIERUNE Dark' }
		]
	},
	{
		title: 'Netherlands',
		layers: [{ mapId: 'nl-cartiqo-topo', title: 'NL Cartiqo' }]
	},
	{
		title: 'Switzerland',
		layers: [
			{ mapId: 'cadastre', title: 'CH Cadastre' },
			{ mapId: 'ch-swisstopo-lbm', title: 'CH swisstopo LBM' }
		]
	},
	{
		title: 'United Kingdom',
		layers: [{ mapId: 'uk-openzoomstack-road', title: 'UK OS Open Zoomstack' }]
	}
];

function createMaptilerLayer(key: string, def: MaptilerLayerDef): LayerConfig.LayerConfigEntry {
	return {
		type: 'Layer',
		id: `base-maptiler-${def.mapId}`,
		title: def.title,
		url: `https://api.maptiler.com/maps/${def.mapId}/style.json?key=${key}`
	};
}

export function getBaseLayerNonfree(keys: LayerNonfreeKeys): LayerConfig.LayerConfigEntry[] {
	const entries: LayerConfig.LayerConfigEntry[] = [];
	if (keys['maptiler']) {
		const key = keys['maptiler'];
		entries.push({
			type: 'LayerGroup',
			title: 'Maptiler',
			entries: maptilerGroups.map((group) => ({
				type: 'LayerGroup' as const,
				title: group.title,
				entries: group.layers.map((layer) => createMaptilerLayer(key, layer))
			}))
		});
	}
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
