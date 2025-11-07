"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidScale = exports.isPosition = exports.syncFacetsScales = exports.useRelationScale = exports.assignScale = exports.useRelation = exports.collectScales = exports.groupTransform = exports.applyScale = exports.inferScale = void 0;
const scale_1 = require("@antv/scale");
const d3_array_1 = require("@antv/vendor/d3-array");
const d3ScaleChromatic = __importStar(require("@antv/vendor/d3-scale-chromatic"));
const util_1 = require("@antv/util");
const array_1 = require("../utils/array");
const helper_1 = require("../utils/helper");
const coordinate_1 = require("./coordinate");
const library_1 = require("./library");
function inferScale(name, values, options, coordinates, theme, library) {
    const { guide = {} } = options;
    const type = inferScaleType(name, values, options);
    if (typeof type !== 'string')
        return options;
    const expectedDomain = inferScaleDomain(type, name, values, options);
    const actualDomain = maybeRatio(type, expectedDomain, options);
    return Object.assign(Object.assign(Object.assign({}, options), inferScaleOptions(type, name, values, options, coordinates)), { domain: actualDomain, range: inferScaleRange(type, name, values, options, actualDomain, theme, library), expectedDomain,
        guide,
        name,
        type });
}
exports.inferScale = inferScale;
function applyScale(channels, scale) {
    const scaledValue = {};
    for (const channel of channels) {
        const { values, name: scaleName } = channel;
        const scaleInstance = scale[scaleName];
        for (const value of values) {
            const { name, value: V } = value;
            scaledValue[name] = V.map((d) => scaleInstance.map(d));
        }
    }
    return scaledValue;
}
exports.applyScale = applyScale;
function groupTransform(markState, uidScale) {
    const channels = Array.from(markState.values()).flatMap((d) => d.channels);
    const scaleGroups = (0, d3_array_1.rollups)(channels, (channels) => channels.map((d) => uidScale.get(d.scale.uid)), (d) => d.name)
        .filter(([, scales]) => scales.some((d) => typeof d.getOptions().groupTransform === 'function') && // only sync scales with groupTransform options
        scales.every((d) => d.getTicks))
        .map((d) => d[1]);
    scaleGroups.forEach((group) => {
        const groupTransform = group.map((d) => d.getOptions().groupTransform)[0];
        groupTransform(group);
    });
}
exports.groupTransform = groupTransform;
function collectScales(states, options) {
    var _a;
    const { components = [] } = options;
    const NONE_STATIC_KEYS = [
        'scale',
        'encode',
        'axis',
        'legend',
        'data',
        'transform',
    ];
    // From normal marks.
    const scales = Array.from(new Set(states.flatMap((d) => d.channels.map((d) => d.scale))));
    // From static marks.
    const nameScale = new Map(scales.map((scale) => [scale.name, scale]));
    for (const component of components) {
        const channels = inferChannelsForComponent(component);
        for (const channel of channels) {
            const scale = nameScale.get(channel);
            const staticScale = ((_a = component.scale) === null || _a === void 0 ? void 0 : _a[channel]) || {};
            const { independent = false } = staticScale;
            if (scale && !independent) {
                // Merged with exist scales if is not independent.
                const { guide } = scale;
                const guide1 = typeof guide === 'boolean' ? {} : guide;
                scale.guide = (0, util_1.deepMix)({}, guide1, component);
                Object.assign(scale, staticScale);
            }
            else {
                // Append new scales without exit scales or independent.
                const options1 = Object.assign(Object.assign({}, staticScale), { expectedDomain: staticScale.domain, name: channel, guide: (0, util_1.omit)(component, NONE_STATIC_KEYS) });
                scales.push(options1);
            }
        }
    }
    return scales;
}
exports.collectScales = collectScales;
function useRelation(relations) {
    if (!relations || !Array.isArray(relations))
        return [helper_1.identity, helper_1.identity];
    // Store original map and invert.
    let map;
    let invert;
    const conditionalize = (scale) => {
        var _a;
        map = scale.map.bind(scale);
        invert = (_a = scale.invert) === null || _a === void 0 ? void 0 : _a.bind(scale);
        // Distinguish functions[function, output] and value[vale, output] relations.
        const funcRelations = relations.filter(([v]) => typeof v === 'function');
        const valueRelations = relations.filter(([v]) => typeof v !== 'function');
        // Update scale.map
        const valueOutput = new Map(valueRelations);
        scale.map = (x) => {
            for (const [verify, value] of funcRelations) {
                if (verify(x))
                    return value;
            }
            if (valueOutput.has(x))
                return valueOutput.get(x);
            return map(x);
        };
        if (!invert)
            return scale;
        // Update scale.invert
        const outputValue = new Map(valueRelations.map(([a, b]) => [b, a]));
        const outputFunc = new Map(funcRelations.map(([a, b]) => [b, a]));
        scale.invert = (x) => {
            if (outputFunc.has(x))
                return x;
            if (outputValue.has(x))
                return outputValue.get(x);
            return invert(x);
        };
        return scale;
    };
    const deconditionalize = (scale) => {
        if (map !== null)
            scale.map = map;
        if (invert !== null)
            scale.invert = invert;
        return scale;
    };
    return [conditionalize, deconditionalize];
}
exports.useRelation = useRelation;
function assignScale(target, source) {
    const keys = Object.keys(target);
    for (const scale of Object.values(source)) {
        const { name } = scale.getOptions();
        if (!(name in target))
            target[name] = scale;
        else {
            const I = keys
                .filter((d) => d.startsWith(name))
                // Reg is for extract `1` from `x1`;
                .map((d) => +(d.replace(name, '') || 0));
            const index = (0, d3_array_1.max)(I) + 1;
            const newKey = `${name}${index}`;
            target[newKey] = scale;
            scale.getOptions().key = newKey;
        }
    }
    return target;
}
exports.assignScale = assignScale;
function useRelationScale(options, library) {
    const [useScale] = (0, library_1.useLibrary)('scale', library);
    const { relations } = options;
    const [conditionalize] = useRelation(relations);
    const scale = useScale(options);
    return conditionalize(scale);
}
exports.useRelationScale = useRelationScale;
function syncFacetsScales(states) {
    const scales = states
        .flatMap((d) => Array.from(d.values()))
        .flatMap((d) => d.channels.map((d) => d.scale));
    syncFacetsScaleByChannel(scales, 'x');
    syncFacetsScaleByChannel(scales, 'y');
}
exports.syncFacetsScales = syncFacetsScales;
function inferChannelsForComponent(component) {
    const { channels = [], type, scale = {} } = component;
    const L = ['shape', 'color', 'opacity', 'size'];
    if (channels.length !== 0)
        return channels;
    if (type === 'axisX')
        return ['x'];
    if (type === 'axisY')
        return ['y'];
    if (type === 'legends')
        return Object.keys(scale).filter((d) => L.includes(d));
    return [];
}
function syncFacetsScaleByChannel(scales, channel) {
    const S = scales.filter(({ name, facet = true }) => facet && name === channel);
    const D = S.flatMap((d) => d.domain);
    const syncedD = S.every(isQuantitativeScale)
        ? (0, d3_array_1.extent)(D)
        : S.every(isDiscreteScale)
            ? Array.from(new Set(D))
            : null;
    if (syncedD === null)
        return;
    for (const scale of S) {
        scale.domain = syncedD;
    }
}
function maybeRatio(type, domain, options) {
    const { ratio } = options;
    if (ratio === undefined || ratio === null)
        return domain;
    if (isQuantitativeScale({ type })) {
        return clampQuantitativeScale(domain, ratio, type);
    }
    if (isDiscreteScale({ type }))
        return clampDiscreteScale(domain, ratio);
    return domain;
}
function clampQuantitativeScale(domain, ratio, type) {
    const D = domain.map(Number);
    const scale = new scale_1.Linear({
        domain: D,
        range: [D[0], D[0] + (D[D.length - 1] - D[0]) * ratio],
    });
    if (type === 'time')
        return domain.map((d) => new Date(scale.map(d)));
    return domain.map((d) => scale.map(d));
}
function clampDiscreteScale(domain, ratio) {
    const index = Math.round(domain.length * ratio);
    return domain.slice(0, index);
}
function isQuantitativeScale(scale) {
    const { type } = scale;
    if (typeof type !== 'string')
        return false;
    // Do not take quantize, quantile or threshold scale into account,
    // because they are not for position scales. If they are, there is
    // no need to sync them.
    const names = ['linear', 'log', 'pow', 'time'];
    return names.includes(type);
}
function isDiscreteScale(scale) {
    const { type } = scale;
    if (typeof type !== 'string')
        return false;
    const names = ['band', 'point', 'ordinal'];
    return names.includes(type);
}
// @todo More accurate inference for different cases.
function inferScaleType(name, values, options) {
    const { type, domain, range, quantitative, ordinal } = options;
    if (type !== undefined)
        return type;
    if (isObject(values))
        return 'identity';
    if (typeof range === 'string')
        return 'linear';
    if ((domain || range || []).length > 2)
        return asOrdinalType(name, ordinal);
    if (domain !== undefined) {
        if (isOrdinal([domain]))
            return asOrdinalType(name, ordinal);
        if (isTemporal(values))
            return 'time';
        return asQuantitativeType(name, range, quantitative);
    }
    if (isOrdinal(values))
        return asOrdinalType(name, ordinal);
    if (isTemporal(values))
        return 'time';
    return asQuantitativeType(name, range, quantitative);
}
function inferScaleDomain(type, name, values, options) {
    const { domain } = options;
    if (domain !== undefined)
        return domain;
    switch (type) {
        case 'linear':
        case 'time':
        case 'log':
        case 'pow':
        case 'sqrt':
        case 'quantize':
        case 'threshold':
            return maybeMinMax(inferDomainQ(values, options), options);
        case 'band':
        case 'ordinal':
        case 'point':
            return inferDomainC(values);
        case 'quantile':
            return inferDomainO(values);
        case 'sequential':
            return maybeMinMax(inferDomainS(values), options);
        default:
            return [];
    }
}
function inferScaleRange(type, name, values, options, domain, theme, library) {
    const { range } = options;
    if (typeof range === 'string')
        return gradientColors(range);
    if (range !== undefined)
        return range;
    const { rangeMin, rangeMax } = options;
    switch (type) {
        case 'linear':
        case 'time':
        case 'log':
        case 'pow':
        case 'sqrt': {
            const colors = categoricalColors(values, options, domain, theme, library);
            const [r0, r1] = inferRangeQ(name, colors);
            return [rangeMin !== null && rangeMin !== void 0 ? rangeMin : r0, rangeMax !== null && rangeMax !== void 0 ? rangeMax : r1];
        }
        case 'band':
        case 'point': {
            const min = name === 'size' ? 5 : 0;
            const max = name === 'size' ? 10 : 1;
            return [rangeMin !== null && rangeMin !== void 0 ? rangeMin : min, rangeMax !== null && rangeMax !== void 0 ? rangeMax : max];
        }
        case 'ordinal': {
            return categoricalColors(values, options, domain, theme, library);
        }
        case 'sequential':
            return undefined;
        case 'constant':
            return [values[0][0]];
        default:
            return [];
    }
}
function inferScaleOptions(type, name, values, options, coordinates) {
    switch (type) {
        case 'linear':
        case 'time':
        case 'log':
        case 'pow':
        case 'sqrt':
            return inferOptionsQ(coordinates, options);
        case 'band':
        case 'point':
            return inferOptionsC(type, name, coordinates, options);
        case 'sequential':
            return inferOptionsS(options);
        default:
            return options;
    }
}
function categoricalColors(values, options, domain, theme, library) {
    const [usePalette] = (0, library_1.useLibrary)('palette', library);
    const { category10: c10, category20: c20 } = theme;
    const defaultPalette = (0, array_1.unique)(domain).length <= c10.length ? c10 : c20;
    const { palette = defaultPalette, offset } = options;
    if (Array.isArray(palette))
        return palette;
    // Built-in palettes have higher priority.
    try {
        return usePalette({ type: palette });
    }
    catch (e) {
        const colors = interpolatedColors(palette, domain, offset);
        if (colors)
            return colors;
        throw new Error(`Unknown Component: ${palette} `);
    }
}
function gradientColors(range) {
    return range.split('-');
}
function interpolatedColors(palette, domain, offset = (d) => d) {
    if (!palette)
        return null;
    const fullName = (0, util_1.upperFirst)(palette);
    // If scheme have enough colors, then return pre-defined colors.
    const scheme = d3ScaleChromatic[`scheme${fullName}`];
    const interpolator = d3ScaleChromatic[`interpolate${fullName}`];
    if (!scheme && !interpolator)
        return null;
    if (scheme) {
        // If is a one dimension array, return it.
        if (!scheme.some(Array.isArray))
            return scheme;
        const schemeColors = scheme[domain.length];
        if (schemeColors)
            return schemeColors;
    }
    // Otherwise interpolate to get full colors.
    return domain.map((_, i) => interpolator(offset(i / domain.length)));
}
function inferOptionsS(options) {
    const { palette = 'ylGnBu', offset } = options;
    const name = (0, util_1.upperFirst)(palette);
    const interpolator = d3ScaleChromatic[`interpolate${name}`];
    if (!interpolator)
        throw new Error(`Unknown palette: ${name}`);
    return {
        interpolator: offset ? (x) => interpolator(offset(x)) : interpolator,
    };
}
function inferOptionsQ(coordinates, options) {
    const { interpolate = scale_1.createInterpolateValue, nice = false, tickCount = 5, } = options;
    return Object.assign(Object.assign({}, options), { interpolate, nice, tickCount });
}
function inferOptionsC(type, name, coordinates, options) {
    if (options.padding !== undefined ||
        options.paddingInner !== undefined ||
        options.paddingOuter !== undefined) {
        return Object.assign(Object.assign({}, options), { unknown: NaN });
    }
    const padding = inferPadding(type, name, coordinates);
    const { paddingInner = padding, paddingOuter = padding } = options;
    return Object.assign(Object.assign({}, options), { paddingInner,
        paddingOuter,
        padding, unknown: NaN });
}
function inferPadding(type, name, coordinates) {
    // The scale for enterDelay and enterDuration should has zero padding by default.
    // Because there is no need to add extra delay for the start and the end.
    if (name === 'enterDelay' || name === 'enterDuration')
        return 0;
    if (name === 'size')
        return 0;
    if (type === 'band')
        return (0, coordinate_1.isTheta)(coordinates) ? 0 : 0.1;
    // Point scale need 0.5 padding to make interval between first and last point
    // equal to other intervals in polar coordinate.
    if (type === 'point')
        return 0.5;
    return 0;
}
function asOrdinalType(name, defaults) {
    if (defaults)
        return defaults;
    return isQuantitative(name) ? 'point' : 'ordinal';
}
function asQuantitativeType(name, range, defaults) {
    if (defaults)
        return defaults;
    if (name !== 'color')
        return 'linear';
    return range ? 'linear' : 'sequential';
}
function maybeMinMax(domain, options) {
    if (domain.length === 0)
        return domain;
    const { domainMin, domainMax } = options;
    const [d0, d1] = domain;
    return [domainMin !== null && domainMin !== void 0 ? domainMin : d0, domainMax !== null && domainMax !== void 0 ? domainMax : d1];
}
function inferDomainQ(values, options) {
    const { zero = false } = options;
    let min = Infinity;
    let max = -Infinity;
    for (const value of values) {
        for (const d of value) {
            if ((0, helper_1.defined)(d)) {
                min = Math.min(min, +d);
                max = Math.max(max, +d);
            }
        }
    }
    if (min === Infinity)
        return [];
    return zero ? [Math.min(0, min), max] : [min, max];
}
function inferDomainC(values) {
    return Array.from(new Set(values.flat()));
}
function inferDomainO(values) {
    return values.flat().sort();
}
function inferDomainS(values) {
    let min = Infinity;
    let max = -Infinity;
    for (const value of values) {
        for (const d of value) {
            if ((0, helper_1.defined)(d)) {
                min = Math.min(min, +d);
                max = Math.max(max, +d);
            }
        }
    }
    if (min === Infinity)
        return [];
    return [min < 0 ? -max : min, max];
}
/**
 * @todo More nice default range for enterDelay and enterDuration.
 * @todo Move these to channel definition.
 */
