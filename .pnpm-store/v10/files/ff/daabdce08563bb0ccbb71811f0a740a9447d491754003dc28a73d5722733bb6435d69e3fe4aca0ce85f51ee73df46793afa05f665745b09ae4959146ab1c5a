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
    cubehelixLong: function() {
        return cubehelixLong;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-color/src/index.js");
var _color = /*#__PURE__*/ _interop_require_wildcard(require("./color.js"));
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
function cubehelix(hue) {
    return function cubehelixGamma(y) {
        y = +y;
        function cubehelix(start, end) {
            var h = hue((start = (0, _index.cubehelix)(start)).h, (end = (0, _index.cubehelix)(end)).h), s = (0, _color.default)(start.s, end.s), l = (0, _color.default)(start.l, end.l), opacity = (0, _color.default)(start.opacity, end.opacity);
            return function(t) {
                start.h = h(t);
                start.s = s(t);
                start.l = l(Math.pow(t, y));
                start.opacity = opacity(t);
                return start + "";
            };
        }
        cubehelix.gamma = cubehelixGamma;
        return cubehelix;
    }(1);
}
var _default = cubehelix(_color.hue);
var cubehelixLong = cubehelix(_color.default);
