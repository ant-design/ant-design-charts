"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.left = left;
exports.right = right;
exports.justify = justify;
exports.center = center;
const d3_array_1 = require("@antv/vendor/d3-array");
function targetDepth(d) {
    return d.target.depth;
}
function left(node) {
    return node.depth;
}
function right(node, n) {
    return n - 1 - node.height;
}
function justify(node, n) {
    return node.sourceLinks.length ? node.depth : n - 1;
}
function center(node) {
    return node.targetLinks.length
        ? node.depth
        : node.sourceLinks.length
            ? (0, d3_array_1.min)(node.sourceLinks, targetDepth) - 1
            : 0;
}
//# sourceMappingURL=align.js.map