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
import { select } from '../../utils/selection';
import { applyStyle, getOrigin, toOpacityKey } from '../utils';
import { getRadius } from './color';
/**
 * Render point in different coordinate.
 */
export const BaseCircle = (options, context) => {
    // Render border only when colorAttribute is stroke.
    const { colorAttribute, mode = 'auto' } = options, style = __rest(options, ["colorAttribute", "mode"]);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { lineWidth, color: defaultColor } = defaults;
        const finalLineWidth = style.stroke ? lineWidth || 1 : lineWidth;
        const { color = defaultColor, transform, opacity } = value;
        const [cx, cy] = getOrigin(points);
        const r = getRadius(mode, points, value, coordinate);
        const finalRadius = r || style.r || defaults.r;
        return select(document.createElement('circle', {}))
            .call(applyStyle, defaults)
            .style('fill', 'transparent')
            .style('cx', cx)
            .style('cy', cy)
            .style('r', finalRadius)
            .style('lineWidth', finalLineWidth)
            .style('transform', transform)
            .style('transformOrigin', `${cx} ${cy}`)
            .style('stroke', color)
            .style(toOpacityKey(options), opacity)
            .style(colorAttribute, color)
            .call(applyStyle, style)
            .node();
    };
};
/**
 * ●
 */
export const Circle = (options, context) => {
    return BaseCircle(Object.assign({ colorAttribute: 'fill' }, options), context);
};
Circle.props = {
    defaultMarker: 'circle',
    defaultEnterAnimation: 'fadeIn',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=circle.js.map