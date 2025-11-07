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
    FormatSpecifier: function() {
        return _formatSpecifier.FormatSpecifier;
    },
    format: function() {
        return _defaultLocale.format;
    },
    formatDefaultLocale: function() {
        return _defaultLocale.default;
    },
    formatLocale: function() {
        return _locale.default;
    },
    formatPrefix: function() {
        return _defaultLocale.formatPrefix;
    },
    formatSpecifier: function() {
        return _formatSpecifier.default;
    },
    precisionFixed: function() {
        return _precisionFixed.default;
    },
    precisionPrefix: function() {
        return _precisionPrefix.default;
    },
    precisionRound: function() {
        return _precisionRound.default;
    }
});
var _defaultLocale = /*#__PURE__*/ _interop_require_wildcard(require("./defaultLocale.js"));
var _locale = /*#__PURE__*/ _interop_require_default(require("./locale.js"));
var _formatSpecifier = /*#__PURE__*/ _interop_require_wildcard(require("./formatSpecifier.js"));
var _precisionFixed = /*#__PURE__*/ _interop_require_default(require("./precisionFixed.js"));
var _precisionPrefix = /*#__PURE__*/ _interop_require_default(require("./precisionPrefix.js"));
var _precisionRound = /*#__PURE__*/ _interop_require_default(require("./precisionRound.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
