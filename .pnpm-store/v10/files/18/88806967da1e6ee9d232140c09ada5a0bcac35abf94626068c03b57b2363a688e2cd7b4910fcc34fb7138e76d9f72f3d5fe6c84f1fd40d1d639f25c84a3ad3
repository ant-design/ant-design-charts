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
import { Marker } from '@antv/component';
import { createElement } from '../../utils/createElement';
import { subObject } from '../../utils/helper';
import { select } from '../../utils/selection';
import { applyStyle } from '../../shape/utils';
/**
 * Get the path to draw a built-in badge, which is like a balloon.
 */
function getPath(r) {
    const offset = r / Math.sqrt(2);
    const dy = r * Math.sqrt(2);
    const [p0x, p0y] = [-offset, offset - dy];
    const [p1x, p1y] = [0, 0];
    const [p2x, p2y] = [offset, offset - dy];
    return [
        ['M', p0x, p0y],
        ['A', r, r, 0, 1, 1, p2x, p2y],
        ['L', p1x, p1y],
        ['Z'],
    ];
}
function inferTextPosition(shape) {
    const { min, max } = shape.getLocalBounds();
    return [(min[0] + max[0]) * 0.5, (min[1] + max[1]) * 0.5];
}
const BadgeShape = createElement((g) => {
    const _a = g.attributes, { class: className, x: x0, y: y0, transform } = _a, rest = __rest(_a, ["class", "x", "y", "transform"]);
    const markerStyle = subObject(rest, 'marker');
    const { size = 24 } = markerStyle;
    const symbol = () => getPath(size / 2);
    const bgShape = select(g)
        .maybeAppend('marker', () => new Marker({}))
        .call((selection) => selection.node().update(Object.assign({ symbol }, markerStyle)))
        .node();
    const [x, y] = inferTextPosition(bgShape);
    select(g)
        .maybeAppend('text', 'text')
        .style('x', x)
        .style('y', y)
        .call(applyStyle, rest);
});
export const Badge = (options, context) => {
    const style = __rest(options, []);
    return (points, value, defaults) => {
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const { color = defaultColor, text = '' } = value;
        const textStyle = {
            text: String(text),
            stroke: color,
            fill: color,
        };
        const [[x0, y0]] = points;
        return select(new BadgeShape())
            .call(applyStyle, rest)
            .style('transform', `translate(${x0},${y0})`)
            .call(applyStyle, textStyle)
            .call(applyStyle, style)
            .node();
    };
};
Badge.props = {
    defaultMarker: 'point',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=badge.js.map