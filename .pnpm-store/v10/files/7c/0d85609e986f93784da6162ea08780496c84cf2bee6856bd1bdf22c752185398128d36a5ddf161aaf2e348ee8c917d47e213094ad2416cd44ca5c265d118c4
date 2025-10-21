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
import { arc } from '@antv/vendor/d3-shape';
import { isPolar, isHelix, isTranspose } from '../../utils/coordinate';
import { select } from '../../utils/selection';
import { sub } from '../../utils/vector';
import { clamp } from '../../utils/number';
import { applyStyle, getArcObject, reorder, toOpacityKey } from '../utils';
// Render rect in different coordinate.
export function rect(document, points, value, coordinate, style = {}) {
    const { inset = 0, radius = 0, insetLeft = inset, insetTop = inset, insetRight = inset, insetBottom = inset, radiusBottomLeft = radius, radiusBottomRight = radius, radiusTopLeft = radius, radiusTopRight = radius, minWidth = -Infinity, maxWidth = Infinity, minHeight = -Infinity } = style, rest = __rest(style, ["inset", "radius", "insetLeft", "insetTop", "insetRight", "insetBottom", "radiusBottomLeft", "radiusBottomRight", "radiusTopLeft", "radiusTopRight", "minWidth", "maxWidth", "minHeight"]);
    if (!isPolar(coordinate) && !isHelix(coordinate)) {
        const tpShape = !!isTranspose(coordinate);
        const [p0, , p2] = tpShape ? reorder(points) : points;
        const [x, y] = p0;
        const [width, height] = sub(p2, p0);
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
            ? clamp(finalWidth, minHeight, Infinity)
            : clamp(finalWidth, minWidth, maxWidth);
        const clampHeight = tpShape
            ? clamp(finalHeight, minWidth, maxWidth)
            : clamp(finalHeight, minHeight, Infinity);
        const clampX = tpShape ? finalX : finalX - (clampWidth - finalWidth) / 2;
        const clampY = tpShape
            ? finalY - (clampHeight - finalHeight) / 2
            : finalY - (clampHeight - finalHeight);
        return select(document.createElement('rect', {}))
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
            .call(applyStyle, rest)
            .node();
    }
    // Render path in polar coordinate.
    const { y, y1 } = value;
    const center = coordinate.getCenter();
    const arcObject = getArcObject(coordinate, points, [y, y1]);
    const path = arc()
        .cornerRadius(radius)
        .padAngle((inset * Math.PI) / 180);
    return select(document.createElement('path', {}))
        .style('d', path(arcObject))
        .style('transform', `translate(${center[0]}, ${center[1]})`)
        .style('radius', radius)
        .style('inset', inset)
        .call(applyStyle, rest)
        .node();
}
/**
 * Render rect in different coordinate.
 * Calc arc path based on control points directly rather startAngle, endAngle, innerRadius,
 * outerRadius. This is not accurate and will cause bug when the range of y scale is [1, 0]
 * for cell geometry.
 */
export const Color = (options, context) => {
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
        if (isTranspose(coordinate)) {
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
        return (select(rect(document, points, value, coordinate, extendedStyle))
            .call(applyStyle, restDefaults)
            .style('fill', 'transparent')
            .style(colorAttribute, color)
            .style(toOpacityKey(options), opacity)
            .style('lineWidth', lineWidth)
            .style('stroke', stroke === undefined ? color : stroke)
            // shape.style has higher priority.
            .call(applyStyle, rest)
            .node());
    };
};
// @todo Should Shape have default animations using for ordinal scale?
Color.props = {
    defaultEnterAnimation: 'scaleInY',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=color.js.map