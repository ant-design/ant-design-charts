import { isNormalizedArray } from './is-normalized-array';
/**
 * Iterates an array to check if it's a `PathArray`
 * with all C (cubic bezier) segments.
 *
 * @param {string | PathArray} path the `Array` to be checked
 * @returns {boolean} iteration result
 */
export function isCurveArray(path) {
    return isNormalizedArray(path) && path.every(function (_a) {
        var pc = _a[0];
        return 'MC'.includes(pc);
    });
}
//# sourceMappingURL=is-curve-array.js.map