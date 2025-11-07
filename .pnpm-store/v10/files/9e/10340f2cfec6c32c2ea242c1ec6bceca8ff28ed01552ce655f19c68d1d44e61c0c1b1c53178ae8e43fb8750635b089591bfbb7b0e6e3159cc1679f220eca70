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
exports.Advance = void 0;
const util_1 = require("@antv/util");
const component_1 = require("@antv/component");
const d3_shape_1 = require("@antv/vendor/d3-shape");
const createElement_1 = require("../../utils/createElement");
const utils_1 = require("../utils");
const helper_1 = require("../../utils/helper");
const selection_1 = require("../../utils/selection");
const vector_1 = require("../../utils/vector");
function getConnectorPoint(shape) {
    const { min: [x0, y0], max: [x1, y1], } = shape.getLocalBounds();
    let x = 0;
    let y = 0;
    if (x0 > 0)
        x = x0;
    if (x1 < 0)
        x = x1;
    if (y0 > 0)
        y = y0;
    if (y1 < 0)
        y = y1;
    return [x, y];
}
function inferBackgroundBounds(textShape, padding = []) {
    const [top = 0, right = 0, bottom = top, left = right] = padding;
    const container = textShape.parentNode;
    const angle = container.getEulerAngles();
    container.setEulerAngles(0);
    const { min, halfExtents } = textShape.getLocalBounds();
    const [x, y] = min;
    const [hw, hh] = halfExtents;
    container.setEulerAngles(angle);
    return {
        x: x - left,
        y: y - top,
        width: hw * 2 + left + right,
        height: hh * 2 + top + bottom,
    };
}
const cos = (p0, p1, p2) => {
    const a = (0, vector_1.dist)(p0, p1);
    const b = (0, vector_1.dist)(p1, p2);
    const c = (0, vector_1.dist)(p2, p0);
    return (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);
};
// A path from element to label.
// Adapted drawLabelLine from https://github.com/antvis/G2/blob/master/src/geometry/label/layout/pie/spider.ts
function inferConnectorPath(shape, end, control, coordCenter, left = true, top = true) {
    const path = (points) => (0, d3_shape_1.line)()(points);
    if (!end[0] && !end[1])
        return path([getConnectorPoint(shape), end]);
    if (!control.length)
        return path([[0, 0], end]);
    const [inflection, start] = control;
    const p1 = [...start];
    const p2 = [...inflection];
    // Label has been adjusted, so add offset to the label.
    if (start[0] !== inflection[0]) {
        const offset = left ? -4 : 4;
        p1[1] = start[1];
        // For the label in the first quadrant.
        if (top && !left) {
            p1[0] = Math.max(inflection[0], start[0] - offset);
            if (start[1] < inflection[1]) {
                p2[1] = p1[1];
            }
            else {
                p2[1] = inflection[1];
                p2[0] = Math.max(p2[0], p1[0] - offset);
            }
        }
        // For the label in the second quadrant.
        if (!top && !left) {
            p1[0] = Math.max(inflection[0], start[0] - offset);
            if (start[1] > inflection[1]) {
                p2[1] = p1[1];
            }
            else {
                p2[1] = inflection[1];
                p2[0] = Math.max(p2[0], p1[0] - offset);
            }
        }
        // For the label in the third quadrant.
        if (!top && left) {
            p1[0] = Math.min(inflection[0], start[0] - offset);
            if (start[1] > inflection[1]) {
                p2[1] = p1[1];
            }
            else {
                p2[1] = inflection[1];
                p2[0] = Math.min(p2[0], p1[0] - offset);
            }
        }
        // For the label in the fourth quadrant.
        if (top && left) {
            p1[0] = Math.min(inflection[0], start[0] - offset);
            if (start[1] < inflection[1]) {
                p2[1] = p1[1];
            }
            else {
                p2[1] = inflection[1];
                p2[0] = Math.min(p2[0], p1[0] - offset);
            }
        }
    }
    return path([start, p1, p2, inflection, end]);
}
exports.Advance = (0, createElement_1.createElement)((g) => {
    const _a = g.attributes, { className, 
    // Do not pass className
    class: _c, transform, rotate, labelTransform, labelTransformOrigin, x, y, x0 = x, y0 = y, text, background, connector, startMarker, endMarker, coordCenter, innerHTML } = _a, rest = __rest(_a, ["className", "class", "transform", "rotate", "labelTransform", "labelTransformOrigin", "x", "y", "x0", "y0", "text", "background", "connector", "startMarker", "endMarker", "coordCenter", "innerHTML"]);
    g.style.transform = `translate(${x}, ${y})`;
    // Position is invalid, do not render the UI,
    // or clear previous elements.
    if ([x, y, x0, y0].some((v) => !(0, util_1.isNumber)(v))) {
        g.children.forEach((d) => d.remove());
        return;
    }
    const _b = (0, helper_1.subObject)(rest, 'background'), { padding } = _b, backgroundStyle = __rest(_b, ["padding"]);
    const _d = (0, helper_1.subObject)(rest, 'connector'), { points: controlPoints = [] } = _d, connectorStyle = __rest(_d, ["points"]);
    let textShape;
    if (innerHTML) {
        textShape = (0, selection_1.select)(g)
            .maybeAppend('html', 'html', className)
            .style('zIndex', 0)
            .style('innerHTML', innerHTML)
            .call(utils_1.applyStyle, Object.assign({ transform: labelTransform, transformOrigin: labelTransformOrigin }, rest))
            .node();
    }
    else {
        textShape = (0, selection_1.select)(g)
            .maybeAppend('text', 'text')
            .style('zIndex', 0)
            .style('text', text)
            .call(utils_1.applyStyle, Object.assign({ textBaseline: 'middle', transform: labelTransform, transformOrigin: labelTransformOrigin }, rest))
            .node();
    }
    const rect = (0, selection_1.select)(g)
        .maybeAppend('background', 'rect')
        .style('zIndex', -1)
        .call(utils_1.applyStyle, inferBackgroundBounds(textShape, padding))
        .call(utils_1.applyStyle, background ? backgroundStyle : {})
        .node();
    const left = +x0 < coordCenter[0];
    const top = +y0 < coordCenter[1];
    const end = [+x0 - +x, +y0 - +y];
    const connectorPath = inferConnectorPath(rect, end, controlPoints, coordCenter, left, top);
    const markerStart = startMarker &&
        new component_1.Marker({
            id: 'startMarker',
            style: Object.assign({ x: 0, y: 0 }, (0, helper_1.subObject)(rest, 'startMarker')),
        });
    const markerEnd = endMarker &&
        new component_1.Marker({
            id: 'endMarker',
            style: Object.assign({ x: 0, y: 0 }, (0, helper_1.subObject)(rest, 'endMarker')),
        });
    (0, selection_1.select)(g)
        .maybeAppend('connector', 'path')
        .style('zIndex', 0)
        .style('d', connectorPath)
        .style('markerStart', markerStart)
        .style('markerEnd', markerEnd)
        .call(utils_1.applyStyle, connector ? connectorStyle : {});
});
//# sourceMappingURL=advance.js.map