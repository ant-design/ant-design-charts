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
import { isTranspose, isPolar } from '../../utils/coordinate';
import { dist } from '../../utils/vector';
/**
 * Get vhv path in different coordinate.
 */
function getVHVPath(from, to, coordinate, ratio) {
    const path = d3path();
    if (isPolar(coordinate)) {
        const center = coordinate.getCenter();
        const a = dist(from, center);
        const b = dist(to, center);
        const radius = (b - a) * ratio + a;
        path.moveTo(from[0], from[1]);
        appendArc(path, from, to, center, radius);
        path.lineTo(to[0], to[1]);
        return path;
    }
    if (isTranspose(coordinate)) {
        path.moveTo(from[0], from[1]);
        // VHV in x.
        path.lineTo(from[0] + (to[0] - from[0]) * ratio, from[1]);
        path.lineTo(from[0] + (to[0] - from[0]) * ratio, to[1]);
        path.lineTo(to[0], to[1]);
        return path;
    }
    path.moveTo(from[0], from[1]);
    // VHV in y.
    path.lineTo(from[0], from[1] + (to[1] - from[1]) * ratio);
    path.lineTo(to[0], from[1] + (to[1] - from[1]) * ratio);
    path.lineTo(to[0], to[1]);
    return path;
}
/**
 * Connect 2 points with a VHV line, used in tree.
 */
export const VHV = (options, context) => {
    const { cornerRatio = 1 / 3 } = options, style = __rest(options, ["cornerRatio"]);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { defaultColor } = defaults, rest = __rest(defaults, ["defaultColor"]);
        const { color = defaultColor, transform } = value;
        const [from, to] = points;
        const path = getVHVPath(from, to, coordinate, cornerRatio);
        return select(document.createElement('path', {}))
            .call(applyStyle, rest)
            .style('d', path.toString())
            .style('stroke', color)
            .style('transform', transform)
            .call(applyStyle, style)
            .node();
    };
};
VHV.props = {
    defaultMarker: 'vhv',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=vhv.js.map