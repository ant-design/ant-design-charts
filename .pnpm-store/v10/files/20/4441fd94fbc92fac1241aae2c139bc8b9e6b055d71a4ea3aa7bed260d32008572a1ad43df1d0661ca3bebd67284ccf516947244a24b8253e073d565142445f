"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.center = exports.justify = exports.right = exports.left = void 0;
const d3_array_1 = require("@antv/vendor/d3-array");
function targetDepth(d) {
    return d.target.depth;
}
function left(node) {
    return node.depth;
}
exports.left = left;
function right(node, n) {
    return n - 1 - node.height;
}
exports.right = right;
function justify(node, n) {
    return node.sourceLinks.length ? node.depth : n - 1;
}
exports.justify = justify;
function center(node) {
    return node.targetLinks.length
        ? node.depth
        : node.sourceLinks.length
            ? (0, d3_array_1.min)(node.sourceLinks, targetDepth) - 1
            : 0;
}
exports.center = center;
//# sourceMappingURL=align.js.map