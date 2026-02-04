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
    eckert5Raw: function() {
        return eckert5Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function eckert5Raw(lambda, phi) {
    return [
        lambda * (1 + (0, _math.cos)(phi)) / (0, _math.sqrt)(2 + _math.pi),
        2 * phi / (0, _math.sqrt)(2 + _math.pi)
    ];
}
eckert5Raw.invert = function(x, y) {
    var k = (0, _math.sqrt)(2 + _math.pi), phi = y * k / 2;
    return [
        k * x / (1 + (0, _math.cos)(phi)),
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(eckert5Raw).scale(173.044);
}
