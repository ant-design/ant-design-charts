import Decimal from 'decimal.js';
import { repeat } from '../utils';
import { ApplyUnsignedRoundingMode } from './ApplyUnsignedRoundingMode';
//IMPL: Setting Decimal configuration
Decimal.set({
    toExpPos: 100,
});
//IMPL: Helper function to calculate raw fixed value
function ToRawFixedFn(n, f) {
    return n.times(Decimal.pow(10, -f));
}
//IMPL: Helper function to find n1 and r1
function findN1R1(x, f, roundingIncrement) {
    var nx = x.times(Decimal.pow(10, f)).floor();
    var n1 = nx.div(roundingIncrement).floor().times(roundingIncrement);
    var r1 = ToRawFixedFn(n1, f);
    return {
        n1: n1,
        r1: r1,
    };
}
//IMPL: Helper function to find n2 and r2
function findN2R2(x, f, roundingIncrement) {
    var nx = x.times(Decimal.pow(10, f)).ceil();
    var n2 = nx.div(roundingIncrement).ceil().times(roundingIncrement);
    var r2 = ToRawFixedFn(n2, f);
    return {
        n2: n2,
        r2: r2,
    };
}
/**
 * https://tc39.es/ecma402/#sec-torawfixed
 * @param x a finite non-negative Number or BigInt
 * @param minFraction an integer between 0 and 20
 * @param maxFraction an integer between 0 and 20
 */
export function ToRawFixed(x, minFraction, maxFraction, roundingIncrement, unsignedRoundingMode) {
    // 1. Let f be maxFraction.
    var f = maxFraction;
    // 2. Let n1 and r1 be the results of performing the maximized rounding of x to f fraction digits.
    var _a = findN1R1(x, f, roundingIncrement), n1 = _a.n1, r1 = _a.r1;
    // 3. Let n2 and r2 be the results of performing the minimized rounding of x to f fraction digits.
    var _b = findN2R2(x, f, roundingIncrement), n2 = _b.n2, r2 = _b.r2;
    // 4. Let r be ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode).
    var r = ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode);
    var n, xFinal;
    var m;
    // 5. If r is equal to r1, then
    if (r.eq(r1)) {
        // a. Let n be n1.
        n = n1;
        // b. Let xFinal be r1.
        xFinal = r1;
    }
    else {
        // 6. Else,
        // a. Let n be n2.
        n = n2;
        // b. Let xFinal be r2.
        xFinal = r2;
    }
    // 7. If n is 0, let m be "0".
    if (n.isZero()) {
        m = '0';
    }
    else {
        // 8. Else, let m be the String representation of n.
        m = n.toString();
    }
    var int;
    // 9. If f is not 0, then
    if (f !== 0) {
        // a. Let k be the length of m.
        var k = m.length;
        // b. If k < f, then
        if (k <= f) {
            // i. Let z be the String value consisting of f + 1 - k occurrences of the character "0".
            var z = repeat('0', f - k + 1);
            // ii. Set m to the string-concatenation of z and m.
            m = z + m;
            // iii. Set k to f + 1.
            k = f + 1;
        }
        // c. Let a be the substring of m from 0 to k - f.
        var a = m.slice(0, k - f);
        // d. Let b be the substring of m from k - f to k.
        var b = m.slice(m.length - f);
        // e. Set m to the string-concatenation of a, ".", and b.
        m = a + '.' + b;
        // f. Let int be the length of a.
        int = a.length;
    }
    else {
        // 10. Else, let int be the length of m.
        int = m.length;
    }
    // 11. Let cut be maxFraction - minFraction.
    var cut = maxFraction - minFraction;
    // 12. Repeat, while cut > 0 and the last character of m is "0",
    while (cut > 0 && m[m.length - 1] === '0') {
        // a. Remove the last character from m.
        m = m.slice(0, m.length - 1);
        // b. Decrease cut by 1.
        cut--;
    }
    // 13. If the last character of m is ".", then
    if (m[m.length - 1] === '\u002e') {
        // a. Remove the last character from m.
        m = m.slice(0, m.length - 1);
    }
    // 14. Return the Record { [[FormattedString]]: m, [[RoundedNumber]]: xFinal, [[IntegerDigitsCount]]: int, [[RoundingMagnitude]]: -f }.
    return {
        formattedString: m,
        roundedNumber: xFinal,
        integerDigitsCount: int,
        roundingMagnitude: -f,
    };
}
