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
    eisenlohrRaw: function() {
        return eisenlohrRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _august = require("./august.js");
var _math = require("./math.js");
var eisenlohrK = 3 + 2 * _math.sqrt2;
function eisenlohrRaw(lambda, phi) {
    var s0 = (0, _math.sin)(lambda /= 2), c0 = (0, _math.cos)(lambda), k = (0, _math.sqrt)((0, _math.cos)(phi)), c1 = (0, _math.cos)(phi /= 2), t = (0, _math.sin)(phi) / (c1 + _math.sqrt2 * c0 * k), c = (0, _math.sqrt)(2 / (1 + t * t)), v = (0, _math.sqrt)((_math.sqrt2 * c1 + (c0 + s0) * k) / (_math.sqrt2 * c1 + (c0 - s0) * k));
    return [
        eisenlohrK * (c * (v - 1 / v) - 2 * (0, _math.log)(v)),
        eisenlohrK * (c * t * (v + 1 / v) - 2 * (0, _math.atan)(t))
    ];
}
eisenlohrRaw.invert = function(x, y) {
    if (!(p = _august.augustRaw.invert(x / 1.2, y * 1.065))) return null;
    var lambda = p[0], phi = p[1], i = 20, p;
    x /= eisenlohrK, y /= eisenlohrK;
    do {
        var _0 = lambda / 2, _1 = phi / 2, s0 = (0, _math.sin)(_0), c0 = (0, _math.cos)(_0), s1 = (0, _math.sin)(_1), c1 = (0, _math.cos)(_1), cos1 = (0, _math.cos)(phi), k = (0, _math.sqrt)(cos1), t = s1 / (c1 + _math.sqrt2 * c0 * k), t2 = t * t, c = (0, _math.sqrt)(2 / (1 + t2)), v0 = _math.sqrt2 * c1 + (c0 + s0) * k, v1 = _math.sqrt2 * c1 + (c0 - s0) * k, v2 = v0 / v1, v = (0, _math.sqrt)(v2), vm1v = v - 1 / v, vp1v = v + 1 / v, fx = c * vm1v - 2 * (0, _math.log)(v) - x, fy = c * t * vp1v - 2 * (0, _math.atan)(t) - y, deltatDeltaLambda = s1 && _math.sqrt1_2 * k * s0 * t2 / s1, deltatDeltaPhi = (_math.sqrt2 * c0 * c1 + k) / (2 * (c1 + _math.sqrt2 * c0 * k) * (c1 + _math.sqrt2 * c0 * k) * k), deltacDeltat = -0.5 * t * c * c * c, deltacDeltaLambda = deltacDeltat * deltatDeltaLambda, deltacDeltaPhi = deltacDeltat * deltatDeltaPhi, A = (A = 2 * c1 + _math.sqrt2 * k * (c0 - s0)) * A * v, deltavDeltaLambda = (_math.sqrt2 * c0 * c1 * k + cos1) / A, deltavDeltaPhi = -(_math.sqrt2 * s0 * s1) / (k * A), deltaxDeltaLambda = vm1v * deltacDeltaLambda - 2 * deltavDeltaLambda / v + c * (deltavDeltaLambda + deltavDeltaLambda / v2), deltaxDeltaPhi = vm1v * deltacDeltaPhi - 2 * deltavDeltaPhi / v + c * (deltavDeltaPhi + deltavDeltaPhi / v2), deltayDeltaLambda = t * vp1v * deltacDeltaLambda - 2 * deltatDeltaLambda / (1 + t2) + c * vp1v * deltatDeltaLambda + c * t * (deltavDeltaLambda - deltavDeltaLambda / v2), deltayDeltaPhi = t * vp1v * deltacDeltaPhi - 2 * deltatDeltaPhi / (1 + t2) + c * vp1v * deltatDeltaPhi + c * t * (deltavDeltaPhi - deltavDeltaPhi / v2), denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda;
        if (!denominator) break;
        var deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator, deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
        lambda -= deltaLambda;
        phi = (0, _math.max)(-_math.halfPi, (0, _math.min)(_math.halfPi, phi - deltaPhi));
    }while (((0, _math.abs)(deltaLambda) > _math.epsilon || (0, _math.abs)(deltaPhi) > _math.epsilon) && --i > 0);
    return (0, _math.abs)((0, _math.abs)(phi) - _math.halfPi) < _math.epsilon ? [
        0,
        phi
    ] : i && [
        lambda,
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(eisenlohrRaw).scale(62.5271);
}
