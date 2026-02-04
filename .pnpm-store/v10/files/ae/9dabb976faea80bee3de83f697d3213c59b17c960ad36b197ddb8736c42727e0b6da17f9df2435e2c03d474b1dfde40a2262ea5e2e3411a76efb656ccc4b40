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
    foucautRaw: function() {
        return foucautRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function foucautRaw(lambda, phi) {
    var k = phi / 2, cosk = (0, _math.cos)(k);
    return [
        2 * lambda / _math.sqrtPi * (0, _math.cos)(phi) * cosk * cosk,
        _math.sqrtPi * (0, _math.tan)(k)
    ];
}
foucautRaw.invert = function(x, y) {
    var k = (0, _math.atan)(y / _math.sqrtPi), cosk = (0, _math.cos)(k), phi = 2 * k;
    return [
        x * _math.sqrtPi / 2 / ((0, _math.cos)(phi) * cosk * cosk),
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(foucautRaw).scale(135.264);
}
