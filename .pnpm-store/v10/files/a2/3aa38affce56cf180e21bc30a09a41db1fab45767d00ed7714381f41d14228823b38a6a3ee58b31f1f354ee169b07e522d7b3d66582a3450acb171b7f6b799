"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    x: function() {
        return x;
    },
    y: function() {
        return y;
    },
    z: function() {
        return z;
    }
});
var _index = require("../../d3-dispatch/src/index.js");
var _index1 = require("../../d3-timer/src/index.js");
var _lcg = /*#__PURE__*/ _interop_require_default(require("./lcg.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var MAX_DIMENSIONS = 3;
function x(d) {
    return d.x;
}
function y(d) {
    return d.y;
}
function z(d) {
    return d.z;
}
var initialRadius = 10, initialAngleRoll = Math.PI * (3 - Math.sqrt(5)), initialAngleYaw = Math.PI * 20 / (9 + Math.sqrt(221)); // Markov irrational number
function _default(nodes, numDimensions) {
    numDimensions = numDimensions || 2;
    var nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(numDimensions))), simulation, alpha = 1, alphaMin = 0.001, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = new Map(), stepper = (0, _index1.timer)(step), event = (0, _index.dispatch)("tick", "end"), random = (0, _lcg.default)();
    if (nodes == null) nodes = [];
    function step() {
        tick();
        event.call("tick", simulation);
        if (alpha < alphaMin) {
            stepper.stop();
            event.call("end", simulation);
        }
    }
    function tick(iterations) {
        var i, n = nodes.length, node;
        if (iterations === undefined) iterations = 1;
        for(var k = 0; k < iterations; ++k){
            alpha += (alphaTarget - alpha) * alphaDecay;
            forces.forEach(function(force) {
                force(alpha);
            });
            for(i = 0; i < n; ++i){
                node = nodes[i];
                if (node.fx == null) node.x += node.vx *= velocityDecay;
                else node.x = node.fx, node.vx = 0;
                if (nDim > 1) {
                    if (node.fy == null) node.y += node.vy *= velocityDecay;
                    else node.y = node.fy, node.vy = 0;
                }
                if (nDim > 2) {
                    if (node.fz == null) node.z += node.vz *= velocityDecay;
                    else node.z = node.fz, node.vz = 0;
                }
            }
        }
        return simulation;
    }
    function initializeNodes() {
        for(var i = 0, n = nodes.length, node; i < n; ++i){
            node = nodes[i], node.index = i;
            if (node.fx != null) node.x = node.fx;
            if (node.fy != null) node.y = node.fy;
            if (node.fz != null) node.z = node.fz;
            if (isNaN(node.x) || nDim > 1 && isNaN(node.y) || nDim > 2 && isNaN(node.z)) {
                var radius = initialRadius * (nDim > 2 ? Math.cbrt(0.5 + i) : nDim > 1 ? Math.sqrt(0.5 + i) : i), rollAngle = i * initialAngleRoll, yawAngle = i * initialAngleYaw;
                if (nDim === 1) {
                    node.x = radius;
                } else if (nDim === 2) {
                    node.x = radius * Math.cos(rollAngle);
                    node.y = radius * Math.sin(rollAngle);
                } else {
                    node.x = radius * Math.sin(rollAngle) * Math.cos(yawAngle);
                    node.y = radius * Math.cos(rollAngle);
                    node.z = radius * Math.sin(rollAngle) * Math.sin(yawAngle);
                }
            }
            if (isNaN(node.vx) || nDim > 1 && isNaN(node.vy) || nDim > 2 && isNaN(node.vz)) {
                node.vx = 0;
                if (nDim > 1) {
                    node.vy = 0;
                }
                if (nDim > 2) {
                    node.vz = 0;
                }
            }
        }
    }
    function initializeForce(force) {
        if (force.initialize) force.initialize(nodes, random, nDim);
        return force;
    }
    initializeNodes();
    return simulation = {
        tick: tick,
        restart: function restart() {
            return stepper.restart(step), simulation;
        },
        stop: function stop() {
            return stepper.stop(), simulation;
        },
        numDimensions: function numDimensions(_) {
            return arguments.length ? (nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(_))), forces.forEach(initializeForce), simulation) : nDim;
        },
        nodes: function nodes1(_) {
            return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
        },
        alpha: function alpha1(_) {
            return arguments.length ? (alpha = +_, simulation) : alpha;
        },
        alphaMin: function alphaMin1(_) {
            return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
        },
        alphaDecay: function alphaDecay1(_) {
            return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
        },
        alphaTarget: function alphaTarget1(_) {
            return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
        },
        velocityDecay: function velocityDecay1(_) {
            return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
        },
        randomSource: function randomSource(_) {
            return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
        },
        force: function force(name, _) {
            return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
        },
        find: function find() {
            var args = Array.prototype.slice.call(arguments);
            var x = args.shift() || 0, y = (nDim > 1 ? args.shift() : null) || 0, z = (nDim > 2 ? args.shift() : null) || 0, radius = args.shift() || Infinity;
            var i = 0, n = nodes.length, dx, dy, dz, d2, node, closest;
            radius *= radius;
            for(i = 0; i < n; ++i){
                node = nodes[i];
                dx = x - node.x;
                dy = y - (node.y || 0);
                dz = z - (node.z || 0);
                d2 = dx * dx + dy * dy + dz * dz;
                if (d2 < radius) closest = node, radius = d2;
            }
            return closest;
        },
        on: function on(name, _) {
            return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
        }
    };
}
