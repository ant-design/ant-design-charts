import { DisplayObject, IRenderer } from '@antv/g';
import type { RuntimeContext } from '../../runtime/types';
import type { ElementType, Padding, Placement } from '../../types';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
/**
 * <zh/> 缩略图插件配置项
 *
 * <en/> Minimap plugin options
 */
export interface MinimapOptions extends BasePluginOptions {
    /**
     * <zh/> 宽度和高度
     *
     * <en/> Width and height
     * @defaultValue [240, 160]
     */
    size?: [number, number];
    /**
     * <zh/> 内边距
     *
     * <en/> Padding
     * @defaultValue 10
     */
    padding?: Padding;
    /**
     * <zh/> 缩略图相对于画布的位置
     *
     * <en/> The position of the minimap relative to the canvas
     * @defaultValue 'right-bottom'
     */
    position?: Placement;
    /**
     * <zh/> 过滤器，用于过滤不必显示的元素
     *
     * <en/> Filter, used to filter elements that do not need to be displayed
     * @param id - <zh/> 元素的 id | <en/> The id of the element
     * @param elementType - <zh/> 元素的类型 | <en/> The type of the element
     * @returns <zh/> 是否显示 | <en/> Whether to display
     */
    filter?: (id: string, elementType: ElementType) => boolean;
    /**
     * <zh/> 元素缩略图形的生成方法
     *
     * <en/> The method of generating the thumbnail of the element
     * @defaultValue 'key'
     * @remarks
     * <zh/>
     * - 'key' 使用元素的主图形作为缩略图形
     * - 'icon' 使用元素中心的 icon 作为缩略图形
     * - 更多图形名称可查阅 https://g6.antv.antgroup.com/manual/element/node/base-node#style
     * - 也可以传入一个函数，接收元素的 [id, 类型, 元素节点]，返回一个自定义样式的图形
     *
     * <en/>
     * - 'key' uses the key shape of the element as the thumbnail shape
     * - 'icon' uses the icon shape of the element as the thumbnail shape
     * - more shape name see https://g6.antv.antgroup.com/manual/element/node/base-node#style
     * - You can also pass in a function that receives the [id, type of the element, element] and returns a custom shape
     */
    shape?: string | 'key' | 'icon' | ((id: string, elementType: ElementType, element: DisplayObject) => DisplayObject);
    /**
     * <zh/> 缩略图画布类名，传入外置容器时不生效
     *
     * <en/> The class name of the minimap canvas, which does not take effect when an external container is passed in
     */
    className?: string;
    /**
     * <zh/> 缩略图挂载的容器，无则挂载到 Graph 所在容器
     *
     * <en/> The container where the minimap is mounted, if not, it will be mounted to the container where the Graph is located
     */
    container?: HTMLElement | string;
    /**
     * <zh/> 缩略图的容器样式，传入外置容器时不生效
     *
     * <en/> The style of the minimap container, which does not take effect when an external container is passed in
     */
    containerStyle?: Partial<CSSStyleDeclaration>;
    /**
     * <zh/> 遮罩的样式
     *
     * <en/> The style of the mask
     */
    maskStyle?: Partial<CSSStyleDeclaration>;
    /**
     * <zh/> 渲染器，默认使用 Canvas 渲染器
     *
     * <en/> Renderer, default to use Canvas renderer
     */
    renderer?: IRenderer;
    /**
     * <zh/> 延迟更新时间(毫秒)，用于性能优化
     *
     * <en/> Delay update time(ms), used for performance optimization
     * @defaultValue 128
     */
    delay?: number;
}
/**
 * <zh/> 缩略图插件
 *
 * <en/> Minimap plugin
 */
export declare class Minimap extends BasePlugin<MinimapOptions> {
    static defaultOptions: Partial<MinimapOptions>;
    private canvas;
    constructor(context: RuntimeContext, options: MinimapOptions);
    update(options: Partial<MinimapOptions>): void;
    private setOnRender;
    private bindEvents;
    private unbindEvents;
    private onDraw;
    private onRender;
    /**
     * <zh/> 创建或更新缩略图
     *
     * <en/> Create or update the minimap
     */
    private renderMinimap;
    private getElements;
    private setShapes;
    private container;
    private initCanvas;
    private landmarkMap;
    private createLandmark;
    private setCamera;
    private mask;
    private get maskBBox();
    /**
     * <zh/> 计算遮罩包围盒
     *
     * <en/> Calculate the bounding box of the mask
     * @returns <zh/> 遮罩包围盒 | <en/> Mask bounding box
     */
    private calculateMaskBBox;
    /**
     * <zh/> 创建或更新遮罩
     *
     * <en/> Create or update the mask
     */
    private renderMask;
    private isMaskDragging;
    private onMaskDragStart;
    private onMaskDrag;
    private onMaskDragEnd;
    private onTransform;
    private updateMask;
    destroy(): void;
}
