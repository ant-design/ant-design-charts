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
var _accessors = require("./accessors.js");
var _index = require("./hierarchy/index.js");
var preroot = {
    depth: -1
}, ambiguous = {}, imputed = {};
function defaultId(d) {
    return d.id;
}
function defaultParentId(d) {
    return d.parentId;
}
function _default() {
    var id = defaultId, parentId = defaultParentId, path;
    function stratify(data) {
        var nodes = Array.from(data), currentId = id, currentParentId = parentId, n, d, i, root, parent, node, nodeId, nodeKey, nodeByKey = new Map;
        if (path != null) {
            var I = nodes.map(function(d, i) {
                return normalize(path(d, i, data));
            });
            var P = I.map(parentof);
            var S = new Set(I).add("");
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = P[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var i1 = _step.value;
                    if (!S.has(i1)) {
                        S.add(i1);
                        I.push(i1);
                        P.push(parentof(i1));
                        nodes.push(imputed);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            currentId = function(_, i) {
                return I[i];
            };
            currentParentId = function(_, i) {
                return P[i];
            };
        }
        for(i = 0, n = nodes.length; i < n; ++i){
            d = nodes[i], node = nodes[i] = new _index.Node(d);
            if ((nodeId = currentId(d, i, data)) != null && (nodeId += "")) {
                nodeKey = node.id = nodeId;
                nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
            }
            if ((nodeId = currentParentId(d, i, data)) != null && (nodeId += "")) {
                node.parent = nodeId;
            }
        }
        for(i = 0; i < n; ++i){
            node = nodes[i];
            if (nodeId = node.parent) {
                parent = nodeByKey.get(nodeId);
                if (!parent) throw new Error("missing: " + nodeId);
                if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
                if (parent.children) parent.children.push(node);
                else parent.children = [
                    node
                ];
                node.parent = parent;
            } else {
                if (root) throw new Error("multiple roots");
                root = node;
            }
        }
        if (!root) throw new Error("no root");
        // When imputing internal nodes, only introduce roots if needed.
        // Then replace the imputed marker data with null.
        if (path != null) {
            while(root.data === imputed && root.children.length === 1){
                root = root.children[0], --n;
            }
            for(var i2 = nodes.length - 1; i2 >= 0; --i2){
                node = nodes[i2];
                if (node.data !== imputed) break;
                node.data = null;
            }
        }
        root.parent = preroot;
        root.eachBefore(function(node) {
            node.depth = node.parent.depth + 1;
            --n;
        }).eachBefore(_index.computeHeight);
        root.parent = null;
        if (n > 0) throw new Error("cycle");
        return root;
    }
    stratify.id = function(x) {
        return arguments.length ? (id = (0, _accessors.optional)(x), stratify) : id;
    };
    stratify.parentId = function(x) {
        return arguments.length ? (parentId = (0, _accessors.optional)(x), stratify) : parentId;
    };
    stratify.path = function(x) {
        return arguments.length ? (path = (0, _accessors.optional)(x), stratify) : path;
    };
    return stratify;
}
// To normalize a path, we coerce to a string, strip the trailing slash if any
// (as long as the trailing slash is not immediately preceded by another slash),
// and add leading slash if missing.
function normalize(path) {
    path = "".concat(path);
    var i = path.length;
    if (slash(path, i - 1) && !slash(path, i - 2)) path = path.slice(0, -1);
    return path[0] === "/" ? path : "/".concat(path);
}
// Walk backwards to find the first slash that is not the leading slash, e.g.:
// "/foo/bar" ⇥ "/foo", "/foo" ⇥ "/", "/" ↦ "". (The root is special-cased
// because the id of the root must be a truthy value.)
function parentof(path) {
    var i = path.length;
    if (i < 2) return "";
    while(--i > 1)if (slash(path, i)) break;
    return path.slice(0, i);
}
// Slashes can be escaped; to determine whether a slash is a path delimiter, we
// count the number of preceding backslashes escaping the forward slash: an odd
// number indicates an escaped forward slash.
function slash(path, i) {
    if (path[i] === "/") {
        var k = 0;
        while(i > 0 && path[--i] === "\\")++k;
        if ((k & 1) === 0) return true;
    }
    return false;
}
