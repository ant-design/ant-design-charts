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
    hufnagelRaw: function() {
        return hufnagelRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _newton = require("./newton.js");
function hufnagelRaw(a, b, psiMax, ratio) {
    var k = (0, _math.sqrt)(4 * _math.pi / (2 * psiMax + (1 + a - b / 2) * (0, _math.sin)(2 * psiMax) + (a + b) / 2 * (0, _math.sin)(4 * psiMax) + b / 2 * (0, _math.sin)(6 * psiMax))), c = (0, _math.sqrt)(ratio * (0, _math.sin)(psiMax) * (0, _math.sqrt)((1 + a * (0, _math.cos)(2 * psiMax) + b * (0, _math.cos)(4 * psiMax)) / (1 + a + b))), M = psiMax * mapping(1);
    function radius(psi) {
        return (0, _math.sqrt)(1 + a * (0, _math.cos)(2 * psi) + b * (0, _math.cos)(4 * psi));
    }
    function mapping(t) {
        var psi = t * psiMax;
        return (2 * psi + (1 + a - b / 2) * (0, _math.sin)(2 * psi) + (a + b) / 2 * (0, _math.sin)(4 * psi) + b / 2 * (0, _math.sin)(6 * psi)) / psiMax;
    }
    function inversemapping(psi) {
        return radius(psi) * (0, _math.sin)(psi);
    }
    var forward = function forward(lambda, phi) {
        var psi = psiMax * (0, _newton.solve)(mapping, M * (0, _math.sin)(phi) / psiMax, phi / _math.pi);
        if (isNaN(psi)) psi = psiMax * (0, _math.sign)(phi);
        var kr = k * radius(psi);
        return [
            kr * c * lambda / _math.pi * (0, _math.cos)(psi),
            kr / c * (0, _math.sin)(psi)
        ];
    };
    forward.invert = function(x, y) {
        var psi = (0, _newton.solve)(inversemapping, y * c / k);
        return [
            x * _math.pi / ((0, _math.cos)(psi) * k * c * radius(psi)),
            (0, _math.asin)(psiMax * mapping(psi / psiMax) / M)
        ];
    };
    if (psiMax === 0) {
        k = (0, _math.sqrt)(ratio / _math.pi);
        forward = function forward(lambda, phi) {
            return [
                lambda * k,
                (0, _math.sin)(phi) / k
            ];
        };
        forward.invert = function(x, y) {
            return [
                x / k,
                (0, _math.asin)(y * k)
            ];
        };
    }
    return forward;
}
function _default() {
    var a = 1, b = 0, psiMax = 45 * _math.radians, ratio = 2, mutate = (0, _index.geoProjectionMutator)(hufnagelRaw), projection = mutate(a, b, psiMax, ratio);
    projection.a = function(_) {
        return arguments.length ? mutate(a = +_, b, psiMax, ratio) : a;
    };
    projection.b = function(_) {
        return arguments.length ? mutate(a, b = +_, psiMax, ratio) : b;
    };
    projection.psiMax = function(_) {
        return arguments.length ? mutate(a, b, psiMax = +_ * _math.radians, ratio) : psiMax * _math.degrees;
    };
    projection.ratio = function(_) {
        return arguments.length ? mutate(a, b, psiMax, ratio = +_) : ratio;
    };
    return projection.scale(180.739);
}
