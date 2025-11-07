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
    foucautSinusoidalRaw: function() {
        return foucautSinusoidalRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _newton = require("./newton.js");
function foucautSinusoidalRaw(alpha) {
    var beta = 1 - alpha, equatorial = raw(_math.pi, 0)[0] - raw(-_math.pi, 0)[0], polar = raw(0, _math.halfPi)[1] - raw(0, -_math.halfPi)[1], ratio = (0, _math.sqrt)(2 * polar / equatorial);
    function raw(lambda, phi) {
        var cosphi = (0, _math.cos)(phi), sinphi = (0, _math.sin)(phi);
        return [
            cosphi / (beta + alpha * cosphi) * lambda,
            beta * phi + alpha * sinphi
        ];
    }
    function forward(lambda, phi) {
        var p = raw(lambda, phi);
        return [
            p[0] * ratio,
            p[1] / ratio
        ];
    }
    function forwardMeridian(phi) {
        return forward(0, phi)[1];
    }
    forward.invert = function(x, y) {
        var phi = (0, _newton.solve)(forwardMeridian, y), lambda = x / ratio * (alpha + beta / (0, _math.cos)(phi));
        return [
            lambda,
            phi
        ];
    };
    return forward;
}
function _default() {
    var alpha = 0.5, m = (0, _index.geoProjectionMutator)(foucautSinusoidalRaw), p = m(alpha);
    p.alpha = function(_) {
        return arguments.length ? m(alpha = +_) : alpha;
    };
    return p.scale(168.725);
}
