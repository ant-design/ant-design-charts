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
exports.Line = void 0;
const d3_shape_1 = require("@antv/vendor/d3-shape");
const coordinate_1 = require("../../utils/coordinate");
const selection_1 = require("../../utils/selection");
const vector_1 = require("../../utils/vector");
const helper_1 = require("../../utils/helper");
const utils_1 = require("../utils");
function getArrowMarker(document, arrowSize, arrowStyle) {
    const arrowMarker = document.createElement('path', {
        style: Object.assign({ d: `M ${arrowSize},${arrowSize} L -${arrowSize},0 L ${arrowSize},-${arrowSize} L 0,0 Z`, transformOrigin: 'center' }, arrowStyle),
    });
    return arrowMarker;
}
function getPath(points, coordinate) {
    if (!(0, coordinate_1.isPolar)(coordinate))
        return (0, d3_shape_1.line)()
            .x((d) => d[0])
            .y((d) => d[1])(points);
    const center = coordinate.getCenter();
    return (0, d3_shape_1.arc)()({
        startAngle: 0,
        endAngle: Math.PI * 2,
        outerRadius: (0, vector_1.dist)(points[0], center),
        innerRadius: (0, vector_1.dist)(points[1], center),
    });
}
function getTransform(coordinate, transform) {
    if (!(0, coordinate_1.isPolar)(coordinate))
        return transform;
    const [cx, cy] = coordinate.getCenter();
    return `translate(${cx}, ${cy}) ${transform || ''}`;
}
const Line = (options, context) => {
    const { arrow, arrowSize = 4 } = options, style = __rest(options, ["arrow", "arrowSize"]);
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor, lineWidth } = defaults, shapeTheme = __rest(defaults, ["color", "lineWidth"]);
        const { color = defaultColor, size = lineWidth } = value;
        const arrowMarker = arrow
            ? getArrowMarker(document, arrowSize, Object.assign({ fill: style.stroke || color, stroke: style.stroke || color }, (0, helper_1.subObject)(style, 'arrow')))
            : null;
        const path = getPath(points, coordinate);
        const transform = getTransform(coordinate, value.transform);
        return (0, selection_1.select)(document.createElement('path', {}))
            .call(utils_1.applyStyle, shapeTheme)
            .style('d', path)
            .style('stroke', color)
            .style('lineWidth', size)
            .style('transform', transform)
            .style('markerEnd', arrowMarker)
            .call(utils_1.applyStyle, style)
            .node();
    };
};
exports.Line = Line;
exports.Line.props = {
    defaultMarker: 'line',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=line.js.map