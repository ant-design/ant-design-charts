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
var _jiggle = /*#__PURE__*/ _interop_require_default(require("./jiggle.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function index(d) {
    return d.index;
}
function find(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("node not found: " + nodeId);
    return node;
}
function _default(links) {
    var id = index, strength = defaultStrength, strengths, distance = (0, _constant.default)(30), distances, nodes, count, bias, random, iterations = 1;
    if (links == null) links = [];
    function defaultStrength(link) {
        return 1 / Math.min(count[link.source.index], count[link.target.index]);
    }
    function force(alpha) {
        for(var k = 0, n = links.length; k < iterations; ++k){
            for(var i = 0, link, source, target, x, y, l, b; i < n; ++i){
                link = links[i], source = link.source, target = link.target;
                x = target.x + target.vx - source.x - source.vx || (0, _jiggle.default)(random);
                y = target.y + target.vy - source.y - source.vy || (0, _jiggle.default)(random);
                l = Math.sqrt(x * x + y * y);
                l = (l - distances[i]) / l * alpha * strengths[i];
                x *= l, y *= l;
                target.vx -= x * (b = bias[i]);
                target.vy -= y * b;
                source.vx += x * (b = 1 - b);
                source.vy += y * b;
            }
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, m = links.length, nodeById = new Map(nodes.map(function(d, i) {
            return [
                id(d, i, nodes),
                d
            ];
        })), link;
        for(i = 0, count = new Array(n); i < m; ++i){
            link = links[i], link.index = i;
            if (_type_of(link.source) !== "object") link.source = find(nodeById, link.source);
            if (_type_of(link.target) !== "object") link.target = find(nodeById, link.target);
            count[link.source.index] = (count[link.source.index] || 0) + 1;
            count[link.target.index] = (count[link.target.index] || 0) + 1;
        }
        for(i = 0, bias = new Array(m); i < m; ++i){
            link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
        }
        strengths = new Array(m), initializeStrength();
        distances = new Array(m), initializeDistance();
    }
    function initializeStrength() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i){
            strengths[i] = +strength(links[i], i, links);
        }
    }
    function initializeDistance() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i){
            distances[i] = +distance(links[i], i, links);
        }
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.links = function(_) {
        return arguments.length ? (links = _, initialize(), force) : links;
    };
    force.id = function(_) {
        return arguments.length ? (id = _, force) : id;
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant.default)(+_), initializeStrength(), force) : strength;
    };
    force.distance = function(_) {
        return arguments.length ? (distance = typeof _ === "function" ? _ : (0, _constant.default)(+_), initializeDistance(), force) : distance;
    };
    return force;
}
