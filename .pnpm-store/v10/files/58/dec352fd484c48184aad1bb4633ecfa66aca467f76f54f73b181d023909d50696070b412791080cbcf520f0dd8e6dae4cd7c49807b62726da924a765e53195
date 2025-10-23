"use strict";
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
exports.GroupN = void 0;
const util_1 = require("@antv/util");
const d3_array_1 = require("@antv/vendor/d3-array");
const array_1 = require("../utils/array");
const helper_1 = require("./utils/helper");
function builtinFormatter(summary) {
    return (d) => (d === null ? summary : `${summary} of ${d}`);
}
function normalizeReducer(reducer) {
    if (typeof reducer === 'function')
        return [reducer, null];
    const registry = { mean, max, count, first, last, sum, min, median };
    const reducerFunction = registry[reducer];
    if (!reducerFunction)
        throw new Error(`Unknown reducer: ${reducer}.`);
    return reducerFunction();
}
function mean() {
    const reducer = (I, V) => (0, d3_array_1.mean)(I, (i) => +V[i]);
    const formatter = builtinFormatter('mean');
    return [reducer, formatter];
}
function median() {
    const reducer = (I, V) => (0, d3_array_1.median)(I, (i) => +V[i]);
    const formatter = builtinFormatter('median');
    return [reducer, formatter];
}
function max() {
    const reducer = (I, V) => (0, d3_array_1.max)(I, (i) => +V[i]);
    const formatter = builtinFormatter('max');
    return [reducer, formatter];
}
function min() {
    const reducer = (I, V) => (0, d3_array_1.min)(I, (i) => +V[i]);
    const formatter = builtinFormatter('min');
    return [reducer, formatter];
}
function count() {
    const reducer = (I, V) => I.length;
    const formatter = builtinFormatter('count');
    return [reducer, formatter];
}
function sum() {
    const reducer = (I, V) => (0, d3_array_1.sum)(I, (i) => +V[i]);
    const formatter = builtinFormatter('sum');
    return [reducer, formatter];
}
function first() {
    const reducer = (I, V) => V[I[0]];
    const formatter = builtinFormatter('first');
    return [reducer, formatter];
}
function last() {
    const reducer = (I, V) => V[I[I.length - 1]];
    const formatter = builtinFormatter('last');
    return [reducer, formatter];
}
/**
 * The Group transform group data by x and y channels, and aggregate.
 */
const GroupN = (options = {}) => {
    const { groupBy } = options, rest = __rest(options, ["groupBy"]);
    return (I, mark) => {
        const { data, encode } = mark;
        const groups = groupBy(I, mark);
        if (!groups)
            return [I, mark];
        // Extract field from from channel
        // x1 from x, y1 from y, etc,.
        const maybeFrom = (field, reducer) => {
            if (field)
                return field;
            const { from } = reducer;
            if (!from)
                return field;
            const [, field1] = (0, helper_1.columnOf)(encode, from);
            return field1;
        };
        const outputs = Object.entries(rest).map(([channel, reducer]) => {
            const [reducerFunction, formatter] = normalizeReducer(reducer);
            const [V, field] = (0, helper_1.columnOf)(encode, channel);
            const field1 = maybeFrom(field, reducer);
            const RV = groups.map((I) => reducerFunction(I, V !== null && V !== void 0 ? V : data));
            return [
                channel,
                Object.assign(Object.assign({}, (0, helper_1.nonConstantColumn)(RV, (formatter === null || formatter === void 0 ? void 0 : formatter(field1)) || field1)), { aggregate: true }),
            ];
        });
        const reducedColumns = Object.keys(encode).map((key) => {
            const [V, fv] = (0, helper_1.columnOf)(encode, key);
            const GV = groups.map((I) => V[I[0]]);
            return [key, (0, helper_1.column)(GV, fv)];
        });
        const GD = groups.map((I) => data[I[0]]);
        const GI = (0, array_1.indexOf)(groups);
        return [
            GI,
            (0, util_1.deepMix)({}, mark, {
                data: GD,
                encode: Object.fromEntries([...reducedColumns, ...outputs]),
            }),
        ];
    };
};
exports.GroupN = GroupN;
exports.GroupN.props = {};
//# sourceMappingURL=groupN.js.map