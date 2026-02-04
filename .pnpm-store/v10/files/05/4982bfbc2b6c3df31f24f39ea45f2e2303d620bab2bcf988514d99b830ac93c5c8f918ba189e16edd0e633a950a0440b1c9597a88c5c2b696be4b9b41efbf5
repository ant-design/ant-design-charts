import type SketchFormat from '@sketch-hq/sketch-file-format-ts';
import ColorCls from 'color';
import BaseStyle from '../Base/BaseStyle';
export declare type ColorType = {
    r: number;
    g?: number;
    b?: number;
    a?: number;
    swatchID?: string;
};
export declare type ColorParam = ColorType | string | number | number[];
/**
 * @class
 * 创建颜色类型
 * @constructor 入参 {ColorParam}
 */
declare class Color extends BaseStyle {
    red: number;
    green: number;
    blue: number;
    alpha: number;
    method: ColorCls;
    constructor(color?: ColorParam);
    /**
     * HEX值
     */
    get hex(): string;
    /**
     * 色值
     */
    get hue(): number;
    /**
     * 默认的饱和度
     */
    get s(): number;
    /**
     * 默认的饱和度
     */
    get saturation(): number;
    /**
     * 明度值下的饱和度
     */
    get saturationv(): number;
    /**
     * 亮度值下的饱和度
     */
    get saturationl(): number;
    /**
     * 亮度值
     */
    get l(): number;
    /**
     * 亮度值
     */
    get lightness(): number;
    /**
     * 明度值
     */
    get b(): number;
    /**
     * 明度值
     */
    get value(): number;
    /**
     * 明度值
     */
    get brightness(): number;
    /**
     * RGBA 值
     */
    get rgba(): string;
    /**
     * 转为 Sketch JSON对象
     * @returns {SketchFormat.Color} color json
     */
    toSketchJSON: () => SketchFormat.Color;
    toJSON(): ColorType;
}
export default Color;
