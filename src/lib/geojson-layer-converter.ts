import maplibregl from 'maplibre-gl';
import type * as maplibreglstyle from '@maplibre/maplibre-gl-style-spec';
import * as VectorTextProtocol from 'maplibre-gl-vector-text-protocol';
import { GSIMAP_STYLE_OVERRIDE } from '../lib/gsivectorexperimentalstyle';
import { type LayerConfig } from '../lib/maplibre-compound-layer-ui';

import { getGeoJsonProtocolAction } from '../lib/maplibre-gl-geojson-tiles-qiita';

maplibregl.addProtocol('geojson-tile', getGeoJsonProtocolAction());

namespace Styling {
	export function getPaintForPolygonFill(
		layer: LayerConfig.Layer
	): Required<maplibreglstyle.FillLayerSpecification>['paint'] {
		if (typeof layer.styleurl === 'string') {
			return GSIMAP_STYLE_OVERRIDE[layer.styleurl]?.fill || getDefaultPaintForPolygonFill(false);
		}
		return GSIMAP_STYLE_OVERRIDE[layer.url]?.fill || getDefaultPaintForPolygonFill(false);
	}
	export function getDefaultPaintForPolygonFill(
		forceValue: boolean = false,
		fillOpacity: number = 0.5,
		fillColor: string = '#0000ff',
		fillOutlineColor: string = 'rgba(0,0,0,0)'
	): Required<maplibreglstyle.FillLayerSpecification>['paint'] {
		return {
			'fill-antialias': true,
			'fill-opacity': forceValue
				? fillOpacity
				: [
						'case',
						// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
						['has', '_fillOpacity'],
						['get', '_fillOpacity'],
						['has', '_opacity'],
						['get', '_opacity'],
						// mapbox/simplestyle-spec
						['has', 'fill-opacity'],
						['get', 'fill-opacity'],
						// Default
						fillOpacity
					],
			'fill-color': forceValue
				? fillColor
				: [
						'case',
						// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
						['has', '_fillColor'],
						['get', '_fillColor'],
						['has', '_color'],
						['get', '_color'],
						// mapbox/simplestyle-spec
						['has', 'fill'],
						['get', 'fill'],
						// Default
						fillColor
					],
			'fill-outline-color': forceValue
				? fillOutlineColor
				: [
						'case',
						// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
						['has', '_color'],
						['get', '_color'],
						// mapbox/simplestyle-spec
						['has', 'stroke'],
						['get', 'stroke'],
						// Default
						fillOutlineColor
					]
		};
	}

	export function getPaintForLineLine(
		layer: LayerConfig.Layer
	): Required<maplibreglstyle.LineLayerSpecification>['paint'] {
		if (typeof layer.styleurl === 'string') {
			return GSIMAP_STYLE_OVERRIDE[layer.styleurl]?.line || getDefaultPaintForLineLine(false);
		}
		return GSIMAP_STYLE_OVERRIDE[layer.url]?.line || getDefaultPaintForLineLine(false);
	}
	export function getDefaultPaintForLineLine(
		forceValue: boolean = false,
		lineWidth: number = 3,
		lineOpacity: number = 0.5,
		lineColor: string = '#ff00ff'
	): Required<maplibreglstyle.LineLayerSpecification>['paint'] {
		return {
			'line-width': forceValue
				? lineWidth
				: [
						'case',
						// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
						['has', '_weight'],
						['get', '_weight'],
						// mapbox/simplestyle-spec
						['has', 'stroke-width'],
						['get', 'stroke-width'],
						// Default
						lineWidth
					],
			'line-opacity': forceValue
				? lineOpacity
				: [
						'case',
						// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
						['has', '_opacity'],
						['get', '_opacity'],
						// mapbox/simplestyle-spec
						['has', 'stroke-opacity'],
						['get', 'stroke-opacity'],
						// Default
						lineOpacity
					],
			'line-color': forceValue
				? lineColor
				: [
						'case',
						// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
						['has', '_color'],
						['get', '_color'],
						// mapbox/simplestyle-spec
						['has', 'stroke'],
						['get', 'stroke'],
						// Default
						lineColor
					]
		};
	}

