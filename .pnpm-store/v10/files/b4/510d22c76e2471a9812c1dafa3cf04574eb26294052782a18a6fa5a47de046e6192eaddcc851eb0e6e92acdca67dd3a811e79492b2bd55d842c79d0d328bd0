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
exports.Pack = void 0;
const util_1 = require("@antv/util");
const d3_hierarchy_1 = require("@antv/vendor/d3-hierarchy");
const helper_1 = require("../utils/helper");
const mark_1 = require("../utils/mark");
const utils_1 = require("./utils");
const GET_DEFAULT_LAYOUT_OPTIONS = (width, height) => ({
    size: [width, height],
    padding: 0,
    sort: (a, b) => b.value - a.value,
});
const GET_DEFAULT_OPTIONS = (width, height, encode) => ({
    type: 'point',
    axis: false,
    legend: false,
    scale: {
        x: { domain: [0, width] },
        y: { domain: [0, height] },
        size: { type: 'identity' },
    },
    encode: {
        x: 'x',
        y: 'y',
        size: 'r',
        shape: 'point',
    },
    style: {
        fill: !encode.color ? (d) => (d.height === 0 ? '#ddd' : '#fff') : undefined,
        stroke: !encode.color ? (d) => (d.height === 0 ? '' : '#000') : undefined,
    },
});
const DEFAULT_LABEL_OPTIONS = {
    text: '',
    position: 'inside',
    textOverflow: 'clip',
    wordWrap: true,
    maxLines: 1,
    wordWrapWidth: (d) => d.r * 2,
};
const DEFAULT_TOOLTIP_OPTIONS = {
    title: (d) => d.data.name,
    items: [{ field: 'value' }],
};
const dataTransform = (data, layout, encode) => {
    const { value } = encode;
    const root = (0, util_1.isArray)(data)
        ? (0, d3_hierarchy_1.stratify)().path(layout.path)(data)
        : (0, d3_hierarchy_1.hierarchy)(data);
    value ? root.sum((d) => (0, utils_1.field)(value)(d)).sort(layout.sort) : root.count();
    // @ts-ignore
    (0, d3_hierarchy_1.pack)().size(layout.size).padding(layout.padding)(root);
    return root.descendants();
};
const Pack = (markOptions, context) => {
    const { width, height } = context;
    const { data, encode = {}, scale = {}, style = {}, layout = {}, labels = [], tooltip = {} } = markOptions, resOptions = __rest(markOptions, ["data", "encode", "scale", "style", "layout", "labels", "tooltip"]);
    const DEFAULT_OPTIONS = GET_DEFAULT_OPTIONS(width, height, encode);
    const transformedData = dataTransform(data, (0, util_1.deepMix)({}, GET_DEFAULT_LAYOUT_OPTIONS(width, height), layout), (0, util_1.deepMix)({}, DEFAULT_OPTIONS['encode'], encode));
    const labelStyle = (0, helper_1.subObject)(style, 'label');
    return (0, util_1.deepMix)({}, DEFAULT_OPTIONS, Object.assign(Object.assign({ data: transformedData, encode,
        scale,
        style, labels: [
            Object.assign(Object.assign({}, DEFAULT_LABEL_OPTIONS), labelStyle),
            ...labels,
        ] }, resOptions), { tooltip: (0, mark_1.maybeTooltip)(tooltip, DEFAULT_TOOLTIP_OPTIONS), axis: false }));
};
exports.Pack = Pack;
exports.Pack.props = {};
//# sourceMappingURL=pack.js.map