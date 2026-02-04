"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return binarytree;
    }
});
var _add = /*#__PURE__*/ _interop_require_wildcard(require("./add.js"));
var _cover = /*#__PURE__*/ _interop_require_default(require("./cover.js"));
var _data = /*#__PURE__*/ _interop_require_default(require("./data.js"));
var _extent = /*#__PURE__*/ _interop_require_default(require("./extent.js"));
var _find = /*#__PURE__*/ _interop_require_default(require("./find.js"));
var _remove = /*#__PURE__*/ _interop_require_wildcard(require("./remove.js"));
var _root = /*#__PURE__*/ _interop_require_default(require("./root.js"));
var _size = /*#__PURE__*/ _interop_require_default(require("./size.js"));
var _visit = /*#__PURE__*/ _interop_require_default(require("./visit.js"));
var _visitAfter = /*#__PURE__*/ _interop_require_default(require("./visitAfter.js"));
var _x = /*#__PURE__*/ _interop_require_wildcard(require("./x.js"));
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
function binarytree(nodes, x) {
    var tree = new Binarytree(x == null ? _x.defaultX : x, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
}
function Binarytree(x, x0, x1) {
    this._x = x;
    this._x0 = x0;
    this._x1 = x1;
    this._root = undefined;
}
function leaf_copy(leaf) {
    var copy = {
        data: leaf.data
    }, next = copy;
    while(leaf = leaf.next)next = next.next = {
        data: leaf.data
    };
    return copy;
}
var treeProto = binarytree.prototype = Binarytree.prototype;
treeProto.copy = function() {
    var copy = new Binarytree(this._x, this._x0, this._x1), node = this._root, nodes, child;
    if (!node) return copy;
    if (!node.length) return copy._root = leaf_copy(node), copy;
    nodes = [
        {
            source: node,
            target: copy._root = new Array(2)
        }
    ];
    while(node = nodes.pop()){
        for(var i = 0; i < 2; ++i){
            if (child = node.source[i]) {
                if (child.length) nodes.push({
                    source: child,
                    target: node.target[i] = new Array(2)
                });
                else node.target[i] = leaf_copy(child);
            }
        }
    }
    return copy;
};
treeProto.add = _add.default;
treeProto.addAll = _add.addAll;
treeProto.cover = _cover.default;
treeProto.data = _data.default;
treeProto.extent = _extent.default;
treeProto.find = _find.default;
treeProto.remove = _remove.default;
treeProto.removeAll = _remove.removeAll;
treeProto.root = _root.default;
treeProto.size = _size.default;
treeProto.visit = _visit.default;
treeProto.visitAfter = _visitAfter.default;
treeProto.x = _x.default;
