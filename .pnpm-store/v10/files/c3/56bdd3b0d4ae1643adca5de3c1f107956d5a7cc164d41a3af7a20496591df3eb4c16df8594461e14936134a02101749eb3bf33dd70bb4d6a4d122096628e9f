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
exports.CALLBACK_ITEM_SYMBOL = void 0;
exports.applyDefaults = applyDefaults;
exports.applyDataTransform = applyDataTransform;
exports.flatEncode = flatEncode;
exports.inferChannelsType = inferChannelsType;
exports.maybeVisualChannel = maybeVisualChannel;
exports.extractColumns = extractColumns;
exports.normalizeTooltip = normalizeTooltip;
exports.extractTooltip = extractTooltip;
exports.maybeArrayField = maybeArrayField;
exports.addGuideToScale = addGuideToScale;
exports.maybeNonAnimate = maybeNonAnimate;
exports.appendMarkScaleKey = appendMarkScaleKey;
const util_1 = require("@antv/util");
const d3_format_1 = require("@antv/vendor/d3-format");
const array_1 = require("../utils/array");
const helper_1 = require("../utils/helper");
const mark_1 = require("../utils/mark");
const library_1 = require("./library");
const mark_2 = require("./mark");
const scale_1 = require("./scale");
exports.CALLBACK_ITEM_SYMBOL = Symbol('CALLBACK_ITEM');
// @todo Add more defaults.
function applyDefaults(I, mark, context) {
    const { encode = {}, scale = {}, transform = [] } = mark, rest = __rest(mark, ["encode", "scale", "transform"]);
    return [I, Object.assign(Object.assign({}, rest), { encode, scale, transform })];
}
function applyDataTransform(I, mark, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { library } = context;
        const { data } = mark;
        const [useData] = (0, library_1.useLibrary)('data', library);
        const descriptor = normalizedDataSource(data);
        const { transform: T = [] } = descriptor, connector = __rest(descriptor, ["transform"]);
        const transform = [connector, ...T];
        const transformFunctions = transform.map((t) => useData(t, context));
        const transformedData = yield (0, helper_1.composeAsync)(transformFunctions)(data);
        // Maintain the consistency of shape between input and output data.
        // If the shape of raw data is like { value: any }
        // and the returned transformedData is Object,
        // returns the wrapped data: { value: transformedData },
        // otherwise returns the processed tabular data.
        const newData = data && !Array.isArray(data) && !Array.isArray(transformedData)
            ? { value: transformedData }
            : transformedData;
        return [
            Array.isArray(transformedData) ? (0, array_1.indexOf)(transformedData) : [],
            Object.assign(Object.assign({}, mark), { data: newData }),
        ];
    });
}
function flatEncode(I, mark, context) {
    const { encode } = mark;
    if (!encode)
        return [I, mark];
    const flattenEncode = {};
    for (const [key, value] of Object.entries(encode)) {
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                const name = `${key}${i === 0 ? '' : i}`;
                flattenEncode[name] = value[i];
            }
        }
        else {
            flattenEncode[key] = value;
        }
    }
    return [I, Object.assign(Object.assign({}, mark), { encode: flattenEncode })];
}
function inferChannelsType(I, mark, context) {
    const { encode, data } = mark;
    if (!encode)
        return [I, mark];
    const typedEncode = (0, array_1.mapObject)(encode, (channel) => {
        if (isTypedChannel(channel))
            return channel;
        const type = inferChannelType(data, channel);
        return { type, value: channel };
    });
    return [I, Object.assign(Object.assign({}, mark), { encode: typedEncode })];
}
function maybeVisualChannel(I, mark, context) {
    const { encode } = mark;
    if (!encode)
        return [I, mark];
    const newEncode = (0, array_1.mapObject)(encode, (channel, name) => {
        const { type } = channel;
        if (type !== 'constant' || (0, scale_1.isPosition)(name))
            return channel;
        return Object.assign(Object.assign({}, channel), { constant: true });
    });
    return [I, Object.assign(Object.assign({}, mark), { encode: newEncode })];
}
function extractColumns(I, mark, context) {
    const { encode, data } = mark;
    if (!encode)
        return [I, mark];
    const { library } = context;
    const columnOf = (0, mark_2.createColumnOf)(library);
    const valuedEncode = (0, array_1.mapObject)(encode, (channel) => columnOf(data, channel));
    return [I, Object.assign(Object.assign({}, mark), { encode: valuedEncode })];
}
/**
 * Normalize mark.tooltip to {title, items}.
 */
