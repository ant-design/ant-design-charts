import type { DisplayObject } from '@antv/g';
import type { RuntimeContext } from '../runtime/types';
import type { ElementType } from '../types';
import type { IViewportEvent } from '../types/event';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 画布优化交互配置项
 *
 * <en/> Canvas optimization behavior options
 */
export interface OptimizeViewportTransformOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用画布优化功能
     *
     * <en/> Whether to enable canvas optimization function
     * @defaultValue true
     */
    enable?: boolean | ((event: IViewportEvent) => boolean);
    /**
     * <zh/> 指定始终显示的图形元素。应用此交互后，在画布操作过程中，只有通过该属性指定的图形元素会保持可见，其余图形元素将被隐藏，从而提升渲染性能。默认情况下，节点始终可见，而其他图形元素在操作画布过程中会自动隐藏
     *
     * <en/> Specify the shapes that are always visible. After applying this interaction, only the shapes specified by this property will remain visible during the canvas operation, and the rest of the shapes will be hidden to improve rendering performance. By default, nodes are always visible, while other shapes are automatically hidden during canvas operations
     */
    shapes?: {
        node?: string[];
        edge?: string[];
        combo?: string[];
    } | ((type: ElementType, shape: DisplayObject) => boolean);
    /**
     * <zh/> 设置防抖时间
     *
     * <en/> Set debounce time
     * @defaultValue 200
     */
    debounce?: number;
}
/**
 * <zh/> 操作画布过程中隐藏元素
 *
 * <en/> Hide elements during canvas operations (dragging, zooming, scrolling)
 */
export declare class OptimizeViewportTransform extends BaseBehavior<OptimizeViewportTransformOptions> {
    static defaultOptions: Partial<OptimizeViewportTransformOptions>;
    private hiddenShapes;
    private isVisible;
    constructor(context: RuntimeContext, options: OptimizeViewportTransformOptions);
    private setElementsVisibility;
    private filterShapes;
    private hideShapes;
    private showShapes;
    private bindEvents;
    private unbindEvents;
    private validate;
    update(options: Partial<OptimizeViewportTransformOptions>): void;
    destroy(): void;
}
