"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cubic = void 0;
const edge_1 = require("../../utils/edge");
const style_1 = require("../../utils/style");
const base_edge_1 = require("./base-edge");
/**
 * <zh/> 三次贝塞尔曲线
 *
 * <en/> Cubic Bezier curve
 */
class Cubic extends base_edge_1.BaseEdge {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Cubic.defaultStyleProps }, options));
    }
    /**
     * @inheritdoc
     */
    getKeyPath(attributes) {
        const [sourcePoint, targetPoint] = this.getEndpoints(attributes);
        const { controlPoints, curvePosition, curveOffset } = attributes;
        const actualControlPoints = this.getControlPoints(sourcePoint, targetPoint, (0, edge_1.parseCurvePosition)(curvePosition), (0, edge_1.parseCurveOffset)(curveOffset), controlPoints);
        return (0, edge_1.getCubicPath)(sourcePoint, targetPoint, actualControlPoints);
    }
    getControlPoints(sourcePoint, targetPoint, curvePosition, curveOffset, controlPoints) {
        return (controlPoints === null || controlPoints === void 0 ? void 0 : controlPoints.length) === 2
            ? controlPoints
            : [
                (0, edge_1.getCurveControlPoint)(sourcePoint, targetPoint, curvePosition[0], curveOffset[0]),
                (0, edge_1.getCurveControlPoint)(sourcePoint, targetPoint, curvePosition[1], curveOffset[1]),
            ];
    }
}
exports.Cubic = Cubic;
Cubic.defaultStyleProps = {
    curvePosition: 0.5,
    curveOffset: 20,
};
//# sourceMappingURL=cubic.js.map