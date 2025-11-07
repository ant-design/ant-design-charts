"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mid = exports.multi = exports.ifPositive = exports.ifNegative = void 0;
exports.toPrecision = toPrecision;
exports.toThousands = toThousands;
exports.toScientificNotation = toScientificNotation;
exports.toKNotation = toKNotation;
/**
 * 保留x位小数
 */
function toPrecision(num, precision) {
    return +num.toPrecision(precision);
}
/**
 * 千分位
 * 100000 -> 10,000
 */
function toThousands(num) {
    return num.toLocaleString();
}
/**
 * 获得数字科学计数
 * 1000000 = 1e6
 */
function toScientificNotation(num) {
    return num.toExponential();
}
/**
 * 用k的方式表达
 * 1234 -> 1K
 * 12345 -> 12K
 */
function toKNotation(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (Math.abs(num) < 1000)
        return String(num);
    return "".concat(toPrecision(num / 1000, precision).toLocaleString(), "K");
}
// Condition if x is smaller than zero.
var ifNegative = function (x, a, b) { return (x < 0 && Number.isFinite(x) ? a : b); };
exports.ifNegative = ifNegative;
// Condition if x is greater than zero.
var ifPositive = function (x, a, b) { return (x > 0 && Number.isFinite(x) ? a : b); };
exports.ifPositive = ifPositive;
// Calculate the result of  a * b.
var multi = function (a, b) { return a * b; };
exports.multi = multi;
// Calculate the result of  (a + b) / 2.
var mid = function (a, b) { return a / 2 + (b || 0) / 2; };
exports.mid = mid;
//# sourceMappingURL=number.js.map