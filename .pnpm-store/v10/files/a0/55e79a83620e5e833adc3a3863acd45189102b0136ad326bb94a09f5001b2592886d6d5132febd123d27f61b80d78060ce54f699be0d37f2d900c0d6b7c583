import { roundPath } from '../process/round-path';
/**
 * Returns a valid `d` attribute string value created
 * by rounding values and concatenating the `pathArray` segments.
 */
export function path2String(path, round) {
    if (round === void 0) { round = 'off'; }
    return roundPath(path, round)
        .map(function (x) { return x[0] + x.slice(1).join(' '); })
        .join('');
}
//# sourceMappingURL=path-2-string.js.map