import type { CanvasContext, GlobalRuntime, InteractivePointerEvent } from '..';
import type { HTML } from '../display-objects';
import type { FederatedEvent } from '../dom/FederatedEvent';
import { FederatedPointerEvent } from '../dom/FederatedPointerEvent';
import { FederatedWheelEvent } from '../dom/FederatedWheelEvent';
import type { IEventTarget } from '../dom/interfaces';
import type { PointLike } from '../shapes';
import type { Cursor, EventPosition } from '../types';
type Picker = (position: EventPosition) => IEventTarget | null;
export type EmitterListeners = Record<string, {
    fn: (...args: any[]) => any;
    context: any;
    once: boolean;
}[] | {
    fn: (...args: any[]) => any;
    context: any;
    once: boolean;
}>;
export declare class EventService {
    private globalRuntime;
    private context;
    constructor(globalRuntime: GlobalRuntime, context: CanvasContext);
    private rootTarget;
    /**
     * Store HTML elements in current canvas.
     */
    nativeHTMLMap: WeakMap<HTMLElement, HTML>;
    cursor: Cursor | null;
    private mappingTable;
    private mappingState;
    private eventPool;
    private pickHandler;
    private tmpMatrix;
    private tmpVec3;
    init(): void;
    destroy(): void;
    private getScale;
    /**
     * Should account for CSS Transform applied on container.
     * @see https://github.com/antvis/G/issues/1161
     * @see https://github.com/antvis/G/issues/1677
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/offsetX
     */
    client2Viewport(client: PointLike): PointLike;
    viewport2Client(canvas: PointLike): PointLike;
    viewport2Canvas({ x, y }: PointLike): PointLike;
    canvas2Viewport(canvasP: PointLike): PointLike;
    setPickHandler(pickHandler: Picker): void;
    addEventMapping(type: string, fn: (e: FederatedEvent) => void): void;
    mapEvent(e: FederatedEvent): void;
    onPointerDown: (from: FederatedPointerEvent) => void;
    onPointerUp: (from: FederatedPointerEvent) => void;
    onPointerMove: (from: FederatedPointerEvent) => void;
    onPointerOut: (from: FederatedPointerEvent) => void;
    onPointerOver: (from: FederatedPointerEvent) => void;
    onPointerUpOutside: (from: FederatedPointerEvent) => void;
    onWheel: (from: FederatedWheelEvent) => void;
    onClick: (from: FederatedPointerEvent) => void;
    onPointerCancel: (from: FederatedPointerEvent) => void;
    dispatchEvent(e: FederatedEvent, type?: string, skipPropagate?: boolean): void;
    propagate(e: FederatedEvent, type?: string): void;
    propagationPath(target: IEventTarget): IEventTarget[];
    hitTest(position: EventPosition): IEventTarget | null;
    /**
     * whether the native event trigger came from Canvas,
     * should account for HTML shape
     */
    isNativeEventFromCanvas($el: HTMLCanvasElement, nativeEvent: InteractivePointerEvent): boolean;
    /**
     * Find HTML from composed path in native UI event.
     */
    private getExistedHTML;
    private pickTarget;
    private createPointerEvent;
    private createWheelEvent;
    private trackingData;
    cloneWheelEvent(from: FederatedWheelEvent): FederatedWheelEvent;
    clonePointerEvent(from: FederatedPointerEvent, type?: string): FederatedPointerEvent;
    private copyPointerData;
    private copyMouseData;
    private copyWheelData;
    private copyData;
    private allocateEvent;
    private freeEvent;
    private notifyTarget;
    private notifyListeners;
    /**
     * some detached nodes may exist in propagation path, need to skip them
     */
    private findMountedTarget;
    private getCursor;
}
export {};
//# sourceMappingURL=EventService.d.ts.map