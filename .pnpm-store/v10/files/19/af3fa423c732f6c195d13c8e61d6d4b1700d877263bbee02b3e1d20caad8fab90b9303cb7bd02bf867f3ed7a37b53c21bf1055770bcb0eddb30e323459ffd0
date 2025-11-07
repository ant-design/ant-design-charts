/**
 * https://tc39.es/ecma402/#sec-defaultnumberoption
 * @param val
 * @param min
 * @param max
 * @param fallback
 */
export function DefaultNumberOption(inputVal, min, max, fallback) {
    if (inputVal === undefined) {
        // @ts-expect-error
        return fallback;
    }
    var val = Number(inputVal);
    if (isNaN(val) || val < min || val > max) {
        throw new RangeError("".concat(val, " is outside of range [").concat(min, ", ").concat(max, "]"));
    }
    return Math.floor(val);
}
