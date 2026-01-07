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
exports.SLIDER_CLASS_NAME = void 0;
exports.SliderFilter = SliderFilter;
const util_1 = require("@antv/util");
const g_1 = require("@antv/g");
const coordinate_1 = require("../utils/coordinate");
const scale_1 = require("../utils/scale");
const utils_1 = require("./utils");
const adaptiveFilter_1 = require("./adaptiveFilter");
exports.SLIDER_CLASS_NAME = 'slider';
/**
 * Calculates extra inset needed for point marks based on size scale range or values
 *
 * @param view - View descriptor containing markState
 * @returns Calculated inset value from size scale range or values
 */
function calculatePointInset(view) {
    var _a, _b, _c, _d;
    if (!(view === null || view === void 0 ? void 0 : view.markState))
        return 0;
    let maxSize = 0;
    for (const [mark, state] of view.markState.entries()) {
        if (mark.type !== 'point' || !(state === null || state === void 0 ? void 0 : state.channels))
            continue;
        const sizeChannel = (_a = state.channels) === null || _a === void 0 ? void 0 : _a.find((ch) => ch.name === 'size');
        if (!sizeChannel)
            continue;
        // Priority 1: Use scale range if available
        if (((_c = (_b = sizeChannel.scale) === null || _b === void 0 ? void 0 : _b.range) === null || _c === void 0 ? void 0 : _c.length) > 0) {
            const rangeMax = Math.max(...sizeChannel.scale.range.filter((val) => typeof val === 'number'));
            maxSize = Math.max(maxSize, rangeMax);
            continue;
        }
        // Priority 2: Fallback to values maximum
        if (((_d = sizeChannel.values) === null || _d === void 0 ? void 0 : _d.length) > 0) {
            const sizes = sizeChannel.values
                .filter((item) => item.value !== undefined)
                .flatMap((item) => Array.isArray(item.value) ? item.value : [item.value])
                .filter((value) => typeof value === 'number' && !isNaN(value));
            if (sizes.length > 0) {
                maxSize = Math.max(maxSize, ...sizes);
            }
        }
    }
    return maxSize;
}
/**
 * Emits filter events with proper X/Y domain mapping.
 *
 * @param emitter - Event emitter instance
 * @param eventName - Name of the event to emit
 * @param event - Event data object
 * @param domain0 - Primary domain values
 * @param channelDomain - Channel domain configuration
 * @param isX - Whether this is an X-axis event
 * @param nativeEvent - Whether this is a native DOM event
 */
function emitFilterEvent(emitter, eventName, event, domain0, channelDomain, isX, nativeEvent) {
    if (nativeEvent) {
        const X = isX ? domain0 : channelDomain.x;
        const Y = isX ? channelDomain.y : domain0;
        emitter.emit(eventName, Object.assign(Object.assign({}, event), { nativeEvent, data: { selection: [extentOf(X), extentOf(Y)] } }));
    }
}
/**
 * Updates slider state with appropriate filter function.
 * Handles both single-axis and multi-axis scenarios.
 *
 * @param setState - State setter function
 * @param slider - Slider component instance
 * @param params - Configuration parameters for state update
 */
function updateSliderState(setState, slider, view, params) {
    const { domain0, filteredDomain, channel0, channel1, prefix, hasState, isMultiAxis, markToScaleMap, enableAdaptiveFiltering, } = params;
    if (isMultiAxis && filteredDomain instanceof Map) {
        setState(slider, (options) => (Object.assign({}, filterDataByDomainMultiAxis(options, view, {
            [channel0]: { domain: domain0, nice: false },
        }, prefix, hasState, channel0, channel1, markToScaleMap || new Map(), filteredDomain))));
    }
    else {
        setState(slider, (options) => (Object.assign({}, filterDataByDomain(options, view, Object.assign({ [channel0]: { domain: domain0, nice: false } }, (enableAdaptiveFiltering && Array.isArray(filteredDomain)
            ? {
                [channel1]: {
                    domain: filteredDomain,
                    nice: true,
                },
            }
            : {})), prefix, hasState, channel0, channel1))));
    }
}
/**
 * Filters data by domain for single-axis scenarios.
 * Applies scale options and preserves slider state.
 *
 * @param options - Filter data options
 * @param scaleOptions - Scale configuration
 * @param prefix - Slider prefix identifier
 * @param hasState - Whether slider has state
 * @param channel0 - Primary channel (x or y)
 * @param channel1 - Secondary channel (y or x)
 * @returns Filtered options with updated marks
 */
