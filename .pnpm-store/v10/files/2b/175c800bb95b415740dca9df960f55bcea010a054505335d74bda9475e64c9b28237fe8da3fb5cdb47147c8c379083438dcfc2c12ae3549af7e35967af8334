import type { Matrix } from 'transformation-matrix';
import type { FrameInitParams, SketchFormat } from '../../types';
/**
 * @class
 * Frame 类型
 */
declare class Frame {
    constructor(params?: FrameInitParams);
    x: number;
    y: number;
    width: number;
    height: number;
    get centerX(): number;
    set centerX(centerX: number);
    get centerY(): number;
    set centerY(centerY: number);
    /**
     * 旋转角度
     */
    rotation: number;
    get right(): number;
    set right(right: number);
    get left(): number;
    set left(left: number);
    get bottom(): number;
    set bottom(bottom: number);
    get top(): number;
    set top(top: number);
    /**
     * 按比例缩放宽高
     * @param ratio
     */
    scale(ratio: number): void;
    /**
     * 按比例缩放宽高
     * @param ratio
     */
    scaleByCenter({ sx, sy }: {
        sx: number;
        sy: number;
    }): void;
    /**
     * 偏移
     * @param x X坐标
     * @param y Y坐标
     */
    offset(x: number, y: number): void;
    /**
     * 应用矩阵
     * @param matrix
     */
    applyMatrix(matrix: Matrix): void;
    /**
     * 转换为 JSON 对象
     */
    toJSON: () => {
        height: number;
        width: number;
        x: number;
        y: number;
    };
    /**
     * 转为 Sketch JSON 对象
     */
    toSketchJSON: () => SketchFormat.Rect;
}
export default Frame;
