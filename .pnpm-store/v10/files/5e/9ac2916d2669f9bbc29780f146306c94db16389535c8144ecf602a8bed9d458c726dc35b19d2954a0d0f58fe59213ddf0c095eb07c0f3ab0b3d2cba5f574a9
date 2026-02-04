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
/**
 * Exchange dimensions of the vector.
 * @param params [tx, ty]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export var transpose3D = function (params, x, y, z, width, height, depth) {
    return {
        transform: function (_a) {
            var _b = __read(_a, 3), x = _b[0], y = _b[1], z = _b[2];
            return [y, x, z];
        },
        untransform: function (_a) {
            var _b = __read(_a, 3), x = _b[0], y = _b[1], z = _b[2];
            return [y, x, z];
        },
    };
};
//# sourceMappingURL=transpose3D.js.map