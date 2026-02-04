"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubicVertical = void 0;
const style_1 = require("../../utils/style");
const cubic_1 = require("./cubic");
/**
 * <zh/> 垂直方向的三次贝塞尔曲线
 *
 * <en/> Cubic Bezier curve in vertical direction
 * @remarks
 * <zh/> 特别注意，计算控制点时主要考虑 y 轴上的距离，忽略 x 轴的变化
 *
 * <en/> Please note that when calculating the control points, the distance on the y-axis is mainly considered, and the change on the x-axis is ignored
 */
class CubicVertical extends cubic_1.Cubic {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: CubicVertical.defaultStyleProps }, options));
    }
    getControlPoints(sourcePoint, targetPoint, curvePosition, curveOffset) {
        const yDist = targetPoint[1] - sourcePoint[1];
        return [
            [sourcePoint[0], sourcePoint[1] + yDist * curvePosition[0] + curveOffset[0]],
            [targetPoint[0], targetPoint[1] - yDist * curvePosition[1] + curveOffset[1]],
        ];
    }
}
exports.CubicVertical = CubicVertical;
CubicVertical.defaultStyleProps = {
    curvePosition: [0.5, 0.5],
    curveOffset: [0, 0],
};
//# sourceMappingURL=cubic-vertical.js.map