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
        return defaultLocale;
    },
    format: function() {
        return format;
    },
    formatPrefix: function() {
        return formatPrefix;
    }
});
var _locale = /*#__PURE__*/ _interop_require_default(require("./locale.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function defaultLocale(definition) {
    locale = (0, _locale.default)(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
}
