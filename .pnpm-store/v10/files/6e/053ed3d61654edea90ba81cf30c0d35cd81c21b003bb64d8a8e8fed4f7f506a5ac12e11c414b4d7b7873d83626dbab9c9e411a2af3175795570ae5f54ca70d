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
    mtFlatPolarParabolicRaw: function() {
        return mtFlatPolarParabolicRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var sqrt6 = (0, _math.sqrt)(6), sqrt7 = (0, _math.sqrt)(7);
function mtFlatPolarParabolicRaw(lambda, phi) {
    var theta = (0, _math.asin)(7 * (0, _math.sin)(phi) / (3 * sqrt6));
    return [
        sqrt6 * lambda * (2 * (0, _math.cos)(2 * theta / 3) - 1) / sqrt7,
        9 * (0, _math.sin)(theta / 3) / sqrt7
    ];
}
mtFlatPolarParabolicRaw.invert = function(x, y) {
    var theta = 3 * (0, _math.asin)(y * sqrt7 / 9);
    return [
        x * sqrt7 / (sqrt6 * (2 * (0, _math.cos)(2 * theta / 3) - 1)),
        (0, _math.asin)((0, _math.sin)(theta) * 3 * sqrt6 / 7)
    ];
};
function _default() {
    return (0, _index.geoProjection)(mtFlatPolarParabolicRaw).scale(164.859);
}
