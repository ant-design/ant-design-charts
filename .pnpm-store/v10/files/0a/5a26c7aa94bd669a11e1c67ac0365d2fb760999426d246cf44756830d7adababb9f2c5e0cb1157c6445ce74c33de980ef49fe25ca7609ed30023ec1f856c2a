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
exports.Box = void 0;
const d3_path_1 = require("@antv/vendor/d3-path");
const utils_1 = require("../utils");
const selection_1 = require("../../utils/selection");
const coordinate_1 = require("../../utils/coordinate");
const vector_1 = require("../../utils/vector");
function getPath(points, coordinate) {
    const path = (0, d3_path_1.path)();
    if (!(0, coordinate_1.isPolar)(coordinate)) {
        path.moveTo(...points[0]);
        path.lineTo(...points[1]);
        path.moveTo(...points[2]);
        path.lineTo(...points[3]);
        path.moveTo(...points[4]);
        path.lineTo(...points[5]);
        path.lineTo(...points[6]);
        path.lineTo(...points[7]);
        path.closePath();
        path.moveTo(...points[8]);
        path.lineTo(...points[9]);
        path.moveTo(...points[10]);
        path.lineTo(...points[11]);
        path.moveTo(...points[12]);
        path.lineTo(...points[13]);
    }
    else {
        // In polar coordinate.
        const center = coordinate.getCenter();
        const [x, y] = center;
        const startAngle = (0, vector_1.angle)((0, vector_1.sub)(points[0], center));
        const endAngle = (0, vector_1.angle)((0, vector_1.sub)(points[1], center));
        const radiusHigh = (0, vector_1.dist)(center, points[2]);
        const radiusQ3 = (0, vector_1.dist)(center, points[3]);
        const radiusMedian = (0, vector_1.dist)(center, points[8]);
        const radiusQ1 = (0, vector_1.dist)(center, points[10]);
        const radiusLow = (0, vector_1.dist)(center, points[11]);
        path.moveTo(...points[0]);
        path.arc(x, y, radiusHigh, startAngle, endAngle);
        path.arc(x, y, radiusHigh, endAngle, startAngle, true);
        path.moveTo(...points[2]);
        path.lineTo(...points[3]);
        path.moveTo(...points[4]);
        path.arc(x, y, radiusQ3, startAngle, endAngle); // 4 -> 5
        path.lineTo(...points[6]); // 5 -> 6
        path.arc(x, y, radiusQ1, endAngle, startAngle, true); // 6 -> 7
        path.closePath();
        path.moveTo(...points[8]);
        path.arc(x, y, radiusMedian, startAngle, endAngle); // 8 -> 9
        path.arc(x, y, radiusMedian, endAngle, startAngle, true); // 9 -> 8
        path.moveTo(...points[10]);
        path.lineTo(...points[11]);
        path.moveTo(...points[12]);
        path.arc(x, y, radiusLow, startAngle, endAngle); // 12 -> 13
        path.arc(x, y, radiusLow, endAngle, startAngle, true); // 13 -> 12
    }
    return path;
}
const Box = (options, context) => {
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color, transform } = value;
        const { color: defaultColor, fill = defaultColor, stroke = defaultColor } = defaults, rest = __rest(defaults, ["color", "fill", "stroke"]);
        const path = getPath(points, coordinate);
        return (0, selection_1.select)(document.createElement('path', {}))
            .call(utils_1.applyStyle, rest)
            .style('d', path.toString())
            .style('stroke', stroke)
            .style('fill', color || fill)
            .style('transform', transform)
            .call(utils_1.applyStyle, options)
            .node();
    };
};
exports.Box = Box;
exports.Box.props = {
    defaultMarker: 'point',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=box.js.map