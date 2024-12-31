import maplibregl from 'maplibre-gl';

const ELEMENT_CLASS_PREFIX = 'maplibregl-ctrl-compound-layer';

export namespace LayerConfig {
	export interface ILayer {
		type: string;
		id: string;
		title: string;
		url: string;
		html?: string;
		description?: string;
		legendUrl?: string;
		maxNativeZoom?: number;
	}

	export interface BaseLayer extends ILayer {
		[propName: string]: unknown;
	}

	export interface Layer extends ILayer {
		maxZoom?: number;
		minZoom?: number;
		[propName: string]: unknown;
	}

	export interface LayerGroup<L extends ILayer> {
		type: 'LayerGroup';
		title: string;
		html?: string;
		entries: LayerConfigEntry<L>[];
		[propName: string]: unknown;
	}

	export type LayerConfigEntry<L extends ILayer> = LayerGroup<L> | L;
}

namespace LayerTreeView {
	type LayerTreeEventType<L extends LayerConfig.ILayer> = {
		LayerChanged: CustomEvent<{
			type: 'LayerChanged';
			layerEntry: LayerEntry<L>;
			sourceEvent: Event;
		}>;
	};
	type LayerTreeEventListener<
		L extends LayerConfig.ILayer,
		T extends keyof LayerTreeEventType<L>
	> = (ev: LayerTreeEventType<L>[T] & Object) => void;

	export class LayerTreeView<L extends LayerConfig.ILayer> {
		readonly #switchToggle: boolean;
		#entries: LayerTreeViewEntry<L>[];
		#control?: MapLibreCompondLayerSwitcherControl;
		readonly #element: HTMLElement;
		#listeners: { [T in keyof LayerTreeEventType<L>]: Set<LayerTreeEventListener<L, T>> };

