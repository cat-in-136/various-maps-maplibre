import maplibregl from 'maplibre-gl';
import type { LayerConfig } from '../lib/maplibre-compound-layer-ui';

export namespace VectorOverlayLayerCreator {
	export async function addToMap(layer: LayerConfig.Layer, map: maplibregl.Map): Promise<void> {
		const id = layer.id;
		const response = await fetch(layer.url);
		if (!response.ok) return;
		const json = await response.json();
		if (json.version === 8 && typeof json.sources === 'object' && typeof json.layers === 'object') {
			const new_style: maplibregl.StyleSpecification = layer.styleSwapOptions?.transformStyle
				? layer.styleSwapOptions.transformStyle(structuredClone(map.getStyle()), json)
				: json;

			// Replace source name if required
			const sourceNameOverrideMap = new Map(
				Object.entries(new_style.sources)
					.filter(([sourceId, source]) => {
						if (sourceId === 'osm') return false;
						const map_source = map.getSource(sourceId);
						if (map_source) {
							if (JSON.stringify(map_source.serialize()) !== JSON.stringify(source)) {
								return true;
							}
						}
						return false;
					})
					.map(([sourceId, _source]) => [sourceId, `source-${id}-${sourceId}`])
			);

			// Merge sprite if exists
			if (new_style.sprite) {
				// Standardize new sprite to array if needed
				const newSprites: Exclude<maplibregl.SpriteSpecification, string> =
					typeof new_style.sprite === 'string'
						? [{ id: 'default', url: new_style.sprite }]
						: new_style.sprite;

				// Apply prefix and add to map
				const spritePrefix = `layer-${id}-`;
				const currentSpriteIDs = map.getSprite().map((v) => v.id);
				for (const sprite of newSprites) {
					const spriteId = `${spritePrefix}${sprite.id}`;
					if (currentSpriteIDs.indexOf(spriteId) >= 0) {
						map.removeSprite(spriteId);
					}
					map.addSprite(spriteId, sprite.url);
				}

				// Update icon-image and pattern references in layers with prefix
				for (const layer of new_style.layers) {
					if (layer.type === 'symbol') {
						if (layer.layout?.['icon-image']) {
							layer.layout['icon-image'] = [
								'let',
								'originalVal',
								Array.isArray(layer.layout?.['icon-image'])
									? layer.layout['icon-image']
									: ['literal', layer.layout['icon-image']],
								[
									'concat',
									[
										'case',
										['in', ':', ['to-string', ['var', 'originalVal']]],
										spritePrefix,
										`${spritePrefix}default:`
									],
									['var', 'originalVal']
								]
							];
						}
					}
				}
			}

			let default_text_font: string[] | undefined = undefined;
			if (!map.getGlyphs()) {
				if (new_style.glyphs) {
					map.setGlyphs(new_style.glyphs);
				}
			} else {
				default_text_font = map
					.getStyle()
					.layers.map((layer) =>
						layer.type === 'symbol' &&
						Array.isArray(layer.layout?.['text-font']) &&
						layer.layout['text-font'].every((f) => typeof f === 'string')
							? (layer.layout['text-font'] as string[])
							: undefined
					)
					.find((v) => v);
			}

			for (const [sourceId, source] of Object.entries(new_style.sources)) {
				if (sourceNameOverrideMap.has(sourceId)) {
					map.addSource(sourceNameOverrideMap.get(sourceId)!, source);
				} else if (!map.getSource(sourceId)) {
					map.addSource(sourceId, source);
				}
			}

			for (const layer of new_style.layers) {
				const newLayerId = `layer-${id}-${layer.id}`;
				if (!map.getLayer(newLayerId)) {
					if (layer.type === 'background') {
						map.addLayer({ ...layer, id: newLayerId });
					} else {
						const newLayer = {
							...layer,
							id: newLayerId,
							source: sourceNameOverrideMap.get(layer.source) ?? layer.source
						};
						if (default_text_font && newLayer.type === 'symbol' && newLayer.layout) {
							newLayer.layout['text-font'] = default_text_font;
						}
						map.addLayer(newLayer);
					}
				}
			}
		} else {
			console.debug(`Unsupported JSON format: ${layer.url}`);
		}
	}

	export function removeFromMap(layer: LayerConfig.Layer, map: maplibregl.Map): void {
		const id = layer.id;
		// Remove layers and sources associated with this style layer
		if (map) {
			// 1. Find and remove layers whose ID starts with `layer-${id}-`
			const layersToRemove = map
				.getStyle()
				.layers.filter((layer) => layer.id.startsWith(`layer-${id}-`));

			// Keep track of sources referenced by these layers
			const sourcesToCheck = new Set<string>();

			// 2. Remove the layers
			for (const layer of layersToRemove) {
				if ('source' in layer && typeof layer.source === 'string') {
					sourcesToCheck.add(layer.source);
				}
				map.removeLayer(layer.id);
			}

			// 3. Check if sources are still referenced by any other layers
			for (const sourceId of sourcesToCheck) {
				const isSourceStillUsed = map
					.getStyle()
					.layers.some((layer) => 'source' in layer && layer.source === sourceId);
				// 4. If not referenced, remove the source
				if (!isSourceStillUsed) {
					map.removeSource(sourceId);
				}
			}
		}
	}
}
