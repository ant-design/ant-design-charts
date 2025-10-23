import type { SVGCommand } from 'svg-pathdata/lib/types';
import BaseLayer from '../Base/BaseLayer';
import type { BaseLayerParams, BezierPoint, ShapePathType } from '../../types';
import { SketchFormat } from '../../types';
export interface ShapePathInitParams extends BaseLayerParams {
    isClose: boolean;
    points: BezierPoint[];
}
/**
 * ShapePath 是一组点构成的形状对象
 */
declare class ShapePath extends BaseLayer {
    constructor(params: ShapePathInitParams);
    /**
     * 内部使用的 贝塞尔曲线 points
     */
    points: BezierPoint[];
    /**
     * 形状是否闭合
     */
    isClosed: boolean;
    /**
     * 单个 ShapePath 的布尔类型
     */
    booleanOperation: SketchFormat.BooleanOperation;
    /**
     * 转为 Sketch JSON 文件
     */
    toSketchJSON(): SketchFormat.ShapePath;
    /**
     * 将内部点转为 Sketch Point
     */
    bezierPointToSketchPoint: (point: BezierPoint, index: number) => SketchFormat.CurvePoint;
    /**
     * 判断点是否在同一条线上
     * @param q 当前点
     * @param p1 上一个点
     * @param p2 下一个点
     */
    private judgeIsOnSameLine;
    /**
     * 判断曲线模型
     * @param hasCurveFrom 是否有前置曲线
     * @param hasCurveTo 是否有后置曲线
     * @param curveFromPoint 前置曲线点
     * @param curveToPoint 后置曲线点
     * @param thisPoint 自己这个点
     */
    private judgeCurveMode;
    /**
     * 获取上下文的点
     * @param index
     */
    private getContextPoints;
    /**
     * 将 Path 转为 ShapePathType 类型的对象
     * @param path 路径
     */
    static svgPathToShapePath(path: string): ShapePathType;
    /**
     * 将 svg path 点归一化处理
     * @param width {number} 最大宽度
     * @param height {number} 最大高度
     */
    static normalizationXY: (width: number, height: number) => (command: SVGCommand) => SVGCommand;
}
export default ShapePath;
