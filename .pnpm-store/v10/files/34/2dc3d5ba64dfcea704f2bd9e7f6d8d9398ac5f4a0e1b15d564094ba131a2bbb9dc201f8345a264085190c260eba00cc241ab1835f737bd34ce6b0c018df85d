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
exports.LegendCategory = void 0;
const component_1 = require("@antv/component");
const util_1 = require("@antv/util");
const d3_format_1 = require("@antv/vendor/d3-format");
const scale_1 = require("@antv/scale");
const marker_1 = require("../utils/marker");
const legendFilter_1 = require("../interaction/legendFilter");
const utils_1 = require("./utils");
const constant_1 = require("./constant");
function inferShape(scales, markState) {
    const shapeScale = (0, utils_1.scaleOf)(scales, 'shape');
    const colorScale = (0, utils_1.scaleOf)(scales, 'color');
    // NOTE!!!
    // scaleOrdinal.map will mute domain.
    const shapeScale1 = shapeScale ? shapeScale.clone() : null;
    // Infer the main shape if multiple marks are used.
    const shapes = [];
    for (const [mark, state] of markState) {
        const namespace = mark.type;
        const domain = (colorScale === null || colorScale === void 0 ? void 0 : colorScale.getOptions().domain.length) > 0
            ? colorScale === null || colorScale === void 0 ? void 0 : colorScale.getOptions().domain
            : state.data;
        const shape = domain.map((d, i) => {
            var _a;
            if (shapeScale1)
                return shapeScale1.map(d || 'point');
            return ((_a = mark === null || mark === void 0 ? void 0 : mark.style) === null || _a === void 0 ? void 0 : _a.shape) || state.defaultShape || 'point';
        });
        if (typeof namespace === 'string')
            shapes.push([namespace, shape]);
    }
    if (shapes.length === 0)
        return ['point', ['point']];
    if (shapes.length === 1)
        return shapes[0];
    if (!shapeScale)
        return shapes[0];
    // Evaluate the maximum likelihood of shape
    const { range } = shapeScale.getOptions();
    return shapes
        .map(([namespace, shape]) => {
        let sum = 0;
        for (let i = 0; i < shapes.length; i++) {
            const targetShape = range[i % range.length];
            if (shape[i] === targetShape)
                sum++;
        }
        return [sum / shape.length, [namespace, shape]];
    })
        .sort((a, b) => b[0] - a[0])[0][1];
}
function inferItemMarker(options, context) {
    const { scales, library, markState } = context;
    const [mark, shapes] = inferShape(scales, markState);
    const { itemMarker, itemMarkerSize: size } = options;
    const create = (name, d) => {
        var _a, _b, _c;
        const marker = ((_c = (_b = (_a = library[`mark.${mark}`]) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.shape[name]) === null || _c === void 0 ? void 0 : _c.props.defaultMarker) || (0, util_1.last)(name.split('.'));
        const radius = typeof size === 'function' ? size(d) : size;
        return () => (0, marker_1.useMarker)(marker, { color: d.color })(0, 0, radius);
    };
    const shapeOf = (i) => `${shapes[i]}`;
    const shapeScale = (0, utils_1.scaleOf)(scales, 'shape');
    if (shapeScale && !itemMarker)
        return (d, i) => create(shapeOf(i), d);
    if (typeof itemMarker === 'function') {
        return (d, i) => {
            // @todo Fix this in GUI.
            // It should pass primitive value rather object.
            const node = itemMarker(d.id, i);
            if (typeof node === 'string')
                return create(node, d);
            return node;
        };
    }
    return (d, i) => create(itemMarker || shapeOf(i), d);
}
function inferItemMarkerOpacity(scales) {
    const scale = (0, utils_1.scaleOf)(scales, 'opacity');
    if (scale) {
        const { range } = scale.getOptions();
        return (d, i) => range[i];
    }
    return undefined;
}
function inferItemMarkerSize(scales, defaults) {
    const scale = (0, utils_1.scaleOf)(scales, 'size');
    if (scale instanceof scale_1.Identity)
        return scale.map(NaN) * 2;
    return defaults;
}
function inferItemMarkerLineWidth(options, context) {
    const { scales, markState } = context;
    const [mark, shapes] = inferShape(scales, markState);
    const { itemMarker, itemMarkerLineWidth } = options;
    // If user explicitly set itemMarkerLineWidth, use it
    if (itemMarkerLineWidth !== undefined) {
        return itemMarkerLineWidth;
    }
    // Define line-based shapes that should have thicker line width
    const lineShapes = [
        'line',
        'hyphen',
        'dash',
        'smooth',
        'hv',
        'hvh',
        'vh',
        'vhv',
    ];
    // If itemMarker is explicitly set to a line shape
    if (typeof itemMarker === 'string' && lineShapes.includes(itemMarker)) {
        return 4;
    }
    // If itemMarker is a function, we need to return a function that checks each shape
    if (typeof itemMarker === 'function') {
        return (d, i) => {
            const markerShape = itemMarker(d.id, i);
            if (typeof markerShape === 'string' && lineShapes.includes(markerShape)) {
                return 4;
            }
            return undefined;
        };
    }
    // Check if any of the inferred shapes are line-based
    const shapesArray = Array.isArray(shapes) ? shapes : [shapes];
    const hasLineShape = shapesArray.some((shape) => lineShapes.includes(shape));
    if (hasLineShape) {
        return 4;
    }
    return undefined;
}
function inferCategoryStyle(options, context) {
    const { labelFormatter = (d) => `${d}` } = options;
    const { scales, theme } = context;
    const defaultSize = theme.legendCategory.itemMarkerSize;
    const itemMarkerSize = inferItemMarkerSize(scales, defaultSize);
    const baseStyle = {
        itemMarker: inferItemMarker(Object.assign(Object.assign({}, options), { itemMarkerSize }), context),
        itemMarkerSize: itemMarkerSize,
        itemMarkerOpacity: inferItemMarkerOpacity(scales),
        itemMarkerLineWidth: inferItemMarkerLineWidth(options, context),
    };
    const finalLabelFormatter = typeof labelFormatter === 'string'
        ? (0, d3_format_1.format)(labelFormatter)
        : labelFormatter;
    const colorScale = (0, utils_1.scaleOf)(scales, 'color');
    const domain = (0, utils_1.domainOf)(scales);
    const colorOf = colorScale
        ? (d) => colorScale.map(d)
        : () => context.theme.color;
    return Object.assign(Object.assign({}, baseStyle), { data: domain.map((d) => ({
            id: d,
            label: finalLabelFormatter(d),
            color: colorOf(d),
        })) });
}
function inferLegendShape(value, options, component) {
    const { position } = options;
    if (position === 'center') {
        const { bbox } = value;
        // to be confirm: if position is center, we should use the width and height of user definition.
        const { width, height } = bbox;
        return { width, height };
    }
    const { width, height } = (0, utils_1.inferComponentShape)(value, options, component);
    return { width, height };
}
function filterEmptyIds(legendStyle) {
    return Object.assign(Object.assign({}, legendStyle), { data: (legendStyle === null || legendStyle === void 0 ? void 0 : legendStyle.data.filter((item) => item.id !== '' && item.id !== undefined)) || [] });
}
/**
 * Guide Component for ordinal color scale.
 */
const LegendCategory = (options) => {
    const { labelFormatter, layout, order, orientation, position, size, title, cols, itemMarker, render } = options, style = __rest(options, ["labelFormatter", "layout", "order", "orientation", "position", "size", "title", "cols", "itemMarker", "render"]);
    const { gridRow } = style;
    return (context) => {
        const { value, theme } = context;
        const { bbox } = value;
        const { width, height } = inferLegendShape(value, options, exports.LegendCategory);
        const finalLayout = (0, utils_1.inferComponentLayout)(position, layout);
        const legendStyle = Object.assign(Object.assign(Object.assign(Object.assign({ orientation: ['right', 'left', 'center'].includes(position)
                ? 'vertical'
                : 'horizontal', width,
            height, layout: cols !== undefined ? 'grid' : 'flex' }, (cols !== undefined && { gridCol: cols })), (gridRow !== undefined && { gridRow })), { titleText: (0, utils_1.titleContent)(title) }), inferCategoryStyle(options, context));
        const { legendCategory: legendTheme = {} } = theme;
        // Filter out the data items with empty string IDs in the wordCloud's data before generating the legend.
        const categoryStyle = (0, utils_1.adaptor)(Object.assign({}, legendTheme, filterEmptyIds(legendStyle), style, {
            classNamePrefix: constant_1.G2_CLASS_PREFIX,
        }));
        // If render is provided, use HTML to render.
        if (render) {
            return new component_1.Category({
                className: legendFilter_1.CATEGORY_LEGEND_HTML_CLASS_NAME,
                style: Object.assign(Object.assign({}, categoryStyle), { x: bbox.x, y: bbox.y, render }),
            });
        }
        const layoutWrapper = new utils_1.LegendCategoryLayout({
            style: Object.assign(Object.assign({ x: bbox.x, y: bbox.y, width: bbox.width, height: bbox.height }, finalLayout), { 
                // @ts-ignore
                subOptions: categoryStyle }),
        });
        layoutWrapper.appendChild(new component_1.Category({
            className: 'legend-category',
            style: categoryStyle,
        }));
        return layoutWrapper;
    };
};
exports.LegendCategory = LegendCategory;
exports.LegendCategory.props = {
    defaultPosition: 'top',
    defaultOrder: 1,
    defaultSize: 40,
    defaultCrossPadding: [12, 12],
    defaultPadding: [12, 12],
};
//# sourceMappingURL=legendCategory.js.map