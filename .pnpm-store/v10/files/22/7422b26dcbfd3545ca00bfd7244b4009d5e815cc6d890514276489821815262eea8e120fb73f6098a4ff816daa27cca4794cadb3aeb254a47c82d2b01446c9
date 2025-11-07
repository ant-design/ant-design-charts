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
var _constant = /*#__PURE__*/ _interop_require_default(require("./constant.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(radius, x, y) {
    var nodes, strength = (0, _constant.default)(0.1), strengths, radiuses;
    if (typeof radius !== "function") radius = (0, _constant.default)(+radius);
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force(alpha) {
        for(var i = 0, n = nodes.length; i < n; ++i){
            var node = nodes[i], dx = node.x - x || 1e-6, dy = node.y - y || 1e-6, r = Math.sqrt(dx * dx + dy * dy), k = (radiuses[i] - r) * strengths[i] * alpha / r;
            node.vx += dx * k;
            node.vy += dy * k;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        radiuses = new Array(n);
        for(i = 0; i < n; ++i){
            radiuses[i] = +radius(nodes[i], i, nodes);
            strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
        }
    }
    force.initialize = function(_) {
        nodes = _, initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant.default)(+_), initialize(), force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constant.default)(+_), initialize(), force) : radius;
    };
    force.x = function(_) {
        return arguments.length ? (x = +_, force) : x;
    };
    force.y = function(_) {
        return arguments.length ? (y = +_, force) : y;
    };
    return force;
}
