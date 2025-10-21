"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axisXConfig = exports.AxisX = void 0;
const axis_1 = require("./axis");
/**
 * LinearAxis component bind to x scale.
 */
const AxisX = (options) => {
    return (...args) => {
        // empirical value for crossPadding
        const axisX = (0, axis_1.LinearAxis)(Object.assign({}, { crossPadding: 50 }, options))(...args);
        (0, axis_1.rotateAxis)(axisX, options);
        return axisX;
    };
};
exports.AxisX = AxisX;
exports.AxisX.props = Object.assign(Object.assign({}, axis_1.LinearAxis.props), { defaultPosition: 'bottom' });
function axisXConfig() { }
exports.axisXConfig = axisXConfig;
//# sourceMappingURL=axisX.js.map