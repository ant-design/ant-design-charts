"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return thresholdScott;
    }
});
var _count = /*#__PURE__*/ _interop_require_default(require("../count.js"));
var _deviation = /*#__PURE__*/ _interop_require_default(require("../deviation.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function thresholdScott(values, min, max) {
    var c = (0, _count.default)(values), d = (0, _deviation.default)(values);
    return c && d ? Math.ceil((max - min) * Math.cbrt(c) / (3.49 * d)) : 1;
}
