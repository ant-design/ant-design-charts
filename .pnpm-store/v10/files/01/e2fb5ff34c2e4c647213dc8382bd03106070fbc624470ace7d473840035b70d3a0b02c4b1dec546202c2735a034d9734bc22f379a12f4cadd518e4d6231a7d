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
    blob: function() {
        return _blob.default;
    },
    buffer: function() {
        return _buffer.default;
    },
    csv: function() {
        return _dsv.csv;
    },
    dsv: function() {
        return _dsv.default;
    },
    html: function() {
        return _xml.html;
    },
    image: function() {
        return _image.default;
    },
    json: function() {
        return _json.default;
    },
    svg: function() {
        return _xml.svg;
    },
    text: function() {
        return _text.default;
    },
    tsv: function() {
        return _dsv.tsv;
    },
    xml: function() {
        return _xml.default;
    }
});
var _blob = /*#__PURE__*/ _interop_require_default(require("./blob.js"));
var _buffer = /*#__PURE__*/ _interop_require_default(require("./buffer.js"));
var _dsv = /*#__PURE__*/ _interop_require_wildcard(require("./dsv.js"));
var _image = /*#__PURE__*/ _interop_require_default(require("./image.js"));
var _json = /*#__PURE__*/ _interop_require_default(require("./json.js"));
var _text = /*#__PURE__*/ _interop_require_default(require("./text.js"));
var _xml = /*#__PURE__*/ _interop_require_wildcard(require("./xml.js"));
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
