"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HVH = void 0;
const d3_shape_1 = require("@antv/vendor/d3-shape");
const curve_1 = require("./curve");
const HVH = (options, context) => {
    return (...params) => {
        return (0, curve_1.Curve)(Object.assign({ curve: d3_shape_1.curveStep }, options), context)(...params);
    };
};
exports.HVH = HVH;
exports.HVH.props = Object.assign(Object.assign({}, curve_1.Curve.props), { defaultMarker: 'hvh' });
//# sourceMappingURL=hvh.js.map