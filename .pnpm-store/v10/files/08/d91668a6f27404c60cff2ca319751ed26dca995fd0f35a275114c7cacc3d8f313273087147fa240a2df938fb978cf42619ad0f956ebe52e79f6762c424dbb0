import { maxIndex, minIndex } from '@antv/vendor/d3-array';
import { columnOf } from './utils/helper';
import { createGroups } from './utils/order';
function first(I, V) {
    return [I[0]];
}
function last(I, V) {
    const i = I.length - 1;
    return [I[i]];
}
function max(I, V) {
    const i = maxIndex(I, (i) => V[i]);
    return [I[i]];
}
function min(I, V) {
    const i = minIndex(I, (i) => V[i]);
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
export const Select = (options = {}) => {
    const { groupBy = 'series', channel, selector } = options;
    return (I, mark) => {
        const { encode } = mark;
        const groups = createGroups(groupBy, I, mark);
        const [V] = columnOf(encode, channel);
        const selectFunction = normalizeSelector(selector);
        return [groups.flatMap((GI) => selectFunction(GI, V)), mark];
    };
};
Select.props = {};
//# sourceMappingURL=select.js.map