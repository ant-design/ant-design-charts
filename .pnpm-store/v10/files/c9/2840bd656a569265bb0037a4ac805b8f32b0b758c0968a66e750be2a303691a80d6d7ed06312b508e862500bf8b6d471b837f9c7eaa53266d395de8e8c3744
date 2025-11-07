"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadratic = void 0;
const edge_1 = require("../../utils/edge");
const style_1 = require("../../utils/style");
const base_edge_1 = require("./base-edge");
/**
 * <zh/> 二次贝塞尔曲线
 *
 * <en/> Quadratic Bezier curve
 */
class Quadratic extends base_edge_1.BaseEdge {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Quadratic.defaultStyleProps }, options));
    }
    getKeyPath(attributes) {
        const { curvePosition, curveOffset } = attributes;
        const [sourcePoint, targetPoint] = this.getEndpoints(attributes);
        const controlPoint = attributes.controlPoint || (0, edge_1.getCurveControlPoint)(sourcePoint, targetPoint, curvePosition, curveOffset);
        return (0, edge_1.getQuadraticPath)(sourcePoint, targetPoint, controlPoint);
    }
}
exports.Quadratic = Quadratic;
Quadratic.defaultStyleProps = {
    curvePosition: 0.5,
    curveOffset: 30,
};
//# sourceMappingURL=quadratic.js.map