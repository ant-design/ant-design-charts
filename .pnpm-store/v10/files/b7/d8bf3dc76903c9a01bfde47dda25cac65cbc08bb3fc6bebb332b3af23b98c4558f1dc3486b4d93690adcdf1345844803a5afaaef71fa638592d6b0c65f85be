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
    default: function() {
        return _default;
    },
    vanDerGrintenRaw: function() {
        return vanDerGrintenRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function vanDerGrintenRaw(lambda, phi) {
    if ((0, _math.abs)(phi) < _math.epsilon) return [
        lambda,
        0
    ];
    var sinTheta = (0, _math.abs)(phi / _math.halfPi), theta = (0, _math.asin)(sinTheta);
    if ((0, _math.abs)(lambda) < _math.epsilon || (0, _math.abs)((0, _math.abs)(phi) - _math.halfPi) < _math.epsilon) return [
        0,
        (0, _math.sign)(phi) * _math.pi * (0, _math.tan)(theta / 2)
    ];
    var cosTheta = (0, _math.cos)(theta), A = (0, _math.abs)(_math.pi / lambda - lambda / _math.pi) / 2, A2 = A * A, G = cosTheta / (sinTheta + cosTheta - 1), P = G * (2 / sinTheta - 1), P2 = P * P, P2_A2 = P2 + A2, G_P2 = G - P2, Q = A2 + G;
    return [
        (0, _math.sign)(lambda) * _math.pi * (A * G_P2 + (0, _math.sqrt)(A2 * G_P2 * G_P2 - P2_A2 * (G * G - P2))) / P2_A2,
        (0, _math.sign)(phi) * _math.pi * (P * Q - A * (0, _math.sqrt)((A2 + 1) * P2_A2 - Q * Q)) / P2_A2
    ];
}
vanDerGrintenRaw.invert = function(x, y) {
    if ((0, _math.abs)(y) < _math.epsilon) return [
        x,
        0
    ];
    if ((0, _math.abs)(x) < _math.epsilon) return [
        0,
        _math.halfPi * (0, _math.sin)(2 * (0, _math.atan)(y / _math.pi))
    ];
    var x2 = (x /= _math.pi) * x, y2 = (y /= _math.pi) * y, x2_y2 = x2 + y2, z = x2_y2 * x2_y2, c1 = -(0, _math.abs)(y) * (1 + x2_y2), c2 = c1 - 2 * y2 + x2, c3 = -2 * c1 + 1 + 2 * y2 + z, d = y2 / c3 + (2 * c2 * c2 * c2 / (c3 * c3 * c3) - 9 * c1 * c2 / (c3 * c3)) / 27, a1 = (c1 - c2 * c2 / (3 * c3)) / c3, m1 = 2 * (0, _math.sqrt)(-a1 / 3), theta1 = (0, _math.acos)(3 * d / (a1 * m1)) / 3;
    return [
        _math.pi * (x2_y2 - 1 + (0, _math.sqrt)(1 + 2 * (x2 - y2) + z)) / (2 * x),
        (0, _math.sign)(y) * _math.pi * (-m1 * (0, _math.cos)(theta1 + _math.pi / 3) - c2 / (3 * c3))
    ];
};
function _default() {
    return (0, _index.geoProjection)(vanDerGrintenRaw).scale(79.4183);
}
