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
    nicolosiRaw: function() {
        return nicolosiRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _newton = require("./newton.js");
function nicolosiRaw(lambda, phi) {
    var sinPhi = (0, _math.sin)(phi), q = (0, _math.cos)(phi), s = (0, _math.sign)(lambda);
    if (lambda === 0 || (0, _math.abs)(phi) === _math.halfPi) return [
        0,
        phi
    ];
    else if (phi === 0) return [
        lambda,
        0
    ];
    else if ((0, _math.abs)(lambda) === _math.halfPi) return [
        lambda * q,
        _math.halfPi * sinPhi
    ];
    var b = _math.pi / (2 * lambda) - 2 * lambda / _math.pi, c = 2 * phi / _math.pi, d = (1 - c * c) / (sinPhi - c);
    var b2 = b * b, d2 = d * d, b2d2 = 1 + b2 / d2, d2b2 = 1 + d2 / b2;
    var M = (b * sinPhi / d - b / 2) / b2d2, N = (d2 * sinPhi / b2 + d / 2) / d2b2, m = M * M + q * q / b2d2, n = N * N - (d2 * sinPhi * sinPhi / b2 + d * sinPhi - 1) / d2b2;
    return [
        _math.halfPi * (M + (0, _math.sqrt)(m) * s),
        _math.halfPi * (N + (0, _math.sqrt)(n < 0 ? 0 : n) * (0, _math.sign)(-phi * b) * s)
    ];
}
nicolosiRaw.invert = function(x, y) {
    x /= _math.halfPi;
    y /= _math.halfPi;
    var x2 = x * x, y2 = y * y, x2y2 = x2 + y2, pi2 = _math.pi * _math.pi;
    return [
        x ? (x2y2 - 1 + (0, _math.sqrt)((1 - x2y2) * (1 - x2y2) + 4 * x2)) / (2 * x) * _math.halfPi : 0,
        (0, _newton.solve)(function(phi) {
            return x2y2 * (_math.pi * (0, _math.sin)(phi) - 2 * phi) * _math.pi + 4 * phi * phi * (y - (0, _math.sin)(phi)) + 2 * _math.pi * phi - pi2 * y;
        }, 0)
    ];
};
function _default() {
    return (0, _index.geoProjection)(nicolosiRaw).scale(127.267);
}