		constructor(control: MapLibreCompondLayerSwitcherControl, switchToggle: boolean = true) {
			this.#switchToggle = switchToggle;
			this.#entries = [];
			this.#listeners = {
				LayerChanged: new Set<LayerTreeEventListener<L, 'LayerChanged'>>()
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

		addConfig(config: LayerConfig.LayerConfigEntry<L> | LayerConfig.LayerConfigEntry<L>[]): this {
			if (Array.isArray(config)) {
				for (const v of config) {
					this.addConfig(v);
				}
			} else {
				let entry: LayerTreeViewEntry<L>;
				if ((config as L).type === 'Layer') {
					entry = new LayerEntry(config as L, this);
				} else if ((config as LayerConfig.LayerGroup<L>).type === 'LayerGroup') {
					entry = new LayerGroupEntry<L>(config as LayerConfig.LayerGroup<L>, this);
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

		*layerEntriesAll(): Generator<LayerEntry<L>> {
			for (const entry of this.#entries) {
				if ((entry as LayerEntry<L>).type === 'LayerEntry') {
					yield entry as LayerEntry<L>;
				} else if ((entry as LayerGroupEntry<L>).type === 'LayerGroupEntry') {
					yield* (entry as LayerGroupEntry<L>).layerEntriesAll();
				} else {
					throw new Error(`Not implemented type`);
				}
			}
		}

		on<T extends keyof LayerTreeEventType<L>>(
			type: T,
			listener: LayerTreeEventListener<L, T>
		): this {
			this.#listeners[type].add(listener);
			return this;
		}
		off<T extends keyof LayerTreeEventType<L>>(
			type: T,
			listener: LayerTreeEventListener<L, T>
		): this {
			this.#listeners[type].delete(listener);
			return this;
		}

		handleLayerChange(e: LayerTreeEventType<L>['LayerChanged']) {
			if (this.#switchToggle) {
				for (const entry of this.layerEntriesAll()) {
					entry.selected = entry === e.detail.layerEntry;
					if (entry.selected) {
						for (const listener of this.#listeners['LayerChanged']) {
							listener.call(this, e);
						}
					}
				}
			} else {
				for (const listener of this.#listeners['LayerChanged']) {
					listener.call(this, e);
				}
			}
		}
	}

	class LayerEntry<L extends LayerConfig.ILayer> {
		readonly type: string = 'LayerEntry';
		readonly #config: L;
		readonly #owner: LayerTreeView<L>;
		#element: HTMLElement;
		constructor(config: L, owner: LayerTreeView<L>) {
			this.#config = config;
			this.#owner = owner;
			this.#element = document.createElement('div');
			this.#createElement();
		}
		get config(): L {
			return this.#config;
		}
		get element(): HTMLElement {
			return this.#element;
		}
		#createElement() {
			this.#element.innerHTML = '';
			this.#element.className = `${ELEMENT_CLASS_PREFIX}-layer-entry`;
			const label = document.createElement('label');
			const checkbox = document.createElement('input');
			const span = document.createElement('span');
			checkbox.type = 'checkbox';
			span.innerHTML = this.#config.title;
			label.appendChild(checkbox);
			label.appendChild(span);
			this.#element.appendChild(label);

			checkbox.addEventListener(
				'change',
				(e) => {
					this.#owner.handleLayerChange(
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
		}

		set selected(value: boolean) {
			(this.#element.querySelector('input[type=checkbox]') as HTMLInputElement).checked = value;
		}
		get selected() {
			return (this.#element.querySelector('input[type=checkbox]') as HTMLInputElement).checked;
		}
	}

	class LayerGroupEntry<L extends LayerConfig.ILayer> {
		readonly type: string = 'LayerGroupEntry';
		readonly #config: LayerConfig.LayerGroup<L>;
		readonly #owner: LayerTreeView<L>;
		readonly #entries: LayerTreeViewEntry<L>[];
		#element: HTMLElement;
		constructor(config: LayerConfig.LayerGroup<L>, owner: LayerTreeView<L>) {
			this.#config = config;
			this.#owner = owner;

			const entries: LayerTreeViewEntry<L>[] = [];
			for (const entry of config.entries) {
				if (entry.type == 'LayerGroup') {
					entries.push(new LayerGroupEntry(entry as LayerConfig.LayerGroup<L>, owner));
				} else if (entry.type == 'Layer') {
					entries.push(new LayerEntry(entry as L, owner));
				} else {
					console.error(`unknown config.type: ${entry.type}`, entry);
				}
			}
			this.#entries = entries;

			this.#element = document.createElement('details');
			this.#createElement();
		}
		get config(): LayerConfig.LayerGroup<L> {
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

		*layerEntriesAll(): Generator<LayerEntry<L>> {
			for (const entry of this.#entries) {
				if ((entry as LayerEntry<L>).type === 'LayerEntry') {
					yield entry as LayerEntry<L>;
				} else if ((entry as LayerGroupEntry<L>).type === 'LayerGroupEntry') {
					yield* (entry as LayerGroupEntry<L>).layerEntriesAll();
				} else {
					throw new Error(`Not implemented type`);
				}
			}
		}
	}

	type LayerTreeViewEntry<L extends LayerConfig.ILayer> = LayerEntry<L> | LayerGroupEntry<L>;
}

export class MapLibreCompondLayerSwitcherControl implements maplibregl.IControl {
	#map?: maplibregl.Map;
	#element: HTMLElement;
	#base: LayerTreeView.LayerTreeView<LayerConfig.BaseLayer>;

	constructor() {
		this.#base = new LayerTreeView.LayerTreeView(this, true);
		this.#base.on('LayerChanged', (e) => {
			this.#map?.setStyle(e.detail.layerEntry.config.url);
		});

		// Create the main div element
		this.#element = document.createElement('div');
		this.#createElement();
	}

	addBase(
		config:
			| LayerConfig.LayerConfigEntry<LayerConfig.BaseLayer>
			| LayerConfig.LayerConfigEntry<LayerConfig.BaseLayer>[]
	): this {
		this.#base.addConfig(config);
		return this;
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

		// Append elements for the overlay layers
		detailsOverlay.appendChild(summaryOverlay);
		detailsOverlay.appendChild(divOverlayEntries);

		// Append both details elements to the main div
		this.#element.appendChild(detailsBase);
		this.#element.appendChild(detailsOverlay);

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
