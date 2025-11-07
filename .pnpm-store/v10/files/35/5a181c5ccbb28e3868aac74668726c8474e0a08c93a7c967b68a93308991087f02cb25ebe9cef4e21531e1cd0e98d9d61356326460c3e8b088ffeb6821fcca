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
    hammerRaw: function() {
        return hammerRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function hammerRaw(A, B) {
    if (arguments.length < 2) B = A;
    if (B === 1) return _index.geoAzimuthalEqualAreaRaw;
    if (B === Infinity) return hammerQuarticAuthalicRaw;
    function forward(lambda, phi) {
        var coordinates = (0, _index.geoAzimuthalEqualAreaRaw)(lambda / B, phi);
        coordinates[0] *= A;
        return coordinates;
    }
    forward.invert = function(x, y) {
        var coordinates = _index.geoAzimuthalEqualAreaRaw.invert(x / A, y);
        coordinates[0] *= B;
        return coordinates;
    };
    return forward;
}
function hammerQuarticAuthalicRaw(lambda, phi) {
    return [
        lambda * (0, _math.cos)(phi) / (0, _math.cos)(phi /= 2),
        2 * (0, _math.sin)(phi)
    ];
}
hammerQuarticAuthalicRaw.invert = function(x, y) {
    var phi = 2 * (0, _math.asin)(y / 2);
    return [
        x * (0, _math.cos)(phi / 2) / (0, _math.cos)(phi),
        phi
    ];
};
function _default() {
    var B = 2, m = (0, _index.geoProjectionMutator)(hammerRaw), p = m(B);
    p.coefficient = function(_) {
        if (!arguments.length) return B;
        return m(B = +_);
    };
    return p.scale(169.529);
}
