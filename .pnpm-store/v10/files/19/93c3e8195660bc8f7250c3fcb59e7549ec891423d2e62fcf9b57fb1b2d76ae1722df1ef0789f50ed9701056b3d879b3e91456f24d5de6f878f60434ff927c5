import { Selection } from '@antv/component';
import { CategoryStyleProps } from '@antv/component/lib/ui/legend/types';
import type { RuntimeContext } from '../runtime/types';
import type { ElementDatum } from '../types';
import type { CardinalPlacement } from '../types/placement';
import type { BasePluginOptions } from './base-plugin';
import { BasePlugin } from './base-plugin';
/**
 * <zh/> 图例配置项
 *
 * <en/> Legend options
 */
export interface LegendOptions extends BasePluginOptions, Omit<CategoryStyleProps, 'data'> {
    /**
     * <zh/> 图例触发行为
     * - `'hover'`：鼠标移入图例项时触发
     * - `'click'`：鼠标点击图例项时触发
     *
     * <en/> Legend trigger behavior
     * - `'hover'`：mouseover the legend item
     * - `'click'`：click the legend item
     * @defaultValue 'hover'
     */
    trigger?: 'hover' | 'click';
    /**
     * <zh/> 图例在画布中的相对位置，默认为 'bottom'，代表在画布正下方
     *
     * <en/> Relative position of the legend in the canvas, defaults to 'bottom', representing the bottom of the canvas
     * @defaultValue 'bottom'
     */
    position?: CardinalPlacement;
    /**
     * <zh/> 图例挂载的容器，无则挂载到 Graph 所在容器
     *
     * <en/> The container where the legend is mounted, if not, it will be mounted to the container where the Graph is located
     */
    container?: HTMLElement | string;
    /**
     * <zh/> 图例画布类名，传入外置容器时不生效
     *
     * <en/> The class name of the legend canvas, which does not take effect when an external container is passed in
     */
    className?: string;
    /**
     * <zh/> 图例的容器样式，传入外置容器时不生效
     *
     * <en/> The style of the legend container, which does not take effect when an external container is passed in
     */
    containerStyle?: Partial<CSSStyleDeclaration>;
    /**
     * <zh/> 节点分类标识
     *
     * <en/> Node Classification Identifier
     */
    nodeField?: string | ((item: ElementDatum) => string);
    /**
     * <zh/> 边分类标识
     *
     * <en/> Edge Classification Identifier
     */
    edgeField?: string | ((item: ElementDatum) => string);
    /**
     * <zh/> 组合分类标识
     *
     * <en/> Combo Classification Identifier
     */
    comboField?: string | ((item: ElementDatum) => string);
}
/**
 * <zh/> 图例
 *
 * <en/> Legend
 * @remarks
 * <zh/> 图例插件用于展示图中元素的分类信息，支持节点、边、组合的分类信息展示。
 *
 * <en/> The legend plugin is used to display the classification information of elements in the graph, and supports the display of classification information of nodes, edges, and combos.
 */
export declare class Legend extends BasePlugin<LegendOptions> {
    static defaultOptions: Partial<LegendOptions>;
    private typePrefix;
    private draw;
    private fieldMap;
    private selectedItems;
    private category?;
    private container?;
    private canvas?;
    constructor(context: RuntimeContext, options: LegendOptions);
    /**
     * <zh/> 更新图例配置
     *
     * <en/> Update the legend configuration
     * @param options - <zh/> 图例配置项 | <en/> Legend options
     * @internal
     */
    update(options: Partial<LegendOptions>): void;
    private clear;
    private bindEvents;
    private changeState;
    /**
     * <zh/> 图例元素点击事件
     *
     * <en/> Legend element click event
     * @param event - <zh/> 点击的元素 | <en/> The element that is clicked
     */
    click: (event: Selection) => void;
    /**
     * <zh/> 图例元素移出事件
     *
     * <en/> Legend element mouseleave event
     * @param event - <zh/> 移出的元素 | <en/> The element that is moved out
     */
    mouseleave: (event: Selection) => void;
    /**
     * <zh/> 图例元素移入事件
     *
     * <en/> Legend element mouseenter event
     * @param event - <zh/> 移入的元素 | <en/> The element that is moved in
     */
    mouseenter: (event: Selection) => void;
    /**
     * <zh/> 刷新图例元素状态
     *
     * <en/> Refresh the status of the legend element
     */
    updateElement(): void;
    private setFieldMap;
    private getEvents;
    private getMarkerData;
    private upsertCanvas;
    private createElement;
    /**
     * <zh/>销毁图例
     *
     * <en/> Destroy the legend
     * @internal
     */
    destroy(): void;
}
