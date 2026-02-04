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
exports.Color = void 0;
exports.getRadius = getRadius;
const coordinate_1 = require("../../utils/coordinate");
const marker_1 = require("../../utils/marker");
const selection_1 = require("../../utils/selection");
const string_1 = require("../../utils/string");
const utils_1 = require("../utils");
function getRadius(mode, points, value, coordinate) {
    if (points.length === 1)
        return undefined;
    const { size } = value;
    if (mode === 'fixed')
        return size;
    if (mode === 'normal' || (0, coordinate_1.isFisheye)(coordinate)) {
        const [[x0, y0], [x2, y2]] = points;
        const a = Math.abs((x2 - x0) / 2);
        const b = Math.abs((y2 - y0) / 2);
        return Math.max(0, (a + b) / 2);
    }
    return size;
}
/**
 * Render point in different coordinate.
 */
const Color = (options, context) => {
    // Render border only when colorAttribute is stroke.
    const { colorAttribute, symbol, mode = 'auto' } = options, style = __rest(options, ["colorAttribute", "symbol", "mode"]);
    const path = marker_1.Symbols.get((0, string_1.camelCase)(symbol)) || marker_1.Symbols.get('point');
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { lineWidth, color: defaultColor } = defaults;
        const finalLineWidth = style.stroke ? lineWidth || 1 : lineWidth;
        const { color = defaultColor, transform, opacity } = value;
        const [cx, cy] = (0, utils_1.getOrigin)(points);
        const r = getRadius(mode, points, value, coordinate);
        const finalRadius = r || style.r || defaults.r;
        return (0, selection_1.select)(document.createElement('path', {}))
            .call(utils_1.applyStyle, defaults)
            .style('fill', 'transparent')
            .style('d', path(cx, cy, finalRadius))
            .style('lineWidth', finalLineWidth)
            .style('transform', transform)
            .style('transformOrigin', `${cx - finalRadius} ${cy - finalRadius}`)
            .style('stroke', color)
            .style((0, utils_1.toOpacityKey)(options), opacity)
            .style(colorAttribute, color)
            .call(utils_1.applyStyle, style)
            .node();
    };
};
exports.Color = Color;
exports.Color.props = {
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=color.js.map