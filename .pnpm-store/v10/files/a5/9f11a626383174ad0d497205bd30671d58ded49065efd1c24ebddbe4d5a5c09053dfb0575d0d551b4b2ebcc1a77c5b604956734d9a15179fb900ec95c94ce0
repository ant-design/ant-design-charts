"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyStyle = applyStyle;
exports.appendPolygon = appendPolygon;
exports.arrowPoints = arrowPoints;
exports.appendArc = appendArc;
exports.computeGradient = computeGradient;
exports.reorder = reorder;
exports.getArcObject = getArcObject;
exports.getConnectStyle = getConnectStyle;
exports.toOpacityKey = toOpacityKey;
exports.getTransform = getTransform;
exports.getOrigin = getOrigin;
const scale_1 = require("@antv/scale");
const util_1 = require("@antv/util");
const d3_array_1 = require("@antv/vendor/d3-array");
const array_1 = require("../utils/array");
const coordinate_1 = require("../utils/coordinate");
const vector_1 = require("../utils/vector");
function applyStyle(selection, style) {
    for (const [key, value] of Object.entries(style)) {
        selection.style(key, value);
    }
}
/**
 * Draw polygon path with points.
 * @param path
 * @param points
 */
function appendPolygon(path, points) {
    points.forEach((p, idx) => idx === 0 ? path.moveTo(p[0], p[1]) : path.lineTo(p[0], p[1]));
    path.closePath();
    return path;
}
/**
 * Draw arrow between `from` and `to`.
 * @param from
 * @param to
 * @returns
 */
function arrowPoints(from, to, options) {
    const { arrowSize } = options;
    const size = typeof arrowSize === 'string'
        ? (+parseFloat(arrowSize) / 100) * (0, vector_1.dist)(from, to)
        : arrowSize;
    // TODO Use config from style.
    // Default arrow rotate is 30°.
    const arrowAngle = Math.PI / 6;
    const angle = Math.atan2(to[1] - from[1], to[0] - from[0]);
    const arrowAngle1 = Math.PI / 2 - angle - arrowAngle;
    const arrow1 = [
        to[0] - size * Math.sin(arrowAngle1),
        to[1] - size * Math.cos(arrowAngle1),
    ];
    const arrowAngle2 = angle - arrowAngle;
    const arrow2 = [
        to[0] - size * Math.cos(arrowAngle2),
        to[1] - size * Math.sin(arrowAngle2),
    ];
    return [arrow1, arrow2];
}
/**
 * Draw arc by from -> to, with center and radius.
 * @param path
 * @param from
 * @param to
 * @param center
 * @param radius
 */
function appendArc(path, from, to, center, radius) {
    const startAngle = (0, vector_1.angle)((0, vector_1.sub)(center, from)) + Math.PI;
    const endAngle = (0, vector_1.angle)((0, vector_1.sub)(center, to)) + Math.PI;
    path.arc(center[0], center[1], radius, startAngle, endAngle, endAngle - startAngle < 0);
    return path;
}
/**
 * @todo Fix wrong key point.
 */
function computeGradient(C, X, Y, from = 'y', mode = 'between', tpShape = false) {
    // The angles of gradients rendering are varies when 'from' and 'tpShape' are different.
    const getTheta = (from, tpShape) => {
        if (from === 'y' || from === true) {
            if (tpShape) {
                return 180;
            }
            else {
                return 90;
            }
        }
        else {
            if (tpShape) {
                return 90;
            }
            else {
                return 0;
            }
        }
    };
    const P = from === 'y' || from === true ? Y : X;
    const theta = getTheta(from, tpShape);
    const I = (0, array_1.indexOf)(P);
    const [min, max] = (0, d3_array_1.extent)(I, (i) => P[i]);
    // This need to improve for non-uniform distributed colors.
    const p = new scale_1.Linear({
        domain: [min, max],
        range: [0, 100],
    });
    const percentage = (i) => (0, util_1.isNumber)(P[i]) && !Number.isNaN(P[i]) ? p.map(P[i]) : 0;
    const gradientMode = {
        // Interpolate the colors for this segment.
        between: (i) => `${C[i]} ${percentage(i)}%`,
        // Use the color of the start point as the color for this segment.
        start: (i) => i === 0
            ? `${C[i]} ${percentage(i)}%`
            : `${C[i - 1]} ${percentage(i)}%, ${C[i]} ${percentage(i)}%`,
        // Use the color of the end point as the color for this segment.
        end: (i) => i === C.length - 1
            ? `${C[i]} ${percentage(i)}%`
            : `${C[i]} ${percentage(i)}%, ${C[i + 1]} ${percentage(i)}%`,
    };
    const gradient = I.sort((a, b) => percentage(a) - percentage(b))
        .map(gradientMode[mode] || gradientMode['between'])
        .join(',');
    return `linear-gradient(${theta}deg, ${gradient})`;
}
function reorder(points) {
    const [p0, p1, p2, p3] = points;
    return [p3, p0, p1, p2];
}
function getArcObject(coordinate, points, Y) {
    const [p0, p1, , p3] = (0, coordinate_1.isTranspose)(coordinate) ? reorder(points) : points;
    const [y, y1] = Y;
    const center = coordinate.getCenter();
    const a1 = (0, vector_1.angleWithQuadrant)((0, vector_1.sub)(p0, center));
    const a2 = (0, vector_1.angleWithQuadrant)((0, vector_1.sub)(p1, center));
    // There are two situations that a2 === a1:
    // 1. a1 - a2 = 0
    // 2. |a1 - a2| = Math.PI * 2
    // Distinguish them by y and y1:
    const a3 = a2 === a1 && y !== y1 ? a2 + Math.PI * 2 : a2;
    const epsilon = 1e-4;
    return {
        startAngle: a1 + epsilon,
        endAngle: (a3 - a1 >= 0 ? a3 : Math.PI * 2 + a3) - epsilon,
        innerRadius: (0, vector_1.dist)(p3, center),
        outerRadius: (0, vector_1.dist)(p0, center),
    };
}
/**
 * Pick connectStyle from style.
 * @param style
 */
function getConnectStyle(style) {
    const PREFIX = 'connect';
    return Object.fromEntries(Object.entries(style)
        .filter(([key]) => key.startsWith(PREFIX))
        .map(([key, value]) => [
        (0, util_1.lowerFirst)(key.replace(PREFIX, '').trim()),
        value,
    ])
        .filter(([key]) => key !== undefined));
}
function toOpacityKey(options) {
    const { colorAttribute, opacityAttribute = colorAttribute } = options;
    return `${opacityAttribute}Opacity`;
}
function getTransform(coordinate, value) {
    if (!(0, coordinate_1.isPolar)(coordinate))
        return '';
    const center = coordinate.getCenter();
    const { transform: suffix } = value;
    return `translate(${center[0]}, ${center[1]}) ${suffix || ''}`;
}
function getOrigin(points) {
    if (points.length === 1)
        return points[0];
    const [[x0, y0, z0 = 0], [x2, y2, z2 = 0]] = points;
    return [(x0 + x2) / 2, (y0 + y2) / 2, (z0 + z2) / 2];
}
//# sourceMappingURL=utils.js.map