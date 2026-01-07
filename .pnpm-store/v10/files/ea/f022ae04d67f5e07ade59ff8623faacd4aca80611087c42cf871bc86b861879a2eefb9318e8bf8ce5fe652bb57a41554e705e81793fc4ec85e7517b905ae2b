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
exports.Color = void 0;
exports.rect = rect;
const d3_shape_1 = require("@antv/vendor/d3-shape");
const coordinate_1 = require("../../utils/coordinate");
const selection_1 = require("../../utils/selection");
const vector_1 = require("../../utils/vector");
const number_1 = require("../../utils/number");
const utils_1 = require("../utils");
// Render rect in different coordinate.
function rect(document, points, value, coordinate, style = {}) {
    const { inset = 0, radius = 0, insetLeft = inset, insetTop = inset, insetRight = inset, insetBottom = inset, radiusBottomLeft = radius, radiusBottomRight = radius, radiusTopLeft = radius, radiusTopRight = radius, minWidth = -Infinity, maxWidth = Infinity, minHeight = -Infinity } = style, rest = __rest(style, ["inset", "radius", "insetLeft", "insetTop", "insetRight", "insetBottom", "radiusBottomLeft", "radiusBottomRight", "radiusTopLeft", "radiusTopRight", "minWidth", "maxWidth", "minHeight"]);
    if (!(0, coordinate_1.isPolar)(coordinate) && !(0, coordinate_1.isHelix)(coordinate)) {
        const tpShape = !!(0, coordinate_1.isTranspose)(coordinate);
        const [p0, , p2] = tpShape ? (0, utils_1.reorder)(points) : points;
        const [x, y] = p0;
        const [width, height] = (0, vector_1.sub)(p2, p0);
        // Deal with width or height is negative.
        const absX = width > 0 ? x : x + width;
        const absY = height > 0 ? y : y + height;
        const absWidth = Math.abs(width);
        const absHeight = Math.abs(height);
        const finalX = absX + insetLeft;
        const finalY = absY + insetTop;
        const finalWidth = absWidth - (insetLeft + insetRight);
        const finalHeight = absHeight - (insetTop + insetBottom);
        const clampWidth = tpShape
            ? (0, number_1.clamp)(finalWidth, minHeight, Infinity)
            : (0, number_1.clamp)(finalWidth, minWidth, maxWidth);
        const clampHeight = tpShape
            ? (0, number_1.clamp)(finalHeight, minWidth, maxWidth)
            : (0, number_1.clamp)(finalHeight, minHeight, Infinity);
        const clampX = tpShape ? finalX : finalX - (clampWidth - finalWidth) / 2;
        const clampY = tpShape
            ? finalY - (clampHeight - finalHeight) / 2
            : finalY - (clampHeight - finalHeight);
        return (0, selection_1.select)(document.createElement('rect', {}))
            .style('x', clampX)
            .style('y', clampY)
            .style('width', clampWidth)
            .style('height', clampHeight)
            .style('radius', [
            radiusTopLeft,
            radiusTopRight,
            radiusBottomRight,
            radiusBottomLeft,
        ])
            .call(utils_1.applyStyle, rest)
            .node();
    }
    // Render path in polar coordinate.
    const { y, y1 } = value;
    const center = coordinate.getCenter();
    const arcObject = (0, utils_1.getArcObject)(coordinate, points, [y, y1]);
    const path = (0, d3_shape_1.arc)()
        .cornerRadius(radius)
        .padAngle((inset * Math.PI) / 180);
    return (0, selection_1.select)(document.createElement('path', {}))
        .style('d', path(arcObject))
        .style('transform', `translate(${center[0]}, ${center[1]})`)
        .style('radius', radius)
        .style('inset', inset)
        .call(utils_1.applyStyle, rest)
        .node();
}
/**
 * Render rect in different coordinate.
 * Calc arc path based on control points directly rather startAngle, endAngle, innerRadius,
 * outerRadius. This is not accurate and will cause bug when the range of y scale is [1, 0]
 * for cell geometry.
 */
const Color = (options, context) => {
    // Render border only when colorAttribute is stroke.
    const { colorAttribute, opacityAttribute = 'fill', first = true, last = true } = options, style = __rest(options, ["colorAttribute", "opacityAttribute", "first", "last"]);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor, radius: defaultRadius = 0 } = defaults, restDefaults = __rest(defaults, ["color", "radius"]);
        const defaultLineWidth = restDefaults.lineWidth || 1;
        const { stroke, radius = defaultRadius, radiusTopLeft = radius, radiusTopRight = radius, radiusBottomRight = radius, radiusBottomLeft = radius, innerRadius = 0, innerRadiusTopLeft = innerRadius, innerRadiusTopRight = innerRadius, innerRadiusBottomRight = innerRadius, innerRadiusBottomLeft = innerRadius, lineWidth = colorAttribute === 'stroke' || stroke ? defaultLineWidth : 0, inset = 0, insetLeft = inset, insetRight = inset, insetBottom = inset, insetTop = inset, minWidth, maxWidth, minHeight } = style, rest = __rest(style, ["stroke", "radius", "radiusTopLeft", "radiusTopRight", "radiusBottomRight", "radiusBottomLeft", "innerRadius", "innerRadiusTopLeft", "innerRadiusTopRight", "innerRadiusBottomRight", "innerRadiusBottomLeft", "lineWidth", "inset", "insetLeft", "insetRight", "insetBottom", "insetTop", "minWidth", "maxWidth", "minHeight"]);
        const { color = defaultColor, opacity } = value;
        // Extended style, which is not supported by native g shape,
        // should apply at first.
        const standardDirRadius = [
            first ? radiusTopLeft : innerRadiusTopLeft,
            first ? radiusTopRight : innerRadiusTopRight,
            last ? radiusBottomRight : innerRadiusBottomRight,
            last ? radiusBottomLeft : innerRadiusBottomLeft,
        ];
        const standardDir = [
            'radiusTopLeft',
            'radiusTopRight',
            'radiusBottomRight',
            'radiusBottomLeft',
        ];
        // Transpose: rotate it clockwise by 90.
        if ((0, coordinate_1.isTranspose)(coordinate)) {
            standardDir.push(standardDir.shift());
        }
        const extendedStyle = Object.assign(Object.assign({ radius }, Object.fromEntries(standardDir.map((d, i) => [d, standardDirRadius[i]]))), { inset,
            insetLeft,
            insetRight,
            insetBottom,
            insetTop,
            minWidth,
            maxWidth,
            minHeight });
        return ((0, selection_1.select)(rect(document, points, value, coordinate, extendedStyle))
            .call(utils_1.applyStyle, restDefaults)
            .style('fill', 'transparent')
            .style(colorAttribute, color)
            .style((0, utils_1.toOpacityKey)(options), opacity)
            .style('lineWidth', lineWidth)
            .style('stroke', stroke === undefined ? color : stroke)
            // shape.style has higher priority.
            .call(utils_1.applyStyle, rest)
            .node());
    };
};
exports.Color = Color;
// @todo Should Shape have default animations using for ordinal scale?
exports.Color.props = {
    defaultEnterAnimation: 'scaleInY',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=color.js.map