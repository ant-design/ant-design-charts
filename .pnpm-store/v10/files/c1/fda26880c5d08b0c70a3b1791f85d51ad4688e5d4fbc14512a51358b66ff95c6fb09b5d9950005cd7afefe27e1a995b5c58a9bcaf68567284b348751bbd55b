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
import { deepMix } from '@antv/util';
import { mean, deviation, median, sum, max, min } from '@antv/vendor/d3-array';
import { isUnset } from '../utils/helper';
import { column, columnOf } from './utils/helper';
import { createGroups } from './utils/order';
function normalizeBasis(basis) {
    if (typeof basis === 'function')
        return basis;
    const registry = {
        min: (I, Y) => min(I, (i) => Y[+i]),
        max: (I, Y) => max(I, (i) => Y[+i]),
        first: (I, Y) => Y[I[0]],
        last: (I, Y) => Y[I[I.length - 1]],
        mean: (I, Y) => mean(I, (i) => Y[+i]),
        median: (I, Y) => median(I, (i) => Y[+i]),
        sum: (I, Y) => sum(I, (i) => Y[+i]),
        deviation: (I, Y) => deviation(I, (i) => Y[+i]),
    };
    return registry[basis] || max;
}
/**
 * Group marks into series by specified channels, and then transform
 * each series's value, say to transform them relative to some basis
 * to apply a moving average.
 */
export const NormalizeY = (options = {}) => {
    const { groupBy = 'x', basis = 'max' } = options;
    return (I, mark) => {
        const { encode, tooltip } = mark;
        const { x } = encode, rest = __rest(encode, ["x"]);
        // Extract and create new channels starts with y, such as y, y1.
        const Yn = Object.entries(rest)
            .filter(([k]) => k.startsWith('y'))
            .map(([k]) => [k, columnOf(encode, k)[0]]);
        const [, Y] = Yn.find(([k]) => k === 'y');
        const newYn = Yn.map(([k]) => [k, new Array(I.length)]);
        // Group marks into series by specified keys.
        const groups = createGroups(groupBy, I, mark);
        // Transform y channels for each group based on basis.
        const basisFunction = normalizeBasis(basis);
        for (const I of groups) {
            // Compute basis only base on y.
            const basisValue = basisFunction(I, Y);
            for (const i of I) {
                for (let j = 0; j < Yn.length; j++) {
                    const [, V] = Yn[j];
                    const [, newV] = newYn[j];
                    newV[i] = +V[i] / basisValue;
                }
            }
        }
        const specifiedTooltip = isUnset(tooltip) || ((tooltip === null || tooltip === void 0 ? void 0 : tooltip.items) && (tooltip === null || tooltip === void 0 ? void 0 : tooltip.items.length) !== 0);
        return [
            I,
            deepMix({}, mark, Object.assign({ encode: Object.fromEntries(newYn.map(([k, v]) => [k, column(v, columnOf(encode, k)[1])])) }, (!specifiedTooltip &&
                encode.y0 && {
                tooltip: { items: [{ channel: 'y0' }] },
            }))),
        ];
    };
};
NormalizeY.props = {};
//# sourceMappingURL=normalizeY.js.map