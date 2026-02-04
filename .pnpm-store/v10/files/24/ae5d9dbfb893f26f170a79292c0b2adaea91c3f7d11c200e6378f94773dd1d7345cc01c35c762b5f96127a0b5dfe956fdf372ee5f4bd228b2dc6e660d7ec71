"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const component_1 = require("@antv/component");
const createElement_1 = require("../../utils/createElement");
const helper_1 = require("../../utils/helper");
const selection_1 = require("../../utils/selection");
const utils_1 = require("../../shape/utils");
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
const BadgeShape = (0, createElement_1.createElement)((g) => {
    const _a = g.attributes, { class: className, x: x0, y: y0, transform } = _a, rest = __rest(_a, ["class", "x", "y", "transform"]);
    const markerStyle = (0, helper_1.subObject)(rest, 'marker');
    const { size = 24 } = markerStyle;
    const symbol = () => getPath(size / 2);
    const bgShape = (0, selection_1.select)(g)
        .maybeAppend('marker', () => new component_1.Marker({}))
        .call((selection) => selection.node().update(Object.assign({ symbol }, markerStyle)))
        .node();
    const [x, y] = inferTextPosition(bgShape);
    (0, selection_1.select)(g)
        .maybeAppend('text', 'text')
        .style('x', x)
        .style('y', y)
        .call(utils_1.applyStyle, rest);
});
const Badge = (options, context) => {
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
        return (0, selection_1.select)(new BadgeShape())
            .call(utils_1.applyStyle, rest)
            .style('transform', `translate(${x0},${y0})`)
            .call(utils_1.applyStyle, textStyle)
            .call(utils_1.applyStyle, style)
            .node();
    };
};
exports.Badge = Badge;
exports.Badge.props = {
    defaultMarker: 'point',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=badge.js.map