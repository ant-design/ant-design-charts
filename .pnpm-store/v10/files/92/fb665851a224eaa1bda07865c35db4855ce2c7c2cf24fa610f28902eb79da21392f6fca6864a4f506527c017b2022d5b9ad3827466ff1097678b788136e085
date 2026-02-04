import type { IRenderer } from './AbstractRenderer';
import type { CSSGlobalKeywords, CSSGradientValue, CSSRGB, CSSUnitValue } from './css';
import type { ParsedFilterStyleProperty, ParsedTransform, Pattern } from './css/parser';
import type { DisplayObject } from './display-objects';
import type { IWindow } from './dom/interfaces';
export declare enum Shape {
    GROUP = "g",
    FRAGMENT = "fragment",
    CIRCLE = "circle",
    ELLIPSE = "ellipse",
    IMAGE = "image",
    RECT = "rect",
    LINE = "line",
    POLYLINE = "polyline",
    POLYGON = "polygon",
    TEXT = "text",
    PATH = "path",
    HTML = "html",
    MESH = "mesh"
}
type ColorType = string | null;
export interface EventPosition {
    clientX: number;
    clientY: number;
    viewportX: number;
    viewportY: number;
    x: number;
    y: number;
}
export type TransformType = 'matrix' | 'matrix3d' | 'rotate' | 'rotateX' | 'rotateY' | 'rotateZ' | 'rotate3d' | 'scale' | 'scaleX' | 'scaleY' | 'scaleZ' | 'scale3d' | 'skew' | 'skewX' | 'skewY' | 'translate' | 'translateX' | 'translateY' | 'translateZ' | 'translate3d';
export type TransformScale = ['scale', number, number?];
export type TransformScaleX = ['scaleX', number];
export type TransformScaleY = ['scaleY', number];
export type TransformScaleZ = ['scaleZ', number];
export type TransformScale3d = ['scale3d', number, number, number];
export type TransformTranslate = ['translate', number, number?];
export type TransformTranslateX = ['translateX', number];
export type TransformTranslateY = ['translateY', number];
export type TransformTranslateZ = ['translateZ', number];
export type TransformTranslate3d = ['translate3d', number, number, number];
export type TransformRotate = ['rotate', number];
export type TransformRotateX = ['rotateX', number];
export type TransformRotateY = ['rotateY', number];
export type TransformRotateZ = ['rotateZ', number];
export type TransformRotate3d = ['rotate3d', number, number, number, number?];
export type TransformSkew = ['skew', number, number?];
export type TransformSkewX = ['skewX', number];
export type TransformSkewY = ['skewY', number];
export type TransformMatrix = [
    'matrix',
    number,
    number,
    number,
    number,
    number,
    number
];
export type TransformMatrix3d = [
    'matrix3d',
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
export type TransformArray = (TransformScale | TransformScaleX | TransformScaleY | TransformScaleZ | TransformScale3d | TransformTranslate | TransformTranslateX | TransformTranslateY | TransformTranslateZ | TransformTranslate3d | TransformRotate | TransformRotateX | TransformRotateY | TransformRotateZ | TransformRotate3d | TransformSkew | TransformSkewX | TransformSkewY | TransformMatrix | TransformMatrix3d)[];
export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
export type TextOverflow = 'clip' | 'ellipsis' | string;
export type TextDecorationLine = string | 'none';
export type TextDecorationStyle = 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy';
export interface BaseStyleProps {
    class?: string;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform
     */
    transform?: string | TransformArray;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
     */
    transformOrigin?: string;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
     */
    visibility?: 'visible' | 'hidden' | CSSGlobalKeywords;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events
     */
    pointerEvents?: 'none' | 'auto' | 'stroke' | 'fill' | 'painted' | 'visible' | 'visiblestroke' | 'visiblefill' | 'visiblepainted' | 'all' | 'non-transparent-pixel' | CSSGlobalKeywords;
    /**
     * z-index in CSS
     */
    zIndex?: number;
    /**
     * the cursor style when the target is active
     */
    cursor?: Cursor;
    /**
     * clip path
     * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path
     */
    clipPath?: DisplayObject | null;
    /**
     * offset path
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Motion_Path
     */
    offsetPath?: DisplayObject | null;
    offsetDistance?: number;
    stroke?: ColorType | Pattern;
    /** 描边透明度 */
    strokeOpacity?: number | string;
    /** 填充颜色 */
    fill?: ColorType | Pattern;
    /** 填充透明度 */
    fillOpacity?: number | string;
    /**
     * The fill-rule attribute is a presentation attribute defining the algorithm to use to determine the inside part of a shape.
     * @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule
     */
    fillRule?: 'nonzero' | 'evenodd';
    /** 整体透明度 */
    opacity?: number | string;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
     */
    strokeWidth?: string | number;
    /**
     * alias if strokeWidth
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth
     */
    lineWidth?: string | number;
    /**
     * increased line width when hitting test
     */
    increasedLineWidthForHitTesting?: string | number;
    /**
     * 交互区域
     */
    hitArea?: DisplayObject | null;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
     */
    strokeLinecap?: CanvasLineCap;
    /**
     * alias of strokeLinecap
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap
     */
    lineCap?: CanvasLineCap;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
     */
    strokeLinejoin?: CanvasLineJoin;
    /**
     * alias of strokeLinejoin
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
     */
    lineJoin?: CanvasLineJoin;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
     */
    strokeDasharray?: string | (string | number)[];
    /**
     * alias of strokeDasharray
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getLineDash
     */
    lineDash?: number | string | (string | number)[];
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset
     */
    strokeDashoffset?: number;
    /**
     * alias of strokeDashoffset
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
     */
    lineDashOffset?: number;
    shadowType?: 'inner' | 'outer' | 'both';
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur
     */
    shadowBlur?: number;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor
     */
    shadowColor?: ColorType;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX
     */
    shadowOffsetX?: number;
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY
     */
    shadowOffsetY?: number;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter
     */
    filter?: string;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-transform
     */
    textTransform?: TextTransform | '';
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit
     */
    miterLimit?: number | string;
    display?: string;
    /**
     * @see https://g-next.antv.vision/zh/docs/plugins/dragndrop#drag
     */
    draggable?: boolean;
    /**
     * @see https://g-next.antv.vision/zh/docs/plugins/dragndrop#drop
     */
    droppable?: boolean;
}
export interface ParsedBaseStyleProps extends Omit<BaseStyleProps, 'fill' | 'stroke' | 'lineWidth' | 'increasedLineWidthForHitTesting' | 'lineDash' | 'points' | 'shadowColor' | 'transform' | 'transformOrigin' | 'miterLimit' | 'filter' | 'opacity' | 'fillOpacity' | 'strokeOpacity'> {
    opacity?: number;
    fillOpacity?: number;
    strokeOpacity?: number;
    fill?: CSSRGB | CSSGradientValue[] | Pattern;
    stroke?: CSSRGB | CSSGradientValue[] | Pattern;
    lineDash?: [number, number];
    transform: ParsedTransform[];
    transformOrigin?: [CSSUnitValue, CSSUnitValue, CSSUnitValue];
    lineWidth?: number;
    increasedLineWidthForHitTesting?: number;
    /**
     * offset relative to initial definition
     */
    offsetX?: number;
    offsetY?: number;
    shadowColor?: CSSRGB;
    miterLimit?: number;
    filter?: ParsedFilterStyleProperty[];
}
export type Cursor = 'auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'grab' | 'grabbing' | 'all-scroll' | 'col-resize' | 'row-resize' | 'n-resize' | 'e-resize' | 's-resize' | 'w-resize' | 'ne-resize' | 'nw-resize' | 'se-resize' | 'sw-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'zoom-in' | 'zoom-out';
export declare enum ClipSpaceNearZ {
    ZERO = 0,
    NEGATIVE_ONE = 1
}
export interface RendererConfig {
    /**
     * enable dirty check for displayobject
     */
    enableDirtyCheck: boolean;
    /**
     * enable culling
     */
    enableCulling: boolean;
    /**
     * enable dirty rectangle rendering
     */
    enableDirtyRectangleRendering: boolean;
    /**
     * enable debugging dirty rectangle, Canvas will trigger CanvasEvent.DIRTY_RECTANGLE
     */
    enableDirtyRectangleRenderingDebug: boolean;
    /**
     * enable auto rendering
     */
    enableAutoRendering: boolean;
    /**
     * Canvas / SVG / Canvaskit should listen to camera changed events, while WebGL / WebGPU will apply this effect in shader.
     */
    enableSizeAttenuation: boolean;
    /**
     * Enable rendering optimization
     *
     * After rendering optimization is enabled, the rendering of each element in each frame will not have
     * an independent canvas context state, but the state consistency is maintained by caching,
     * because the save() and restore() of the canvas context state are expensive.
     *
     * ! Errors may occur due to manual maintenance of the canvas context state consistency
     *
     * @default false
     */
    enableRenderingOptimization: boolean;
}
/**
 * eg. NodeCanvas, OffscreenCanvas, HTMLCanvasElement
 */
export interface CanvasLike extends EventTarget {
    width: number;
    height: number;
    getContext: ((contextId: '2d', contextAttributes?: CanvasRenderingContext2DSettings) => CanvasRenderingContext2D | null) & ((contextId: 'webgl', contextAttributes?: WebGLContextAttributes) => WebGLRenderingContext | null) & ((contextId: 'webgl2', contextAttributes?: WebGLContextAttributes) => WebGL2RenderingContext | null);
    addEventListener: (<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => void) & ((type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void);
    removeEventListener: (<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions) => void) & ((type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) => void);
}
export interface CanvasConfig extends Partial<Omit<IWindow, 'customElements'>> {
    /**
     * When the renderer is initialized, a `<canvas>/<svg>` element is automatically
     * created inside the container DOM element.
     */
    container?: string | HTMLElement;
    /**
     * When this parameter is passed, the `container` parameter will be ignored.
     *
     * - support OffscreenCanvas
     */
    canvas?: CanvasLike;
    /**
     * Renderer
     *
     * @see https://g.antv.antgroup.com/api/renderer/intro
     */
    renderer: IRenderer;
    /**
     * 画布宽度
     */
    width?: number;
    /**
     * 画布高度
     */
    height?: number;
    /**
     * 画布背景色
     */
    background?: ColorType;
    /**
     * cursor style
     */
    cursor?: Cursor;
    /**
     * One container can have multiple canvases inside.
     */
    supportsMutipleCanvasesInOneContainer?: boolean;
    /**
     * Optimize rendering performance for high-resolution large images
     */
    enableLargeImageOptimization?: boolean | {
        /**
         * Downsampling rate threshold, [0.01, 0.5], represents the ratio of reducing the image.
         * For example, 0.3 means reducing the original image to 0.3 times of the original.
         *
         * default 0.5
         */
        downSamplingRateThreshold?: number;
        /**
         * The maximum size of the downsampled image, with equal width and height.
         *
         * default 2048
         */
        maxDownSampledImageSize?: number;
    };
    /**
     * Enabling some features for the future.
     *
     * ! These are some experimental functional features that are currently unstable.
     *
     * future flag, concept referenced from:
     * - https://remix.run/docs/en/main/guides/api-development-strategy#unstable-apis-and-future-flags,
     * - https://remix.run/blog/future-flags
     */
    future?: {
        /**
         * Only implement bubbling propagation for necessary events.
         * At the same time, some events will skip the process of building event objects and
         * directly trigger events themselves.
         */
        experimentalCancelEventPropagation?: boolean;
        /**
         * When enabled, elements are no longer updated in real time, but are updated uniformly before being submitted to the canvas. This is to improve performance and avoid redundant loop logic.
         */
        experimentalAttributeUpdateOptimization?: boolean;
        /**
         * use RIC to avoid frequent calls syncRTree
         */
        experimentalRICSyncRTree?: boolean;
    };
    /**
     * Listen to native click event instead of mocking with pointerup & down events.
     */
    useNativeClickEvent?: boolean;
    /**
     * Pointermove / up / cancel event will get triggered even outside Canvas.
     */
    alwaysTriggerPointerEventOnCanvas?: boolean;
    /**
     * Enable event service
     */
    disableHitTesting?: boolean;
    /**
     * Skip triggering hooks.beforeRender/render/afterRender
     */
    disableRenderHooks?: boolean;
    /**
     * 销毁画布时是否执行清理操作
     */
    cleanUpOnDestroy?: boolean;
    /**
     * used in JSDOM
     */
    document?: Document;
    /**
     * used in text measurement & texture generation
     */
    offscreenCanvas?: CanvasLike;
    /**
     * replace `new window.Image()`
     */
    createImage?: () => HTMLImageElement;
    /**
     * double click speed (ms)
     *
     * - default is 200ms
     */
    dblClickSpeed?: number;
}
/**
 * The format to use when defining custom easing functions
 */
export type TypeEasingFunction = (t: number, params?: (string | number)[], duration?: number) => number;
export type InteractivePointerEvent = PointerEvent | TouchEvent | MouseEvent | WheelEvent;
export type Tuple4<T> = [T, T, T, T];
export type Tuple4Number = Tuple4<number>;
export type Tuple3<T> = [T, T, T];
export type Tuple3Number = Tuple3<number>;
export type ComninedValue<T> = T | [T] | [T, T] | [T, T, T] | Tuple4<T>;
export type CombinedNumber = ComninedValue<number>;
export type Length = number;
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Percentage = `${Digit}%` | `${Digit}${Digit}%`;
export type LengthOrPercentage = Length | Percentage;
export type LengthOrPercentageOrAuto = Length | Percentage | 'auto';
export {};
//# sourceMappingURL=types.d.ts.map