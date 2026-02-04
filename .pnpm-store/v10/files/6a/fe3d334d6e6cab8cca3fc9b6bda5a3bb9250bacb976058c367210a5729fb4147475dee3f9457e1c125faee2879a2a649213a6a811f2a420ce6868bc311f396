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
import { arc, line } from '@antv/vendor/d3-shape';
import { isPolar } from '../../utils/coordinate';
import { select } from '../../utils/selection';
import { dist } from '../../utils/vector';
import { subObject } from '../../utils/helper';
import { applyStyle } from '../utils';
function getArrowMarker(document, arrowSize, arrowStyle) {
    const arrowMarker = document.createElement('path', {
        style: Object.assign({ d: `M ${arrowSize},${arrowSize} L -${arrowSize},0 L ${arrowSize},-${arrowSize} L 0,0 Z`, transformOrigin: 'center' }, arrowStyle),
    });
    return arrowMarker;
}
function getPath(points, coordinate) {
    if (!isPolar(coordinate))
        return line()
            .x((d) => d[0])
            .y((d) => d[1])(points);
    const center = coordinate.getCenter();
    return arc()({
        startAngle: 0,
        endAngle: Math.PI * 2,
        outerRadius: dist(points[0], center),
        innerRadius: dist(points[1], center),
    });
}
function getTransform(coordinate, transform) {
    if (!isPolar(coordinate))
        return transform;
    const [cx, cy] = coordinate.getCenter();
    return `translate(${cx}, ${cy}) ${transform || ''}`;
}
export const Line = (options, context) => {
    const { arrow, arrowSize = 4 } = options, style = __rest(options, ["arrow", "arrowSize"]);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor, lineWidth } = defaults, shapeTheme = __rest(defaults, ["color", "lineWidth"]);
        const { color = defaultColor, size = lineWidth } = value;
        const arrowMarker = arrow
            ? getArrowMarker(document, arrowSize, Object.assign({ fill: style.stroke || color, stroke: style.stroke || color }, subObject(style, 'arrow')))
            : null;
        const path = getPath(points, coordinate);
        const transform = getTransform(coordinate, value.transform);
        return select(document.createElement('path', {}))
            .call(applyStyle, shapeTheme)
            .style('d', path)
            .style('stroke', color)
            .style('lineWidth', size)
            .style('transform', transform)
            .style('markerEnd', arrowMarker)
            .call(applyStyle, style)
            .node();
    };
};
Line.props = {
    defaultMarker: 'line',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=line.js.map