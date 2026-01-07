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
    vanDerGrinten2Raw: function() {
        return vanDerGrinten2Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function vanDerGrinten2Raw(lambda, phi) {
    if ((0, _math.abs)(phi) < _math.epsilon) return [
        lambda,
        0
    ];
    var sinTheta = (0, _math.abs)(phi / _math.halfPi), theta = (0, _math.asin)(sinTheta);
    if ((0, _math.abs)(lambda) < _math.epsilon || (0, _math.abs)((0, _math.abs)(phi) - _math.halfPi) < _math.epsilon) return [
        0,
        (0, _math.sign)(phi) * _math.pi * (0, _math.tan)(theta / 2)
    ];
    var cosTheta = (0, _math.cos)(theta), A = (0, _math.abs)(_math.pi / lambda - lambda / _math.pi) / 2, A2 = A * A, x1 = cosTheta * ((0, _math.sqrt)(1 + A2) - A * cosTheta) / (1 + A2 * sinTheta * sinTheta);
    return [
        (0, _math.sign)(lambda) * _math.pi * x1,
        (0, _math.sign)(phi) * _math.pi * (0, _math.sqrt)(1 - x1 * (2 * A + x1))
    ];
}
vanDerGrinten2Raw.invert = function(x, y) {
    if (!x) return [
        0,
        _math.halfPi * (0, _math.sin)(2 * (0, _math.atan)(y / _math.pi))
    ];
    var x1 = (0, _math.abs)(x / _math.pi), A = (1 - x1 * x1 - (y /= _math.pi) * y) / (2 * x1), A2 = A * A, B = (0, _math.sqrt)(A2 + 1);
    return [
        (0, _math.sign)(x) * _math.pi * (B - A),
        (0, _math.sign)(y) * _math.halfPi * (0, _math.sin)(2 * (0, _math.atan2)((0, _math.sqrt)((1 - 2 * A * x1) * (A + B) - x1), (0, _math.sqrt)(B + A + x1)))
    ];
};
function _default() {
    return (0, _index.geoProjection)(vanDerGrinten2Raw).scale(79.4183);
}
