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
    wagner7Raw: function() {
        return wagner7Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function wagner7Raw(lambda, phi) {
    var s = 0.90631 * (0, _math.sin)(phi), c0 = (0, _math.sqrt)(1 - s * s), c1 = (0, _math.sqrt)(2 / (1 + c0 * (0, _math.cos)(lambda /= 3)));
    return [
        2.66723 * c0 * c1 * (0, _math.sin)(lambda),
        1.24104 * s * c1
    ];
}
wagner7Raw.invert = function(x, y) {
    var t1 = x / 2.66723, t2 = y / 1.24104, p = (0, _math.sqrt)(t1 * t1 + t2 * t2), c = 2 * (0, _math.asin)(p / 2);
    return [
        3 * (0, _math.atan2)(x * (0, _math.tan)(c), 2.66723 * p),
        p && (0, _math.asin)(y * (0, _math.sin)(c) / (1.24104 * 0.90631 * p))
    ];
};
function _default() {
    return (0, _index.geoProjection)(wagner7Raw).scale(172.632);
}
