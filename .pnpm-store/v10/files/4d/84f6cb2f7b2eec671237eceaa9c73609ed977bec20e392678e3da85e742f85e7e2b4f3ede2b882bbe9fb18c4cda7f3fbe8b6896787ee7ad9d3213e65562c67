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
    vanDerGrinten3Raw: function() {
        return vanDerGrinten3Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function vanDerGrinten3Raw(lambda, phi) {
    if ((0, _math.abs)(phi) < _math.epsilon) return [
        lambda,
        0
    ];
    var sinTheta = phi / _math.halfPi, theta = (0, _math.asin)(sinTheta);
    if ((0, _math.abs)(lambda) < _math.epsilon || (0, _math.abs)((0, _math.abs)(phi) - _math.halfPi) < _math.epsilon) return [
        0,
        _math.pi * (0, _math.tan)(theta / 2)
    ];
    var A = (_math.pi / lambda - lambda / _math.pi) / 2, y1 = sinTheta / (1 + (0, _math.cos)(theta));
    return [
        _math.pi * ((0, _math.sign)(lambda) * (0, _math.sqrt)(A * A + 1 - y1 * y1) - A),
        _math.pi * y1
    ];
}
vanDerGrinten3Raw.invert = function(x, y) {
    if (!y) return [
        x,
        0
    ];
    var y1 = y / _math.pi, A = (_math.pi * _math.pi * (1 - y1 * y1) - x * x) / (2 * _math.pi * x);
    return [
        x ? _math.pi * ((0, _math.sign)(x) * (0, _math.sqrt)(A * A + 1) - A) : 0,
        _math.halfPi * (0, _math.sin)(2 * (0, _math.atan)(y1))
    ];
};
function _default() {
    return (0, _index.geoProjection)(vanDerGrinten3Raw).scale(79.4183);
}
