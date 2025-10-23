"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = exports.divide = exports.unique = exports.isFlatArray = exports.lastOf = exports.firstOf = exports.transpose = exports.indexOf = exports.mapObject = void 0;
/**
 * Calls a defined callback function on each key:value of a object,
 * and returns a object contains the result.
 */
function mapObject(object, callbackfn) {
    return Object.entries(object).reduce((obj, [key, value]) => {
        obj[key] = callbackfn(value, key, object);
        return obj;
    }, {});
}
exports.mapObject = mapObject;
function indexOf(array) {
    return array.map((_, i) => i);
}
exports.indexOf = indexOf;
/**
 * @example [[1, 2, 3], ['a', 'b', 'c']] => [[1, 'a'], [2, 'b'], [3, 'c']]
 */
function transpose(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    // Note: new Array(col).fill(new Array(row)) is not ok!!!
    // Because in this case it will fill new Array(col) with the same array: new Array(row).
    const transposed = new Array(col).fill(0).map(() => new Array(row));
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }
    return transposed;
}
exports.transpose = transpose;
function firstOf(array) {
    return array[0];
}
exports.firstOf = firstOf;
function lastOf(array) {
    return array[array.length - 1];
}
exports.lastOf = lastOf;
function isFlatArray(array) {
    return !array.some(Array.isArray);
}
exports.isFlatArray = isFlatArray;
function unique(array) {
    return Array.from(new Set(array));
}
exports.unique = unique;
function divide(array, callbackfn) {
    const result = [[], []];
    array.forEach((item) => {
        result[callbackfn(item) ? 0 : 1].push(item);
    });
    return result;
}
exports.divide = divide;
function comb(array, len = array.length) {
    if (len === 1)
        return array.map((item) => [item]);
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const rest = array.slice(i + 1);
        const restComb = comb(rest, len - 1);
        restComb.forEach((comb) => {
            result.push([array[i], ...comb]);
        });
    }
    return result;
}
/**
 * get all combinations of two elements in an array
 * @example [1, 2, 3] => [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
 * @param array
 * @returns
 */
function combine(array) {
    if (array.length === 1)
        return [array];
    const result = [];
    for (let i = 1; i <= array.length; i++) {
        result.push(...comb(array, i));
    }
    return result;
}
exports.combine = combine;
//# sourceMappingURL=array.js.map