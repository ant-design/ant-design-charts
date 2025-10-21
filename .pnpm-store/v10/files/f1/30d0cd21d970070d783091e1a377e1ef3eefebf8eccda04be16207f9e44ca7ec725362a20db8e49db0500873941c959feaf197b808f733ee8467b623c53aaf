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
var _half = /*#__PURE__*/ _interop_require_default(require("./half.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(x, radius) {
    var data, x0 = this._x0, x1, x2, x3 = this._x1, halves = [], node = this._root, q, i;
    if (node) halves.push(new _half.default(node, x0, x3));
    if (radius == null) radius = Infinity;
    else {
        x0 = x - radius;
        x3 = x + radius;
    }
    while(q = halves.pop()){
        // Stop searching if this half can’t contain a closer node.
        if (!(node = q.node) || (x1 = q.x0) > x3 || (x2 = q.x1) < x0) continue;
        // Bisect the current half.
        if (node.length) {
            var xm = (x1 + x2) / 2;
            halves.push(new _half.default(node[1], xm, x2), new _half.default(node[0], x1, xm));
            // Visit the closest half first.
            if (i = +(x >= xm)) {
                q = halves[halves.length - 1];
                halves[halves.length - 1] = halves[halves.length - 1 - i];
                halves[halves.length - 1 - i] = q;
            }
        } else {
            var d = Math.abs(x - +this._x.call(null, node.data));
            if (d < radius) {
                radius = d;
                x0 = x - d;
                x3 = x + d;
                data = node.data;
            }
        }
    }
    return data;
}
