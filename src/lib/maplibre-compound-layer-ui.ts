import maplibregl from 'maplibre-gl';

import { GeoJsonLayerConverter } from '../lib/geojson-layer-converter';
import { VectorOverlayLayerCreator } from './vector-overlay-layer-creater';

const ELEMENT_CLASS_PREFIX = 'maplibregl-ctrl-compound-layer';

export namespace LayerConfig {
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
		styleSwapOptions?: maplibregl.StyleSwapOptions;
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
}

namespace LayerTreeView {
	type LayerTreeEventType = {
		LayerChanged: CustomEvent<{
			type: 'LayerChanged';
			layerEntry: LayerEntry;
			sourceEvent: Event;
		}>;
		LayerModificationChanged: CustomEvent<{
			type: 'LayerModificationChanged';
			modifyEnabled: boolean;
			opacity?: number | undefined;
			color?: string | undefined;
			layerEntry: LayerEntry;
			sourceEvent: Event;
		}>;
	};
	type LayerTreeEventListener<T extends keyof LayerTreeEventType> = (
		ev: LayerTreeEventType[T] & object
	) => void;

	type LayerTreeViewEntry = LayerEntry | LayerGroupEntry;

	interface LayerGroup {
		entries(): Generator<LayerTreeViewEntry>;
		layerEntriesAll(): Generator<LayerEntry>;
		layerEntriesSelected(): Generator<LayerEntry>;
	}

	namespace LayerGroupCommonProcedure {
		export function* layerEntriesAll(lg: LayerGroup): Generator<LayerEntry> {
			for (const entry of lg.entries()) {
				if ((entry as LayerEntry).type === 'LayerEntry') {
					yield entry as LayerEntry;
				} else if ((entry as LayerGroupEntry).type === 'LayerGroupEntry') {
					yield* (entry as LayerGroupEntry).layerEntriesAll();
				} else {
					throw new Error(`Not implemented type`);
				}
			}
		}

		export function* layerEntriesSelected(lg: LayerGroup): Generator<LayerEntry> {
			for (const entry of lg.entries()) {
				if ((entry as LayerEntry).type === 'LayerEntry') {
					if ((entry as LayerEntry).selected) {
						yield entry as LayerEntry;
					}
				} else if ((entry as LayerGroupEntry).type === 'LayerGroupEntry') {
					yield* (entry as LayerGroupEntry).layerEntriesAll();
				} else {
					throw new Error(`Not implemented type`);
				}
			}
		}
	}

	export class LayerTreeView implements LayerGroup {
		readonly #switchToggle: boolean;
		#entries: LayerTreeViewEntry[];
		#control?: MapLibreCompondLayerSwitcherControl;
		readonly #element: HTMLElement;
		#listeners: { [T in keyof LayerTreeEventType]: Set<LayerTreeEventListener<T>> };

		constructor(control: MapLibreCompondLayerSwitcherControl, switchToggle: boolean = true) {
			this.#switchToggle = switchToggle;
			this.#entries = [];
			this.#listeners = {
				LayerChanged: new Set<LayerTreeEventListener<'LayerChanged'>>(),
				LayerModificationChanged: new Set<LayerTreeEventListener<'LayerModificationChanged'>>()
			};
			this.#control = control;
			this.#element = document.createElement('div');
			this.#createElement();
		}

