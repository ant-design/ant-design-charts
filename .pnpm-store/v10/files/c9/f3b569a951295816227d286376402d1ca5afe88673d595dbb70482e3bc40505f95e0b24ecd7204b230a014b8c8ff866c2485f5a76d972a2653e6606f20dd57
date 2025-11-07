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
    nellHammerRaw: function() {
        return nellHammerRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function nellHammerRaw(lambda, phi) {
    return [
        lambda * (1 + (0, _math.cos)(phi)) / 2,
        2 * (phi - (0, _math.tan)(phi / 2))
    ];
}
nellHammerRaw.invert = function(x, y) {
    var p = y / 2;
    for(var i = 0, delta = Infinity; i < 10 && (0, _math.abs)(delta) > _math.epsilon; ++i){
        var c = (0, _math.cos)(y / 2);
        y -= delta = (y - (0, _math.tan)(y / 2) - p) / (1 - 0.5 / (c * c));
    }
    return [
        2 * x / (1 + (0, _math.cos)(y)),
        y
    ];
};
function _default() {
    return (0, _index.geoProjection)(nellHammerRaw).scale(152.63);
}
