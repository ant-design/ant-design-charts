"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettyNumber = exports.clamp = void 0;
/**
 * Clamp number within the inclusive range within the lower and upper bounds.
 */
function clamp(v, lower, upper) {
    return Math.max(lower, Math.min(v, upper));
}
exports.clamp = clamp;
/**
 * Precision conversion
 */
function prettyNumber(n, precision = 10) {
    if (typeof n !== 'number')
        return n;
    return Math.abs(n) < 1e-15 ? n : parseFloat(n.toFixed(precision));
}
exports.prettyNumber = prettyNumber;
//# sourceMappingURL=number.js.map