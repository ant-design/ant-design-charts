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
exports.scale3D = void 0;
var gl_matrix_1 = require("gl-matrix");
/**
 * Apply scale transformation for current vector.
 * @param params [sx, sy, sz]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param z z of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @param depth depth of the the bounding box of coordinate
 * @returns transformer
 */
var scale3D = function (params, x, y, z, width, height, depth) {
    var _a = __read(params, 3), sx = _a[0], sy = _a[1], sz = _a[2];
    return gl_matrix_1.mat4.fromScaling(gl_matrix_1.mat4.create(), [sx, sy, sz]);
};
exports.scale3D = scale3D;
//# sourceMappingURL=scale3D.js.map