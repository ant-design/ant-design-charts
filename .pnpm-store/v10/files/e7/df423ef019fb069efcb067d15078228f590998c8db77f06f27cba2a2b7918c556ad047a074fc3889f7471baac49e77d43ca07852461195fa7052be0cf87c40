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
import { deepMix, isEqual } from '@antv/util';
import { groups, max, sum } from '@antv/vendor/d3-array';
import { format } from '@antv/vendor/d3-format';
import { DisplayObject, Text } from '@antv/g';
import { getPolarOptions, getRadialOptions, } from '../coordinate';
import { combine } from '../utils/array';
import { prettyNumber } from '../utils/number';
import { capitalizeFirst, defined, subObject } from '../utils/helper';
import { LEGEND_INFER_STRATEGIES } from '../component/constant';
import { coordOf, isHelix, isParallel, isPolar, isRadar, isRadial, isReflect, isReflectY, isTheta, isTranspose, } from './coordinate';
import { useLibrary } from './library';
import { isValidScale } from './scale';
import { ConstantScale, ContinuousScale, DiscreteScale, DistributionScale, } from './types/scale';
export function inferComponent(scales, partialOptions, library) {
    const { coordinates = [], title } = partialOptions;
    const [, createGuideComponent] = useLibrary('component', library);
    const displayedScales = scales.filter(({ guide }) => {
        if (guide === null)
            return false;
        return true;
    });
    const components = [];
    // Sliders and scrollbar component.
    const sliders = inferScrollableComponents(partialOptions, scales, library);
    components.push(...sliders);
    // Title components.
    if (title) {
        const { props } = createGuideComponent('title');
        const { defaultPosition, defaultOrientation, defaultOrder, defaultSize, defaultCrossPadding, } = props;
        const titleOptions = typeof title === 'string' ? { title } : title;
        components.push(Object.assign({ type: 'title', position: defaultPosition, orientation: defaultOrientation, order: defaultOrder, crossPadding: defaultCrossPadding[0], defaultSize }, titleOptions));
    }
    // Axis and legends.
    const inferredComponents = inferComponentsType(displayedScales, coordinates);
    inferredComponents.forEach(([type, relativeScales]) => {
        const { props } = createGuideComponent(type);
        const { defaultPosition, defaultPlane = 'xy', defaultOrientation, defaultSize, defaultOrder, defaultLength, defaultPadding: DP = [0, 0], defaultCrossPadding: DCP = [0, 0], } = props;
        // @todo to be confirm if the scale can be merged.
        // const scale: G2ScaleOptions = Object.assign({}, ...relativeScales);
        const scale = deepMix({}, ...relativeScales);
        const { guide: guideOptions, field } = scale;
        // A scale may have multiple guides.
        const guides = Array.isArray(guideOptions) ? guideOptions : [guideOptions];
        for (const partialGuide of guides) {
            const [position, orientation] = inferComponentPositionAndOrientation(type, defaultPosition, defaultOrientation, partialGuide, relativeScales, displayedScales, coordinates);
            // Skip if position and orientation are not specified.
            // @example the last axis of radar chart
            if (!position && !orientation)
                continue;
            const isVertical = position === 'left' || position === 'right';
            const defaultPadding = isVertical ? DP[1] : DP[0];
            const defaultCrossPadding = isVertical ? DCP[1] : DCP[0];
            const { size, order = defaultOrder, length = defaultLength, padding = defaultPadding, crossPadding = defaultCrossPadding, } = partialGuide;
            components.push(Object.assign(Object.assign({ title: field }, partialGuide), { defaultSize,
                length,
                position, plane: defaultPlane, orientation,
                padding,
                order,
                crossPadding,
                size,
                type, scales: relativeScales }));
        }
    });
    return components;
}
export function renderComponent(component, coordinate, theme, library, markState) {
    const [useGuideComponent] = useLibrary('component', library);
    const { scaleInstances: scales, scale, bbox } = component, options = __rest(component, ["scaleInstances", "scale", "bbox"]);
    const value = { bbox, library };
    const render = useGuideComponent(options);
    return render({
        coordinate,
        library,
        markState,
        scales,
        theme,
        value,
        scale,
    });
}
export function normalizeComponents(components) {
    return components.map((d) => {
        const component = deepMix(d, d.style);
        delete component.style;
        return component;
    });
}
export function flatComponents(components) {
    return components.flatMap((d) => (d.type == 'group' ? d.children : d));
}
// Wrap legends into a group component.
export function groupComponents(components, crossSize) {
    // Group components by key.
    const P = ['left', 'right', 'bottom', 'top'];
    const key = ({ type, position, group }) => {
        if (!P.includes(position))
            return Symbol('independent');
        if (group === undefined) {
            if (type.startsWith('legend'))
                return `legend-${position}`;
            return Symbol('independent');
        }
        if (group === 'independent')
            return Symbol('independent');
        return group;
    };
    const grouped = groups(components, key);
    // Update attributes of group components,
    // and maybe flatten group components without enough room.
    return grouped.flatMap(([, components]) => {
        if (components.length === 1)
            return components[0];
        // If crossSize defined, group components only when has
        // enough room.
        if (crossSize !== undefined) {
            // Compute total length.
            const DL = components
                .filter((d) => d.length !== undefined)
                .map((d) => d.length);
            const totalLength = sum(DL);
            // If there is no enough room for components,
            // do not group.
            if (totalLength > crossSize) {
                components.forEach((d) => (d.group = Symbol('independent')));
                return components;
            }
            // Group legends and update legend length.
            const emptyLength = crossSize - totalLength;
            const emptyCount = components.length - DL.length;
            const length = emptyLength / emptyCount;
            components.forEach((d) => {
                if (d.length !== undefined)
                    return;
                d.length = length;
            });
        }
        // Create a group component.
        const size = max(components, (d) => d.size);
        const order = max(components, (d) => d.order);
        const crossPadding = max(components, (d) => d.crossPadding);
        const position = components[0].position;
        return {
            type: 'group',
            size,
            order,
            position,
            children: components,
            crossPadding,
        };
    });
}
function inferLegendComponentType(scales, coordinates) {
    // Filter accepts scales.
    const channels = ['shape', 'size', 'color', 'opacity'];
    const isConstantSize = (type, name) => type === 'constant' && name === 'size';
    const accepts = scales.filter(({ type, name }) => typeof type === 'string' &&
        channels.includes(name) &&
        !isConstantSize(type, name));
    // Group scales by fields.
    const constants = accepts.filter(({ type }) => type === 'constant');
    const nonConstants = accepts.filter(({ type }) => type !== 'constant');
    const groupKey = (d) => (d.field ? d.field : Symbol('independent'));
    const fieldScales = groups(nonConstants, groupKey)
        .map(([key, scales]) => [key, [...scales, ...constants]])
        .filter(([, scales]) => scales.some((scale) => scale.type !== 'constant'));
    const scalesByField = new Map(fieldScales);
    // Skip empty scales.
    if (scalesByField.size === 0)
        return [];
    // Infer components.
    const sort = (arr) => arr.sort(([a], [b]) => a.localeCompare(b));
    const components = Array.from(scalesByField)
        .map(([, scs]) => {
        const combinations = combine(scs).sort((a, b) => b.length - a.length);
        const options = combinations.map((combination) => ({
            combination,
            option: combination.map((scale) => [scale.name, getScaleType(scale)]),
        }));
        // For category legend.
        for (const { option, combination } of options) {
            // If every scale is constant, do not display legend.
            if (option.every((d) => d[1] === 'constant'))
                continue;
            if (option.every((d) => d[1] === 'discrete' || d[1] === 'constant')) {
                return ['legendCategory', combination];
            }
        }
        // For reset legend.
        // @todo Remove this.
        for (const [componentType, accords] of LEGEND_INFER_STRATEGIES) {
            for (const { option, combination } of options) {
                if (accords.some((accord) => isEqual(sort(accord), sort(option)))) {
                    return [componentType, combination];
                }
            }
        }
        return null;
    })
        .filter(defined);
    return components;
}
function getScaleType(scale) {
    const { type } = scale;
    if (typeof type !== 'string')
        return null;
    if (type in ContinuousScale)
        return 'continuous';
    if (type in DiscreteScale)
        return 'discrete';
    if (type in DistributionScale)
        return 'distribution';
    if (type in ConstantScale)
        return 'constant';
    return null;
}
function inferAxisComponentType(scales, coordinates) {
    return scales
        .map((scale) => {
        const { name } = scale;
        // todo wait for gui provide helix axis
        if (isHelix(coordinates) || isTheta(coordinates))
            return null;
        if (isTranspose(coordinates) &&
            (isPolar(coordinates) || isRadial(coordinates)))
            return null;
        // infer axis
        if (name.startsWith('x')) {
            if (isPolar(coordinates))
                return ['axisArc', [scale]];
            if (isRadial(coordinates))
                return ['axisLinear', [scale]];
            return [isTranspose(coordinates) ? 'axisY' : 'axisX', [scale]];
        }
        if (name.startsWith('y')) {
            if (isPolar(coordinates))
                return ['axisLinear', [scale]];
            if (isRadial(coordinates))
                return ['axisArc', [scale]];
            return [isTranspose(coordinates) ? 'axisX' : 'axisY', [scale]];
        }
        // Only support linear axis for z.
        if (name.startsWith('z')) {
            return ['axisZ', [scale]];
        }
        if (name.startsWith('position')) {
            if (isRadar(coordinates))
                return ['axisRadar', [scale]];
            if (!isPolar(coordinates))
                return ['axisY', [scale]];
        }
        return null;
    })
        .filter(defined);
}
function inferComponentsType(scales, coordinates) {
    const availableScales = scales.filter((scale) => isValidScale(scale));
    return [
        ...inferLegendComponentType(availableScales, coordinates),
        ...inferAxisComponentType(availableScales, coordinates),
    ];
}
function angleOf(coordinates) {
    const polar = coordOf(coordinates, 'polar');
    if (polar.length) {
        const lastPolar = polar[polar.length - 1];
        const { startAngle, endAngle } = getPolarOptions(lastPolar);
        return [startAngle, endAngle];
    }
    const radial = coordOf(coordinates, 'radial');
    if (radial.length) {
        const lastRadial = radial[radial.length - 1];
        const { startAngle, endAngle } = getRadialOptions(lastRadial);
        return [startAngle, endAngle];
    }
    return [-Math.PI / 2, (Math.PI / 2) * 3];
}
/**
 * match index of position
 */
