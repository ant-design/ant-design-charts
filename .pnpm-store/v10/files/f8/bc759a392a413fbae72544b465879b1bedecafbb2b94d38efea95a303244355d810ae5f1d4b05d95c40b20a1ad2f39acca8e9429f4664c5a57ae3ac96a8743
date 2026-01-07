import type { CGPoint } from '../../types';
import { SketchFormat } from '../../types';
import BaseStyle from '../Base/BaseStyle';
import type { ColorParam } from './Color';
import Color from './Color';
import Gradient from './Gradient';
import Image from './Image';
export interface BorderProps {
    type: SketchFormat.FillType;
    color?: ColorParam;
    image?: string;
    gradient?: {
        to: CGPoint;
        from: CGPoint;
        gradientType: SketchFormat.GradientType;
        stops: ColorParam[];
    };
    position?: SketchFormat.BorderPosition;
    name?: string;
    thickness?: number;
}
/**
 * 描边对象
 * */
declare class Border extends BaseStyle {
    constructor(props: BorderProps);
    get opacity(): number;
    /**
     * 颜色填充类型
     * */
    type: SketchFormat.FillType;
    /**
     * 颜色
     */
    color: Color;
    /**
     * 渐变类型
     * */
    gradient: Gradient;
    /**
     * 使用图片进行填充
     * */
    image?: Image;
    /**
     * 描边位置, 默认为内部描边
     * */
    position: SketchFormat.BorderPosition;
    /**
     * 描边宽度 默认为 0
     * */
    thickness: number;
    /**
     * 转为 Sketch JSON 对象
     * @returns {SketchFormat.Border}
     */
    toSketchJSON: () => SketchFormat.Border;
}
export default Border;
