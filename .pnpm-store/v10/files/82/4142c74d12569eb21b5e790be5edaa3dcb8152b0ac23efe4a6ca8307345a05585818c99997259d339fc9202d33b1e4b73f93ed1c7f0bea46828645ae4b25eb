import type { CGPoint, ColorStop, GradientProps } from '../../types';
import { SketchFormat } from '../../types';
import BaseStyle from '../Base/BaseStyle';
/**
 * 渐变对象
 * */
declare class Gradient extends BaseStyle {
    constructor(props?: GradientProps);
    class: 'gradient';
    /**
     * 起点
     */
    from: CGPoint;
    /**
     * 色彩节点
     */
    stops: ColorStop[];
    /**
     * 终点
     */
    to: CGPoint;
    /**
     * 渐变类型
     * */
    type: SketchFormat.GradientType;
    /**
     * 如果是 Radial 渐变,由这个参数控制椭圆长轴
     */
    ellipseLength: number;
    /**
     * 转为 Sketch JSON 对象
     * @returns {SketchFormat.Gradient}
     */
    toSketchJSON: () => SketchFormat.Gradient;
    /**
     * 将 stop 数组转换为 Sketch 使用的对象
     * */
    getSketchStop: (colorStop: ColorStop, index: number) => SketchFormat.GradientStop;
}
export default Gradient;
