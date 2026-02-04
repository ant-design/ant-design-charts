import type { Cursor, CanvasConfig as GCanvasConfig, IChildNode } from '@antv/g';
import { Canvas as GCanvas } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import type { CanvasOptions } from '../spec/canvas';
import type { CanvasLayer, Point } from '../types';
export interface CanvasConfig extends Pick<GCanvasConfig, 'container' | 'devicePixelRatio' | 'width' | 'height' | 'cursor' | 'background'> {
    /**
     * <zh/> 渲染器
     *
     * <en/> renderer
     */
    renderer?: CanvasOptions['renderer'];
    /**
     * <zh/> 是否启用多图层
     *
     * <en/> Whether to enable multiple layers
     * @defaultValue true
     * @remarks
     * <zh/> 非动态参数，仅在初始化时生效
     *
     * <en/> Non-dynamic parameters, only take effect during initialization
     */
    enableMultiLayer?: boolean;
}
export interface DataURLOptions {
    /**
     * <zh/> 导出模式
     *  - viewport: 导出视口内容
     *  - overall: 导出整个画布
     *
     * <en/> export mode
     *  - viewport: export the content of the viewport
     *  - overall: export the entire canvas
     */
    mode?: 'viewport' | 'overall';
    /**
     * <zh/> 图片类型
     *
     * <en/> image type
     * @defaultValue 'image/png'
     */
    type: 'image/png' | 'image/jpeg' | 'image/webp' | 'image/bmp';
    /**
     * <zh/> 图片质量, 仅对 image/jpeg 和 image/webp 有效，取值范围 0 ~ 1
     *
     * <en/> image quality, only valid for image/jpeg and image/webp, range 0 ~ 1
     */
    encoderOptions: number;
}
export declare class Canvas {
    private extends;
    private config;
    getConfig(): CanvasConfig;
    getLayer(layer?: CanvasLayer): GCanvas;
    /**
     * <zh/> 获取所有图层
     *
     * <en/> Get all layers
     * @returns <zh/> 图层 <en/> Layer
     */
    getLayers(): Record<CanvasLayer, GCanvas>;
    /**
     * <zh/> 获取渲染器
     *
     * <en/> Get renderer
     * @param layer - <zh/> 图层 <en/> Layer
     * @returns <zh/> 渲染器 <en/> Renderer
     */
    getRenderer(layer: CanvasLayer): CanvasRenderer;
    /**
     * <zh/> 获取相机
     *
     * <en/> Get camera
     * @param layer - <zh/> 图层 <en/> Layer
     * @returns <zh/> 相机 <en/> Camera
     */
    getCamera(layer?: CanvasLayer): import("@antv/g").ICamera;
    getRoot(layer?: CanvasLayer): import("@antv/g").Group;
    getContextService(layer?: CanvasLayer): import("@antv/g").ContextService<unknown>;
    setCursor(cursor: Cursor): void;
    get document(): import("@antv/g").Document;
    get context(): import("@antv/g").CanvasContext;
    constructor(config: CanvasConfig);
    get ready(): Promise<any[]>;
    resize(width: number, height: number): void;
    /**
     * <zh/> 获取画布边界
     *
     * <en/> Get canvas boundary
     * @param group
     * <zh/> 元素分组
     * - undefined: 获取整个画布边界
     * - 'elements': 仅获取元素边界
     * - 'plugins': 仅获取插件边界
     *
     * <en/> Element group
     * - undefined: Get the entire canvas boundary
     * - 'elements': Get only the element boundary
     * - 'plugins': Get only the plugin boundary
     * @returns <zh/> 边界 <en/> Boundary
     */
    getBounds(group?: 'elements' | 'plugins'): import("@antv/g").AABB;
    getContainer(): HTMLElement | null;
    getSize(): [number, number];
    appendChild<T extends IChildNode>(child: T, index?: number): T;
    setRenderer(renderer: CanvasOptions['renderer']): void;
    getCanvasByViewport(point: Point): Point;
    getViewportByCanvas(point: Point): Point;
    getViewportByClient(point: Point): Point;
    getClientByViewport(point: Point): Point;
    getClientByCanvas(point: Point): Point;
    getCanvasByClient(point: Point): Point;
    toDataURL(options?: Partial<DataURLOptions>): Promise<string>;
    destroy(): void;
}