function inferRangeQ(name, palette) {
    if (name === 'enterDelay')
        return [0, 1000];
    if (name == 'enterDuration')
        return [300, 1000];
    if (name.startsWith('y') || name.startsWith('position'))
        return [1, 0];
    if (name === 'color')
        return [(0, array_1.firstOf)(palette), (0, array_1.lastOf)(palette)];
    if (name === 'opacity')
        return [0, 1];
    if (name === 'size')
        return [1, 10];
    return [0, 1];
}
function isOrdinal(values) {
    return some(values, (d) => {
        const type = typeof d;
        return type === 'string' || type === 'boolean';
    });
}
function isTemporal(values) {
    return some(values, (d) => d instanceof Date);
}
function isObject(values) {
    return some(values, helper_1.isStrictObject);
}
function some(values, callback) {
    for (const V of values) {
        if (V.some(callback))
            return true;
    }
    return false;
}
function isQuantitative(name) {
    return (name.startsWith('x') ||
        name.startsWith('y') ||
        name.startsWith('position') ||
        name.startsWith('size'));
}
// Spatial and temporal position.
function isPosition(name) {
    return (name.startsWith('x') ||
        name.startsWith('y') ||
        name.startsWith('position') ||
        name === 'enterDelay' ||
        name === 'enterDuration' ||
        name === 'updateDelay' ||
        name === 'updateDuration' ||
        name === 'exitDelay' ||
        name === 'exitDuration');
}
exports.isPosition = isPosition;
function isValidScale(scale) {
    if (!scale || !scale.type)
        return false;
    if (typeof scale.type === 'function')
        return true;
    const { type, domain, range, interpolator } = scale;
    const isValidDomain = domain && domain.length > 0;
    const isValidRange = range && range.length > 0;
    if ([
        'linear',
        'sqrt',
        'log',
        'time',
        'pow',
        'threshold',
        'quantize',
        'quantile',
        'ordinal',
        'band',
        'point',
    ].includes(type) &&
        isValidDomain &&
        isValidRange) {
        return true;
    }
    if (['sequential'].includes(type) &&
        isValidDomain &&
        (isValidRange || interpolator)) {
        return true;
    }
    if (['constant', 'identity'].includes(type) && isValidRange)
        return true;
    return false;
}
exports.isValidScale = isValidScale;
//# sourceMappingURL=scale.js.map