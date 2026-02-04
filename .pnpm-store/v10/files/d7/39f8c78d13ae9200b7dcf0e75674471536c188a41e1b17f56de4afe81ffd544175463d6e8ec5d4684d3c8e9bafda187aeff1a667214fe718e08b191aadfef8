import {binarytree} from "d3-binarytree";
import {quadtree} from "d3-quadtree";
import {octree} from "d3-octree";
import constant from "./constant.js";
import jiggle from "./jiggle.js";

function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

function z(d) {
  return d.z + d.vz;
}

export default function(radius) {
  var nodes,
      nDim,
      radii,
      random,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = constant(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        zi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree =
          (nDim === 1 ? binarytree(nodes, x)
          :(nDim === 2 ? quadtree(nodes, x, y)
          :(nDim === 3 ? octree(nodes, x, y, z)
          :null
      ))).visitAfter(prepare);

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        if (nDim > 1) { yi = node.y + node.vy; }
        if (nDim > 2) { zi = node.z + node.vz; }
        tree.visit(apply);
      }
    }

    function apply(treeNode, arg1, arg2, arg3, arg4, arg5, arg6) {
      var args = [arg1, arg2, arg3, arg4, arg5, arg6];
      var x0 = args[0],
          y0 = args[1],
          z0 = args[2],
          x1 = args[nDim],
          y1 = args[nDim+1],
          z1 = args[nDim+2];

      var data = treeNode.data, rj = treeNode.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = (nDim > 1 ? yi - data.y - data.vy : 0),
              z = (nDim > 2 ? zi - data.z - data.vz : 0),
              l = x * x + y * y + z * z;
          if (l < r * r) {
            if (x === 0) x = jiggle(random), l += x * x;
            if (nDim > 1 && y === 0) y = jiggle(random), l += y * y;
            if (nDim > 2 && z === 0) z = jiggle(random), l += z * z;
            l = (r - (l = Math.sqrt(l))) / l * strength;

            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            if (nDim > 1) { node.vy += (y *= l) * r; }
            if (nDim > 2) { node.vz += (z *= l) * r; }

            data.vx -= x * (r = 1 - r);
            if (nDim > 1) { data.vy -= y * r; }
            if (nDim > 2) { data.vz -= z * r; }
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r
          || (nDim > 1 && (y0 > yi + r || y1 < yi - r))
          || (nDim > 2 && (z0 > zi + r || z1 < zi - r));
    }
  }

  function prepare(treeNode) {
    if (treeNode.data) return treeNode.r = radii[treeNode.data.index];
    for (var i = treeNode.r = 0; i < Math.pow(2, nDim); ++i) {
      if (treeNode[i] && treeNode[i].r > treeNode.r) {
        treeNode.r = treeNode[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_nodes, ...args) {
    nodes = _nodes;
    random = args.find(arg => typeof arg === 'function') || Math.random;
    nDim = args.find(arg => [1, 2, 3].includes(arg)) || 2;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), initialize(), force) : radius;
  };

  return force;
}
