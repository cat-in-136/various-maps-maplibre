import type * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';
import tjmsy_orilibre_global_maptiler from '../../../static/assets/map-data/tjmsy-orilibre-global-maptiler.min.json?url';
import maptiler_ocean_bathymetric_contours from '../../../static/assets/map-data/maptiler-ocean-bathymetric-contours-catin136.min.overlay.json?url';

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

export function getBaseLayerNonfree(
	keyes: LayerNonfreeKeys
): MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] {
	const entries: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [];
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
							id: 'base-maptiler-backdrop',
							title: 'Backdrop',
							url: `https://api.maptiler.com/maps/backdrop/style.json?key=${key}`
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
							id: 'base-maptiler-dataviz',
							title: 'Dataviz',
							url: `https://api.maptiler.com/maps/dataviz/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-landscape',
							title: 'Landscape',
							url: `https://api.maptiler.com/maps/landscape/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-ocean',
							title: 'Ocean',
							url: `https://api.maptiler.com/maps/ocean/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-openstreetmap',
							title: 'OpenStreetMap',
							url: `https://api.maptiler.com/maps/openstreetmap/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-outdoor-v2',
							title: 'Outdoor',
							url: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-satellite',
							title: 'Satellite',
							url: `https://api.maptiler.com/maps/satellite/style.json?key=${key}`
						},
						{
							type: 'Layer',
							id: 'base-maptiler-streets-v2',
							title: 'Streets',
							url: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`
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
							id: 'base-maptiler-winter-v2',
							title: 'Winter',
							url: `https://api.maptiler.com/maps/winter-v2/style.json?key=${key}`
						}
					]
				},
				{
					type: 'LayerGroup',
					title: 'Japan',
					entries: [
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
	{
		const miscGroup: MaplibreCompondLayerUI.LayerConfig.LayerGroup = {
			type: 'LayerGroup',
			title: 'Misc (non free)',
			entries: []
		};
		if (keyes['maptiler']) {
			const key = keyes['maptiler'];
			miscGroup.entries.push({
				type: 'Layer',
				id: 'base-tjmsy-orilibre-global-maptiler',
				title: 'tjmsy/orilibre Global with Contour (Maptiler)',
				url: tjmsy_orilibre_global_maptiler,
				html: `<a href="https://github.com/tjmsy/orilibre">tjmsy/orilibre</a>'s Global (with Contour) contour replaced with Maptiler's version, converted into a maplibre style json.`,
				styleSwapOptions: {
					transformStyle: (_previous, next) => {
						return JSON.parse(JSON.stringify(next).replaceAll('{key}', `${key}`));
					}
				}
			});
		}
		if (miscGroup.entries.length > 0) {
			entries.push(miscGroup);
		}
	}
	return entries;
}

export function getOverlayLayerNonfree(
	keys: LayerNonfreeKeys
): MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] {
	const entries: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [];

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
					url: `https://api.maptiler.com/maps/topo-v2/style.json?key=${key}`,
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
					url: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${key}`,
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
