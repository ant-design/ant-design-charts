import type { IRenderer } from './AbstractRenderer';
import { DisplayObject } from './display-objects/DisplayObject';
import type { CanvasContext, IChildNode } from './dom';
import { Document, EventTarget } from './dom';
import type { ICanvas } from './dom/interfaces';
import { EventService, RenderingService } from './services';
import type { PointLike } from './shapes';
import { type CanvasConfig, type Cursor } from './types';
export declare function isCanvas(value: any): value is Canvas;
export declare enum CanvasEvent {
    READY = "ready",
    BEFORE_RENDER = "beforerender",
    RERENDER = "rerender",
    AFTER_RENDER = "afterrender",
    BEFORE_DESTROY = "beforedestroy",
    AFTER_DESTROY = "afterdestroy",
    RESIZE = "resize",
    DIRTY_RECTANGLE = "dirtyrectangle",
    RENDERER_CHANGED = "rendererchanged"
}
/**
 * can be treated like Window in DOM
 * provide some extra methods like `window`, such as:
 * * `window.requestAnimationFrame`
 * * `window.devicePixelRatio`
 *
 * prototype chains: Canvas(Window) -> EventTarget
 *
 * @docs https://g.antv.antgroup.com/api/canvas/intro
 */
export declare class Canvas extends EventTarget implements ICanvas {
    customElements: ICanvas['customElements'];
    devicePixelRatio: ICanvas['devicePixelRatio'];
    requestAnimationFrame: ICanvas['requestAnimationFrame'];
    cancelAnimationFrame: ICanvas['cancelAnimationFrame'];
    createImage: ICanvas['createImage'];
    supportsTouchEvents: ICanvas['supportsTouchEvents'];
    supportsPointerEvents: ICanvas['supportsPointerEvents'];
    isTouchEvent: ICanvas['isTouchEvent'];
    isMouseEvent: ICanvas['isMouseEvent'];
    /**
     * window.document
     */
    document: Document;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element
     */
    Element: typeof DisplayObject;
    /**
     * rAF in auto rendering
     */
    private frameId?;
    private inited;
    private readyPromise;
    private resolveReadyPromise;
    context: CanvasContext;
    constructor(config: CanvasConfig);
    private initRenderingContext;
    private initDefaultCamera;
    private updateSizeAttenuation;
    getConfig(): CanvasConfig;
    /**
     * get the root displayObject in scenegraph
     * @alias this.document.documentElement
     */
    getRoot(): import("./display-objects").Group;
    /**
     * get the camera of canvas
     */
    getCamera(): import("./camera").ICamera;
    getContextService(): import("./services").ContextService<unknown>;
    getEventService(): EventService;
    getRenderingService(): RenderingService;
    getRenderingContext(): import("./services").RenderingContext;
    getStats(): {
        total: number;
        rendered: number;
    };
    get ready(): Promise<any>;
    /**
     * @param cleanUp - whether to clean up all the internal services of Canvas
     * @param skipTriggerEvent - whether to skip trigger destroy event
     */
    destroy(cleanUp?: boolean, skipTriggerEvent?: boolean): void;
    /**
     * compatible with G 3.0
     * @deprecated
     * @alias resize
     */
    changeSize(width: number, height: number): void;
    resize(width: number, height: number): void;
    appendChild<T extends IChildNode>(child: T, index?: number): T;
    insertBefore<T extends IChildNode, N extends IChildNode>(newChild: T, refChild: N | null): T;
    removeChild<T extends IChildNode>(child: T): T;
    /**
     * Remove all children which can be appended to its original parent later again.
     */
    removeChildren(): void;
    /**
     * Recursively destroy all children which can not be appended to its original parent later again.
     * But the canvas remains running which means display objects can be appended later.
     */
    destroyChildren(): void;
    render(frame?: XRFrame): void;
    private run;
    private initRenderer;
    private initRenderingService;
    private loadRendererContainerModule;
    setRenderer(renderer: IRenderer): void;
    setCursor(cursor: Cursor): void;
    unmountChildren(parent: DisplayObject): void;
    mountChildren(child: DisplayObject, skipTriggerEvent?: boolean): void;
    mountFragment(child: DisplayObject): void;
    client2Viewport(client: PointLike): PointLike;
    viewport2Client(canvas: PointLike): PointLike;
    viewport2Canvas(viewport: PointLike): PointLike;
    canvas2Viewport(canvas: PointLike): PointLike;
    /**
     * @deprecated
     * @alias client2Viewport
     */
    getPointByClient(clientX: number, clientY: number): PointLike;
    /**
     * @deprecated
     * @alias viewport2Client
     */
    getClientByPoint(x: number, y: number): PointLike;
}
//# sourceMappingURL=Canvas.d.ts.map