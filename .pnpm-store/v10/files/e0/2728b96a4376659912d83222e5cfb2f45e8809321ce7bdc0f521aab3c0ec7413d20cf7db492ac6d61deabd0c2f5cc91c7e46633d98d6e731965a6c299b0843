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
    bakerRaw: function() {
        return bakerRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var sqrt8 = (0, _math.sqrt)(8), phi0 = (0, _math.log)(1 + _math.sqrt2);
function bakerRaw(lambda, phi) {
    var phi0 = (0, _math.abs)(phi);
    return phi0 < _math.quarterPi ? [
        lambda,
        (0, _math.log)((0, _math.tan)(_math.quarterPi + phi / 2))
    ] : [
        lambda * (0, _math.cos)(phi0) * (2 * _math.sqrt2 - 1 / (0, _math.sin)(phi0)),
        (0, _math.sign)(phi) * (2 * _math.sqrt2 * (phi0 - _math.quarterPi) - (0, _math.log)((0, _math.tan)(phi0 / 2)))
    ];
}
bakerRaw.invert = function(x, y) {
    if ((y0 = (0, _math.abs)(y)) < phi0) return [
        x,
        2 * (0, _math.atan)((0, _math.exp)(y)) - _math.halfPi
    ];
    var phi = _math.quarterPi, i = 25, delta, y0;
    do {
        var cosPhi_2 = (0, _math.cos)(phi / 2), tanPhi_2 = (0, _math.tan)(phi / 2);
        phi -= delta = (sqrt8 * (phi - _math.quarterPi) - (0, _math.log)(tanPhi_2) - y0) / (sqrt8 - cosPhi_2 * cosPhi_2 / (2 * tanPhi_2));
    }while ((0, _math.abs)(delta) > _math.epsilon2 && --i > 0);
    return [
        x / ((0, _math.cos)(phi) * (sqrt8 - 1 / (0, _math.sin)(phi))),
        (0, _math.sign)(y) * phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(bakerRaw).scale(112.314);
}
