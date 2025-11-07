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
var _round = /*#__PURE__*/ _interop_require_default(require("./round.js"));
var _squarify = /*#__PURE__*/ _interop_require_default(require("./squarify.js"));
var _accessors = require("../accessors.js");
var _constant = /*#__PURE__*/ _interop_require_wildcard(require("../constant.js"));
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
function _default() {
    var tile = _squarify.default, round = false, dx = 1, dy = 1, paddingStack = [
        0
    ], paddingInner = _constant.constantZero, paddingTop = _constant.constantZero, paddingRight = _constant.constantZero, paddingBottom = _constant.constantZero, paddingLeft = _constant.constantZero;
    function treemap(root) {
        root.x0 = root.y0 = 0;
        root.x1 = dx;
        root.y1 = dy;
        root.eachBefore(positionNode);
        paddingStack = [
            0
        ];
        if (round) root.eachBefore(_round.default);
        return root;
    }
    function positionNode(node) {
        var p = paddingStack[node.depth], x0 = node.x0 + p, y0 = node.y0 + p, x1 = node.x1 - p, y1 = node.y1 - p;
        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
        node.x0 = x0;
        node.y0 = y0;
        node.x1 = x1;
        node.y1 = y1;
        if (node.children) {
            p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
            x0 += paddingLeft(node) - p;
            y0 += paddingTop(node) - p;
            x1 -= paddingRight(node) - p;
            y1 -= paddingBottom(node) - p;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            tile(node, x0, y0, x1, y1);
        }
    }
    treemap.round = function(x) {
        return arguments.length ? (round = !!x, treemap) : round;
    };
    treemap.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [
            dx,
            dy
        ];
    };
    treemap.tile = function(x) {
        return arguments.length ? (tile = (0, _accessors.required)(x), treemap) : tile;
    };
    treemap.padding = function(x) {
        return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
    };
    treemap.paddingInner = function(x) {
        return arguments.length ? (paddingInner = typeof x === "function" ? x : (0, _constant.default)(+x), treemap) : paddingInner;
    };
    treemap.paddingOuter = function(x) {
        return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
    };
    treemap.paddingTop = function(x) {
        return arguments.length ? (paddingTop = typeof x === "function" ? x : (0, _constant.default)(+x), treemap) : paddingTop;
    };
    treemap.paddingRight = function(x) {
        return arguments.length ? (paddingRight = typeof x === "function" ? x : (0, _constant.default)(+x), treemap) : paddingRight;
    };
    treemap.paddingBottom = function(x) {
        return arguments.length ? (paddingBottom = typeof x === "function" ? x : (0, _constant.default)(+x), treemap) : paddingBottom;
    };
    treemap.paddingLeft = function(x) {
        return arguments.length ? (paddingLeft = typeof x === "function" ? x : (0, _constant.default)(+x), treemap) : paddingLeft;
    };
    return treemap;
}
