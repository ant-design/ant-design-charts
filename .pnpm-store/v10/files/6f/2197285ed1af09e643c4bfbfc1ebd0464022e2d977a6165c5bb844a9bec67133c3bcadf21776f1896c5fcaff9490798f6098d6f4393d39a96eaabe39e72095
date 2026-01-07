"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatNumericToString = FormatNumericToString;
var constants_1 = require("../constants");
var utils_1 = require("../utils");
var GetUnsignedRoundingMode_1 = require("./GetUnsignedRoundingMode");
var ToRawFixed_1 = require("./ToRawFixed");
var ToRawPrecision_1 = require("./ToRawPrecision");
/**
 * https://tc39.es/ecma402/#sec-formatnumberstring
 */
function FormatNumericToString(intlObject, _x) {
    var x = _x;
    var sign;
    // -0
    if (x.isZero() && x.isNegative()) {
        sign = 'negative';
        x = constants_1.ZERO;
    }
    else {
        (0, utils_1.invariant)(x.isFinite(), 'NumberFormatDigitInternalSlots value is not finite');
        if (x.lessThan(0)) {
            sign = 'negative';
        }
        else {
            sign = 'positive';
        }
        if (sign === 'negative') {
            x = x.negated();
        }
    }
    var result;
    var roundingType = intlObject.roundingType;
    var unsignedRoundingMode = (0, GetUnsignedRoundingMode_1.GetUnsignedRoundingMode)(intlObject.roundingMode, sign === 'negative');
    switch (roundingType) {
        case 'significantDigits':
            result = (0, ToRawPrecision_1.ToRawPrecision)(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits, unsignedRoundingMode);
            break;
        case 'fractionDigits':
            result = (0, ToRawFixed_1.ToRawFixed)(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits, intlObject.roundingIncrement, unsignedRoundingMode);
            break;
        default:
            var sResult = (0, ToRawPrecision_1.ToRawPrecision)(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits, unsignedRoundingMode);
            var fResult = (0, ToRawFixed_1.ToRawFixed)(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits, intlObject.roundingIncrement, unsignedRoundingMode);
            if (intlObject.roundingType === 'morePrecision') {
                if (sResult.roundingMagnitude <= fResult.roundingMagnitude) {
                    result = sResult;
                }
                else {
                    result = fResult;
                }
            }
            else {
                (0, utils_1.invariant)(intlObject.roundingType === 'lessPrecision', 'Invalid roundingType');
                if (sResult.roundingMagnitude <= fResult.roundingMagnitude) {
                    result = fResult;
                }
                else {
                    result = sResult;
                }
            }
            break;
    }
    x = result.roundedNumber;
    var string = result.formattedString;
    if (intlObject.trailingZeroDisplay === 'stripIfInteger' && x.isInteger()) {
        var i = string.indexOf('.');
        if (i > -1) {
            string = string.slice(0, i);
        }
    }
    var int = result.integerDigitsCount;
    var minInteger = intlObject.minimumIntegerDigits;
    if (int < minInteger) {
        var forwardZeros = (0, utils_1.repeat)('0', minInteger - int);
        string = forwardZeros + string;
    }
    if (sign === 'negative') {
        if (x.isZero()) {
            x = constants_1.NEGATIVE_ZERO;
        }
        else {
            x = x.negated();
        }
    }
    return { roundedNumber: x, formattedString: string };
}
