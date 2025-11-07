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
    eckert6Raw: function() {
        return eckert6Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function eckert6Raw(lambda, phi) {
    var k = (1 + _math.halfPi) * (0, _math.sin)(phi);
    for(var i = 0, delta = Infinity; i < 10 && (0, _math.abs)(delta) > _math.epsilon; i++){
        phi -= delta = (phi + (0, _math.sin)(phi) - k) / (1 + (0, _math.cos)(phi));
    }
    k = (0, _math.sqrt)(2 + _math.pi);
    return [
        lambda * (1 + (0, _math.cos)(phi)) / k,
        2 * phi / k
    ];
}
eckert6Raw.invert = function(x, y) {
    var j = 1 + _math.halfPi, k = (0, _math.sqrt)(j / 2);
    return [
        x * 2 * k / (1 + (0, _math.cos)(y *= k)),
        (0, _math.asin)((y + (0, _math.sin)(y)) / j)
    ];
};
function _default() {
    return (0, _index.geoProjection)(eckert6Raw).scale(173.044);
}
