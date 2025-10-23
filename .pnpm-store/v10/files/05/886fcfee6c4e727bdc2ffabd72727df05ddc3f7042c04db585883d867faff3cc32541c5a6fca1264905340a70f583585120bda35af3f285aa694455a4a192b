import { type CircleStyleProps } from '../../elements';
import type { RuntimeContext } from '../../runtime/types';
import type { EdgeData, NodeData } from '../../spec';
import type { EdgeStyle } from '../../spec/element/edge';
import type { NodeStyle } from '../../spec/element/node';
import type { ElementType, ID, IPointerEvent } from '../../types';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
/**
 * <zh/> 边过滤镜插件配置项
 *
 * <en/> Edge filter lens plugin options
 */
export interface EdgeFilterLensOptions extends BasePluginOptions {
    /**
     * <zh/> 移动透镜的方式
     * - `'pointermove'`：始终跟随鼠标移动
     * - `'click'`：鼠标点击时透镜移动
     * - `'drag'`：拖拽透镜
     *
     * <en/> The way to move the lens
     * - `'pointermove'`: always follow the mouse movement
     * - `'click'`: move the lens when the mouse clicks
     * - `'drag'`: drag the lens
     * @defaultValue 'pointermove'
     */
    trigger?: 'pointermove' | 'click' | 'drag';
    /**
     * <zh/> 透镜的半径
     *
     * <en/> The radius of the lens
     * @defaultValue 60
     */
    r?: number;
    /**
     * <zh/> 透镜的最大半径。只有在 `scaleRBy` 为 `wheel` 时生效
     *
     * <en/> The maximum radius of the lens. Only valid when `scaleRBy` is `wheel`
     * @defaultValue canvas 宽高最小值的一半
     */
    maxR?: number;
    /**
     * <zh/> 透镜的最小半径。只有在 `scaleRBy` 为 `wheel` 时生效
     *
     * <en/> The minimum radius of the lens. Only valid when `scaleRBy` is `wheel`
     * @defaultValue 0
     */
    minR?: number;
    /**
     * <zh/> 缩放透镜半径的方式
     * - `'wheel'`：通过滚轮缩放透镜的半径
     *
     * <en/> The way to scale the radius of the lens
     * - `'wheel'`: scale the radius of the lens by the wheel
     * @defaultValue `'wheel'`
     */
    scaleRBy?: 'wheel';
    /**
     * <zh/> 边显示的条件
     * - `'both'`：只有起始节点和目标节点都在透镜中时，边才会显示
     * - `'source'`：只有起始节点在透镜中时，边才会显示
     * - `'target'`：只有目标节点在透镜中时，边才会显示
     * - `'either'`：只要起始节点或目标节点有一个在透镜中时，边就会显示
     *
     * <en/> The condition for displaying the edge
     * - `'both'`: The edge is displayed only when both the source node and the target node are in the lens
     * - `'source'`: The edge is displayed only when the source node is in the lens
     * - `'target'`: The edge is displayed only when the target node is in the lens
     * - `'either'`: The edge is displayed when either the source node or the target node is in the lens
     * @defaultValue 'both'
     */
    nodeType?: 'both' | 'source' | 'target' | 'either';
    /**
     * <zh/> 过滤出始终不在透镜中显示的元素
     *
     * <en/> Filter elements that are never displayed in the lens
     * @param id - <zh/> 元素的 id | <en/> The id of the element
     * @param elementType - <zh/> 元素的类型 | <en/> The type of the element
     * @returns <zh/> 是否显示 | <en/> Whether to display
     */
    filter?: (id: ID, elementType: ElementType) => boolean;
    /**
     * <zh/> 透镜的样式
     *
     * <en/> The style of the lens
     */
    style?: Partial<CircleStyleProps>;
    /**
     * <zh/> 在透镜中节点的样式
     *
     * <en/> The style of the nodes displayed in the lens
     */
    nodeStyle?: NodeStyle | ((datum: NodeData) => NodeStyle);
    /**
     * <zh/> 在透镜中边的样式
     *
     * <en/> The style of the edges displayed in the lens
     */
    edgeStyle?: EdgeStyle | ((datum: EdgeData) => EdgeStyle);
    /**
     * <zh/> 是否阻止默认事件
     *
     * <en/> Whether to prevent the default event
     * @defaultValue true
     */
    preventDefault?: boolean;
}
/**
 * <zh/> 边过滤镜插件
 *
 * <en/> Edge filter lens plugin
 * @remarks
 * <zh/> 边过滤镜可以将关注的边保留在过滤镜范围内，其他边将在该范围内不显示。
 *
 * <en/> EdgeFilterLens can keep the focused edges within the lens range, while other edges will not be displayed within that range.
 */
export declare class EdgeFilterLens extends BasePlugin<EdgeFilterLensOptions> {
    static defaultOptions: Partial<EdgeFilterLensOptions>;
    constructor(context: RuntimeContext, options: EdgeFilterLensOptions);
    private lens;
    private shapes;
    private r;
    private get canvas();
    private get isLensOn();
    protected onEdgeFilter: (event: IPointerEvent) => void;
    private renderLens;
    private getFilterData;
    private getFocusElements;
    private renderFocusElements;
    private getElementStyle;
    private scaleRByWheel;
    get graphDom(): import("@antv/g").CanvasLike | null;
    private isLensDragging;
    private onDragStart;
    private onDrag;
    private onDragEnd;
    private bindEvents;
    private unbindEvents;
    update(options: Partial<EdgeFilterLensOptions>): void;
    destroy(): void;
}
