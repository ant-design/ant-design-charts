import type { BaseLayerParams } from '../../types';
import { SketchFormat } from '../../types';
import BaseLayer from '../Base/BaseLayer';
interface EllipseParams extends BaseLayerParams {
    /**
     * 中心 X
     */
    cx?: number;
    /**
     * 中心 Y
     */
    cy?: number;
    /**
     * X 轴半径
     */
    rx?: number;
    /**
     * Y 轴半径
     */
    ry?: number;
}
/**
 * 椭圆图形
 */
declare class Ellipse extends BaseLayer {
    constructor(params?: EllipseParams);
    /**
     * 获取 x 中点值
     */
    get cx(): number;
    set cx(cx: number);
    /**
     * 获取 y 中点值
     */
    get cy(): number;
    set cy(cy: number);
    get rx(): number;
    set rx(rx: number);
    get ry(): number;
    set ry(ry: number);
    toSketchJSON(): SketchFormat.Oval;
}
export default Ellipse;
