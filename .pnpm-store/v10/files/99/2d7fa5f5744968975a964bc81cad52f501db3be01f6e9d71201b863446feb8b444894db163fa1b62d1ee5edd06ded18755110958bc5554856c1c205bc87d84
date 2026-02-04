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
    boggsRaw: function() {
        return boggsRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _mollweide = require("./mollweide.js");
var _math = require("./math.js");
var k = 2.00276, w = 1.11072;
function boggsRaw(lambda, phi) {
    var theta = (0, _mollweide.mollweideBromleyTheta)(_math.pi, phi);
    return [
        k * lambda / (1 / (0, _math.cos)(phi) + w / (0, _math.cos)(theta)),
        (phi + _math.sqrt2 * (0, _math.sin)(theta)) / k
    ];
}
boggsRaw.invert = function(x, y) {
    var ky = k * y, theta = y < 0 ? -_math.quarterPi : _math.quarterPi, i = 25, delta, phi;
    do {
        phi = ky - _math.sqrt2 * (0, _math.sin)(theta);
        theta -= delta = ((0, _math.sin)(2 * theta) + 2 * theta - _math.pi * (0, _math.sin)(phi)) / (2 * (0, _math.cos)(2 * theta) + 2 + _math.pi * (0, _math.cos)(phi) * _math.sqrt2 * (0, _math.cos)(theta));
    }while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
    phi = ky - _math.sqrt2 * (0, _math.sin)(theta);
    return [
        x * (1 / (0, _math.cos)(phi) + w / (0, _math.cos)(theta)) / k,
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(boggsRaw).scale(160.857);
}
