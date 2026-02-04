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
import { Slider as SliderComponent } from '@antv/component';
import { format } from '@antv/vendor/d3-format';
import { isArray } from '@antv/util';
import { isTranspose } from '../utils/coordinate';
import { invert } from '../utils/scale';
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
export const Slider = (options) => {
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
            ? format(labelFormatter)
            : labelFormatter;
        const isHorizontal = orientation === 'horizontal';
        const reverse = isTranspose(coordinate) && isHorizontal;
        const { trackSize = sliderTheme.trackSize } = style;
        const [x0, y0] = inferPosition(bbox, position, trackSize);
        return new SliderComponent({
            className: 'slider',
            style: Object.assign({}, sliderTheme, Object.assign(Object.assign({ x: x0, y: y0, trackLength: isHorizontal ? width : height, orientation, formatter: (v) => {
                    const f = formatter || defaultFormatter;
                    const v1 = reverse ? 1 - v : v;
                    const tick = invert(scale, v1, true);
                    return f(tick);
                }, sparklineData: inferSparklineData(options, context) }, style), rest)),
        });
    };
};
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
    if (isArray(options.sparklineData))
        return options.sparklineData;
    return markValue(markState, ['y', 'series']);
}
Slider.props = {
    defaultPosition: 'bottom',
    defaultSize: 24,
    defaultOrder: 1,
    defaultCrossPadding: [12, 12],
    defaultPadding: [12, 12],
};
//# sourceMappingURL=slider.js.map