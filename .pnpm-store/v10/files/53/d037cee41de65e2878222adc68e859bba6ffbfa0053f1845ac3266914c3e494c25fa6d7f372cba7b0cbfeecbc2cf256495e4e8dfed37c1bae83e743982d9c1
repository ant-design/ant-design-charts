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
function cot(theta) {
    return 1 / Math.tan(theta);
}
/**
 * Applies shear transformation for the first dimension of vector2.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export var shearX = function (params, x, y, width, height) {
    var _a = __read(params, 1), theta = _a[0];
    var sx = cot(theta);
    return {
        transform: function (vector) {
            var _a = __read(vector, 2), x = _a[0], y = _a[1];
            var xx = x + y * sx;
            return [xx, y];
        },
        untransform: function (vector) {
            var _a = __read(vector, 2), xx = _a[0], y = _a[1];
            var x = xx - y * sx;
            return [x, y];
        },
    };
};
/**
 * Applies shear transformation for the second dimension of vector2.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export var shearY = function (params, x, y, width, height) {
    var _a = __read(params, 1), theta = _a[0];
    var sy = cot(theta);
    return {
        transform: function (vector) {
            var _a = __read(vector, 2), x = _a[0], y = _a[1];
            var yy = y + x * sy;
            return [x, yy];
        },
        untransform: function (vector) {
            var _a = __read(vector, 2), x = _a[0], yy = _a[1];
            var y = yy - x * sy;
            return [x, y];
        },
    };
};
//# sourceMappingURL=shear.js.map