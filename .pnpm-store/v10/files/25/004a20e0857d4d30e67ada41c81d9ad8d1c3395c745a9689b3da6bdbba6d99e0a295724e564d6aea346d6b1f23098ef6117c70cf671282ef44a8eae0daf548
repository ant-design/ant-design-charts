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
    cylindricalStereographicRaw: function() {
        return cylindricalStereographicRaw;
    },
    default: function() {
        return _default;
    }
});
var _math = require("./math.js");
var _parallel1 = /*#__PURE__*/ _interop_require_default(require("./parallel1.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function cylindricalStereographicRaw(phi0) {
    var cosPhi0 = (0, _math.cos)(phi0);
    function forward(lambda, phi) {
        return [
            lambda * cosPhi0,
            (1 + cosPhi0) * (0, _math.tan)(phi / 2)
        ];
    }
    forward.invert = function(x, y) {
        return [
            x / cosPhi0,
            (0, _math.atan)(y / (1 + cosPhi0)) * 2
        ];
    };
    return forward;
}
function _default() {
    return (0, _parallel1.default)(cylindricalStereographicRaw).scale(124.75);
}
