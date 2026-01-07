"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.column = column;
exports.inferredColumn = inferredColumn;
exports.visualColumn = visualColumn;
exports.nonConstantColumn = nonConstantColumn;
exports.constant = constant;
exports.columnOf = columnOf;
exports.maybeColumnOf = maybeColumnOf;
exports.isObject = isObject;
function column(value, field) {
    if (value === null)
        return undefined;
    return { type: 'column', value, field };
}
function inferredColumn(value, field) {
    const c = column(value, field);
    return Object.assign(Object.assign({}, c), { inferred: true });
}
function visualColumn(value, field) {
    if (value === null)
        return undefined;
    return { type: 'column', value, field, visual: true };
}
function nonConstantColumn(value, field) {
    const c = column(value, field);
    return Object.assign(Object.assign({}, c), { constant: false });
}
function constant(I, value) {
    const array = [];
    for (const i of I)
        array[i] = value;
    return array;
}
function columnOf(encode, key) {
    const channel = encode[key];
    if (!channel)
        return [null, null];
    const { value, field = null } = channel;
    return [value, field];
}
function maybeColumnOf(encode, ...K) {
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
function isObject(d) {
    if (d instanceof Date)
        return false;
    return typeof d === 'object';
}
//# sourceMappingURL=helper.js.map