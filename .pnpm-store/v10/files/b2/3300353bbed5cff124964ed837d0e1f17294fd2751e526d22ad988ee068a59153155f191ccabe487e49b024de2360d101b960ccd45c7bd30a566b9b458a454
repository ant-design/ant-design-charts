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
    faheyRaw: function() {
        return faheyRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var faheyK = (0, _math.cos)(35 * _math.radians);
function faheyRaw(lambda, phi) {
    var t = (0, _math.tan)(phi / 2);
    return [
        lambda * faheyK * (0, _math.sqrt)(1 - t * t),
        (1 + faheyK) * t
    ];
}
faheyRaw.invert = function(x, y) {
    var t = y / (1 + faheyK);
    return [
        x && x / (faheyK * (0, _math.sqrt)(1 - t * t)),
        2 * (0, _math.atan)(t)
    ];
};
function _default() {
    return (0, _index.geoProjection)(faheyRaw).scale(137.152);
}
