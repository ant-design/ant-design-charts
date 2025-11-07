"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartesian = void 0;
var scale_1 = require("@antv/scale");
/**
 * Maps normalized value to the bounding box of coordinate.
 * @param params []
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
var cartesian = function (params, x, y, width, height) {
    var sx = new scale_1.Linear({
        range: [x, x + width],
    });
    var sy = new scale_1.Linear({
        range: [y, y + height],
    });
    return {
        transform: function (vector) {
            var _a = __read(vector, 2), v1 = _a[0], v2 = _a[1];
            return [sx.map(v1), sy.map(v2)];
        },
        untransform: function (vector) {
            var _a = __read(vector, 2), v1 = _a[0], v2 = _a[1];
            return [sx.invert(v1), sy.invert(v2)];
        },
    };
};
exports.cartesian = cartesian;
//# sourceMappingURL=cartesian.js.map