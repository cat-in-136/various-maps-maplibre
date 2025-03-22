import type * as MaplibreCompondLayerUI from './maplibre-compound-layer-ui';

type BaseLayerNonFreeKeys = {
	maptiler?: string;
};

export function getBaseLayerNonfreeFromURL(
	url: Location | URL = window.location
): MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] {
	const urlurl = url instanceof Location ? new URL(url.href) : url;
	const searchParams = urlurl.searchParams;
	const hashParams = new URLSearchParams(urlurl.hash.replace(/^#/, ''));

	let keys: BaseLayerNonFreeKeys = {};
	if (searchParams.has('maptiler_key')) {
		keys.maptiler = searchParams.get('maptiler_key') as string;
	}
	if (hashParams.has('maptiler_key')) {
		keys.maptiler = hashParams.get('maptiler_key') as string;
	}

	console.debug({ url, keys, searchParams, hashParams });

	return getBaseLayerNonfree(keys);
}

export function getBaseLayerNonfree(
	keyes: BaseLayerNonFreeKeys
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
							title: 'JP MIERUNE',
							url: `https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=${key}`
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
	return entries;
}
