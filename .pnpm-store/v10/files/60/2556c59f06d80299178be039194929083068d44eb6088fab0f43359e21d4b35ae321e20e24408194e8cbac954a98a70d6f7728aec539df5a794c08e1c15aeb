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
    ginzburg8Raw: function() {
        return ginzburg8Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function ginzburg8Raw(lambda, phi) {
    var lambda2 = lambda * lambda, phi2 = phi * phi;
    return [
        lambda * (1 - 0.162388 * phi2) * (0.87 - 0.000952426 * lambda2 * lambda2),
        phi * (1 + phi2 / 12)
    ];
}
ginzburg8Raw.invert = function(x, y) {
    var lambda = x, phi = y, i = 50, delta;
    do {
        var phi2 = phi * phi;
        phi -= delta = (phi * (1 + phi2 / 12) - y) / (1 + phi2 / 4);
    }while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
    i = 50;
    x /= 1 - 0.162388 * phi2;
    do {
        var lambda4 = (lambda4 = lambda * lambda) * lambda4;
        lambda -= delta = (lambda * (0.87 - 0.000952426 * lambda4) - x) / (0.87 - 0.00476213 * lambda4);
    }while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
    return [
        lambda,
        phi
    ];
};
function _default() {
    return (0, _index.geoProjection)(ginzburg8Raw).scale(131.747);
}
