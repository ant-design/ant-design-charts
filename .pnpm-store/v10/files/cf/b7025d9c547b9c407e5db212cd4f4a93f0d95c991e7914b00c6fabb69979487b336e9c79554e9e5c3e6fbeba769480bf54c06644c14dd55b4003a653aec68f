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
    sinusoidalRaw: function() {
        return sinusoidalRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function sinusoidalRaw(lambda, phi) {
    return [
        lambda * (0, _math.cos)(phi),
        phi
    ];
}
sinusoidalRaw.invert = function(x, y) {
    return [
        x / (0, _math.cos)(y),
        y
    ];
};
function _default() {
    return (0, _index.geoProjection)(sinusoidalRaw).scale(152.63);
}
