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
    augustRaw: function() {
        return augustRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function augustRaw(lambda, phi) {
    var tanPhi = (0, _math.tan)(phi / 2), k = (0, _math.sqrt)(1 - tanPhi * tanPhi), c = 1 + k * (0, _math.cos)(lambda /= 2), x = (0, _math.sin)(lambda) * k / c, y = tanPhi / c, x2 = x * x, y2 = y * y;
    return [
        4 / 3 * x * (3 + x2 - 3 * y2),
        4 / 3 * y * (3 + 3 * x2 - y2)
    ];
}
augustRaw.invert = function(x, y) {
    x *= 3 / 8, y *= 3 / 8;
    if (!x && (0, _math.abs)(y) > 1) return null;
    var x2 = x * x, y2 = y * y, s = 1 + x2 + y2, sin3Eta = (0, _math.sqrt)((s - (0, _math.sqrt)(s * s - 4 * y * y)) / 2), eta = (0, _math.asin)(sin3Eta) / 3, xi = sin3Eta ? (0, _math.arcosh)((0, _math.abs)(y / sin3Eta)) / 3 : (0, _math.arsinh)((0, _math.abs)(x)) / 3, cosEta = (0, _math.cos)(eta), coshXi = (0, _math.cosh)(xi), d = coshXi * coshXi - cosEta * cosEta;
    return [
        (0, _math.sign)(x) * 2 * (0, _math.atan2)((0, _math.sinh)(xi) * cosEta, 0.25 - d),
        (0, _math.sign)(y) * 2 * (0, _math.atan2)(coshXi * (0, _math.sin)(eta), 0.25 + d)
    ];
};
function _default() {
    return (0, _index.geoProjection)(augustRaw).scale(66.1603);
}
