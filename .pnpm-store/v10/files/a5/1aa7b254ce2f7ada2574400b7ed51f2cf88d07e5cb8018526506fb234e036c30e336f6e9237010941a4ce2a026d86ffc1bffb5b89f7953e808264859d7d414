"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    aitoffRaw: function() {
        return aitoffRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function aitoffRaw(x, y) {
    var cosy = (0, _math.cos)(y), sincia = (0, _math.sinci)((0, _math.acos)(cosy * (0, _math.cos)(x /= 2)));
    return [
        2 * cosy * (0, _math.sin)(x) * sincia,
        (0, _math.sin)(y) * sincia
    ];
}
// Abort if [x, y] is not within an ellipse centered at [0, 0] with
// semi-major axis pi and semi-minor axis pi/2.
aitoffRaw.invert = function(x, y) {
    if (x * x + 4 * y * y > _math.pi * _math.pi + _math.epsilon) return;
    var x1 = x, y1 = y, i = 25;
    do {
        var sinx = (0, _math.sin)(x1), sinx_2 = (0, _math.sin)(x1 / 2), cosx_2 = (0, _math.cos)(x1 / 2), siny = (0, _math.sin)(y1), cosy = (0, _math.cos)(y1), sin_2y = (0, _math.sin)(2 * y1), sin2y = siny * siny, cos2y = cosy * cosy, sin2x_2 = sinx_2 * sinx_2, c = 1 - cos2y * cosx_2 * cosx_2, e = c ? (0, _math.acos)(cosy * cosx_2) * (0, _math.sqrt)(f = 1 / c) : f = 0, f, fx = 2 * e * cosy * sinx_2 - x, fy = e * siny - y, dxdx = f * (cos2y * sin2x_2 + e * cosy * cosx_2 * sin2y), dxdy = f * (0.5 * sinx * sin_2y - e * 2 * siny * sinx_2), dydx = f * 0.25 * (sin_2y * sinx_2 - e * siny * cos2y * sinx), dydy = f * (sin2y * cosx_2 + e * sin2x_2 * cosy), z = dxdy * dydx - dydy * dxdx;
        if (!z) break;
        var dx = (fy * dxdy - fx * dydy) / z, dy = (fx * dydx - fy * dxdx) / z;
        x1 -= dx, y1 -= dy;
    }while (((0, _math.abs)(dx) > _math.epsilon || (0, _math.abs)(dy) > _math.epsilon) && --i > 0);
    return [
        x1,
        y1
    ];
};
function _default() {
    return (0, _index.geoProjection)(aitoffRaw).scale(152.63);
}
