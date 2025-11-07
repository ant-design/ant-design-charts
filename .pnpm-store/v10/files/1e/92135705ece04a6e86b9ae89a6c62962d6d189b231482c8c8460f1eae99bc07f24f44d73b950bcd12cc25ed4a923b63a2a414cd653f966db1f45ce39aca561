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
function _default(x, y) {
    var nodes, strength = 1;
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force() {
        var i, n = nodes.length, node, sx = 0, sy = 0;
        for(i = 0; i < n; ++i){
            node = nodes[i], sx += node.x, sy += node.y;
        }
        for(sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0; i < n; ++i){
            node = nodes[i], node.x -= sx, node.y -= sy;
        }
    }
    force.initialize = function(_) {
        nodes = _;
    };
    force.x = function(_) {
        return arguments.length ? (x = +_, force) : x;
    };
    force.y = function(_) {
        return arguments.length ? (y = +_, force) : y;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    return force;
}
