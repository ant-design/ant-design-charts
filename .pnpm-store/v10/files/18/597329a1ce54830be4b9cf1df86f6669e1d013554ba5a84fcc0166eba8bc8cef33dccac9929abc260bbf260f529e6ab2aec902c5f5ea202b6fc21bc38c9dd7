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
exports.Connector = void 0;
const g_1 = require("@antv/g");
const component_1 = require("@antv/component");
const d3_shape_1 = require("@antv/vendor/d3-shape");
const coordinate_1 = require("../../utils/coordinate");
const helper_1 = require("../../utils/helper");
const selection_1 = require("../../utils/selection");
const utils_1 = require("../utils");
function inferSymbol(x, y, r) {
    return [['M', x, y], ['L', x + 2 * r, y - r], ['L', x + 2 * r, y + r], ['Z']];
}
/**
 * @todo support polar later.
 */
function inferConnectorPath(points) {
    return (0, d3_shape_1.line)()
        .x((d) => d[0])
        .y((d) => d[1])(points);
}
function getPoints(coordinate, points, sourceOffsetY, targetOffsetY, sourceOffsetX, targetOffsetX, length1 = 0) {
    const [[x0, y0], [x1, y1]] = points;
    if ((0, coordinate_1.isTranspose)(coordinate)) {
        const X0 = x0 + sourceOffsetY;
        const X1 = x1 + targetOffsetY;
        const X = X0 + length1;
        const Y0 = y0 + sourceOffsetX;
        const Y1 = y1 + targetOffsetX;
        return [
            [X0, Y0],
            [X, Y0],
            [X, Y1],
            [X1, Y1],
        ];
    }
    const Y0 = y0 - sourceOffsetY;
    const Y1 = y1 - targetOffsetY;
    const Y = Y0 - length1;
    const X0 = x0 - sourceOffsetX;
    const X1 = x1 - targetOffsetX;
    return [
        [X0, Y0],
        [X0, Y],
        [X1, Y],
        [X1, Y1],
    ];
}
const Connector = (options, context) => {
    const { offsetX = 0, sourceOffsetX = offsetX, targetOffsetX = offsetX, offsetY = 0, sourceOffsetY = offsetY, targetOffsetY = offsetY, connectLength1: length1, endMarker = true } = options, style = __rest(options, ["offsetX", "sourceOffsetX", "targetOffsetX", "offsetY", "sourceOffsetY", "targetOffsetY", "connectLength1", "endMarker"]);
    const { coordinate } = context;
    return (points, value, defaults) => {
        const { color: defaultColor, connectLength1 } = defaults, rest = __rest(defaults, ["color", "connectLength1"]);
        const { color, transform } = value;
        const P = getPoints(coordinate, points, sourceOffsetY, targetOffsetY, sourceOffsetX, targetOffsetX, length1 !== null && length1 !== void 0 ? length1 : connectLength1);
        const makerStyle = (0, helper_1.subObject)(Object.assign(Object.assign({}, style), defaults), 'endMarker');
        return (0, selection_1.select)(new g_1.Path())
            .call(utils_1.applyStyle, rest)
            .style('d', inferConnectorPath(P))
            .style('stroke', color || defaultColor)
            .style('transform', transform)
            .style('markerEnd', endMarker
            ? new component_1.Marker({
                className: 'marker',
                style: Object.assign(Object.assign({}, makerStyle), { symbol: inferSymbol }),
            })
            : null)
            .call(utils_1.applyStyle, style)
            .node();
    };
};
exports.Connector = Connector;
exports.Connector.props = {
    defaultMarker: 'line',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=connector.js.map