	export function getPaintForPointCircle(
		layer: LayerConfig.Layer
	): Required<maplibreglstyle.CircleLayerSpecification>['paint'] {
		if (typeof layer.styleurl === 'string') {
			return GSIMAP_STYLE_OVERRIDE[layer.styleurl]?.circle || getDefaultPaintForPointCircle(false);
		}
		return GSIMAP_STYLE_OVERRIDE[layer.url]?.circle || getDefaultPaintForPointCircle(false);
	}
	export function getDefaultPaintForPointCircle(
		forceValue: boolean = false,
		circleRadius: number = 8,
		circleColor: string = '#ff0000',
		circleOpacity: number = 0.5
	): Required<maplibreglstyle.CircleLayerSpecification>['paint'] {
		return {
			'circle-radius': forceValue
				? circleRadius
				: [
						'case',
						// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
						['has', '_radius'],
						['get', '_radius'],
						// mapbox/simplestyle-spec
						['has', 'marker-size'],
						['match', ['get', 'marker-size'], 'small', 5, 'medium', 8, 'large', 10, circleRadius],
						// Default
						circleRadius
					],
			'circle-color': forceValue
				? circleColor
				: [
						'case',
						// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
						['has', '_fillColor'],
						['get', '_fillColor'],
						['has', '_color'],
						['get', '_color'],
						// mapbox/simplestyle-spec
						['has', 'marker-color'],
						['get', 'marker-color'],
						['has', 'fill'],
						['get', 'fill'],
						// Default
						circleColor
					],
			'circle-opacity': forceValue
				? circleOpacity
				: [
						'case',
						// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
						['has', '_fillOpacity'],
						['get', '_fillOpacity'],
						['has', '_opacity'],
						['get', '_opacity'],
						// mapbox/simplestyle-spec
						['has', 'fill-opacity'],
						['get', 'fill-opacity'],
						// Default
						circleOpacity
					],
			'circle-stroke-width': [
				'case',
				// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
				['has', '_weight'],
				['get', '_weight'],
				// mapbox/simplestyle-spec
				['has', 'stroke-width'],
				['get', 'stroke-width'],
				// Default
				3
			],
			'circle-stroke-color': [
				'case',
				// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
				['has', '_color'],
				['get', '_color'],
				// mapbox/simplestyle-spec
				['has', 'stroke'],
				['get', 'stroke'],
				// Default
				'rgba(0,0,0,0)'
			],
			'circle-stroke-opacity': [
				'case',
				// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
				['has', '_opacity'],
				['get', '_opacity'],
				// mapbox/simplestyle-spec
				['has', 'stroke-opacity'],
				['get', 'stroke-opacity'],
				// Default
				0
			]
		};
	}

	export function getLayerParamsForIconImageSymbol(layer: LayerConfig.Layer): {
		layout: Required<maplibreglstyle.SymbolLayerSpecification>['layout'];
		paint: Required<maplibreglstyle.SymbolLayerSpecification>['paint'];
		filter: maplibreglstyle.FilterSpecification;
	} {
		if (typeof layer.styleurl === 'string') {
			return (
				GSIMAP_STYLE_OVERRIDE[layer.styleurl]?.layoutAndPaintForIconImageSymbol ||
				getDefaultLayerParamsForPointSymbolIconImage()
			);
		}
		return (
			GSIMAP_STYLE_OVERRIDE[layer.url]?.layoutAndPaintForIconImageSymbol ||
			getDefaultLayerParamsForPointSymbolIconImage()
		);
	}
	export function getDefaultLayerParamsForPointSymbolIconImage(): {
		layout: Required<maplibreglstyle.SymbolLayerSpecification>['layout'];
		paint: Required<maplibreglstyle.SymbolLayerSpecification>['paint'];
		filter: maplibreglstyle.FilterSpecification;
	} {
		return {
			layout: {
				'icon-image': [
					'case',
					// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
					['has', '_iconUrl'],
					['get', '_iconUrl'],
					// Default
					''
				]
			},
			paint: {
				'icon-opacity': [
					'case',
					// 地理院 スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
					['has', '_opacity'],
					['get', '_opacity'],
					// Default
					1
				]
			},
			filter: [
				'all',
				['==', '$type', 'Point'],
				// 国土地理院スタイルつき GeoJSON 規約 (gsi-cyberjapan/geojson-with-style-spec)
				['has', '_iconUrl']
			]
		};
	}
}

