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
    larriveeRaw: function() {
        return larriveeRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var pi_sqrt2 = _math.pi / _math.sqrt2;
function larriveeRaw(lambda, phi) {
    return [
        lambda * (1 + (0, _math.sqrt)((0, _math.cos)(phi))) / 2,
        phi / ((0, _math.cos)(phi / 2) * (0, _math.cos)(lambda / 6))
    ];
}
larriveeRaw.invert = function(x, y) {
    var x0 = (0, _math.abs)(x), y0 = (0, _math.abs)(y), lambda = _math.epsilon, phi = _math.halfPi;
    if (y0 < pi_sqrt2) phi *= y0 / pi_sqrt2;
    else lambda += 6 * (0, _math.acos)(pi_sqrt2 / y0);
    for(var i = 0; i < 25; i++){
        var sinPhi = (0, _math.sin)(phi), sqrtcosPhi = (0, _math.sqrt)((0, _math.cos)(phi)), sinPhi_2 = (0, _math.sin)(phi / 2), cosPhi_2 = (0, _math.cos)(phi / 2), sinLambda_6 = (0, _math.sin)(lambda / 6), cosLambda_6 = (0, _math.cos)(lambda / 6), f0 = 0.5 * lambda * (1 + sqrtcosPhi) - x0, f1 = phi / (cosPhi_2 * cosLambda_6) - y0, df0dPhi = sqrtcosPhi ? -0.25 * lambda * sinPhi / sqrtcosPhi : 0, df0dLambda = 0.5 * (1 + sqrtcosPhi), df1dPhi = (1 + 0.5 * phi * sinPhi_2 / cosPhi_2) / (cosPhi_2 * cosLambda_6), df1dLambda = phi / cosPhi_2 * (sinLambda_6 / 6) / (cosLambda_6 * cosLambda_6), denom = df0dPhi * df1dLambda - df1dPhi * df0dLambda, dPhi = (f0 * df1dLambda - f1 * df0dLambda) / denom, dLambda = (f1 * df0dPhi - f0 * df1dPhi) / denom;
        phi -= dPhi;
        lambda -= dLambda;
        if ((0, _math.abs)(dPhi) < _math.epsilon && (0, _math.abs)(dLambda) < _math.epsilon) break;
    }
    return [
        x < 0 ? -lambda : lambda,
        y < 0 ? -phi : phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(larriveeRaw).scale(97.2672);
}
