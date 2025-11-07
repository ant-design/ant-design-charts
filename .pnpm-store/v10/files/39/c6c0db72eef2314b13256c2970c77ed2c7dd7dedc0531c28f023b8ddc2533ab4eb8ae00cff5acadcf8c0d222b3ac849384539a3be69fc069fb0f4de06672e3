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
var _round = /*#__PURE__*/ _interop_require_default(require("./treemap/round.js"));
var _dice = /*#__PURE__*/ _interop_require_default(require("./treemap/dice.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default() {
    var dx = 1, dy = 1, padding = 0, round = false;
    function partition(root) {
        var n = root.height + 1;
        root.x0 = root.y0 = padding;
        root.x1 = dx;
        root.y1 = dy / n;
        root.eachBefore(positionNode(dy, n));
        if (round) root.eachBefore(_round.default);
        return root;
    }
    function positionNode(dy, n) {
        return function(node) {
            if (node.children) {
                (0, _dice.default)(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
            }
            var x0 = node.x0, y0 = node.y0, x1 = node.x1 - padding, y1 = node.y1 - padding;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            node.x0 = x0;
            node.y0 = y0;
            node.x1 = x1;
            node.y1 = y1;
        };
    }
    partition.round = function(x) {
        return arguments.length ? (round = !!x, partition) : round;
    };
    partition.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [
            dx,
            dy
        ];
    };
    partition.padding = function(x) {
        return arguments.length ? (padding = +x, partition) : padding;
    };
    return partition;
}
