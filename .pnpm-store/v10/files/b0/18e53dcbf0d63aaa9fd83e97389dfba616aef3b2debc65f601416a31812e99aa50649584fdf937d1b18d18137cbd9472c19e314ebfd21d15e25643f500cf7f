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
var _accessors = require("../accessors.js");
var _constant = /*#__PURE__*/ _interop_require_wildcard(require("../constant.js"));
var _lcg = /*#__PURE__*/ _interop_require_default(require("../lcg.js"));
var _siblings = require("./siblings.js");
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
function defaultRadius(d) {
    return Math.sqrt(d.value);
}
function _default() {
    var radius = null, dx = 1, dy = 1, padding = _constant.constantZero;
    function pack(root) {
        var random = (0, _lcg.default)();
        root.x = dx / 2, root.y = dy / 2;
        if (radius) {
            root.eachBefore(radiusLeaf(radius)).eachAfter(packChildrenRandom(padding, 0.5, random)).eachBefore(translateChild(1));
        } else {
            root.eachBefore(radiusLeaf(defaultRadius)).eachAfter(packChildrenRandom(_constant.constantZero, 1, random)).eachAfter(packChildrenRandom(padding, root.r / Math.min(dx, dy), random)).eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
        }
        return root;
    }
    pack.radius = function(x) {
        return arguments.length ? (radius = (0, _accessors.optional)(x), pack) : radius;
    };
    pack.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [
            dx,
            dy
        ];
    };
    pack.padding = function(x) {
        return arguments.length ? (padding = typeof x === "function" ? x : (0, _constant.default)(+x), pack) : padding;
    };
    return pack;
}
function radiusLeaf(radius) {
    return function(node) {
        if (!node.children) {
            node.r = Math.max(0, +radius(node) || 0);
        }
    };
}
function packChildrenRandom(padding, k, random) {
    return function(node) {
        if (children = node.children) {
            var children, i, n = children.length, r = padding(node) * k || 0, e;
            if (r) for(i = 0; i < n; ++i)children[i].r += r;
            e = (0, _siblings.packSiblingsRandom)(children, random);
            if (r) for(i = 0; i < n; ++i)children[i].r -= r;
            node.r = e + r;
        }
    };
}
function translateChild(k) {
    return function(node) {
        var parent = node.parent;
        node.r *= k;
        if (parent) {
            node.x = parent.x + k * node.x;
            node.y = parent.y + k * node.y;
        }
    };
}
