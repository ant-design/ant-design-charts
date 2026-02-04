"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processAxisZ = processAxisZ;
exports.computeLayout = computeLayout;
exports.computeRoughPlotSize = computeRoughPlotSize;
exports.placeComponents = placeComponents;
const d3_array_1 = require("@antv/vendor/d3-array");
const component_1 = require("@antv/component");
const util_1 = require("@antv/util");
const coordinate_1 = require("../utils/coordinate");
const helper_1 = require("../utils/helper");
const array_1 = require("../utils/array");
const string_1 = require("../utils/string");
const component_2 = require("./component");
const coordinate_2 = require("./coordinate");
const DEFAULT_MARGIN = 16;
function processAxisZ(components) {
    const axisX = components.find(({ type }) => type === 'axisX');
    const axisY = components.find(({ type }) => type === 'axisY');
    const axisZ = components.find(({ type }) => type === 'axisZ');
    if (axisX && axisY && axisZ) {
        axisX.plane = 'xy';
        axisY.plane = 'xy';
        axisZ.plane = 'yz';
        axisZ.origin = [axisX.bbox.x, axisX.bbox.y, 0];
        axisZ.eulerAngles = [0, -90, 0];
        axisZ.bbox.x = axisX.bbox.x;
        axisZ.bbox.y = axisX.bbox.y;
        components.push(Object.assign(Object.assign({}, axisX), { plane: 'xz', showLabel: false, showTitle: false, origin: [axisX.bbox.x, axisX.bbox.y, 0], eulerAngles: [-90, 0, 0] }));
        components.push(Object.assign(Object.assign({}, axisY), { plane: 'yz', showLabel: false, showTitle: false, origin: [axisY.bbox.x + axisY.bbox.width, axisY.bbox.y, 0], eulerAngles: [0, -90, 0] }));
        components.push(Object.assign(Object.assign({}, axisZ), { plane: 'xz', actualPosition: 'left', showLabel: false, showTitle: false, eulerAngles: [90, -90, 0] }));
    }
}
function computeLayout(components, options, theme, library) {
    var _a, _b, _c, _d;
    const { width, height, depth, x = 0, y = 0, z = 0, inset = (_a = theme.inset) !== null && _a !== void 0 ? _a : 0, insetLeft = inset, insetTop = inset, insetBottom = inset, insetRight = inset, margin = (_b = theme.margin) !== null && _b !== void 0 ? _b : 0, marginLeft = margin, marginBottom = margin, marginTop = margin, marginRight = margin, padding = theme.padding, paddingBottom = padding, paddingLeft = padding, paddingRight = padding, paddingTop = padding, } = computeInset(components, options, theme, library);
    const isDefaultLayoutLeft = marginLeft === DEFAULT_MARGIN && paddingLeft === 'auto';
    const isDefaultLayoutRight = marginRight === DEFAULT_MARGIN && paddingRight === 'auto';
    const isTranspose = (0, util_1.get)(options, 'coordinates', []).some((t) => t.type === 'transpose');
    const axisX = components.find(({ type }) => type === 'axisX');
    const { size, labelTransform } = axisX || {};
    const MIN_CONTENT_RATIO = 1 / 4;
    const maybeClamp = (viewWidth, paddingLeft, paddingRight, pl0, pr0) => {
        // Only clamp when has marks.
        const { marks } = options;
        if (marks.length === 0)
            return [pl0, pr0];
        // If size of content is enough, skip.
        const contentSize = viewWidth - pl0 - pr0;
        const diff = contentSize - viewWidth * MIN_CONTENT_RATIO;
        if (diff > 0)
            return [pl0, pr0];
        // Shrink start and end size equally.
        const shrinkSize = viewWidth * (1 - MIN_CONTENT_RATIO);
        return [
            paddingLeft === 'auto' ? (shrinkSize * pl0) / (pl0 + pr0) : pl0,
            paddingRight === 'auto' ? (shrinkSize * pr0) / (pl0 + pr0) : pr0,
        ];
    };
    const roughPadding = (padding) => (padding === 'auto' ? 20 : padding !== null && padding !== void 0 ? padding : 20);
    const rpt = roughPadding(paddingTop);
    const rpb = roughPadding(paddingBottom);
    // Compute paddingLeft and paddingRight first to get innerWidth.
    const horizontalPadding = computePadding(components, height - rpt - rpb, [rpt + marginTop, rpb + marginBottom], ['left', 'right'], options, theme, library);
    const { paddingLeft: pl0, paddingRight: pr0 } = horizontalPadding;
    const viewWidth = width - marginLeft - marginRight;
    let [pl, pr] = maybeClamp(viewWidth, paddingLeft, paddingRight, pl0, pr0);
    let iw = viewWidth - pl - pr;
    // Compute paddingBottom and paddingTop based on innerWidth.
    const verticalPadding = computePadding(components, iw, [pl + marginLeft, pr + marginRight], ['bottom', 'top'], options, theme, library);
    const { paddingTop: pt0, paddingBottom: pb0 } = verticalPadding;
    const viewHeight = height - marginBottom - marginTop;
    const [pb, pt] = maybeClamp(viewHeight, paddingBottom, paddingTop, pb0, pt0);
    const ih = viewHeight - pb - pt;
    // Adjust paddingLeft and paddingRight for axisX when they are 'auto' and not specified by user.
    if (size && !isTranspose && !labelTransform) {
        const { fontSize = 12, fontFamily = 'sans-serif', scales = [] } = axisX;
        const domain = (_d = (_c = scales === null || scales === void 0 ? void 0 : scales[0]) === null || _c === void 0 ? void 0 : _c.domain) !== null && _d !== void 0 ? _d : [];
        if (!domain.length)
            return;
        const adjustSide = (side, labelText, margin, padding) => {
            const labelWidth = (0, component_1.measureTextWidth)(labelText, { fontSize, fontFamily });
            const diff = labelWidth / 2 - margin - padding;
            if (diff > 0) {
                iw -= diff;
                if (side === 'left')
                    pl += labelWidth / 2 - margin;
                else
                    pr += labelWidth / 2 - margin;
            }
        };
        if (isDefaultLayoutLeft) {
            adjustSide('left', (0, util_1.head)(domain), marginLeft, pl);
        }
        if (isDefaultLayoutRight) {
            adjustSide('right', (0, util_1.last)(domain), marginRight, pr);
        }
    }
    return {
        width,
        height,
        depth,
        insetLeft,
        insetTop,
        insetBottom,
        insetRight,
        innerWidth: iw,
        innerHeight: ih,
        paddingLeft: pl,
        paddingRight: pr,
        paddingTop: pt,
        paddingBottom: pb,
        marginLeft,
        marginBottom,
        marginTop,
        marginRight,
        x,
        y,
        z,
    };
}
// For composite mark with a layout algorithm and without axis,
// such as worldcloud, circlepack.
function computeRoughPlotSize(options) {
    const { height, width, padding = 0, paddingLeft = padding, paddingRight = padding, paddingTop = padding, paddingBottom = padding, margin = 16, marginLeft = margin, marginRight = margin, marginTop = margin, marginBottom = margin, inset = 0, insetLeft = inset, insetRight = inset, insetTop = inset, insetBottom = inset, } = options;
    // @todo Add this padding to theme.
    // 30 is default size for padding, which defined in runtime.
    const maybeAuto = (padding) => (padding === 'auto' ? 20 : padding);
    const finalWidth = width -
        maybeAuto(paddingLeft) -
        maybeAuto(paddingRight) -
        marginLeft -
        marginRight -
        insetLeft -
        insetRight;
    const finalHeight = height -
        maybeAuto(paddingTop) -
        maybeAuto(paddingBottom) -
        marginTop -
        marginBottom -
        insetTop -
        insetBottom;
    return { width: finalWidth, height: finalHeight };
}
function computeInset(components, options, theme, library) {
    const { coordinates } = options;
    if (!(0, coordinate_2.isPolar)(coordinates) && !(0, coordinate_2.isRadial)(coordinates)) {
        return options;
    }
    // Filter axis.
    const axes = components.filter((d) => typeof d.type === 'string' && d.type.startsWith('axis'));
    if (axes.length === 0)
        return options;
    const styles = axes.map((component) => {
        const key = component.type === 'axisArc' ? 'arc' : 'linear';
        return (0, component_2.styleOf)(component, key, theme);
    });
    // Compute max labelSpacing.
    const maxLabelSpacing = (0, d3_array_1.max)(styles, (d) => { var _a; return (_a = d.labelSpacing) !== null && _a !== void 0 ? _a : 0; });
    // Compute labelBBoxes.
    const labelBBoxes = axes
        .flatMap((component, i) => {
        const style = styles[i];
        const scale = (0, component_2.createScale)(component, library);
        const labels = (0, component_2.computeLabelsBBox)(style, scale);
        return labels;
    })
        .filter(helper_1.defined);
    const size = (0, d3_array_1.max)(labelBBoxes, (d) => d.height) + maxLabelSpacing;
    // Compute titles.
    const titleBBoxes = axes
        .flatMap((_, i) => {
        const style = styles[i];
        return (0, component_2.computeTitleBBox)(style);
    })
        .filter((d) => d !== null);
    const titleSize = titleBBoxes.length === 0 ? 0 : (0, d3_array_1.max)(titleBBoxes, (d) => d.height);
    // Update inset.
    const { inset = size, insetLeft = inset, insetBottom = inset, insetTop = inset + titleSize, insetRight = inset, } = options;
    return Object.assign(Object.assign({}, options), { insetLeft, insetBottom, insetTop, insetRight });
}
/**
 * @todo Support percentage size(e.g. 50%)
 */
