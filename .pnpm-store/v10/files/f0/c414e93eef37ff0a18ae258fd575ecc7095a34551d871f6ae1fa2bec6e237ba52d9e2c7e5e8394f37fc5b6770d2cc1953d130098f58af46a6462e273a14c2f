import type { AnyLayer, BaseLayerParams, LayerClassType } from '../../types';
import { ResizingConstraint, SketchFormat } from '../../types';
import Style from '../Style/Style';
import Frame from './Frame';
declare abstract class BaseLayer {
    protected constructor(type: LayerClassType, params?: BaseLayerParams);
    frame: Frame;
    class: LayerClassType;
    /**
     * 节点名称
     * 来自 HTML 的节点类型
     */
    nodeType?: string;
    /**
     * 来自节点的 ID
     */
    nodeId?: string;
    /**
     * 来自样式的名称
     */
    className?: string;
    style: Style;
    layers: AnyLayer[];
    userInfo: any;
    id: string;
    name: string;
    resizingConstraint: ResizingConstraint;
    resizingConstraints: ResizingConstraint[];
    /**
     * 上锁状态
     */
    locked: boolean;
    isVisible: boolean;
    isFixedToViewport: boolean;
    isFlippedHorizontal: boolean;
    isFlippedVertical: boolean;
    /**
     * 是否存在剪贴蒙版
     */
    hasClippingMask: boolean;
    LayerListExpanded: SketchFormat.LayerListExpanded;
    /**
     * 锁定图层名称
     * */
    nameIsFixed: boolean;
    /**
     * 是否忽略遮罩链
     */
    shouldBreakMaskChain: boolean;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get centerX(): number;
    set centerX(centerX: number);
    get centerY(): number;
    set centerY(centerY: number);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get right(): number;
    set right(right: number);
    get top(): number;
    set top(top: number);
    get bottom(): number;
    set bottom(bottom: number);
    get left(): number;
    set left(left: number);
    get rotation(): number;
    set rotation(deg: number);
    /**
     * 将 resize 设为固定宽高
     */
    setFixedWidthAndHeight(): void;
    /**
     *  resize 添加固定宽高
     */
    addFixedWidthAndHeight(): void;
    /**
     * 设置调整尺寸的相关参数
     * @param constraints
     */
    setResizingConstraint(...constraints: ResizingConstraint[]): void;
    /**
     * 添加调整尺寸的相关参数
     * @param constraints
     */
    addResizingConstraints(...constraints: ResizingConstraint[]): void;
    setUserInfo(key: string | number, value: any, scope?: string): void;
    getUserInfo(key: string | number, scope?: string): any;
    addLayer(layer: AnyLayer): void;
    addLayers(layers: AnyLayer[]): void;
    /**
     * 将对象转为 JSON
     */
    toJSON(): any;
    /**
     * 设置位置
     * @param x X轴
     * @param y Y轴
     */
    setPosition({ x, y }: {
        x: number;
        y: number;
    }): void;
    /**
     * 将基础的节点信息映射到对象中
     * @param node
     */
    mapBasicInfo(node: Element): void;
    /**
     * 将自己的的样式转成 Sketch 的共享样式
     * @param id
     */
    toSketchSharedStyle: (id?: string) => SketchFormat.SharedStyle;
    /**
     * 获取所有子图层的尺寸
     */
    get childLayersSize(): {
        width: number;
        height: number;
    };
    /**
     * 获取节点的子级的定界框
     * @param nodes
     */
    static getChildNodesFrame: (nodes: Element[]) => {
        left: any;
        top: any;
        right: any;
        bottom: any;
        width: number;
        height: number;
    };
}
export default BaseLayer;
