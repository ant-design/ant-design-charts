"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radial = exports.getRadialOptions = void 0;
const polar_1 = require("./polar");
const getRadialOptions = (options = {}) => {
    const defaultOptions = {
        startAngle: -Math.PI / 2,
        endAngle: (Math.PI * 3) / 2,
        innerRadius: 0,
        outerRadius: 1,
    };
    return Object.assign(Object.assign({}, defaultOptions), options);
};
exports.getRadialOptions = getRadialOptions;
/**
 * Radial
 */
const Radial = (options) => {
    const { startAngle, endAngle, innerRadius, outerRadius } = (0, exports.getRadialOptions)(options);
    return [
        ['transpose'],
        ['translate', 0.5, 0.5],
        ['reflect'],
        ['translate', -0.5, -0.5],
        ...(0, polar_1.Polar)({ startAngle, endAngle, innerRadius, outerRadius }),
    ];
};
exports.Radial = Radial;
exports.Radial.props = {};
//# sourceMappingURL=radial.js.map