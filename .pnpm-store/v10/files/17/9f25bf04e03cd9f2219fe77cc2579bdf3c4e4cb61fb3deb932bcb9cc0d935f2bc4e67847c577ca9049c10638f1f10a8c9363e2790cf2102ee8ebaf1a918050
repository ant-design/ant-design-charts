import BaseStyle from '../Base/BaseStyle';
import Border from './Border';
import type { ColorParam } from './Color';
import Fill from './Fill';
import InnerShadow from './InnerShadow';
import Shadow from './Shadow';
import SketchBorderOptions from './SketchBorderOptions';
import type { AnyLayer } from '../../types';
import { SketchFormat } from '../../types';
interface ShadowInput {
    color: ColorParam;
    blur?: number;
    offsetX?: number;
    offsetY?: number;
    spread?: number;
}
export interface StyleType {
    fill: string;
}
/**
 * 样式
 */
declare class Style extends BaseStyle {
    /**
     * 填充
     * */
    fills: Fill[];
    /**
     * 外阴影
     * */
    shadows: Shadow[];
    /**
     * 内阴影
     * */
    innerShadows: InnerShadow[];
    /**
     * 描边
     * */
    borders: Border[];
    /**
     * Sketch 专属的描边属性
     * */
    sketchBorderOptions: SketchBorderOptions;
    /**
     * 添加颜色填充
     * */
    addColorFill(color: ColorParam): void;
    /**
     * 添加渐变填充
     * */
    addGradientFill(angle: string, stops?: ColorParam[]): void;
    /**
     * 将角度转为 sketch 中的 from 和 to
     * @param {string} angle 角度
     */
    convertAngleToFromAndTo: (angle: string) => {
        from: {
            x: number;
            y: number;
        };
        to: {
            x: number;
            y: number;
        };
    };
    /**
     * 添加图片填充
     * */
    addImageFill(image: string): Promise<void>;
    /**
     * 添加描边
     * */
    addBorder({ color, thickness, position, }: {
        thickness: number;
        color: ColorParam;
        position?: SketchFormat.BorderPosition;
    }): void;
    /**
     * 添加阴影
     * */
    addShadow(params?: ShadowInput): void;
    /**
     * 添加内阴影
     * */
    addInnerShadow(params?: ShadowInput): void;
    /**
     * 设置描边属性
     * */
    setBorderDashed({ lineCapStyle, lineJoinStyle, dash, spacing, }?: {
        lineCapStyle?: SketchFormat.LineCapStyle;
        lineJoinStyle?: SketchFormat.LineJoinStyle;
        dash?: number;
        spacing?: number;
    }): void;
    /**
     * 生成 Sketch JSON 对象
     */
    toSketchJSON(): SketchFormat.Style;
    toJSON(): {
        fills: {
            type: SketchFormat.FillType;
            color: import("./Color").ColorType;
        }[];
    };
    /**
     * 获取 style 的 hash
     */
    get hash(): string;
    /**
     * 从样式字符串获得样式的 JSON 对象
     * @param style
     */
    static parseStyleString: (style: string) => StyleType | undefined;
    /**
     * 从类字符串获得样式的 JSON 对象
     * @param classStyle
     */
    static parseClassStyle: (classStyle: string) => {
        className: string;
        styles: Record<string, string>;
    }[];
    /**
     * 解析 Border string 圆角
     * @param borderRadius
     * @param width
     * @param height
     */
    static parseBorderRadius: (borderRadius: string, width: number, height: number) => number;
    /**
     * 将 layer 的样式转成 Sketch 的共享样式
     * @param layer
     * @param id
     */
    static layerToSketchSharedStyle: (layer: AnyLayer, id?: string) => SketchFormat.SharedStyle;
}
export default Style;
