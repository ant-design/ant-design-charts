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
    eckert1Raw: function() {
        return eckert1Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function eckert1Raw(lambda, phi) {
    var alpha = (0, _math.sqrt)(8 / (3 * _math.pi));
    return [
        alpha * lambda * (1 - (0, _math.abs)(phi) / _math.pi),
        alpha * phi
    ];
}
eckert1Raw.invert = function(x, y) {
    var alpha = (0, _math.sqrt)(8 / (3 * _math.pi)), phi = y / alpha;
    return [
        x / (alpha * (1 - (0, _math.abs)(phi) / _math.pi)),
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(eckert1Raw).scale(165.664);
}
