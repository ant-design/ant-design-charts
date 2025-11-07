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
exports.rotate = void 0;
var gl_matrix_1 = require("gl-matrix");
/**
 * Apply translate transformation for current vector.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
var rotate = function (params, x, y, width, height) {
    var _a = __read(params, 1), theta = _a[0];
    var matrix = gl_matrix_1.mat3.create();
    return gl_matrix_1.mat3.fromRotation(matrix, theta);
};
exports.rotate = rotate;
//# sourceMappingURL=rotate.js.map