"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputeExponent = ComputeExponent;
var tslib_1 = require("tslib");
var decimal_js_1 = tslib_1.__importDefault(require("decimal.js"));
var ComputeExponentForMagnitude_1 = require("./ComputeExponentForMagnitude");
var FormatNumericToString_1 = require("./FormatNumericToString");
/**
 * The abstract operation ComputeExponent computes an exponent (power of ten) by which to scale x
 * according to the number formatting settings. It handles cases such as 999 rounding up to 1000,
 * requiring a different exponent.
 *
 * NOT IN SPEC: it returns [exponent, magnitude].
 */
function ComputeExponent(internalSlots, x) {
    if (x.isZero()) {
        return [0, 0];
    }
    if (x.isNegative()) {
        x = x.negated();
    }
    var magnitude = x.log(10).floor();
    var exponent = (0, ComputeExponentForMagnitude_1.ComputeExponentForMagnitude)(internalSlots, magnitude);
    // Preserve more precision by doing multiplication when exponent is negative.
    x = x.times(decimal_js_1.default.pow(10, -exponent));
    var formatNumberResult = (0, FormatNumericToString_1.FormatNumericToString)(internalSlots, x);
    if (formatNumberResult.roundedNumber.isZero()) {
        return [exponent, magnitude.toNumber()];
    }
    var newMagnitude = formatNumberResult.roundedNumber.log(10).floor();
    if (newMagnitude.eq(magnitude.minus(exponent))) {
        return [exponent, magnitude.toNumber()];
    }
    return [
        (0, ComputeExponentForMagnitude_1.ComputeExponentForMagnitude)(internalSlots, magnitude.plus(1)),
        magnitude.plus(1).toNumber(),
    ];
}
