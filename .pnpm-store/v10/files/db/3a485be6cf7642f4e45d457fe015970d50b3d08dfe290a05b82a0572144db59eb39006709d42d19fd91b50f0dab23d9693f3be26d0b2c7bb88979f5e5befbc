/**
 * 保留x位小数
 */
export function toPrecision(num, precision) {
    return +num.toPrecision(precision);
}
/**
 * 千分位
 * 100000 -> 10,000
 */
export function toThousands(num) {
    return num.toLocaleString();
}
/**
 * 获得数字科学计数
 * 1000000 = 1e6
 */
export function toScientificNotation(num) {
    return num.toExponential();
}
/**
 * 用k的方式表达
 * 1234 -> 1K
 * 12345 -> 12K
 */
export function toKNotation(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (Math.abs(num) < 1000)
        return String(num);
    return "".concat(toPrecision(num / 1000, precision).toLocaleString(), "K");
}
// Condition if x is smaller than zero.
export var ifNegative = function (x, a, b) { return (x < 0 && Number.isFinite(x) ? a : b); };
// Condition if x is greater than zero.
export var ifPositive = function (x, a, b) { return (x > 0 && Number.isFinite(x) ? a : b); };
// Calculate the result of  a * b.
export var multi = function (a, b) { return a * b; };
// Calculate the result of  (a + b) / 2.
export var mid = function (a, b) { return a / 2 + (b || 0) / 2; };
//# sourceMappingURL=number.js.map