function filterDataByDomain(options, view, scaleOptions, prefix, hasState = false, channel0 = 'x', channel1 = 'y') {
    const { marks } = options;
    const extraInset = calculatePointInset(view);
    const newMarks = marks.map((mark) => {
        var _a, _b;
        return (0, util_1.deepMix)({
            // Hide label to keep smooth transition.
            axis: {
                x: { transform: [{ type: 'hide' }] },
                y: { transform: [{ type: 'hide' }] },
            },
        }, mark, {
            scale: scaleOptions,
            [prefix]: Object.assign(Object.assign({}, (((_a = mark[prefix]) === null || _a === void 0 ? void 0 : _a[channel0]) && {
                [channel0]: Object.assign({ preserve: true }, (hasState && { ratio: null })),
            })), (((_b = mark[prefix]) === null || _b === void 0 ? void 0 : _b[channel1]) && {
                [channel1]: { preserve: true },
            })),
            animate: false,
        });
    });
    return Object.assign(Object.assign({}, options), { marks: newMarks, 
        // Add adaptive inset based on actual point sizes from markState
        insetLeft: extraInset, insetRight: extraInset, insetTop: extraInset, insetBottom: extraInset, clip: true, animate: false });
}
/**
 * Filters data by domain for multi-axis scenarios.
 * Handles independent scales and mark-specific filtering.
 *
 * @param options - Filter data options
 * @param scaleOptions - Scale configuration
 * @param prefix - Slider prefix identifier
 * @param hasState - Whether slider has state
 * @param channel0 - Primary channel (x or y)
 * @param channel1 - Secondary channel (y or x)
 * @param markToScaleMap - Mapping of marks to scale keys
 * @param filteredDomainList - Map of filtered domains by scale key
 * @returns Filtered options with updated marks
 */
function filterDataByDomainMultiAxis(options, view, scaleOptions, prefix, hasState = false, channel0 = 'x', channel1 = 'y', markToScaleMap = new Map(), filteredDomainList = new Map()) {
    const { marks } = options;
    const extraInset = calculatePointInset(view);
    const newMarks = marks.map((mark) => {
        var _a, _b;
        const markKey = typeof (mark === null || mark === void 0 ? void 0 : mark.key) === 'string' ? mark.key : String((mark === null || mark === void 0 ? void 0 : mark.key) || '');
        const markToScale = markToScaleMap.get(markKey);
        const filterDomain = filteredDomainList.get(markToScale);
        const scaleNew = filterDomain && {
            y: Object.assign({ domain: filterDomain, nice: true }, (markToScale !== 'y'
                ? {
                    independent: true,
                }
                : undefined)),
        };
        return (0, util_1.deepMix)({
            // Hide label to keep smooth transition.
            axis: {
                x: { transform: [{ type: 'hide' }] },
                y: { transform: [{ type: 'hide' }] },
            },
        }, mark, {
            scale: Object.assign(Object.assign({}, scaleOptions), scaleNew),
            [prefix]: Object.assign(Object.assign({}, (((_a = mark[prefix]) === null || _a === void 0 ? void 0 : _a[channel0]) && {
                [channel0]: Object.assign({ preserve: true }, (hasState && { ratio: null })),
            })), (((_b = mark[prefix]) === null || _b === void 0 ? void 0 : _b[channel1]) && {
                [channel1]: { preserve: true },
            })),
            animate: false,
        });
    });
    return Object.assign(Object.assign({}, options), { marks: newMarks, 
        // Add adaptive inset based on actual point sizes from markState
        insetLeft: extraInset, insetRight: extraInset, insetTop: extraInset, insetBottom: extraInset, clip: true, animate: false });
}
/**
 * Converts slider values to abstract domain values.
 *
 * @param values - Slider value range [start, end]
 * @param scale - Scale instance for conversion
 * @param reverse - Whether to reverse the mapping
 * @returns Abstract domain values
 */
function abstractValue(values, scale, reverse) {
    const [x, x1] = values;
    const v = reverse ? (d) => 1 - d : (d) => d;
    const d0 = (0, scale_1.invert)(scale, v(x), true);
    const d1 = (0, scale_1.invert)(scale, v(x1), false);
    return (0, scale_1.domainOf)(scale, [d0, d1]);
}
/**
 * Gets the extent (first and last) values from a domain array.
 *
 * @param domain - Domain array
 * @returns Array containing first and last domain values
 */
function extentOf(domain) {
    return [domain[0], domain[domain.length - 1]];
}
/**
 * @todo Support click to reset after fix click and dragend conflict.
 */
