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
exports.Gauge = void 0;
const util_1 = require("@antv/util");
const g_1 = require("@antv/g");
const helper_1 = require("../utils/helper");
const coordinate_1 = require("../utils/coordinate");
const coordinate_2 = require("../coordinate");
const utils_1 = require("../shape/utils");
const selection_1 = require("../utils/selection");
const shape_1 = require("../shape");
const indicatorShape = (options, context) => {
    const { shape, radius } = options, style = __rest(options, ["shape", "radius"]);
    const pointerStyle = (0, helper_1.subObject)(style, 'pointer');
    const pinStyle = (0, helper_1.subObject)(style, 'pin');
    const { shape: pointerShape } = pointerStyle, resPointerStyle = __rest(pointerStyle, ["shape"]);
    const { shape: pinShape } = pinStyle, resPinStyle = __rest(pinStyle, ["shape"]);
    const { coordinate, theme } = context;
    return (points, value) => {
        // Invert points.
        const invertedPoints = points.map((p) => coordinate.invert(p));
        // Get new coordinate.
        const [startAngle, endAngle, innerRadius] = (0, coordinate_1.getTransformOptions)(coordinate, 'polar');
        const newCoordinate = coordinate.clone();
        const { color: stroke } = value;
        const newTransformations = (0, coordinate_2.Radial)({
            startAngle,
            endAngle,
            innerRadius,
            outerRadius: radius,
        });
        newTransformations.push(['cartesian']);
        newCoordinate.update({
            transformations: newTransformations,
        });
        const newPoints = invertedPoints.map((p) => newCoordinate.map(p));
        const [x, y] = (0, utils_1.getOrigin)(newPoints);
        const [cx, cy] = coordinate.getCenter();
        const pointerAttrs = Object.assign(Object.assign({ x1: x, y1: y, x2: cx, y2: cy, stroke }, resPointerStyle), style);
        const pinAttrs = Object.assign(Object.assign({ cx,
            cy,
            stroke }, resPinStyle), style);
        const indicatorGroup = (0, selection_1.select)(new g_1.Group());
        if (!(0, helper_1.isUnset)(pointerShape)) {
            typeof pointerShape === 'function'
                ? indicatorGroup.append(() => pointerShape(newPoints, value, newCoordinate, theme))
                : indicatorGroup.append('line').call(utils_1.applyStyle, pointerAttrs).node();
        }
        if (!(0, helper_1.isUnset)(pinShape)) {
            typeof pinShape === 'function'
                ? indicatorGroup.append(() => pinShape(newPoints, value, newCoordinate, theme))
                : indicatorGroup.append('circle').call(utils_1.applyStyle, pinAttrs).node();
        }
        return indicatorGroup.node();
    };
};
const DEFAULT_OPTIONS = {
    coordinate: {
        type: 'radial',
        innerRadius: 0.9,
        outerRadius: 1,
        startAngle: (-11 / 10) * Math.PI,
        endAngle: (1 / 10) * Math.PI,
    },
    axis: {
        x: false,
    },
    legend: false,
    tooltip: false,
    encode: {
        x: 'x',
        y: 'y',
        color: 'color',
    },
    scale: {
        color: {
            range: ['#30BF78', '#D0D0D0'],
        },
    },
};
const DEFAULT_INDICATOR_OPTIONS = {
    style: {
        shape: indicatorShape,
        lineWidth: 4,
        pointerLineCap: 'round',
        pinR: 10,
        pinFill: '#fff',
        radius: 0.6,
    },
};
const DEFAULT_TEXT_OPTIONS = {
    type: 'text',
    style: {
        x: '50%',
        y: '60%',
        textAlign: 'center',
        textBaseline: 'middle',
        fontSize: 20,
        fontWeight: 800,
        fill: '#888',
    },
    tooltip: false,
};
function getGaugeData(data) {
    if ((0, util_1.isNumber)(data)) {
        // Percent range [0, 1].
        const percent = Math.max(0, Math.min(data, 1));
        return {
            percent,
            target: percent,
            total: 1,
        };
    }
    return data;
}
function dataTransform(data, scale) {
    const { name = 'score', target, total, percent, thresholds = [], } = getGaugeData(data);
    const _target = percent || target;
    const _total = percent ? 1 : total;
    const newScale = Object.assign({ y: {
            domain: [0, _total],
        } }, scale);
    if (!thresholds.length) {
        return {
            targetData: [{ x: name, y: _target, color: 'target' }],
            totalData: [
                { x: name, y: _target, color: 'target' },
                { x: name, y: _total - _target, color: 'total' },
            ],
            target: _target,
            total: _total,
            scale: newScale,
        };
    }
    return {
        targetData: [{ x: name, y: _target, color: 'target' }],
        totalData: thresholds.map((d, i) => ({
            x: name,
            y: i >= 1 ? d - thresholds[i - 1] : d,
            color: i,
        })),
        target: _target,
        total: _total,
        scale: newScale,
    };
}
function getTextContent(textStyle, { target, total }) {
    const { content } = textStyle;
    return content ? content(target, total) : target.toString();
}
const Gauge = (options) => {
    const { data = {}, scale = {}, style = {}, animate = {}, transform = [] } = options, resOptions = __rest(options, ["data", "scale", "style", "animate", "transform"]);
    const { targetData, totalData, target, total, scale: newScale, } = dataTransform(data, scale);
    const _a = (0, helper_1.subObject)(style, 'text'), { tooltip } = _a, textStyle = __rest(_a, ["tooltip"]);
    // pointer + pin
    const indicatorStyle = (0, helper_1.filterPrefixObject)(style, ['pointer', 'pin']);
    const arcStyle = (0, helper_1.subObject)(style, 'arc');
    const shape = arcStyle.shape;
    return [
        (0, util_1.deepMix)({}, DEFAULT_OPTIONS, Object.assign({ type: 'interval', transform: [{ type: 'stackY' }], data: totalData, scale: newScale, style: shape === 'round' ? Object.assign(Object.assign({}, arcStyle), { shape: shape_1.GaugeRound }) : arcStyle, animate: typeof animate === 'object' ? (0, helper_1.subObject)(animate, 'arc') : animate }, resOptions)),
        (0, util_1.deepMix)({}, DEFAULT_OPTIONS, DEFAULT_INDICATOR_OPTIONS, Object.assign({ type: 'point', data: targetData, scale: newScale, style: indicatorStyle, animate: typeof animate === 'object' ? (0, helper_1.subObject)(animate, 'indicator') : animate }, resOptions)),
        (0, util_1.deepMix)({}, DEFAULT_TEXT_OPTIONS, {
            style: Object.assign({ text: getTextContent(textStyle, { target, total }) }, textStyle),
            tooltip,
            animate: typeof animate === 'object' ? (0, helper_1.subObject)(animate, 'text') : animate,
        }),
    ];
};
exports.Gauge = Gauge;
exports.Gauge.props = {};
//# sourceMappingURL=gauge.js.map