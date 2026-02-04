"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const d3_array_1 = require("@antv/vendor/d3-array");
const helper_1 = require("./utils/helper");
const order_1 = require("./utils/order");
function first(I, V) {
    return [I[0]];
}
function last(I, V) {
    const i = I.length - 1;
    return [I[i]];
}
function max(I, V) {
    const i = (0, d3_array_1.maxIndex)(I, (i) => V[i]);
    return [I[i]];
}
function min(I, V) {
    const i = (0, d3_array_1.minIndex)(I, (i) => V[i]);
    return [I[i]];
}
function normalizeSelector(selector) {
    if (typeof selector === 'function')
        return selector;
    const registry = { first, last, max, min };
    return registry[selector] || first;
}
/**
 * The select transform groups marks with specified channels, and
 * filter index by specified selector for each series, say to
 * pull a single or multiple values out of each series.
 */
const Select = (options = {}) => {
    const { groupBy = 'series', channel, selector } = options;
    return (I, mark) => {
        const { encode } = mark;
        const groups = (0, order_1.createGroups)(groupBy, I, mark);
        const [V] = (0, helper_1.columnOf)(encode, channel);
        const selectFunction = normalizeSelector(selector);
        return [groups.flatMap((GI) => selectFunction(GI, V)), mark];
    };
};
exports.Select = Select;
exports.Select.props = {};
//# sourceMappingURL=select.js.map