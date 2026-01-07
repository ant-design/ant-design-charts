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
    timesRaw: function() {
        return timesRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function timesRaw(lambda, phi) {
    var t = (0, _math.tan)(phi / 2), s = (0, _math.sin)(_math.quarterPi * t);
    return [
        lambda * (0.74482 - 0.34588 * s * s),
        1.70711 * t
    ];
}
timesRaw.invert = function(x, y) {
    var t = y / 1.70711, s = (0, _math.sin)(_math.quarterPi * t);
    return [
        x / (0.74482 - 0.34588 * s * s),
        2 * (0, _math.atan)(t)
    ];
};
function _default() {
    return (0, _index.geoProjection)(timesRaw).scale(146.153);
}
