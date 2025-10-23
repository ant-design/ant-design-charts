import { isPathArray } from './is-path-array';
/**
 * Iterates an array to check if it's a `PathArray`
 * with all absolute values.
 */
export function isAbsoluteArray(path) {
    return (isPathArray(path) &&
        // @ts-ignore -- `isPathArray` also checks if it's `Array`
        path.every(function (_a) {
            var x = _a[0];
            return x === x.toUpperCase();
        }));
}
//# sourceMappingURL=is-absolute-array.js.map