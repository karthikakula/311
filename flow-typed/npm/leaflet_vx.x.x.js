// flow-typed signature: f587d7dca63045270aa30946e530f7e8
// flow-typed version: <<STUB>>/leaflet_v1.0.2/flow_v0.42.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'leaflet'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'leaflet' {
  declare export class LatLng {
    lat: number,
    lng: number,
    alt: ?number,

    distanceTo(other: LatLng): number,
  }
  declare type LatLngLike = LatLng | [number, number] | { lat: number, lng: number } | { lon: number, lat: number };

  declare export function latLng(latOrCoords: number | [number, number, ?number] | {lat: number, lng: number, alt?: number}, long?: number, alt?: number): LatLng;

  declare export class LatLngBounds {
    getCenter(): LatLng,
    getSouthWest(): LatLng,
    getNorthEast(): LatLng,
    getNorthWest(): LatLng,
    getSouthEast(): LatLng,
    getWest(): number,
    getSouth(): number,
    getEast(): number,
    getNorth(): number,
    // In Leaflet 1.0.2 this fails on a LatLng literal. Must use number / number
    contains(other: [number, number] | LatLng | LatLngBounds): boolean,
    extend(by: LatLngLike | LatLngBoundsLike): this;
  }
  declare type LatLngBoundsLike = LatLngBounds | [[number, number], [number, number]];

  declare export function latLngBounds(corner1OrCoords: LatLng | LatLng[], corner2?: LatLng): LatLngBounds;

  declare export class Point {
    x: number,
    y: number,
  }
  declare type PointLike = Point | [number, number] | {x: number, y: number};

  declare export function point(xOrCoords: number | [number, number] | {x: number, y: number}, y?: number, round?: boolean): Point;

  declare export class Bounds {
    min: Point;
    max: Point;
    getCenter(round?: boolean): Point;
    getBottomLeft(): Point;
    getTopRight(): Point;
    getSize(): Point;
  }
  declare type BoundsLike = Bounds | [[number, number], [number, number]];

  declare export function bounds(topLeftOrPoints: PointLike | PointLike[], bottomRight?: PointLike): Bounds;

  declare type ZoomOptions = {|
    animate?: boolean,
  |}

  declare type PanOptions = {|
    duration?: number,
    easeLinearity?: number,
    noMoveStart?: boolean,
  |}

  declare type ZoomPanOptions = {|
    ...ZoomOptions,
    ...PanOptions,
  |}

  declare type FitBoundsOptions = {|
    ...ZoomOptions,
    ...PanOptions,
    paddingTopLeft?: PointLike,
    paddingBottomRight?: PointLike,
    padding?: PointLike,
    maxZoom?: number,
  |};

  declare type LocateOptions = {|
    watch?: boolean,
    setView?: boolean,
    maxZoom?: number,
    timeout?: number,
    maximumAge?: 0,
    enableHighAccuracy?: boolean,
  |};

  declare interface ILayer {
    onAdd(map: Map): void;
    onRemove(map: Map): void;
  }

  declare interface Renderer {}

  declare class Handler {
    enable(): this;
    disable(): this;
    enabled(): boolean;

    addHooks(): void;
    removeHooks(): void;
  }

  declare class Evented {
    on(typeOrContext: string | {[type: string]: Function}, fn?: Function, context?: Object): this;
    once(typeOrContext: string | {[type: string]: Function}, fn?: Function, context?: Object): this;
    off(typeOrContext?: string | {[type: string]: Function}, fn?: Function, context?: Object): this;
    fire(type: string, data?: Object, propagate?: boolean): this;
    listens(type: string): boolean;
    addEventParent(obj: Evented): this;
    removeEventParent(obj: Evented): this;
  }

  declare export type MapOptions = {|
    preferCanvas?: boolean,

    // control options
    attributionControl?: boolean,
    zoomControl?: boolean,

    // interaction options
    closePopupOnClick?: boolean,
    zoomSnap?: number,
    zoomDelta?: number,
    trackResize?: boolean,
    boxZoom?: boolean,
    doubleClickZoom?: boolean,
    dragging?: boolean,

    // map state options
    crs?: mixed,
    center?: LatLngLike,
    zoom?: number,
    minZoom?: number,
    maxZoom?: number,
    layers?: ILayer[],
    maxBounds?: LatLngBoundsLike,
    renderer?: Renderer,

    // animation options
    zoomAnimation?: boolean,
    zoomAnimationThreshold?: number,
    fadeAnimation?: boolean,
    markerZoomAnimation?: boolean,
    transform3DLimit?: number,

    // panning inertia options
    inertia?: boolean,
    inertiaDeceleration?: number,
    inertiaMaxSpeed?: number,
    easeLinearity?: number,
    worldCopyJump?: number,
    maxBoundsViscosity?: number,

    // keyboard navigation options
    keyboard?: boolean,
    keyboardPanDelta?: number,

    // mousewheel options
    scrollWheelZoom?: boolean | string,
    wheelDebounceTime?: number,
    wheelPxPerZoomLevel?: number,

    // touch interaction options
    tap?: boolean,
    tapTolerance?: number,
    touchZoom?: boolean | string,
    bounceAtZoomLimits?: boolean,
  |}

  declare export class Map extends Evented {
    // methods for modifying map state
    setView(center: LatLngLike, zoom: number, options?: ZoomPanOptions): this;
    setZoom(zoom: number, options?: ZoomPanOptions): this;
    zoomIn(delta?: number, options?: ZoomOptions): this;
    zoomOut(delta?: number, options?: ZoomOptions): this;
    setZoomAround(latlngOrOffset: LatLngLike | PointLike, zoom: number, options?: ZoomOptions): this;
    fitBounds(bounds: LatLngBoundsLike, options?: FitBoundsOptions): this;
    fitWorld(options?: FitBoundsOptions): this;
    panTo(latlng: LatLngLike, options?: PanOptions): this;
    panBy(point: PointLike): this;
    flyTo(latlng: LatLngLike, zoom?: number, options?: ZoomPanOptions): this;
    flyToBounds(bounds: LatLngBoundsLike, options?: FitBoundsOptions): this;
    setMaxBounds(bounds: LatLngBoundsLike): this;
    setMinZoom(zoom: number): this;
    setMaxZoom(zoom: number): this;
    panInsideBounds(bounds: LatLngBoundsLike, options?: PanOptions): this;
    invalidateSize(optionsOrAnimate?: boolean | ZoomPanOptions): this;
    stop(): this;

    // geolocation methods
    locate(options?: LocateOptions): this;
    stopLocate(): this;

    // other methods
    addHandler(name: string, handlerClass: Class<Handler>): this;
    remove(): this;
    createPane(name: string, container?: HTMLElement): HTMLElement;
    getPane(pane: string | HTMLElement): HTMLElement;
    getPanes(): {[name: string]: HTMLElement};
    getContainer(): HTMLElement;
    whenReady(fn: Function, context?: Object): this;

    // methods for getting map state
    getCenter(): LatLng;
    getZoom(): number;
    getBounds(): LatLngBounds;
    getMinZoom(): number;
    getMaxZoom(): number;
    getBoundsZoom(bounds: LatLngBoundsLike, inside?: boolean): number;
    getSize(): Point;
    getPixelBounds(): Bounds;
    getPixelOrigin(): Point;
    getPixelWorldBounds(zoom?: number): Bounds;

    // methods for layres and controls
    addLayer(layer: ILayer): this;
    removeLayer(layer: ILayer): this;
    hasLayer(layer: ILayer): boolean;
    eachLayer(fn: Function, context?: Object): this;
    openPopup(popup: Popup): this;
    openPopup(htmlOrEl: string | HTMLElement, latlng: LatLngLike, options?: Object): this;
    closePopup(popup?: Popup): this;
    addControl(control: IControl): this;
    removeControl(control: IControl): this;

    // conversion methods
    getZoomScale(toZoom: number, fromZoom: number): number;
    getScaleZoom(scale: number, fromZoom: number): number;
    project(latlng: LatLngLike, zoom: number): Point;
    unproject(point: PointLike, zoom: number): LatLng;
    layerPointToLatLng(point: PointLike): LatLng;
    latLngToLayerPoint(latlng: LatLngLike): Point;
    wrapLatLng(latlng: LatLngLike): LatLng;
    distance(latlng1: LatLngLike, latlng2: LatLngLike): number;
    containerPointToLayerPoint(point: PointLike): Point;
    layerPointToContainerPoint(point: PointLike): Point;
    containerPointToLatLng(point: PointLike): LatLng;
    latLngToContainerPoint(latlng: LatLngLike): Point;
    mouseEventToContainerPoint(ev: MouseEvent): Point;
    mouseEventToLayerPoint(ev: MouseEvent): Point;
    mouseEventToLatLng(ev: MouseEvent): LatLng;

    // handlers
    boxZoom: Handler;
    doubleClickZoom: Handler;
    dragging: Handler;
    keyboard: Handler;
    scrollWheelZoom: Handler;
    tap: Handler;
    touchZoom: Handler;
  }

  declare export function map(el: string | HTMLElement, options?: MapOptions): Map;

  declare interface IControl {
    onAdd(map: Map): void;
    onRemove(map: Map): void;
  }

  declare type ControlPosition = 'topleft' | 'topright' | 'bottomleft' | 'bottomright';

  declare type ControlOptions = {|
    position?: ControlPosition,
  |};

  declare class AbstractControl {
    getPosition(): ControlPosition;
    setPosition(position: ControlPosition): this;
    getContainer(): HTMLElement;
    addTo(map: Map): this;
    remove(): this;
    onAdd(map: Map): void;
    onRemove(map: Map): void;
  }

  declare type ControlZoomOptions = {|
    ...ControlOptions,
    zoomInText?: string,
    zoomInTitle?: string,
    zoomOutText?: string,
    zoomOutTitle?: string,
  |};

  declare export class ControlZoom extends AbstractControl {}

  declare export var control: {
    zoom(options?: ControlZoomOptions): ControlZoom;
  };

  declare export type IconOptions = {|
    iconUrl: string,
    iconRetinaUrl?: string,
    iconSize?: PointLike,
    iconAnchor?: PointLike,
    shadowUrl?: string,
    shadowRetinaUrl?: string,
    shadowSize?: PointLike,
    shadowAnchor?: PointLike,
    popupAnchor?: PointLike,
    className?: string,
  |};

  declare export class Icon {
    options: IconOptions;
    createIcon: (el: ?HTMLElement) => void,
  }

  declare export function icon(options: IconOptions): Icon;

  declare export type DivIconOptions = {
    iconSize?: PointLike,
    iconAnchor?: PointLike,
    popupAnchor?: PointLike,
    className?: string,
    html?: string,
  };

  declare export class DivIcon {
    options: DivIconOptions,
    createIcon: (el: ?HTMLElement) => void,
  }

  declare export function divIcon(options: DivIconOptions): DivIcon;

  declare export type LayerOptions = {|
    attribution?: ?string,
  |};

  declare export class Layer {
    addTo(map: Map): this,
    remove(): this,
    removeFrom(map: Map): this,
    getPane(name?: string): HTMLElement,
    getAttributon(): string,
  }

  declare export type DivOverlayOptions = {|
    /* :: ...LayerOptions, */
    offset?: ?PointLike,
    className?: string,
    pane?: string,
  |};

  declare export type PopupOptions = {|
    /* :: ...DivOverlayOptions, */
    maxWidth?: number,
    minWidth?: number,
    maxHeight?: ?number,
    autoPan?: boolean,
    autoPanPaddingTopLeft?: ?PointLike,
    autoPanPaddingBottomRight?: ?PointLike,
    autoPanPadding?: ?PointLike,
    keepInView?: boolean,
    closeButton?: boolean,
    closeOnClick?: boolean,
    autoClose?: boolean,
    className?: string,
  |};

  declare export class Popup extends Layer {
    getLatLng(): LatLng,
    setLatLng(latLng: LatLngLike): this,
    getContent(): string | HTMLElement,
    setContent(htmlContent: string | HTMLElement | ((layer: Layer) => string | HTMLElement)): this,
    getElement(): string | HTMLElement,
    update(): null,
    isOpen(): boolean,
    bringToFront(): this,
    bringToBack(): this,
    openOn(map: Map): this,
  }

  declare export function popup(options?: PopupOptions, source?: Layer): Popup;

  declare export type MarkerOptions = {|
    icon?: Icon | DivIcon,
    clickable?: boolean,
    draggable?: boolean,
    keyboard?: boolean,
    title?: string,
    alt?: string,
    zIndexOffset?: number,
    opacity?: number,
    riseOnHover?: boolean,
    riseOffset?: number,
  |};

  declare export class Marker extends Evented {
    options: MarkerOptions;

    addTo(map: Map): this;
    getLatLng(): LatLng;
    setLatLng(latlng: LatLngLike): this;
    setIcon(icon: Icon | DivIcon): this;
    setZIndexOffset(offset: number): this;
    setOpacity(opacity: number): this;
    update(): this;
    bindPopup(htmlOrElOrPopup: string | HTMLElement | Popup, options?: Object): this,
    unbindPopup(): this;
    openPopup(): this;
    getPopup(): ?Popup;
    closePopup(): this;
    togglePopup(): this;
    setPopupContent(htmlOrEl: string | HTMLElement): this;
    toGeoJSON(): Object;
    onAdd(map: Map): void;
    onRemove(map: Map): void;
  }

  declare export function marker(latlng: ?LatLngLike, options?: MarkerOptions): Marker;
}
