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
    azimuthalInvert: function() {
        return azimuthalInvert;
    },
    azimuthalRaw: function() {
        return azimuthalRaw;
    }
});
var _math = require("../math.js");
function azimuthalRaw(scale) {
    return function(x, y) {
        var cx = (0, _math.cos)(x), cy = (0, _math.cos)(y), k = scale(cx * cy);
        if (k === Infinity) return [
            2,
            0
        ];
        return [
            k * cy * (0, _math.sin)(x),
            k * (0, _math.sin)(y)
        ];
    };
}
function azimuthalInvert(angle) {
    return function(x, y) {
        var z = (0, _math.sqrt)(x * x + y * y), c = angle(z), sc = (0, _math.sin)(c), cc = (0, _math.cos)(c);
        return [
            (0, _math.atan2)(x * sc, z * cc),
            (0, _math.asin)(z && y * sc / z)
        ];
    };
}
