import EventEmitter from 'eventemitter3';
import { FederatedEvent } from './FederatedEvent';
import type { EventListenerOrEventListenerObject, IEventTarget } from './interfaces';
/**
 * Objects that can receive events and may have listeners for them.
 * eg. Element, Canvas, DisplayObject
 * @docs https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
 */
export declare class EventTarget implements IEventTarget {
    /**
     * event emitter
     */
    emitter: EventEmitter<string | symbol, any>;
    /**
     * @deprecated
     * @alias addEventListener
     */
    on(type: string, listener: EventListenerOrEventListenerObject | ((...args: any[]) => void), options?: boolean | AddEventListenerOptions): this;
    /**
     * support `capture` & `once` in options
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
     */
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | ((...args: any[]) => void), options?: boolean | AddEventListenerOptions): this;
    /**
     * @deprecated
     * @alias removeEventListener
     */
    off(type: string, listener: EventListenerOrEventListenerObject | ((...args: any[]) => void), options?: boolean | AddEventListenerOptions): this;
    removeAllEventListeners(): void;
    removeEventListener(type: string, listener?: EventListenerOrEventListenerObject | ((...args: any[]) => void), options?: boolean | AddEventListenerOptions): this;
    /**
     * @deprecated
     * @alias dispatchEvent
     */
    emit(eventName: string, object: object): void;
    private dispatchEventToSelf;
    dispatchEvent<T extends FederatedEvent>(e: T, skipPropagate?: boolean, dispatchToSelf?: boolean): boolean;
}
//# sourceMappingURL=EventTarget.d.ts.map