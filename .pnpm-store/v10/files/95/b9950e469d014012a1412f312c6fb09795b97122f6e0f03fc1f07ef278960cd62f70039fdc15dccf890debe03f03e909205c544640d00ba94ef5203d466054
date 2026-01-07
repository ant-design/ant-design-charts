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
import { Axis as AxisComponent } from '@antv/component';
import { Linear as LinearScale } from '@antv/scale';
import { deepMix, omit, upperFirst } from '@antv/util';
import { extent } from '@antv/vendor/d3-array';
import { format } from '@antv/vendor/d3-format';
import { angleOf, isFisheye, isParallel, isPolar, isRadial, isTheta, isTranspose, radiusOf, } from '../utils/coordinate';
import { prettyNumber } from '../utils/number';
import { capitalizeFirst } from '../utils/helper';
import { adaptor, isVertical, titleContent } from './utils';
import { G2_CLASS_PREFIX } from './constant';
export function rotateAxis(axis, options) {
    const { eulerAngles, origin } = options;
    if (origin) {
        axis.setOrigin(origin);
    }
    if (eulerAngles) {
        axis.rotate(eulerAngles[0], eulerAngles[1], eulerAngles[2]);
    }
}
function sizeOf(coordinate) {
    // @ts-ignore
    const { innerWidth, innerHeight, depth } = coordinate.getOptions();
    return [innerWidth, innerHeight, depth];
}
function createFisheye(position, coordinate) {
    const { width, height } = coordinate.getOptions();
    return (tick) => {
        if (!isFisheye(coordinate))
            return tick;
        const tickPoint = position === 'bottom' ? [tick, 1] : [0, tick];
        const vector = coordinate.map(tickPoint);
        if (position === 'bottom') {
            const v = vector[0];
            const x = new LinearScale({
                domain: [0, width],
                range: [0, 1],
            });
            return x.map(v);
        }
        else if (position === 'left') {
            const v = vector[1];
            const x = new LinearScale({
                domain: [0, height],
                range: [0, 1],
            });
            return x.map(v);
        }
        return tick;
    };
}
function ticksOf(scale, domain, tickMethod) {
    if (scale.getTicks)
        return scale.getTicks();
    if (!tickMethod)
        return domain;
    const [min, max] = extent(domain, (d) => +d);
    const { tickCount } = scale.getOptions();
    return tickMethod(min, max, tickCount);
}
// Set inset for axis.
function createInset(position, coordinate) {
    if (isPolar(coordinate))
        return (d) => d;
    const options = coordinate.getOptions();
    const { innerWidth, innerHeight, insetTop, insetBottom, insetLeft, insetRight, } = options;
    const [start, end, size] = position === 'left' || position === 'right'
        ? [insetTop, insetBottom, innerHeight]
        : [insetLeft, insetRight, innerWidth];
    const x = new LinearScale({
        domain: [0, 1],
        range: [start / size, 1 - end / size],
    });
    return (i) => x.map(i);
}
/**
 * Calc ticks based on scale and coordinate.
 */