function normalizeTooltip(I, mark, context) {
    const { tooltip = {} } = mark;
    if ((0, helper_1.isUnset)(tooltip))
        return [I, mark];
    if (Array.isArray(tooltip)) {
        return [I, Object.assign(Object.assign({}, mark), { tooltip: { items: tooltip } })];
    }
    if ((0, helper_1.isStrictObject)(tooltip) && (0, mark_1.isFullTooltip)(tooltip)) {
        return [I, Object.assign(Object.assign({}, mark), { tooltip })];
    }
    return [I, Object.assign(Object.assign({}, mark), { tooltip: { items: [tooltip] } })];
}
function extractTooltip(I, mark, context) {
    const { data, encode, tooltip = {} } = mark;
    if ((0, helper_1.isUnset)(tooltip))
        return [I, mark];
    const valueOf = (item) => {
        if (!item)
            return item;
        if (typeof item === 'string') {
            return I.map((i) => ({ name: item, value: data[i][item] }));
        }
        if ((0, helper_1.isStrictObject)(item)) {
            const { field, channel, color, name = field, valueFormatter = (d) => d, } = item;
            // Support d3-format.
            const normalizedValueFormatter = typeof valueFormatter === 'string'
                ? (0, d3_format_1.format)(valueFormatter)
                : valueFormatter;
            // Field name.
            const definedChannel = channel && encode[channel];
            const channelField = definedChannel && encode[channel].field;
            const name1 = name || channelField || channel;
            const values = [];
            for (const i of I) {
                const value1 = field
                    ? data[i][field]
                    : definedChannel
                        ? encode[channel].value[i]
                        : null;
                values[i] = {
                    name: name1,
                    color,
                    value: normalizedValueFormatter(value1),
                };
            }
            return values;
        }
        if (typeof item === 'function') {
            const values = [];
            for (const i of I) {
                const v = item(data[i], i, data, encode);
                if ((0, helper_1.isStrictObject)(v))
                    values[i] = Object.assign(Object.assign({}, v), { [exports.CALLBACK_ITEM_SYMBOL]: true });
                else
                    values[i] = { value: v };
            }
            return values;
        }
        return item;
    };
    const { title, items = [] } = tooltip, rest = __rest(tooltip, ["title", "items"]);
    const newTooltip = Object.assign({ title: valueOf(title), items: Array.isArray(items) ? items.map(valueOf) : [] }, rest);
    return [I, Object.assign(Object.assign({}, mark), { tooltip: newTooltip })];
}
function maybeArrayField(I, mark, context) {
    const { encode } = mark, rest = __rest(mark, ["encode"]);
    if (!encode)
        return [I, mark];
    const columns = Object.entries(encode);
    const arrayColumns = columns
        .filter(([, channel]) => {
        const { value: V } = channel;
        return Array.isArray(V[0]);
    })
        .flatMap(([key, V]) => {
        const columns = [[key, new Array(I.length).fill(undefined)]];
        const { value: rows } = V, rest = __rest(V, ["value"]);
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (Array.isArray(row)) {
                for (let j = 0; j < row.length; j++) {
                    const column = columns[j] || [
                        `${key}${j}`,
                        new Array(I).fill(undefined),
                    ];
                    column[1][i] = row[j];
                    columns[j] = column;
                }
            }
        }
        return columns.map(([key, value]) => [
            key,
            Object.assign({ type: 'column', value }, rest),
        ]);
    });
    const newEncode = Object.fromEntries([...columns, ...arrayColumns]);
    return [I, Object.assign(Object.assign({}, rest), { encode: newEncode })];
}
function addGuideToScale(I, mark, context) {
    const { axis = {}, legend = {}, slider = {}, scrollbar = {} } = mark;
    const normalize = (guide, channel) => {
        if (typeof guide === 'boolean')
            return guide ? {} : null;
        const eachGuide = guide[channel];
        return eachGuide === undefined || eachGuide ? eachGuide : null;
    };
    const axisChannels = typeof axis === 'object'
        ? Array.from(new Set(['x', 'y', 'z', ...Object.keys(axis)]))
        : ['x', 'y', 'z'];
    (0, util_1.deepMix)(mark, {
        scale: Object.assign(Object.assign({}, Object.fromEntries(axisChannels.map((channel) => {
            const scrollbarOptions = normalize(scrollbar, channel);
            return [
                channel,
                Object.assign({ guide: normalize(axis, channel), slider: normalize(slider, channel), scrollbar: scrollbarOptions }, (scrollbarOptions && {
                    ratio: scrollbarOptions.ratio === undefined
                        ? 0.5
                        : scrollbarOptions.ratio,
                })),
            ];
        }))), { color: { guide: normalize(legend, 'color') }, size: { guide: normalize(legend, 'size') }, shape: { guide: normalize(legend, 'shape') }, 
            // fixme: opacity is conflict with DisplayObject.opacity
            // to be confirm.
            opacity: { guide: normalize(legend, 'opacity') } }),
    });
    return [I, mark];
}
function maybeNonAnimate(I, mark, context) {
    const { animate } = mark;
    if (animate || animate === undefined)
        return [I, mark];
    (0, util_1.deepMix)(mark, {
        animate: {
            enter: { type: null },
            exit: { type: null },
            update: { type: null },
        },
    });
    return [I, mark];
}
function appendMarkScaleKey(I, mark, context) {
    var _a, _b;
    (0, util_1.deepMix)(mark, {
        scale: {
            series: Object.assign({ key: `DEFAULT_${mark.type}_SERIES_KEY` }, ((_b = (_a = mark === null || mark === void 0 ? void 0 : mark.scale) === null || _a === void 0 ? void 0 : _a.series) !== null && _b !== void 0 ? _b : {})),
        },
    });
    return [I, mark];
}
function isTypedChannel(channel) {
    if (typeof channel !== 'object' ||
        channel instanceof Date ||
        channel === null) {
        return false;
    }
    const { type } = channel;
    return (0, helper_1.defined)(type);
}
function inferChannelType(data, channel) {
    if (typeof channel === 'function')
        return 'transform';
    if (typeof channel === 'string' && isField(data, channel))
        return 'field';
    return 'constant';
}
function isField(data, value) {
    if (!Array.isArray(data))
        return false;
    return data.some((d) => d[value] !== undefined);
}
function normalizedDataSource(data) {
    // Liquid、Gauge need number data.
    if ((0, util_1.isNumber)(data))
        return { type: 'inline', value: data };
    // Return null as a placeholder.
    if (!data)
        return { type: 'inline', value: null };
    if (Array.isArray(data))
        return { type: 'inline', value: data };
    const { type = 'inline' } = data, rest = __rest(data, ["type"]);
    return Object.assign(Object.assign({}, rest), { type });
}
//# sourceMappingURL=transform.js.map