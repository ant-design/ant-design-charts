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
    naturalEarth1Raw: function() {
        return naturalEarth1Raw;
    }
});
var _index = /*#__PURE__*/ _interop_require_default(require("./index.js"));
var _math = require("../math.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function naturalEarth1Raw(lambda, phi) {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    return [
        lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
        phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
    ];
}
naturalEarth1Raw.invert = function(x, y) {
    var phi = y, i = 25, delta;
    do {
        var phi2 = phi * phi, phi4 = phi2 * phi2;
        phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
    }while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
    return [
        x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
        phi
    ];
};
function _default() {
    return (0, _index.default)(naturalEarth1Raw).scale(175.295);
}
