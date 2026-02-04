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
function _default(callback) {
    var halves = [], q, node = this._root, child, x0, x1;
    if (node) halves.push(new _half.default(node, this._x0, this._x1));
    while(q = halves.pop()){
        if (!callback(node = q.node, x0 = q.x0, x1 = q.x1) && node.length) {
            var xm = (x0 + x1) / 2;
            if (child = node[1]) halves.push(new _half.default(child, xm, x1));
            if (child = node[0]) halves.push(new _half.default(child, x0, xm));
        }
    }
    return this;
}
