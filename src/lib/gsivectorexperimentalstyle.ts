import type * as maplibreglstyle from '@maplibre/maplibre-gl-style-spec';

// https://cyberjapandata.gsi.go.jp/xyz/experimental_landformclassification1/style.js
const LANDFORMCLASSIFICATION_FILL: Required<maplibreglstyle.FillLayerSpecification>['paint'] = {
	// prettier-ignore
	'fill-color': [
		'match',
		['get', 'code'],
		'10101', '#d9cbae',
		'1010101', '#d9cbae',
		'11201', '#d9cbae',
		'11202', '#d9cbae',
		'11203', '#d9cbae',
		'11204', '#d9cbae',
		'10202', '#9466ab',
		'10204', '#9466ab',
		'2010201', '#9466ab',
		'10205', '#cc99ff',
		'10206', '#cc99ff',
		'10301', '#ffaa00',
		'10302', '#ffaa00',
		'10303', '#ffaa00',
		'10304', '#ffaa00',
		'10308', '#ffaa00',
		'10314', '#ffaa00',
		'10305', '#ffaa00',
		'10508', '#ffaa00',
		'2010101', '#ffaa00',
		'10306', '#ffaa00',
		'10307', '#ffaa00',
		'10310', '#ffaa00',
		'10312', '#ffaa00',
		'10401', '#99804d',
		'10402', '#99804d',
		'10403', '#99804d',
		'10404', '#99804d',
		'10406', '#99804d',
		'10407', '#99804d',
		'3010101', '#99804d',
		'10501', '#cacc60',
		'10502', '#cacc60',
		'3020101', '#cacc60',
		'10503', '#ffff33',
		'3040101', '#ffff33',
		'10506', '#fbe09d',
		'10507', '#fbe09d',
		'10801', '#fbe09d',
		'10504', '#ffff99',
		'10505', '#ffff99',
		'10512', '#ffff99',
		'3050101', '#ffff99',
		'10601', '#a3cc7e',
		'2010301', '#a3cc7e',
		'10701', '#bbff99',
		'3030101', '#bbff99',
		'10702', '#bbff99',
		'10705', '#bbff99',
		'10703', '#00d1a4',
		'10804', '#00d1a4',
		'3030201', '#00d1a4',
		'10704', '#6699ff',
		'3040201', '#6699ff',
		'3040202', '#6699ff',
		'3040301', '#1f9999',
		'10802', '#9f9fc4',
		'10803', '#9f9fc4',
		'10807', '#9f9fc4',
		'10808', '#9f9fc4',
		'10805', '#e5ffff',
		'10806', '#e5ffff',
		'10901', '#e5ffff',
		'10903', '#e5ffff',
		'5010201', '#e5ffff',
		'10904', '#779999',
		'5010301', '#779999',
		'11001', '#85c4d1',
		'11003', '#85c4d1',
		'11009', '#85c4d1',
		'11011', '#85c4d1',
		'4010301', '#85c4d1',
		'11002', '#8ad8b6',
		'11004', '#ef8888',
		'11005', '#ef8888',
		'11006', '#ef8888',
		'11007', '#ef8888',
		'11014', '#ef8888',
		'4010201', '#ef8888',
		'11008', '#c37aff',
		'4010101', '#c37aff',
		'11010', '#ffe8e8',
		'999999', '#144dfa',
		'101', '#e6e600',
		'102', '#00e2e6',
		'103', '#2ae600',
		'104', '#e60400',
		'105', '#5e5ce6',
		'106', '#ff9600',
		'11', '#998b79',
		'12', '#664d55',
		'13', '#7580D2',
		'21', '#C9FF05',
		'31', '#FF0116',
		'32', '#FF5101',
		'33', '#C975B0',
		'34', '#FFBBFC',
		'41', '#ffb31a',
		'51', '#C7FFF7',
		'61', '#FFEA01',
		'71', '#1201FF',
		'1', '#998c7a',
		'3', '#FF0116',
		'4', '#ffb31a',
		'5', '#C7FFF7',
		'6', '#FFEA01',
		'7', '#1201FF',
		'', '#85B6E7',
		'9999', '#ff00ff',
		'#fff'
	],
	'fill-opacity': ['case', ['==', ['number', ['get', 'code']], 9999], 0.3, 0.5]
};

