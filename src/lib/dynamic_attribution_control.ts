import * as maplibregl from 'maplibre-gl';

export type DynamicAttributionControlAttributionWillUpdateEvent = {
	type: 'attributionwillupdate';
	map: maplibregl.Map;
	attributionControl: DynamicAttributionControl;
	originalEvent: maplibregl.MapDataEvent;
};

/**
 * Enhanced attribution control with explicit update capability
 */
export class DynamicAttributionControl extends maplibregl.AttributionControl {
	/** Evented mixin instance */
	#_evented: maplibregl.Evented;

	/**
	 * Creates a new DynamicAttributionControl instance
	 * @param options - Same options as AttributionControl
	 */
	constructor(
		options: maplibregl.AttributionControlOptions = DynamicAttributionControl.defaultOption
	) {
		super(options);
		this.#_evented = new maplibregl.Evented(); // mixin Evented.
		this._updateData = (e: maplibregl.MapDataEvent) => {
			if (
				e &&
				(e.sourceDataType === 'metadata' ||
					e.sourceDataType === 'visibility' ||
					e.dataType === 'style' ||
					e.type === 'terrain')
			) {
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
		return this.#_evented.on(type, listener);
	}

	/** Remove a previously registered event listener.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `this` to allow for method chaining.
	 */
	off(type: string, listener: maplibregl.Listener): this {
		this.#_evented.off(type, listener);
		return this;
	}

	/** Register a one-time event listener.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `this` to allow for method chaining, or a Promise if no listener is provided.
	 */
	once(type: string, listener?: maplibregl.Listener): this | Promise<any> {
		const result = this.#_evented.once(type, listener);
		return result === this.#_evented ? this : (result as Promise<any>);
	}

	/** Fire an event of the specified type.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `this` to allow for method chaining.
	 */
	fire(event: maplibregl.Event | string, properties?: any): this {
		this.#_evented.fire(event, properties);
		return this;
	}

	/** Check if there are any listeners for a specified event type.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `true` if there are listeners, `false` otherwise.
	 */
	listens(type: string): boolean {
		return this.#_evented.listens(type);
	}

	/** Sets the parent Evented for event propagation.
	 * @see https://maplibre.org/maplibre-gl-js-docs/api/events/
	 * @returns `this` to allow for method chaining.
	 */
	setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): this {
		this.#_evented.setEventedParent(parent, data);
		return this;
	}
}
