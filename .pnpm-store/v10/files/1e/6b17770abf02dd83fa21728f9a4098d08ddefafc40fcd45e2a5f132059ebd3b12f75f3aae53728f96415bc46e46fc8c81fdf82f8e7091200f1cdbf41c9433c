import { getCurveControlPoint, getQuadraticPath } from '../../utils/edge';
import { mergeOptions } from '../../utils/style';
import { BaseEdge } from './base-edge';
/**
 * <zh/> 二次贝塞尔曲线
 *
 * <en/> Quadratic Bezier curve
 */
export class Quadratic extends BaseEdge {
    constructor(options) {
        super(mergeOptions({ style: Quadratic.defaultStyleProps }, options));
    }
    getKeyPath(attributes) {
        const { curvePosition, curveOffset } = attributes;
        const [sourcePoint, targetPoint] = this.getEndpoints(attributes);
        const controlPoint = attributes.controlPoint || getCurveControlPoint(sourcePoint, targetPoint, curvePosition, curveOffset);
        return getQuadraticPath(sourcePoint, targetPoint, controlPoint);
    }
}
Quadratic.defaultStyleProps = {
    curvePosition: 0.5,
    curveOffset: 30,
};
//# sourceMappingURL=quadratic.js.map