export namespace GeoJsonLayerConverter {
	export function addToMap(
		layerFormat: LayerConfig.LayerFormat,
		layer: LayerConfig.Layer,
		map: maplibregl.Map
	) {
		const id = layer.id;
		let vectorSource: maplibregl.VectorSourceSpecification;
		const source = `source-${id}-geojson`;
		let sourceLayer: string | undefined = undefined;
		if ((layerFormat as { tile: 'geojson' }).tile === 'geojson') {
			vectorSource = {
				type: 'vector',
				tiles: [
					'geojson-tile://' +
						(!!layer.maxNativeZoom ? `maxNativeZoom=${layer.maxNativeZoom};` : '') +
						layer.url
				],
				scheme: layer.scheme ?? 'xyz',
				attribution: layer.attribution
			};
			if (layer.maxZoom) {
				vectorSource.maxzoom = layer.maxZoom;
			}
			if (layer.minZoom) {
				vectorSource.minzoom = layer.minZoom;
			}
			map.addSource(source, vectorSource);
			sourceLayer = 'v'; // 変換時、source-layer 名は "v" としている
		} else if ((layerFormat as { single: 'geojson' }).single === 'geojson') {
			const data =
				!/^kml:\/\//.test(layer.url) && /\.kml$/i.test(layer.url)
					? `kml://${layer.url}`
					: !/^topojson:\/\//.test(layer.url) && /\.topojson/i.test(layer.url)
						? `topojson://${layer.url}`
						: !/^gpx:\/\//.test(layer.url) && /\.gpx$/i.test(layer.url)
							? `gpx://${layer.url}`
							: layer.url;
			map.addSource(source, {
				type: 'geojson',
				data,
				attribution: layer.attribution ?? ''
			});
		}

		const iconImageSymbolParam = Styling.getLayerParamsForIconImageSymbol(layer);
		const addLayerObjects: Extract<maplibregl.LayerSpecification, { source: string }>[] = [
			{
				id: `layer-${id}-geojson-fill`,
				type: 'fill',
				source,
				paint: Styling.getPaintForPolygonFill(layer),
				filter: ['==', '$type', 'Polygon']
			},
			{
				id: `layer-${id}-geojson-line`,
				type: 'line',
				source,
				paint: Styling.getPaintForLineLine(layer),
				filter: ['==', '$type', 'LineString']
			},
			{
				id: `layer-${id}-geojson-circle`,
				type: 'circle',
				source,
				paint: Styling.getPaintForPointCircle(layer),
				filter: ['==', '$type', 'Point']
			},
			{
				id: `layer-${id}-geojson-symbol-icon-image`,
				type: 'symbol',
				source,
				paint: iconImageSymbolParam.paint,
				layout: iconImageSymbolParam.layout,
				filter: iconImageSymbolParam.filter
			}
		];

		for (const l of addLayerObjects) {
			if (sourceLayer && !('source-layer' in l)) {
				l['source-layer'] = sourceLayer;
			}
			map.addLayer(l);
			map.on('click', l.id, (e) => {
				if (e.features && e.features.length > 0) {
					const columnSet = new Set<string>();
					e.features.forEach((f) => {
						Object.keys(f.properties).forEach((k) => columnSet.add(k));
					});
					const rows = Array.from(columnSet); // 属性名の配列

					let table =
						'<table border="1" style="border-collapse:collapse;"><thead><tr><th>prop</th>';
					for (let idx = 0; idx < e.features.length; idx++) {
						table += `<th>#${idx + 1}</th>`;
					}
					table += '</tr></thead><tbody>';

					for (const row of rows) {
						table += `<tr><td>${row}</td>`;
						for (const feature of e.features) {
							table += `<td>${feature.properties[row] ?? ''}</td>`;
						}
						table += '</tr>';
					}
					table += '</tbody></table>';

					new maplibregl.Popup().setLngLat(e.lngLat).setHTML(table).addTo(map);
				}
			});
			map.on('mouseenter', l.id, (_e) => {
				map.getCanvas().style.cursor = 'pointer';
			});
			map.on('mouseleave', l.id, (_e) => {
				map.getCanvas().style.cursor = '';
			});
		}
	}

	export function removeFromMap(layer: LayerConfig.Layer, map: maplibregl.Map) {
		const id = layer.id;

		map.removeLayer(`layer-${id}-geojson-fill`);
		map.removeLayer(`layer-${id}-geojson-line`);
		map.removeLayer(`layer-${id}-geojson-circle`);
		map.removeLayer(`layer-${id}-geojson-symbol-icon-image`);
		map.removeSource(`source-${id}-geojson`);
	}

	export function updateOpacity(layer: LayerConfig.Layer, map: maplibregl.Map, opacity?: number) {
		const id = layer.id;
		const defaultPaint = {
			fill: Styling.getDefaultPaintForPolygonFill(false),
			line: Styling.getDefaultPaintForLineLine(false),
			circle: Styling.getDefaultPaintForPointCircle(false),
			symbol: Styling.getDefaultLayerParamsForPointSymbolIconImage().paint
		};

		if (opacity !== undefined) {
			const value = opacity / 255.0;
			map.setPaintProperty(`layer-${id}-geojson-fill`, 'fill-opacity', value);
			map.setPaintProperty(`layer-${id}-geojson-line`, 'line-opacity', value);
			map.setPaintProperty(`layer-${id}-geojson-circle`, 'circle-opacity', value);
			map.setPaintProperty(`layer-${id}-geojson-symbol-icon-image`, 'icon-opacity', value);
		} else {
			map.setPaintProperty(
				`layer-${id}-geojson-fill`,
				'fill-opacity',
				defaultPaint.fill['fill-opacity']
			);
			map.setPaintProperty(
				`layer-${id}-geojson-line`,
				'line-opacity',
				defaultPaint.line['line-opacity']
			);
			map.setPaintProperty(
				`layer-${id}-geojson-circle`,
				'circle-opacity',
				defaultPaint.circle['circle-opacity']
			);
			map.setPaintProperty(
				`layer-${id}-geojson-symbol-icon-image`,
				'icon-opacity',
				defaultPaint.symbol['icon-opacity']
			);
		}
	}
}
