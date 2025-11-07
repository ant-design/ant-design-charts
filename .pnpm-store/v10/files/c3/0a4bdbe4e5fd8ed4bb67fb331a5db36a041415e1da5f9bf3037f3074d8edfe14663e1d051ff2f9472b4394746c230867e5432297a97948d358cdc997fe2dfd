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
    mollweideBromleyRaw: function() {
        return mollweideBromleyRaw;
    },
    mollweideBromleyTheta: function() {
        return mollweideBromleyTheta;
    },
    mollweideRaw: function() {
        return mollweideRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function mollweideBromleyTheta(cp, phi) {
    var cpsinPhi = cp * (0, _math.sin)(phi), i = 30, delta;
    do phi -= delta = (phi + (0, _math.sin)(phi) - cpsinPhi) / (1 + (0, _math.cos)(phi));
    while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
    return phi / 2;
}
function mollweideBromleyRaw(cx, cy, cp) {
    function forward(lambda, phi) {
        return [
            cx * lambda * (0, _math.cos)(phi = mollweideBromleyTheta(cp, phi)),
            cy * (0, _math.sin)(phi)
        ];
    }
    forward.invert = function(x, y) {
        return y = (0, _math.asin)(y / cy), [
            x / (cx * (0, _math.cos)(y)),
            (0, _math.asin)((2 * y + (0, _math.sin)(2 * y)) / cp)
        ];
    };
    return forward;
}
var mollweideRaw = mollweideBromleyRaw(_math.sqrt2 / _math.halfPi, _math.sqrt2, _math.pi);
function _default() {
    return (0, _index.geoProjection)(mollweideRaw).scale(169.529);
}
