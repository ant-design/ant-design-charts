"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // Creates a polyhedral projection.
//  * root: a spanning tree of polygon faces.  Nodes are automatically
//    augmented with a transform matrix.
//  * face: a function that returns the appropriate node for a given {lambda, phi}
//    point (radians).
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../../../d3-geo/src/index.js");
var _math = require("../math.js");
var _matrix = /*#__PURE__*/ _interop_require_wildcard(require("./matrix.js"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _default(root, face) {
    recurse(root, {
        transform: null
    });
    function recurse(node, parent) {
        node.edges = faceEdges(node.face);
        // Find shared edge.
        if (parent.face) {
            var shared = node.shared = sharedEdge(node.face, parent.face), m = (0, _matrix.default)(shared.map(parent.project), shared.map(node.project));
            node.transform = parent.transform ? (0, _matrix.multiply)(parent.transform, m) : m;
            // Replace shared edge in parent edges array.
            var edges = parent.edges;
            for(var i = 0, n = edges.length; i < n; ++i){
                if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = node;
                if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = node;
            }
            edges = node.edges;
            for(i = 0, n = edges.length; i < n; ++i){
                if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = parent;
                if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = parent;
            }
        } else {
            node.transform = parent.transform;
        }
        if (node.children) {
            node.children.forEach(function(child) {
                recurse(child, node);
            });
        }
        return node;
    }
    function forward(lambda, phi) {
        var node = face(lambda, phi), point = node.project([
            lambda * _math.degrees,
            phi * _math.degrees
        ]), t;
        if (t = node.transform) {
            return [
                t[0] * point[0] + t[1] * point[1] + t[2],
                -(t[3] * point[0] + t[4] * point[1] + t[5])
            ];
        }
        point[1] = -point[1];
        return point;
    }
    // Naive inverse!  A faster solution would use bounding boxes, or even a
    // polygonal quadtree.
    if (hasInverse(root)) forward.invert = function(x, y) {
        var coordinates = faceInvert(root, [
            x,
            -y
        ]);
        return coordinates && (coordinates[0] *= _math.radians, coordinates[1] *= _math.radians, coordinates);
    };
    function faceInvert(node, coordinates) {
        var invert = node.project.invert, t = node.transform, point = coordinates;
        if (t) {
            t = (0, _matrix.inverse)(t);
            point = [
                t[0] * point[0] + t[1] * point[1] + t[2],
                t[3] * point[0] + t[4] * point[1] + t[5]
            ];
        }
        if (invert && node === faceDegrees(p = invert(point))) return p;
        var p, children = node.children;
        for(var i = 0, n = children && children.length; i < n; ++i){
            if (p = faceInvert(children[i], coordinates)) return p;
        }
    }
    function faceDegrees(coordinates) {
        return face(coordinates[0] * _math.radians, coordinates[1] * _math.radians);
    }
    var proj = (0, _index.geoProjection)(forward), stream_ = proj.stream;
    proj.stream = function(stream) {
        var rotate = proj.rotate(), rotateStream = stream_(stream), sphereStream = (proj.rotate([
            0,
            0
        ]), stream_(stream));
        proj.rotate(rotate);
        rotateStream.sphere = function() {
            sphereStream.polygonStart();
            sphereStream.lineStart();
            outline(sphereStream, root);
            sphereStream.lineEnd();
            sphereStream.polygonEnd();
        };
        return rotateStream;
    };
    return proj.angle(-30);
}
function outline(stream, node, parent) {
    var point, edges = node.edges, n = edges.length, edge, multiPoint = {
        type: "MultiPoint",
        coordinates: node.face
    }, notPoles = node.face.filter(function(d) {
        return (0, _math.abs)(d[1]) !== 90;
    }), b = (0, _index.geoBounds)({
        type: "MultiPoint",
        coordinates: notPoles
    }), inside = false, j = -1, dx = b[1][0] - b[0][0];
    // TODO
    var c = dx === 180 || dx === 360 ? [
        (b[0][0] + b[1][0]) / 2,
        (b[0][1] + b[1][1]) / 2
    ] : (0, _index.geoCentroid)(multiPoint);
    // First find the shared edge…
    if (parent) while(++j < n){
        if (edges[j] === parent) break;
    }
    ++j;
    for(var i = 0; i < n; ++i){
        edge = edges[(i + j) % n];
        if (Array.isArray(edge)) {
            if (!inside) {
                stream.point((point = (0, _index.geoInterpolate)(edge[0], c)(_math.epsilon))[0], point[1]);
                inside = true;
            }
            stream.point((point = (0, _index.geoInterpolate)(edge[1], c)(_math.epsilon))[0], point[1]);
        } else {
            inside = false;
            if (edge !== parent) outline(stream, edge, node);
        }
    }
}
// Tests equality of two spherical points.
function pointEqual(a, b) {
    return a && b && a[0] === b[0] && a[1] === b[1];
}
// Finds a shared edge given two clockwise polygons.
function sharedEdge(a, b) {
    var x, y, n = a.length, found = null;
    for(var i = 0; i < n; ++i){
        x = a[i];
        for(var j = b.length; --j >= 0;){
            y = b[j];
            if (x[0] === y[0] && x[1] === y[1]) {
                if (found) return [
                    found,
                    x
                ];
                found = x;
            }
        }
    }
}
// Converts an array of n face vertices to an array of n + 1 edges.
function faceEdges(face) {
    var n = face.length, edges = [];
    for(var a = face[n - 1], i = 0; i < n; ++i)edges.push([
        a,
        a = face[i]
    ]);
    return edges;
}
function hasInverse(node) {
    return node.project.invert || node.children && node.children.some(hasInverse);
}
