"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxisY = void 0;
const axis_1 = require("./axis");
/**
 * LinearAxis component bind to y scale.
 */
const AxisY = (options) => {
    return (...args) => {
        const axisY = (0, axis_1.LinearAxis)(Object.assign({}, { crossPadding: 10 }, options))(...args);
        (0, axis_1.rotateAxis)(axisY, options);
        return axisY;
    };
};
exports.AxisY = AxisY;
exports.AxisY.props = Object.assign(Object.assign({}, axis_1.LinearAxis.props), { defaultPosition: 'left' });
//# sourceMappingURL=axisY.js.map