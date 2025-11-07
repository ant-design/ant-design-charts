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
import { applyStyle } from '../utils';
import { select } from '../../utils/selection';
/**
 * Draw density shape.
 */
export const Density = (options, context) => {
    const { document } = context;
    return (points, value, defaults) => {
        const { transform } = value;
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const { color = defaultColor } = value;
        const [first, ...p] = points;
        // todo smooth, hollow
        const path = d3path();
        path.moveTo(...first);
        p.forEach(([x, y]) => {
            path.lineTo(x, y);
        });
        path.closePath();
        return select(document.createElement('path', {}))
            .call(applyStyle, rest)
            .style('d', path.toString())
            .style('stroke', color || defaultColor) // Always has stroke color.
            .style('fill', color || defaultColor)
            .style('fillOpacity', 0.4)
            .style('transform', transform)
            .call(applyStyle, options)
            .node();
    };
};
Density.props = {
    defaultMarker: 'square',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=density.js.map