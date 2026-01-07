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
    littrowRaw: function() {
        return littrowRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function littrowRaw(lambda, phi) {
    return [
        (0, _math.sin)(lambda) / (0, _math.cos)(phi),
        (0, _math.tan)(phi) * (0, _math.cos)(lambda)
    ];
}
littrowRaw.invert = function(x, y) {
    var x2 = x * x, y2 = y * y, y2_1 = y2 + 1, x2_y2_1 = x2 + y2_1, cosPhi = x ? _math.sqrt1_2 * (0, _math.sqrt)((x2_y2_1 - (0, _math.sqrt)(x2_y2_1 * x2_y2_1 - 4 * x2)) / x2) : 1 / (0, _math.sqrt)(y2_1);
    return [
        (0, _math.asin)(x * cosPhi),
        (0, _math.sign)(y) * (0, _math.acos)(cosPhi)
    ];
};
function _default() {
    return (0, _index.geoProjection)(littrowRaw).scale(144.049).clipAngle(90 - 1e-3);
}
