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
    crasterRaw: function() {
        return crasterRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var sqrt3 = (0, _math.sqrt)(3);
function crasterRaw(lambda, phi) {
    return [
        sqrt3 * lambda * (2 * (0, _math.cos)(2 * phi / 3) - 1) / _math.sqrtPi,
        sqrt3 * _math.sqrtPi * (0, _math.sin)(phi / 3)
    ];
}
crasterRaw.invert = function(x, y) {
    var phi = 3 * (0, _math.asin)(y / (sqrt3 * _math.sqrtPi));
    return [
        _math.sqrtPi * x / (sqrt3 * (2 * (0, _math.cos)(2 * phi / 3) - 1)),
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(crasterRaw).scale(156.19);
}
