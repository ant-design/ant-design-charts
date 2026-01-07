import BaseLayer from '../Base/BaseLayer';
import type Gradient from '../Style/Gradient';
import type { AnyLayer, BaseLayerParams, SvgDefsStyle } from '../../types';
import { SketchFormat } from '../../types';
interface SvgInitParams extends Partial<BaseLayerParams> {
    svgString: string;
}
/**
 * SVG 对象
 */
declare class Svg extends BaseLayer {
    constructor({ x, y, width, height, svgString }: SvgInitParams);
    /**
     * Svg 包含的图层对象
     * 每一个对象都是 SvgLayer 类型
     */
    layers: AnyLayer[];
    /**
     * 全局描述
     * @private
     */
    defs: (Gradient | SvgDefsStyle)[];
    shapes: {
        path: string;
        style?: string;
    }[];
    /**
     * 原生 Svg 字符串
     */
    rawSVGString: string;
    /**
     * 转换为 Sketch 对象
     */
    toSketchJSON(): SketchFormat.Group;
}
export default Svg;
