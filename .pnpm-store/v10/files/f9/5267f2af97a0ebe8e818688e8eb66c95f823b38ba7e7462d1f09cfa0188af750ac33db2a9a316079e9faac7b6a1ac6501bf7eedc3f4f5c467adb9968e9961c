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
import { line, curveLinearClosed } from '@antv/vendor/d3-shape';
import { isTranspose } from '../../utils/coordinate';
import { select } from '../../utils/selection';
import { applyStyle, reorder } from '../utils';
/**
 * Adjust and return the new `points`.
 */
function getFunnelPoints(points, nextPoints, coordinate) {
    const [p0, p1, p2, p3] = points;
    if (isTranspose(coordinate)) {
        const newP1 = [nextPoints ? nextPoints[0][0] : p1[0], p1[1]];
        const newP2 = [nextPoints ? nextPoints[3][0] : p2[0], p2[1]];
        return [p0, newP1, newP2, p3];
    }
    const newP1 = [p1[0], nextPoints ? nextPoints[0][1] : p1[1]];
    const newP2 = [p2[0], nextPoints ? nextPoints[3][1] : p2[1]];
    return [p0, newP1, newP2, p3];
}
/**
 * Render funnel in different coordinate and using color channel for stroke and fill attribute.
 */
export const Funnel = (options, context) => {
    const { adjustPoints = getFunnelPoints } = options, style = __rest(options, ["adjustPoints"]);
    const { coordinate, document } = context;
    return (points, value, defaults, point2d) => {
        const { index } = value;
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const nextPoints = point2d[index + 1];
        const funnelPoints = adjustPoints(points, nextPoints, coordinate);
        const tpShape = !!isTranspose(coordinate);
        const [p0, p1, p2, p3] = tpShape ? reorder(funnelPoints) : funnelPoints;
        const { color = defaultColor, opacity } = value;
        const b = line().curve(curveLinearClosed)([p0, p1, p2, p3]);
        return select(document.createElement('path', {}))
            .call(applyStyle, rest)
            .style('d', b)
            .style('fill', color)
            .style('fillOpacity', opacity)
            .call(applyStyle, style)
            .node();
    };
};
Funnel.props = {
    defaultMarker: 'square',
};
//# sourceMappingURL=funnel.js.map