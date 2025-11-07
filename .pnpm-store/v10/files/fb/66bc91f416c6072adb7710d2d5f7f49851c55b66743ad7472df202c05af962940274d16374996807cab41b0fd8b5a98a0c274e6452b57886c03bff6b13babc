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
    wagner4Raw: function() {
        return wagner4Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _mollweide = require("./mollweide.js");
var A = 4 * _math.pi + 3 * (0, _math.sqrt)(3), B = 2 * (0, _math.sqrt)(2 * _math.pi * (0, _math.sqrt)(3) / A);
var wagner4Raw = (0, _mollweide.mollweideBromleyRaw)(B * (0, _math.sqrt)(3) / _math.pi, B, A / 6);
function _default() {
    return (0, _index.geoProjection)(wagner4Raw).scale(176.84);
}
