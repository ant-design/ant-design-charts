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
import { path as d3path } from '@antv/vendor/d3-path';
import { appendArc, applyStyle } from '../utils';
import { select } from '../../utils/selection';
import { isPolar } from '../../utils/coordinate';
import { dist, mid } from '../../utils/vector';
/**
 * Connect points for 2 points:
 * - In rect, draw half circle.
 * - In polar, draw quadratic curve.
 */
export const Arc = (options, context) => {
    const style = __rest(options, []);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const { color = defaultColor, transform } = value;
        const [from, to] = points;
        const path = d3path();
        path.moveTo(from[0], from[1]);
        if (isPolar(coordinate)) {
            const center = coordinate.getCenter();
            path.quadraticCurveTo(center[0], center[1], to[0], to[1]);
        }
        else {
            const center = mid(from, to);
            const raduis = dist(from, to) / 2;
            appendArc(path, from, to, center, raduis);
        }
        return select(document.createElement('path', {}))
            .call(applyStyle, rest)
            .style('d', path.toString())
            .style('stroke', color)
            .style('transform', transform)
            .call(applyStyle, style)
            .node();
    };
};
Arc.props = {
    defaultMarker: 'smooth',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=arc.js.map