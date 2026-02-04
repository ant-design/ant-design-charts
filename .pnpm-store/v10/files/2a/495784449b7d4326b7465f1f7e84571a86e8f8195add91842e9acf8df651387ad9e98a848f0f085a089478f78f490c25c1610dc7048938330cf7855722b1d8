import type { CGPoint } from '../../types';
import { SketchFormat } from '../../types';
import BaseStyle from '../Base/BaseStyle';
import type { ColorParam } from './Color';
import Color from './Color';
import Gradient from './Gradient';
import Image from './Image';
export interface FillProps {
    type?: SketchFormat.FillType;
    color?: ColorParam;
    image?: string;
    gradient?: {
        to: CGPoint;
        from: CGPoint;
        gradientType: SketchFormat.GradientType;
        stops: ColorParam[];
    };
    name?: string;
}
/**
 * 渐变对象
 * */
declare class Fill extends BaseStyle {
    constructor(props: FillProps);
    /**
     * 填色类型
     * */
    type: SketchFormat.FillType;
    /**
     * 颜色
     */
    color: Color;
    /**
     * 色彩节点
     */
    stops: Color[];
    get opacity(): number;
    /**
     * 终点
     */
    to: CGPoint;
    /**
     * 渐变类型
     * */
    gradient: Gradient;
    /**
     * 使用图片进行填充
     * */
    image?: Image;
    /**
     * 填充类型
     * */
    patternFillType: SketchFormat.PatternFillType;
    patternTileScale: number;
    /**
     * 转为 Sketch JSON 对象
     * @returns {SketchFormat.Fill}
     */
    toSketchJSON: () => SketchFormat.Fill;
    /**
     * 转为 JSON
     */
    toJSON(): {
        type: SketchFormat.FillType;
        color: import("./Color").ColorType;
    };
}
export default Fill;
