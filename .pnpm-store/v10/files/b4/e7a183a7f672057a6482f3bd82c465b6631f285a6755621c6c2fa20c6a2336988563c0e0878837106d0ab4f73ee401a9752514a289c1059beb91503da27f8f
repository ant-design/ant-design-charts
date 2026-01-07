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
    guyouRaw: function() {
        return guyouRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _elliptic = require("./elliptic.js");
var _math = require("./math.js");
var _square = /*#__PURE__*/ _interop_require_default(require("./square.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function guyouRaw(lambda, phi) {
    var k_ = (_math.sqrt2 - 1) / (_math.sqrt2 + 1), k = (0, _math.sqrt)(1 - k_ * k_), K = (0, _elliptic.ellipticF)(_math.halfPi, k * k), f = -1, psi = (0, _math.log)((0, _math.tan)(_math.pi / 4 + (0, _math.abs)(phi) / 2)), r = (0, _math.exp)(f * psi) / (0, _math.sqrt)(k_), at = guyouComplexAtan(r * (0, _math.cos)(f * lambda), r * (0, _math.sin)(f * lambda)), t = (0, _elliptic.ellipticFi)(at[0], at[1], k * k);
    return [
        -t[1],
        (phi >= 0 ? 1 : -1) * (0.5 * K - t[0])
    ];
}
function guyouComplexAtan(x, y) {
    var x2 = x * x, y_1 = y + 1, t = 1 - x2 - y * y;
    return [
        0.5 * ((x >= 0 ? _math.halfPi : -_math.halfPi) - (0, _math.atan2)(t, 2 * x)),
        -0.25 * (0, _math.log)(t * t + 4 * x2) + 0.5 * (0, _math.log)(y_1 * y_1 + x2)
    ];
}
function guyouComplexDivide(a, b) {
    var denominator = b[0] * b[0] + b[1] * b[1];
    return [
        (a[0] * b[0] + a[1] * b[1]) / denominator,
        (a[1] * b[0] - a[0] * b[1]) / denominator
    ];
}
guyouRaw.invert = function(x, y) {
    var k_ = (_math.sqrt2 - 1) / (_math.sqrt2 + 1), k = (0, _math.sqrt)(1 - k_ * k_), K = (0, _elliptic.ellipticF)(_math.halfPi, k * k), f = -1, j = (0, _elliptic.ellipticJi)(0.5 * K - y, -x, k * k), tn = guyouComplexDivide(j[0], j[1]), lambda = (0, _math.atan2)(tn[1], tn[0]) / f;
    return [
        lambda,
        2 * (0, _math.atan)((0, _math.exp)(0.5 / f * (0, _math.log)(k_ * tn[0] * tn[0] + k_ * tn[1] * tn[1]))) - _math.halfPi
    ];
};
function _default() {
    return (0, _index.geoProjection)((0, _square.default)(guyouRaw)).scale(151.496);
}