export const GSIMAP_STYLE_OVERRIDE: {
	[propName: string]: {
		fill?: Required<maplibreglstyle.FillLayerSpecification>['paint'];
		line?: Required<maplibreglstyle.LineLayerSpecification>['paint'];
		circle?: Required<maplibreglstyle.CircleLayerSpecification>['paint'];
		layoutAndPaintForIconImageSymbol?: {
			layout: Required<maplibreglstyle.SymbolLayerSpecification>['layout'];
			paint: Required<maplibreglstyle.SymbolLayerSpecification>['paint'];
			filter: maplibreglstyle.FilterSpecification;
		};
	};
} = {
	// 地図情報（道路中心線）
	'https://maps.gsi.go.jp/xyz/experimental_rdcl/style_canvas.js': {
		line: {
			'line-color': [
				'case',
				['any', ['==', ['get', 'rdCtg'], '国道'], ['==', ['get', 'rdCtg'], '都道府県道']],
				'#777777',
				['==', ['get', 'rdCtg'], '高速自動車国道等'],
				'#ff1493',
				'#aaaaaa'
			],
			'line-width': [
				'case',
				[
					'any',
					['==', ['get', 'rdCtg'], '国道'],
					['==', ['get', 'rdCtg'], '都道府県道'],
					['==', ['get', 'rdCtg'], '高速自動車国道等']
				],
				5,
				2
			],
			'line-opacity': 0.5
			//'line-dasharray': [
			//	'case',
			//	[
			//		'all',
			//		['!=', ['get', 'type'], '通常部'],
			//		[
			//			'all',
			//			['!=', ['get', 'rdCtg'], '国道'],
			//			['!=', ['get', 'rdCtg'], '都道府県道'],
			//			['!=', ['get', 'rdCtg'], '高速自動車国道等']
			//		]
			//	],
			//	['literal', []],
			//	['literal', [1, 0]]
			//]
		}
	},
	// 地図情報（鉄道中心線）
	'https://maps.gsi.go.jp/xyz/experimental_railcl/style_canvas.js': {
		line: {
			'line-color': ['match', ['get', 'snglDbl'], '駅部分', '#ff0', '#0f0'],
			'line-width': ['match', ['get', 'snglDbl'], '駅部分', 14, 7],
			'line-opacity': 0.5
		}
	},
	// 地図情報（河川中心線）
	'https://maps.gsi.go.jp/xyz/experimental_rvrcl/style_canvas.js': {
		line: {
			'line-color': [
				'match',
				['get', 'type'],
				'河川中心線（通常部）',
				'#00f',
				'河川中心線（枯れ川部）',
				'#00f',
				/* それ以外は #77f */
				'#77f'
			],
			'line-width': [
				'match',
				['get', 'type'],
				'河川中心線（通常部）',
				5,
				'河川中心線（枯れ川部）',
				5,
				/* それ以外は 2 */
				2
			],
			'line-opacity': 0.5
		}
	},
	// 基盤地図情報_基本項目
	'https://maps.gsi.go.jp/xyz/experimental_fgd/style_canvas.js': {
		line: {
			'line-color': [
				'case',
				['==', ['get', 'class'], 'Cstline'],
				'#00f',
				['==', ['get', 'class'], 'Cntr'],
				'#ca5',
				['==', ['get', 'class'], 'WStrL'],
				'#77f',
				['==', ['get', 'class'], 'WL'],
				'#00f',
				['==', ['get', 'class'], 'RdEdg'],
				'#777',
				['==', ['get', 'class'], 'RdCompt'],
				'#aaa',
				['==', ['get', 'class'], 'RailCL'],
				'#7f7',
				['all', ['==', ['get', 'class'], 'BldL'], ['==', ['get', 'type'], '堅ろう建物']],
				'#f72',
				['==', ['get', 'class'], 'BldL'],
				'#f72',
				['==', ['get', 'class'], 'SBBdry'],
				'#fbb',
				['all', ['==', ['get', 'class'], 'CommBdry'], ['==', ['get', 'vis'], '非表示']],
				'#f77',
				['==', ['get', 'class'], 'CommBdry'],
				'#f77',
				['all', ['==', ['get', 'class'], 'AdmBdry'], ['==', ['get', 'vis'], '非表示']],
				'#f77',
				['==', ['get', 'class'], 'AdmBdry'],
				'#f77',
				'#000'
			],
			'line-width': [
				'case',
				['==', ['get', 'class'], 'Cstline'],
				2,
				['==', ['get', 'class'], 'Cntr'],
				2,
				['==', ['get', 'class'], 'WStrL'],
				1,
				['==', ['get', 'class'], 'WL'],
				2,
				['==', ['get', 'class'], 'RdEdg'],
				2,
				['==', ['get', 'class'], 'RdCompt'],
				1,
				['==', ['get', 'class'], 'RailCL'],
				2,
				['all', ['==', ['get', 'class'], 'BldL'], ['==', ['get', 'type'], '堅ろう建物']],
				2,
				['==', ['get', 'class'], 'BldL'],
				1,
				['==', ['get', 'class'], 'SBBdry'],
				2,
				['all', ['==', ['get', 'class'], 'CommBdry'], ['==', ['get', 'vis'], '非表示']],
				0,
				['==', ['get', 'class'], 'CommBdry'],
				2,
				['all', ['==', ['get', 'class'], 'AdmBdry'], ['==', ['get', 'vis'], '非表示']],
				0,
				['==', ['get', 'class'], 'AdmBdry'],
				4,
				1
			],
			'line-opacity': [
				'case',
				['all', ['==', ['get', 'class'], 'CommBdry'], ['==', ['get', 'vis'], '非表示']],
				0,
				['all', ['==', ['get', 'class'], 'AdmBdry'], ['==', ['get', 'vis'], '非表示']],
				0,
				true,
				0.5
			]
			//'line-dasharray': [
			//	'case',
			//	['==', ['get', 'class'], 'SBBdry'],
			//	['literal', [5, 5]],
			//	['all', ['==', ['get', 'class'], 'CommBdry'], ['!=', ['get', 'vis'], '非表示']],
			//	['literal', [10, 10]],
			//	['all', ['==', ['get', 'class'], 'AdmBdry'], ['!=', ['get', 'vis'], '非表示']],
			//	['literal', [10, 10]],
			//	['literal', []]
			//]
		}
	},
	// 地形分類（自然地形）
	'https://maps.gsi.go.jp/xyz/experimental_landformclassification1/{z}/{x}/{y}.geojson': {
		fill: LANDFORMCLASSIFICATION_FILL
	},
	// 諸元情報（自然地形『詳細版』）
	'https://maps.gsi.go.jp/xyz/experimental_landformclassification3/{z}/{x}/{y}.geojson': {
		fill: LANDFORMCLASSIFICATION_FILL
	},
	// 地形分類（人工地形）
	'https://maps.gsi.go.jp/xyz/experimental_landformclassification2/{z}/{x}/{y}.geojson': {
		fill: LANDFORMCLASSIFICATION_FILL
	},
	// 基準点
	'https://maps.gsi.go.jp/xyz/cp/{z}/{x}/{y}.geojson': {
		layoutAndPaintForIconImageSymbol: {
			layout: {
				'icon-image': [
					'match',
					['get', '成果状態'],
					'正常',
					[
						'match',
						['get', '基準点種別'],
						'電子基準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/476.png',
						'一等三角点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/201.png',
						'二等三角点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/202.png',
						'三等三角点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/203.png',
						'四等三角点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/204.png',
						'基準水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206.png',
						'一等水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206.png',
						'二等水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/207.png',
						'一等道路水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206.png',
						'二等道路水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/207.png',
						'準基準水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206.png',
						'一等水準交差点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206.png',
						'' // デフォルト値
					],
					[
						'match',
						['get', '基準点種別'],
						'電子基準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/476_None.png',
						'一等三角点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/201_None.png',
						'二等三角点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/202_None.png',
						'三等三角点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/203_None.png',
						'四等三角点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/204_None.png',
						'基準水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206_None.png',
						'一等水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206_None.png',
						'二等水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/207_None.png',
						'一等道路水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206_None.png',
						'二等道路水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/207_None.png',
						'準基準水準点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206_None.png',
						'一等水準交差点',
						'https://maps.gsi.go.jp/portal/sys/v4/symbols/206_None.png',
						'' // デフォルト値
					]
				]
			},
			paint: {},
			filter: ['all', ['has', '成果状態'], ['has', '基準点種別']]
		}
	}
};