function SliderFilter({ initDomain = {}, className = exports.SLIDER_CLASS_NAME, prefix = 'slider', setValue = (component, values) => component.setValues(values), hasState = false, wait = 50, leading = true, trailing = false, adaptiveMode = 'filter', getInitValues = (slider) => {
    var _a;
    const values = (_a = slider === null || slider === void 0 ? void 0 : slider.attributes) === null || _a === void 0 ? void 0 : _a.values;
    if (values[0] !== 0 || values[1] !== 1)
        return values;
}, }) {
    return (context, _, emitter) => {
        const { container, view, update, setState } = context;
        const sliders = container.getElementsByClassName(className);
        if (!sliders.length)
            return () => { };
        let filtering = false;
        const { scale, coordinate } = view;
        const { x: scaleX, y: scaleY } = scale;
        const transposed = (0, coordinate_1.isTranspose)(coordinate);
        const channelOf = (orientation) => {
            const channel0 = orientation === 'vertical' ? 'y' : 'x';
            const channel1 = orientation === 'vertical' ? 'x' : 'y';
            if (transposed)
                return [channel1, channel0];
            return [channel0, channel1];
        };
        const sliderHandler = new Map();
        const emitHandlers = new Set();
        const independentScaleInfo = (0, utils_1.calculateAllIndependentScaleInfo)(view);
        const channelDomain = (0, utils_1.calculateMultiAxisChannelDomains)(view, initDomain, scaleX, scaleY, independentScaleInfo);
        const sliderArray = Array.from(sliders);
        const hasSliderOfType = (type) => sliderArray.some((slider) => {
            const { orientation } = slider.attributes;
            const [channel0] = channelOf(orientation);
            return channel0 === type;
        });
        const hasOnlyXSlider = hasSliderOfType('x') && !hasSliderOfType('y');
        const hasOnlyYSlider = hasSliderOfType('y') && !hasSliderOfType('x');
        const enableAdaptiveFiltering = !(0, utils_1.isFalsyValue)(adaptiveMode) && (hasOnlyXSlider || hasOnlyYSlider);
        for (const slider of sliders) {
            const { orientation } = slider.attributes;
            const [channel0, channel1] = channelOf(orientation);
            const eventName = `${prefix}${(0, util_1.upperFirst)(channel0)}:filter`;
            const isX = channel0 === 'x';
            const { ratio: ratioX } = scaleX.getOptions();
            const { ratio: ratioY } = scaleY.getOptions();
            const domainsOf = (event) => {
                if (event.data) {
                    const { selection } = event.data;
                    const [X = extentOf(channelDomain.x), Y = extentOf(channelDomain.y)] = selection;
                    return isX
                        ? [(0, scale_1.domainOf)(scaleX, X, ratioX), (0, scale_1.domainOf)(scaleY, Y, ratioY)]
                        : [(0, scale_1.domainOf)(scaleY, Y, ratioY), (0, scale_1.domainOf)(scaleX, X, ratioX)];
                }
                const { value: values } = event.detail;
                const scale0 = scale[channel0];
                const domain0 = abstractValue(values, scale0, transposed && orientation === 'horizontal');
                const domain1 = channelDomain[channel1];
                return [domain0, domain1];
            };
            // Create value change handler with independent filtering state
            // Each slider maintains its own filtering state to prevent mutual interference in dual-axis scenarios
            let isFiltering = false;
            const setFiltering = (value) => {
                isFiltering = value;
                // Only reset global state when all sliders are not filtering
                if (!value) {
                    filtering = false;
                }
            };
            const onValueChange = createValueChangeHandler({
                getFiltering: () => isFiltering,
                setFiltering,
                domainsOf,
                view,
                independentScaleInfo,
                enableAdaptiveFiltering,
                hasOnlyXSlider,
                hasOnlyYSlider,
                adaptiveMode,
                scaleX,
                scaleY,
                scale,
                channelDomain,
                channel0,
                channel1,
                isX,
                emitter,
                eventName,
                setState,
                slider,
                prefix,
                hasState,
                update,
                wait,
                leading,
                trailing,
            });
            const emitHandler = (event) => {
                const { nativeEvent } = event;
                if (nativeEvent)
                    return;
                const { data } = event;
                const { selection } = data;
                const [X, Y] = selection;
                slider.dispatchEvent(new g_1.CustomEvent('valuechange', {
                    data,
                    nativeEvent: false,
                }));
                const V = isX
                    ? (0, scale_1.sliderAbstractOf)(X, scaleX)
                    : (0, scale_1.sliderAbstractOf)(Y, scaleY);
                setValue(slider, V);
            };
            emitter.on(eventName, emitHandler);
            slider.addEventListener('valuechange', onValueChange);
            sliderHandler.set(slider, onValueChange);
            emitHandlers.add([eventName, emitHandler]);
            const values = getInitValues(slider);
            if (values) {
                slider.dispatchEvent(new g_1.CustomEvent('valuechange', {
                    detail: {
                        value: values,
                    },
                    nativeEvent: false,
                    initValue: true,
                }));
            }
        }
        return () => {
            for (const [slider, handler] of sliderHandler) {
                slider.removeEventListener('valuechange', handler);
            }
            for (const [name, handler] of emitHandlers) {
                emitter.off(name, handler);
            }
        };
    };
}
/**
 * Processes multi-axis filtering for view-level sliders.
 * Handles both view-level and mark-level slider configurations.
 *
 * @param params - Multi-axis filtering parameters
 * @returns Filtered domain mapping
 */
