import * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';

export const ICGC_VECTOR_BASE_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
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
			}
		]
	}
];
