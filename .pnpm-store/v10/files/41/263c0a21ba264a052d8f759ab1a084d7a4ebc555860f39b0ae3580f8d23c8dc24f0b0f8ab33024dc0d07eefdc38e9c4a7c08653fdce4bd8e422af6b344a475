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
    hillRaw: function() {
        return hillRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function hillRaw(K) {
    var L = 1 + K, sinBt = (0, _math.sin)(1 / L), Bt = (0, _math.asin)(sinBt), A = 2 * (0, _math.sqrt)(_math.pi / (B = _math.pi + 4 * Bt * L)), B, rho0 = 0.5 * A * (L + (0, _math.sqrt)(K * (2 + K))), K2 = K * K, L2 = L * L;
    function forward(lambda, phi) {
        var t = 1 - (0, _math.sin)(phi), rho, omega;
        if (t && t < 2) {
            var theta = _math.halfPi - phi, i = 25, delta;
            do {
                var sinTheta = (0, _math.sin)(theta), cosTheta = (0, _math.cos)(theta), Bt_Bt1 = Bt + (0, _math.atan2)(sinTheta, L - cosTheta), C = 1 + L2 - 2 * L * cosTheta;
                theta -= delta = (theta - K2 * Bt - L * sinTheta + C * Bt_Bt1 - 0.5 * t * B) / (2 * L * sinTheta * Bt_Bt1);
            }while ((0, _math.abs)(delta) > _math.epsilon2 && --i > 0);
            rho = A * (0, _math.sqrt)(C);
            omega = lambda * Bt_Bt1 / _math.pi;
        } else {
            rho = A * (K + t);
            omega = lambda * Bt / _math.pi;
        }
        return [
            rho * (0, _math.sin)(omega),
            rho0 - rho * (0, _math.cos)(omega)
        ];
    }
    forward.invert = function(x, y) {
        var rho2 = x * x + (y -= rho0) * y, cosTheta = (1 + L2 - rho2 / (A * A)) / (2 * L), theta = (0, _math.acos)(cosTheta), sinTheta = (0, _math.sin)(theta), Bt_Bt1 = Bt + (0, _math.atan2)(sinTheta, L - cosTheta);
        return [
            (0, _math.asin)(x / (0, _math.sqrt)(rho2)) * _math.pi / Bt_Bt1,
            (0, _math.asin)(1 - 2 * (theta - K2 * Bt - L * sinTheta + (1 + L2 - 2 * L * cosTheta) * Bt_Bt1) / B)
        ];
    };
    return forward;
}
function _default() {
    var K = 1, m = (0, _index.geoProjectionMutator)(hillRaw), p = m(K);
    p.ratio = function(_) {
        return arguments.length ? m(K = +_) : K;
    };
    return p.scale(167.774).center([
        0,
        18.67
    ]);
}
