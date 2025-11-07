"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return octree;
    }
});
var _add = /*#__PURE__*/ _interop_require_wildcard(require("./add.js"));
var _cover = /*#__PURE__*/ _interop_require_default(require("./cover.js"));
var _data = /*#__PURE__*/ _interop_require_default(require("./data.js"));
var _extent = /*#__PURE__*/ _interop_require_default(require("./extent.js"));
var _find = /*#__PURE__*/ _interop_require_default(require("./find.js"));
var _findAll = require("./findAll.js");
var _remove = /*#__PURE__*/ _interop_require_wildcard(require("./remove.js"));
var _root = /*#__PURE__*/ _interop_require_default(require("./root.js"));
var _size = /*#__PURE__*/ _interop_require_default(require("./size.js"));
var _visit = /*#__PURE__*/ _interop_require_default(require("./visit.js"));
var _visitAfter = /*#__PURE__*/ _interop_require_default(require("./visitAfter.js"));
var _x = /*#__PURE__*/ _interop_require_wildcard(require("./x.js"));
var _y = /*#__PURE__*/ _interop_require_wildcard(require("./y.js"));
var _z = /*#__PURE__*/ _interop_require_wildcard(require("./z.js"));
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
function octree(nodes, x, y, z) {
    var tree = new Octree(x == null ? _x.defaultX : x, y == null ? _y.defaultY : y, z == null ? _z.defaultZ : z, NaN, NaN, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
}
function Octree(x, y, z, x0, y0, z0, x1, y1, z1) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._x0 = x0;
    this._y0 = y0;
    this._z0 = z0;
    this._x1 = x1;
    this._y1 = y1;
    this._z1 = z1;
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
var treeProto = octree.prototype = Octree.prototype;
treeProto.copy = function() {
    var copy = new Octree(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), node = this._root, nodes, child;
    if (!node) return copy;
    if (!node.length) return copy._root = leaf_copy(node), copy;
    nodes = [
        {
            source: node,
            target: copy._root = new Array(8)
        }
    ];
    while(node = nodes.pop()){
        for(var i = 0; i < 8; ++i){
            if (child = node.source[i]) {
                if (child.length) nodes.push({
                    source: child,
                    target: node.target[i] = new Array(8)
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
treeProto.findAllWithinRadius = _findAll.findAllWithinRadius;
treeProto.remove = _remove.default;
treeProto.removeAll = _remove.removeAll;
treeProto.root = _root.default;
treeProto.size = _size.default;
treeProto.visit = _visit.default;
treeProto.visitAfter = _visitAfter.default;
treeProto.x = _x.default;
treeProto.y = _y.default;
treeProto.z = _z.default;
