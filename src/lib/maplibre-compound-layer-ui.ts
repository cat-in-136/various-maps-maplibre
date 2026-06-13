import maplibregl from 'maplibre-gl';
import { createStyleSwapOption } from '$lib/layer-config';
import { GeoJsonLayerConverter } from '$lib/geojson-layer-converter';
import type { Layer, LayerConfigEntry, LayerFormat, LayerGroup } from '$lib/layer-config';
import { isLayer, isLayerGroup } from '$lib/layer-config';
import { VectorOverlayLayerCreator } from '$lib/vector-overlay-layer-creater';
import type { TerrainSources } from '$lib/maplibre-compound-layer-data/terrain';

const ELEMENT_CLASS_PREFIX = 'maplibregl-ctrl-compound-layer';

export function isRasterLayerFormat(layerFormat: LayerFormat): layerFormat is { tile: 'raster' } {
	return (layerFormat as { tile?: 'raster' }).tile === 'raster';
}

export function isGeoJsonTileLayerFormat(
	layerFormat: LayerFormat
): layerFormat is { tile: 'geojson' } {
	return (layerFormat as { tile?: 'geojson' }).tile === 'geojson';
}

export function isSingleGeoJsonLayerFormat(
	layerFormat: LayerFormat
): layerFormat is { single: 'geojson' } {
	return (layerFormat as { single?: 'geojson' }).single === 'geojson';
}

export function isGeoJsonLayerFormat(
	layerFormat: LayerFormat
): layerFormat is { tile: 'geojson' } | { single: 'geojson' } {
	return isGeoJsonTileLayerFormat(layerFormat) || isSingleGeoJsonLayerFormat(layerFormat);
}

export function isStyleLayerFormat(layerFormat: LayerFormat): layerFormat is 'style' {
	return layerFormat === 'style';
}

export function isModifiableLayerFormat(layerFormat: LayerFormat): boolean {
	return isRasterLayerFormat(layerFormat) || isGeoJsonLayerFormat(layerFormat);
}

type LayerTreeEventType = {
	LayerChanged: CustomEvent<{
		type: 'LayerChanged';
		layerEntry: LayerEntry;
		sourceEvent: Event;
	}>;
	LayerModificationChanged: CustomEvent<{
		type: 'LayerModificationChanged';
		layerEntry: LayerEntry;
		sourceEvent: Event;
	}>;
};
type LayerTreeEventListener<T extends keyof LayerTreeEventType> = (
	ev: LayerTreeEventType[T] & object
) => void;

type LayerTreeViewEntry = LayerEntry | LayerGroupEntry;

interface LayerTreeGroup {
	element: HTMLElement;
	entries(): Generator<LayerTreeViewEntry>;
	layerEntriesAll(): Generator<LayerEntry>;
	layerEntriesSelected(): Generator<LayerEntry>;
}

