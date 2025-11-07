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
    mtFlatPolarQuarticRaw: function() {
        return mtFlatPolarQuarticRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function mtFlatPolarQuarticRaw(lambda, phi) {
    var k = (1 + _math.sqrt1_2) * (0, _math.sin)(phi), theta = phi;
    for(var i = 0, delta; i < 25; i++){
        theta -= delta = ((0, _math.sin)(theta / 2) + (0, _math.sin)(theta) - k) / (0.5 * (0, _math.cos)(theta / 2) + (0, _math.cos)(theta));
        if ((0, _math.abs)(delta) < _math.epsilon) break;
    }
    return [
        lambda * (1 + 2 * (0, _math.cos)(theta) / (0, _math.cos)(theta / 2)) / (3 * _math.sqrt2),
        2 * (0, _math.sqrt)(3) * (0, _math.sin)(theta / 2) / (0, _math.sqrt)(2 + _math.sqrt2)
    ];
}
mtFlatPolarQuarticRaw.invert = function(x, y) {
    var sinTheta_2 = y * (0, _math.sqrt)(2 + _math.sqrt2) / (2 * (0, _math.sqrt)(3)), theta = 2 * (0, _math.asin)(sinTheta_2);
    return [
        3 * _math.sqrt2 * x / (1 + 2 * (0, _math.cos)(theta) / (0, _math.cos)(theta / 2)),
        (0, _math.asin)((sinTheta_2 + (0, _math.sin)(theta)) / (1 + _math.sqrt1_2))
    ];
};
function _default() {
    return (0, _index.geoProjection)(mtFlatPolarQuarticRaw).scale(188.209);
}
