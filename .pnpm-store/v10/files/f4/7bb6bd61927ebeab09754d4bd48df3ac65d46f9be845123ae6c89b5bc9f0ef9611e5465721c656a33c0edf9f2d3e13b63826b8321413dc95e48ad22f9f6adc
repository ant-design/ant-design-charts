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
import { deepMix, isArray } from '@antv/util';
import { stratify, hierarchy, pack as packLayout, } from '@antv/vendor/d3-hierarchy';
import { subObject } from '../utils/helper';
import { maybeTooltip } from '../utils/mark';
import { field } from './utils';
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
    const root = isArray(data)
        ? stratify().path(layout.path)(data)
        : hierarchy(data);
    value ? root.sum((d) => field(value)(d)).sort(layout.sort) : root.count();
    // @ts-ignore
    packLayout().size(layout.size).padding(layout.padding)(root);
    return root.descendants();
};
export const Pack = (markOptions, context) => {
    const { width, height } = context;
    const { data, encode = {}, scale = {}, style = {}, layout = {}, labels = [], tooltip = {} } = markOptions, resOptions = __rest(markOptions, ["data", "encode", "scale", "style", "layout", "labels", "tooltip"]);
    const DEFAULT_OPTIONS = GET_DEFAULT_OPTIONS(width, height, encode);
    const transformedData = dataTransform(data, deepMix({}, GET_DEFAULT_LAYOUT_OPTIONS(width, height), layout), deepMix({}, DEFAULT_OPTIONS['encode'], encode));
    const labelStyle = subObject(style, 'label');
    return deepMix({}, DEFAULT_OPTIONS, Object.assign(Object.assign({ data: transformedData, encode,
        scale,
        style, labels: [
            Object.assign(Object.assign({}, DEFAULT_LABEL_OPTIONS), labelStyle),
            ...labels,
        ] }, resOptions), { tooltip: maybeTooltip(tooltip, DEFAULT_TOOLTIP_OPTIONS), axis: false }));
};
Pack.props = {};
//# sourceMappingURL=pack.js.map