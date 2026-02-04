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
exports.translate3D = void 0;
var gl_matrix_1 = require("gl-matrix");
/**
 * Apply translate transformation for current vector.
 * @param params [tx, ty, tz]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param z z of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @param depth depth of the the bounding box of coordinate
 * @returns transformer
 */
var translate3D = function (params, x, y, z, width, height, depth) {
    var _a = __read(params, 3), tx = _a[0], ty = _a[1], tz = _a[2];
    return gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), [tx, ty, tz]);
};
exports.translate3D = translate3D;
//# sourceMappingURL=translate3D.js.map