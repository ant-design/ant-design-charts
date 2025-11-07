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
function _default(z) {
    var strength = (0, _constant.default)(0.1), nodes, strengths, zz;
    if (typeof z !== "function") z = (0, _constant.default)(z == null ? 0 : +z);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i){
            node = nodes[i], node.vz += (zz[i] - node.z) * strengths[i] * alpha;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        zz = new Array(n);
        for(i = 0; i < n; ++i){
            strengths[i] = isNaN(zz[i] = +z(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
        }
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant.default)(+_), initialize(), force) : strength;
    };
    force.z = function(_) {
        return arguments.length ? (z = typeof _ === "function" ? _ : (0, _constant.default)(+_), initialize(), force) : z;
    };
    return force;
}
