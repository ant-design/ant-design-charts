"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
const d3_path_1 = require("@antv/vendor/d3-path");
const coordinate_1 = require("../../utils/coordinate");
const utils_1 = require("../utils");
const selection_1 = require("../../utils/selection");
const vector_1 = require("../../utils/vector");
function getPolygonPath(points, coordinate) {
    const path = (0, d3_path_1.path)();
    // In polar, draw arc.
    if ((0, coordinate_1.isPolar)(coordinate)) {
        const center = coordinate.getCenter();
        const closedPoints = [...points, points[0]];
        // Calculate dist array for cache.
        const dists = closedPoints.map((p) => (0, vector_1.dist)(p, center));
        closedPoints.forEach((curr, idx) => {
            if (idx === 0) {
                path.moveTo(curr[0], curr[1]);
                return;
            }
            const currDist = dists[idx];
            const prev = points[idx - 1];
            const prevDist = dists[idx - 1];
            // When radius is equal, draw 2 point with arc.
            // todo: choose a minimum value.
            if (prevDist !== undefined && Math.abs(currDist - prevDist) < 1e-10) {
                (0, utils_1.appendArc)(path, prev, curr, center, currDist);
            }
            else {
                path.lineTo(curr[0], curr[1]);
            }
        });
        path.closePath();
        return path;
    }
    // In rect, draw polygon.
    return (0, utils_1.appendPolygon)(path, points);
}
const Polygon = (options, context) => {
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const { color = defaultColor, transform } = value;
        const path = getPolygonPath(points, coordinate);
        return (0, selection_1.select)(document.createElement('path', {}))
            .call(utils_1.applyStyle, rest)
            .style('d', path.toString())
            .style('stroke', color)
            .style('fill', color)
            .style('transform', transform)
            .call(utils_1.applyStyle, options)
            .node();
    };
};
exports.Polygon = Polygon;
exports.Polygon.props = {
    defaultMarker: 'square',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=polygon.js.map