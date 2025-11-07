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
    naturalEarth2Raw: function() {
        return naturalEarth2Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function naturalEarth2Raw(lambda, phi) {
    var phi2 = phi * phi, phi4 = phi2 * phi2, phi6 = phi2 * phi4;
    return [
        lambda * (0.84719 - 0.13063 * phi2 + phi6 * phi6 * (-0.04515 + 0.05494 * phi2 - 0.02326 * phi4 + 0.00331 * phi6)),
        phi * (1.01183 + phi4 * phi4 * (-0.02625 + 0.01926 * phi2 - 0.00396 * phi4))
    ];
}
naturalEarth2Raw.invert = function(x, y) {
    var phi = y, i = 25, delta, phi2, phi4, phi6;
    do {
        phi2 = phi * phi;
        phi4 = phi2 * phi2;
        phi -= delta = (phi * (1.01183 + phi4 * phi4 * (-0.02625 + 0.01926 * phi2 - 0.00396 * phi4)) - y) / (1.01183 + phi4 * phi4 * (9 * -0.02625 + 11 * 0.01926 * phi2 + 13 * -0.00396 * phi4));
    }while ((0, _math.abs)(delta) > _math.epsilon2 && --i > 0);
    phi2 = phi * phi;
    phi4 = phi2 * phi2;
    phi6 = phi2 * phi4;
    return [
        x / (0.84719 - 0.13063 * phi2 + phi6 * phi6 * (-0.04515 + 0.05494 * phi2 - 0.02326 * phi4 + 0.00331 * phi6)),
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(naturalEarth2Raw).scale(175.295);
}
