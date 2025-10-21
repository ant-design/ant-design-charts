import { deepMix } from '@antv/util';
import { groupSort, max, min, sum, mean, median, sort, } from '@antv/vendor/d3-array';
import { columnOf } from './utils/helper';
function createReducer(channel, options, encode) {
    const { by = channel, reducer = 'max' } = options;
    const [V] = columnOf(encode, by);
    if (typeof reducer === 'function')
        return (GI) => reducer(GI, V);
    if (reducer === 'max')
        return (GI) => max(GI, (i) => +V[i]);
    if (reducer === 'min')
        return (GI) => min(GI, (i) => +V[i]);
    if (reducer === 'sum')
        return (GI) => sum(GI, (i) => +V[i]);
    if (reducer === 'median')
        return (GI) => median(GI, (i) => +V[i]);
    if (reducer === 'mean')
        return (GI) => mean(GI, (i) => +V[i]);
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
export const Sort = (options = {}) => {
    return (I, mark) => {
        const { reverse, slice, channel, by, ordinal = true, reducer } = options;
        const { encode, scale = {} } = mark;
        const domain = scale[channel].domain;
        const [V] = columnOf(encode, by !== null && by !== void 0 ? by : channel);
        const [T] = columnOf(encode, channel);
        const normalizeReducer = createReducer(channel, { by, reducer }, encode);
        const SI = filterIndex(I, T, domain);
        const sortedDomain = groupSort(SI, normalizeReducer, (i) => T[i]);
        // when ordinal is true, do not change the index of the data.
        const sortedI = !ordinal ? sort(I, (i) => V[i]) : I;
        if (reverse) {
            !ordinal && sortedI.reverse();
            sortedDomain.reverse();
        }
        const s = typeof slice === 'number' ? [0, slice] : slice;
        const slicedDomain = slice ? sortedDomain.slice(...s) : sortedDomain;
        return [
            sortedI,
            deepMix(mark, { scale: { [channel]: { domain: slicedDomain } } }),
        ];
    };
};
Sort.props = {};
//# sourceMappingURL=sort.js.map