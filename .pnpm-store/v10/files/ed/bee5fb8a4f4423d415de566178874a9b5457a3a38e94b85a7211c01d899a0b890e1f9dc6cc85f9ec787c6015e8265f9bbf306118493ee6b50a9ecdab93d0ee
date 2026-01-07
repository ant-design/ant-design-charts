"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEGEND_FOCUS_ICON_CLASS_NAME = exports.LEGEND_LABEL_CLASS_NAME = exports.LEGEND_MAKER_CLASS_NAME = exports.LEGEND_ITEMS_CLASS_NAME = exports.CONTINUOUS_LEGEND_CLASS_NAME = exports.CATEGORY_LEGEND_HTML_CLASS_NAME = exports.CATEGORY_LEGEND_CLASS_NAME = void 0;
exports.markerOf = markerOf;
exports.labelOf = labelOf;
exports.focusIconOf = focusIconOf;
exports.itemsOf = itemsOf;
exports.legendsOf = legendsOf;
exports.legendsHtmlOf = legendsHtmlOf;
exports.legendsContinuousOf = legendsContinuousOf;
exports.legendClearSetState = legendClearSetState;
exports.dataOf = dataOf;
exports.attributesOf = attributesOf;
exports.LegendFilter = LegendFilter;
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const constant_1 = require("../component/constant");
const utils_1 = require("./utils");
exports.CATEGORY_LEGEND_CLASS_NAME = 'legend-category';
exports.CATEGORY_LEGEND_HTML_CLASS_NAME = 'legend-html-category';
exports.CONTINUOUS_LEGEND_CLASS_NAME = 'legend-continuous';
exports.LEGEND_ITEMS_CLASS_NAME = 'items-item';
exports.LEGEND_MAKER_CLASS_NAME = 'legend-category-item-marker';
exports.LEGEND_LABEL_CLASS_NAME = 'legend-category-item-label';
exports.LEGEND_FOCUS_ICON_CLASS_NAME = 'legend-category-item-focus-group';
function markerOf(item) {
    return item.getElementsByClassName(exports.LEGEND_MAKER_CLASS_NAME)[0];
}
function labelOf(item) {
    return item.getElementsByClassName(exports.LEGEND_LABEL_CLASS_NAME)[0];
}
function focusIconOf(item) {
    return item.getElementsByClassName(exports.LEGEND_FOCUS_ICON_CLASS_NAME)[0];
}
function itemsOf(root) {
    return root.getElementsByClassName(exports.LEGEND_ITEMS_CLASS_NAME);
}
function legendsOf(root) {
    return root.getElementsByClassName(exports.CATEGORY_LEGEND_CLASS_NAME);
}
function legendsHtmlOf(root) {
    return root.getElementsByClassName(exports.CATEGORY_LEGEND_HTML_CLASS_NAME);
}
function legendsContinuousOf(root) {
    return root.getElementsByClassName(exports.CONTINUOUS_LEGEND_CLASS_NAME);
}
function legendClearSetState(root, setState) {
    const legends = [...legendsOf(root), ...legendsContinuousOf(root)];
    legends.forEach((legend) => {
        setState(legend, (v) => v);
    });
}
function dataOf(root) {
    // legend -> layout -> container
    let parent = root.parentNode;
    while (parent && !parent.__data__) {
        parent = parent.parentNode;
    }
    return parent.__data__;
}
function attributesOf(root) {
    let child = root;
    while (child && !child.attr('class').startsWith('legend')) {
        child = child.children[0];
    }
    return child.attributes;
}
function getScaleByMarkKey(scale, markKey, channelName) {
    var _a;
    const seriesKey = Object.keys(scale).find((channel) => {
        if (channel.startsWith(channelName)) {
            const options = scale[channel].getOptions();
            return options.name === channelName && options.markKey === markKey;
        }
    });
    return (_a = scale[seriesKey]) !== null && _a !== void 0 ? _a : scale[channelName];
}
function legendFilterOrdinal(root, { legends, // given the root of chart returns legends to be manipulated
marker: markerOf, // given the legend returns the marker
label: labelOf, // given the legend returns the label
datum, // given the legend returns the value
filter, // invoke when dispatch filter event,
defaultSelect, emitter, channel, state = {}, // state options
 }) {
    // Index handler by item.
    const itemClick = new Map();
    const itemPointerenter = new Map();
    const itemPointerout = new Map();
    const focusIconClick = new Map();
    const { unselected = {
        markerStroke: '#aaa',
        markerFill: '#aaa',
        labelFill: '#aaa',
    }, } = state;
    const markerStyle = { unselected: (0, helper_1.subObject)(unselected, 'marker') };
    const labelStyle = { unselected: (0, helper_1.subObject)(unselected, 'label') };
    const { setState: setM, removeState: removeM } = (0, utils_1.useState)(markerStyle, undefined);
    const { setState: setL, removeState: removeL } = (0, utils_1.useState)(labelStyle, undefined);
    const items = Array.from(legends(root));
    let selectedValues = items.map(datum);
    const updateLegendState = () => {
        for (const item of items) {
            const value = datum(item);
            const marker = markerOf(item);
            const label = labelOf(item);
            if (!selectedValues.includes(value)) {
                setM(marker, 'unselected');
                setL(label, 'unselected');
            }
            else {
                removeM(marker, 'unselected');
                removeL(label, 'unselected');
            }
        }
    };
    for (const item of items) {
        // Defined handlers.
        const pointerenter = () => {
            (0, utils_1.setCursor)(root, 'pointer');
        };
        const pointerout = () => {
            (0, utils_1.restoreCursor)(root);
        };
        const click = (event) => __awaiter(this, void 0, void 0, function* () {
            const value = datum(item);
            const index = selectedValues.indexOf(value);
            if (index === -1)
                selectedValues.push(value);
            else
                selectedValues.splice(index, 1);
            yield filter(selectedValues);
            updateLegendState();
            const { nativeEvent = true } = event;
            if (!nativeEvent)
                return;
            if (selectedValues.length === items.length) {
                emitter.emit('legend:reset', { nativeEvent });
            }
            else {
                // Emit events.
                emitter.emit('legend:filter', Object.assign(Object.assign({}, event), { nativeEvent, data: {
                        channel,
                        values: selectedValues,
                    } }));
            }
        });
        // Bind and store handlers.
        item.addEventListener('click', click);
        item.addEventListener('pointerenter', pointerenter);
        item.addEventListener('pointerout', pointerout);
        itemClick.set(item, click);
        itemPointerenter.set(item, pointerenter);
        itemPointerout.set(item, pointerout);
        const focusIcon = focusIconOf(item);
        if (focusIcon) {
            const focusClick = (event) => __awaiter(this, void 0, void 0, function* () {
                event.stopPropagation();
                const value = datum(item);
                const index = selectedValues.indexOf(value);
                const { nativeEvent = true } = event;
                if (index !== -1 && selectedValues.length === 1) {
                    if (!nativeEvent)
                        return;
                    // If the item is already focused, reset to show all items.
                    selectedValues = items.map(datum);
                    yield filter(selectedValues);
                    updateLegendState();
                    emitter.emit('legend:reset', { nativeEvent });
                }
                else {
                    // Otherwise, focus on the clicked item.
                    selectedValues = [value];
                    yield filter(selectedValues);
                    updateLegendState();
                    if (!nativeEvent)
                        return;
                    emitter.emit('legend:focus', Object.assign(Object.assign({}, event), { nativeEvent, data: {
                            channel,
                            value,
                        } }));
                }
            });
            // Bind focus icon handlers.
            focusIcon.addEventListener('click', focusClick);
            focusIconClick.set(item, focusClick);
        }
    }
    const onFocus = (event) => __awaiter(this, void 0, void 0, function* () {
        const { nativeEvent } = event;
        if (nativeEvent)
            return;
        const { data } = event;
        const { channel: specifiedChannel, value } = data;
        if (specifiedChannel !== channel)
            return;
        selectedValues = [value];
        yield filter(selectedValues);
        updateLegendState();
    });
    const onFilter = (event) => __awaiter(this, void 0, void 0, function* () {
        const { nativeEvent } = event;
        if (nativeEvent)
            return;
        const { data } = event;
        const { channel: specifiedChannel, values } = data;
        if (specifiedChannel !== channel)
            return;
        selectedValues = values;
        yield filter(selectedValues);
        updateLegendState();
    });
    const onEnd = (event) => __awaiter(this, void 0, void 0, function* () {
        const { nativeEvent } = event;
        if (nativeEvent)
            return;
        selectedValues = items.map(datum);
        yield filter(selectedValues);
        updateLegendState();
    });
    emitter.on('legend:filter', onFilter);
    emitter.on('legend:focus', onFocus);
    emitter.on('legend:reset', onEnd);
    if (defaultSelect) {
        emitter.emit('legend:filter', {
            data: { channel, values: defaultSelect },
        });
    }
    return () => {
        for (const item of items) {
            item.removeEventListener('click', itemClick.get(item));
            item.removeEventListener('pointerenter', itemPointerenter.get(item));
            item.removeEventListener('pointerout', itemPointerout.get(item));
            const focusIcon = focusIconOf(item);
            if (focusIcon) {
                focusIcon.removeEventListener('click', focusIconClick.get(item));
            }
        }
        emitter.off('legend:focus', onFocus);
        emitter.off('legend:filter', onFilter);
        emitter.off('legend:reset', onEnd);
    };
}
function legendFilterOrdinalHtml(root, { domain, filter, defaultSelect, emitter, channel }) {
    // HTML DOM event handlers.
    const htmlItemClick = new Map();
    const htmlItemPointerenter = new Map();
    const htmlItemPointerout = new Map();
    let selectedValues = [...domain];
    // Helper function to get chart container element.
    const getChartContainer = () => {
        var _a;
        // Use the same approach as tooltip.ts to get container.
        const view = (_a = root.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
        if (!view)
            return document.body;
        const canvas = view.getContextService().getDomElement();
        return canvas.parentElement || document.body;
    };
    // Helper function to bind HTML DOM events.
    const bindHtmlDomEvents = () => {
        const chartContainer = getChartContainer();
        // Find HTML legend containers within this chart's container.
        const htmlContainer = chartContainer.querySelector('.legend-html');
        const htmlClick = (event) => __awaiter(this, void 0, void 0, function* () {
            // Find the element with legend-value attribute by traversing up from the target.
            let targetElement = event.target;
            while (targetElement && !targetElement.hasAttribute('legend-value')) {
                targetElement = targetElement.parentElement;
                if (targetElement === htmlContainer)
                    break; // Stop if we reach the container.
            }
            if (!targetElement || !targetElement.hasAttribute('legend-value'))
                return;
            event.preventDefault();
            event.stopPropagation();
            const value = targetElement.getAttribute('legend-value');
            if (!value)
                return;
            const index = selectedValues.indexOf(value);
            if (index === -1)
                selectedValues.push(value);
            else
                selectedValues.splice(index, 1);
            yield filter(selectedValues);
            updateHtmlLegendState();
            if (selectedValues.length === domain.length) {
                emitter.emit('legend:reset', { nativeEvent: true });
            }
            else {
                emitter.emit('legend:filter', {
                    nativeEvent: true,
                    data: {
                        channel,
                        values: selectedValues,
                    },
                });
            }
        });
        // Bind HTML DOM events to the container using event delegation.
        htmlContainer.addEventListener('click', htmlClick);
        // Store handlers for cleanup.
        htmlItemClick.set(htmlContainer, htmlClick);
    };
    // Helper function to update HTML legend visual state.
    const updateHtmlLegendState = () => {
        const chartContainer = getChartContainer();
        const htmlLegendItems = chartContainer.querySelectorAll('[legend-value]');
        htmlLegendItems.forEach((htmlItem) => {
            const value = htmlItem.getAttribute('legend-value');
            if (!value)
                return;
            // Check if this value exists in the domain (belongs to this chart instance).
            if (!domain.includes(value))
                return;
            const isSelected = selectedValues.includes(value);
            const htmlElement = htmlItem;
            if (!isSelected) {
                // Apply unselected style.
                // User can override style via CSS.
                htmlElement.style.opacity = '0.4';
                htmlElement.classList.add('legend-item-inactive');
            }
            else {
                // Apply selected style.
                htmlElement.style.opacity = '1';
                htmlElement.classList.remove('legend-item-inactive');
            }
        });
    };
    // Bind HTML DOM events.
    bindHtmlDomEvents();
    const onFocus = (event) => __awaiter(this, void 0, void 0, function* () {
        const { nativeEvent } = event;
        if (nativeEvent)
            return;
        const { data } = event;
        const { channel: specifiedChannel, value } = data;
        if (specifiedChannel !== channel)
            return;
        selectedValues = [value];
        yield filter(selectedValues);
        updateHtmlLegendState();
    });
    const onFilter = (event) => __awaiter(this, void 0, void 0, function* () {
        const { nativeEvent } = event;
        if (nativeEvent)
            return;
        const { data } = event;
        const { channel: specifiedChannel, values } = data;
        if (specifiedChannel !== channel)
            return;
        selectedValues = values;
        yield filter(selectedValues);
        updateHtmlLegendState();
    });
    const onEnd = (event) => __awaiter(this, void 0, void 0, function* () {
        const { nativeEvent } = event;
        if (nativeEvent)
            return;
        selectedValues = [...domain];
        yield filter(selectedValues);
        updateHtmlLegendState();
    });
    emitter.on('legend:filter', onFilter);
    emitter.on('legend:focus', onFocus);
    emitter.on('legend:reset', onEnd);
    if (defaultSelect) {
        emitter.emit('legend:filter', {
            data: { channel, values: defaultSelect },
        });
    }
    return () => {
        // Clean up HTML DOM event listeners.
        const chartContainer = getChartContainer();
        const htmlLegendItems = chartContainer.querySelectorAll('[legend-value]');
        htmlLegendItems.forEach((htmlItem) => {
            const value = htmlItem.getAttribute('legend-value');
            if (!value)
                return;
            // Only clean up items that belong to this chart instance.
            if (!domain.includes(value))
                return;
            const clickHandler = htmlItemClick.get(htmlItem);
            const pointerenterHandler = htmlItemPointerenter.get(htmlItem);
            const pointeroutHandler = htmlItemPointerout.get(htmlItem);
            if (clickHandler) {
                htmlItem.removeEventListener('click', clickHandler);
            }
            if (pointerenterHandler) {
                htmlItem.removeEventListener('pointerenter', pointerenterHandler);
            }
            if (pointeroutHandler) {
                htmlItem.removeEventListener('pointerout', pointeroutHandler);
            }
        });
        // Clear HTML DOM handler maps.
        htmlItemClick.clear();
        htmlItemPointerenter.clear();
        htmlItemPointerout.clear();
        // Clean up emitter listeners.
        emitter.off('legend:filter', onFilter);
        emitter.off('legend:focus', onFocus);
        emitter.off('legend:reset', onEnd);
    };
}
function legendFilterContinuous(_, { legend, filter, emitter, channel }) {
    const { attributes } = legend;
    const onValueChange = (data) => {
        const { value } = data.detail;
        const domainValue = value.map((d) => {
            var _a, _b;
            const matchRealValue = (_a = attributes.data) === null || _a === void 0 ? void 0 : _a.find((item) => item.value === d);
            // For threshold/quantile scale, use domain value instead of threshold index.
            if (matchRealValue)
                return (_b = matchRealValue.domainValue) !== null && _b !== void 0 ? _b : d;
            return d;
        });
        filter(domainValue);
        emitter.emit({
            nativeEvent: true,
            data: {
                channel,
                values: domainValue,
            },
        });
    };
    legend.addEventListener('valuechange', onValueChange);
    return () => {
        legend.removeEventListener('valuechange', onValueChange);
    };
}
function filterView(context_1, _a) {
    return __awaiter(this, arguments, void 0, function* (context, // View instance,
    { legend, // Legend instance.
    channel, // Filter Channel.
    value, // Filtered Values.
    ordinal, // Data type of the legend.
    channels, // Channels for this legend.
    allChannels, // Channels for all legends.
    facet = false, // For facet.
     }) {
        const { view, update, setState } = context;
        setState(legend, (viewOptions) => {
            var _a, _b;
            const { marks } = viewOptions;
            // Add filter transform for every marks,
            // which will skip for mark without color channel.
            const channelScale = (_b = (_a = legend.attributes) === null || _a === void 0 ? void 0 : _a.scales) === null || _b === void 0 ? void 0 : _b.find((s) => s.name === channel);
            const newMarks = marks.map((mark) => {
                var _a, _b;
                // Only filter marks with the same scale key.
                if (
                // if key is not defined, use default channel name.
                ((_a = mark.scale[channel].key) !== null && _a !== void 0 ? _a : channel) !==
                    ((_b = channelScale === null || channelScale === void 0 ? void 0 : channelScale.key) !== null && _b !== void 0 ? _b : channelScale === null || channelScale === void 0 ? void 0 : channelScale.name))
                    return mark;
                if (mark.type === 'legends')
                    return mark;
                // Skip Annotation marks.
                if (constant_1.ANNOTATION_MARKS.includes(mark.type))
                    return mark;
                // Inset after aggregate transform, such as group, and bin.
                const { transform = [], data = [] } = mark;
                const index = transform.findIndex(({ type }) => type.startsWith('group') || type.startsWith('bin'));
                const newTransform = [...transform];
                if (data.length) {
                    newTransform.splice(index + 1, 0, {
                        type: 'filter',
                        [channel]: {
                            value,
                            ordinal,
                        },
                    });
                }
                // Set domain of scale to preserve encoding.
                const newScale = Object.fromEntries(channels.map((channel) => {
                    const matchScale = getScaleByMarkKey(view.scale, viewOptions.key, channel);
                    return [channel, { domain: matchScale.getOptions().domain }];
                }));
                return (0, util_1.deepMix)({}, mark, Object.assign(Object.assign({ transform: newTransform, scale: newScale }, (!ordinal && { animate: false })), { legend: facet
                        ? false
                        : Object.fromEntries(allChannels.map((d) => [d, { preserve: true }])) }));
            });
            return Object.assign(Object.assign({}, viewOptions), { marks: newMarks });
        });
        yield update();
    });
}
function filterFacets(facets, options) {
    for (const facet of facets) {
        filterView(facet, Object.assign(Object.assign({}, options), { facet: true }));
    }
}
function LegendFilter() {
    return (context, contexts, emitter) => {
        const { container } = context;
        const facets = contexts.filter((d) => d !== context);
        const isFacet = facets.length > 0;
        const channelsOf = (legend) => {
            return dataOf(legend).scales.map((d) => d.name);
        };
        const legends = [
            ...legendsOf(container),
            ...legendsHtmlOf(container),
            ...legendsContinuousOf(container),
        ];
        const allChannels = legends.flatMap(channelsOf);
        const filter = isFacet
            ? (0, util_1.throttle)(filterFacets, 50, { trailing: true })
            : (0, util_1.throttle)(filterView, 50, { trailing: true });
        const removes = legends.map((legend) => {
            const { name: channel, domain } = dataOf(legend).scales[0];
            const channels = channelsOf(legend);
            const common = {
                legend,
                channel,
                channels,
                allChannels,
            };
            if (legend.className === exports.CATEGORY_LEGEND_CLASS_NAME) {
                return legendFilterOrdinal(legend, {
                    legends: itemsOf,
                    marker: markerOf,
                    label: labelOf,
                    datum: (d) => {
                        const { __data__: datum } = d;
                        const { index } = datum;
                        return domain[index];
                    },
                    filter: (value) => {
                        const options = Object.assign(Object.assign({}, common), { value, ordinal: true });
                        if (isFacet)
                            filter(facets, options);
                        else
                            filter(context, options);
                    },
                    state: legend.attributes.state,
                    defaultSelect: legend.attributes.defaultSelect,
                    channel,
                    emitter,
                });
            }
            else if (legend.className === exports.CATEGORY_LEGEND_HTML_CLASS_NAME) {
                return legendFilterOrdinalHtml(container, {
                    domain,
                    filter: (value) => {
                        const options = Object.assign(Object.assign({}, common), { value, ordinal: true });
                        if (isFacet)
                            filter(facets, options);
                        else
                            filter(context, options);
                    },
                    defaultSelect: legend.attributes.defaultSelect,
                    channel,
                    emitter,
                });
            }
            else {
                return legendFilterContinuous(container, {
                    legend,
                    filter: (value) => {
                        const options = Object.assign(Object.assign({}, common), { value, ordinal: false });
                        if (isFacet)
                            filter(facets, options);
                        else
                            filter(context, options);
                    },
                    emitter,
                    channel,
                });
            }
        });
        return () => {
            removes.forEach((remove) => remove());
        };
    };
}
//# sourceMappingURL=legendFilter.js.map