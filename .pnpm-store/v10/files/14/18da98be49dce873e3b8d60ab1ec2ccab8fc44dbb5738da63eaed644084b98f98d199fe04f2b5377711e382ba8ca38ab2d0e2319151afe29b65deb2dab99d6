"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return thresholdFreedmanDiaconis;
    }
});
var _count = /*#__PURE__*/ _interop_require_default(require("../count.js"));
var _quantile = /*#__PURE__*/ _interop_require_default(require("../quantile.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function thresholdFreedmanDiaconis(values, min, max) {
    var c = (0, _count.default)(values), d = (0, _quantile.default)(values, 0.75) - (0, _quantile.default)(values, 0.25);
    return c && d ? Math.ceil((max - min) / (2 * d * Math.pow(c, -1 / 3))) : 1;
}
