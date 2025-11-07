import type { TooltipStyleProps } from '@antv/component';
import type { RuntimeContext } from '../runtime/types';
import type { ElementDatum, ID, IElementEvent } from '../types';
import type { BasePluginOptions } from './base-plugin';
import { BasePlugin } from './base-plugin';
/**
 * <zh/> 提示框插件配置项
 *
 * <en/> Tooltip plugin options
 */
export interface TooltipOptions extends BasePluginOptions, Pick<TooltipStyleProps, 'position' | 'offset' | 'enterable' | 'style' | 'container' | 'title'> {
    /**
     *  <zh/> 触发行为，可选 hover | click
     * - `'hover'`：鼠标移入元素时触发
     * - `'click'`：鼠标点击元素时触发
     *
     *  <en/> Trigger behavior, optional hover | click
     * - `'hover'`：mouse hover element
     * - `'click'`：mouse click element
     * @defaultValue 'hover
     */
    trigger?: 'hover' | 'click';
    /**
     *  <zh/> 自定义内容
     *
     *  <en/> Function for getting tooltip content
     */
    getContent?: (event: IElementEvent, items: ElementDatum[]) => Promise<HTMLElement | string>;
    /**
     *  <zh/> 是否启用
     *
     *  <en/> Is enable
     *  @defaultValue true
     */
    enable?: boolean | ((event: IElementEvent, items: ElementDatum[]) => boolean);
    /**
     * <zh/> 显示隐藏的回调
     *
     * <en/> Callback executed when visibility of the tooltip card is changed
     */
    onOpenChange: (open: boolean) => void;
}
/**
 * <zh/> 提示框插件
 *
 * <en/> Tooltip plugin
 */
export declare class Tooltip extends BasePlugin<TooltipOptions> {
    static defaultOptions: Partial<TooltipOptions>;
    private currentTarget;
    private tooltipElement;
    private container;
    constructor(context: RuntimeContext, options: TooltipOptions);
    /**
     * <zh/> 获取事件及处理事件的方法
     *
     * <en/> Get event and handle event methods
     * @returns <zh/> 事件及处理事件的方法 | <en/> Event and handling event methods
     */
    private getEvents;
    /**
     * <zh/> 更新tooltip配置
     *
     * <en/> Update the tooltip configuration
     * @param options - <zh/> 配置项 | <en/> options
     * @internal
     */
    update(options: Partial<TooltipOptions>): void;
    private render;
    private unbindEvents;
    private bindEvents;
    private isEnable;
    /**
     * <zh/> 点击事件
     *
     * <en/> Click event
     * @param event - <zh/> 元素 | <en/> element
     */
    onClick: (event: IElementEvent) => void;
    /**
     * <zh/> 在目标元素(node/edge/combo)上移动
     *
     * <en/> Move on target element (node/edge/combo)
     * @param event - <zh/> 目标元素 | <en/> target element
     */
    onPointerMove: (event: IElementEvent) => void;
    /**
     * <zh/> 点击画布/触发拖拽/出现上下文菜单隐藏tooltip
     *
     * <en/> Hide tooltip when clicking canvas/triggering drag/appearing context menu
     * @param event - <zh/> 目标元素 | <en/> target element
     */
    onPointerLeave: (event: IElementEvent) => void;
    /**
     * <zh/> 移动画布
     *
     * <en/> Move canvas
     * @param event - <zh/> 目标元素 | <en/> target element
     */
    onCanvasMove: (event: IElementEvent) => void;
    private onPointerOver;
    /**
     * <zh/> 显示目标元素的提示框
     *
     * <en/> Show tooltip of target element
     * @param id - <zh/> 元素 ID | <en/> element ID
     */
    showById: (id: ID) => Promise<void>;
    private getElementData;
    /**
     * <zh/> 在目标元素上显示tooltip
     *
     * <en/> Show tooltip on target element
     * @param event - <zh/> 目标元素 | <en/> target element
     * @internal
     */
    show: (event: IElementEvent) => Promise<void>;
    /**
     * <zh/> 隐藏tooltip
     *
     * <en/> Hidden tooltip
     * @param event - <zh/> 目标元素,不传则为外部调用 | <en/> Target element, not passed in as external call
     */
    hide: (event?: IElementEvent) => void;
    private get tooltipStyleProps();
    private initTooltip;
    /**
     * <zh/> 销毁tooltip
     *
     * <en/> Destroy tooltip
     * @internal
     */
    destroy(): void;
}
