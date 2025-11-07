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
exports.Ribbon = void 0;
const d3_path_1 = require("@antv/vendor/d3-path");
const utils_1 = require("../utils");
const selection_1 = require("../../utils/selection");
const coordinate_1 = require("../../utils/coordinate");
const vector_1 = require("../../utils/vector");
function getRibbonPath(points, coordinate) {
    const [p0, p1, p2, p3] = points;
    const path = (0, d3_path_1.path)();
    // In polar, draw shape only for Chord.
    if ((0, coordinate_1.isPolar)(coordinate)) {
        const center = coordinate.getCenter();
        const radius = (0, vector_1.dist)(center, p0);
        path.moveTo(p0[0], p0[1]);
        // p0 -> p2
        path.quadraticCurveTo(center[0], center[1], p2[0], p2[1]);
        // p2 -> p3
        (0, utils_1.appendArc)(path, p2, p3, center, radius);
        // p3 -> p1
        path.quadraticCurveTo(center[0], center[1], p1[0], p1[1]);
        // p1 -> p0
        (0, utils_1.appendArc)(path, p1, p0, center, radius);
        path.closePath();
        return path;
    }
    // In Rect, draw shape for Sankey.
    path.moveTo(p0[0], p0[1]);
    path.bezierCurveTo(p0[0] / 2 + p2[0] / 2, p0[1], p0[0] / 2 + p2[0] / 2, p2[1], p2[0], p2[1]);
    path.lineTo(p3[0], p3[1]);
    path.bezierCurveTo(p3[0] / 2 + p1[0] / 2, p3[1], p3[0] / 2 + p1[0] / 2, p1[1], p1[0], p1[1]);
    path.lineTo(p0[0], p0[1]);
    path.closePath();
    return path;
}
/**
 * Connect points for 4 points:
 * - In rect, draw ribbon used in Sankey.
 * - In polar, draw arc used in Chord.
 */
const Ribbon = (options, context) => {
    const style = __rest(options, []);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const { color = defaultColor, transform } = value;
        const path = getRibbonPath(points, coordinate);
        return (0, selection_1.select)(document.createElement('path', {}))
            .call(utils_1.applyStyle, rest)
            .style('d', path.toString())
            .style('fill', color || defaultColor)
            .style('stroke', color || defaultColor)
            .style('transform', transform)
            .call(utils_1.applyStyle, style)
            .node();
    };
};
exports.Ribbon = Ribbon;
exports.Ribbon.props = {
    defaultMarker: 'square',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=ribbon.js.map