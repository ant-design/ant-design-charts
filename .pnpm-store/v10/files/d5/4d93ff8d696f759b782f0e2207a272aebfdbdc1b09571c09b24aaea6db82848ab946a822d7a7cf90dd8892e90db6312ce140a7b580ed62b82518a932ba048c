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
    collignonRaw: function() {
        return collignonRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function collignonRaw(lambda, phi) {
    var alpha = (0, _math.sqrt)(1 - (0, _math.sin)(phi));
    return [
        2 / _math.sqrtPi * lambda * alpha,
        _math.sqrtPi * (1 - alpha)
    ];
}
collignonRaw.invert = function(x, y) {
    var lambda = (lambda = y / _math.sqrtPi - 1) * lambda;
    return [
        lambda > 0 ? x * (0, _math.sqrt)(_math.pi / lambda) / 2 : 0,
        (0, _math.asin)(1 - lambda)
    ];
};
function _default() {
    return (0, _index.geoProjection)(collignonRaw).scale(95.6464).center([
        0,
        30
    ]);
}
