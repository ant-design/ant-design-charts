import type { ID, IElementDragEvent, Point } from '../types';
import type { DragElementOptions } from './drag-element';
import { DragElement } from './drag-element';
/**
 * <zh/> 调用力导布局拖拽元素交互配置项
 *
 * <en/> Call d3-force layout to drag element behavior options
 */
export interface DragElementForceOptions extends Omit<DragElementOptions, 'animation' | 'dropEffect' | 'shadow'> {
    /**
     * <zh/> 在拖拽结束后，节点是否保持固定位置
     * - `true`: 在拖拽结束后，节点的位置将保持固定，不受布局算法的影响
     * - `false`: 在拖拽结束后，节点的位置将继续受到布局算法的影响
     *
     * <en/> Whether the node remains in a fixed position after dragging ends
     * - `true`: After dragging ends, the node's position will remain fixed and will not be affected by the layout algorithm
     * - `false`: After dragging ends, the node's position will continue to be affected by the layout algorithm
     */
    fixed?: boolean;
}
/**
 * <zh/> 调用力导布局拖拽元素的交互
 *
 * <en/> Call d3-force layout to drag element behavior
 * @remarks
 * <zh/> 只能在使用 d3-force 布局时使用该交互，在拖拽过程中会实时重新计算布局。
 *
 * <en/> This behavior can only be used with d3-force layout. The layout will be recalculated in real time during dragging.
 */
export declare class DragElementForce extends DragElement {
    private get forceLayoutInstance();
    /**
     * Whether the behavior is enabled
     * @param event - The event object
     * @returns Is the behavior enabled
     * @internal
     */
    protected validate(event: IElementDragEvent): boolean;
    /**
     * Move selected elements by offset
     * @param ids - The selected element IDs
     * @param offset - The offset to move
     * @internal
     */
    protected moveElement(ids: ID[], offset: Point): Promise<void>;
    /**
     * Triggered when the drag starts
     * @param event - The event object
     * @internal
     */
    protected onDragStart(event: IElementDragEvent): void;
    /**
     * Triggered when dragging
     * @param event - The event object
     * @internal
     */
    protected onDrag(event: IElementDragEvent): void;
    /**
     * Triggered when the drag ends
     * @internal
     */
    protected onDragEnd(): void;
}