function getData(scale, domain, tickCount, defaultTickFormatter, tickFilter, tickMethod, position, coordinate) {
    var _a;
    if (tickCount !== undefined || tickMethod !== undefined) {
        scale.update(Object.assign(Object.assign({}, (tickCount && { tickCount })), (tickMethod && { tickMethod })));
    }
    const ticks = ticksOf(scale, domain, tickMethod);
    const filteredTicks = tickFilter ? ticks.filter(tickFilter) : ticks;
    const toString = (d) => d instanceof Date
        ? String(d)
        : typeof d === 'object' && !!d
            ? d
            : String(d);
    const labelFormatter = defaultTickFormatter || ((_a = scale.getFormatter) === null || _a === void 0 ? void 0 : _a.call(scale)) || toString;
    const applyInset = createInset(position, coordinate);
    const applyFisheye = createFisheye(position, coordinate);
    const isHorizontal = (position) => ['top', 'bottom', 'center', 'outer'].includes(position);
    const isVertical = (position) => ['left', 'right'].includes(position);
    // @todo GUI should consider the overlap problem for the first
    // and label of arc axis.
    if (isPolar(coordinate) || isTranspose(coordinate)) {
        return filteredTicks.map((d, i, array) => {
            var _a, _b;
            const offset = ((_a = scale.getBandWidth) === null || _a === void 0 ? void 0 : _a.call(scale, d)) / 2 || 0;
            const tick = applyInset(scale.map(d) + offset);
            const shouldReverse = (isRadial(coordinate) && position === 'center') ||
                (isTranspose(coordinate) &&
                    ((_b = scale.getTicks) === null || _b === void 0 ? void 0 : _b.call(scale)) &&
                    isHorizontal(position)) ||
                (isTranspose(coordinate) && isVertical(position));
            return {
                value: shouldReverse ? 1 - tick : tick,
                label: toString(labelFormatter(prettyNumber(d), i, array)),
                id: String(i),
            };
        });
    }
    return filteredTicks.map((d, i, array) => {
        var _a;
        const offset = ((_a = scale.getBandWidth) === null || _a === void 0 ? void 0 : _a.call(scale, d)) / 2 || 0;
        const tick = applyFisheye(applyInset(scale.map(d) + offset));
        const shouldReverse = isVertical(position);
        return {
            value: shouldReverse ? 1 - tick : tick,
            label: toString(labelFormatter(prettyNumber(d), i, array)),
            id: String(i),
        };
    });
}
function inferGridLength(position, coordinate, plane = 'xy') {
    const [width, height, depth] = sizeOf(coordinate);
    if (plane === 'xy') {
        if (position.includes('bottom') || position.includes('top'))
            return height;
        return width;
    }
    else if (plane === 'xz') {
        if (position.includes('bottom') || position.includes('top'))
            return depth;
        return width;
    }
    else {
        if (position.includes('bottom') || position.includes('top'))
            return height;
        return depth;
    }
}
function inferLabelOverlap(transform = [], style) {
    if (transform.length > 0)
        return transform;
    const { labelAutoRotate, labelAutoHide, labelAutoEllipsis, labelAutoWrap } = style;
    const finalTransforms = [];
    const addToTransforms = (overlap, state) => {
        if (state) {
            finalTransforms.push(Object.assign(Object.assign({}, overlap), state));
        }
    };
    addToTransforms({
        type: 'rotate',
        optionalAngles: [0, 15, 30, 45, 60, 90],
    }, labelAutoRotate);
    addToTransforms({ type: 'ellipsis', minLength: 20 }, labelAutoEllipsis);
    addToTransforms({ type: 'hide' }, labelAutoHide);
    addToTransforms({ type: 'wrap', wordWrapWidth: 100, maxLines: 3, recoveryWhenFail: true }, labelAutoWrap);
    return finalTransforms;
}
function inferArcStyle(position, bbox, innerRadius, outerRadius, coordinate) {
    const { x, y, width, height } = bbox;
    const center = [x + width / 2, y + height / 2];
    const radius = Math.min(width, height) / 2;
    const [startAngle, endAngle] = angleOf(coordinate);
    const [w, h] = sizeOf(coordinate);
    const r = Math.min(w, h) / 2;
    const common = {
        center,
        radius,
        startAngle,
        endAngle,
        gridLength: (outerRadius - innerRadius) * r,
    };
    if (position === 'inner') {
        // @ts-ignore
        const { insetLeft, insetTop } = coordinate.getOptions();
        return Object.assign(Object.assign({}, common), { center: [center[0] - insetLeft, center[1] - insetTop], labelAlign: 'perpendicular', labelDirection: 'positive', tickDirection: 'positive', gridDirection: 'negative' });
    }
    // arc outer
    return Object.assign(Object.assign({}, common), { labelAlign: 'parallel', labelDirection: 'negative', tickDirection: 'negative', gridDirection: 'positive' });
}
function inferGrid(value, coordinate, scale) {
    if (isTheta(coordinate) || isParallel(coordinate))
        return false;
    // Display axis grid for non-discrete values.
    return value === undefined ? !!scale.getTicks : value;
}
function infer3DAxisLinearOverrideStyle(coordinate) {
    // @ts-ignore
    const { depth } = coordinate.getOptions();
    return depth
        ? {
            tickIsBillboard: true,
            lineIsBillboard: true,
            labelIsBillboard: true,
            titleIsBillboard: true,
            gridIsBillboard: true,
        }
        : {};
}
function inferAxisLinearOverrideStyle(position, orientation, bbox, coordinate, xScale) {
    const { x, y, width, height } = bbox;
    if (position === 'bottom') {
        return { startPos: [x, y], endPos: [x + width, y] };
    }
    if (position === 'left') {
        return { startPos: [x + width, y + height], endPos: [x + width, y] };
    }
    if (position === 'right') {
        return { startPos: [x, y + height], endPos: [x, y] };
    }
    if (position === 'top') {
        return { startPos: [x, y + height], endPos: [x + width, y + height] };
    }
    // linear axis, maybe in parallel, polar, radial or radar systems.
    if (position === 'center') {
        // axisY
        if (orientation === 'vertical') {
            return {
                startPos: [x, y],
                endPos: [x, y + height],
            };
        }
        // axisX
        else if (orientation === 'horizontal') {
            return {
                startPos: [x, y],
                endPos: [x + width, y],
            };
        }
        // axis with rotate
        else if (typeof orientation === 'number') {
            const [cx, cy] = coordinate.getCenter();
            const [innerRadius, outerRadius] = radiusOf(coordinate);
            const [startAngle, endAngle] = angleOf(coordinate);
            const r = Math.min(width, height) / 2;
            // @ts-ignore
            const { insetLeft, insetTop } = coordinate.getOptions();
            const innerR = innerRadius * r;
            const outerR = outerRadius * r;
            const [actualCx, actualCy] = [cx + x - insetLeft, cy + y - insetTop];
            const [cos, sin] = [Math.cos(orientation), Math.sin(orientation)];
            const startPos = [
                actualCx + outerR * cos,
                actualCy + outerR * sin,
            ];
            const endPos = [
                actualCx + innerR * cos,
                actualCy + innerR * sin,
            ];
            const getAxisXDomainLength = () => {
                const { domain } = xScale.getOptions();
                return domain.length;
            };
            const controllAngleCount = isPolar(coordinate) && xScale ? getAxisXDomainLength() : 3;
            return {
                startPos,
                endPos,
                gridClosed: Math.abs(endAngle - startAngle - 360) < 1e-6,
                gridCenter: [actualCx, actualCy],
                gridControlAngles: new Array(controllAngleCount)
                    .fill(0)
                    .map((d, i, arr) => ((endAngle - startAngle) / controllAngleCount) * i),
            };
        }
    }
    // position is inner or outer for arc axis won't be here
    return {};
}
const ArcAxisComponent = (options) => {
    const { order, size, position, orientation, labelFormatter, tickFilter, tickCount, tickMethod, tickLength, important = {}, style = {}, indexBBox, title, grid = false } = options, rest = __rest(options, ["order", "size", "position", "orientation", "labelFormatter", "tickFilter", "tickCount", "tickMethod", "tickLength", "important", "style", "indexBBox", "title", "grid"]);
    return ({ scales: [scale], value, coordinate, theme }) => {
        const { bbox } = value;
        const { domain } = scale.getOptions();
        const data = getData(scale, domain, tickCount, labelFormatter, tickFilter, tickMethod, position, coordinate);
        // Bind computed bbox if exists.
        const labels = indexBBox
            ? data.map((d, i) => {
                const bbox = indexBBox.get(i);
                if (!bbox)
                    return d;
                // bbox: [label, bbox]
                // Make than indexBBox can match current label.
                if (bbox[0] !== d.label)
                    return d;
                return Object.assign(Object.assign({}, d), { bbox: bbox[1] });
            })
            : data;
        const [innerRadius, outerRadius] = radiusOf(coordinate);
        const defaultStyle = inferArcStyle(position, bbox, innerRadius, outerRadius, coordinate);
        const { axis: axisTheme, axisArc = {} } = theme;
        const finalStyle = adaptor(deepMix({}, axisTheme, axisArc, defaultStyle, Object.assign(Object.assign(Object.assign({ type: 'arc', data: labels, titleText: titleContent(title), grid, classNamePrefix: G2_CLASS_PREFIX }, (tickLength !== undefined ? { tickLength } : null)), rest), important)));
        return new AxisComponent({
            // @fixme transform is not valid for arcAxis.
            // @ts-ignore
            style: omit(finalStyle, ['transform']),
        });
    };
};
function inferThemeStyle(scale, coordinate, theme, direction, position, orientation) {
    const baseStyle = theme.axis;
    const positionStyle = ['top', 'right', 'bottom', 'left'].includes(position)
        ? theme[`axis${capitalizeFirst(position)}`]
        : theme.axisLinear;
    const channel = scale.getOptions().name;
    const channelStyle = theme[`axis${upperFirst(channel)}`] || {};
    return Object.assign({}, baseStyle, positionStyle, channelStyle);
}
function inferDefaultStyle(scale, coordinate, theme, direction, position, orientation) {
    const themeStyle = inferThemeStyle(scale, coordinate, theme, direction, position, orientation);
    if (position === 'center') {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, themeStyle), { labelDirection: direction === 'right' ? 'negative' : 'positive' }), (direction === 'center'
            ? { labelTransform: 'translate(50%,0)' }
            : null)), { tickDirection: direction === 'right' ? 'negative' : 'positive', labelSpacing: direction === 'center' ? 0 : 4, titleSpacing: isVertical(orientation) ? 10 : 0, tick: direction === 'center' ? false : undefined });
    }
    return themeStyle;
}
const LinearAxisComponent = (options) => {
    const { direction = 'left', important = {}, labelFormatter, order, orientation, actualPosition, position, size, style = {}, title, tickCount, tickFilter, tickMethod, tickLength, transform, indexBBox } = options, userDefinitions = __rest(options, ["direction", "important", "labelFormatter", "order", "orientation", "actualPosition", "position", "size", "style", "title", "tickCount", "tickFilter", "tickMethod", "tickLength", "transform", "indexBBox"]);
    return ({ scales, value, coordinate, theme }) => {
        const { bbox } = value;
        const [scale] = scales;
        const { domain, xScale } = scale.getOptions();
        const defaultStyle = inferDefaultStyle(scale, coordinate, theme, direction, position, orientation);
        const internalAxisStyle = Object.assign(Object.assign(Object.assign({}, defaultStyle), style), userDefinitions);
        const gridLength = inferGridLength(actualPosition || position, coordinate, options.plane);
        const overrideStyle = inferAxisLinearOverrideStyle(position, orientation, bbox, coordinate, xScale);
        const threeDOverrideStyle = infer3DAxisLinearOverrideStyle(coordinate);
        const data = getData(scale, domain, tickCount, labelFormatter, tickFilter, tickMethod, position, coordinate);
        // Bind computed bbox if exists.
        const labels = indexBBox
            ? data.map((d, i) => {
                const bbox = indexBBox.get(i);
                if (!bbox)
                    return d;
                // bbox: [label, bbox]
                // Make than indexBBox can match current label.
                if (bbox[0] !== d.label)
                    return d;
                return Object.assign(Object.assign({}, d), { bbox: bbox[1] });
            })
            : data;
        const finalAxisStyle = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, internalAxisStyle), { type: 'linear', data: labels, crossSize: size, titleText: titleContent(title), labelOverlap: inferLabelOverlap(transform, internalAxisStyle), grid: inferGrid(internalAxisStyle.grid, coordinate, scale), gridLength, 
            // Always showLine, make title could align the end of axis.
            line: true, indexBBox, classNamePrefix: G2_CLASS_PREFIX }), (tickLength !== undefined ? { tickLength } : null)), (!internalAxisStyle.line ? { lineOpacity: 0 } : null)), overrideStyle), threeDOverrideStyle), important);
        // For hide overlap, do not set crossSize.
        const hasHide = finalAxisStyle.labelOverlap.find((d) => d.type === 'hide');
        if (hasHide)
            finalAxisStyle.crossSize = false;
        return new AxisComponent({
            className: 'axis',
            style: adaptor(finalAxisStyle),
        });
    };
};
const axisFactor = (axis) => {
    return (options) => {
        const { labelFormatter: useDefinedLabelFormatter, labelFilter: userDefinedLabelFilter = () => true, } = options;
        return (context) => {
            var _a;
            const { scales: [scale], } = context;
            const ticks = ((_a = scale.getTicks) === null || _a === void 0 ? void 0 : _a.call(scale)) || scale.getOptions().domain;
            const labelFormatter = typeof useDefinedLabelFormatter === 'string'
                ? format(useDefinedLabelFormatter)
                : useDefinedLabelFormatter;
            const labelFilter = (datum, index, array) => userDefinedLabelFilter(ticks[index], index, ticks);
            const normalizedOptions = Object.assign(Object.assign({}, options), { labelFormatter,
                labelFilter,
                scale });
            return axis(normalizedOptions)(context);
        };
    };
};
export const LinearAxis = axisFactor(LinearAxisComponent);
export const ArcAxis = axisFactor(ArcAxisComponent);
LinearAxis.props = {
    defaultPosition: 'center',
    defaultSize: 45,
    defaultOrder: 0,
    defaultCrossPadding: [12, 12],
    defaultPadding: [12, 12],
};
ArcAxis.props = {
    defaultPosition: 'outer',
    defaultOrientation: 'vertical',
    defaultSize: 45,
    defaultOrder: 0,
    defaultCrossPadding: [12, 12],
    defaultPadding: [12, 12],
};
//# sourceMappingURL=axis.js.map