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
const selection_1 = require("../../utils/selection");
const coordinate_1 = require("../../utils/coordinate");
const vector_1 = require("../../utils/vector");
const utils_1 = require("../utils");
const helper_1 = require("../../utils/helper");
const createElement_1 = require("../../utils/createElement");
/**
 * Given a points sequence, split it into an array of defined points
 * and an array of undefined segments.
 *
 * Input - [p0, p1, p2, p3, p4, p5], p1 ~ p2 is `Y1`, p3 ~ p5 is `Y0`.
 * Output - When all of Y1 & Y0 is defined, move into defined points, or else undefined segments.
 */
function segmentation(points, defined) {
    const definedPointsY1 = [];
    const definedPointsY0 = [];
    const segments = [];
    let m = false; // Is in a undefined sequence.
    let dp = null; // The previous defined point.
    const mid = points.length / 2;
    for (let i = 0; i < mid; i++) {
        const y1 = points[i];
        const y0 = points[i + mid];
        // If current point is a undefined point,
        // enter a undefined sequence.
        if ([...y1, ...y0].some((v) => !defined(v)))
            m = true;
        else {
            definedPointsY1.push(y1);
            definedPointsY0.push(y0);
            // If current point is a defined point,
            // and is in a undefined sequence, save
            // the two closest defined points as this
            // undefined sequence and exit it.
            if (m && dp) {
                m = false;
                const [dpy1, dpy0] = dp;
                segments.push([dpy1, y1, dpy0, y0]);
            }
            // Update the previous defined point.
            dp = [y1, y0];
        }
    }
    return [definedPointsY1.concat(definedPointsY0), segments];
}
const DoubleArea = (0, createElement_1.createElement)((g) => {
    const { areaPath, connectPath, areaStyle, connectStyle } = g.attributes;
    const document = g.ownerDocument;
    (0, selection_1.select)(g)
        .maybeAppend('connect-path', () => document.createElement('path', {}))
        .style('d', connectPath)
        .call(utils_1.applyStyle, connectStyle);
    (0, selection_1.select)(g)
        .maybeAppend('area-path', () => document.createElement('path', {}))
        .style('d', areaPath)
        .call(utils_1.applyStyle, areaStyle);
});
const Curve = (options, context) => {
    const { curve, gradient = false, defined = (d) => !Number.isNaN(d) && d !== undefined && d !== null, connect: connectNulls = false } = options, style = __rest(options, ["curve", "gradient", "defined", "connect"]);
    const { coordinate, document } = context;
    return (P, value, defaults) => {
        const { color: defaultColor } = defaults;
        const { color = defaultColor, seriesColor: sc, seriesX: sx, seriesY: sy, } = value;
        const tpShape = (0, coordinate_1.isTranspose)(coordinate);
        const transform = (0, utils_1.getTransform)(coordinate, value);
        const fill = gradient && sc
            ? (0, utils_1.computeGradient)(sc, sx, sy, gradient, undefined, tpShape)
            : color;
        const finalStyle = Object.assign(Object.assign(Object.assign(Object.assign({}, defaults), { stroke: fill, fill: fill }), (transform && { transform })), style);
        const [DP, MS] = segmentation(P, defined);
        const connectStyle = (0, helper_1.subObject)(finalStyle, 'connect');
        const missing = !!MS.length;
        const getPathNode = (path) => {
            return (0, selection_1.select)(document.createElement('path', {}))
                .style('d', path || '')
                .call(utils_1.applyStyle, finalStyle)
                .node();
        };
        if (!(0, coordinate_1.isPolar)(coordinate)) {
            /**
             * Draw area shape by points.
             */
            const areaPath = (points) => {
                const Y1 = points.slice(0, points.length / 2);
                const Y0 = points.slice(points.length / 2);
                return tpShape
                    ? (0, d3_shape_1.area)()
                        .y((_, idx) => Y1[idx][1])
                        .x1((_, idx) => Y1[idx][0])
                        .x0((_, idx) => Y0[idx][0])
                        .defined((_, idx) => [...Y1[idx], ...Y0[idx]].every(defined))
                        .curve(curve)(Y1)
                    : (0, d3_shape_1.area)()
                        .x((_, idx) => Y1[idx][0])
                        .y1((_, idx) => Y1[idx][1])
                        .y0((_, idx) => Y0[idx][1])
                        .defined((_, idx) => [...Y1[idx], ...Y0[idx]].every(defined))
                        .curve(curve)(Y1);
            };
            // Draw one area of connected defined points.
            if (!missing || (connectNulls && !Object.keys(connectStyle).length)) {
                return getPathNode(areaPath(DP));
            }
            // Draw one area of unconnected defined points.
            if (missing && !connectNulls) {
                return getPathNode(areaPath(P));
            }
            // Draw two area.
            // One for unconnected defined points.
            // One for connected segments.
            return (0, selection_1.select)(new DoubleArea())
                .style('areaStyle', finalStyle)
                .style('connectStyle', Object.assign(Object.assign({}, connectStyle), style))
                .style('areaPath', areaPath(P))
                .style('connectPath', MS.map(areaPath).join(''))
                .node();
        }
        else {
            /**
             * Draw areaRadial shape by points.
             */
            const areaRadialPath = (points) => {
                const center = coordinate.getCenter();
                const Y1 = points.slice(0, points.length / 2);
                const Y0 = points.slice(points.length / 2);
                return (0, d3_shape_1.areaRadial)()
                    .angle((_, idx) => (0, vector_1.angleWithQuadrant)((0, vector_1.sub)(Y1[idx], center)))
                    .outerRadius((_, idx) => (0, vector_1.dist)(Y1[idx], center))
                    .innerRadius((_, idx) => (0, vector_1.dist)(Y0[idx], center))
                    .defined((_, idx) => [...Y1[idx], ...Y0[idx]].every(defined))
                    .curve(curve)(Y0);
            };
            // Draw one area of connected defined points.
            if (!missing || (connectNulls && !Object.keys(connectStyle).length)) {
                return getPathNode(areaRadialPath(DP));
            }
            // Draw one area of unconnected defined points.
            if (missing && !connectNulls) {
                return getPathNode(areaRadialPath(P));
            }
            // Draw two area.
            // One for unconnected defined points.
            // One for connected segments.
            return (0, selection_1.select)(new DoubleArea())
                .style('areaStyle', finalStyle)
                .style('connectStyle', Object.assign(Object.assign({}, connectStyle), style))
                .style('areaPath', areaRadialPath(P))
                .style('connectPath', MS.map(areaRadialPath).join(''))
                .node();
        }
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