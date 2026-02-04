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
function _default(y) {
    var strength = (0, _constant.default)(0.1), nodes, strengths, yz;
    if (typeof y !== "function") y = (0, _constant.default)(y == null ? 0 : +y);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i){
            node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        yz = new Array(n);
        for(i = 0; i < n; ++i){
            strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
        }
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant.default)(+_), initialize(), force) : strength;
    };
    force.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, _constant.default)(+_), initialize(), force) : y;
    };
    return force;
}