function computePadding(components, crossSize, crossPadding, positions, options, theme, library) {
    const positionComponents = (0, d3_array_1.group)(components, (d) => d.position);
    const { padding = theme.padding, paddingLeft = padding, paddingRight = padding, paddingBottom = padding, paddingTop = padding, } = options;
    const layout = {
        paddingBottom,
        paddingLeft,
        paddingTop,
        paddingRight,
    };
    for (const position of positions) {
        const key = `padding${(0, helper_1.capitalizeFirst)((0, string_1.camelCase)(position))}`;
        const components = positionComponents.get(position) || [];
        const value = layout[key];
        const defaultSizeOf = (d) => {
            if (d.size === undefined)
                d.size = d.defaultSize;
        };
        const sizeOf = (d) => {
            if (d.type === 'group') {
                d.children.forEach(defaultSizeOf);
                d.size = (0, d3_array_1.max)(d.children, (d) => d.size);
            }
            else {
                d.size = d.defaultSize;
            }
        };
        const autoSizeOf = (d) => {
            if (d.size)
                return;
            if (value !== 'auto')
                sizeOf(d);
            else {
                // Compute component size dynamically.
                (0, component_2.computeComponentSize)(d, crossSize, crossPadding, position, theme, library);
                defaultSizeOf(d);
            }
        };
        const maybeHide = (d) => {
            if (!d.type.startsWith('axis'))
                return;
            if (d.labelAutoHide === undefined)
                d.labelAutoHide = true;
        };
        const isHorizontal = position === 'bottom' || position === 'top';
        // !!!Note
        // Mute axis component padding.
        // The first axis do not has padding.
        const minOrder = (0, d3_array_1.min)(components, (d) => d.order);
        const axes = components.filter((d) => d.type.startsWith('axis') && d.order == minOrder);
        if (axes.length)
            axes[0].crossPadding = 0;
        // Specified padding.
        if (typeof value === 'number') {
            components.forEach(defaultSizeOf);
            components.forEach(maybeHide);
        }
        else {
            // Compute padding dynamically.
            if (components.length === 0) {
                layout[key] = 0;
            }
            else {
                const size = isHorizontal
                    ? crossSize + crossPadding[0] + crossPadding[1]
                    : crossSize;
                const grouped = (0, component_2.groupComponents)(components, size);
                grouped.forEach(autoSizeOf);
                const totalSize = grouped.reduce((sum, { size, crossPadding = 12 }) => sum + size + crossPadding, 0);
                layout[key] = totalSize;
            }
        }
    }
    return layout;
}
function placeComponents(components, coordinate, layout) {
    // Group components by plane & position.
    const positionComponents = (0, d3_array_1.group)(components, (d) => `${d.plane || 'xy'}-${d.position}`);
    const { paddingLeft, paddingRight, paddingTop, paddingBottom, marginLeft, marginTop, marginBottom, marginRight, innerHeight, innerWidth, insetBottom, insetLeft, insetRight, insetTop, height, width, depth, } = layout;
    const planes = {
        xy: createSection({
            width,
            height,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
            marginLeft,
            marginTop,
            marginBottom,
            marginRight,
            innerHeight,
            innerWidth,
            insetBottom,
            insetLeft,
            insetRight,
            insetTop,
        }),
        yz: createSection({
            width: depth,
            height: height,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0,
            innerWidth: depth,
            innerHeight: height,
            insetBottom: 0,
            insetLeft: 0,
            insetRight: 0,
            insetTop: 0,
        }),
        xz: createSection({
            width,
            height: depth,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0,
            innerWidth: width,
            innerHeight: depth,
            insetBottom: 0,
            insetLeft: 0,
            insetRight: 0,
            insetTop: 0,
        }),
    };
    for (const [key, components] of positionComponents.entries()) {
        const [plane, position] = key.split('-');
        const area = planes[plane][position];
        /**
         * @description non-entity components: axis in the center, inner, outer, component in the center
         * @description entity components: other components
         * @description no volume components take up no extra space
         */
        const [nonEntityComponents, entityComponents] = (0, array_1.divide)(components, (component) => {
            if (typeof component.type !== 'string')
                return false;
            if (position === 'center')
                return true;
            if (component.type.startsWith('axis') &&
                ['inner', 'outer'].includes(position)) {
                return true;
            }
            return false;
        });
        if (nonEntityComponents.length) {
            placeNonEntityComponents(nonEntityComponents, coordinate, area, position);
        }
        if (entityComponents.length) {
            placePaddingArea(components, coordinate, area);
        }
    }
}
function createSection({ width, height, paddingLeft, paddingRight, paddingTop, paddingBottom, marginLeft, marginTop, marginBottom, marginRight, innerHeight, innerWidth, insetBottom, insetLeft, insetRight, insetTop, }) {
    const pl = paddingLeft + marginLeft;
    const pt = paddingTop + marginTop;
    const pr = paddingRight + marginRight;
    const pb = paddingBottom + marginBottom;
    const plotWidth = width - marginLeft - marginRight;
    const centerSection = [
        pl + insetLeft,
        pt + insetTop,
        innerWidth - insetLeft - insetRight,
        innerHeight - insetTop - insetBottom,
        'center',
        null,
        null,
    ];
    const xySection = {
        top: [
            pl,
            0,
            innerWidth,
            pt,
            'vertical',
            true,
            d3_array_1.ascending,
            marginLeft,
            plotWidth,
        ],
        right: [width - pr, pt, pr, innerHeight, 'horizontal', false, d3_array_1.ascending],
        bottom: [
            pl,
            height - pb,
            innerWidth,
            pb,
            'vertical',
            false,
            d3_array_1.ascending,
            marginLeft,
            plotWidth,
        ],
        left: [0, pt, pl, innerHeight, 'horizontal', true, d3_array_1.ascending],
        'top-left': [pl, 0, innerWidth, pt, 'vertical', true, d3_array_1.ascending],
        'top-right': [pl, 0, innerWidth, pt, 'vertical', true, d3_array_1.ascending],
        'bottom-left': [
            pl,
            height - pb,
            innerWidth,
            pb,
            'vertical',
            false,
            d3_array_1.ascending,
        ],
        'bottom-right': [
            pl,
            height - pb,
            innerWidth,
            pb,
            'vertical',
            false,
            d3_array_1.ascending,
        ],
        center: centerSection,
        inner: centerSection,
        outer: centerSection,
    };
    return xySection;
}
function placeNonEntityComponents(components, coordinate, area, position) {
    const [axisComponents, nonAxisComponents] = (0, array_1.divide)(components, (component) => {
        if (typeof component.type === 'string' &&
            component.type.startsWith('axis')) {
            return true;
        }
        return false;
    });
    placeNonEntityAxis(axisComponents, coordinate, area, position);
    // in current stage, only legend component which located in the center can be placed
    placeCenter(nonAxisComponents, coordinate, area);
}
function placeNonEntityAxis(components, coordinate, area, position) {
    if (position === 'center') {
        if ((0, coordinate_1.isRadar)(coordinate)) {
            placeAxisRadar(components, coordinate, area, position);
        }
        else if ((0, coordinate_1.isPolar)(coordinate)) {
            placeArcLinear(components, coordinate, area);
        }
        else if ((0, coordinate_1.isParallel)(coordinate)) {
            placeAxisParallel(components, coordinate, area, components[0].orientation);
        }
    }
    else if (position === 'inner') {
        placeAxisArcInner(components, coordinate, area);
    }
    else if (position === 'outer') {
        placeAxisArcOuter(components, coordinate, area);
    }
}
function placeAxisArcInner(components, coordinate, area) {
    const [x, y, , height] = area;
    const [cx, cy] = coordinate.getCenter();
    const [innerRadius] = (0, coordinate_1.radiusOf)(coordinate);
    const r = height / 2;
    const size = innerRadius * r;
    const x0 = cx - size;
    const y0 = cy - size;
    for (let i = 0; i < components.length; i++) {
        const component = components[i];
        component.bbox = {
            x: x + x0,
            y: y + y0,
            width: size * 2,
            height: size * 2,
        };
    }
}
function placeAxisArcOuter(components, coordinate, area) {
    const [x, y, width, height] = area;
    for (const component of components) {
        component.bbox = { x, y, width, height };
    }
}
/**
 * @example arcX, arcY, axisLinear with angle
 */
