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
exports.LegendContinuous = void 0;
const g_1 = require("@antv/g");
const component_1 = require("@antv/component");
const scale_1 = require("@antv/scale");
const d3_format_1 = require("@antv/vendor/d3-format");
const array_1 = require("../utils/array");
const utils_1 = require("./utils");
function updateShapeDimensions(shape, finalSize, orientation) {
    shape.size = finalSize;
    if ((0, utils_1.isHorizontal)(orientation)) {
        shape.height = finalSize;
    }
    else {
        shape.width = finalSize;
    }
    return shape;
}
function inferContinuousShape(value, options, component) {
    const { size } = options;
    const shape = (0, utils_1.inferComponentShape)(value, options, component);
    return updateShapeDimensions(shape, size, shape.orientation);
}
function getFormatter(max) {
    return (value) => ({
        value: value / max,
        label: String(value),
    });
}
function getQuantizeOrQuantileConfig(shape, colorScale, min, max, range) {
    const thresholds = colorScale.thresholds;
    const formatter = getFormatter(max);
    return Object.assign(Object.assign({}, shape), { color: range, data: [min, ...thresholds, max].map(formatter) });
}
function getThresholdConfig(shape, colorScale, range) {
    const thresholds = colorScale.thresholds;
    const data = [-Infinity, ...thresholds, Infinity].map((value, index) => ({
        value: index,
        label: value,
    }));
    return Object.assign(Object.assign({}, shape), { data, color: range, labelFilter: (datum, index) => {
            return index > 0 && index < data.length - 1;
        } });
}
function rangeOf(scale) {
    const { domain } = scale.getOptions();
    const [min, max] = [domain[0], (0, array_1.lastOf)(domain)];
    return [min, max];
}
/**
 * if color scale is not defined, create a constant color scale based on default color
 * @param scale
 * @param theme
 */
function createColorScale(scale, defaultColor) {
    const options = scale.getOptions();
    const newScale = scale.clone();
    newScale.update(Object.assign(Object.assign({}, options), { range: [(0, g_1.parseColor)(defaultColor).toString()] }));
    return newScale;
}
function getLinearConfig(shape, colorScale, sizeScale, opacityScale, scales, theme) {
    const { length } = shape;
    const definedScale = sizeScale || opacityScale;
    // Only use defaultColor when there is no color scale
    // in this view.
    const defaultColor = scales.color
        ? theme.legendContinuous.ribbonFill || 'black'
        : theme.color;
    const scale = colorScale || createColorScale(definedScale, defaultColor);
    const [min, max] = rangeOf(scale);
    const [domainMin, domainMax] = rangeOf([colorScale, sizeScale, opacityScale]
        .filter((d) => d !== undefined)
        .find((d) => !(d instanceof scale_1.Constant)));
    return Object.assign(Object.assign({}, shape), { domain: [domainMin, domainMax], data: scale.getTicks().map((value) => ({ value })), color: new Array(Math.floor(length)).fill(0).map((d, i) => {
            const value = ((max - min) / (length - 1)) * i + min;
            const color = scale.map(value) || defaultColor;
            const opacity = opacityScale ? opacityScale.map(value) : 1;
            return color.replace(/rgb[a]*\(([\d]{1,3}) *, *([\d]{1,3}) *, *([\d]{1,3})[\S\s]*\)/, (match, p1, p2, p3) => `rgba(${p1}, ${p2}, ${p3}, ${opacity})`);
        }) });
}
function inferContinuousConfig(scales, scale, value, options, component, theme) {
    const colorScale = (0, utils_1.scaleOf)(scales, 'color');
    const shape = inferContinuousShape(value, options, component);
    if (colorScale instanceof scale_1.Threshold) {
        const { range } = colorScale.getOptions();
        const [min, max] = rangeOf(colorScale);
        // for quantize, quantile scale
        if (colorScale instanceof scale_1.Quantize || colorScale instanceof scale_1.Quantile) {
            return getQuantizeOrQuantileConfig(shape, colorScale, min, max, range);
        }
        // for threshold
        return getThresholdConfig(shape, colorScale, range);
    }
    // for linear, pow, sqrt, log, time, utc scale
    const sizeScale = (0, utils_1.scaleOf)(scales, 'size');
    const opacityScale = (0, utils_1.scaleOf)(scales, 'opacity');
    return getLinearConfig(shape, colorScale, sizeScale, opacityScale, scale, theme);
}
/**
 * Guide Component for continuous color scale.
 * @todo Custom style.
 */
const LegendContinuous = (options) => {
    const { labelFormatter, layout, order, orientation, position, size, title, style, crossPadding, padding } = options, rest = __rest(options, ["labelFormatter", "layout", "order", "orientation", "position", "size", "title", "style", "crossPadding", "padding"]);
    return ({ scales, value, theme, scale }) => {
        const { bbox } = value;
        const { x, y, width, height } = bbox;
        const finalLayout = (0, utils_1.inferComponentLayout)(position, layout);
        const { legendContinuous: legendTheme = {} } = theme;
        const finalStyle = (0, utils_1.adaptor)(Object.assign({}, legendTheme, Object.assign(Object.assign({ titleText: (0, utils_1.titleContent)(title), labelAlign: 'value', labelFormatter: typeof labelFormatter === 'string'
                ? (d) => (0, d3_format_1.format)(labelFormatter)(d.label)
                : labelFormatter }, inferContinuousConfig(scales, scale, value, options, exports.LegendContinuous, theme)), style), rest));
        const layoutWrapper = new utils_1.G2Layout({
            style: Object.assign(Object.assign({ x,
                y,
                width,
                height }, finalLayout), { 
                // @ts-ignore
                subOptions: finalStyle }),
        });
        layoutWrapper.appendChild(new component_1.Continuous({
            className: 'legend-continuous',
            style: finalStyle,
        }));
        return layoutWrapper;
    };
};
exports.LegendContinuous = LegendContinuous;
exports.LegendContinuous.props = {
    defaultPosition: 'top',
    defaultOrientation: 'vertical',
    defaultOrder: 1,
    defaultSize: 60,
    defaultLength: 200,
    defaultLegendSize: 60,
    defaultPadding: [20, 10],
    defaultCrossPadding: [12, 12], // [horizontal, vertical]
};
//# sourceMappingURL=legendContinuous.js.map