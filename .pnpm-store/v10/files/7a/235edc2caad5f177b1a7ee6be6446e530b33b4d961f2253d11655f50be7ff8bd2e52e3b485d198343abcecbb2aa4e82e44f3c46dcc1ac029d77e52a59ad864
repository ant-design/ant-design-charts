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
exports.Slider = void 0;
const component_1 = require("@antv/component");
const d3_format_1 = require("@antv/vendor/d3-format");
const util_1 = require("@antv/util");
const coordinate_1 = require("../utils/coordinate");
const scale_1 = require("../utils/scale");
function inferPosition(bbox, position, trackSize) {
    const { x, y, width, height } = bbox;
    if (position === 'left')
        return [x + width - trackSize, y];
    if (position === 'right')
        return [x, y];
    if (position === 'bottom')
        return [x, y];
    if (position === 'top')
        return [x, y + height - trackSize];
}
/**
 * Slider component.
 */
const Slider = (options) => {
    // do not pass size.
    const { orientation, labelFormatter, size, style = {}, position } = options, rest = __rest(options, ["orientation", "labelFormatter", "size", "style", "position"]);
    return (context) => {
        var _a;
        const { scales: [scale], value, theme, coordinate, } = context;
        const { bbox } = value;
        const { width, height } = bbox;
        const { slider: sliderTheme = {} } = theme;
        const defaultFormatter = ((_a = scale.getFormatter) === null || _a === void 0 ? void 0 : _a.call(scale)) || ((v) => v + '');
        const formatter = typeof labelFormatter === 'string'
            ? (0, d3_format_1.format)(labelFormatter)
            : labelFormatter;
        const isHorizontal = orientation === 'horizontal';
        const reverse = (0, coordinate_1.isTranspose)(coordinate) && isHorizontal;
        const { trackSize = sliderTheme.trackSize } = style;
        const [x0, y0] = inferPosition(bbox, position, trackSize);
        return new component_1.Slider({
            className: 'slider',
            style: Object.assign({}, sliderTheme, Object.assign(Object.assign({ x: x0, y: y0, trackLength: isHorizontal ? width : height, orientation, formatter: (v) => {
                    const f = formatter || defaultFormatter;
                    const v1 = reverse ? 1 - v : v;
                    const tick = (0, scale_1.invert)(scale, v1, true);
                    return f(tick);
                }, sparklineData: inferSparklineData(options, context) }, style), rest)),
        });
    };
};
exports.Slider = Slider;
function markValue(markState, channels) {
    const [value] = Array.from(markState.entries())
        .filter(([mark]) => mark.type === 'line' ||
        mark.type === 'area' ||
        mark.type === 'interval')
        .filter(([mark]) => mark.slider)
        .map(([mark]) => {
        const { encode, slider } = mark;
        if (slider === null || slider === void 0 ? void 0 : slider.x) {
            const channel = (name) => {
                const channel = encode[name];
                return [name, channel ? channel.value : undefined];
            };
            return Object.fromEntries(channels.map(channel));
        }
    });
    if (!(value === null || value === void 0 ? void 0 : value.series))
        return value === null || value === void 0 ? void 0 : value.y;
    const result = value.series.reduce((acc, curr, index) => {
        acc[curr] = acc[curr] || [];
        acc[curr].push(value.y[index]);
        return acc;
    }, {});
    return Object.values(result);
}
function inferSparklineData(options, context) {
    const { markState } = context;
    if ((0, util_1.isArray)(options.sparklineData))
        return options.sparklineData;
    return markValue(markState, ['y', 'series']);
}
exports.Slider.props = {
    defaultPosition: 'bottom',
    defaultSize: 24,
    defaultOrder: 1,
    defaultCrossPadding: [12, 12],
    defaultPadding: [12, 12],
};
//# sourceMappingURL=slider.js.map