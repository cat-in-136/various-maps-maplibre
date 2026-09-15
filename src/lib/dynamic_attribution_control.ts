import * as maplibregl from 'maplibre-gl';

export type DynamicAttributionDataEvent =
	| maplibregl.MapSourceDataEvent
	| maplibregl.MapStyleDataEvent
	| maplibregl.MapTerrainEvent;

export type DynamicAttributionControlAttributionWillUpdateEvent = {
	type: 'attributionwillupdate';
	map: maplibregl.Map;
	attributionControl: DynamicAttributionControl;
	originalEvent: DynamicAttributionDataEvent;
};

/** Concrete Evented for mixin use (Evented is abstract since v6). */
class DynamicAttributionEvented extends maplibregl.Evented {}

/**
 * Enhanced attribution control with explicit update capability
 */
export class DynamicAttributionControl extends maplibregl.AttributionControl {
	/** Evented mixin instance */
	#_evented: DynamicAttributionEvented;

	/**
	 * Creates a new DynamicAttributionControl instance
	 * @param options - Same options as AttributionControl
	 */
	constructor(
		options: maplibregl.AttributionControlOptions = DynamicAttributionControl.defaultOption
	) {
		super(options);
		this.#_evented = new DynamicAttributionEvented(); // mixin Evented.
		this._updateData = (e: DynamicAttributionDataEvent) => {
			const isSourceMeta =
				'sourceDataType' in e &&
				(e.sourceDataType === 'metadata' || e.sourceDataType === 'visibility');
			const isStyle = 'dataType' in e && e.dataType === 'style';
			const isTerrain = e.type === 'terrain';
			if (e && (isSourceMeta || isStyle || isTerrain)) {
				// Emit an attributionwillupdate event before updating attributions
				const properties: DynamicAttributionControlAttributionWillUpdateEvent = {
					type: 'attributionwillupdate',
					map: this._map,
					attributionControl: this,
					originalEvent: e
				};
				this.fire('attributionwillupdate', properties);

				this._updateAttributions();
			}
		};
	}

	/**
	 * Explicitly updates the displayed attributions
	 */
	public updateAttributions(): void {
		this._updateAttributions(); // Call protected method from base class
	}

	/**
	 * Returns the default attribution control options.
	 * @returns MaplibreAttributionControlOptions
	 */
	static get defaultOption(): maplibregl.AttributionControlOptions {
		const defaultAttribution = new maplibregl.AttributionControl();
		return defaultAttribution.options;
	}

	/** Register an event listener.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns A subscription object with a `remove` method to unregister the listener.
	 */
	on(type: string, listener: maplibregl.Listener): maplibregl.Subscription {
		return this.#_evented.on(type as never, listener as never);
	}

	/** Remove a previously registered event listener.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `this` to allow for method chaining.
	 */
	off(type: string, listener: maplibregl.Listener): this {
		this.#_evented.off(type as never, listener as never);
		return this;
	}

	/** Register a one-time event listener.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `this` to allow for method chaining, or a Promise if no listener is provided.
	 */
	once(type: string, listener?: maplibregl.Listener): this | Promise<unknown> {
		if (listener) {
			this.#_evented.once(type as never, listener as never);
			return this;
		}
		return this.#_evented.once(type as never) as Promise<unknown>;
	}

	/** Fire an event of the specified type.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `this` to allow for method chaining.
	 */
	fire(
		event: maplibregl.Event | string,
		properties?: Parameters<maplibregl.Evented['fire']>[1]
	): this {
		if (typeof event === 'string') {
			this.#_evented.fire(event as never, properties);
		} else {
			this.#_evented.fire(event as never);
		}
		return this;
	}

	/** Check if there are any listeners for a specified event type.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `true` if there are listeners, `false` otherwise.
	 */
	listens(type: string): boolean {
		return this.#_evented.listens(type as never);
	}

	/** Sets the parent Evented for event propagation.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `this` to allow for method chaining.
	 */
	setEventedParent(
		parent?: maplibregl.Evented | null,
		data?: Parameters<maplibregl.Evented['setEventedParent']>[1]
	): this {
		this.#_evented.setEventedParent(parent, data);
		return this;
	}
}
