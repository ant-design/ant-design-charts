import { deepMix } from '@antv/util';
import { defined } from '../utils/helper';
import { columnOf } from './utils/helper';
function normalizeValue(value) {
    if (typeof value === 'object')
        return [value.value, value.ordinal];
    else
        return [value, true];
}
function filterWhenNoElements(mark) {
    var _a;
    const { encode } = mark;
    // keep y-axis
    const noElementMark = Object.assign(Object.assign({}, mark), { encode: Object.assign(Object.assign({}, mark.encode), { y: Object.assign(Object.assign({}, mark.encode.y), { value: [] }) }) });
    const targetField = (_a = encode === null || encode === void 0 ? void 0 : encode.color) === null || _a === void 0 ? void 0 : _a.field;
    if (!encode || !targetField) {
        return noElementMark;
    }
    // 获取color的筛选源
    let filterObject;
    for (const [key, v] of Object.entries(encode)) {
        if ((key === 'x' || key === 'y') && v.field === targetField) {
            filterObject = Object.assign(Object.assign({}, filterObject), { [key]: Object.assign(Object.assign({}, v), { value: [] }) });
        }
    }
    if (!filterObject) {
        return noElementMark;
    }
    return Object.assign(Object.assign({}, mark), { encode: Object.assign(Object.assign({}, mark.encode), filterObject) });
}
/**
 * The Filter transform filter channels.
 */
export const Filter = (options = {}) => {
    return (I, mark) => {
        const { encode, data } = mark;
        const filters = Object.entries(options)
            .map(([key, v]) => {
            const [V] = columnOf(encode, key);
            // Skip empty channel.
            if (!V)
                return null;
            const [value, ordinal = true] = normalizeValue(v);
            if (typeof value === 'function')
                return (i) => value(V[i]);
            if (ordinal) {
                const expectedValues = Array.isArray(value) ? value : [value];
                // Skip empty expected values.
                if (expectedValues.length === 0)
                    return null;
                return (i) => expectedValues.includes(V[i]);
            }
            else {
                const [start, end] = value;
                return (i) => V[i] >= start && V[i] <= end;
            }
        })
            .filter(defined);
        // Filter index and channels.
        const totalFilter = (i) => filters.every((f) => f(i));
        const FI = I.filter(totalFilter);
        const newIndex = FI.map((_, i) => i);
        if (filters.length === 0) {
            const targetMark = filterWhenNoElements(mark);
            return [I, targetMark];
        }
        const newEncodes = Object.entries(encode).map(([key, encode]) => {
            return [
                key,
                Object.assign(Object.assign({}, encode), { value: newIndex
                        .map((i) => encode.value[FI[i]])
                        .filter((v) => v !== undefined) }),
            ];
        });
        return [
            newIndex,
            deepMix({}, mark, {
                encode: Object.fromEntries(newEncodes),
                // Filter data for tooltip item.
                data: FI.map((i) => data[i]),
            }),
        ];
    };
};
Filter.props = {};
//# sourceMappingURL=filter.js.map