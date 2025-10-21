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
    Node: function() {
        return Node;
    },
    computeHeight: function() {
        return computeHeight;
    },
    default: function() {
        return hierarchy;
    }
});
var _count = /*#__PURE__*/ _interop_require_default(require("./count.js"));
var _each = /*#__PURE__*/ _interop_require_default(require("./each.js"));
var _eachBefore = /*#__PURE__*/ _interop_require_default(require("./eachBefore.js"));
var _eachAfter = /*#__PURE__*/ _interop_require_default(require("./eachAfter.js"));
var _find = /*#__PURE__*/ _interop_require_default(require("./find.js"));
var _sum = /*#__PURE__*/ _interop_require_default(require("./sum.js"));
var _sort = /*#__PURE__*/ _interop_require_default(require("./sort.js"));
var _path = /*#__PURE__*/ _interop_require_default(require("./path.js"));
var _ancestors = /*#__PURE__*/ _interop_require_default(require("./ancestors.js"));
var _descendants = /*#__PURE__*/ _interop_require_default(require("./descendants.js"));
var _leaves = /*#__PURE__*/ _interop_require_default(require("./leaves.js"));
var _links = /*#__PURE__*/ _interop_require_default(require("./links.js"));
var _iterator = /*#__PURE__*/ _interop_require_default(require("./iterator.js"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function hierarchy(data, children) {
    if (_instanceof(data, Map)) {
        data = [
            undefined,
            data
        ];
        if (children === undefined) children = mapChildren;
    } else if (children === undefined) {
        children = objectChildren;
    }
    var root = new Node(data), node, nodes = [
        root
    ], child, childs, i, n;
    while(node = nodes.pop()){
        if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
            node.children = childs;
            for(i = n - 1; i >= 0; --i){
                nodes.push(child = childs[i] = new Node(childs[i]));
                child.parent = node;
                child.depth = node.depth + 1;
            }
        }
    }
    return root.eachBefore(computeHeight);
}
function node_copy() {
    return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
    return d.children;
}
function mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
}
function computeHeight(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
}
Node.prototype = hierarchy.prototype = _define_property({
    constructor: Node,
    count: _count.default,
    each: _each.default,
    eachAfter: _eachAfter.default,
    eachBefore: _eachBefore.default,
    find: _find.default,
    sum: _sum.default,
    sort: _sort.default,
    path: _path.default,
    ancestors: _ancestors.default,
    descendants: _descendants.default,
    leaves: _leaves.default,
    links: _links.default,
    copy: node_copy
}, Symbol.iterator, _iterator.default);
