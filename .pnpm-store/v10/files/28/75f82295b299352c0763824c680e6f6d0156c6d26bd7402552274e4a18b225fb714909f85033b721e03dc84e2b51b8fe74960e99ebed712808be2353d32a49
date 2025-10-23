"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainOf = exports.applyOrder = exports.normalizeComparator = exports.createGroups = void 0;
const d3_array_1 = require("@antv/vendor/d3-array");
const helper_1 = require("../../utils/helper");
const array_1 = require("../../utils/array");
const helper_2 = require("./helper");
function createGroups(groupBy, I, mark) {
    const { encode } = mark;
    if (groupBy === null)
        return [I];
    const G = normalizeGroupBy(groupBy)
        .map((k) => { var _a; return [k, (_a = (0, helper_2.columnOf)(encode, k)) === null || _a === void 0 ? void 0 : _a[0]]; })
        .filter(([, column]) => (0, helper_1.defined)(column));
    const key = (i) => G.map(([, V]) => V[i]).join('-');
    return Array.from((0, d3_array_1.group)(I, key).values());
}
exports.createGroups = createGroups;
function normalizeComparator(order) {
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
exports.normalizeComparator = normalizeComparator;
function applyOrder(groups, comparator) {
    for (const group of groups) {
        group.sort(comparator);
    }
}
exports.applyOrder = applyOrder;
function domainOf(value, scale) {
    return (scale === null || scale === void 0 ? void 0 : scale.domain) || Array.from(new Set(value));
}
exports.domainOf = domainOf;
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
        return (i, j) => order.reduce((eq, f) => (eq !== 0 ? eq : (0, d3_array_1.ascending)(data[i][f], data[j][f])), 0);
    };
}
function createValueOrder(data, Y, S) {
    return ascendingComparator((i) => Y[i]);
}
function createSumOrder(data, Y, S) {
    const I = (0, array_1.indexOf)(data);
    const groups = Array.from((0, d3_array_1.group)(I, (i) => S[+i]).entries());
    const seriesSum = new Map(groups.map(([k, GI]) => [k, GI.reduce((s, i) => s + +Y[i])]));
    return ascendingComparator((i) => seriesSum.get(S[i]));
}
function createMaxIndexOrder(data, Y, S) {
    const I = (0, array_1.indexOf)(data);
    const groups = Array.from((0, d3_array_1.group)(I, (i) => S[+i]).entries());
    const seriesMaxIndex = new Map(groups.map(([k, GI]) => [k, (0, d3_array_1.maxIndex)(GI, (i) => Y[i])]));
    return ascendingComparator((i) => seriesMaxIndex.get(S[i]));
}
function ascendingComparator(order) {
    return (i, j) => (0, d3_array_1.ascending)(order(i), order(j));
}
//# sourceMappingURL=order.js.map