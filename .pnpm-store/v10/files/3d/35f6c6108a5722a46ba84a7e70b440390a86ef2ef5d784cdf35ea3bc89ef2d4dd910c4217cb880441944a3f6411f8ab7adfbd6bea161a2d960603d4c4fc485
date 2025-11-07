"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radar = void 0;
const polar_1 = require("./polar");
const parallel_1 = require("./parallel");
/**
 *  Radar = Parallel + Polar.
 */
const Radar = (options) => {
    const { startAngle = -Math.PI / 2, endAngle = (Math.PI * 3) / 2, innerRadius = 0, outerRadius = 1, } = options;
    return [
        ...(0, parallel_1.Parallel)(),
        ...(0, polar_1.Polar)({ startAngle, endAngle, innerRadius, outerRadius }),
    ];
};
exports.Radar = Radar;
exports.Radar.props = {};
//# sourceMappingURL=radar.js.map