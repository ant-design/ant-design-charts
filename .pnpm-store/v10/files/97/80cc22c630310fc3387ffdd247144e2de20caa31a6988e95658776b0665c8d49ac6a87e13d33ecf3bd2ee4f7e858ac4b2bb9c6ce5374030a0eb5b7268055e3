import type { DisplayObject, Group } from '../display-objects';
/**
 * why we need re-render
 */
export declare enum RenderReason {
    CAMERA_CHANGED = 0,
    DISPLAY_OBJECT_CHANGED = 1,
    NONE = 2
}
export interface RenderingContext {
    /**
     * root of scenegraph
     */
    root: Group;
    /**
     * force rendering at next frame
     */
    force: boolean;
    /**
     * reason of re-render, reset after every renderred frame
     */
    renderReasons: Set<RenderReason>;
    renderListCurrentFrame: DisplayObject[];
    unculledEntities: number[];
    dirty: boolean;
}
//# sourceMappingURL=RenderingContext.d.ts.map