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
import { applyStyle, arrowPoints } from '../utils';
import { select } from '../../utils/selection';
/**
 * Connect 2 points with a single line with arrow.
 * ----->
 */
export const Vector = (options, context) => {
    const { arrow = true, arrowSize = '40%' } = options, style = __rest(options, ["arrow", "arrowSize"]);
    const { document } = context;
    return (points, value, defaults) => {
        const { defaultColor } = defaults, rest = __rest(defaults, ["defaultColor"]);
        const { color = defaultColor, transform } = value;
        const [from, to] = points;
        // Draw line
        const path = d3path();
        path.moveTo(...from);
        path.lineTo(...to);
        // Draw 2 arrows.
        if (arrow) {
            // Calculate arrow end point.
            const [arrow1, arrow2] = arrowPoints(from, to, { arrowSize });
            path.moveTo(...arrow1);
            path.lineTo(...to);
            path.lineTo(...arrow2);
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
Vector.props = {
    defaultMarker: 'line',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=vector.js.map