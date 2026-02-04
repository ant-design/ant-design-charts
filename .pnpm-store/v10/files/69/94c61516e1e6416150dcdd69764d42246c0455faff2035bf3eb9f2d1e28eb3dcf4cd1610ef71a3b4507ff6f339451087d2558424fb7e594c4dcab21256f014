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
exports.Arc = void 0;
const d3_path_1 = require("@antv/vendor/d3-path");
const utils_1 = require("../utils");
const selection_1 = require("../../utils/selection");
const coordinate_1 = require("../../utils/coordinate");
const vector_1 = require("../../utils/vector");
/**
 * Connect points for 2 points:
 * - In rect, draw half circle.
 * - In polar, draw quadratic curve.
 */
const Arc = (options, context) => {
    const style = __rest(options, []);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const { color = defaultColor, transform } = value;
        const [from, to] = points;
        const path = (0, d3_path_1.path)();
        path.moveTo(from[0], from[1]);
        if ((0, coordinate_1.isPolar)(coordinate)) {
            const center = coordinate.getCenter();
            path.quadraticCurveTo(center[0], center[1], to[0], to[1]);
        }
        else {
            const center = (0, vector_1.mid)(from, to);
            const raduis = (0, vector_1.dist)(from, to) / 2;
            (0, utils_1.appendArc)(path, from, to, center, raduis);
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
exports.Arc = Arc;
exports.Arc.props = {
    defaultMarker: 'smooth',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=arc.js.map