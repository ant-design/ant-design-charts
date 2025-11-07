import type { CGPoint, SketchFormat } from '.';
import type { ColorParam } from '../models/Style/Color';
import type Color from '../models/Style/Color';
/**
 * 传入颜色间隔点的参数
 */
export interface ColorStopParam {
    color: ColorParam;
    offset: number;
}
export declare type StopParam = ColorParam | ColorStopParam;
export interface GradientProps {
    /**
     * 渐变类型
     */
    type?: SketchFormat.GradientType;
    /**
     * 终点
     */
    to?: CGPoint;
    /**
     * 起点
     */
    from?: CGPoint;
    /**
     * 色彩间隔点
     */
    stops?: StopParam[];
    /**
     * 渐变名称
     */
    name?: string;
    /**
     * 如果是圆形渐变 则需要传入 radius 值
     */
    radius?: number;
}
export interface ColorStop {
    /**
     * 偏移位置 取值 0-1
     */
    offset?: number;
    /**
     * 颜色对象
     */
    color: Color;
}
