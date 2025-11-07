import type { EventService } from '../services';
import { Point } from '../shapes/Point';
import type { IEventTarget } from './interfaces';
export declare function isFederatedEvent(value: any): value is FederatedEvent;
/**
 * An DOM-compatible synthetic event implementation that is "forwarded" on behalf of an original
 * FederatedEvent or native Event.
 */
export declare class FederatedEvent<N extends Event = Event, T = any> {
    /**
     * The type of event, supports the following:
     * * pointerdown
     * * touchstart
     * * mousedown
     * * rightdown
     * * ...
     */
    type: string;
    /**
     * @deprecated
     */
    get name(): string;
    /**
     * The propagation phase.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase
     */
    eventPhase: number;
    /**
     * can be used to implement event delegation
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/target
     */
    target: IEventTarget | null;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/bubbles
     */
    bubbles: boolean;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/cancelBubble
     */
    cancelBubble: boolean;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable
     */
    readonly cancelable = false;
    /** the event target when listeners binded */
    currentTarget: IEventTarget | null;
    /** Flags whether the default response of the user agent was prevent through this event. */
    defaultPrevented: boolean;
    /**
     * timestamp when the event created
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/timeStamp
     */
    timeStamp: number;
    /**
     * the original event.
     */
    nativeEvent: N;
    /** The original event that caused this event, if any. */
    originalEvent: FederatedEvent<N>;
    /** Flags whether propagation was stopped. */
    propagationStopped: boolean;
    /** Flags whether propagation was immediately stopped. */
    propagationImmediatelyStopped: boolean;
    manager: EventService | null;
    /** Event-specific detail */
    detail: T;
    /**
     * The coordinates of the evnet relative to the nearest DOM layer.
     * This is a non-standard property.
     */
    layer: Point;
    get layerX(): number;
    get layerY(): number;
    /**
     * The coordinates of the event relative to the DOM document.
     * This is a non-standard property.
     * relative to the DOM document.
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/pageX
     */
    page: Point;
    get pageX(): number;
    get pageY(): number;
    /**
     * relative to Canvas, origin is left-top
     */
    canvas: Point;
    get x(): number;
    get y(): number;
    get canvasX(): number;
    get canvasY(): number;
    /**
     * relative to Viewport, account for Camera
     */
    viewport: Point;
    get viewportX(): number;
    get viewportY(): number;
    /**
     * The event boundary which manages this event. Propagation can only occur
     *  within the boundary's jurisdiction.
     */
    constructor(manager: EventService | null);
    path: IEventTarget[];
    /**
     * The propagation path for this event
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composedPath
     *
     * So composedPath()[0] represents the original target.
     * @see https://polymer-library.polymer-project.org/3.0/docs/devguide/events#retargeting
     */
    composedPath(): IEventTarget[];
    /**
     * @deprecated
     */
    get propagationPath(): IEventTarget[];
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
     */
    preventDefault(): void;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation
     */
    stopImmediatePropagation(): void;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation
     */
    stopPropagation(): void;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/view
     */
    view: any;
    /**
     * added for compatibility with DOM Event,
     * deprecated props and methods
     */
    initEvent(): void;
    initUIEvent(): void;
    which: number;
    returnValue: boolean;
    srcElement: IEventTarget;
    readonly composed = false;
    isTrusted: boolean;
    clone(): void;
    NONE: number;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
}
//# sourceMappingURL=FederatedEvent.d.ts.map