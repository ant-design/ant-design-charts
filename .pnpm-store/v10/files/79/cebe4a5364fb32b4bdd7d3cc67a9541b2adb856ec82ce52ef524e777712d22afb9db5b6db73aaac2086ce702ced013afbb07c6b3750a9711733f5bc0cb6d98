"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _math = require("./math.js");
function _default(a, b) {
    var x0 = a[0] * _math.radians, y0 = a[1] * _math.radians, x1 = b[0] * _math.radians, y1 = b[1] * _math.radians, cy0 = (0, _math.cos)(y0), sy0 = (0, _math.sin)(y0), cy1 = (0, _math.cos)(y1), sy1 = (0, _math.sin)(y1), kx0 = cy0 * (0, _math.cos)(x0), ky0 = cy0 * (0, _math.sin)(x0), kx1 = cy1 * (0, _math.cos)(x1), ky1 = cy1 * (0, _math.sin)(x1), d = 2 * (0, _math.asin)((0, _math.sqrt)((0, _math.haversin)(y1 - y0) + cy0 * cy1 * (0, _math.haversin)(x1 - x0))), k = (0, _math.sin)(d);
    var interpolate = d ? function interpolate(t) {
        var B = (0, _math.sin)(t *= d) / k, A = (0, _math.sin)(d - t) / k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
        return [
            (0, _math.atan2)(y, x) * _math.degrees,
            (0, _math.atan2)(z, (0, _math.sqrt)(x * x + y * y)) * _math.degrees
        ];
    } : function() {
        return [
            x0 * _math.degrees,
            y0 * _math.degrees
        ];
    };
    interpolate.distance = d;
    return interpolate;
}
