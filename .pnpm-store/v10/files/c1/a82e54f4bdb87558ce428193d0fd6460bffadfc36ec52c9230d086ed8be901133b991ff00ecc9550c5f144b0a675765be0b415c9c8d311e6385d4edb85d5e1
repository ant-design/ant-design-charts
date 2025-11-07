"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
const d3_shape_1 = require("@antv/vendor/d3-shape");
const coordinate_1 = require("../../utils/coordinate");
const curve_1 = require("./curve");
const Area = (options, context) => {
    const { coordinate } = context;
    return (...params) => {
        const curve = (0, coordinate_1.isPolar)(coordinate) ? d3_shape_1.curveLinearClosed : d3_shape_1.curveLinear;
        return (0, curve_1.Curve)(Object.assign({ curve: curve }, options), context)(...params);
    };
};
exports.Area = Area;
exports.Area.props = Object.assign(Object.assign({}, curve_1.Curve.props), { defaultMarker: 'square' });
//# sourceMappingURL=area.js.map