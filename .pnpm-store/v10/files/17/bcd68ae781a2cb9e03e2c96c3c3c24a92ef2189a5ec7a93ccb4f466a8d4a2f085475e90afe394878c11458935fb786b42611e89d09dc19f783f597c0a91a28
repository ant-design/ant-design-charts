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
    laskowskiRaw: function() {
        return laskowskiRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function laskowskiRaw(lambda, phi) {
    var lambda2 = lambda * lambda, phi2 = phi * phi;
    return [
        lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)),
        phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032))
    ];
}
laskowskiRaw.invert = function(x, y) {
    var lambda = (0, _math.sign)(x) * _math.pi, phi = y / 2, i = 50;
    do {
        var lambda2 = lambda * lambda, phi2 = phi * phi, lambdaPhi = lambda * phi, fx = lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)) - x, fy = phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032)) - y, deltaxDeltaLambda = 0.975534 - phi2 * (0.119161 + 3 * lambda2 * 0.0143059 + phi2 * 0.0547009), deltaxDeltaPhi = -lambdaPhi * (2 * 0.119161 + 4 * 0.0547009 * phi2 + 2 * 0.0143059 * lambda2), deltayDeltaLambda = lambdaPhi * (2 * 0.0802894 + 4 * 0.000199025 * lambda2 + 2 * -0.02855 * phi2), deltayDeltaPhi = 1.00384 + lambda2 * (0.0802894 + 0.000199025 * lambda2) + phi2 * (3 * (0.0998909 - 0.02855 * lambda2) - 5 * 0.0491032 * phi2), denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda, deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator, deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
        lambda -= deltaLambda, phi -= deltaPhi;
    }while (((0, _math.abs)(deltaLambda) > _math.epsilon || (0, _math.abs)(deltaPhi) > _math.epsilon) && --i > 0);
    return i && [
        lambda,
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(laskowskiRaw).scale(139.98);
}
