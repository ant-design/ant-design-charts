import EventEmitter from 'eventemitter3';
import type { GlobalRuntime } from '..';
import type { ICamera } from '../camera';
import type { DisplayObject } from '../display-objects';
import type { ContextService, EventService, RenderingContext, RenderingPlugin, RenderingService } from '../services';
import type { AABB, PointLike, Rectangle } from '../shapes';
import type { BaseStyleProps, CanvasConfig, InteractivePointerEvent, Shape, TypeEasingFunction } from '../types';
import type { CustomElementRegistry } from './CustomElementRegistry';
import type { FederatedEvent } from './FederatedEvent';
/**
 * built-in events for element
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationEvent
 *
 * TODO: use MutationObserver instead
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
export declare enum ElementEvent {
    /**
     * @see https://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMAttrModified
     */
    ATTR_MODIFIED = "DOMAttrModified",
    /**
     * it has been inserted
     * @see https://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeInserted
     */
    INSERTED = "DOMNodeInserted",
    /**
     * @see https://www.w3.org/TR/DOM-Level-3-Events/#domnodeinsertedintodocument
     */
    MOUNTED = "DOMNodeInsertedIntoDocument",
    /**
     * it is being removed
     * @see https://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMNodeRemoved
     */
    REMOVED = "removed",
    /**
     * @see https://www.w3.org/TR/DOM-Level-3-Events/#domnoderemovedfromdocument
     */
    UNMOUNTED = "DOMNodeRemovedFromDocument",
    REPARENT = "reparent",
    DESTROY = "destroy",
    BOUNDS_CHANGED = "bounds-changed",
    CULLED = "culled"
}
export interface IEventTarget {
    emitter: EventEmitter;
    addEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void;
    removeEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void;
    /**
     * @param skipPropagate - The default value is `false`. If true, the event is only triggered globally (note that the global is not the object itself), skipping the event propagation process. In addition, if the object has been removed from the global, the event is only triggered on the object itself.
     * @param dispatchToSelf - The default value is `false`. If true, the event will be triggered on the object itself.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
     */
    dispatchEvent: <T extends FederatedEvent>(e: T, skipPropagate?: boolean, dispatchToSelf?: boolean) => boolean;
}
interface EventListener {
    (evt: FederatedEvent): void;
}
interface EventListenerObject {
    handleEvent(object: FederatedEvent): void;
}
export type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
export interface INode extends IEventTarget {
    shadow: boolean;
    /**
     * Returns node's node document's document base URL.
     */
    readonly baseURI: string;
    /**
     * Returns the children.
     */
    readonly childNodes: IChildNode[];
    /**
     * Returns the first child.
     */
    readonly firstChild: IChildNode | null;
    /**
     * Returns true if node is connected and false otherwise.
     */
    isConnected: boolean;
    /**
     * Returns the last child.
     */
    readonly lastChild: IChildNode | null;
    /**
     * Returns the next sibling.
     */
    readonly nextSibling: IChildNode | null;
    /**
     * Returns a string appropriate for the type of node.
     */
    readonly nodeName: string;
    /**
     * Returns the type of node.
     */
    readonly nodeType: number;
    nodeValue: string | null;
    /**
     * Returns the node document. Returns null for documents.
     */
    ownerDocument: IDocument | null;
    /**
     * Returns the parent element.
     */
    readonly parentElement: IElement | null;
    /**
     * Returns the parent.
     */
    parentNode: (INode & IParentNode) | null;
    /**
     * Returns the previous sibling.
     */
    readonly previousSibling: IChildNode | null;
    textContent: string | null;
    appendChild: <T extends INode>(newChild: T, index?: number) => T;
    /**
     * Returns a copy of node. If deep is true, the copy also includes the node's descendants.
     */
    cloneNode: (deep?: boolean) => INode;
    /**
     * Returns a bitmask indicating the position of other relative to node.
     */
    compareDocumentPosition: (other: INode) => number;
    /**
     * Returns true if other is an inclusive descendant of node, and false otherwise.
     */
    contains: (other: INode | null) => boolean;
    /**
     * Returns node's root.
     */
    getRootNode: (options?: GetRootNodeOptions) => INode;
    /**
     * Returns node's ancestor.
     */
    getAncestor: (n: number) => INode | null;
    /**
     * iterate current node and its descendants
     * @param callback - callback to execute for each node, return false to break
     */
    forEach: (callback: (o: INode) => void | boolean) => void;
    /**
     * Returns whether node has children.
     */
    hasChildNodes: () => boolean;
    insertBefore: <T extends INode>(newChild: T, refChild: INode | null) => T;
    isDefaultNamespace: (namespace: string | null) => boolean;
    /**
     * Returns whether node and otherNode have the same properties.
     */
    isEqualNode: (otherNode: INode | null) => boolean;
    isSameNode: (otherNode: INode | null) => boolean;
    lookupNamespaceURI: (prefix: string | null) => string | null;
    lookupPrefix: (namespace: string | null) => string | null;
    /**
     * Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.
     */
    normalize: () => void;
    removeChild: <T extends INode>(oldChild: T) => T;
    replaceChild: <T extends INode>(newChild: INode, oldChild: T) => T;
    destroyed: boolean;
    /**
     * Destroy itself.
     */
    destroy: () => void;
}
export interface IParentNode {
    readonly childElementCount: number;
    /**
     * Returns the child elements.
     */
    readonly children: IElement[];
    /**
     * Returns the first child that is an element, and null otherwise.
     */
    readonly firstElementChild: IElement | null;
    /**
     * Returns the last child that is an element, and null otherwise.
     */
    readonly lastElementChild: IElement | null;
    /**
     * Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
     *
     * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
     */
    append: (...nodes: INode[]) => void;
    /**
     * Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.
     *
     * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
     */
    prepend: (...nodes: INode[]) => void;
    /**
     * Returns the first element that is a descendant of node that matches selectors.
     */
    querySelector: <E extends IElement = IElement>(selectors: string) => E | null;
    /**
     * Returns all element descendants of node that match selectors.
     */
    querySelectorAll: <E extends IElement = IElement>(selectors: string) => E[];
    /**
     * Similar to querySelector, use custom filter instead of selectors.
     */
    find: <E extends IElement = IElement>(filter: (node: E) => boolean) => E | null;
    /**
     * Similar to querySelectorAll, use custom filter instead of selectors.
     */
    findAll: <E extends IElement = IElement>(filter: (node: E) => boolean) => E[];
}
export interface IChildNode extends INode {
    /**
     * Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.
     *
     * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
     */
    after: (...nodes: INode[]) => void;
    /**
     * Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.
     *
     * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
     */
    before: (...nodes: INode[]) => void;
    /**
     * Removes node.
     */
    remove: () => void;
    /**
     * Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.
     *
     * Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.
     */
    replaceWith: (...nodes: INode[]) => void;
}
export interface DisplayObjectConfig<StyleProps> {
    /**
     * element's identifier, must be unique in a document.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/id
     */
    id?: string;
    name?: string;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/className
     */
    class?: string;
    className?: string;
    /**
     * all styles properties, not read-only
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     */
    style?: StyleProps;
    initialParsedStyle?: any;
    /**
     * compatible with G 3.0
     * @alias style
     * @deprecated
     */
    attrs?: StyleProps;
    type?: Shape | string;
    /**
     * @deprecated use `style.zIndex` instead
     */
    zIndex?: number;
    /**
     * @deprecated use `style.visibility = 'visible'` instead
     */
    visible?: boolean;
    /**
     * compatible with G 3.0
     * @alias interactive
     * @deprecated
     */
    capture?: boolean;
    /**
     * enable interaction events for the DisplayObject
     * @deprecated use `style.pointerEvents = 'auto'` instead
     */
    interactive?: boolean;
}
export interface IElement<StyleProps = any, ParsedStyleProps = any> extends INode, IChildNode, IParentNode {
    /**
     * Returns the value of element's id content attribute. Can be set to change it.
     */
    id: string;
    /**
     * Returns the qualified name.
     */
    tagName: string;
    name: string;
    /**
     * Returns the value of element's class content attribute. Can be set to change it.
     */
    className: string;
    classList: string[];
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
     */
    attributes: StyleProps;
    /**
     * compatible with `style`
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     */
    style: StyleProps & ICSSStyleDeclaration<StyleProps>;
    parsedStyle: ParsedStyleProps;
    getElementById: <E extends IElement = IElement>(id: string) => E | null;
    getElementsByName: <E extends IElement = IElement>(name: string) => E[];
    getElementsByClassName: <E extends IElement = IElement>(className: string) => E[];
    getElementsByTagName: <E extends IElement = IElement>(tagName: string) => E[];
    scrollLeft: number;
    scrollTop: number;
    clientLeft: number;
    clientTop: number;
    getGeometryBounds(): AABB;
    getRenderBounds(): AABB;
    getBounds(): AABB;
    getLocalBounds(): AABB;
    getBoundingClientRect(): Rectangle;
    getClientRects(): Rectangle[];
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
     */
    setAttribute: <Key extends keyof StyleProps>(attributeName: Key, value: StyleProps[Key], force?: boolean, memoize?: boolean) => void;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
     */
    getAttribute: (attributeName: keyof StyleProps) => StyleProps[keyof StyleProps] | undefined;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
     */
    removeAttribute: (attributeName: keyof StyleProps) => void;
    hasAttribute: (qualifiedName: string) => boolean;
}
export interface IAnimationTimeline {
    currentTime: number | null;
    destroy: () => void;
    play: (target: IElement, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions) => IAnimation;
    restart: () => boolean;
    getAnimations: () => IAnimation[];
}
export interface IAnimation {
    effect: IKeyframeEffect;
    timeline: IAnimationTimeline;
    id: string;
    pending: boolean;
    playState: AnimationPlayState;
    ready: Promise<this>;
    finished: Promise<this>;
    onfinish: ((this: this, ev: AnimationPlaybackEvent) => any) | null;
    oncancel: ((this: this, ev: AnimationPlaybackEvent) => any) | null;
    onframe: ((this: this, ev: AnimationPlaybackEvent) => any) | null;
    currentTime: number;
    startTime: number;
    playbackRate: number;
    totalDuration: number;
    play: () => void;
    pause: () => void;
    finish: () => void;
    cancel: () => void;
    reverse: () => void;
    updatePlaybackRate: (playbackRate: number) => void;
    tick: (timelineTime: number, isAnimationFrame: boolean) => void;
}
export interface IAnimationEffectTiming extends EffectTiming {
    easingFunction: TypeEasingFunction;
}
export interface IKeyframeEffect {
    composite: CompositeOperation;
    iterationComposite: IterationCompositeOperation;
    target: IElement | null;
    animation: IAnimation | null;
    timing: IAnimationEffectTiming;
    normalizedKeyframes: ComputedKeyframe[];
    applyInterpolations: () => void;
    update: (localTime: number | null) => boolean;
    getKeyframes: () => ComputedKeyframe[];
    setKeyframes: (keyframes: Keyframe[] | PropertyIndexedKeyframes | null) => void;
    getComputedTiming: () => ComputedEffectTiming;
    getTiming: () => EffectTiming;
    updateTiming: (timing?: OptionalEffectTiming) => void;
}
export interface IDocument extends INode, IParentNode {
    /**
     * Returns the Window object of the active document.
     */
    readonly defaultView: ICanvas | null;
    /**
     * Gets a reference to the root node of the document.
     */
    readonly documentElement: IElement;
    readonly ownerDocument: null;
    readonly timeline: IAnimationTimeline;
    /**
     * Creates an instance of the element for the specified tag.
     */
    createElement: <T extends DisplayObject<StyleProps>, StyleProps extends BaseStyleProps>(tagName: string, options: DisplayObjectConfig<StyleProps>) => T;
    elementFromPoint: (x: number, y: number) => Promise<DisplayObject>;
    elementsFromPoint: (x: number, y: number) => Promise<DisplayObject[]>;
    elementsFromBBox: (minX: number, minY: number, maxX: number, maxY: number) => DisplayObject[];
}
/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration
 */
