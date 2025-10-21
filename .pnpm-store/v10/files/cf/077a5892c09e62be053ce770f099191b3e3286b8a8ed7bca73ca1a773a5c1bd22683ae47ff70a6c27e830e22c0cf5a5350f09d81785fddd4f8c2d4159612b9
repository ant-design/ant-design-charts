"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexX = void 0;
const util_1 = require("@antv/util");
const d3_array_1 = require("@antv/vendor/d3-array");
const helper_1 = require("./utils/helper");
function valueOf(data, field) {
    if (typeof field === 'string')
        return data.map((d) => d[field]);
    return data.map(field);
}
function createReducer(reducer, V) {
    if (typeof reducer === 'function')
        return (GI) => reducer(GI, V);
    if (reducer === 'sum')
        return (GI) => (0, d3_array_1.sum)(GI, (i) => +V[i]);
    throw new Error(`Unknown reducer: ${reducer}`);
}
/**
 * Produce flex options from data for x scale.
 */
const FlexX = (options = {}) => {
    const { field, channel = 'y', reducer = 'sum' } = options;
    return (I, mark) => {
        const { data, encode } = mark;
        const [x] = (0, helper_1.columnOf)(encode, 'x');
        const V = field ? valueOf(data, field) : (0, helper_1.columnOf)(encode, channel)[0];
        const reducerFunction = createReducer(reducer, V);
        const flex = (0, d3_array_1.rollups)(I, reducerFunction, (i) => x[i]).map((d) => d[1]);
        return [I, (0, util_1.deepMix)({}, mark, { scale: { x: { flex } } })];
    };
};
exports.FlexX = FlexX;
exports.FlexX.props = {};
//# sourceMappingURL=flexX.js.map