import { mergeOptions } from '../../utils/style';
import { Cubic } from './cubic';
/**
 * <zh/> 水平方向的三次贝塞尔曲线
 *
 * <en/> Cubic Bezier curve in horizontal direction
 * @remarks
 * <zh/> 特别注意，计算控制点时主要考虑 x 轴上的距离，忽略 y 轴的变化
 *
 * <en/> Please note that when calculating the control points, the distance on the x-axis is mainly considered, and the change on the y-axis is ignored
 */
export class CubicHorizontal extends Cubic {
    constructor(options) {
        super(mergeOptions({ style: CubicHorizontal.defaultStyleProps }, options));
    }
    getControlPoints(sourcePoint, targetPoint, curvePosition, curveOffset) {
        const xDist = targetPoint[0] - sourcePoint[0];
        return [
            [sourcePoint[0] + xDist * curvePosition[0] + curveOffset[0], sourcePoint[1]],
            [targetPoint[0] - xDist * curvePosition[1] + curveOffset[1], targetPoint[1]],
        ];
    }
}
CubicHorizontal.defaultStyleProps = {
    curvePosition: [0.5, 0.5],
    curveOffset: [0, 0],
};
//# sourceMappingURL=cubic-horizontal.js.map