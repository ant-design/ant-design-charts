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
    millerRaw: function() {
        return millerRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function millerRaw(lambda, phi) {
    return [
        lambda,
        1.25 * (0, _math.log)((0, _math.tan)(_math.quarterPi + 0.4 * phi))
    ];
}
millerRaw.invert = function(x, y) {
    return [
        x,
        2.5 * (0, _math.atan)((0, _math.exp)(0.8 * y)) - 0.625 * _math.pi
    ];
};
function _default() {
    return (0, _index.geoProjection)(millerRaw).scale(108.318);
}
