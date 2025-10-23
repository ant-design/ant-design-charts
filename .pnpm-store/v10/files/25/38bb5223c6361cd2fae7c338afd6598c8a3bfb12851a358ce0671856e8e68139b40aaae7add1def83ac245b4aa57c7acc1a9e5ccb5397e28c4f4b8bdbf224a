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
    polyconicRaw: function() {
        return polyconicRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function polyconicRaw(lambda, phi) {
    if ((0, _math.abs)(phi) < _math.epsilon) return [
        lambda,
        0
    ];
    var tanPhi = (0, _math.tan)(phi), k = lambda * (0, _math.sin)(phi);
    return [
        (0, _math.sin)(k) / tanPhi,
        phi + (1 - (0, _math.cos)(k)) / tanPhi
    ];
}
polyconicRaw.invert = function(x, y) {
    if ((0, _math.abs)(y) < _math.epsilon) return [
        x,
        0
    ];
    var k = x * x + y * y, phi = y * 0.5, i = 10, delta;
    do {
        var tanPhi = (0, _math.tan)(phi), secPhi = 1 / (0, _math.cos)(phi), j = k - 2 * y * phi + phi * phi;
        phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
    }while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
    tanPhi = (0, _math.tan)(phi);
    return [
        ((0, _math.abs)(y) < (0, _math.abs)(phi + 1 / tanPhi) ? (0, _math.asin)(x * tanPhi) : (0, _math.sign)(y) * (0, _math.sign)(x) * ((0, _math.acos)((0, _math.abs)(x * tanPhi)) + _math.halfPi)) / (0, _math.sin)(phi),
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(polyconicRaw).scale(103.74);
}
