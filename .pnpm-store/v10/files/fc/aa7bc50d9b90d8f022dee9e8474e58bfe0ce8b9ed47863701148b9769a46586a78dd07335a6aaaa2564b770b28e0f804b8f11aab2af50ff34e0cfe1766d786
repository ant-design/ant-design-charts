import { paramsCount } from '../parser/params-count';
/**
 * Iterates an array to check if it's an actual `PathArray`.
 */
export function isPathArray(path) {
    return (Array.isArray(path) &&
        path.every(function (seg) {
            var lk = seg[0].toLowerCase();
            return paramsCount[lk] === seg.length - 1 && 'achlmqstvz'.includes(lk);
        }));
}
//# sourceMappingURL=is-path-array.js.map