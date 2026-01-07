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
    kavrayskiy7Raw: function() {
        return kavrayskiy7Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function kavrayskiy7Raw(lambda, phi) {
    return [
        3 / _math.tau * lambda * (0, _math.sqrt)(_math.pi * _math.pi / 3 - phi * phi),
        phi
    ];
}
kavrayskiy7Raw.invert = function(x, y) {
    return [
        _math.tau / 3 * x / (0, _math.sqrt)(_math.pi * _math.pi / 3 - y * y),
        y
    ];
};
function _default() {
    return (0, _index.geoProjection)(kavrayskiy7Raw).scale(158.837);
}
