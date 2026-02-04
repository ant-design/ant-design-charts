import type { CircleStyleProps } from '../../elements';
import type { RuntimeContext } from '../../runtime/types';
import type { NodeData } from '../../spec';
import type { NodeStyle } from '../../spec/element/node';
import type { IPointerEvent, Point } from '../../types';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
/**
 * <zh/> 鱼眼放大镜插件配置项
 *
 * <en/> Fisheye Plugin Options
 */
export interface FisheyeOptions extends BasePluginOptions {
    /**
     * <zh/> 移动鱼眼放大镜的方式
     * - `'pointermove'`：始终跟随鼠标移动
     * - `'click'`：鼠标点击时移动
     * - `'drag'`：拖拽移动
     *
     * <en/> The way to move the fisheye lens
     * - `'pointermove'`: always follow the mouse movement
     * - `'click'`: move when the mouse is clicked
     * - `'drag'`: move by dragging
     * @defaultValue `'pointermove'`
     */
    trigger?: 'pointermove' | 'drag' | 'click';
    /**
     * <zh/> 鱼眼放大镜半径
     *
     * <en/> The radius of the fisheye lens
     * @remarks
     * <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*unAvQqAb_NMAAAAAAAAAAAAADmJ7AQ/original" width="200" />
     * @defaultValue 120
     */
    r?: number;
    /**
     * <zh/> 鱼眼放大镜可调整的最大半径，配合 `scaleRBy` 使用
     *
     * <en/> The maximum radius that the fisheye lens can be adjusted, used with `scaleRBy`
     * @defaultValue 画布宽高的最小值的一半
     */
    maxR?: number;
    /**
     * <zh/> 鱼眼放大镜可调整的最小半径，配合 `scaleRBy` 使用
     *
     * <en/> The minimum radius that the fisheye lens can be adjusted, used with `scaleRBy`
     * @defaultValue 0
     */
    minR?: number;
    /**
     * <zh/> 调整鱼眼放大镜范围半径的方式
     * - `'wheel'`：滚轮调整
     * - `'drag'`：拖拽调整
     *
     * <en/> The way to adjust the range radius of the fisheye lens
     * - `'wheel'`: adjust by wheel
     * - `'drag'`: adjust by drag
     * @remarks
     * <zh/> 如果 `trigger`、`scaleRBy` 和 `scaleDBy` 同时设置为 `'drag'`，优先级顺序为 `trigger` > `scaleRBy` > `scaleDBy`，只会为优先级最高的配置项绑定拖拽事件。同理，如果 `scaleRBy` 和 `scaleDBy` 同时设置为 `'wheel'`，只会为 `scaleRBy` 绑定滚轮事件
     *
     * <en/> If `trigger`, `scaleRBy`, and `scaleDBy` are set to `'drag'` at the same time, the priority order is `trigger` > `scaleRBy` > `scaleDBy`, and only the configuration item with the highest priority will be bound to the drag event. Similarly, if `scaleRBy` and `scaleDBy` are set to `'wheel'` at the same time, only `scaleRBy` will be bound to the wheel event
     */
    scaleRBy?: 'wheel' | 'drag';
    /**
     * <zh/> 畸变因子
     *
     * <en/> Distortion factor
     * @remarks
     * <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*4ITFR7GOl8UAAAAAAAAAAAAADmJ7AQ/original" width="200" />
     * @defaultValue 1.5
     */
    d?: number;
    /**
     * <zh/> 鱼眼放大镜可调整的最大畸变因子，配合 `scaleDBy` 使用
     *
     * <en/> The maximum distortion factor that the fisheye lens can be adjusted, used with `scaleDBy`
     * @defaultValue 5
     */
    maxD?: number;
    /**
     * <zh/> 鱼眼放大镜可调整的最小畸变因子，配合 `scaleDBy` 使用
     *
     * <en/> The minimum distortion factor that the fisheye lens can be adjusted, used with `scaleDBy`
     * @defaultValue 0
     */
    minD?: number;
    /**
     * <zh/> 调整鱼眼放大镜畸变因子的方式
     * - `'wheel'`：滚轮调整
     * - `'drag'`：拖拽调整
     *
     * <en/> The way to adjust the distortion factor of the fisheye lens
     * - `'wheel'`: adjust by wheel
     * - `'drag'`: adjust by drag
     */
    scaleDBy?: 'wheel' | 'drag';
    /**
     * <zh/> 是否在鱼眼放大镜中显示畸变因子数值
     *
     * <en/> Whether to display the value of the distortion factor in the fisheye lens
     * @defaultValue true
     */
    showDPercent?: boolean;
    /**
     * <zh/> 鱼眼放大镜样式
     *
     * <en/> Fisheye Lens Style
     */
    style?: Partial<CircleStyleProps>;
    /**
     * <zh/> 在鱼眼放大镜中的节点样式
     *
     * <en/> Node style in the fisheye lens
     */
    nodeStyle?: NodeStyle | ((datum: NodeData) => NodeStyle);
    /**
     * <zh/> 是否阻止默认事件
     *
     * <en/> Whether to prevent the default event
     * @defaultValue true
     */
    preventDefault?: boolean;
}
/**
 * <zh/> 鱼眼放大镜
 *
 * <en/> Fisheye Distortion
 * @remarks
 * <zh/> Fisheye 鱼眼放大镜是为 focus+context 的探索场景设计的，它能够保证在放大关注区域的同时，保证上下文以及上下文与关注中心的关系不丢失。
 *
 * <en/> Fisheye is designed for focus+context exploration, it keeps the context and the relationships between context and the focus while magnifying the focus area.
 */
export declare class Fisheye extends BasePlugin<FisheyeOptions> {
    static defaultOptions: Partial<FisheyeOptions>;
    constructor(context: RuntimeContext, options: FisheyeOptions);
    private lens;
    private r;
    private d;
    private get canvas();
    private get isLensOn();
    protected onCreateFisheye: (event: IPointerEvent) => void;
    protected onMagnify: (origin: Point) => void;
    private renderLens;
    private getDPercent;
    private prevMagnifiedStyleMap;
    private prevOriginStyleMap;
    private renderFocusElements;
    private getNodeStyle;
    private updateStyle;
    private isWheelValid;
    private scaleR;
    private scaleD;
    private scaleRByWheel;
    private scaleDByWheel;
    private isDragValid;
    private isLensDragging;
    private onDragStart;
    private onDrag;
    private onDragEnd;
    private scaleRByDrag;
    private scaleDByDrag;
    get graphDom(): import("@antv/g").CanvasLike | null;
    private bindEvents;
    private unbindEvents;
    update(options: Partial<FisheyeOptions>): void;
    destroy(): void;
}
