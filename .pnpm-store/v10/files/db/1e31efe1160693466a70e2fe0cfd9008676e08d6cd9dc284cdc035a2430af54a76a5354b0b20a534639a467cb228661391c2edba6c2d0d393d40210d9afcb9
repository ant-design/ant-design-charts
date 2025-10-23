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
var _index = require("../../d3-quadtree/src/index.js");
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
function _default(radius) {
    var nodes, radii, random, strength = 1, iterations = 1;
    if (typeof radius !== "function") radius = (0, _constant.default)(radius == null ? 1 : +radius);
    function force() {
        var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
        for(var k = 0; k < iterations; ++k){
            tree = (0, _index.quadtree)(nodes, x, y).visitAfter(prepare);
            for(i = 0; i < n; ++i){
                node = nodes[i];
                ri = radii[node.index], ri2 = ri * ri;
                xi = node.x + node.vx;
                yi = node.y + node.vy;
                tree.visit(apply);
            }
        }
        function apply(quad, x0, y0, x1, y1) {
            var data = quad.data, rj = quad.r, r = ri + rj;
            if (data) {
                if (data.index > node.index) {
                    var _$x = xi - data.x - data.vx, _$y = yi - data.y - data.vy, l = _$x * _$x + _$y * _$y;
                    if (l < r * r) {
                        if (_$x === 0) _$x = (0, _jiggle.default)(random), l += _$x * _$x;
                        if (_$y === 0) _$y = (0, _jiggle.default)(random), l += _$y * _$y;
                        l = (r - (l = Math.sqrt(l))) / l * strength;
                        node.vx += (_$x *= l) * (r = (rj *= rj) / (ri2 + rj));
                        node.vy += (_$y *= l) * r;
                        data.vx -= _$x * (r = 1 - r);
                        data.vy -= _$y * r;
                    }
                }
                return;
            }
            return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
        }
    }
    function prepare(quad) {
        if (quad.data) return quad.r = radii[quad.data.index];
        for(var i = quad.r = 0; i < 4; ++i){
            if (quad[i] && quad[i].r > quad.r) {
                quad.r = quad[i].r;
            }
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        radii = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
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
