"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polar = exports.getPolarOptions = void 0;
const angle_1 = require("../utils/angle");
const getPolarOptions = (options = {}) => {
    const defaultOptions = {
        startAngle: -Math.PI / 2,
        endAngle: (Math.PI * 3) / 2,
        innerRadius: 0,
        outerRadius: 1,
    };
    const polarOption = Object.assign(Object.assign({}, defaultOptions), options);
    return Object.assign(Object.assign({}, polarOption), (0, angle_1.convertAngles)(polarOption.startAngle, polarOption.endAngle));
};
exports.getPolarOptions = getPolarOptions;
/**
 * Polar transformation for circular charts using center of canvas as origin.
 * @todo Adjust size of canvas by startAngle and endAngle to make chart as big as possible.
 */
const Polar = (options) => {
    const { startAngle, endAngle, innerRadius, outerRadius } = (0, exports.getPolarOptions)(options);
    return [
        ['translate', 0, 0.5],
        ['reflect.y'],
        ['translate', 0, -0.5],
        ['polar', startAngle, endAngle, innerRadius, outerRadius],
    ];
};
exports.Polar = Polar;
exports.Polar.props = {};
//# sourceMappingURL=polar.js.map