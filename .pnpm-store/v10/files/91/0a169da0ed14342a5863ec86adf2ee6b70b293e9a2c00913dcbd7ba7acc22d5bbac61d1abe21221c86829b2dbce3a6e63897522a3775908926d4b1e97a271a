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
    eckert4Raw: function() {
        return eckert4Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function eckert4Raw(lambda, phi) {
    var k = (2 + _math.halfPi) * (0, _math.sin)(phi);
    phi /= 2;
    for(var i = 0, delta = Infinity; i < 10 && (0, _math.abs)(delta) > _math.epsilon; i++){
        var cosPhi = (0, _math.cos)(phi);
        phi -= delta = (phi + (0, _math.sin)(phi) * (cosPhi + 2) - k) / (2 * cosPhi * (1 + cosPhi));
    }
    return [
        2 / (0, _math.sqrt)(_math.pi * (4 + _math.pi)) * lambda * (1 + (0, _math.cos)(phi)),
        2 * (0, _math.sqrt)(_math.pi / (4 + _math.pi)) * (0, _math.sin)(phi)
    ];
}
eckert4Raw.invert = function(x, y) {
    var A = y * (0, _math.sqrt)((4 + _math.pi) / _math.pi) / 2, k = (0, _math.asin)(A), c = (0, _math.cos)(k);
    return [
        x / (2 / (0, _math.sqrt)(_math.pi * (4 + _math.pi)) * (1 + c)),
        (0, _math.asin)((k + A * (c + 2)) / (2 + _math.halfPi))
    ];
};
function _default() {
    return (0, _index.geoProjection)(eckert4Raw).scale(180.739);
}
