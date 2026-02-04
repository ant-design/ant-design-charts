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
var _index = require("../../d3-binarytree/src/index.js");
var _index1 = require("../../d3-quadtree/src/index.js");
var _index2 = require("../../d3-octree/src/index.js");
var _constant = /*#__PURE__*/ _interop_require_default(require("./constant.js"));
var _jiggle = /*#__PURE__*/ _interop_require_default(require("./jiggle.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function x(d) {
    return d.x + d.vx;
}
function y(d) {
    return d.y + d.vy;
}
function z(d) {
    return d.z + d.vz;
}
function _default(radius) {
    var nodes, nDim, radii, random, strength = 1, iterations = 1;
    if (typeof radius !== "function") radius = (0, _constant.default)(radius == null ? 1 : +radius);
    function force() {
        var i, n = nodes.length, tree, node, xi, yi, zi, ri, ri2;
        for(var k = 0; k < iterations; ++k){
            tree = (nDim === 1 ? (0, _index.binarytree)(nodes, x) : nDim === 2 ? (0, _index1.quadtree)(nodes, x, y) : nDim === 3 ? (0, _index2.octree)(nodes, x, y, z) : null).visitAfter(prepare);
            for(i = 0; i < n; ++i){
                node = nodes[i];
                ri = radii[node.index], ri2 = ri * ri;
                xi = node.x + node.vx;
                if (nDim > 1) {
                    yi = node.y + node.vy;
                }
                if (nDim > 2) {
                    zi = node.z + node.vz;
                }
                tree.visit(apply);
            }
        }
        function apply(treeNode, arg1, arg2, arg3, arg4, arg5, arg6) {
            var args = [
                arg1,
                arg2,
                arg3,
                arg4,
                arg5,
                arg6
            ];
            var x0 = args[0], y0 = args[1], z0 = args[2], x1 = args[nDim], y1 = args[nDim + 1], z1 = args[nDim + 2];
            var data = treeNode.data, rj = treeNode.r, r = ri + rj;
            if (data) {
                if (data.index > node.index) {
                    var _$x = xi - data.x - data.vx, _$y = nDim > 1 ? yi - data.y - data.vy : 0, _$z = nDim > 2 ? zi - data.z - data.vz : 0, l = _$x * _$x + _$y * _$y + _$z * _$z;
                    if (l < r * r) {
                        if (_$x === 0) _$x = (0, _jiggle.default)(random), l += _$x * _$x;
                        if (nDim > 1 && _$y === 0) _$y = (0, _jiggle.default)(random), l += _$y * _$y;
                        if (nDim > 2 && _$z === 0) _$z = (0, _jiggle.default)(random), l += _$z * _$z;
                        l = (r - (l = Math.sqrt(l))) / l * strength;
                        node.vx += (_$x *= l) * (r = (rj *= rj) / (ri2 + rj));
                        if (nDim > 1) {
                            node.vy += (_$y *= l) * r;
                        }
                        if (nDim > 2) {
                            node.vz += (_$z *= l) * r;
                        }
                        data.vx -= _$x * (r = 1 - r);
                        if (nDim > 1) {
                            data.vy -= _$y * r;
                        }
                        if (nDim > 2) {
                            data.vz -= _$z * r;
                        }
                    }
                }
                return;
            }
            return x0 > xi + r || x1 < xi - r || nDim > 1 && (y0 > yi + r || y1 < yi - r) || nDim > 2 && (z0 > zi + r || z1 < zi - r);
        }
    }
    function prepare(treeNode) {
        if (treeNode.data) return treeNode.r = radii[treeNode.data.index];
        for(var i = treeNode.r = 0; i < Math.pow(2, nDim); ++i){
            if (treeNode[i] && treeNode[i].r > treeNode.r) {
                treeNode.r = treeNode[i].r;
            }
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        radii = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
    force.initialize = function(_nodes) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        nodes = _nodes;
        random = args.find(function(arg) {
            return typeof arg === 'function';
        }) || Math.random;
        nDim = args.find(function(arg) {
            return [
                1,
                2,
                3
            ].includes(arg);
        }) || 2;
        initialize();
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constant.default)(+_), initialize(), force) : radius;
    };
    return force;
}
