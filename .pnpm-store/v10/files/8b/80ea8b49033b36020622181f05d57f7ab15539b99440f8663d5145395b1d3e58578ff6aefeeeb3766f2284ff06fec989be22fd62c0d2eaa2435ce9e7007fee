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
    hyperellipticalRaw: function() {
        return hyperellipticalRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _integrate = require("./integrate.js");
function hyperellipticalRaw(alpha, k, gamma) {
    function elliptic(f) {
        return alpha + (1 - alpha) * (0, _math.pow)(1 - (0, _math.pow)(f, k), 1 / k);
    }
    function z(f) {
        return (0, _integrate.integrate)(elliptic, 0, f, 1e-4);
    }
    var G = 1 / z(1), n = 1000, m = (1 + 1e-8) * G, approx = [];
    for(var i = 0; i <= n; i++)approx.push(z(i / n) * m);
    function Y(sinphi) {
        var rmin = 0, rmax = n, r = n >> 1;
        do {
            if (approx[r] > sinphi) rmax = r;
            else rmin = r;
            r = rmin + rmax >> 1;
        }while (r > rmin);
        var u = approx[r + 1] - approx[r];
        if (u) u = (sinphi - approx[r + 1]) / u;
        return (r + 1 + u) / n;
    }
    var ratio = 2 * Y(1) / _math.pi * G / gamma;
    var forward = function forward(lambda, phi) {
        var y = Y((0, _math.abs)((0, _math.sin)(phi))), x = elliptic(y) * lambda;
        y /= ratio;
        return [
            x,
            phi >= 0 ? y : -y
        ];
    };
    forward.invert = function(x, y) {
        var phi;
        y *= ratio;
        if ((0, _math.abs)(y) < 1) phi = (0, _math.sign)(y) * (0, _math.asin)(z((0, _math.abs)(y)) * G);
        return [
            x / elliptic((0, _math.abs)(y)),
            phi
        ];
    };
    return forward;
}
function _default() {
    var alpha = 0, k = 2.5, gamma = 1.183136, m = (0, _index.geoProjectionMutator)(hyperellipticalRaw), p = m(alpha, k, gamma);
    p.alpha = function(_) {
        return arguments.length ? m(alpha = +_, k, gamma) : alpha;
    };
    p.k = function(_) {
        return arguments.length ? m(alpha, k = +_, gamma) : k;
    };
    p.gamma = function(_) {
        return arguments.length ? m(alpha, k, gamma = +_) : gamma;
    };
    return p.scale(152.63);
}
