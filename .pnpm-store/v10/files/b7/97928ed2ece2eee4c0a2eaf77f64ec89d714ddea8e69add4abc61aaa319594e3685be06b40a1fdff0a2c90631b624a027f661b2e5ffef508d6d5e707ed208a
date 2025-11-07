import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import type { ColorParam } from '../Style/Color';
import Color from '../Style/Color';
import BaseStyle from './BaseStyle';
export interface ShadowParams {
    color?: ColorParam;
    blurRadius?: number;
    offsetX?: number;
    offsetY?: number;
    spread?: number;
    contextSettings?: SketchFormat.GraphicsContextSettings;
    name?: string;
}
declare abstract class BaseShadow extends BaseStyle {
    protected constructor(type: SketchFormat.ClassValue.Shadow | SketchFormat.ClassValue.InnerShadow, params: ShadowParams);
    /**
     * 类型
     */
    class: SketchFormat.ClassValue.Shadow | SketchFormat.ClassValue.InnerShadow;
    /**
     * 颜色
     */
    color: Color;
    /**
     * 模糊半径
     */
    blurRadius: number;
    /**
     * X 轴偏移
     */
    offsetX: number;
    /**
     * Y 轴偏移
     */
    offsetY: number;
    /**
     * 扩散效果
     */
    spread: number;
    /**
     * 渲染上下文
     */
    contextSettings: SketchFormat.GraphicsContextSettings;
    /**
     * 是否启用
     */
    isEnabled: boolean;
    /**
     * 分割阴影字符串
     * @param boxShadow
     */
    static splitShadowString: (boxShadow: string) => string[];
    /**
     * 将阴影字符串转为对象
     * @param shadowString
     */
    static shadowStringToObject: (shadowString: string) => {
        color: string;
        offsetX: number;
        offsetY: number;
        blur: number;
        spread: number;
        inset: boolean;
    } | undefined;
}
export default BaseShadow;
