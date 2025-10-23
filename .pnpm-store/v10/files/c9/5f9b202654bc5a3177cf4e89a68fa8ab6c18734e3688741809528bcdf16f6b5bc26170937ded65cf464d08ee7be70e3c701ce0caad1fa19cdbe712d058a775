import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import Color from './Color';
declare type FontWeightEnum = {
    normal: FontWeightType;
    bold: FontWeightType;
    bolder: FontWeightType;
    '100': FontWeightType;
    '200': FontWeightType;
    '300': FontWeightType;
    '400': FontWeightType;
    '500': FontWeightType;
    '600': FontWeightType;
    '700': FontWeightType;
    '800': FontWeightType;
    '900': FontWeightType;
};
declare type FontWeightType = 'Regular' | 'Bold' | 'Semibold' | 'UltraLight' | 'Thin' | 'Light' | 'Medium' | 'Heavy' | 'Black';
/**
 * 字体权重
 * */
export declare const FONT_WEIGHTS: FontWeightEnum;
export interface TextStyleParams {
    color?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number | string;
    lineHeight?: number;
    opacity?: number;
    letterSpacing?: number;
    textTransform?: string;
    textDecoration?: string;
    textAlign?: TextHorizontalAlign;
    verticalAlign?: TextVerticalAlign;
    /**
     * Some websites or component libraries use font-family
     * listsstarting with OS-specific fonts.
     *
     * If the option 'skipSystemFonts' is enabled,
     * we skip those fonts to choose a font Sketch is capable of.
     * */
    skipSystemFonts?: boolean;
}
export declare enum TextHorizontalAlign {
    Left = "left",
    Right = "right",
    Center = "center",
    Justify = "justify"
}
export declare enum TextVerticalAlign {
    Top = "top",
    Middle = "middle",
    Bottom = "bottom"
}
/**
 * 文本样式
 */
declare class TextStyle {
    constructor(param?: TextStyleParams);
    color: Color;
    /**
     * 字体家族
     * */
    fontFamily: string;
    /**
     * 字体大小
     * */
    fontSize: number;
    /**
     * 行高
     * */
    lineHeight?: number;
    /**
     * 字宽
     * */
    letterSpacing?: number;
    /**
     * 字重
     */
    fontWeight: string;
    /**
     * 字体变换
     *
     * 例如全部大写等
     * */
    textTransform?: string;
    /**
     * 文本横向对齐
     * */
    textAlign: TextHorizontalAlign;
    /**
     * 文本纵向对齐
     */
    verticalAlign: TextVerticalAlign;
    /**
     * 文本装饰
     *
     * 例如 下划线、删除线等
     * */
    textDecoration?: string;
    /**
     * 字体类型
     * */
    FONT_STYLES: {
        normal: boolean;
        italic: boolean;
        oblique: boolean;
    };
    /**
     * 取得 sketch 下的横向对齐参数
     */
    getSketchHorizontalAlign: () => SketchFormat.TextHorizontalAlignment;
    /**
     * 取得 sketch 下的纵向对齐参数
     */
    getSketchVerticalAlign: () => SketchFormat.TextVerticalAlignment;
    /**
     * 取得 sketch 下的文本变化属性
     */
    getTextTransform: () => SketchFormat.TextTransform;
    /**
     * 获取下划线参数
     */
    getUnderlineStyle: () => SketchFormat.UnderlineStyle;
    /**
     * 获取下划线参数
     */
    getStrikeThroughStyle: () => 1 | 0;
    /**
     * 修正字体家族信息
     * */
    fixFontFamilyInfo: (_family: string, weight?: string) => string;
    /**
     * 转为 Sketch JSON对象
     */
    toSketchJSON: () => SketchFormat.TextStyle;
    /**
     * 从样式对象中解析出文本的横向对齐方式
     */
    static parseTextHorizontalAlign: (styles: CSSStyleDeclaration) => TextHorizontalAlign;
    /**
     * 从样式对象中解析出文本的纵向对齐方式
     * @param styles
     */
    static parseTextVerticalAlign: (styles: CSSStyleDeclaration) => TextVerticalAlign;
}
export default TextStyle;
