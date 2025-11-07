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
exports.Circle = exports.BaseCircle = void 0;
const selection_1 = require("../../utils/selection");
const utils_1 = require("../utils");
const color_1 = require("./color");
/**
 * Render point in different coordinate.
 */
const BaseCircle = (options, context) => {
    // Render border only when colorAttribute is stroke.
    const { colorAttribute, mode = 'auto' } = options, style = __rest(options, ["colorAttribute", "mode"]);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { lineWidth, color: defaultColor } = defaults;
        const finalLineWidth = style.stroke ? lineWidth || 1 : lineWidth;
        const { color = defaultColor, transform, opacity } = value;
        const [cx, cy] = (0, utils_1.getOrigin)(points);
        const r = (0, color_1.getRadius)(mode, points, value, coordinate);
        const finalRadius = r || style.r || defaults.r;
        return (0, selection_1.select)(document.createElement('circle', {}))
            .call(utils_1.applyStyle, defaults)
            .style('fill', 'transparent')
            .style('cx', cx)
            .style('cy', cy)
            .style('r', finalRadius)
            .style('lineWidth', finalLineWidth)
            .style('transform', transform)
            .style('transformOrigin', `${cx} ${cy}`)
            .style('stroke', color)
            .style((0, utils_1.toOpacityKey)(options), opacity)
            .style(colorAttribute, color)
            .call(utils_1.applyStyle, style)
            .node();
    };
};
exports.BaseCircle = BaseCircle;
/**
 * ●
 */
const Circle = (options, context) => {
    return (0, exports.BaseCircle)(Object.assign({ colorAttribute: 'fill' }, options), context);
};
exports.Circle = Circle;
exports.Circle.props = {
    defaultMarker: 'circle',
    defaultEnterAnimation: 'fadeIn',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=circle.js.map