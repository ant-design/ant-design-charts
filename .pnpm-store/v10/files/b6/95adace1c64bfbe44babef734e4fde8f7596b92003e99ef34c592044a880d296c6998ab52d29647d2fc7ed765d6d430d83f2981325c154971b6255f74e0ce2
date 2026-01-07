import type { DisplayObject } from '@antv/g';
import type { RuntimeContext } from '../runtime/types';
import type { ComboData, EdgeData, NodeData } from '../spec';
import type { IViewportEvent, State } from '../types';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
export type FixShapeConfig = {
    /**
     * <zh/> 指定要固定大小的图形，可以是图形的类名字，或者是一个函数，该函数接收构成元素的所有图形并返回目标图形
     *
     * <en/> Specify the shape to be fixed in size. This can be a class name string of the shape, or a function that takes all shapes composing the element and returns the target shape
     */
    shape: string | ((shapes: DisplayObject[]) => DisplayObject);
    /**
     * <zh/> 指定要固定大小的图形属性字段。如果未指定，则默认固定整个图形的大小
     *
     * <en/> Specify the fields of the shape to be fixed in size. If not specified, the entire shape's size will be fixed by default
     */
    fields?: string[];
};
/**
 * <zh/> 固定元素大小交互配置项
 *
 * <en/> Fix element size behavior options
 */
export interface FixElementSizeOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用固定元素大小交互。默认在缩小画布时启用
     *
     * <en/> Whether to enable the fix element size behavior. Enabled by default when zooming out
     * @remarks
     * <zh/> 默认在缩小画布时启用，设置 `enable: (event) => event.data.scale < 1`；如果希望在放大画布时启用，设置 `enable: (event) => event.data.scale > 1`；如果希望在放大缩小画布时都启用，设置 `enable: true`
     *
     * <en/> Enabled by default when zooming out, set `enable: (event) => event.data.scale < 1`; If you want to enable it when zooming in, set `enable: (event) => event.data.scale > 1`; If you want to enable it when zooming in and out, set `enable: true`
     * @defaultValue (event) => Boolean(event.data.scale < 1)
     */
    enable?: boolean | ((event: IViewportEvent) => boolean);
    /**
     * <zh/> 指定要固定大小的元素状态
     *
     * <en/> Specify the state of elements to be fixed in size
     * @defaultValue `'selected'`
     */
    state?: State;
    /**
     * <zh/> 节点过滤器，用于过滤哪些节点在缩放过程中保持固定大小
     *
     * <en/> Node filter for filtering which nodes remain fixed in size during zooming
     * @defaultValue () => true
     */
    nodeFilter?: (datum: NodeData) => boolean;
    /**
     * <zh/> 边过滤器，用于过滤哪些边在缩放过程中保持固定大小
     *
     * <en/> Edge filter for filtering which edges remain fixed in size during zooming
     * @defaultValue () => true
     */
    edgeFilter?: (datum: EdgeData) => boolean;
    /**
     * <zh/> Combo 过滤器，用于过滤哪些 Combo 在缩放过程中保持固定大小
     *
     * <en/> Combo filter for filtering which combos remain fixed in size during zooming
     * @defaultValue () => true
     */
    comboFilter?: (datum: ComboData) => boolean;
    /**
     * <zh/> 节点配置项，用于定义哪些属性在视觉上保持固定大小。若未指定（即为 undefined），则整个节点将被固定
     *
     * <en/> Node configuration for defining which node attributes should remain fixed in size visually. If not specified (i.e., undefined), the entire node will be fixed in size.
     * @example
     * <zh/> 如果在缩放过程中希望固定节点主图形的 lineWidth，可以这样配置：
     *
     * <en/> If you want to fix the lineWidth of the key shape of the node during zooming, you can configure it like this:
     * ```ts
     * { node: [{ shape: 'key', fields: ['lineWidth'] }] }
     *```
     * <zh/> 如果在缩放过程中想保持元素标签大小不变，可以这样配置：
     *
     * <en/> If you want to keep the label size of the element unchanged during zooming, you can configure it like this:
     * ```ts
     *  { shape: 'label' }
     * ```
     */
    node?: FixShapeConfig | FixShapeConfig[];
    /**
     * <zh/> 边配置项，用于定义哪些属性在视觉上保持固定大小。默认固定 lineWidth、labelFontSize 属性
     *
     * <en/> Edge configuration for defining which edge attributes should remain fixed in size visually. By default, the lineWidth and labelFontSize attributes are fixed
     * @defaultValue [{ shape: 'key', fields: ['lineWidth'] }, { shape: 'halo', fields: ['lineWidth'] }, { shape: 'label' }]
     */
    edge?: FixShapeConfig | FixShapeConfig[];
    /**
     * <zh/> Combo 配置项，用于定义哪些属性在视觉上保持固定大小。默认整个 Combo 将被固定
     *
     * <en/> Combo configuration for defining which combo attributes should remain fixed in size visually. By default, the entire combo will be fixed
     */
    combo?: FixShapeConfig | FixShapeConfig[];
    /**
     * <zh/> 元素重绘时是否还原样式
     *
     * <en/> Whether to reset styles when elements are redrawn
     * @defaultValue false
     */
    reset?: boolean;
}
/**
 * <zh/> 缩放画布过程中固定元素大小
 *
 * <en/> Fix element size while zooming
 */
export declare class FixElementSize extends BaseBehavior<FixElementSizeOptions> {
    static defaultOptions: Partial<FixElementSizeOptions>;
    constructor(context: RuntimeContext, options: FixElementSizeOptions);
    private isZoomEvent;
    private relatedEdgeToUpdate;
    private zoom;
    private fixElementSize;
    private cachedStyles;
    private getOriginalFieldValue;
    private scaleEntireElement;
    private scaleSpecificShapes;
    private skipIfExceedViewport;
    private fixNodeLike;
    private fixEdge;
    private updateRelatedEdges;
    private restoreCachedStyles;
    private resetTransform;
    private bindEvents;
    private unbindEvents;
    private validate;
    destroy(): void;
}
