"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.maybeColumnOf = exports.columnOf = exports.constant = exports.nonConstantColumn = exports.visualColumn = exports.inferredColumn = exports.column = void 0;
function column(value, field) {
    if (value === null)
        return undefined;
    return { type: 'column', value, field };
}
exports.column = column;
function inferredColumn(value, field) {
    const c = column(value, field);
    return Object.assign(Object.assign({}, c), { inferred: true });
}
exports.inferredColumn = inferredColumn;
function visualColumn(value, field) {
    if (value === null)
        return undefined;
    return { type: 'column', value, field, visual: true };
}
exports.visualColumn = visualColumn;
function nonConstantColumn(value, field) {
    const c = column(value, field);
    return Object.assign(Object.assign({}, c), { constant: false });
}
exports.nonConstantColumn = nonConstantColumn;
function constant(I, value) {
    const array = [];
    for (const i of I)
        array[i] = value;
    return array;
}
exports.constant = constant;
function columnOf(encode, key) {
    const channel = encode[key];
    if (!channel)
        return [null, null];
    const { value, field = null } = channel;
    return [value, field];
}
exports.columnOf = columnOf;
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
exports.maybeColumnOf = maybeColumnOf;
function isObject(d) {
    if (d instanceof Date)
        return false;
    return typeof d === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=helper.js.map