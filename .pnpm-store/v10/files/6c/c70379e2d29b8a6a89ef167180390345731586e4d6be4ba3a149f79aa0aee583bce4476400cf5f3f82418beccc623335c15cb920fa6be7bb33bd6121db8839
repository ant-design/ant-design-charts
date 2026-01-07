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
import { mat3 } from 'gl-matrix';
/**
 * Apply translate transformation for current vector.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export var translate = function (params, x, y, width, height) {
    var _a = __read(params, 2), tx = _a[0], ty = _a[1];
    var matrix = mat3.create();
    return mat3.fromTranslation(matrix, [tx, ty]);
};
//# sourceMappingURL=translate.js.map