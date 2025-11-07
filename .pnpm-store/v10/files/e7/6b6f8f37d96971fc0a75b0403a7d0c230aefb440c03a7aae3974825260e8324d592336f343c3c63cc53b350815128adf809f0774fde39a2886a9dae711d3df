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
    orthographicRaw: function() {
        return orthographicRaw;
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
function orthographicRaw(x, y) {
    return [
        (0, _math.cos)(y) * (0, _math.sin)(x),
        (0, _math.sin)(y)
    ];
}
orthographicRaw.invert = (0, _azimuthal.azimuthalInvert)(_math.asin);
function _default() {
    return (0, _index.default)(orthographicRaw).scale(249.5).clipAngle(90 + _math.epsilon);
}
