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
var _index = require("../../../d3-geo/src/index.js");
var _math = require("../math.js");
function _default(project) {
    var dx = project(_math.halfPi, 0)[0] - project(-_math.halfPi, 0)[0];
    function projectQuincuncial(lambda, phi) {
        var t = (0, _math.abs)(lambda) < _math.halfPi, p = project(t ? lambda : lambda > 0 ? lambda - _math.pi : lambda + _math.pi, phi), x = (p[0] - p[1]) * _math.sqrt1_2, y = (p[0] + p[1]) * _math.sqrt1_2;
        if (t) return [
            x,
            y
        ];
        var d = dx * _math.sqrt1_2, s = x > 0 ^ y > 0 ? -1 : 1;
        return [
            s * x - (0, _math.sign)(y) * d,
            s * y - (0, _math.sign)(x) * d
        ];
    }
    if (project.invert) projectQuincuncial.invert = function(x0, y0) {
        var x = (x0 + y0) * _math.sqrt1_2, y = (y0 - x0) * _math.sqrt1_2, t = (0, _math.abs)(x) < 0.5 * dx && (0, _math.abs)(y) < 0.5 * dx;
        if (!t) {
            var d = dx * _math.sqrt1_2, s = x > 0 ^ y > 0 ? -1 : 1, x1 = -s * x0 + (y > 0 ? 1 : -1) * d, y1 = -s * y0 + (x > 0 ? 1 : -1) * d;
            x = (-x1 - y1) * _math.sqrt1_2;
            y = (x1 - y1) * _math.sqrt1_2;
        }
        var p = project.invert(x, y);
        if (!t) p[0] += x > 0 ? _math.pi : -_math.pi;
        return p;
    };
    return (0, _index.geoProjection)(projectQuincuncial).rotate([
        -90,
        -90,
        45
    ]).clipAngle(180 - 1e-3);
}