function matchPosition(name) {
    const match = /position(\d*)/g.exec(name);
    if (!match)
        return null;
    return +match[1];
}
function inferAxisPositionAndOrientation(type, ordinalPosition, relativeScales, scales, coordinates) {
    // a axis only has one scale
    const { name } = relativeScales[0];
    // todo, in current resolution, the radar chart is implement by parallel + polar coordinate.
    // implementation plan to be confirmed.
    // in current implementation, it must to add the first position encode to it's last.
    // so we won't render the last axis repeatably.
    if (type === 'axisRadar') {
        const positions = scales.filter((scale) => scale.name.startsWith('position'));
        const index = matchPosition(name);
        if (index === null)
            return [null, null];
        // infer radar axis orientation
        const [startAngle, endAngle] = angleOf(coordinates);
        const positionLength = isRadar(coordinates)
            ? positions.length
            : positions.length - 1;
        const angle = ((endAngle - startAngle) / positionLength) * index + startAngle;
        return ['center', angle];
    }
    if (type === 'axisY' && isParallel(coordinates)) {
        return isTranspose(coordinates)
            ? ['center', 'horizontal']
            : ['center', 'vertical'];
    }
    // in non-cartesian coordinate systems, infer the arc axis angle
    if (type === 'axisLinear') {
        const [startAngle] = angleOf(coordinates);
        return ['center', startAngle];
    }
    if (type === 'axisArc') {
        if (ordinalPosition[0] === 'inner')
            return ['inner', null];
        return ['outer', null];
    }
    if (isPolar(coordinates))
        return ['center', null];
    if (isRadial(coordinates))
        return ['center', null];
    if ((type === 'axisX' && isReflect(coordinates)) ||
        (type === 'axisX' && isReflectY(coordinates))) {
        return ['top', null];
    }
    // if (type === 'axisX') return ['bottom', null];
    return ordinalPosition;
}
// @todo Infer position by coordinates.
function inferComponentPositionAndOrientation(type, defaultPosition, defaultOrientation, guide, relativeScales, scales, coordinates) {
    const [startAngle] = angleOf(coordinates);
    const ordinalPositionAndOrientation = [
        guide.position || defaultPosition,
        startAngle !== null && startAngle !== void 0 ? startAngle : defaultOrientation,
    ];
    if (typeof type === 'string' && type.startsWith('axis')) {
        return inferAxisPositionAndOrientation(type, ordinalPositionAndOrientation, relativeScales, scales, coordinates);
    }
    if (typeof type === 'string' &&
        type.startsWith('legend') &&
        isPolar(coordinates)) {
        if (guide.position === 'center')
            return ['center', 'vertical'];
    }
    // for general component, use default position
    return ordinalPositionAndOrientation;
}
function inferScrollableType(name, type, coordinates = []) {
    if (name === 'x')
        return isTranspose(coordinates) ? `${type}Y` : `${type}X`;
    if (name === 'y')
        return isTranspose(coordinates) ? `${type}X` : `${type}Y`;
    return null;
}
/**
 * Infer scrollable components, such as slider and scrollbar.
 */
