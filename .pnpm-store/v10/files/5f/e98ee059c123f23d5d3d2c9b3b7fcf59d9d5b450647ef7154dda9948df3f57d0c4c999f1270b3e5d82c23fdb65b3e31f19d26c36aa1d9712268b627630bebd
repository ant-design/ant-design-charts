import type { LabelStyleProps } from '../../elements/shapes/label';
import type { RuntimeContext } from '../../runtime/types';
import type { Prefix } from '../../types';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
declare const titleKey = "title";
declare const subtitleKey = "subtitle";
/**
 * <zh/> 标题的样式
 *
 * <en/> Title styles
 */
export type TitleStyle = Prefix<typeof titleKey, Omit<LabelStyleProps, 'x' | 'y' | 'text'>>;
/**
 * <zh/> 副标题的样式
 *
 * <en/> Subtitle styles
 */
export type SubTitleStyle = Prefix<typeof subtitleKey, Omit<LabelStyleProps, 'x' | 'y' | 'text'>>;
/**
 * <zh/> 标题插件配置项
 *
 * <en/> Title plugin options
 */
export interface TitleOptions extends BasePluginOptions, TitleStyle, SubTitleStyle {
    /**
     * <zh/> 整个标题的高度
     *
     * <en/> whole title height
     * @defaultValue 44
     */
    size?: number;
    /**
     * <zh/> 整个标题位于图的位置
     *
     * <en/> The entire title is located at the position of the graph
     * @defaultValue 'left'
     */
    align?: 'left' | 'center' | 'right';
    /**
     * <zh/> 主标题、副标题之间的上下间距
     *
     * <en/> The y spacing between the title and subtitle
     * @defaultValue 8
     */
    spacing?: number;
    /**
     * <zh/> 标题内边距
     *
     * <en/> whole title padding
     * @defaultValue [16, 24, 0, 24]
     */
    padding?: number | number[];
    /**
     * <zh/> 标题内容
     *
     * <en/> title text
     */
    [titleKey]: string;
    /**
     * <zh/> 副标题内容
     *
     * <en/> subtitle text
     */
    [subtitleKey]?: string | null;
    /**
     * <zh/> 标题画布类名，传入外置容器时不生效
     *
     * <en/> The class name of the title canvas, which does not take effect when an external container is passed in
     */
    className?: string;
}
export declare class Title extends BasePlugin<TitleOptions> {
    private canvas;
    private container;
    private get padding();
    constructor(context: RuntimeContext, options: TitleOptions);
    private onRender;
    private bindEvents;
    private unbindEvents;
    destroy(): void;
    private updateCanvas;
    private renderTitle;
}
export {};
