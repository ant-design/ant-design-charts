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
exports.transpose = void 0;
/**
 * Exchange dimensions of the vector.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
var transpose = function (params, x, y, width, height) {
    return {
        transform: function (_a) {
            var _b = __read(_a, 2), x = _b[0], y = _b[1];
            return [y, x];
        },
        untransform: function (_a) {
            var _b = __read(_a, 2), x = _b[0], y = _b[1];
            return [y, x];
        },
    };
};
exports.transpose = transpose;
//# sourceMappingURL=transpose.js.map