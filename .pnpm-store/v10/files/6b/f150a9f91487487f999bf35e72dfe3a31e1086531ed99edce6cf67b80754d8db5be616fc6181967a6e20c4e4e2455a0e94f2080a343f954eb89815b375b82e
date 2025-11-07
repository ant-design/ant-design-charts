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
    eckert3Raw: function() {
        return eckert3Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function eckert3Raw(lambda, phi) {
    var k = (0, _math.sqrt)(_math.pi * (4 + _math.pi));
    return [
        2 / k * lambda * (1 + (0, _math.sqrt)(1 - 4 * phi * phi / (_math.pi * _math.pi))),
        4 / k * phi
    ];
}
eckert3Raw.invert = function(x, y) {
    var k = (0, _math.sqrt)(_math.pi * (4 + _math.pi)) / 2;
    return [
        x * k / (1 + (0, _math.sqrt)(1 - y * y * (4 + _math.pi) / (4 * _math.pi))),
        y * k / 2
    ];
};
function _default() {
    return (0, _index.geoProjection)(eckert3Raw).scale(180.739);
}
