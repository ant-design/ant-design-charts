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
import { Linear } from '@antv/scale';
export var cartesian3D = function (params, x, y, z, width, height, depth) {
    var sx = new Linear({
        range: [x, x + width],
    });
    var sy = new Linear({
        range: [y, y + height],
    });
    var sz = new Linear({
        range: [z, z + depth],
    });
    return {
        transform: function (vector) {
            var _a = __read(vector, 3), v1 = _a[0], v2 = _a[1], v3 = _a[2];
            return [sx.map(v1), sy.map(v2), sz.map(v3)];
        },
        untransform: function (vector) {
            var _a = __read(vector, 3), v1 = _a[0], v2 = _a[1], v3 = _a[2];
            return [sx.invert(v1), sy.invert(v2), sz.invert(v3)];
        },
    };
};
//# sourceMappingURL=cartesian3D.js.map