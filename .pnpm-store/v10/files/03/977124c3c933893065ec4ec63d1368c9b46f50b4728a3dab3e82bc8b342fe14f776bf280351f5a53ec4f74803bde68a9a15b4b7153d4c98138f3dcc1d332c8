"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theta = exports.getThetaOptions = void 0;
const polar_1 = require("./polar");
const transpose_1 = require("./transpose");
const getThetaOptions = (options = {}) => {
    const defaultOptions = {
        startAngle: -Math.PI / 2,
        endAngle: (Math.PI * 3) / 2,
        innerRadius: 0,
        outerRadius: 1,
    };
    return Object.assign(Object.assign({}, defaultOptions), options);
};
exports.getThetaOptions = getThetaOptions;
/**
 * Theta = Transpose + Polar.
 */
const Theta = (options) => {
    const { startAngle, endAngle, innerRadius, outerRadius } = (0, exports.getThetaOptions)(options);
    return [
        ...(0, transpose_1.Transpose)(),
        ...(0, polar_1.Polar)({ startAngle, endAngle, innerRadius, outerRadius }),
    ];
};
exports.Theta = Theta;
exports.Theta.props = {};
//# sourceMappingURL=theta.js.map