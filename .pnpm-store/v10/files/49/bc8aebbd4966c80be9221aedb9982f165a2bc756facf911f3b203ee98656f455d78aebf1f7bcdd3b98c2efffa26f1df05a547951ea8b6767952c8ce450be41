import EventEmitter from '@antv/event-emitter';
import { PinchHandler } from './pinch';
export interface ShortcutOptions {
}
export type ShortcutKey = string[];
type Handler = (event: any) => void;
export declare class Shortcut {
    private map;
    pinchHandler: PinchHandler | undefined;
    private boundHandlePinch;
    private emitter;
    private recordKey;
    constructor(emitter: EventEmitter);
    bind(key: ShortcutKey, handler: Handler): void;
    unbind(key: ShortcutKey, handler?: Handler): void;
    unbindAll(): void;
    match(key: ShortcutKey): boolean;
    private bindEvents;
    private onKeyDown;
    private onKeyUp;
    private trigger;
    /**
     * <zh/> 扩展 wheel, drag 操作
     *
     * <en/> Extend wheel, drag operations
     * @param eventType - event name
     * @param event - event
     */
    private triggerExtendKey;
    private onWheel;
    private onDrag;
    private handlePinch;
    private onFocus;
    destroy(): void;
}
export {};
