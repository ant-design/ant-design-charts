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
exports.Curve = void 0;
const d3_shape_1 = require("@antv/vendor/d3-shape");
const coordinate_1 = require("../../utils/coordinate");
const selection_1 = require("../../utils/selection");
const utils_1 = require("../utils");
const createElement_1 = require("../../utils/createElement");
const helper_1 = require("../../utils/helper");
const vector_1 = require("../../utils/vector");
const DoublePath = (0, createElement_1.createElement)((g) => {
    const { d1, d2, style1, style2 } = g.attributes;
    const document = g.ownerDocument;
    (0, selection_1.select)(g)
        .maybeAppend('line', () => document.createElement('path', {}))
        .style('d', d1)
        .call(utils_1.applyStyle, style1);
    (0, selection_1.select)(g)
        .maybeAppend('line1', () => document.createElement('path', {}))
        .style('d', d2)
        .call(utils_1.applyStyle, style2);
});
/**
 * Given a points sequence, split it into an array of defined points
 * and an array of undefined segments.
 *
 * Input - [[1, 2], [3, 4], [null, null], [null, null], [5, 6], [null, null], [7, 8]]
 * Output
 *  - [[1, 2], [3, 4], [5, 6], [7, 8]]
 *  - [
 *      [[3, 4], [5, 6]],
 *      [[5, 6], [7, 8]]
 *    ]
 */
function segmentation(points, defined) {
    const definedPoints = [];
    const segments = [];
    let m = false; // Is in a undefined sequence.
    let dp = null; // The previous defined point.
    for (const p of points) {
        // If current point is a undefined point,
        // enter a undefined sequence.
        if (!defined(p[0]) || !defined(p[1]))
            m = true;
        else {
            definedPoints.push(p);
            // If current point is a defined point,
            // and is in a undefined sequence, save
            // the two closest defined points as this
            // undefined sequence and exit it.
            if (m) {
                m = false;
                segments.push([dp, p]);
            }
            // Update the previous defined point.
            dp = p;
        }
    }
    return [definedPoints, segments];
}
const Curve = (options, context) => {
    const { curve, gradient = false, 
    // The color for each segment.
    gradientColor = 'between', defined = (d) => !Number.isNaN(d) && d !== undefined && d !== null, connect: connectNulls = false } = options, style = __rest(options, ["curve", "gradient", "gradientColor", "defined", "connect"]);
    const { coordinate, document } = context;
    return (P, value, defaults) => {
        // Compute styles.
        const { color: defaultColor, lineWidth: defaultSize } = defaults, rest = __rest(defaults, ["color", "lineWidth"]);
        const { color = defaultColor, size = defaultSize, seriesColor: sc, seriesX: sx, seriesY: sy, } = value;
        const transform = (0, utils_1.getTransform)(coordinate, value);
        const tpShape = (0, coordinate_1.isTranspose)(coordinate);
        const stroke = gradient && sc
            ? (0, utils_1.computeGradient)(sc, sx, sy, gradient, gradientColor, tpShape)
            : color;
        const finalStyle = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rest), (stroke && { stroke })), (size && { lineWidth: size })), (transform && { transform })), style);
        // Compute points and segments.
        let linePath;
        if ((0, coordinate_1.isPolar)(coordinate)) {
            const center = coordinate.getCenter();
            linePath = (points) => (0, d3_shape_1.lineRadial)()
                .angle((_, idx) => (0, vector_1.angleWithQuadrant)((0, vector_1.sub)(points[idx], center)))
                .radius((_, idx) => (0, vector_1.dist)(points[idx], center))
                .defined(([x, y]) => defined(x) && defined(y))
                .curve(curve)(points);
        }
        else {
            linePath = (0, d3_shape_1.line)()
                .x((d) => d[0])
                .y((d) => d[1])
                .defined(([x, y]) => defined(x) && defined(y))
                .curve(curve);
        }
        const [DP, MS] = segmentation(P, defined);
        const connectStyle = (0, helper_1.subObject)(finalStyle, 'connect');
        const missing = !!MS.length;
        // Draw one path of connected defined points.
        if (!missing || (connectNulls && !Object.keys(connectStyle).length)) {
            return (0, selection_1.select)(document.createElement('path', {}))
                .style('d', linePath(DP) || [])
                .call(utils_1.applyStyle, finalStyle)
                .node();
        }
        // Draw one path of unconnected defined points.
        if (missing && !connectNulls) {
            return (0, selection_1.select)(document.createElement('path', {}))
                .style('d', linePath(P))
                .call(utils_1.applyStyle, finalStyle)
                .node();
        }
        // Draw two path.
        // One for unconnected defined points.
        // One for connected segments.
        const connectPath = (segments) => segments.map(linePath).join(',');
        return (0, selection_1.select)(new DoublePath())
            .style('style1', Object.assign(Object.assign({}, finalStyle), connectStyle))
            .style('style2', finalStyle)
            .style('d1', connectPath(MS))
            .style('d2', linePath(P))
            .node();
    };
};
exports.Curve = Curve;
exports.Curve.props = {
    defaultMarker: 'smooth',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=curve.js.map