		#createElement() {
			this.#element.innerHTML = '';
			this.#element.className = `${ELEMENT_CLASS_PREFIX}-layer-tree-view`;
			for (const v of this.#entries) {
				if (v.element) {
					this.#element.appendChild(v.element);
				}
			}
		}

		addConfig(config: LayerConfig.LayerConfigEntry | LayerConfig.LayerConfigEntry[]): this {
			if (Array.isArray(config)) {
				for (const v of config) {
					this.addConfig(v);
				}
			} else {
				let entry: LayerTreeViewEntry;
				if ((config as LayerConfig.Layer).type === 'Layer') {
					entry = new LayerEntry(config as LayerConfig.Layer, this);
				} else if ((config as LayerConfig.LayerGroup).type === 'LayerGroup') {
					entry = new LayerGroupEntry(config as LayerConfig.LayerGroup, this);
				} else {
					throw new Error(`unsupported config type`);
				}
				this.#entries.push(entry);
				if (entry.element) {
					this.#element.appendChild(entry.element);
				}
			}
			return this;
		}

		get control(): maplibregl.IControl | undefined {
			return this.#control;
		}
		set control(value: maplibregl.IControl | undefined) {
			this.#control = value as MapLibreCompondLayerSwitcherControl;
		}
		get element(): HTMLElement {
			return this.#element;
		}

		*entries(): Generator<LayerTreeViewEntry> {
			yield* this.#entries;
		}
		*layerEntriesAll(): Generator<LayerEntry> {
			yield* LayerGroupCommonProcedure.layerEntriesAll(this);
		}
		*layerEntriesSelected(): Generator<LayerEntry> {
			yield* LayerGroupCommonProcedure.layerEntriesSelected(this);
		}

		on<T extends keyof LayerTreeEventType>(type: T, listener: LayerTreeEventListener<T>): this {
			this.#listeners[type].add(listener);
			return this;
		}
		off<T extends keyof LayerTreeEventType>(type: T, listener: LayerTreeEventListener<T>): this {
			this.#listeners[type].delete(listener);
			return this;
		}

		fireEvent<T extends keyof LayerTreeEventType>(e: LayerTreeEventType[T]) {
			if (this.#switchToggle) {
				for (const entry of this.layerEntriesAll()) {
					entry.selected = entry === e.detail.layerEntry;
					if (entry.selected) {
						for (const listener of this.#listeners[e.type as T]) {
							listener.call(this, e);
						}
					}
				}
			} else {
				for (const listener of this.#listeners[e.type as T]) {
					listener.call(this, e);
				}
			}
		}
	}

	class LayerEntry {
		readonly type: string = 'LayerEntry';
		readonly #config: LayerConfig.Layer;
		readonly #owner: LayerTreeView;
		readonly #layerFormat: LayerConfig.LayerFormat;
		#element: HTMLElement;
		constructor(config: LayerConfig.Layer, owner: LayerTreeView) {
			this.#config = config;
			this.#owner = owner;

			if (config.layerFormat) {
				this.#layerFormat = config.layerFormat;
			} else if (
				config.url.indexOf('{x}') >= 0 &&
				config.url.indexOf('{y}') >= 0 &&
				config.url.indexOf('{z}') >= 0
			) {
				this.#layerFormat = {
					tile: /\.(jpg|png|webp|gif)$/i.test(config.url)
						? 'raster'
						: /\.(geojson|topojson)$/.test(config.url)
							? 'geojson'
							: 'vector'
				};
			} else if (/\.(geojson|topojson|kml|gpx)$/.test(config.url)) {
				this.#layerFormat = { single: 'geojson' };
			} else {
				this.#layerFormat = 'style';
			}
			this.#element = document.createElement('div');
			this.#createElement();
		}
		get config(): LayerConfig.Layer {
			return this.#config;
		}
		get element(): HTMLElement {
			return this.#element;
		}
		get layerFormat(): LayerConfig.LayerFormat {
			return this.#layerFormat;
		}
		get opacity(): number | undefined {
			if (
				(this.#layerFormat as { tile: 'raster' }).tile === 'raster' ||
				(this.#layerFormat as { tile: 'geojson' }).tile === 'geojson' ||
				(this.#layerFormat as { single: 'geojson' }).single === 'geojson'
			) {
				const modifyEnabled = this.#element.querySelector(
					`.${ELEMENT_CLASS_PREFIX}-layer-entry-modify-enabled input[type=checkbox]`
				) as HTMLInputElement;
				const opacity = this.#element.querySelector(
					`.${ELEMENT_CLASS_PREFIX}-layer-entry-opacity input[type=range]`
				) as HTMLInputElement;

				return modifyEnabled && modifyEnabled.checked && opacity
					? parseInt(opacity.value)
					: undefined;
			} else {
				return undefined;
			}
		}
		#createElement() {
			this.#element.innerHTML = '';
			this.#element.className = `${ELEMENT_CLASS_PREFIX}-layer-entry`;
			const labelcheck = document.createElement('label');
			const checkbox = document.createElement('input');
			const spancheck = document.createElement('span');
			labelcheck.className = `${ELEMENT_CLASS_PREFIX}-layer-entry-visibility`;
			checkbox.type = 'checkbox';
			spancheck.innerHTML = this.#config.title;
			labelcheck.appendChild(checkbox);
			labelcheck.appendChild(spancheck);
			this.#element.appendChild(labelcheck);

			if (this.#config.html) {
				const popover = document.createElement('dialog');
				popover.id = `popover-dialog-${this.#config.id}`;
				popover.setAttribute('popover', 'popover');
				popover.innerHTML = `<button popovertarget="${popover.id}" popovertargetaction="hide">
          <span aria-hidden=”true”>❌</span>
          <span class="sr-only">Close</span>
        </button>
        <hr />
        ${this.#config.html}`;
				this.#element.appendChild(popover);

				const infoBtn = document.createElement('button');
				infoBtn.innerHTML = 'ℹ️';
				infoBtn.setAttribute('popovertarget', popover.id);
				this.#element.appendChild(infoBtn);
			}

			checkbox.addEventListener(
				'change',
				(e: Event) => {
					this.#owner.fireEvent(
						new CustomEvent('LayerChanged', {
							detail: {
								type: 'LayerChanged',
								layerEntry: this,
								sourceEvent: e
							}
						})
					);
				},
				false
			);
			if (
				(this.#layerFormat as { tile: 'raster' }).tile === 'raster' ||
				(this.#layerFormat as { tile: 'geojson' }).tile === 'geojson' ||
				(this.#layerFormat as { single: 'geojson' }).single === 'geojson'
			) {
				const container = document.createElement('div');
				container.className = `${ELEMENT_CLASS_PREFIX}-layer-entry-modify`;
				container.innerHTML = `
          <label class="${ELEMENT_CLASS_PREFIX}-layer-entry-modify-enabled">
            <input type="checkbox" />
            <span>Enable Modification</span>
          </label>
          <label class="${ELEMENT_CLASS_PREFIX}-layer-entry-opacity">
            <span>Opacity</span>
            <input type="range" min="0" max="255" value="255" />
          </label>`;

				const modifyEnabledCheckbox = container.querySelector(
					`.${ELEMENT_CLASS_PREFIX}-layer-entry-modify-enabled input[type=checkbox]`
				) as HTMLInputElement;
				const opacityRange = container.querySelector(
					`.${ELEMENT_CLASS_PREFIX}-layer-entry-opacity input[type=range]`
				) as HTMLInputElement;
				if ((this.#layerFormat as { tile: 'raster' }).tile === 'raster') {
					modifyEnabledCheckbox.checked = true;
					modifyEnabledCheckbox.disabled = true;
				} else if ((this.#layerFormat as { tile: 'geojson' }).tile === 'geojson') {
					modifyEnabledCheckbox.checked = false;
					opacityRange.disabled = true;
				} else if ((this.#layerFormat as { single: 'geojson' }).single === 'geojson') {
					modifyEnabledCheckbox.checked = false;
					opacityRange.disabled = true;
				}
				this.#element.appendChild(container);

				const updateLayerModification = (e: Event) => {
					const modifyEnabled = modifyEnabledCheckbox.checked;
					const opacity = parseInt(opacityRange.value, 10);

					opacityRange.disabled = !modifyEnabled;

					this.#owner.fireEvent(
						new CustomEvent('LayerModificationChanged', {
							detail: {
								type: 'LayerModificationChanged',
								modifyEnabled,
								opacity,
								layerEntry: this,
								sourceEvent: e
							}
						})
					);
				};
				modifyEnabledCheckbox.addEventListener('change', updateLayerModification, false);
				opacityRange.addEventListener('change', updateLayerModification, false);
			}
		}

		set selected(value: boolean) {
			(this.#element.querySelector('input[type=checkbox]') as HTMLInputElement).checked = value;
		}
		get selected() {
			return (this.#element.querySelector('input[type=checkbox]') as HTMLInputElement).checked;
		}
	}

	class LayerGroupEntry implements LayerGroup {
		readonly type: string = 'LayerGroupEntry';
		readonly #config: LayerConfig.LayerGroup;
		readonly #owner: LayerTreeView;
		readonly #entries: LayerTreeViewEntry[];
		#element: HTMLElement;
		constructor(config: LayerConfig.LayerGroup, owner: LayerTreeView) {
			this.#config = config;
			this.#owner = owner;

			const entries: LayerTreeViewEntry[] = [];
			for (const entry of config.entries || []) {
				if (entry.type == 'Layer') {
					entries.push(new LayerEntry(entry as LayerConfig.Layer, owner));
				} else if (entry.type == 'LayerGroup') {
					entries.push(new LayerGroupEntry(entry as LayerConfig.LayerGroup, owner));
				} else {
					console.error(`unknown config.type: ${entry.type}`, entry);
				}
			}
			this.#entries = entries;

			this.#element = document.createElement('details');
			this.#createElement();
		}
		get config(): LayerConfig.LayerGroup {
			return this.#config;
		}
		get element(): HTMLElement {
			return this.#element;
		}
		#createElement() {
			this.#element.innerHTML = '';
			this.#element.className = `${ELEMENT_CLASS_PREFIX}-layer-group-entry`;
			const summary = document.createElement('summary');
			summary.innerHTML = this.#config.title;
			const entriesDiv = document.createElement('div');
			entriesDiv.className = 'entries';
			for (const entry of this.#entries) {
				entriesDiv.appendChild((entry as any).element);
			}
			this.#element.appendChild(summary);
			this.#element.appendChild(entriesDiv);
		}

		*entries(): Generator<LayerTreeViewEntry> {
			yield* this.#entries;
		}
		*layerEntriesAll(): Generator<LayerEntry> {
			yield* LayerGroupCommonProcedure.layerEntriesAll(this);
		}
		*layerEntriesSelected(): Generator<LayerEntry> {
			yield* LayerGroupCommonProcedure.layerEntriesSelected(this);
		}
	}
}

export class MapLibreCompondLayerSwitcherControl implements maplibregl.IControl {
	#map?: maplibregl.Map;
	#element: HTMLElement;
	#base: LayerTreeView.LayerTreeView;
	#overlay: LayerTreeView.LayerTreeView;
	#optional: HTMLElement;

	constructor() {
		this.#base = new LayerTreeView.LayerTreeView(this, true);
		this.#base.on('LayerChanged', (e) => {
			if (this.#map) {
				const layerFormat = e.detail.layerEntry.layerFormat;
				const layer = e.detail.layerEntry.config;
				const id = layer.id;
				if ((layerFormat as { tile: 'raster' }).tile === 'raster') {
					this.#map.setStyle({
						version: 8,
						sources: {
							[`source-${id}-raster`]: {
								type: 'raster',
								tiles: [layer.url],
								tileSize: layer.tileSize ?? 256,
								scheme: layer.scheme ?? 'xyz',
								attribution: layer.attribution as string | undefined
							}
						},
						layers: [
							{
								id: `layer-${id}-raster`,
								type: 'raster',
								source: `source-${id}-raster`,
								minzoom: layer.minZoom ?? 0,
								maxzoom: layer.maxZoom ?? 22
							}
						]
					});
					if (layer.maxNativeZoom ?? layer.maxZoom) {
						this.#map.setMaxZoom(layer.maxNativeZoom ?? layer.maxZoom);
					}
					if (e.detail.layerEntry.opacity !== undefined) {
						const value = e.detail.layerEntry.opacity;
						window.setTimeout(() => {
							this.#map?.setPaintProperty(`layer-${id}-raster`, 'raster-opacity', value / 255.0);
						}, 100);
					}
				} else if (layerFormat === 'style') {
					const setStyleOption = layer.styleSwapOptions || {};
					this.#map.setStyle(layer.url, setStyleOption);
					if (layer.maxNativeZoom) {
						this.#map.setMaxZoom(layer.maxNativeZoom);
					}
				} else {
					console.error(`unsupported layerFormat ${JSON.stringify(layerFormat)} as base`, layer);
				}
			}
		});
		this.#base.on('LayerModificationChanged', (e) => {
			if (this.#map) {
				const layerFormat = e.detail.layerEntry.layerFormat;
				const layer = e.detail.layerEntry.config;
				const id = layer.id;

				if ((layerFormat as { tile: 'raster' }).tile === 'raster') {
					if (e.detail.layerEntry.opacity !== undefined) {
						const value = e.detail.layerEntry.opacity;
						this.#map?.setPaintProperty(`layer-${id}-raster`, 'raster-opacity', value / 255.0);
					} else {
						this.#map.setPaintProperty(`layer-${id}-raster`, 'raster-opacity', 1);
					}
				} else {
					console.error(
						`unsupported layerFormat ${JSON.stringify(layerFormat)} for base overlay`,
						layer
					);
				}
			}
		});
		this.#overlay = new LayerTreeView.LayerTreeView(this, false);
		this.#overlay.on('LayerChanged', (e) => {
			if (this.#map) {
				const layerFormat = e.detail.layerEntry.layerFormat;
				const layer = e.detail.layerEntry.config;
				const selected = e.detail.layerEntry.selected;
				const id = layer.id;

				if (selected) {
					if ((layerFormat as { tile: 'raster' }).tile === 'raster') {
						const rasterSource: maplibregl.RasterSourceSpecification = {
							type: 'raster',
							tiles: [layer.url],
							tileSize: layer.tileSize ?? 256,
							scheme: layer.scheme ?? 'xyz',
							attribution: layer.attribution
						};
						if (layer.maxZoom) {
							rasterSource.maxzoom = layer.maxZoom;
						}
						if (layer.minZoom) {
							rasterSource.minzoom = layer.minZoom;
						}
						this.#map.addSource(`source-${id}-raster`, rasterSource);
						this.#map.addLayer({
							id: `layer-${id}-raster`,
							type: 'raster',
							source: `source-${id}-raster`
						} as maplibregl.RasterLayerSpecification);
						if (e.detail.layerEntry.opacity !== undefined) {
							const value = e.detail.layerEntry.opacity;
							window.setTimeout(() => {
								this.#map?.setPaintProperty(`layer-${id}-raster`, 'raster-opacity', value / 255.0);
							}, 100);
						}
						this.#map.triggerRepaint();
					} else if (
						(layerFormat as { tile: 'geojson' }).tile === 'geojson' ||
						(layerFormat as { single: 'geojson' }).single === 'geojson'
					) {
						GeoJsonLayerConverter.addToMap(layerFormat, layer, this.#map);

						window.setTimeout(
							(map: maplibregl.Map, opacity: number | undefined) => {
								GeoJsonLayerConverter.updateOpacity(layer, map, opacity);
							},
							0,
							this.#map,
							e.detail.layerEntry.opacity
						);
					} else if (layerFormat === 'style') {
						VectorOverlayLayerCreator.addToMap(layer, this.#map);
					} else {
						console.error(`Unsupported layerFormat ${JSON.stringify(layerFormat)}`, e); // TODO
					}
				} else {
					if ((layerFormat as { tile: 'raster' }).tile === 'raster') {
						this.#map.removeLayer(`layer-${id}-raster`);
						this.#map.removeSource(`source-${id}-raster`);
					} else if (
						(layerFormat as { tile: 'geojson' }).tile === 'geojson' ||
						(layerFormat as { single: 'geojson' }).single === 'geojson'
					) {
						GeoJsonLayerConverter.removeFromMap(layer, this.#map);
					} else if (layerFormat === 'style') {
						VectorOverlayLayerCreator.removeFromMap(layer, this.#map);
					} else {
						console.error(`Unsupported layerFormat ${JSON.stringify(layerFormat)}`, e); // TODO
					}
				}
			}
		});
		this.#overlay.on('LayerModificationChanged', (e) => {
			if (this.#map) {
				const layerFormat = e.detail.layerEntry.layerFormat;
				const layer = e.detail.layerEntry.config;
				const id = layer.id;

				if ((layerFormat as { tile: 'raster' }).tile === 'raster') {
					if (e.detail.layerEntry.opacity !== undefined) {
						const value = e.detail.layerEntry.opacity;
						this.#map.setPaintProperty(`layer-${id}-raster`, 'raster-opacity', value / 255.0);
					} else {
						this.#map.setPaintProperty(`layer-${id}-raster`, 'raster-opacity', 1);
					}
				} else if (
					(layerFormat as { tile: 'geojson' }).tile === 'geojson' ||
					(layerFormat as { single: 'geojson' }).single === 'geojson'
				) {
					GeoJsonLayerConverter.updateOpacity(layer, this.#map, e.detail.layerEntry.opacity);
				}
			}
		});

		// Create the main div element
		this.#optional = document.createElement('div');
		this.#element = document.createElement('div');
		this.#createElement();
	}

	addBase(config: LayerConfig.LayerConfigEntry | LayerConfig.LayerConfigEntry[]): this {
		this.#base.addConfig(config);
		return this;
	}
	*baseLayerEntriesAll(): Generator<LayerConfig.Layer> {
		for (const entry of this.#base.layerEntriesAll()) {
			yield entry.config;
		}
	}
	*baseLayerEntriesSelected(): Generator<LayerConfig.Layer> {
		for (const entry of this.#base.layerEntriesSelected()) {
			yield entry.config;
		}
	}
	setBaseLayerEntriesSelected(layer: LayerConfig.Layer, selected: boolean) {
		for (const entry of this.#base.layerEntriesAll()) {
			if (entry.config === layer) {
				entry.selected = selected;
			}
		}
	}

	addOverlay(config: LayerConfig.LayerConfigEntry | LayerConfig.LayerConfigEntry[]): this {
		this.#overlay.addConfig(config);
		return this;
	}

	get optionalElement(): HTMLElement {
		return this.#optional;
	}

	#createElement(): HTMLElement {
		this.#element.innerHTML = '';
		this.#element.className = `maplibregl-ctrl maplibregl-ctrl-group ${ELEMENT_CLASS_PREFIX}-switcher`;

		// Create the first details element
		const detailsBase = document.createElement('details');
		detailsBase.open = true;
		const summaryBase = document.createElement('summary');
		summaryBase.textContent = 'Base layer';
		const divBaseEntries = document.createElement('div');
		divBaseEntries.className = `${ELEMENT_CLASS_PREFIX}-switcher-base-entries`;
		divBaseEntries.appendChild(this.#base.element);

		// Append elements for the base layer
		detailsBase.appendChild(summaryBase);
		detailsBase.appendChild(divBaseEntries);

		// Create the second details element
		const detailsOverlay = document.createElement('details');
		detailsOverlay.open = false;
		const summaryOverlay = document.createElement('summary');
		summaryOverlay.textContent = 'Overlay layers';
		const divOverlayEntries = document.createElement('div');
		divOverlayEntries.className = `${ELEMENT_CLASS_PREFIX}-switcher-overlay-entries`;
		divOverlayEntries.appendChild(this.#overlay.element);

		// Append elements for the overlay layers
		detailsOverlay.appendChild(summaryOverlay);
		detailsOverlay.appendChild(divOverlayEntries);

		// Append both details elements to the main div
		this.#element.appendChild(detailsBase);
		this.#element.appendChild(detailsOverlay);

		// Append optionals
		this.#element.appendChild(this.#optional);

		return this.#element;
	}

	get map(): maplibregl.Map | undefined {
		return this.#map;
	}

	onAdd(map: maplibregl.Map): HTMLElement {
		this.#map = map;
		return this.#createElement();
	}
	onRemove(): void {
		this.#element.parentNode?.removeChild(this.#element);
		this.#map = undefined;
	}
}
