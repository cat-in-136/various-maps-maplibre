import maplibregl from 'maplibre-gl';

const ELEMENT_CLASS_PREFIX = 'maplibregl-ctrl-compound-layer';

export namespace LayerConfig {
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
		scheme?: 'xyz' | 'tms';
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
		LayerOpacityChanged: CustomEvent<{
			type: 'LayerOpacityChanged';
			value: number;
			layerEntry: LayerEntry;
			sourceEvent: Event;
		}>;
	};
	type LayerTreeEventListener<T extends keyof LayerTreeEventType> = (
		ev: LayerTreeEventType[T] & Object
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
				LayerOpacityChanged: new Set<LayerTreeEventListener<'LayerOpacityChanged'>>()
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

		handleCustomEvent<T extends keyof LayerTreeEventType>(e: LayerTreeEventType[T]) {
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

	type LayerEntryTileType = 'raster' | undefined;

	class LayerEntry {
		readonly type: string = 'LayerEntry';
		readonly #config: LayerConfig.Layer;
		readonly #owner: LayerTreeView;
		readonly #tileType: LayerEntryTileType;
		#element: HTMLElement;
		constructor(config: LayerConfig.Layer, owner: LayerTreeView) {
			this.#config = config;
			this.#owner = owner;
			this.#tileType =
				config.url.indexOf('{x}') >= 0 &&
				config.url.indexOf('{y}') >= 0 &&
				config.url.indexOf('{z}') >= 0 &&
				!/\.(geojson|kml|gpx)$/.test(config.url)
					? 'raster'
					: undefined;
			this.#element = document.createElement('div');
			this.#createElement();
		}
		get config(): LayerConfig.Layer {
			return this.#config;
		}
		get element(): HTMLElement {
			return this.#element;
		}
		get tileType(): LayerEntryTileType {
			return this.#tileType;
		}
		get opacity(): number | undefined {
			if (this.#tileType === 'raster') {
				const opacity = this.#element.querySelector(
					`.${ELEMENT_CLASS_PREFIX}-layer-entry-opacity input[type=range]`
				) as HTMLInputElement;
				return opacity ? parseInt(opacity.value) : undefined;
			} else {
				return undefined;
			}
		}
		#createElement() {
			this.#element.innerHTML = '';
			this.#element.className = `${ELEMENT_CLASS_PREFIX}-layer-entry`;
			if (this.tileType) {
				this.#element.dataset['tileType'] = this.tileType;
			}
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
					this.#owner.handleCustomEvent(
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
			if (this.tileType) {
				const labelopacity = document.createElement('div');
				const opacity = document.createElement('input');
				const spanopacity = document.createElement('span');
				labelopacity.className = `${ELEMENT_CLASS_PREFIX}-layer-entry-opacity`;
				opacity.type = 'range';
				opacity.min = String(0);
				opacity.max = String(255);
				opacity.value = String(255);
				spanopacity.innerHTML = 'Opacity';
				labelopacity.appendChild(spanopacity);
				labelopacity.appendChild(opacity);
				this.#element.appendChild(labelopacity);

				opacity.addEventListener(
					'change',
					(e) => {
						const value = parseInt(opacity.value);
						this.#owner.handleCustomEvent(
							new CustomEvent('LayerOpacityChanged', {
								detail: {
									type: 'LayerOpacityChanged',
									value,
									layerEntry: this,
									sourceEvent: e
								}
							})
						);
					},
					false
				);
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
				const tileType = e.detail.layerEntry.tileType;
				const layer = e.detail.layerEntry.config;
				const id = layer.id;
				if (tileType === 'raster') {
					this.#map.setStyle({
						version: 8,
						sources: {
							[`source-${id}-raster`]: {
								type: 'raster',
								tiles: [layer.url],
								tileSize: (layer.tileSize ?? 256) as number,
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
				} else {
					this.#map.setStyle(layer.url);
					if (layer.maxNativeZoom) {
						this.#map.setMaxZoom(layer.maxNativeZoom);
					}
				}
			}
		});
		this.#base.on('LayerOpacityChanged', (e) => {
			if (this.#map) {
				const tileType = e.detail.layerEntry.tileType;
				const layer = e.detail.layerEntry.config;
				const id = layer.id;

				if (tileType === 'raster') {
					const value = e.detail.value;
					this.#map.setPaintProperty(`layer-${id}-raster`, 'raster-opacity', value / 255.0);
				}
			}
		});
		this.#overlay = new LayerTreeView.LayerTreeView(this, false);
		this.#overlay.on('LayerChanged', (e) => {
			if (this.#map) {
				const tileType = e.detail.layerEntry.tileType;
				const layer = e.detail.layerEntry.config;
				const selected = e.detail.layerEntry.selected;
				const id = layer.id;

				if (selected) {
					if (tileType === 'raster') {
						let source: maplibregl.RasterSourceSpecification = {
							type: 'raster',
							tiles: [layer.url],
							scheme: layer.scheme ?? 'xyz'
						};
						if (layer.maxZoom) {
							source.maxzoom = layer.maxZoom;
						}
						if (layer.minZoom) {
							source.minzoom = layer.minZoom;
						}
						this.#map.addSource(`source-${id}-raster`, source);
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
					} else {
						console.debug(`Not implemented yet`, e); // TODO
					}
				} else {
					this.#map.removeLayer(`layer-${id}-raster`);
					this.#map.removeSource(`source-${id}-raster`);
				}
			}
		});
		this.#overlay.on('LayerOpacityChanged', (e) => {
			if (this.#map) {
				const tileType = e.detail.layerEntry.tileType;
				const layer = e.detail.layerEntry.config;
				const id = layer.id;

				if (tileType === 'raster') {
					const value = e.detail.value;
					this.#map.setPaintProperty(`layer-${id}-raster`, 'raster-opacity', value / 255.0);
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
	onRemove(map: maplibregl.Map): void {
		this.#element.parentNode?.removeChild(this.#element);
		this.#map = undefined;
	}
}
