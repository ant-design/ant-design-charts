/**
 * Clamp number within the inclusive range within the lower and upper bounds.
 */
export function clamp(v, lower, upper) {
    return Math.max(lower, Math.min(v, upper));
}
/**
 * Precision conversion
 */
export function prettyNumber(n, precision = 10) {
    if (typeof n !== 'number')
        return n;
    return Math.abs(n) < 1e-15 ? n : parseFloat(n.toFixed(precision));
}
//# sourceMappingURL=number.js.map