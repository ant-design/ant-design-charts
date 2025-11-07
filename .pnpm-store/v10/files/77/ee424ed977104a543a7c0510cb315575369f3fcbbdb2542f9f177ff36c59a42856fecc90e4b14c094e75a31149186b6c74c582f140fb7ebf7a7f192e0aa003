import { getCubicPath, getCurveControlPoint, parseCurveOffset, parseCurvePosition } from '../../utils/edge';
import { mergeOptions } from '../../utils/style';
import { BaseEdge } from './base-edge';
/**
 * <zh/> 三次贝塞尔曲线
 *
 * <en/> Cubic Bezier curve
 */
export class Cubic extends BaseEdge {
    constructor(options) {
        super(mergeOptions({ style: Cubic.defaultStyleProps }, options));
    }
    /**
     * @inheritdoc
     */
    getKeyPath(attributes) {
        const [sourcePoint, targetPoint] = this.getEndpoints(attributes);
        const { controlPoints, curvePosition, curveOffset } = attributes;
        const actualControlPoints = this.getControlPoints(sourcePoint, targetPoint, parseCurvePosition(curvePosition), parseCurveOffset(curveOffset), controlPoints);
        return getCubicPath(sourcePoint, targetPoint, actualControlPoints);
    }
    getControlPoints(sourcePoint, targetPoint, curvePosition, curveOffset, controlPoints) {
        return (controlPoints === null || controlPoints === void 0 ? void 0 : controlPoints.length) === 2
            ? controlPoints
            : [
                getCurveControlPoint(sourcePoint, targetPoint, curvePosition[0], curveOffset[0]),
                getCurveControlPoint(sourcePoint, targetPoint, curvePosition[1], curveOffset[1]),
            ];
    }
}
Cubic.defaultStyleProps = {
    curvePosition: 0.5,
    curveOffset: 20,
};
//# sourceMappingURL=cubic.js.map