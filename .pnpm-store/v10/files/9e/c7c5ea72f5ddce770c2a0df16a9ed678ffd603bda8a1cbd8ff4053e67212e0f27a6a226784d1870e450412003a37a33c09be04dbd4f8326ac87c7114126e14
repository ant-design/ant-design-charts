"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VH = void 0;
const d3_shape_1 = require("@antv/vendor/d3-shape");
const curve_1 = require("./curve");
const VH = (options, context) => {
    return (...params) => {
        return (0, curve_1.Curve)(Object.assign({ curve: d3_shape_1.curveStepBefore }, options), context)(...params);
    };
};
exports.VH = VH;
exports.VH.props = Object.assign(Object.assign({}, curve_1.Curve.props), { defaultMarker: 'vh' });
//# sourceMappingURL=vh.js.map