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
exports.VHV = void 0;
const d3_path_1 = require("@antv/vendor/d3-path");
const utils_1 = require("../utils");
const selection_1 = require("../../utils/selection");
const coordinate_1 = require("../../utils/coordinate");
const vector_1 = require("../../utils/vector");
/**
 * Get vhv path in different coordinate.
 */
function getVHVPath(from, to, coordinate, ratio) {
    const path = (0, d3_path_1.path)();
    if ((0, coordinate_1.isPolar)(coordinate)) {
        const center = coordinate.getCenter();
        const a = (0, vector_1.dist)(from, center);
        const b = (0, vector_1.dist)(to, center);
        const radius = (b - a) * ratio + a;
        path.moveTo(from[0], from[1]);
        (0, utils_1.appendArc)(path, from, to, center, radius);
        path.lineTo(to[0], to[1]);
        return path;
    }
    if ((0, coordinate_1.isTranspose)(coordinate)) {
        path.moveTo(from[0], from[1]);
        // VHV in x.
        path.lineTo(from[0] + (to[0] - from[0]) * ratio, from[1]);
        path.lineTo(from[0] + (to[0] - from[0]) * ratio, to[1]);
        path.lineTo(to[0], to[1]);
        return path;
    }
    path.moveTo(from[0], from[1]);
    // VHV in y.
    path.lineTo(from[0], from[1] + (to[1] - from[1]) * ratio);
    path.lineTo(to[0], from[1] + (to[1] - from[1]) * ratio);
    path.lineTo(to[0], to[1]);
    return path;
}
/**
 * Connect 2 points with a VHV line, used in tree.
 */
const VHV = (options, context) => {
    const { cornerRatio = 1 / 3 } = options, style = __rest(options, ["cornerRatio"]);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { defaultColor } = defaults, rest = __rest(defaults, ["defaultColor"]);
        const { color = defaultColor, transform } = value;
        const [from, to] = points;
        const path = getVHVPath(from, to, coordinate, cornerRatio);
        return (0, selection_1.select)(document.createElement('path', {}))
            .call(utils_1.applyStyle, rest)
            .style('d', path.toString())
            .style('stroke', color)
            .style('transform', transform)
            .call(utils_1.applyStyle, style)
            .node();
    };
};
exports.VHV = VHV;
exports.VHV.props = {
    defaultMarker: 'vhv',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=vhv.js.map