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
exports.Vector = void 0;
const d3_path_1 = require("@antv/vendor/d3-path");
const utils_1 = require("../utils");
const selection_1 = require("../../utils/selection");
/**
 * Connect 2 points with a single line with arrow.
 * ----->
 */
const Vector = (options, context) => {
    const { arrow = true, arrowSize = '40%' } = options, style = __rest(options, ["arrow", "arrowSize"]);
    const { document } = context;
    return (points, value, defaults) => {
        const { defaultColor } = defaults, rest = __rest(defaults, ["defaultColor"]);
        const { color = defaultColor, transform } = value;
        const [from, to] = points;
        // Draw line
        const path = (0, d3_path_1.path)();
        path.moveTo(...from);
        path.lineTo(...to);
        // Draw 2 arrows.
        if (arrow) {
            // Calculate arrow end point.
            const [arrow1, arrow2] = (0, utils_1.arrowPoints)(from, to, { arrowSize });
            path.moveTo(...arrow1);
            path.lineTo(...to);
            path.lineTo(...arrow2);
        }
        return (0, selection_1.select)(document.createElement('path', {}))
            .call(utils_1.applyStyle, rest)
            .style('d', path.toString())
            .style('stroke', color)
            .style('transform', transform)
            .call(utils_1.applyStyle, style)
            .node();
    };
};
exports.Vector = Vector;
exports.Vector.props = {
    defaultMarker: 'line',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=vector.js.map