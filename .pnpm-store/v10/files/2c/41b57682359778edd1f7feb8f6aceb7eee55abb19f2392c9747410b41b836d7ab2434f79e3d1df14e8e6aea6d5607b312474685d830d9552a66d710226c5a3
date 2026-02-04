/**
 * borrow from gradient-parser, but we delete some browser compatible prefix such as `-webkit-`
 * @see https://github.com/rafaelcaricio/gradient-parser
 */
import { CSSKeywordValue, CSSUnitValue } from '../css/cssom';
export interface LinearGradientNode {
    type: 'linear-gradient';
    orientation?: DirectionalNode | AngularNode | undefined;
    colorStops: ColorStop[];
}
export interface RepeatingLinearGradientNode {
    type: 'repeating-linear-gradient';
    orientation?: DirectionalNode | AngularNode | undefined;
    colorStops: ColorStop[];
}
export interface RadialGradientNode {
    type: 'radial-gradient';
    orientation?: (ShapeNode | DefaultRadialNode | ExtentKeywordNode)[] | undefined;
    colorStops: ColorStop[];
}
export interface RepeatingRadialGradientNode {
    type: 'repeating-radial-gradient';
    orientation?: (ShapeNode | DefaultRadialNode | ExtentKeywordNode)[] | undefined;
    colorStops: ColorStop[];
}
export interface DirectionalNode {
    type: 'directional';
    value: 'left' | 'top' | 'bottom' | 'right' | 'left top' | 'top left' | 'left bottom' | 'bottom left' | 'right top' | 'top right' | 'right bottom' | 'bottom right';
}
export interface AngularNode {
    type: 'angular';
    value: string;
}
export interface LiteralNode {
    type: 'literal';
    value: string;
    length?: PxNode | EmNode | PercentNode | undefined;
}
export interface HexNode {
    type: 'hex';
    value: string;
    length?: PxNode | EmNode | PercentNode | undefined;
}
export interface RgbNode {
    type: 'rgb';
    value: [string, string, string];
    length?: PxNode | EmNode | PercentNode | undefined;
}
export interface RgbaNode {
    type: 'rgba';
    value: [string, string, string, string?];
    length?: PxNode | EmNode | PercentNode | undefined;
}
export interface ShapeNode {
    type: 'shape';
    style?: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode | undefined;
    value: 'ellipse' | 'circle';
    at?: PositionNode | undefined;
}
export interface DefaultRadialNode {
    type: 'default-radial';
    at: PositionNode;
}
export interface PositionKeywordNode {
    type: 'position-keyword';
    value: 'center' | 'left' | 'top' | 'bottom' | 'right';
}
export interface PositionNode {
    type: 'position';
    value: {
        x: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode;
        y: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode;
    };
}
export interface ExtentKeywordNode {
    type: 'extent-keyword';
    value: 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner' | 'contain' | 'cover';
    at?: PositionNode | undefined;
}
export interface PxNode {
    type: 'px';
    value: string;
}
export interface EmNode {
    type: 'em';
    value: string;
}
export interface PercentNode {
    type: '%';
    value: string;
}
export type ColorStop = LiteralNode | HexNode | RgbNode | RgbaNode;
export type GradientNode = LinearGradientNode | RepeatingLinearGradientNode | RadialGradientNode | RepeatingRadialGradientNode;
export declare function colorStopToString(colorStop: ColorStop): string;
export declare const parseGradient: (code: string) => GradientNode[];
export declare function computeLinearGradient(min: [number, number], width: number, height: number, angle: CSSUnitValue): {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
export declare function computeRadialGradient(min: [number, number], width: number, height: number, cx: CSSUnitValue, cy: CSSUnitValue, size?: CSSUnitValue | CSSKeywordValue): {
    x: number;
    y: number;
    r: number;
};
//# sourceMappingURL=gradient.d.ts.map