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
    wagner6Raw: function() {
        return wagner6Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function wagner6Raw(lambda, phi) {
    return [
        lambda * (0, _math.sqrt)(1 - 3 * phi * phi / (_math.pi * _math.pi)),
        phi
    ];
}
wagner6Raw.invert = function(x, y) {
    return [
        x / (0, _math.sqrt)(1 - 3 * y * y / (_math.pi * _math.pi)),
        y
    ];
};
function _default() {
    return (0, _index.geoProjection)(wagner6Raw).scale(152.63);
}
