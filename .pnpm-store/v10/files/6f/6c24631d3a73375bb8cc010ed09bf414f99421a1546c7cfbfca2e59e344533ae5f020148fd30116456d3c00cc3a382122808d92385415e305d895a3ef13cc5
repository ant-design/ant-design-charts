import * as svgson from 'svgson';
import Frame from '../models/Base/Frame';
import Ellipse from '../models/Layer/Ellipse';
import Group from '../models/Layer/Group';
import Rectangle from '../models/Layer/Rectangle';
import ShapeGroup from '../models/Layer/ShapeGroup';
import ShapePath from '../models/Layer/ShapePath';
import Text from '../models/Layer/Text';
import Gradient from '../models/Style/Gradient';
import Style from '../models/Style/Style';
import TextStyle from '../models/Style/TextStyle';
import type { AnyLayer, FrameType, ShapeGroupType, SvgDefsStyle, SvgLayerType } from '../types';
import { SketchFormat } from '../types';
/**
 * 计算 Frame 的缩放比例
 */
export declare const calcFrameScale: (originFrame: FrameType, targetFrame: FrameType) => number;
/**
 * 一致化缠绕规则参数
 * @param ruleStr
 */
export declare const normalizeWindingRule: (ruleStr?: string) => SketchFormat.WindingRule;
/**
 * 获取 svgPath 的内部定界框
 * @param svgPath svg 的path路径
 */
export declare const getSvgPathGroupFrame: (svgPath: string) => {
    width: number;
    height: number;
    x: number;
    y: number;
};
/**
 * 将 Path 转为贝赛尔曲线
 * @param svgPath 路径
 */
export declare const pathToShapeGroup: (svgPath: string) => ShapeGroupType;
/**
 * SVG 对象
 */
export declare class Svgson {
    constructor(svgString: string, { width, height }: Partial<Pick<FrameType, 'width' | 'height'>>);
    /**
     * 缩放比例
     */
    aspectRatio: number;
    /**
     * svg 的 ViewBox
     */
    viewBox: Frame;
    /**
     * Svg 包含的图层对象
     * 每一个对象都是 SvgLayer 类型
     */
    layers: AnyLayer[];
    /**
     * 全局描述
     * @private
     */
    defs: (Gradient | SvgDefsStyle)[];
    static init(): Svgson;
    /**
     * 将图层
     */
    scaleLayersToFrame: (layer: AnyLayer) => void;
    /**
     * 解析 Svgson 变成 layer
     * @param node
     */
    parseSvgson: (node: svgson.INode) => SvgLayerType;
    /**
     * 将节点解析为 pathShape
     * @param node
     */
    parseSvgsonPathToShape(node: svgson.INode): ShapeGroup | undefined;
    /**
     * 将 svg 的 Defs 解析成相应的对象
     * @param defsNode
     */
    static parseSvgDefs(defsNode: svgson.INode): Gradient | {
        class: string;
        rules: {
            className: string;
            styles: Record<string, string>;
        }[];
    } | undefined;
    /**
     * 解析 Node 的 Attribute 变成 style
     * @param attributes node 的属性
     */
    parseNodeAttrToStyle: (attributes: svgson.INode['attributes']) => Style;
    /**
     * 解析 Node 的 Attribute 变成 textStyle
     * @param attributes node 的属性
     */
    parseNodeAttrToTextStyle: (attributes: svgson.INode['attributes']) => TextStyle;
    /**
     * 将 g 节点解析为 Group
     * @param node
     * @param isMask 是否使用剪切蒙版
     */
    parseNodeToGroup: (node: svgson.INode, isMask?: boolean) => Group;
    /**
     * 将 ellipse 的节点解析为椭圆
     * @param node
     */
    parseNodeToEllipse(node: svgson.INode): Ellipse | undefined;
    /**
     * 将 ellipse 的节点解析为圆
     * @param node
     */
    parseNodeToCircle(node: svgson.INode): Ellipse | undefined;
    /**
     * 将 ellipse 的节点解析为矩形
     * @param node
     */
    parseNodeToRectangle(node: svgson.INode): Rectangle | undefined;
    /**
     * 将 text 的节点解析为文本
     * @param node
     */
    parseNodeToText(node: svgson.INode): Text | undefined;
    /**
     * ShapeGroup 转子图层方法
     * @param shapeGroup
     */
    static shapeGroupDataToLayers: (shapeGroup: ShapeGroupType) => ShapePath[];
    /**
     * 从 Defs 中获取样式表
     * @param className
     */
    private getCssRuleByClassName;
    /**
     * 根据 fill 字符填充 Fill 对象
     * @param fill 填充文本
     */
    private getFillByString;
    /**
     * 应用变换字符串
     * @param frame
     * @param transform
     */
    applyTransformString: (frame: Frame, transform?: string) => void;
    /**
     * 继承父级的参数
     * @param node 需要继承的节点
     * @param parentAttr
     */
    extendsParentAttr: (node: svgson.INode, parentAttr?: svgson.INode['attributes']) => svgson.INode;
}
