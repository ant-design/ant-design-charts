import { positionOf } from '../../utils/position';
import { mergeOptions } from '../../utils/style';
import { distance, rad, subtract } from '../../utils/vector';
import { Cubic } from './cubic';
/**
 * <zh/> 径向贝塞尔曲线
 *
 * <en/> Radial cubic edge
 */
export class CubicRadial extends Cubic {
    constructor(options) {
        super(mergeOptions({ style: CubicRadial.defaultStyleProps }, options));
    }
    get ref() {
        return this.context.model.getRootsData()[0];
    }
    getEndpoints(attributes) {
        if (this.sourceNode.id === this.ref.id) {
            return super.getEndpoints(attributes);
        }
        const refPoint = positionOf(this.ref);
        const sourcePoint = this.sourceNode.getIntersectPoint(refPoint, true);
        const targetPoint = this.targetNode.getIntersectPoint(refPoint);
        return [sourcePoint, targetPoint];
    }
    toRadialCoordinate(p) {
        const refPoint = positionOf(this.ref);
        const r = distance(p, refPoint);
        const radian = rad(subtract(p, refPoint));
        return [r, radian];
    }
    getControlPoints(sourcePoint, targetPoint, curvePosition, curveOffset) {
        const [r1, rad1] = this.toRadialCoordinate(sourcePoint);
        const [r2] = this.toRadialCoordinate(targetPoint);
        const rDist = r2 - r1;
        return [
            [
                sourcePoint[0] + (rDist * curvePosition[0] + curveOffset[0]) * Math.cos(rad1),
                sourcePoint[1] + (rDist * curvePosition[0] + curveOffset[0]) * Math.sin(rad1),
            ],
            [
                targetPoint[0] - (rDist * curvePosition[1] - curveOffset[0]) * Math.cos(rad1),
                targetPoint[1] - (rDist * curvePosition[1] - curveOffset[0]) * Math.sin(rad1),
            ],
        ];
    }
}
CubicRadial.defaultStyleProps = {
    curvePosition: 0.5,
    curveOffset: 20,
};
//# sourceMappingURL=cubic-radial.js.map