function inferScrollableComponents(partialOptions, scales, library) {
    const [, createGuideComponent] = useLibrary('component', library);
    const { coordinates } = partialOptions;
    function normalized(type, channelName, scale, options) {
        const componentType = inferScrollableType(channelName, type, coordinates);
        if (!options || !componentType)
            return;
        const { props } = createGuideComponent(componentType);
        const { defaultPosition, defaultSize, defaultOrder, defaultCrossPadding: [crossPadding], } = props;
        return Object.assign(Object.assign({ position: defaultPosition, defaultSize, order: defaultOrder, type: componentType, crossPadding }, options), { scales: [scale] });
    }
    return scales
        .filter((d) => d.slider || d.scrollbar)
        .flatMap((scale) => {
        const { slider, scrollbar, name: channelName } = scale;
        return [
            normalized('slider', channelName, scale, slider),
            normalized('scrollbar', channelName, scale, scrollbar),
        ];
    })
        .filter((d) => !!d);
}
// !!! Note Mutate component.size and component.
export function computeComponentSize(component, crossSize, crossPadding, position, theme, library) {
    // Only compute and update size of components in padding area.
    const { type } = component;
    const paddingAreas = ['left', 'right', 'bottom', 'top'];
    if (!paddingAreas.includes(position))
        return;
    if (typeof type !== 'string')
        return;
    const t = type;
    const createCompute = () => {
        if (t.startsWith('axis'))
            return computeAxisSize;
        if (t.startsWith('group'))
            return computeGroupSize;
        if (t.startsWith('legendContinuous'))
            return computeContinuousLegendSize;
        if (t === 'legendCategory')
            return computeCategoryLegendSize;
        if (t.startsWith('slider'))
            return computeSliderSize;
        if (t === 'title')
            return computeTitleSize;
        if (t.startsWith('scrollbar'))
            return computeScrollbarSize;
        return () => { };
    };
    return createCompute()(component, crossSize, crossPadding, position, theme, library);
}
function computeGroupSize(component, crossSize, crossPadding, position, theme, library) {
    const { children } = component;
    const maxCrossPadding = max(children, (d) => d.crossPadding);
    children.forEach((d) => (d.crossPadding = maxCrossPadding));
    children.forEach((child) => computeComponentSize(child, crossSize, crossPadding, position, theme, library));
    const maxSize = max(children, (d) => d.size);
    component.size = maxSize;
    children.forEach((d) => (d.size = maxSize));
}
function computeScrollbarSize(component, crossSize, crossPadding, position, theme, library) {
    const { trackSize = 6 } = deepMix({}, theme.scrollbar, component);
    component.size = trackSize;
}
function computeTitleSize(component, crossSize, crossPadding, position, theme, library) {
    const _a = deepMix({}, theme.title, component), { title, subtitle, spacing = 0 } = _a, style = __rest(_a, ["title", "subtitle", "spacing"]);
    if (title) {
        const titleStyle = subObject(style, 'title');
        const titleBBox = computeLabelSize(title, titleStyle);
        component.size = titleBBox.height;
    }
    if (subtitle) {
        const subtitleStyle = subObject(style, 'subtitle');
        const subtitleBBox = computeLabelSize(subtitle, subtitleStyle);
        component.size += spacing + subtitleBBox.height;
    }
}
function computeSliderSize(component, crossSize, crossPadding, position, theme, library) {
    const styleOf = () => {
        const { slider } = theme;
        return deepMix({}, slider, component);
    };
    const { trackSize, handleIconSize } = styleOf();
    const size = Math.max(trackSize, handleIconSize * 2.4);
    component.size = size;
}
function computeAxisSize(component, crossSize, crossPadding, position, theme, library) {
    var _a, _b;
    // If padding is auto, use hide as the labelTransform by default
    // to avoid overlap between labels.
    component.transform = component.transform || [{ type: 'hide' }];
    // Vertical or horizontal.
    const isVertical = position === 'left' || position === 'right';
    // Get styles to be applied.
    const style = styleOf(component, position, theme);
    const { tickLength = 0, labelSpacing = 0, titleSpacing = 0, labelAutoRotate } = style, rest = __rest(style, ["tickLength", "labelSpacing", "titleSpacing", "labelAutoRotate"]);
    // Compute Labels.
    const scale = createScale(component, library);
    const labelBBoxes = computeLabelsBBox(rest, scale);
    // Compute dynamic tickLength if it's a function
    let maxTickLength = tickLength;
    if (typeof component.tickLength === 'function') {
        const ticks = ((_a = scale.getTicks) === null || _a === void 0 ? void 0 : _a.call(scale)) || scale.getOptions().domain;
        const tickLengths = ticks.map((d, i, array) => component.tickLength(d, i, array));
        maxTickLength = Math.max(...tickLengths, 0);
    }
    const paddingTick = maxTickLength + labelSpacing;
    if (labelBBoxes && labelBBoxes.length) {
        const maxLabelWidth = max(labelBBoxes, (d) => d.width);
        const maxLabelHeight = max(labelBBoxes, (d) => d.height);
        if (isVertical) {
            component.size = maxLabelWidth + paddingTick;
        }
        else {
            const { tickFilter, labelTransform } = component;
            // If the labels can't be placed horizontally, and labelTransform is unset,
            // rotate 90 deg to display them.
            if (overflowX(scale, labelBBoxes, crossSize, crossPadding, tickFilter) &&
                !labelTransform &&
                labelAutoRotate !== false &&
                labelAutoRotate !== null) {
                component.labelTransform = 'rotate(90)';
                component.size = maxLabelWidth + paddingTick;
            }
            else {
                component.labelTransform = (_b = component.labelTransform) !== null && _b !== void 0 ? _b : 'rotate(0)';
                component.size = maxLabelHeight + paddingTick;
            }
        }
    }
    else {
        component.size = maxTickLength;
    }
    // Compute title.
    const titleBBox = computeTitleBBox(rest);
    if (titleBBox) {
        if (isVertical) {
            component.size += titleSpacing + titleBBox.width;
        }
        else {
            component.size += titleSpacing + titleBBox.height;
        }
    }
}
function computeContinuousLegendSize(component, crossSize, crossPadding, position, theme, library) {
    // Get styles.
    const styleOf = () => {
        const { legendContinuous } = theme;
        return deepMix({}, legendContinuous, component);
    };
    const _a = styleOf(), { labelSpacing = 0, titleSpacing = 0 } = _a, rest = __rest(_a, ["labelSpacing", "titleSpacing"]);
    // Vertical or horizontal.
    const isVertical = position === 'left' || position === 'right';
    // Ribbon styles.
    const ribbonStyles = subObject(rest, 'ribbon');
    const { size: ribbonSize } = ribbonStyles;
    const handleIconStyles = subObject(rest, 'handleIcon');
    const { size: handleIconSize } = handleIconStyles;
    const mainSize = Math.max(ribbonSize, handleIconSize * 2.4);
    component.size = mainSize;
    // Compute labels.
    const scale = createScale(component, library);
    const labelBBoxes = computeLabelsBBox(rest, scale);
    if (labelBBoxes) {
        const key = isVertical ? 'width' : 'height';
        const size = max(labelBBoxes, (d) => d[key]);
        component.size += size + labelSpacing;
    }
    // Compute title.
    const titleBBox = computeTitleBBox(rest);
    if (titleBBox) {
        if (isVertical) {
            component.size = Math.max(component.size, titleBBox.width);
        }
        else {
            component.size += titleSpacing + titleBBox.height;
        }
    }
}
function computeCategoryLegendSize(component, crossSize0, crossPadding, position, theme, library) {
    const styleOf = () => {
        const { legendCategory } = theme;
        const { title } = component;
        const [defaultTitle, specifiedTitle] = Array.isArray(title)
            ? [title, undefined]
            : [undefined, title];
        return deepMix({ title: defaultTitle }, legendCategory, Object.assign(Object.assign({}, component), { title: specifiedTitle }));
    };
    const _a = styleOf(), { focus, itemSpacing, focusMarkerSize, itemMarkerSize, titleSpacing, rowPadding, colPadding, maxCols = Infinity, maxRows = Infinity } = _a, rest = __rest(_a, ["focus", "itemSpacing", "focusMarkerSize", "itemMarkerSize", "titleSpacing", "rowPadding", "colPadding", "maxCols", "maxRows"]);
    const { cols, length } = component;
    const getRows = (rows) => Math.min(rows, maxRows);
    const getCols = (cols) => Math.min(cols, maxCols);
    // Vertical or horizontal.
    const isVertical = position === 'left' || position === 'right';
    const crossSize = length === undefined
        ? crossSize0 + (isVertical ? 0 : crossPadding[0] + crossPadding[1])
        : length;
    // Create scale.
    const scale = createScale(component, library);
    // If render is provided, use HTML to render.
    const { render } = component;
    if (render && typeof document !== 'undefined') {
        const domain = scale.getOptions().domain;
        const { labelFormatter } = rest;
        const formatLabel = (d) => {
            if (!labelFormatter)
                return `${d}`;
            return typeof labelFormatter === 'string'
                ? format(labelFormatter)(d)
                : labelFormatter(d);
        };
        const items = domain.map((d, i) => ({
            id: d,
            index: i,
            label: formatLabel(d),
            value: d,
            color: scale.map(d),
        }));
        const html = render(items, rest);
        const container = document.createElement('div');
        const { width, height } = component;
        const style = {
            position: 'absolute',
            visibility: 'hidden',
            top: '-9999px',
        };
        if (width)
            style.width = `${width}px`;
        else if (!isVertical)
            style.width = `${crossSize}px`;
        if (height)
            style.height = `${height}px`;
        else if (isVertical)
            style.height = `${crossSize}px`;
        Object.assign(container.style, style);
        if (typeof html === 'string') {
            container.innerHTML = html;
        }
        else if (html instanceof HTMLElement) {
            container.appendChild(html);
        }
        document.body.appendChild(container);
        const bbox = container.getBoundingClientRect();
        document.body.removeChild(container);
        component.size = isVertical ? bbox.width : bbox.height;
        return;
    }
    // Compute title.
    const titleBBox = computeTitleBBox(rest);
    const labelBBoxes = computeLabelsBBox(rest, scale, 'itemLabel');
    // Compute itemValue sizes if itemValue is configured
    const valueBBoxes = rest.itemValueText !== undefined
        ? computeLabelsBBox(rest, scale, 'itemValue')
        : null;
    const height = Math.max(labelBBoxes[0].height, itemMarkerSize, 
    // Also consider itemValue height if it exists
    ...((valueBBoxes === null || valueBBoxes === void 0 ? void 0 : valueBBoxes[0]) ? [valueBBoxes[0].height] : [])) + rowPadding;
    const widthOf = (labelWidth, padding = 0) => {
        // Calculate total width including marker, label, value (if exists), and focus icon
        let totalWidth = itemMarkerSize + labelWidth + itemSpacing[0] + padding;
        // Add itemValue width if it exists
        if (valueBBoxes === null || valueBBoxes === void 0 ? void 0 : valueBBoxes[0]) {
            totalWidth += valueBBoxes[0].width + itemSpacing[1];
        }
        // Add focus icon width if focus is enabled
        if (focus) {
            totalWidth += focusMarkerSize + itemSpacing[2];
        }
        return totalWidth;
    };
    // Only support grid layout for vertical area.
    const computeVerticalSize = () => {
        let maxSize = -Infinity;
        let pos = 0;
        let cols = 1;
        let rows = 0;
        let maxRows = -Infinity;
        let maxPos = -Infinity;
        const titleHeight = titleBBox ? titleBBox.height : 0;
        const maxHeight = crossSize - titleHeight;
        for (const { width } of labelBBoxes) {
            const w = widthOf(width, colPadding);
            maxSize = Math.max(maxSize, w);
            if (pos + height > maxHeight) {
                cols++;
                maxRows = Math.max(maxRows, rows);
                maxPos = Math.max(maxPos, pos);
                rows = 1;
                pos = height;
            }
            else {
                pos += height;
                rows++;
            }
        }
        if (cols <= 1) {
            maxRows = rows;
            maxPos = pos;
        }
        component.size = maxSize * getCols(cols);
        component.length = maxPos + titleHeight;
        deepMix(component, { cols: getCols(cols), gridRow: maxRows });
    };
    // Horizontal grid layout.
    const computeHorizontalGrid = () => {
        const rows = Math.ceil(labelBBoxes.length / cols);
        const maxWidth = max(labelBBoxes, (d) => widthOf(d.width)) * cols;
        component.size = height * getRows(rows) - rowPadding;
        component.length = Math.min(maxWidth, crossSize);
    };
    // Horizontal flex layout.
    const computeHorizontalFlex = () => {
        let rows = 1;
        let pos = 0;
        let maxPos = -Infinity;
        for (const { width } of labelBBoxes) {
            const w = widthOf(width, colPadding);
            if (pos + w > crossSize) {
                maxPos = Math.max(maxPos, pos);
                pos = w;
                rows++;
            }
            else {
                pos += w;
            }
        }
        if (rows === 1)
            maxPos = pos;
        component.size = height * getRows(rows) - rowPadding;
        component.length = maxPos;
    };
    if (isVertical)
        computeVerticalSize();
    else if (typeof cols === 'number')
        computeHorizontalGrid();
    else
        computeHorizontalFlex();
    // Compute titles.
    if (titleBBox) {
        if (isVertical) {
            component.size = Math.max(component.size, titleBBox.width);
        }
        else {
            component.size += titleSpacing + titleBBox.height;
        }
    }
}
export function createScale(component, library) {
    const [useScale] = useLibrary('scale', library);
    // Init scale, the tickCount of axis has higher priority than scale.
    const { scales, tickCount, tickMethod } = component;
    const scaleOptions = scales.find((d) => d.type !== 'constant' && d.type !== 'identity');
    if (tickCount !== undefined)
        scaleOptions.tickCount = tickCount;
    if (tickMethod !== undefined)
        scaleOptions.tickMethod = tickMethod;
    return useScale(scaleOptions);
}
export function computeLabelsBBox(component, scale, key = 'label') {
    const { labelFormatter, tickFilter, label = true } = component, style = __rest(component, ["labelFormatter", "tickFilter", "label"]);
    if (!label)
        return null;
    // Get labels to be rendered.
    const labels = labelsOf(scale, labelFormatter, tickFilter);
    const labelStyle = subObject(style, key);
    const labelStyles = labels.map((d, i) => Object.fromEntries(Object.entries(labelStyle).map(([key, value]) => [
        key,
        typeof value === 'function' ? value(d, i) : value,
    ])));
    const labelBBoxes = labels.map((d, i) => {
        const normalizeStyle = labelStyles[i];
        return computeLabelSize(d, normalizeStyle);
    });
    // Cache boxes to avoid computed twice.
    // @todo GUI use untransformed bbox, so it can't cache if
    // label.style has transform attributes.
    const hasTransform = labelStyles.some((d) => d.transform);
    if (!hasTransform) {
        const I = labels.map((_, i) => i);
        component.indexBBox = new Map(I.map((i) => [i, [labels[i], labelBBoxes[i]]]));
    }
    return labelBBoxes;
}
export function computeTitleBBox(component) {
    const isFalsy = (x) => x === false || x === null;
    const { title } = component, style = __rest(component, ["title"]);
    if (isFalsy(title) || title === undefined)
        return null;
    const titleStyle = subObject(style, 'title');
    const { direction, transform } = titleStyle;
    const titleText = Array.isArray(title) ? title.join(',') : title;
    if (typeof titleText !== 'string')
        return null;
    const titleBBox = computeLabelSize(titleText, Object.assign(Object.assign({}, titleStyle), { transform: transform || (direction === 'vertical' ? 'rotate(-90)' : '') }));
    return titleBBox;
}
export function styleOf(axis, position, theme) {
    const { title } = axis;
    const [defaultTitle, specifiedTitle] = Array.isArray(title)
        ? [title, undefined]
        : [undefined, title];
    const { axis: baseStyle, 
    // @ts-ignore
    [`axis${capitalizeFirst(position)}`]: positionStyle, } = theme;
    return deepMix({ title: defaultTitle }, baseStyle, positionStyle, Object.assign(Object.assign({}, axis), { title: specifiedTitle }));
}
function ticksOf(scale, tickFilter) {
    const ticks = scale.getTicks ? scale.getTicks() : scale.getOptions().domain;
    if (!tickFilter)
        return ticks;
    return ticks.filter(tickFilter);
}
function labelsOf(scale, labelFormatter, tickFilter) {
    const T = ticksOf(scale, tickFilter);
    const ticks = T.map((d) => (typeof d === 'number' ? prettyNumber(d) : d));
    const formatter = labelFormatter
        ? typeof labelFormatter === 'string'
            ? format(labelFormatter)
            : labelFormatter
        : scale.getFormatter
            ? scale.getFormatter()
            : (d) => `${d}`;
    return ticks.map(formatter);
}
function offsetOf(scale, d) {
    if (!scale.getBandWidth)
        return 0;
    const offset = scale.getBandWidth(d) / 2;
    return offset;
}
function overflowX(scale, labelBBoxes, crossSize, crossPadding, tickFilter) {
    // If actual size bigger than container size, overflow.
    const totalSize = sum(labelBBoxes, (d) => d.width);
    if (totalSize > crossSize)
        return true;
    // Clone scale to get visual position for labels.
    const scaleX = scale.clone();
    scaleX.update({ range: [0, crossSize] });
    const ticks = ticksOf(scale, tickFilter);
    const X = ticks.map((d) => scaleX.map(d) + offsetOf(scaleX, d));
    const I = ticks.map((_, i) => i);
    const startX = -crossPadding[0];
    const endX = crossSize + crossPadding[1];
    const extent = (x, bbox) => {
        const { width } = bbox;
        return [x - width / 2, x + width / 2];
    };
    // Collision detection.
    for (let i = 0; i < I.length; i++) {
        const x = X[i];
        const [x0, x1] = extent(x, labelBBoxes[i]);
        // If a label is out of plot area, overflow.
        if (x0 < startX || x1 > endX)
            return true;
        const y = X[i + 1];
        if (y) {
            // If two labels intersect, overflow.
            const [y0] = extent(y, labelBBoxes[i + 1]);
            if (x1 > y0)
                return true;
        }
    }
    return false;
}
function computeLabelSize(d, style) {
    const shape = normalizeLabel(d);
    const { filter } = style, rest = __rest(style, ["filter"]);
    shape.attr(Object.assign(Object.assign({}, rest), { visibility: 'none' }));
    const bbox = shape.getBBox();
    return bbox;
}
function normalizeLabel(d) {
    if (d instanceof DisplayObject)
        return d;
    return new Text({ style: { text: `${d}` } });
}
//# sourceMappingURL=component.js.map