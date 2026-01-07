import { Theme } from "./theme";
import { ArrayClassNamesArg, Emotion } from '@emotion/css/create-instance';
import { CSSInterpolation, Interpolation, SerializedStyles } from '@emotion/serialize';
export type CSSStyle<T = Theme> = Array<TemplateStringsArray | Interpolation<T>>;
export type { CSSObject, SerializedStyles } from '@emotion/serialize';
export type ClassNameGenerator = Emotion['css'];
export interface ClassNameGeneratorOption {
    label?: string;
    hashPriority?: HashPriority;
}
/**
 * @title CSS 工具函数
 * @param template - 模板字符串数组
 * @param args - CSS 插值数组
 * @returns CSS 序列化后的样式
 */
export interface CssUtil {
    (template: TemplateStringsArray, ...args: Array<CSSInterpolation>): SerializedStyles;
    (...args: Array<CSSInterpolation>): SerializedStyles;
}
export type ClassNamesArg = undefined | null | string | boolean | {
    [className: string]: boolean | null | undefined;
} | ArrayClassNamesArg | SerializedStyles;
/**
 * 可以传入多个 css 对象 或者 className 字符串，最终会合并成一个 className 字符串
 * 支持入参：{SerializedStyles} | string
 */
export type ClassNamesUtil = (...classNames: ClassNamesArg[]) => string;
export type HashPriority = 'low' | 'high';