function processMultiAxisFiltering({ view, domain0, shouldFilterXAxis, enableAdaptiveFiltering, markDataPairs, adaptiveMode, scaleX, scaleY, scale, channelDomain, independentScaleInfo, channel0, }) {
    const filteredDomain = new Map();
    const markToScaleMap = new Map();
    if (!enableAdaptiveFiltering ||
        markDataPairs.length === 0 ||
        !(domain0 === null || domain0 === void 0 ? void 0 : domain0.length)) {
        return { filteredDomain, markToScaleMap };
    }
    const viewSlider = (0, util_1.get)(view, 'options.slider');
    const isViewSlider = Object.keys(viewSlider).length > 0 &&
        Object.prototype.hasOwnProperty.call(viewSlider, channel0);
    if (isViewSlider) {
        // Handle view-level slider
        const multiAxisScaleInfo = (0, adaptiveFilter_1.extractMultiAxisScaleInfo)(shouldFilterXAxis, scale, scaleX, scaleY, channelDomain);
        const scaleMapToUse = shouldFilterXAxis
            ? independentScaleInfo.markToXScaleMap
            : independentScaleInfo.markToYScaleMap;
        scaleMapToUse.forEach((scaleKey, markKey) => {
            markToScaleMap.set(markKey, scaleKey);
        });
        const processedFilteredDomain = (0, adaptiveFilter_1.processMultiAxisViewFiltering)({
            markDataPairs,
            domain: domain0,
            scaleInfo: multiAxisScaleInfo,
            markToScaleMap,
            adaptiveMode,
            isViewSlider: true,
            shouldFilterXAxis,
        });
        (0, adaptiveFilter_1.updateChannelDomains)(channelDomain, processedFilteredDomain, shouldFilterXAxis, true);
        return { filteredDomain: processedFilteredDomain, markToScaleMap };
    }
    else {
        // Handle mark-level slider
        const targetMarkKey = findTargetMarkKey(view, channel0);
        if (targetMarkKey) {
            const singleAxisScaleInfo = (0, adaptiveFilter_1.extractSingleAxisScaleInfo)(shouldFilterXAxis, scaleX, scaleY);
            const scaleMapping = shouldFilterXAxis
                ? independentScaleInfo.markToXScaleMap
                : independentScaleInfo.markToYScaleMap;
            const targetScaleKey = scaleMapping.get(targetMarkKey) || '';
            if (targetScaleKey) {
                markToScaleMap.set(targetMarkKey, targetScaleKey);
                const processedFilteredDomain = (0, adaptiveFilter_1.processMultiAxisMarkFiltering)(markDataPairs, domain0, singleAxisScaleInfo, targetMarkKey, targetScaleKey, adaptiveMode, shouldFilterXAxis, scaleMapping);
                return { filteredDomain: processedFilteredDomain, markToScaleMap };
            }
        }
    }
    return { filteredDomain, markToScaleMap };
}
/**
 * Finds the target mark key for mark-level sliders.
 *
 * @param view - View instance
 * @param channel0 - Channel identifier
 * @returns Target mark key or null if not found
 */
function findTargetMarkKey(view, channel0) {
    for (const [mark] of view.markState.entries()) {
        const markSlider = (0, util_1.get)(mark, 'slider');
        const hasMarkSlider = Object.keys(markSlider || {}).length > 0 &&
            Object.prototype.hasOwnProperty.call(markSlider, channel0);
        if (hasMarkSlider) {
            return String(mark.key || '');
        }
    }
    return null;
}
/**
 * Processes single-axis filtering for scenarios without independent scales.
 *
 * @param params - Single-axis filtering parameters
 * @returns Filtered domain array
 */
