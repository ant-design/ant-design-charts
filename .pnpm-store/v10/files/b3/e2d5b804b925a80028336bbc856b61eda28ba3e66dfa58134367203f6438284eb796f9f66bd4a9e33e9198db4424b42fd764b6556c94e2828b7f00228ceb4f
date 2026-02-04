"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartitionNumberPattern = PartitionNumberPattern;
var tslib_1 = require("tslib");
var decimal_js_1 = tslib_1.__importDefault(require("decimal.js"));
var utils_1 = require("../utils");
var ComputeExponent_1 = require("./ComputeExponent");
var format_to_parts_1 = tslib_1.__importDefault(require("./format_to_parts"));
var FormatNumericToString_1 = require("./FormatNumericToString");
/**
 * https://tc39.es/ecma402/#sec-partitionnumberpattern
 */
function PartitionNumberPattern(internalSlots, _x) {
    var _a;
    var x = _x;
    // IMPL: We need to record the magnitude of the number
    var magnitude = 0;
    // 2. Let dataLocaleData be internalSlots.[[dataLocaleData]].
    var pl = internalSlots.pl, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
    // 3. Let symbols be dataLocaleData.[[numbers]].[[symbols]][internalSlots.[[numberingSystem]]].
    var symbols = dataLocaleData.numbers.symbols[numberingSystem] ||
        dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
    // 4. Let exponent be 0.
    var exponent = 0;
    // 5. Let n be ! ToString(x).
    var n;
    // 6. If x is NaN, then
    if (x.isNaN()) {
        // 6.a. Let n be symbols.[[nan]].
        n = symbols.nan;
    }
    else if (!x.isFinite()) {
        // 7. Else if x is a non-finite Number, then
        // 7.a. Let n be symbols.[[infinity]].
        n = symbols.infinity;
    }
    else {
        // 8. Else,
        if (!x.isZero()) {
            // 8.a. If x < 0, let x be -x.
            (0, utils_1.invariant)(x.isFinite(), 'Input must be a mathematical value');
            // 8.b. If internalSlots.[[style]] is "percent", let x be 100 × x.
            if (internalSlots.style == 'percent') {
                x = x.times(100);
            }
            // 8.c. Let exponent be ComputeExponent(numberFormat, x).
            ;
            _a = (0, ComputeExponent_1.ComputeExponent)(internalSlots, x), exponent = _a[0], 
            // IMPL: We need to record the magnitude of the number
            magnitude = _a[1];
            // 8.d. Let x be x × 10^(-exponent).
            x = x.times(decimal_js_1.default.pow(10, -exponent));
        }
        // 8.e. Let formatNumberResult be FormatNumericToString(internalSlots, x).
        var formatNumberResult = (0, FormatNumericToString_1.FormatNumericToString)(internalSlots, x);
        // 8.f. Let n be formatNumberResult.[[formattedString]].
        n = formatNumberResult.formattedString;
        // 8.g. Let x be formatNumberResult.[[roundedNumber]].
        x = formatNumberResult.roundedNumber;
    }
    // 9. Let sign be 0.
    var sign;
    // 10. If x is negative, then
    var signDisplay = internalSlots.signDisplay;
    switch (signDisplay) {
        case 'never':
            // 10.a. If internalSlots.[[signDisplay]] is "never", then
            // 10.a.i. Let sign be 0.
            sign = 0;
            break;
        case 'auto':
            // 10.b. Else if internalSlots.[[signDisplay]] is "auto", then
            if (x.isPositive() || x.isNaN()) {
                // 10.b.i. If x is positive or x is NaN, let sign be 0.
                sign = 0;
            }
            else {
                // 10.b.ii. Else, let sign be -1.
                sign = -1;
            }
            break;
        case 'always':
            // 10.c. Else if internalSlots.[[signDisplay]] is "always", then
            if (x.isPositive() || x.isNaN()) {
                // 10.c.i. If x is positive or x is NaN, let sign be 1.
                sign = 1;
            }
            else {
                // 10.c.ii. Else, let sign be -1.
                sign = -1;
            }
            break;
        case 'exceptZero':
            // 10.d. Else if internalSlots.[[signDisplay]] is "exceptZero", then
            if (x.isZero()) {
                // 10.d.i. If x is 0, let sign be 0.
                sign = 0;
            }
            else if (x.isNegative()) {
                // 10.d.ii. Else if x is negative, let sign be -1.
                sign = -1;
            }
            else {
                // 10.d.iii. Else, let sign be 1.
                sign = 1;
            }
            break;
        default:
            // 10.e. Else,
            (0, utils_1.invariant)(signDisplay === 'negative', 'signDisplay must be "negative"');
            if (x.isNegative() && !x.isZero()) {
                // 10.e.i. If x is negative and x is not 0, let sign be -1.
                sign = -1;
            }
            else {
                // 10.e.ii. Else, let sign be 0.
                sign = 0;
            }
            break;
    }
    // 11. Return ? FormatNumberToParts(numberFormat, x, n, exponent, sign).
    return (0, format_to_parts_1.default)({
        roundedNumber: x,
        formattedString: n,
        exponent: exponent,
        // IMPL: We're returning this for our implementation of formatToParts
        magnitude: magnitude,
        sign: sign,
    }, internalSlots.dataLocaleData, pl, internalSlots);
}
