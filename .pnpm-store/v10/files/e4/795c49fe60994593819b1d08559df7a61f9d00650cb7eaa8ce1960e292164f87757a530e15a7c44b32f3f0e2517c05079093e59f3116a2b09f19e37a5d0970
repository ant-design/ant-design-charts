"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubicRadial = void 0;
const position_1 = require("../../utils/position");
const style_1 = require("../../utils/style");
const vector_1 = require("../../utils/vector");
const cubic_1 = require("./cubic");
/**
 * <zh/> 径向贝塞尔曲线
 *
 * <en/> Radial cubic edge
 */
class CubicRadial extends cubic_1.Cubic {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: CubicRadial.defaultStyleProps }, options));
    }
    get ref() {
        return this.context.model.getRootsData()[0];
    }
    getEndpoints(attributes) {
        if (this.sourceNode.id === this.ref.id) {
            return super.getEndpoints(attributes);
        }
        const refPoint = (0, position_1.positionOf)(this.ref);
        const sourcePoint = this.sourceNode.getIntersectPoint(refPoint, true);
        const targetPoint = this.targetNode.getIntersectPoint(refPoint);
        return [sourcePoint, targetPoint];
    }
    toRadialCoordinate(p) {
        const refPoint = (0, position_1.positionOf)(this.ref);
        const r = (0, vector_1.distance)(p, refPoint);
        const radian = (0, vector_1.rad)((0, vector_1.subtract)(p, refPoint));
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
exports.CubicRadial = CubicRadial;
CubicRadial.defaultStyleProps = {
    curvePosition: 0.5,
    curveOffset: 20,
};
//# sourceMappingURL=cubic-radial.js.map