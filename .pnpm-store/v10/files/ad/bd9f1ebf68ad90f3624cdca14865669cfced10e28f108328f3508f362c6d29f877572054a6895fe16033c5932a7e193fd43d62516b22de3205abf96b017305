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
exports.deepAssign = exports.isUnset = exports.isStrictObject = exports.maybePercentage = exports.omitPrefixObject = exports.filterPrefixObject = exports.prefixObject = exports.maybeSubObject = exports.subObject = exports.appendTransform = exports.useMemo = exports.random = exports.defined = exports.copyAttributes = exports.error = exports.capitalizeFirst = exports.composeAsync = exports.compose = exports.identity = exports.groupNameOf = exports.seriesOf = exports.dataOf = exports.isHeatmap = exports.getViewFromElement = void 0;
const util_1 = require("@antv/util");
const scale_1 = require("@antv/scale");
/**
 * @description Get element's ancestor view node.
 * @param elemenet G2 element.
 * @returns Element's ancestor view node.
 */
function getViewFromElement(element) {
    var _a;
    let current = element;
    while (current) {
        if (((_a = current.attributes) === null || _a === void 0 ? void 0 : _a.class) === 'view')
            return current;
        current = current.parentNode;
    }
    return null;
}
exports.getViewFromElement = getViewFromElement;
/**
 * @description Check if the element is a heatmap.
 * @param element G2 element.
 * @returns True if the element is a heatmap, otherwise false.
 */
function isHeatmap(element) {
    const { markType, nodeName } = element;
    return markType === 'heatmap' && nodeName === 'image';
}
exports.isHeatmap = isHeatmap;
/**
 * @description Get element's original data.
 * @param elemenet G2 element.
 * @param elemenet View data, if not provided, will get from element's ancestor view.
 * @returns The original data of the element.
 */
function dataOf(element, viewData) {
    const view = viewData !== null && viewData !== void 0 ? viewData : getViewFromElement(element).__data__;
    const datum = element.__data__;
    const { markKey, index, seriesIndex, normalized = { x: 0 } } = datum;
    const { markState } = view;
    const selectedMark = Array.from(markState.keys()).find((mark) => mark.key === markKey);
    if (!selectedMark)
        return;
    if (seriesIndex) {
        return seriesIndex.map((i) => selectedMark.data[i]);
    }
    return isHeatmap(element)
        ? selectedMark.data[Math.round(selectedMark.data.length * normalized.x)]
        : selectedMark.data[index];
}
exports.dataOf = dataOf;
/**
 * @description Get element's series name.
 * @param elemenet G2 element.
 * @returns The series name of the element.
 */
function seriesOf(elemenet) {
    const viewData = getViewFromElement(elemenet).__data__;
    const { scale } = viewData;
    return groupNameOf(scale, elemenet.__data__);
}
exports.seriesOf = seriesOf;
/**
 * Get series scale by markerKey
 */
function getSeriesByMarkerKey(scale, datum) {
    var _a, _b, _c, _d;
    // For path mark, markerKey is in datum.element?.__data__?.markKey.
    const markerKey = (_a = datum.markKey) !== null && _a !== void 0 ? _a : (_c = (_b = datum.element) === null || _b === void 0 ? void 0 : _b.__data__) === null || _c === void 0 ? void 0 : _c.markKey;
    const seriesKey = Object.keys(scale).find((channel) => {
        if (channel.startsWith('series')) {
            const options = scale[channel].getOptions();
            return options.name === 'series' && options.markerKey === markerKey;
        }
    });
    return (_d = scale[seriesKey]) !== null && _d !== void 0 ? _d : scale.series;
}
/**
 * Get group name with view's scale and element's datum.
 */
function groupNameOf(scale, datum) {
    const { color: scaleColor, facet = false } = scale;
    const { color, series } = datum;
    const scaleSeries = getSeriesByMarkerKey(scale, datum);
    const invertAble = (scale) => {
        return (scale &&
            scale.invert &&
            !(scale instanceof scale_1.Band) &&
            !(scale instanceof scale_1.Constant));
    };
    // For non constant color channel.
    if (invertAble(scaleSeries)) {
        const cloned = scaleSeries.clone();
        return cloned.invert(series);
    }
    if (series &&
        scaleSeries instanceof scale_1.Band &&
        scaleSeries.invert(series) !== color &&
        !facet) {
        return scaleSeries.invert(series);
    }
    if (invertAble(scaleColor)) {
        const name = scaleColor.invert(color);
        // For threshold scale.
        if (Array.isArray(name))
            return null;
        return name;
    }
    return null;
}
exports.groupNameOf = groupNameOf;
function identity(x) {
    return x;
}
exports.identity = identity;
/**
 * Composes functions from left to right.
 */