export interface ICSSStyleDeclaration<StyleProps> {
    setProperty: <Key extends keyof StyleProps>(propertyName: Key, value: StyleProps[Key], priority?: string) => void;
    getPropertyValue: (propertyName: keyof StyleProps) => StyleProps[keyof StyleProps] | undefined;
    removeProperty: (propertyName: keyof StyleProps) => void;
    item: (index: number) => string;
}
export interface CanvasContext {
    config: CanvasConfig;
    camera: ICamera;
    /**
     * ContextServiceContribution
     */
    ContextService: new (context: GlobalRuntime & CanvasContext) => ContextService<unknown>;
    contextService: ContextService<unknown>;
    renderingService: RenderingService;
    eventService: EventService;
    renderingContext: RenderingContext;
    renderingPlugins: RenderingPlugin[];
}
export interface IWindow {
    /** https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry */
    customElements: CustomElementRegistry;
    /** https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio */
    devicePixelRatio: number;
    /** https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame  */
    requestAnimationFrame: typeof requestAnimationFrame;
    /** https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame */
    cancelAnimationFrame: typeof cancelAnimationFrame;
    /**
     * replace `new window.Image()`
     */
    createImage: () => HTMLImageElement;
    /**
     * whether the runtime supports TouchEvent?
     * if not, the event system won't trigger touch events like `touchstart`
     */
    supportsTouchEvents: boolean;
    /**
     * whether the runtime supports PointerEvent?
     * if not, the event system won't trigger pointer events like `pointerdown`
     */
    supportsPointerEvents: boolean;
    /**
     * is this native event a TouchEvent?
     */
    isTouchEvent: (event: InteractivePointerEvent) => event is TouchEvent;
    /**
     * is this native event a MouseEvent?
     */
    isMouseEvent: (event: InteractivePointerEvent) => event is MouseEvent;
}
export interface ICanvas extends IWindow, IEventTarget {
    document: IDocument;
    context: CanvasContext;
    getConfig: () => Partial<CanvasConfig>;
    getCamera: () => ICamera;
    getContextService: () => ContextService<unknown>;
    getRenderingService: () => RenderingService;
    getEventService: () => EventService;
    mountChildren: (parent: INode) => void;
    unmountChildren: (parent: INode) => void;
    mountFragment: (fragment: INode) => void;
    client2Viewport: (client: PointLike) => PointLike;
    viewport2Client: (viewport: PointLike) => PointLike;
    canvas2Viewport: (canvas: PointLike) => PointLike;
    viewport2Canvas: (viewport: PointLike) => PointLike;
    render: () => void;
    destroy: (destroyScenegraph?: boolean) => void;
    resize: (width: number, height: number) => void;
}
export {};
//# sourceMappingURL=interfaces.d.ts.map