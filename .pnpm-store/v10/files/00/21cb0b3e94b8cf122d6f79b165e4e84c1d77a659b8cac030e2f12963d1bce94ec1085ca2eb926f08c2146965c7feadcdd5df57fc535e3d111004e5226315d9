export function column(value, field) {
    if (value === null)
        return undefined;
    return { type: 'column', value, field };
}
export function inferredColumn(value, field) {
    const c = column(value, field);
    return Object.assign(Object.assign({}, c), { inferred: true });
}
export function visualColumn(value, field) {
    if (value === null)
        return undefined;
    return { type: 'column', value, field, visual: true };
}
export function nonConstantColumn(value, field) {
    const c = column(value, field);
    return Object.assign(Object.assign({}, c), { constant: false });
}
export function constant(I, value) {
    const array = [];
    for (const i of I)
        array[i] = value;
    return array;
}
export function columnOf(encode, key) {
    const channel = encode[key];
    if (!channel)
        return [null, null];
    const { value, field = null } = channel;
    return [value, field];
}
export function maybeColumnOf(encode, ...K) {
    for (const key of K) {
        if (typeof key === 'string') {
            const [KV, fv] = columnOf(encode, key);
            if (KV !== null)
                return [KV, fv];
        }
        else {
            return [key, null];
        }
    }
    return [null, null];
}
export function isObject(d) {
    if (d instanceof Date)
        return false;
    return typeof d === 'object';
}
//# sourceMappingURL=helper.js.map