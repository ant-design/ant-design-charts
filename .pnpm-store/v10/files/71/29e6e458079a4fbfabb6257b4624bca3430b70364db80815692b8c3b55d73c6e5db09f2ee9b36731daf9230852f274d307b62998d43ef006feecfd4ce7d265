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
    azimuthalEquidistantRaw: function() {
        return azimuthalEquidistantRaw;
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
var azimuthalEquidistantRaw = (0, _azimuthal.azimuthalRaw)(function(c) {
    return (c = (0, _math.acos)(c)) && c / (0, _math.sin)(c);
});
azimuthalEquidistantRaw.invert = (0, _azimuthal.azimuthalInvert)(function(z) {
    return z;
});
function _default() {
    return (0, _index.default)(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}
