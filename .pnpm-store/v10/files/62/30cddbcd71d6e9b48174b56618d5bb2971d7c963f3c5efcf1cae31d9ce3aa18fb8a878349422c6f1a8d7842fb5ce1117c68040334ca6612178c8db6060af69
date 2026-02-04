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
    rectangularPolyconicRaw: function() {
        return rectangularPolyconicRaw;
    }
});
var _math = require("./math.js");
var _parallel1 = /*#__PURE__*/ _interop_require_default(require("./parallel1.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function rectangularPolyconicRaw(phi0) {
    var sinPhi0 = (0, _math.sin)(phi0);
    function forward(lambda, phi) {
        var A = sinPhi0 ? (0, _math.tan)(lambda * sinPhi0 / 2) / sinPhi0 : lambda / 2;
        if (!phi) return [
            2 * A,
            -phi0
        ];
        var E = 2 * (0, _math.atan)(A * (0, _math.sin)(phi)), cotPhi = 1 / (0, _math.tan)(phi);
        return [
            (0, _math.sin)(E) * cotPhi,
            phi + (1 - (0, _math.cos)(E)) * cotPhi - phi0
        ];
    }
    // TODO return null for points outside outline.
    forward.invert = function(x, y) {
        if ((0, _math.abs)(y += phi0) < _math.epsilon) return [
            sinPhi0 ? 2 * (0, _math.atan)(sinPhi0 * x / 2) / sinPhi0 : x,
            0
        ];
        var k = x * x + y * y, phi = 0, i = 10, delta;
        do {
            var tanPhi = (0, _math.tan)(phi), secPhi = 1 / (0, _math.cos)(phi), j = k - 2 * y * phi + phi * phi;
            phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
        }while ((0, _math.abs)(delta) > _math.epsilon && --i > 0);
        var E = x * (tanPhi = (0, _math.tan)(phi)), A = (0, _math.tan)((0, _math.abs)(y) < (0, _math.abs)(phi + 1 / tanPhi) ? (0, _math.asin)(E) * 0.5 : (0, _math.acos)(E) * 0.5 + _math.pi / 4) / (0, _math.sin)(phi);
        return [
            sinPhi0 ? 2 * (0, _math.atan)(sinPhi0 * A) / sinPhi0 : 2 * A,
            phi
        ];
    };
    return forward;
}
function _default() {
    return (0, _parallel1.default)(rectangularPolyconicRaw).scale(131.215);
}
