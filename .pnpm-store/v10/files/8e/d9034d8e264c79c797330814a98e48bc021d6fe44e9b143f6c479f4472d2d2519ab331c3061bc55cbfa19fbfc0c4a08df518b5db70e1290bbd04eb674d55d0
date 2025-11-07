"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
const util_1 = require("@antv/util");
const d3_array_1 = require("@antv/vendor/d3-array");
const helper_1 = require("./utils/helper");
function createReducer(channel, options, encode) {
    const { by = channel, reducer = 'max' } = options;
    const [V] = (0, helper_1.columnOf)(encode, by);
    if (typeof reducer === 'function')
        return (GI) => reducer(GI, V);
    if (reducer === 'max')
        return (GI) => (0, d3_array_1.max)(GI, (i) => +V[i]);
    if (reducer === 'min')
        return (GI) => (0, d3_array_1.min)(GI, (i) => +V[i]);
    if (reducer === 'sum')
        return (GI) => (0, d3_array_1.sum)(GI, (i) => +V[i]);
    if (reducer === 'median')
        return (GI) => (0, d3_array_1.median)(GI, (i) => +V[i]);
    if (reducer === 'mean')
        return (GI) => (0, d3_array_1.mean)(GI, (i) => +V[i]);
    if (reducer === 'first')
        return (GI) => V[GI[0]];
    if (reducer === 'last')
        return (GI) => V[GI[GI.length - 1]];
    throw new Error(`Unknown reducer: ${reducer}`);
}
// If domain is specified, only sort data in the domain.
function filterIndex(I, values, specifiedDomain) {
    if (!Array.isArray(specifiedDomain))
        return I;
    const domain = new Set(specifiedDomain);
    return I.filter((i) => domain.has(values[i]));
}
/**
 * Sort marks groups by groups.
 */
const Sort = (options = {}) => {
    return (I, mark) => {
        const { reverse, slice, channel, by, ordinal = true, reducer } = options;
        const { encode, scale = {} } = mark;
        const domain = scale[channel].domain;
        const [V] = (0, helper_1.columnOf)(encode, by !== null && by !== void 0 ? by : channel);
        const [T] = (0, helper_1.columnOf)(encode, channel);
        const normalizeReducer = createReducer(channel, { by, reducer }, encode);
        const SI = filterIndex(I, T, domain);
        const sortedDomain = (0, d3_array_1.groupSort)(SI, normalizeReducer, (i) => T[i]);
        // when ordinal is true, do not change the index of the data.
        const sortedI = !ordinal ? (0, d3_array_1.sort)(I, (i) => V[i]) : I;
        if (reverse) {
            !ordinal && sortedI.reverse();
            sortedDomain.reverse();
        }
        const s = typeof slice === 'number' ? [0, slice] : slice;
        const slicedDomain = slice ? sortedDomain.slice(...s) : sortedDomain;
        return [
            sortedI,
            (0, util_1.deepMix)(mark, { scale: { [channel]: { domain: slicedDomain } } }),
        ];
    };
};
exports.Sort = Sort;
exports.Sort.props = {};
//# sourceMappingURL=sort.js.map