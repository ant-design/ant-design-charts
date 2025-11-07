"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Smooth = void 0;
const d3_shape_1 = require("@antv/vendor/d3-shape");
const coordinate_1 = require("../../utils/coordinate");
const curve_1 = require("./curve");
const Smooth = (options, context) => {
    const rest = __rest(options, []);
    const { coordinate } = context;
    return (...params) => {
        const curve = (0, coordinate_1.isPolar)(coordinate)
            ? d3_shape_1.curveCatmullRomClosed
            : (0, coordinate_1.isTranspose)(coordinate)
                ? d3_shape_1.curveMonotoneY
                : d3_shape_1.curveMonotoneX;
        return (0, curve_1.Curve)(Object.assign({ curve }, rest), context)(...params);
    };
};
exports.Smooth = Smooth;
exports.Smooth.props = Object.assign(Object.assign({}, curve_1.Curve.props), { defaultMarker: 'smooth' });
//# sourceMappingURL=smooth.js.map