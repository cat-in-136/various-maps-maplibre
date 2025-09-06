import * as MaplibreCompondLayerUI from '../maplibre-compound-layer-ui';

import gsi_light from '../../../static/assets/map-data/gsi-light.min.json?url';
import gsi_ort_label from '../../../static/assets/map-data/gsi-ort-label.min.json?url';
import gsi_ort_hybrid_light from '../../../static/assets/map-data/gsi-ort-hybrid-light-catin136.min.json?url';
import gsi_h_std from '../../../static/assets/map-data/gsi-h-std.min.json?url';
import gsi_h_pale from '../../../static/assets/map-data/gsi-h-pale.min.json?url';
import gsi_railway from '../../../static/assets/map-data/gsi-railway.min.json?url';
import gsi_land from '../../../static/assets/map-data/gsi-land.min.json?url';
import gsi_river from '../../../static/assets/map-data/gsi-river.min.json?url';

export const GSI_VECTOR_BASE_LAYERS: MaplibreCompondLayerUI.LayerConfig.LayerConfigEntry[] = [
	{
		type: 'LayerGroup',
		title: '地理院地図Vector',
		entries: [
			{
				type: 'Layer',
				id: 'base-std',
				title: '標準地図',
				url: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json',
				maxNativeZoom: 17.9
			},
			{
				type: 'Layer',
				id: 'base-pale',
				title: '淡色地図',
				url: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/pale.json',
				maxNativeZoom: 17.9
			},
			{
				type: 'Layer',
				id: 'base-std',
				title: '白地図',
				url: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/blank.json',
				maxNativeZoom: 17.9
			},
			{
				type: 'LayerGroup',
				title: 'その他の地図',
				entries: [
					{
						type: 'Layer',
						id: 'extra-gsi-light',
						title: '軽い標準地図',
						url: gsi_light,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-ort-label',
						title: '写真+注記',
						url: gsi_ort_label,
						maxNativeZoom: 18.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-hybrid-light',
						title: '写真+軽い標準地図',
						url: gsi_ort_hybrid_light,
						maxNativeZoom: 18.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-h-std',
						title: '標準+陰影',
						url: gsi_h_std,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-h-pale',
						title: '淡色+陰影',
						url: gsi_h_pale,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-railway',
						title: '鉄道路線図',
						url: gsi_railway,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-land',
						title: '地形だけ地図',
						url: gsi_land,
						maxNativeZoom: 17.9
					},
					{
						type: 'Layer',
						id: 'extra-gsi-river',
						title: '川だけ地図',
						url: gsi_river,
						maxNativeZoom: 17.9
					}
				]
			}
		]
	}
];
