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
    mtFlatPolarSinusoidalRaw: function() {
        return mtFlatPolarSinusoidalRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function mtFlatPolarSinusoidalRaw(lambda, phi) {
    var A = (0, _math.sqrt)(6 / (4 + _math.pi)), k = (1 + _math.pi / 4) * (0, _math.sin)(phi), theta = phi / 2;
    for(var i = 0, delta; i < 25; i++){
        theta -= delta = (theta / 2 + (0, _math.sin)(theta) - k) / (0.5 + (0, _math.cos)(theta));
        if ((0, _math.abs)(delta) < _math.epsilon) break;
    }
    return [
        A * (0.5 + (0, _math.cos)(theta)) * lambda / 1.5,
        A * theta
    ];
}
mtFlatPolarSinusoidalRaw.invert = function(x, y) {
    var A = (0, _math.sqrt)(6 / (4 + _math.pi)), theta = y / A;
    if ((0, _math.abs)((0, _math.abs)(theta) - _math.halfPi) < _math.epsilon) theta = theta < 0 ? -_math.halfPi : _math.halfPi;
    return [
        1.5 * x / (A * (0.5 + (0, _math.cos)(theta))),
        (0, _math.asin)((theta / 2 + (0, _math.sin)(theta)) / (1 + _math.pi / 4))
    ];
};
function _default() {
    return (0, _index.geoProjection)(mtFlatPolarSinusoidalRaw).scale(166.518);
}