function* layerEntriesAll(lg: LayerTreeGroup): Generator<LayerEntry> {
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

function* layerEntriesSelected(lg: LayerTreeGroup): Generator<LayerEntry> {
	for (const entry of lg.entries()) {
		if ((entry as LayerEntry).type === 'LayerEntry') {
			if ((entry as LayerEntry).selected) {
				yield entry as LayerEntry;
			}
		} else if ((entry as LayerGroupEntry).type === 'LayerGroupEntry') {
			yield* (entry as LayerGroupEntry).layerEntriesSelected();
		} else {
			throw new Error(`Not implemented type`);
		}
	}
}

export class LayerTreeView implements LayerTreeGroup {
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

	addConfig(config: LayerConfigEntry | LayerConfigEntry[]): this {
		if (Array.isArray(config)) {
			for (const v of config) {
				this.addConfig(v);
			}
		} else {
			let entry: LayerTreeViewEntry;
			if (isLayer(config)) {
				entry = new LayerEntry(config, this);
			} else if (isLayerGroup(config)) {
				entry = new LayerGroupEntry(config, this);
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
		yield* layerEntriesAll(this);
	}
	*layerEntriesSelected(): Generator<LayerEntry> {
		yield* layerEntriesSelected(this);
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
	readonly #config: Layer;
	readonly #owner: LayerTreeView;
	readonly #layerFormat: LayerFormat;
	#element: HTMLElement;
	constructor(config: Layer, owner: LayerTreeView) {
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
	get config(): Layer {
		return this.#config;
	}
	get element(): HTMLElement {
		return this.#element;
	}
	get layerFormat(): LayerFormat {
		return this.#layerFormat;
	}
	get opacity(): number | undefined {
		if (!isModifiableLayerFormat(this.#layerFormat)) {
			return undefined;
		}
		const modifyEnabled = this.#element.querySelector(
			`.${ELEMENT_CLASS_PREFIX}-layer-entry-modify-enabled input[type=checkbox]`
		) as HTMLInputElement;
		const opacity = this.#element.querySelector(
			`.${ELEMENT_CLASS_PREFIX}-layer-entry-opacity input[type=range]`
		) as HTMLInputElement;

		return modifyEnabled && modifyEnabled.checked && opacity ? parseInt(opacity.value) : undefined;
	}
	get color(): string | undefined {
		if (!isModifiableLayerFormat(this.#layerFormat)) {
			return undefined;
		}
		const modifyEnabled = this.#element.querySelector(
			`.${ELEMENT_CLASS_PREFIX}-layer-entry-modify-enabled input[type=checkbox]`
		) as HTMLInputElement;
		const color = this.#element.querySelector(
			`.${ELEMENT_CLASS_PREFIX}-layer-entry-color input[type=color]`
		) as HTMLInputElement;

		return modifyEnabled && modifyEnabled.checked && color ? color.value : undefined;
	}
	#createElement() {
		this.#element.innerHTML = '';
		this.#element.className = `${ELEMENT_CLASS_PREFIX}-layer-entry`;
		const labelcheck = document.createElement('label');
		const checkbox = document.createElement('input');
		const spancheck = document.createElement('span');
		labelcheck.className = `${ELEMENT_CLASS_PREFIX}-layer-entry-visibility`;
		checkbox.type = 'checkbox';
		spancheck.textContent = this.#config.title;
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
		if (isModifiableLayerFormat(this.#layerFormat)) {
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
          </label>
          <label class="${ELEMENT_CLASS_PREFIX}-layer-entry-color">
            <span>Color</span>
            <input type="color" value="#ff0000" />
          </label>`;

			const modifyEnabledCheckbox = container.querySelector(
				`.${ELEMENT_CLASS_PREFIX}-layer-entry-modify-enabled input[type=checkbox]`
			) as HTMLInputElement;
			const opacityRange = container.querySelector(
				`.${ELEMENT_CLASS_PREFIX}-layer-entry-opacity input[type=range]`
			) as HTMLInputElement;
			const color = container.querySelector(
				`.${ELEMENT_CLASS_PREFIX}-layer-entry-color input[type=color]`
			) as HTMLInputElement;
			if (isRasterLayerFormat(this.#layerFormat)) {
				modifyEnabledCheckbox.checked = true;
				modifyEnabledCheckbox.disabled = true;
				color.disabled = true;
				color.parentElement!.style.display = 'none';
			} else if (isGeoJsonLayerFormat(this.#layerFormat)) {
				modifyEnabledCheckbox.checked = false;
				opacityRange.disabled = true;
				color.disabled = true;
			}
			this.#element.appendChild(container);

			const updateLayerModification = (e: Event) => {
				const modifyEnabled = modifyEnabledCheckbox.checked;

				opacityRange.disabled = !modifyEnabled;
				color.disabled = !modifyEnabled;

				this.#owner.fireEvent(
					new CustomEvent('LayerModificationChanged', {
						detail: {
							type: 'LayerModificationChanged',
							modifyEnabled,
							layerEntry: this,
							sourceEvent: e
						}
					})
				);
			};
			modifyEnabledCheckbox.addEventListener('change', updateLayerModification, false);
			opacityRange.addEventListener('change', updateLayerModification, false);
			color.addEventListener('change', updateLayerModification, false);
		}
	}

	set selected(value: boolean) {
		(this.#element.querySelector('input[type=checkbox]') as HTMLInputElement).checked = value;
	}
	get selected() {
		return (this.#element.querySelector('input[type=checkbox]') as HTMLInputElement).checked;
	}
}

class LayerGroupEntry implements LayerTreeGroup {
	readonly type: string = 'LayerGroupEntry';
	readonly #config: LayerGroup;
	readonly #entries: LayerTreeViewEntry[];
	#element: HTMLElement;
	constructor(config: LayerGroup, owner: LayerTreeView) {
		this.#config = config;

		const entries: LayerTreeViewEntry[] = [];
		for (const entry of config.entries || []) {
			const entryType = (entry as { type?: unknown }).type;
			if (isLayer(entry)) {
				entries.push(new LayerEntry(entry, owner));
			} else if (isLayerGroup(entry)) {
				entries.push(new LayerGroupEntry(entry, owner));
			} else {
				console.error(`unknown config.type: ${entryType}`, entry);
			}
		}
		this.#entries = entries;

		this.#element = document.createElement('details');
		this.#createElement();
	}
	get config(): LayerGroup {
		return this.#config;
	}
	get element(): HTMLElement {
		return this.#element;
	}
	#createElement() {
		this.#element.innerHTML = '';
		this.#element.className = `${ELEMENT_CLASS_PREFIX}-layer-group-entry`;
		const summary = document.createElement('summary');
		summary.textContent = this.#config.title;
		const entriesDiv = document.createElement('div');
		entriesDiv.className = 'entries';
		for (const entry of this.#entries) {
			entriesDiv.appendChild(entry.element);
		}
		this.#element.appendChild(summary);
		this.#element.appendChild(entriesDiv);
	}

	*entries(): Generator<LayerTreeViewEntry> {
		yield* this.#entries;
	}
	*layerEntriesAll(): Generator<LayerEntry> {
		yield* layerEntriesAll(this);
	}
	*layerEntriesSelected(): Generator<LayerEntry> {
		yield* layerEntriesSelected(this);
	}
}

function createRasterBaseStyle(layer: Layer): maplibregl.StyleSpecification {
	return {
		version: 8,
		sources: {
			[`source-${layer.id}-raster`]: {
				type: 'raster',
				tiles: [layer.url],
				tileSize: layer.tileSize ?? 256,
				scheme: layer.scheme ?? 'xyz',
				attribution: layer.attribution as string | undefined
			}
		},
		layers: [
			{
				id: `layer-${layer.id}-raster`,
				type: 'raster',
				source: `source-${layer.id}-raster`,
				minzoom: layer.minZoom ?? 0,
				maxzoom: layer.maxZoom ?? 22
			}
		]
	};
}

function createRasterOverlaySource(layer: Layer): maplibregl.RasterSourceSpecification {
	const source: maplibregl.RasterSourceSpecification = {
		type: 'raster',
		tiles: [layer.url],
		tileSize: layer.tileSize ?? 256,
		scheme: layer.scheme ?? 'xyz',
		attribution: layer.attribution
	};
	if (layer.maxZoom) {
		source.maxzoom = layer.maxZoom;
	}
	if (layer.minZoom) {
		source.minzoom = layer.minZoom;
	}
	return source;
}

function createRasterOverlayLayer(layer: Layer): maplibregl.RasterLayerSpecification {
	return {
		id: `layer-${layer.id}-raster`,
		type: 'raster',
		source: `source-${layer.id}-raster`
	};
}

function setRasterBaseOpacity(
	map: maplibregl.Map,
	layer: Layer,
	opacity: number | undefined
): void {
	if (opacity !== undefined) {
		const value = opacity;
		window.setTimeout(() => {
			map.setPaintProperty(`layer-${layer.id}-raster`, 'raster-opacity', value / 255.0);
		}, 100);
	}
}

function setRasterModificationOpacity(
	map: maplibregl.Map,
	layer: Layer,
	opacity: number | undefined
): void {
	map.setPaintProperty(
		`layer-${layer.id}-raster`,
		'raster-opacity',
		opacity !== undefined ? opacity / 255.0 : 1
	);
}

function setMaxZoomFromLayer(map: maplibregl.Map, layer: Layer): void {
	const maxZoom = layer.maxNativeZoom ?? layer.maxZoom;
	if (maxZoom !== undefined) {
		map.setMaxZoom(maxZoom);
	}
}

function applyBaseLayerChange(map: maplibregl.Map, layerEntry: LayerEntry): void {
	const layerFormat = layerEntry.layerFormat;
	const layer = layerEntry.config;

	if (isRasterLayerFormat(layerFormat)) {
		map.setStyle(createRasterBaseStyle(layer), { diff: false });
		setMaxZoomFromLayer(map, layer);
		setRasterBaseOpacity(map, layer, layerEntry.opacity);
	} else if (isStyleLayerFormat(layerFormat)) {
		const setStyleOption = { ...createStyleSwapOption(layer), diff: false };
		map.setStyle(layer.url, setStyleOption);
		if (layer.maxNativeZoom !== undefined) {
			map.setMaxZoom(layer.maxNativeZoom);
		}
	} else {
		console.error(`unsupported layerFormat ${JSON.stringify(layerFormat)} as base`, layer);
	}
}

function applyBaseLayerModification(map: maplibregl.Map, layerEntry: LayerEntry): void {
	const layerFormat = layerEntry.layerFormat;
	const layer = layerEntry.config;

	if (isRasterLayerFormat(layerFormat)) {
		setRasterModificationOpacity(map, layer, layerEntry.opacity);
	} else {
		console.error(`unsupported layerFormat ${JSON.stringify(layerFormat)} for base overlay`, layer);
	}
}

function applyOverlayLayerChange(map: maplibregl.Map, layerEntry: LayerEntry): void {
	const layerFormat = layerEntry.layerFormat;
	const layer = layerEntry.config;
	const selected = layerEntry.selected;
	const id = layer.id;

	if (selected) {
		if (isRasterLayerFormat(layerFormat)) {
			map.addSource(`source-${id}-raster`, createRasterOverlaySource(layer));
			map.addLayer(createRasterOverlayLayer(layer));
			setRasterBaseOpacity(map, layer, layerEntry.opacity);
			map.triggerRepaint();
		} else if (isGeoJsonLayerFormat(layerFormat)) {
			GeoJsonLayerConverter.addToMap(layerFormat, layer, map);

			window.setTimeout(
				(map: maplibregl.Map, opacity: number | undefined) => {
					GeoJsonLayerConverter.updateOpacity(layer, map, opacity);
				},
				0,
				map,
				layerEntry.opacity
			);
		} else if (isStyleLayerFormat(layerFormat)) {
			void VectorOverlayLayerCreator.addToMap(layer, map);
		} else {
			console.error(`Unsupported layerFormat ${JSON.stringify(layerFormat)}`, layerEntry);
		}
	} else {
		if (isRasterLayerFormat(layerFormat)) {
			map.removeLayer(`layer-${id}-raster`);
			map.removeSource(`source-${id}-raster`);
		} else if (isGeoJsonLayerFormat(layerFormat)) {
			GeoJsonLayerConverter.removeFromMap(layer, map);
		} else if (isStyleLayerFormat(layerFormat)) {
			VectorOverlayLayerCreator.removeFromMap(layer, map);
		} else {
			console.error(`Unsupported layerFormat ${JSON.stringify(layerFormat)}`, layerEntry);
		}
	}
}

function applyOverlayLayerModification(map: maplibregl.Map, layerEntry: LayerEntry): void {
	const layerFormat = layerEntry.layerFormat;
	const layer = layerEntry.config;

	if (isRasterLayerFormat(layerFormat)) {
		setRasterModificationOpacity(map, layer, layerEntry.opacity);
	} else if (isGeoJsonLayerFormat(layerFormat)) {
		GeoJsonLayerConverter.updateOpacity(layer, map, layerEntry.opacity);
		GeoJsonLayerConverter.updateColor(layer, map, layerEntry.color);
	}
}

export class MapLibreCompondLayerSwitcherControl implements maplibregl.IControl {
	#map?: maplibregl.Map;
	#element: HTMLElement;
	#base: LayerTreeView;
	#overlay: LayerTreeView;
	#optional: HTMLElement;

	constructor() {
		this.#base = new LayerTreeView(this, true);
		this.#base.on('LayerChanged', (e) => {
			if (this.#map) {
				applyBaseLayerChange(this.#map, e.detail.layerEntry);
			}
		});
		this.#base.on('LayerModificationChanged', (e) => {
			if (this.#map) {
				applyBaseLayerModification(this.#map, e.detail.layerEntry);
			}
		});
		this.#overlay = new LayerTreeView(this, false);
		this.#overlay.on('LayerChanged', (e) => {
			if (this.#map) {
				applyOverlayLayerChange(this.#map, e.detail.layerEntry);
			}
		});
		this.#overlay.on('LayerModificationChanged', (e) => {
			if (this.#map) {
				applyOverlayLayerModification(this.#map, e.detail.layerEntry);
			}
		});

		// Create the main div element
		this.#optional = document.createElement('div');
		this.#element = document.createElement('div');
		this.#createElement();
	}

	addBase(config: LayerConfigEntry | LayerConfigEntry[]): this {
		this.#base.addConfig(config);
		return this;
	}
	*baseLayerEntriesAll(): Generator<Layer> {
		for (const entry of this.#base.layerEntriesAll()) {
			yield entry.config;
		}
	}
	*baseLayerEntriesSelected(): Generator<Layer> {
		for (const entry of this.#base.layerEntriesSelected()) {
			yield entry.config;
		}
	}
	setBaseLayerEntriesSelected(layer: Layer, selected: boolean) {
		for (const entry of this.#base.layerEntriesAll()) {
			if (entry.config === layer) {
				entry.selected = selected;
			}
		}
	}

	addOverlay(config: LayerConfigEntry | LayerConfigEntry[]): this {
		this.#overlay.addConfig(config);
		return this;
	}

	addTerrain(terrainSources: TerrainSources): this {
		const map = this.#map;
		if (!map) return this;

		const terrainControl = new maplibregl.TerrainControl({
			source: 'terrain',
			exaggeration: 1
		});

		const detailsTerrain = document.createElement('details');
		const summaryTerrain = document.createElement('summary');
		const divTerrainEntries = document.createElement('div');
		summaryTerrain.textContent = 'Terrain';
		detailsTerrain.appendChild(summaryTerrain);
		detailsTerrain.appendChild(divTerrainEntries);

		for (const id in terrainSources) {
			const { title, source } = terrainSources[id];

			const entryDiv = document.createElement('div');
			entryDiv.className = `${ELEMENT_CLASS_PREFIX}-layer-entry-visibility`;
			const terrainEntryLabel = document.createElement('label');
			const terrainCheckbox = document.createElement('input');
			terrainCheckbox.type = 'checkbox';
			const spanElement = document.createElement('span');
			spanElement.textContent = title;
			terrainEntryLabel.appendChild(terrainCheckbox);
			terrainEntryLabel.appendChild(spanElement);
			entryDiv.appendChild(terrainEntryLabel);

			terrainCheckbox.addEventListener(
				'change',
				(_e) => {
					for (const checkbox of detailsTerrain.querySelectorAll(
						`.${ELEMENT_CLASS_PREFIX}-layer-entry-visibility input[type=checkbox]`
					)) {
						const isTerrainUsed = !!map.getTerrain()?.source;
						map.setTerrain(null);

						for (const layer_id of map.getLayersOrder()) {
							if (map.getLayer(layer_id)?.source === 'terrain') {
								map.removeLayer(layer_id);
							}
						}
						if (map.getSource('terrain')) {
							map.removeSource('terrain');
						}
						if (checkbox !== terrainCheckbox) {
							(checkbox as HTMLInputElement).checked = false;
						}

						if ((terrainCheckbox as HTMLInputElement).checked) {
							map.addSource('terrain', source);
							map.addLayer({
								id: 'hills',
								type: 'hillshade',
								source: 'terrain',
								paint: {
									'hillshade-illumination-anchor': 'map',
									'hillshade-exaggeration': 0.2
								}
							});
							if (!map.hasControl(terrainControl)) {
								map.addControl(terrainControl);
							}
							if (isTerrainUsed) {
								map.setTerrain({ source: 'terrain' });
							}
						} else {
							if (map.getLayer('hills')) {
								map.removeLayer('hills');
							}
							if (map.hasControl(terrainControl)) {
								map.removeControl(terrainControl);
							}
						}
					}
				},
				false
			);

			detailsTerrain.appendChild(entryDiv);
		}

		this.#optional.appendChild(detailsTerrain);
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
