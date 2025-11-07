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
import { deepMix, get, last } from '@antv/util';
import { subObject } from '../utils/helper';
import { maybeTooltip } from '../utils/mark';
import { treeDataTransform } from '../utils/treeDataTransform';
// Defaults
const GET_DEFAULT_LAYOUT_OPTIONS = (width, height) => ({
    tile: 'treemapSquarify',
    ratio: 0.5 * (1 + Math.sqrt(5)),
    size: [width, height],
    round: false,
    ignoreParentValue: true,
    padding: 0,
    paddingInner: 0,
    paddingOuter: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    sort: (a, b) => b.value - a.value,
    layer: 0,
});
const GET_DEFAULT_OPTIONS = (width, height) => ({
    type: 'rect',
    axis: false,
    encode: {
        x: 'x',
        y: 'y',
        key: 'id',
        color: (d) => d.path[1],
    },
    scale: {
        x: { domain: [0, width], range: [0, 1] },
        y: { domain: [0, height], range: [0, 1] },
    },
    style: {
        stroke: '#fff',
    },
    state: {
        active: { opacity: 0.6 },
        inactive: { opacity: 1 },
    },
});
const DEFAULT_LABEL_OPTIONS = {
    fontSize: 10,
    text: (d) => last(d.path),
    position: 'inside',
    fill: '#000',
    textOverflow: 'clip',
    wordWrap: true,
    maxLines: 1,
    wordWrapWidth: (d) => d.x1 - d.x0,
    isTreemapLabel: true,
};
const DEFAULT_TOOLTIP_OPTIONS = {
    title: (d) => { var _a, _b; return (_b = (_a = d.path) === null || _a === void 0 ? void 0 : _a.join) === null || _b === void 0 ? void 0 : _b.call(_a, '.'); },
    items: [{ field: 'value' }],
};
const DEFAULT_TOOLTIP_OPTIONS_DRILL = {
    title: (d) => last(d.path),
    items: [{ field: 'value' }],
};
export const Treemap = (options, context) => {
    const { width, height, options: markOptions } = context;
    const { data, encode = {}, scale, style = {}, layout = {}, labels = [], tooltip = {} } = options, resOptions = __rest(options, ["data", "encode", "scale", "style", "layout", "labels", "tooltip"]);
    const treemapDrillDown = get(markOptions, ['interaction', 'treemapDrillDown']) ||
        get(markOptions, ['marks', 0, 'interaction', 'treemapDrillDown']);
    // Layout
    const layoutOptions = deepMix({}, GET_DEFAULT_LAYOUT_OPTIONS(width, height), layout, {
        layer: treemapDrillDown
            ? (d) => {
                return d.depth === 1;
            }
            : layout.layer,
    });
    // Data
    const [transformedData, transformedDataAll] = treeDataTransform(data, layoutOptions, encode);
    // Label
    const labelStyle = subObject(style, 'label');
    return deepMix({}, GET_DEFAULT_OPTIONS(width, height), Object.assign(Object.assign({ data: transformedData, scale,
        style, labels: [
            Object.assign(Object.assign(Object.assign({}, DEFAULT_LABEL_OPTIONS), labelStyle), (treemapDrillDown && { cursor: 'pointer' })),
            ...labels,
        ] }, resOptions), { encode, tooltip: maybeTooltip(tooltip, DEFAULT_TOOLTIP_OPTIONS), axis: false }), treemapDrillDown
        ? {
            interaction: Object.assign(Object.assign({}, resOptions.interaction), { treemapDrillDown: treemapDrillDown
                    ? Object.assign(Object.assign({}, treemapDrillDown), { originData: transformedDataAll, layout: layoutOptions }) : undefined }),
            encode: Object.assign({ color: (d) => last(d.path) }, encode),
            tooltip: maybeTooltip(tooltip, DEFAULT_TOOLTIP_OPTIONS_DRILL),
        }
        : {});
};
Treemap.props = {};
//# sourceMappingURL=treemap.js.map