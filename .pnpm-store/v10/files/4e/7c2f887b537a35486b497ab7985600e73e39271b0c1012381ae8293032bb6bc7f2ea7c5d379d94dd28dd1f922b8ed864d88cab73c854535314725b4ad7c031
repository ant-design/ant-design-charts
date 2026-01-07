import { group, ascending, maxIndex } from '@antv/vendor/d3-array';
import { defined } from '../../utils/helper';
import { indexOf } from '../../utils/array';
import { columnOf } from './helper';
export function createGroups(groupBy, I, mark) {
    const { encode } = mark;
    if (groupBy === null)
        return [I];
    const G = normalizeGroupBy(groupBy)
        .map((k) => { var _a; return [k, (_a = columnOf(encode, k)) === null || _a === void 0 ? void 0 : _a[0]]; })
        .filter(([, column]) => defined(column));
    const key = (i) => G.map(([, V]) => V[i]).join('-');
    return Array.from(group(I, key).values());
}
export function normalizeComparator(order) {
    if (Array.isArray(order))
        return createFieldsOrder(order);
    if (typeof order === 'function')
        return createFunctionOrder(order);
    if (order === 'series')
        return createSeriesOrder;
    if (order === 'value')
        return createValueOrder;
    if (order === 'sum')
        return createSumOrder;
    if (order === 'maxIndex')
        return createMaxIndexOrder;
    return null;
}
export function applyOrder(groups, comparator) {
    for (const group of groups) {
        group.sort(comparator);
    }
}
export function domainOf(value, scale) {
    return (scale === null || scale === void 0 ? void 0 : scale.domain) || Array.from(new Set(value));
}
function normalizeGroupBy(groupBy) {
    if (Array.isArray(groupBy))
        return groupBy;
    return [groupBy];
}
function createSeriesOrder(data, Y, S) {
    return ascendingComparator((i) => S[i]);
}
function createFunctionOrder(order) {
    return (data, Y, S) => {
        return ascendingComparator((i) => order(data[i]));
    };
}
function createFieldsOrder(order) {
    return (data, Y, S) => {
        return (i, j) => order.reduce((eq, f) => (eq !== 0 ? eq : ascending(data[i][f], data[j][f])), 0);
    };
}
function createValueOrder(data, Y, S) {
    return ascendingComparator((i) => Y[i]);
}
function createSumOrder(data, Y, S) {
    const I = indexOf(data);
    const groups = Array.from(group(I, (i) => S[+i]).entries());
    const seriesSum = new Map(groups.map(([k, GI]) => [k, GI.reduce((s, i) => s + +Y[i])]));
    return ascendingComparator((i) => seriesSum.get(S[i]));
}
function createMaxIndexOrder(data, Y, S) {
    const I = indexOf(data);
    const groups = Array.from(group(I, (i) => S[+i]).entries());
    const seriesMaxIndex = new Map(groups.map(([k, GI]) => [k, maxIndex(GI, (i) => Y[i])]));
    return ascendingComparator((i) => seriesMaxIndex.get(S[i]));
}
function ascendingComparator(order) {
    return (i, j) => ascending(order(i), order(j));
}
//# sourceMappingURL=order.js.map