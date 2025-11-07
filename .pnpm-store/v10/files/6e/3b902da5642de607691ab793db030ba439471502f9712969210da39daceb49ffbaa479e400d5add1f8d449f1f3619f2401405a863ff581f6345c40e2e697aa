import type { RuntimeContext } from '../runtime/types';
import { BasePlugin, BasePluginOptions } from './base-plugin';
/**
 * <zh/> 网格线配置项
 *
 * <en/> Grid line options
 */
export interface GridLineOptions extends BasePluginOptions {
    /**
     * <zh/> 网格线颜色
     *
     * <en/> Grid line color
     * @defaultValue '#0001'
     */
    stroke?: string;
    /**
     * <zh/> 网格线宽
     *
     * <en/> Grid line width
     * @defaultValue 1
     */
    lineWidth?: number | string;
    /**
     * <zh/> 单个网格的大小
     *
     * <en/> The size of a single grid
     * @defaultValue 20
     */
    size?: number;
    /**
     * <zh/> 是否显示边框
     *
     * <en/> Whether to show the border
     * @defaultValue true
     */
    border?: boolean;
    /**
     * <zh/> 边框线宽
     *
     * <en/> Border line width
     * @defaultValue 1
     */
    borderLineWidth?: number;
    /**
     * <zh/> 边框颜色
     *
     * <en/> Border color
     * @defaultValue '#0001'
     * @remarks
     * <zh/> 完整属性定义参考 [CSS border-color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color)
     *
     * <en/> Refer to [CSS border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color) for the complete property definition
     */
    borderStroke?: string;
    /**
     * <zh/> 边框样式
     *
     * <en/> Border style
     * @defaultValue 'solid'
     * @remarks
     * <zh/> 完整属性定义参考 [CSS border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)
     *
     * <en/> Refer to [CSS border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) for the complete property definition
     */
    borderStyle?: string;
    /**
     * <zh/> 是否跟随图移动
     *
     * <en/> Whether to follow with the graph
     * @defaultValue false
     */
    follow?: boolean | {
        /**
         * <zh/> 是否跟随图平移
         *
         * <en/> Whether to follow the graph translation
         */
        translate?: boolean;
        /**
         * <zh/> 是否跟随图缩放
         *
         * <en/> Whether to follow the graph zoom
         */
        zoom?: boolean;
    };
}
/**
 * <zh/> 网格线
 *
 * <en/> Grid line
 * @remarks
 * <zh/> 网格线插件，多用于辅助绘图
 *
 * <en/> Grid line plugin, often used to auxiliary drawing
 */
export declare class GridLine extends BasePlugin<GridLineOptions> {
    static defaultOptions: Partial<GridLineOptions>;
    private $element;
    private offset;
    private currentScale;
    private baseSize;
    constructor(context: RuntimeContext, options: GridLineOptions);
    /**
     * <zh/> 更新网格线配置
     *
     * <en/> Update the configuration of the grid line
     * @param options - <zh/> 配置项 | <en/> options
     * @internal
     */
    update(options: Partial<GridLineOptions>): void;
    private bindEvents;
    private updateStyle;
    private updateOffset;
    private followZoom;
    private followTranslate;
    private parseFollow;
    private onTransform;
    /**
     * <zh/> 销毁网格线
     *
     * <en/> Destroy the grid line
     * @internal
     */
    destroy(): void;
}
