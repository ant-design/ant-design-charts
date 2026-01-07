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
exports.initializeMark = initializeMark;
exports.createColumnOf = createColumnOf;
const d3_array_1 = require("@antv/vendor/d3-array");
const helper_1 = require("../utils/helper");
const library_1 = require("./library");
const transform_1 = require("./transform");
function initializeMark(partialMark, partialProps, context) {
    return __awaiter(this, void 0, void 0, function* () {
        // Apply transform to mark to derive indices, data, encode, etc,.
        const [I, transformedMark] = yield applyMarkTransform(partialMark, partialProps, context);
        const { encode, scale, data, tooltip, key: markKey } = transformedMark;
        // Skip mark with non-tabular data. Do not skip empty
        // data, they are useful for facet to display axes.
        if (Array.isArray(data) === false) {
            return null;
        }
        // Group non-independent channels with same prefix, such as x1, x2 => x.
        // For independent channels, dot not group them, such as position1, position2.
        const { channels: channelDescriptors } = partialProps;
        const nameChannels = (0, d3_array_1.rollups)(Object.entries(encode).filter(([, value]) => (0, helper_1.defined)(value)), (values) => values.map(([key, options]) => (Object.assign({ name: key }, options))), ([key]) => {
            var _a;
            const prefix = (_a = /([^\d]+)\d*$/.exec(key)) === null || _a === void 0 ? void 0 : _a[1];
            const descriptor = channelDescriptors.find((d) => d.name === prefix);
            if (descriptor === null || descriptor === void 0 ? void 0 : descriptor.independent)
                return key;
            return prefix;
        });
        // Check required channels and initialize scale options for each channel.
        const channels = channelDescriptors
            .filter((descriptor) => {
            const { name, required } = descriptor;
            if (nameChannels.find(([d]) => d === name))
                return true;
            if (required)
                throw new Error(`Missing encoding for channel: ${name}.`);
            return false;
        })
            .flatMap((descriptor) => {
            const { name, scale: scaleType, scaleKey, range, quantitative, ordinal, } = descriptor;
            const valuesArray = nameChannels.filter(([channel]) => channel.startsWith(name));
            return valuesArray.map(([channel, values], i) => {
                const visual = values.some((d) => d.visual);
                const constant = values.some((d) => d.constant);
                const _a = scale[channel] || {}, { independent = false, 
                // Use channel name as default scale key.
                key = scaleKey || channel, 
                // Visual channel use identity scale.
                type = constant ? 'constant' : visual ? 'identity' : scaleType } = _a, scaleOptions = __rest(_a, ["independent", "key", "type"]);
                // For constant scale, infer range from data.
                const isConstant = type === 'constant';
                const finalRange = isConstant ? undefined : range;
                return {
                    name: channel,
                    values,
                    // Generate a unique key for independent channel,
                    // which will not group with any other channels.
                    scaleKey: independent || isConstant ? Symbol('independent') : key,
                    scale: Object.assign(Object.assign({ type,
                        markKey, range: finalRange }, scaleOptions), { quantitative,
                        ordinal }),
                };
            });
        });
        return [transformedMark, Object.assign(Object.assign({}, partialProps), { index: I, channels, tooltip })];
    });
}
function createColumnOf(library) {
    const [useEncode] = (0, library_1.useLibrary)('encode', library);
    return (data, encode) => {
        if (encode === undefined)
            return null;
        if (data === undefined)
            return null;
        return Object.assign(Object.assign({}, encode), { type: 'column', value: useEncode(encode)(data), field: fieldOf(encode) });
    };
}
function applyMarkTransform(mark, props, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { library } = context;
        const [useTransform] = (0, library_1.useLibrary)('transform', library);
        const { preInference = [], postInference = [] } = props;
        const { transform = [] } = mark;
        const transforms = [
            transform_1.applyDefaults,
            transform_1.applyDataTransform,
            transform_1.flatEncode,
            transform_1.inferChannelsType,
            transform_1.maybeVisualChannel,
            transform_1.extractColumns,
            transform_1.maybeArrayField,
            transform_1.maybeNonAnimate,
            transform_1.addGuideToScale,
            transform_1.normalizeTooltip,
            transform_1.appendMarkScaleKey,
            ...preInference.map(useTransform),
            ...transform.map(useTransform),
            ...postInference.map(useTransform),
            transform_1.extractTooltip,
        ];
        let index = [];
        let transformedMark = mark;
        for (const t of transforms) {
            [index, transformedMark] = yield t(index, transformedMark, context);
        }
        return [index, transformedMark];
    });
}
function fieldOf(encode) {
    const { type, value } = encode;
    if (type === 'field' && typeof value === 'string')
        return value;
    return null;
}
//# sourceMappingURL=mark.js.map