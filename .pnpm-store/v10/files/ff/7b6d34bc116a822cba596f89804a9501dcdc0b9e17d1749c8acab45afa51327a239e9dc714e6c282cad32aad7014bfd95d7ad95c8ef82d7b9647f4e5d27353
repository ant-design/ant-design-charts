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
    addAll: function() {
        return addAll;
    },
    default: function() {
        return _default;
    }
});
function _default(d) {
    var x = +this._x.call(null, d);
    return add(this.cover(x), x, d);
}
function add(tree, x, d) {
    if (isNaN(x)) return tree; // ignore invalid points
    var parent, node = tree._root, leaf = {
        data: d
    }, x0 = tree._x0, x1 = tree._x1, xm, xp, right, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;
    // Find the existing leaf for the new point, or add it.
    while(node.length){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (parent = node, !(node = node[i = +right])) return parent[i] = leaf, tree;
    }
    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    if (x === xp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
    // Otherwise, split the leaf node until the old and new point are separated.
    do {
        parent = parent ? parent[i] = new Array(2) : tree._root = new Array(2);
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
    }while ((i = +right) === (j = +(xp >= xm)));
    return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
    if (!Array.isArray(data)) data = Array.from(data);
    var n = data.length;
    var xz = new Float64Array(n);
    var x0 = Infinity, x1 = -Infinity;
    // Compute the points and their extent.
    for(var i = 0, x; i < n; ++i){
        if (isNaN(x = +this._x.call(null, data[i]))) continue;
        xz[i] = x;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
    }
    // If there were no (valid) points, abort.
    if (x0 > x1) return this;
    // Expand the tree to cover the new points.
    this.cover(x0).cover(x1);
    // Add the new points.
    for(var i1 = 0; i1 < n; ++i1){
        add(this, xz[i1], data[i1]);
    }
    return this;
}
