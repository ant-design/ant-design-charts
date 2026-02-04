import type { RuntimeContext } from '../../runtime/types';
import type { Element } from '../../types';
import type { IElementEvent } from '../../types/event';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
import type { Item } from './util';
/**
 * <zh/> 上下文菜单配置项
 *
 * <en/> Contextmenu options
 */
export interface ContextmenuOptions extends BasePluginOptions {
    /**
     * <zh/> 给菜单的 DOM 追加的类名
     *
     * <en/> The class name appended to the menu DOM for custom styles
     * @defaultValue 'g6-contextmenu'
     */
    className?: string;
    /**
     * <zh/> 如何触发右键菜单
     * - `'click'` : 点击触发
     * - `'contextmenu'` : 右键触发
     *
     * <en/> How to trigger the context menu
     * - `'click'` : Click trigger
     * - `'contextmenu'` : Right-click trigger
     * @defaultValue 'contextmenu'
     */
    trigger?: 'click' | 'contextmenu';
    /**
     * <zh/> 菜单显式 X、Y 方向的偏移量
     *
     * <en/> The offset X, y direction of the menu
     * @defaultValue [4, 4]
     */
    offset?: [number, number];
    /**
     * <zh/> 当菜单被点击后，触发的回调方法
     *
     * <en/> The callback method triggered when the menu is clicked
     */
    onClick?: (value: string, target: HTMLElement, current: Element) => void;
    /**
     * <zh/> 返回菜单的项目列表，支持 `Promise` 类型的返回值。是 `getContent` 的快捷配置
     *
     * <en/> Return the list of menu items, support the `Promise` type return value. It is a shortcut configuration of `getContent`
     */
    getItems?: (event: IElementEvent) => Item[] | Promise<Item[]>;
    /**
     * <zh/> 返回菜单的内容，支持 `Promise` 类型的返回值，也可以使用 `getItems` 进行快捷配置
     *
     * <en/> Return the content of menu, support the `Promise` type return value, you can also use `getItems` for shortcut configuration
     */
    getContent?: (event: IElementEvent) => HTMLElement | string | Promise<HTMLElement | string>;
    /**
     * <zh/> 当 `getContent` 返回一个 `Promise` 时，使用的菜单内容
     *
     * <en/> The menu content when loading is used when getContent returns a Promise
     */
    loadingContent?: HTMLElement | string;
    /**
     * <zh/> 是否可用，通过参数判断是否支持右键菜单，默认是全部可用
     *
     * <en/> Whether the plugin is available, determine whether the right-click menu is supported through parameters, The default is all available
     * @defaultValue true
     */
    enable?: boolean | ((event: IElementEvent) => boolean);
}
/**
 * <zh/> 上下文菜单
 *
 * <en/> Contextmenu
 * @remarks
 * <zh/> 上下文菜单，也被称为右键菜单，是当用户在某个特定区域上点击后出现的一个菜单。支持在点击前后，触发自定义事件。
 *
 * <en/> Contextmenu, also known as the right-click menu , is a menu that appears when a user clicks on a specific area. Supports triggering custom events before and after clicking.
 */
export declare class Contextmenu extends BasePlugin<ContextmenuOptions> {
    static defaultOptions: Partial<ContextmenuOptions>;
    private $element;
    private targetElement;
    constructor(context: RuntimeContext, options: ContextmenuOptions);
    private initElement;
    /**
     * <zh/> 显示上下文菜单
     *
     * <en/> Show the contextmenu
     * @param event - <zh/> 元素指针事件 | <en/> Element pointer event
     * @internal
     */
    show(event: IElementEvent): Promise<void>;
    /**
     * <zh/> 隐藏上下文菜单
     *
     * <en/> Hide the contextmenu
     */
    hide(): void;
    /**
     * <zh/> 更新上下文菜单的配置项
     *
     * <en/> Update the contextmenu options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options: Partial<ContextmenuOptions>): void;
    /**
     * <zh/> 销毁上下文菜单
     *
     * <en/> Destroy the contextmenu
     * @internal
     */
    destroy(): void;
    private getDOMContent;
    private bindEvents;
    private unbindEvents;
    private onTriggerEvent;
    private onMenuItemClick;
}
