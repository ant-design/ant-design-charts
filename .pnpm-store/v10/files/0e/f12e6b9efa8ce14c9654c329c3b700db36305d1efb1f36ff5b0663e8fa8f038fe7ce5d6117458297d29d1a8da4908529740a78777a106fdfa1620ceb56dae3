import type { IRenderer } from '@antv/g';
import { Canvas as GCanvas } from '@antv/g';
import { Canvas } from '../../runtime/canvas';
import type { Placement } from '../../types';
interface Options {
    /** <zh/> 插件宽度 | <en/> Plugin width */
    width: number;
    /** <zh/> 插件高度 | <en/> Plugin height */
    height: number;
    /** <zh/> 渲染器 | <en/> Render */
    renderer?: IRenderer;
    /** <zh/> 插件放置位置 | <en/> Plugin placement */
    placement: Placement;
    /** <zh/> 插件类名 | <en/> Plugin class name */
    className: string;
    /** <zh/> 指定插件放置容器 | <en/> Specify the plugin placement container */
    container?: string | HTMLElement;
    /** <zh/> 容器样式 | <en/> Container style */
    containerStyle?: Partial<CSSStyleDeclaration>;
    /** <zh/> G6 画布 | <en/> G6 canvas */
    graphCanvas: Canvas;
}
/**
 * <zh/> 创建插件画布
 *
 * <en/> Create a plugin canvas
 * @param options - <zh/> 配置项 | <en/> options
 * @returns <zh/> [容器, 画布] | <en/> [container, canvas]
 */
export declare function createPluginCanvas(options: Options): [HTMLElement, GCanvas];
export {};
