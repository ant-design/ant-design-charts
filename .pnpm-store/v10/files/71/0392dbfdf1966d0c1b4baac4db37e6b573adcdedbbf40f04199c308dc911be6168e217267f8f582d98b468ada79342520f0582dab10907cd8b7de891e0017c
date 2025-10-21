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
    lagrangeRaw: function() {
        return lagrangeRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function lagrangeRaw(n) {
    function forward(lambda, phi) {
        if ((0, _math.abs)((0, _math.abs)(phi) - _math.halfPi) < _math.epsilon) return [
            0,
            phi < 0 ? -2 : 2
        ];
        var sinPhi = (0, _math.sin)(phi), v = (0, _math.pow)((1 + sinPhi) / (1 - sinPhi), n / 2), c = 0.5 * (v + 1 / v) + (0, _math.cos)(lambda *= n);
        return [
            2 * (0, _math.sin)(lambda) / c,
            (v - 1 / v) / c
        ];
    }
    forward.invert = function(x, y) {
        var y0 = (0, _math.abs)(y);
        if ((0, _math.abs)(y0 - 2) < _math.epsilon) return x ? null : [
            0,
            (0, _math.sign)(y) * _math.halfPi
        ];
        if (y0 > 2) return null;
        x /= 2, y /= 2;
        var x2 = x * x, y2 = y * y, t = 2 * y / (1 + x2 + y2); // tanh(nPhi)
        t = (0, _math.pow)((1 + t) / (1 - t), 1 / n);
        return [
            (0, _math.atan2)(2 * x, 1 - x2 - y2) / n,
            (0, _math.asin)((t - 1) / (t + 1))
        ];
    };
    return forward;
}
function _default() {
    var n = 0.5, m = (0, _index.geoProjectionMutator)(lagrangeRaw), p = m(n);
    p.spacing = function(_) {
        return arguments.length ? m(n = +_) : n;
    };
    return p.scale(124.75);
}
