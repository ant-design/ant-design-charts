import type { BaseLayerParams } from '../../types';
import { SketchFormat } from '../../types';
import BaseLayer from '../Base/BaseLayer';
declare type CornerRadius = {
    bottomLeft: number;
    bottomRight: number;
    topLeft: number;
    topRight: number;
};
interface RectangleInitParams extends Omit<BaseLayerParams, 'x' | 'y'> {
    x?: number;
    y?: number;
    cornerRadius?: CornerRadius | number | number[];
}
/**
 * 矩形类型
 * */
declare class Rectangle extends BaseLayer {
    constructor({ x, y, width, height, cornerRadius, }: RectangleInitParams);
    /**
     * 圆角值
     */
    cornerRadius: CornerRadius | number | number[];
    toKonvaRadius: () => number | number[];
    /**
     * 转换为 Sketch JSON
     */
    toSketchJSON(): SketchFormat.Rectangle;
    /**
     * 转换为 Konva JSON
     */
    toKonvaJSON(): {
        attrs: {
            id: string;
            cornerRadius: number | number[];
            height: number;
            width: number;
            x: number;
            y: number;
        };
        className: string;
    };
    /**
     * 获取 SketchPoints
     */
    getSketchPoints: () => SketchFormat.CurvePoint[];
}
export default Rectangle;
