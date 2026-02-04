"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
const d3_shape_1 = require("@antv/vendor/d3-shape");
const coordinate_1 = require("../../utils/coordinate");
const curve_1 = require("./curve");
const Line = (options, context) => {
    const { coordinate } = context;
    return (...params) => {
        const curve = (0, coordinate_1.isPolar)(coordinate) ? d3_shape_1.curveLinearClosed : d3_shape_1.curveLinear;
        return (0, curve_1.Curve)(Object.assign({ curve }, options), context)(...params);
    };
};
exports.Line = Line;
exports.Line.props = Object.assign(Object.assign({}, curve_1.Curve.props), { defaultMarker: 'line' });
//# sourceMappingURL=line.js.map