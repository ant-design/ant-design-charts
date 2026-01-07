import type { ICamera } from '../camera';
import type { DisplayObject } from '../display-objects';
import type { CanvasContext } from '../dom';
import type { GlobalRuntime } from '../global-runtime';
import type { EventPosition, InteractivePointerEvent } from '../types';
import { AsyncParallelHook, AsyncSeriesWaterfallHook, SyncHook, SyncWaterfallHook } from '../utils';
import type { Canvas } from '../Canvas';
export type RenderingPluginContext = CanvasContext & GlobalRuntime;
export interface RenderingPlugin {
    apply: (context: RenderingPluginContext, runtime: GlobalRuntime) => void;
}
export interface PickingResult {
    /**
     * position in canvas coordinate
     */
    position: EventPosition;
    picked: DisplayObject[];
    /**
     * only return the topmost object if there are multiple objects overlapped
     */
    topmost?: boolean;
}
/**
 * Use frame renderer implemented by `g-canvas/svg/webgl`, in every frame we do followings:
 * * update & merge dirty rectangles
 * * begin frame
 * * filter by visible
 * * sort by z-index in scene graph
 * * culling with strategies registered in `g-canvas/webgl`
 * * end frame
 */
export declare class RenderingService {
    private globalRuntime;
    private context;
    constructor(globalRuntime: GlobalRuntime, context: CanvasContext);
    private inited;
    private stats;
    private zIndexCounter;
    hooks: {
        /**
         * called before any frame rendered
         */
        init: SyncHook<[], void>;
        initAsync: AsyncParallelHook<[]>;
        /**
         * only dirty object which has sth changed will be rendered
         */
        dirtycheck: SyncWaterfallHook<[DisplayObject<any, any>], DisplayObject<any, any>>;
        /**
         * do culling
         */
        cull: SyncWaterfallHook<[DisplayObject<any, any>, ICamera], DisplayObject<any, any>>;
        /**
         * called at beginning of each frame, won't get called if nothing to re-render
         */
        beginFrame: SyncHook<[XRFrame], void>;
        /**
         * called before every dirty object get rendered
         */
        beforeRender: SyncHook<[DisplayObject<any, any>], void>;
        /**
         * called when every dirty object rendering even it's culled
         */
        render: SyncHook<[DisplayObject<any, any>], void>;
        /**
         * called after every dirty object get rendered
         */
        afterRender: SyncHook<[DisplayObject<any, any>], void>;
        /**
         * commit - draw the result on the canvas
         */
        endFrame: SyncHook<[XRFrame], void>;
        destroy: SyncHook<[], void>;
        /**
         * use async but faster method such as GPU-based picking in `g-plugin-device-renderer`
         */
        pick: AsyncSeriesWaterfallHook<[PickingResult], PickingResult>;
        /**
         * Unsafe but sync version of pick.
         */
        pickSync: SyncWaterfallHook<[PickingResult], PickingResult>;
        /**
         * used in event system
         */
        pointerDown: SyncHook<[InteractivePointerEvent], void>;
        pointerUp: SyncHook<[InteractivePointerEvent], void>;
        pointerMove: SyncHook<[InteractivePointerEvent], void>;
        pointerOut: SyncHook<[InteractivePointerEvent], void>;
        pointerOver: SyncHook<[InteractivePointerEvent], void>;
        pointerWheel: SyncHook<[InteractivePointerEvent], void>;
        pointerCancel: SyncHook<[InteractivePointerEvent], void>;
        click: SyncHook<[InteractivePointerEvent], void>;
    };
    init(callback: () => void): void;
    getStats(): {
        /**
         * total display objects in scenegraph
         */
        total: number;
        /**
         * number of display objects need to render in current frame
         */
        rendered: number;
    };
    /**
     * Meet the following conditions:
     * * disable DirtyRectangleRendering
     * * camera changed
     */
    disableDirtyRectangleRendering(): boolean;
    render(canvas: Canvas, frame: XRFrame, rerenderCallback: () => void): void;
    private renderDisplayObject;
    private sort;
    destroy(): void;
    dirty(): void;
}
//# sourceMappingURL=RenderingService.d.ts.map