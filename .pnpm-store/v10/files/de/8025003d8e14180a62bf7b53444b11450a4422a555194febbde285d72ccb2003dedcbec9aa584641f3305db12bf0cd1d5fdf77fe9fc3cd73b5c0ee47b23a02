/**
 * Calls a defined callback function on each key:value of a object,
 * and returns a object contains the result.
 */
export function mapObject(object, callbackfn) {
    return Object.entries(object).reduce((obj, [key, value]) => {
        obj[key] = callbackfn(value, key, object);
        return obj;
    }, {});
}
export function indexOf(array) {
    return array.map((_, i) => i);
}
/**
 * @example [[1, 2, 3], ['a', 'b', 'c']] => [[1, 'a'], [2, 'b'], [3, 'c']]
 */
export function transpose(matrix) {
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
export function firstOf(array) {
    return array[0];
}
export function lastOf(array) {
    return array[array.length - 1];
}
export function isFlatArray(array) {
    return !array.some(Array.isArray);
}
export function unique(array) {
    return Array.from(new Set(array));
}
export function divide(array, callbackfn) {
    const result = [[], []];
    array.forEach((item) => {
        result[callbackfn(item) ? 0 : 1].push(item);
    });
    return result;
}
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
export function combine(array) {
    if (array.length === 1)
        return [array];
    const result = [];
    for (let i = 1; i <= array.length; i++) {
        result.push(...comb(array, i));
    }
    return result;
}
//# sourceMappingURL=array.js.map