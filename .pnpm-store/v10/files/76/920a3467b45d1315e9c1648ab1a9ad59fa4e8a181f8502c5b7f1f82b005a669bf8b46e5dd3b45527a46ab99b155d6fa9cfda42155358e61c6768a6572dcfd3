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
    isoFormat: function() {
        return _isoFormat.default;
    },
    isoParse: function() {
        return _isoParse.default;
    },
    timeFormat: function() {
        return _defaultLocale.timeFormat;
    },
    timeFormatDefaultLocale: function() {
        return _defaultLocale.default;
    },
    timeFormatLocale: function() {
        return _locale.default;
    },
    timeParse: function() {
        return _defaultLocale.timeParse;
    },
    utcFormat: function() {
        return _defaultLocale.utcFormat;
    },
    utcParse: function() {
        return _defaultLocale.utcParse;
    }
});
var _defaultLocale = /*#__PURE__*/ _interop_require_wildcard(require("./defaultLocale.js"));
var _locale = /*#__PURE__*/ _interop_require_default(require("./locale.js"));
var _isoFormat = /*#__PURE__*/ _interop_require_default(require("./isoFormat.js"));
var _isoParse = /*#__PURE__*/ _interop_require_default(require("./isoParse.js"));
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
