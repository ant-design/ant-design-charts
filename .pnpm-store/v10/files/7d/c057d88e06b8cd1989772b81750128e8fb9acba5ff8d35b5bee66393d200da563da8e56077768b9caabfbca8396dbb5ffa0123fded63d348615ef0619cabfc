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
    gnomonicRaw: function() {
        return gnomonicRaw;
    }
});
var _math = require("../math.js");
var _azimuthal = require("./azimuthal.js");
var _index = /*#__PURE__*/ _interop_require_default(require("./index.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function gnomonicRaw(x, y) {
    var cy = (0, _math.cos)(y), k = (0, _math.cos)(x) * cy;
    return [
        cy * (0, _math.sin)(x) / k,
        (0, _math.sin)(y) / k
    ];
}
gnomonicRaw.invert = (0, _azimuthal.azimuthalInvert)(_math.atan);
function _default() {
    return (0, _index.default)(gnomonicRaw).scale(144.049).clipAngle(60);
}
