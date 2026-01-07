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
    satelliteRaw: function() {
        return satelliteRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function satelliteVerticalRaw(P) {
    function forward(lambda, phi) {
        var cosPhi = (0, _math.cos)(phi), k = (P - 1) / (P - cosPhi * (0, _math.cos)(lambda));
        return [
            k * cosPhi * (0, _math.sin)(lambda),
            k * (0, _math.sin)(phi)
        ];
    }
    forward.invert = function(x, y) {
        var rho2 = x * x + y * y, rho = (0, _math.sqrt)(rho2), sinc = (P - (0, _math.sqrt)(1 - rho2 * (P + 1) / (P - 1))) / ((P - 1) / rho + rho / (P - 1));
        return [
            (0, _math.atan2)(x * sinc, rho * (0, _math.sqrt)(1 - sinc * sinc)),
            rho ? (0, _math.asin)(y * sinc / rho) : 0
        ];
    };
    return forward;
}
function satelliteRaw(P, omega) {
    var vertical = satelliteVerticalRaw(P);
    if (!omega) return vertical;
    var cosOmega = (0, _math.cos)(omega), sinOmega = (0, _math.sin)(omega);
    function forward(lambda, phi) {
        var coordinates = vertical(lambda, phi), y = coordinates[1], A = y * sinOmega / (P - 1) + cosOmega;
        return [
            coordinates[0] * cosOmega / A,
            y / A
        ];
    }
    forward.invert = function(x, y) {
        var k = (P - 1) / (P - 1 - y * sinOmega);
        return vertical.invert(k * x, k * y * cosOmega);
    };
    return forward;
}
function _default() {
    var distance = 2, omega = 0, m = (0, _index.geoProjectionMutator)(satelliteRaw), p = m(distance, omega);
    // As a multiple of radius.
    p.distance = function(_) {
        if (!arguments.length) return distance;
        return m(distance = +_, omega);
    };
    p.tilt = function(_) {
        if (!arguments.length) return omega * _math.degrees;
        return m(distance, omega = _ * _math.radians);
    };
    return p.scale(432.147).clipAngle((0, _math.acos)(1 / distance) * _math.degrees - 1e-6);
}
