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
    bottomleyRaw: function() {
        return bottomleyRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function bottomleyRaw(sinPsi) {
    function forward(lambda, phi) {
        var rho = _math.halfPi - phi, eta = rho ? lambda * sinPsi * (0, _math.sin)(rho) / rho : rho;
        return [
            rho * (0, _math.sin)(eta) / sinPsi,
            _math.halfPi - rho * (0, _math.cos)(eta)
        ];
    }
    forward.invert = function(x, y) {
        var x1 = x * sinPsi, y1 = _math.halfPi - y, rho = (0, _math.sqrt)(x1 * x1 + y1 * y1), eta = (0, _math.atan2)(x1, y1);
        return [
            (rho ? rho / (0, _math.sin)(rho) : 1) * eta / sinPsi,
            _math.halfPi - rho
        ];
    };
    return forward;
}
function _default() {
    var sinPsi = 0.5, m = (0, _index.geoProjectionMutator)(bottomleyRaw), p = m(sinPsi);
    p.fraction = function(_) {
        return arguments.length ? m(sinPsi = +_) : sinPsi;
    };
    return p.scale(158.837);
}
