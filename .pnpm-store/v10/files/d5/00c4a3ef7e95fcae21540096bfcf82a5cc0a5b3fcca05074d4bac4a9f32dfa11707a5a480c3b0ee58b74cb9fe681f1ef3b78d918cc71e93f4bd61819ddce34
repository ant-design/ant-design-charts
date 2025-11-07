"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _formatDecimal = /*#__PURE__*/ _interop_require_default(require("./formatDecimal.js"));
var _formatPrefixAuto = /*#__PURE__*/ _interop_require_default(require("./formatPrefixAuto.js"));
var _formatRounded = /*#__PURE__*/ _interop_require_default(require("./formatRounded.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = {
    "%": function(x, p) {
        return (x * 100).toFixed(p);
    },
    "b": function(x) {
        return Math.round(x).toString(2);
    },
    "c": function(x) {
        return x + "";
    },
    "d": _formatDecimal.default,
    "e": function(x, p) {
        return x.toExponential(p);
    },
    "f": function(x, p) {
        return x.toFixed(p);
    },
    "g": function(x, p) {
        return x.toPrecision(p);
    },
    "o": function(x) {
        return Math.round(x).toString(8);
    },
    "p": function(x, p) {
        return (0, _formatRounded.default)(x * 100, p);
    },
    "r": _formatRounded.default,
    "s": _formatPrefixAuto.default,
    "X": function(x) {
        return Math.round(x).toString(16).toUpperCase();
    },
    "x": function(x) {
        return Math.round(x).toString(16);
    }
};
