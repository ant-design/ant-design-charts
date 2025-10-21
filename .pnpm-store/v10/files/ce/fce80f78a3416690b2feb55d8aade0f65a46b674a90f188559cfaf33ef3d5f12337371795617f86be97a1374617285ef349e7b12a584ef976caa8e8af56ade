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
    azimuthalEqualAreaRaw: function() {
        return azimuthalEqualAreaRaw;
    },
    default: function() {
        return _default;
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
var azimuthalEqualAreaRaw = (0, _azimuthal.azimuthalRaw)(function(cxcy) {
    return (0, _math.sqrt)(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = (0, _azimuthal.azimuthalInvert)(function(z) {
    return 2 * (0, _math.asin)(z / 2);
});
function _default() {
    return (0, _index.default)(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
}
