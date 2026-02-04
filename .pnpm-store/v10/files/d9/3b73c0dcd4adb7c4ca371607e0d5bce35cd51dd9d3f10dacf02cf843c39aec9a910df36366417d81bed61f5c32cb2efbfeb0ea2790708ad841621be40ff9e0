import { deepMix } from '@antv/util';
import { rollups, sum } from '@antv/vendor/d3-array';
import { columnOf } from './utils/helper';
function valueOf(data, field) {
    if (typeof field === 'string')
        return data.map((d) => d[field]);
    return data.map(field);
}
function createReducer(reducer, V) {
    if (typeof reducer === 'function')
        return (GI) => reducer(GI, V);
    if (reducer === 'sum')
        return (GI) => sum(GI, (i) => +V[i]);
    throw new Error(`Unknown reducer: ${reducer}`);
}
/**
 * Produce flex options from data for x scale.
 */
export const FlexX = (options = {}) => {
    const { field, channel = 'y', reducer = 'sum' } = options;
    return (I, mark) => {
        const { data, encode } = mark;
        const [x] = columnOf(encode, 'x');
        const V = field ? valueOf(data, field) : columnOf(encode, channel)[0];
        const reducerFunction = createReducer(reducer, V);
        const flex = rollups(I, reducerFunction, (i) => x[i]).map((d) => d[1]);
        return [I, deepMix({}, mark, { scale: { x: { flex } } })];
    };
};
FlexX.props = {};
//# sourceMappingURL=flexX.js.map