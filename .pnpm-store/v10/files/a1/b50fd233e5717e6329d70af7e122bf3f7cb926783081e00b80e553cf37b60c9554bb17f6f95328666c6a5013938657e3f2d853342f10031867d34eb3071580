import type { SVGPathData } from 'svg-pathdata';
import type Bitmap from '../models/Layer/Bitmap';
import type Ellipse from '../models/Layer/Ellipse';
import type Group from '../models/Layer/Group';
import type Rectangle from '../models/Layer/Rectangle';
import type ShapeGroup from '../models/Layer/ShapeGroup';
import type ShapePath from '../models/Layer/ShapePath';
import type Svg from '../models/Layer/Svg';
import type SymbolMaster from '../models/Layer/SymbolMaster';
import type Text from '../models/Layer/Text';
/**
 * 定界框 Frame 初始化参数
 */
export declare type FrameInitParams = Partial<FrameType>;
/**
 * 节点的背景颜色类型
 */
export declare type BackgroundImageType = {
    type: 'Image' | 'LinearGradient' | 'radialGradient';
    value: any;
};
/**
 * 定界框类型
 */
export interface FrameType {
    x: number;
    y: number;
    width: number;
    height: number;
}
/**
 * 基础图层初始化参数
 */
export interface BaseLayerParams {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    name?: string;
}
/**
 * 任意可以成为图层的对象
 */
export declare type AnyLayer = Group | Text | Bitmap | ShapeGroup | Rectangle | ShapePath | Svg | Ellipse;
/**
 * 任意可以成为编组的对象
 */
export declare type AnyGroup = Group | ShapeGroup | Svg | SymbolMaster;
/**
 * 任意可成为 Shape 的对象 其可以作为 ShapeGroup 的子成员
 * */
export declare type AnyShape = Rectangle | ShapePath;
/**
 * Shape Group 包含的信息
 */
export interface ShapeGroupType {
    /**
     * 包含的 ShapePath
     */
    shapes: ShapePathType[];
    /**
     * ShapeGroup的 Frame
     */
    frame: FrameType;
}
/**
 * Shape Path 组成类型
 */
export interface ShapePathType {
    points: BezierPoint[];
    frame: {
        width: number;
        height: number;
        x?: number;
        y?: number;
    };
    isClose: boolean;
}
export declare type StartPoint = {
    type: typeof SVGPathData.MOVE_TO;
    x: number;
    y: number;
};
export declare type CurvePoint = {
    type: typeof SVGPathData.CURVE_TO;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x: number;
    y: number;
};
export declare type LinePoint = {
    type: typeof SVGPathData.LINE_TO;
    x: number;
    y: number;
};
/**
 * 贝塞尔点
 */
export declare type BezierPoint = StartPoint | CurvePoint | LinePoint;
export interface SvgDefsStyle {
    class: 'classStyle';
    rules: CssStyleRule[];
}
export declare type SvgLayerType = Group | ShapeGroup | Ellipse | Rectangle | Text | undefined | SvgLayerType[];
export interface CssStyleRule {
    className: string;
    styles: Record<string, string>;
}
