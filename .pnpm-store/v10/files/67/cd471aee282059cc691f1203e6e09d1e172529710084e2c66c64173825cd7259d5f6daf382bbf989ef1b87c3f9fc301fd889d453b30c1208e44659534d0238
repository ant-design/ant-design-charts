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
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Linear, Point } from '@antv/scale';
/**
 * Apples parallel coordinate transform.
 * @param params [x0, x1, y0, y1]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
export var parallel = function (params, x, y, width, height) {
    var _a = __read(params, 4), x0 = _a[0], x1 = _a[1], y0 = _a[2], y1 = _a[3];
    var sy = new Linear({
        range: [y0, y1],
    });
    return {
        transform: function (vector) {
            var v = [];
            var len = vector.length;
            var sx = new Point({
                domain: new Array(len).fill(0).map(function (_, i) { return i; }),
                range: [x0, x1],
            });
            for (var i = 0; i < len; i++) {
                var e = vector[i];
                var x_1 = sx.map(i);
                var y_1 = sy.map(e);
                v.push(x_1, y_1);
            }
            return v;
        },
        untransform: function (vector) {
            var v = [];
            for (var i = 0; i < vector.length; i += 2) {
                var y_2 = vector[i + 1];
                v.push(sy.invert(y_2));
            }
            return v;
        },
    };
};
//# sourceMappingURL=parallel.js.map