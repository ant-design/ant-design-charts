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
const utils_1 = require("../utils");
const selection_1 = require("../../utils/selection");
/**
 * Draw a filled or hollow path.
 */
const Color = (options, context) => {
    const { arrow, colorAttribute } = options, style = __rest(options, ["arrow", "colorAttribute"]);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor, stroke } = defaults, rest = __rest(defaults, ["color", "stroke"]);
        const { d, color = defaultColor } = value;
        const [width, height] = coordinate.getSize();
        return ((0, selection_1.select)(document.createElement('path', {}))
            .call(utils_1.applyStyle, rest)
            // Path support string, function with parameter { width, height }.
            .style('d', typeof d === 'function' ? d({ width, height }) : d)
            .style(colorAttribute, color)
            .call(utils_1.applyStyle, style)
            .node());
    };
};
exports.Color = Color;
exports.Color.props = {
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=color.js.map