import { isAbsoluteArray } from './is-absolute-array';
/**
 * Iterates an array to check if it's a `PathArray`
 * with all segments are in non-shorthand notation
 * with absolute values.
 */
export function isNormalizedArray(path) {
    return isAbsoluteArray(path) && path.every(function (_a) {
        var pc = _a[0];
        return 'ACLMQZ'.includes(pc);
    });
}
//# sourceMappingURL=is-normalized-array.js.map