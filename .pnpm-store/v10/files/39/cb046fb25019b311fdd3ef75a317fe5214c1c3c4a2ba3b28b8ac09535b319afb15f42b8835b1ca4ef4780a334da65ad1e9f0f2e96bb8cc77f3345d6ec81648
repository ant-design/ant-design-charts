import { BaseStyleProps, DisplayObject } from '@antv/g';
import type { RuntimeContext } from '../../runtime/types';
import type { IDragEvent, Node } from '../../types';
import type { BasePluginOptions } from '../base-plugin';
import { BasePlugin } from '../base-plugin';
/**
 * <zh/> 对齐线插件配置项
 *
 * <en/> Snapline plugin options
 */
export interface SnaplineOptions extends BasePluginOptions {
    /**
     * <zh/> 对齐精度，即移动节点时与目标位置的距离小于 tolerance 时触发显示对齐线
     *
     * <en/> The alignment accuracy, that is, when the distance between the moved node and the target position is less than tolerance, the alignment line is displayed
     * @defaultValue 5
     */
    tolerance?: number;
    /**
     * <zh/> 对齐线头尾的延伸距离。取值范围：[0, Infinity]
     *
     * <en/> The extension distance of the snapline. The value range is [0, Infinity]
     * @defaultValue 20
     */
    offset?: number;
    /**
     * <zh/> 是否启用自动吸附
     *
     * <en/> Whether to enable automatic adsorption
     * @defaultValue true
     */
    autoSnap?: boolean;
    /**
     * <zh/> 指定元素上的哪个图形作为参照图形
     *
     * <en/> Specifies which shape on the element to use as the reference shape
     * @defaultValue `'key'`
     * @remarks
     * <zh/>
     * - 'key' 使用元素的主图形作为参照图形
     * - 也可以传入一个函数，接收元素对象，返回一个图形
     *
     * <en/>
     * - `'key'` uses the key shape of the element as the reference shape
     * - You can also pass in a function that receives the element and returns a shape
     */
    shape?: string | ((node: Node) => DisplayObject);
    /**
     * <zh/> 垂直对齐线样式
     *
     * <en/> Vertical snapline style
     * @defaultValue `{ stroke: '#1783FF' }`
     */
    verticalLineStyle?: BaseStyleProps;
    /**
     * <zh/> 水平对齐线样式
     *
     * <en/> Horizontal snapline style
     * @defaultValue `{ stroke: '#1783FF' }`
     */
    horizontalLineStyle?: BaseStyleProps;
    /**
     * <zh/> 过滤器，用于过滤不需要作为参考的节点
     *
     * <en/> Filter, used to filter nodes that do not need to be used as references
     * @defaultValue `() => true`
     */
    filter?: (node: Node) => boolean;
}
/**
 * <zh/> 对齐线插件
 *
 * <en/> Snapline plugin
 */
export declare class Snapline extends BasePlugin<SnaplineOptions> {
    static defaultOptions: Partial<SnaplineOptions>;
    private horizontalLine;
    private verticalLine;
    constructor(context: RuntimeContext, options: SnaplineOptions);
    private initSnapline;
    private getNodes;
    private hideSnapline;
    private getLineWidth;
    private updateSnapline;
    private isHorizontalSticking;
    private isVerticalSticking;
    private enableStick;
    private autoSnapToLine;
    /**
     * Get the delta of the drag
     * @param event - drag event object
     * @returns delta
     * @internal
     */
    protected getDelta(event: IDragEvent<Node>): import("../../types").Vector2 | import("../../types").Vector3;
    private enableSnap;
    private calcSnaplineMetadata;
    protected onDragStart: () => void;
    protected onDrag: (event: IDragEvent<Node>) => Promise<void>;
    protected onDragEnd: () => void;
    private bindEvents;
    private unbindEvents;
    private destroyElements;
    destroy(): void;
}
