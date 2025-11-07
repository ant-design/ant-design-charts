import {dispatch} from "d3-dispatch";
import {timer} from "d3-timer";
import lcg from "./lcg.js";

var MAX_DIMENSIONS = 3;

export function x(d) {
  return d.x;
}

export function y(d) {
  return d.y;
}

export function z(d) {
  return d.z;
}

var initialRadius = 10,
    initialAngleRoll = Math.PI * (3 - Math.sqrt(5)), // Golden ratio angle
    initialAngleYaw = Math.PI * 20 / (9 + Math.sqrt(221)); // Markov irrational number

export default function(nodes, numDimensions) {
  numDimensions = numDimensions || 2;

  var nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(numDimensions))),
      simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = new Map(),
      stepper = timer(step),
      event = dispatch("tick", "end"),
      random = lcg();

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

    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;

      forces.forEach(function (force) {
        force(alpha);
      });

      for (i = 0; i < n; ++i) {
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
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (node.fz != null) node.z = node.fz;
      if (isNaN(node.x) || (nDim > 1 && isNaN(node.y)) || (nDim > 2 && isNaN(node.z))) {
        var radius = initialRadius * (nDim > 2 ? Math.cbrt(0.5 + i) : (nDim > 1 ? Math.sqrt(0.5 + i) : i)),
          rollAngle = i * initialAngleRoll,
          yawAngle = i * initialAngleYaw;

        if (nDim === 1) {
          node.x = radius;
        } else if (nDim === 2) {
          node.x = radius * Math.cos(rollAngle);
          node.y = radius * Math.sin(rollAngle);
        } else { // 3 dimensions: use spherical distribution along 2 irrational number angles
          node.x = radius * Math.sin(rollAngle) * Math.cos(yawAngle);
          node.y = radius * Math.cos(rollAngle);
          node.z = radius * Math.sin(rollAngle) * Math.sin(yawAngle);
        }
      }
      if (isNaN(node.vx) || (nDim > 1 && isNaN(node.vy)) || (nDim > 2 && isNaN(node.vz))) {
        node.vx = 0;
        if (nDim > 1) { node.vy = 0; }
        if (nDim > 2) { node.vz = 0; }
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

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    numDimensions: function(_) {
      return arguments.length
          ? (nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(_))), forces.forEach(initializeForce), simulation)
          : nDim;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    randomSource: function(_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.delete(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function() {
      var args = Array.prototype.slice.call(arguments);
      var x = args.shift() || 0,
          y = (nDim > 1 ? args.shift() : null) || 0,
          z = (nDim > 2 ? args.shift() : null) || 0,
          radius = args.shift() || Infinity;

      var i = 0,
          n = nodes.length,
          dx,
          dy,
          dz,
          d2,
          node,
          closest;

      radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - (node.y || 0);
        dz = z - (node.z ||0);
        d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}
