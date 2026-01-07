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
import { isPolar } from '../../utils/coordinate';
import { angle, sub, dist } from '../../utils/vector';
function getPath(p, coordinate, size = 4) {
    const path = d3path();
    if (!isPolar(coordinate)) {
        path.moveTo(...p[2]);
        path.lineTo(...p[3]);
        path.lineTo(p[3][0] - size, p[3][1]);
        path.lineTo(p[10][0] - size, p[10][1]);
        path.lineTo(p[10][0] + size, p[10][1]);
        path.lineTo(p[3][0] + size, p[3][1]);
        path.lineTo(...p[3]);
        path.closePath();
        path.moveTo(...p[10]);
        path.lineTo(...p[11]);
        path.moveTo(p[3][0] + size / 2, p[8][1]);
        path.arc(p[3][0], p[8][1], size / 2, 0, Math.PI * 2);
        path.closePath();
        return path;
    }
    const center = coordinate.getCenter();
    const [x, y] = center;
    const radiusQ3 = dist(center, p[3]);
    const radiusMedian = dist(center, p[8]);
    const radiusQ1 = dist(center, p[10]);
    const middleAngle = angle(sub(p[2], center));
    const rectAngle = Math.asin(size / radiusMedian);
    const startAngle = middleAngle - rectAngle;
    const endAngle = middleAngle + rectAngle;
    path.moveTo(...p[2]);
    path.lineTo(...p[3]);
    path.moveTo(Math.cos(startAngle) * radiusQ3 + x, Math.sin(startAngle) * radiusQ3 + y);
    path.arc(x, y, radiusQ3, startAngle, endAngle);
    path.lineTo(Math.cos(endAngle) * radiusQ1 + x, Math.sin(endAngle) * radiusQ1 + y);
    path.arc(x, y, radiusQ1, endAngle, startAngle, true);
    path.lineTo(Math.cos(startAngle) * radiusQ3 + x, Math.sin(startAngle) * radiusQ3 + y);
    path.closePath();
    path.moveTo(...p[10]);
    path.lineTo(...p[11]);
    const a = (startAngle + endAngle) / 2;
    path.moveTo(Math.cos(a) * (radiusMedian + size / 2) + x, Math.sin(a) * (radiusMedian + size / 2) + y);
    path.arc(Math.cos(a) * radiusMedian + x, Math.sin(a) * radiusMedian + y, size / 2, a, Math.PI * 2 + a);
    path.closePath();
    return path;
}
export const Violin = (options, context) => {
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color, transform } = value;
        // TODO: how to setting it by size channel.
        const size = 4;
        const { color: defaultColor, fill = defaultColor, stroke = defaultColor } = defaults, rest = __rest(defaults, ["color", "fill", "stroke"]);
        const path = getPath(points, coordinate, size);
        return select(document.createElement('path', {}))
            .call(applyStyle, rest)
            .style('d', path.toString())
            .style('stroke', stroke)
            .style('fill', color || fill)
            .style('transform', transform)
            .call(applyStyle, options)
            .node();
    };
};
Violin.props = {
    defaultMarker: 'point',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=violin.js.map