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
 * Connect 2 points with a smooth line, used in tree.
 */
export const Smooth = (options, context) => {
    const style = __rest(options, []);
    const { document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const { color = defaultColor, transform } = value;
        const [from, to] = points;
        const path = d3path();
        path.moveTo(from[0], from[1]);
        path.bezierCurveTo(from[0] / 2 + to[0] / 2, from[1], from[0] / 2 + to[0] / 2, to[1], to[0], to[1]);
        return select(document.createElement('path', {}))
            .call(applyStyle, rest)
            .style('d', path.toString())
            .style('stroke', color)
            .style('transform', transform)
            .call(applyStyle, style)
            .node();
    };
};
Smooth.props = {
    defaultMarker: 'smooth',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=smooth.js.map