function processSingleAxisFilteringWithDomainUpdate({ domain0, domain1, shouldFilterXAxis, enableAdaptiveFiltering, markDataPairs, adaptiveMode, scaleX, scaleY, channelDomain, hasOnlyXSlider, hasOnlyYSlider, isX, }) {
    let filteredDomain = domain1;
    if (enableAdaptiveFiltering &&
        markDataPairs.length > 0 &&
        ((hasOnlyXSlider && isX) || (hasOnlyYSlider && !isX)) &&
        (domain0 === null || domain0 === void 0 ? void 0 : domain0.length) > 0) {
        const singleAxisScaleInfo = (0, adaptiveFilter_1.extractSingleAxisScaleInfo)(shouldFilterXAxis, scaleX, scaleY);
        filteredDomain = (0, adaptiveFilter_1.processSingleAxisFiltering)({
            markDataPairs,
            domain: domain0,
            scaleInfo: singleAxisScaleInfo,
            adaptiveMode,
            shouldFilterXAxis,
        });
        // Update channelDomain if filtering was applied
        (0, adaptiveFilter_1.updateChannelDomains)(channelDomain, filteredDomain, shouldFilterXAxis, false);
    }
    return filteredDomain;
}
/**
 * Creates the main value change handler for slider filtering.
 *
 * @param params - Handler creation parameters
 * @returns Throttled value change handler
 */
function createValueChangeHandler({ getFiltering, setFiltering, domainsOf, view, independentScaleInfo, enableAdaptiveFiltering, hasOnlyXSlider, hasOnlyYSlider, adaptiveMode, scaleX, scaleY, scale, channelDomain, channel0, channel1, isX, emitter, eventName, setState, slider, prefix, hasState, update, wait, leading, trailing, }) {
    return (0, util_1.throttle)((event) => __awaiter(this, void 0, void 0, function* () {
        const { initValue = false } = event;
        if (getFiltering() && !initValue) {
            return;
        }
        setFiltering(true);
        const { nativeEvent = true } = event;
        const { markDataPairs } = (0, utils_1.extractChannelValues)(view);
        const hasIndependentScale = independentScaleInfo[`hasIndependent${channel1.toUpperCase()}`];
        if (hasIndependentScale) {
            // Handle multi-axis scenario
            const [domain0] = domainsOf(event);
            const shouldFilterXAxis = hasOnlyYSlider && !isX;
            const { filteredDomain, markToScaleMap } = processMultiAxisFiltering({
                view,
                domain0,
                shouldFilterXAxis,
                enableAdaptiveFiltering: enableAdaptiveFiltering &&
                    ((hasOnlyXSlider && isX) || (hasOnlyYSlider && !isX)),
                markDataPairs,
                adaptiveMode,
                scaleX,
                scaleY,
                scale,
                channelDomain,
                independentScaleInfo,
                channel0,
            });
            // Update channelDomain to reflect the current filter state
            channelDomain[channel0] = domain0;
            emitFilterEvent(emitter, eventName, event, domain0, channelDomain, isX, nativeEvent);
            updateSliderState(setState, slider, view, {
                domain0,
                filteredDomain,
                channel0,
                channel1,
                prefix,
                hasState,
                isMultiAxis: true,
                markToScaleMap,
                enableAdaptiveFiltering,
            });
        }
        else {
            // Handle single-axis scenario
            const [domain0, domain1] = domainsOf(event);
            const shouldFilterXAxis = hasOnlyYSlider && !isX;
            const filteredDomain = processSingleAxisFilteringWithDomainUpdate({
                domain0,
                domain1,
                shouldFilterXAxis,
                enableAdaptiveFiltering,
                markDataPairs,
                adaptiveMode,
                scaleX,
                scaleY,
                channelDomain,
                hasOnlyXSlider,
                hasOnlyYSlider,
                isX,
            });
            // Update channelDomain to reflect the current filter state
            channelDomain[channel0] = domain0;
            emitFilterEvent(emitter, eventName, event, domain0, channelDomain, isX, nativeEvent);
            updateSliderState(setState, slider, view, {
                domain0,
                filteredDomain,
                channel0,
                channel1,
                prefix,
                hasState,
                isMultiAxis: false,
                markToScaleMap: undefined,
                enableAdaptiveFiltering,
            });
        }
        yield update();
        setFiltering(false);
    }), wait, { leading, trailing });
}
//# sourceMappingURL=sliderFilter.js.map