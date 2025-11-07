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
    eckert2Raw: function() {
        return eckert2Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function eckert2Raw(lambda, phi) {
    var alpha = (0, _math.sqrt)(4 - 3 * (0, _math.sin)((0, _math.abs)(phi)));
    return [
        2 / (0, _math.sqrt)(6 * _math.pi) * lambda * alpha,
        (0, _math.sign)(phi) * (0, _math.sqrt)(2 * _math.pi / 3) * (2 - alpha)
    ];
}
eckert2Raw.invert = function(x, y) {
    var alpha = 2 - (0, _math.abs)(y) / (0, _math.sqrt)(2 * _math.pi / 3);
    return [
        x * (0, _math.sqrt)(6 * _math.pi) / (2 * alpha),
        (0, _math.sign)(y) * (0, _math.asin)((4 - alpha * alpha) / 3)
    ];
};
function _default() {
    return (0, _index.geoProjection)(eckert2Raw).scale(165.664);
}