function compose(fns) {
    return fns.reduce((composed, fn) => (x, ...args) => fn(composed(x, ...args), ...args), identity);
}
exports.compose = compose;
/**
 * Composes single-argument async functions from left to right.
 */
function composeAsync(fns) {
    return fns.reduce((composed, fn) => (x) => __awaiter(this, void 0, void 0, function* () {
        const value = yield composed(x);
        return fn(value);
    }), identity);
}
exports.composeAsync = composeAsync;
function capitalizeFirst(str) {
    return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
exports.capitalizeFirst = capitalizeFirst;
function error(message = '') {
    throw new Error(message);
}
exports.error = error;
function copyAttributes(target, source) {
    const { attributes } = source;
    const exclude = new Set(['id', 'className']);
    for (const [key, value] of Object.entries(attributes)) {
        if (!exclude.has(key)) {
            target.attr(key, value);
        }
    }
}
exports.copyAttributes = copyAttributes;
function defined(x) {
    return x !== undefined && x !== null && !Number.isNaN(x);
}
exports.defined = defined;
function random(a, b) {
    return a + (b - a) * Math.random();
}
exports.random = random;
function useMemo(compute) {
    const map = new Map();
    return (key) => {
        if (map.has(key))
            return map.get(key);
        const value = compute(key);
        map.set(key, value);
        return value;
    };
}
exports.useMemo = useMemo;
function appendTransform(node, transform) {
    const { transform: preTransform } = node.style;
    const unset = (d) => d === 'none' || d === undefined;
    const prefix = unset(preTransform) ? '' : preTransform;
    node.style.transform = `${prefix} ${transform}`.trimStart();
}
exports.appendTransform = appendTransform;
function subObject(obj, prefix) {
    return maybeSubObject(obj, prefix) || {};
}
exports.subObject = subObject;
function maybeSubObject(obj, prefix) {
    const entries = Object.entries(obj || {})
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value]) => [(0, util_1.lowerFirst)(key.replace(prefix, '').trim()), value])
        .filter(([key]) => !!key);
    return entries.length === 0 ? null : Object.fromEntries(entries);
}
exports.maybeSubObject = maybeSubObject;
function prefixObject(obj, prefix) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        return [`${prefix}${(0, util_1.upperFirst)(key)}`, value];
    }));
}
exports.prefixObject = prefixObject;
function filterPrefixObject(obj, prefix) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => prefix.find((p) => key.startsWith(p))));
}
exports.filterPrefixObject = filterPrefixObject;
function omitPrefixObject(obj, ...prefixes) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => prefixes.every((prefix) => !key.startsWith(prefix))));
}
exports.omitPrefixObject = omitPrefixObject;
function maybePercentage(x, size) {
    if (x === undefined)
        return null;
    if (typeof x === 'number')
        return x;
    const px = +x.replace('%', '');
    return Number.isNaN(px) ? null : (px / 100) * size;
}
exports.maybePercentage = maybePercentage;
function isStrictObject(d) {
    return (typeof d === 'object' &&
        !(d instanceof Date) &&
        d !== null &&
        !Array.isArray(d));
}
exports.isStrictObject = isStrictObject;
function isUnset(value) {
    return value === null || value === false;
}
exports.isUnset = isUnset;
function deepAssign(dist, src, maxLevel = 5, level = 0) {
    if (level >= maxLevel)
        return;
    for (const key of Object.keys(src)) {
        const value = src[key];
        if (!(0, util_1.isPlainObject)(value) || !(0, util_1.isPlainObject)(dist[key])) {
            dist[key] = value;
        }
        else {
            deepAssign(dist[key], value, maxLevel, level + 1);
        }
    }
    return dist;
}
exports.deepAssign = deepAssign;
//# sourceMappingURL=helper.js.map