function placeArcLinear(components, coordinate, area) {
    const [x, y, width, height] = area;
    for (const component of components) {
        component.bbox = { x: x, y, width, height };
    }
}
function placeAxisParallel(components, coordinate, area, orientation) {
    if (orientation === 'horizontal') {
        placeAxisParallelHorizontal(components, coordinate, area);
    }
    else if (orientation === 'vertical') {
        placeAxisParallelVertical(components, coordinate, area);
    }
}
function placeAxisParallelVertical(components, coordinate, area) {
    const [x, y, , height] = area;
    // Create a high dimension vector and map to a list of two-dimension points.
    // [0, 0, 0] -> [x0, 0, x1, 0, x2, 0]
    const vector = new Array(components.length).fill(0);
    const points = coordinate.map(vector);
    // Extract x of each points.
    // [x0, 0, x1, 0, x2, 0] -> [x0, x1, x2]
    const X = points.filter((_, i) => i % 2 === 0).map((d) => d + x);
    // Place each axis by coordinate in parallel coordinate.
    for (let i = 0; i < components.length; i++) {
        const component = components[i];
        const x = X[i];
        const width = X[i + 1] - x;
        component.bbox = { x, y, width, height };
    }
}
function placeAxisParallelHorizontal(components, coordinate, area) {
    const [x, y, width] = area;
    // Create a high dimension vector and map to a list of two-dimension points.
    // [0, 0, 0] -> [height, y0, height, y1, height, y2]
    const vector = new Array(components.length).fill(0);
    const points = coordinate.map(vector);
    // Extract y of each points.
    // [x0, 0, x1, 0, x2, 0] -> [x0, x1, x2]
    const Y = points.filter((_, i) => i % 2 === 1).map((d) => d + y);
    // Place each axis by coordinate in parallel coordinate.
    for (let i = 0; i < components.length; i++) {
        const component = components[i];
        const y = Y[i];
        const height = Y[i + 1] - y;
        component.bbox = { x, y, width, height };
    }
}
function placeAxisRadar(components, coordinate, area, position) {
    const [x, y, width, height] = area;
    for (const component of components) {
        component.bbox = { x, y, width, height };
        component.radar = {
            index: components.indexOf(component),
            count: components.length,
        };
    }
}
function placePaddingArea(components, coordinate, area) {
    const [x, y, width, height, direction, reverse, comparator, minX, totalSize] = area;
    const [mainStartKey, mainStartValue, crossStartKey, crossStartValue, mainSizeKey, mainSizeValue, crossSizeKey, crossSizeValue,] = direction === 'vertical'
        ? ['y', y, 'x', x, 'height', height, 'width', width]
        : ['x', x, 'y', y, 'width', width, 'height', height];
    // Sort components by order.
    // The smaller the order, the closer to center.
    components.sort((a, b) => comparator === null || comparator === void 0 ? void 0 : comparator(a.order, b.order));
    const isLarge = (type) => type === 'title' || type === 'group' || type.startsWith('legend');
    const crossSizeOf = (type, small, bigger) => {
        if (bigger === undefined)
            return small;
        if (isLarge(type))
            return bigger;
        return small;
    };
    const crossStartOf = (type, x, minX) => {
        if (minX === undefined)
            return x;
        if (isLarge(type))
            return minX;
        return x;
    };
    const startValue = reverse ? mainStartValue + mainSizeValue : mainStartValue;
    for (let i = 0, start = startValue; i < components.length; i++) {
        const component = components[i];
        const { crossPadding = 0, type } = component;
        const { size } = component;
        component.bbox = {
            [mainStartKey]: reverse
                ? start - size - crossPadding
                : start + crossPadding,
            [crossStartKey]: crossStartOf(type, crossStartValue, minX),
            [mainSizeKey]: size,
            [crossSizeKey]: crossSizeOf(type, crossSizeValue, totalSize),
        };
        start += (size + crossPadding) * (reverse ? -1 : 1);
    }
    // Place group components.
    const groupComponents = components.filter((d) => d.type === 'group');
    for (const group of groupComponents) {
        const { bbox, children } = group;
        const size = bbox[crossSizeKey];
        const step = size / children.length;
        const justifyContent = children.reduce((j, child) => {
            var _a;
            const j0 = (_a = child.layout) === null || _a === void 0 ? void 0 : _a.justifyContent;
            return j0 ? j0 : j;
        }, 'flex-start');
        const L = children.map((d, i) => {
            const { length = step, padding = 0 } = d;
            return length + (i === children.length - 1 ? 0 : padding);
        });
        const totalLength = (0, d3_array_1.sum)(L);
        const diff = size - totalLength;
        const offset = justifyContent === 'flex-start'
            ? 0
            : justifyContent === 'center'
                ? diff / 2
                : diff;
        for (let i = 0, start = bbox[crossStartKey] + offset; i < children.length; i++) {
            const component = children[i];
            const { padding = 0 } = component;
            const interval = i === children.length - 1 ? 0 : padding;
            component.bbox = {
                [mainSizeKey]: bbox[mainSizeKey],
                [mainStartKey]: bbox[mainStartKey],
                [crossStartKey]: start,
                [crossSizeKey]: L[i] - interval,
            };
            (0, util_1.deepMix)(component, { layout: { justifyContent } });
            start += L[i];
        }
    }
}
/**
 * @example legend in the center of radial or polar system
 */
function placeCenter(components, coordinate, area) {
    if (components.length === 0)
        return;
    const [x, y, width, height] = area;
    const [innerRadius] = (0, coordinate_1.radiusOf)(coordinate);
    const r = ((height / 2) * innerRadius) / Math.sqrt(2);
    const cx = x + width / 2;
    const cy = y + height / 2;
    for (let i = 0; i < components.length; i++) {
        const component = components[i];
        component.bbox = { x: cx - r, y: cy - r, width: r * 2, height: r * 2 };
    }
}
//# sourceMappingURL=layout.js.map