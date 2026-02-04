import { invariant } from '../utils';
import { CollapseNumberRange } from './CollapseNumberRange';
import { FormatApproximately } from './FormatApproximately';
import { FormatNumeric } from './FormatNumeric';
import { PartitionNumberPattern } from './PartitionNumberPattern';
/**
 * https://tc39.es/ecma402/#sec-partitionnumberrangepattern
 */
export function PartitionNumberRangePattern(numberFormat, x, y, _a) {
    var getInternalSlots = _a.getInternalSlots;
    // 1. Assert: x and y are both mathematical values.
    invariant(!x.isNaN() && !y.isNaN(), 'Input must be a number', RangeError);
    var internalSlots = getInternalSlots(numberFormat);
    // 3. Let xResult be ? PartitionNumberPattern(numberFormat, x).
    var xResult = PartitionNumberPattern(internalSlots, x);
    // 4. Let yResult be ? PartitionNumberPattern(numberFormat, y).
    var yResult = PartitionNumberPattern(internalSlots, y);
    if (FormatNumeric(internalSlots, x) === FormatNumeric(internalSlots, y)) {
        var appxResult = FormatApproximately(internalSlots, xResult);
        appxResult.forEach(function (el) {
            el.source = 'shared';
        });
        return appxResult;
    }
    var result = [];
    xResult.forEach(function (el) {
        el.source = 'startRange';
        result.push(el);
    });
    // 9. Let symbols be internalSlots.[[dataLocaleData]].[[numbers]].[[symbols]][internalSlots.[[numberingSystem]]].
    var rangeSeparator = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem]
        .rangeSign;
    result.push({ type: 'literal', value: rangeSeparator, source: 'shared' });
    yResult.forEach(function (el) {
        el.source = 'endRange';
        result.push(el);
    });
    // 13. Return ? CollapseNumberRange(numberFormat, result).
    return CollapseNumberRange(numberFormat, result, { getInternalSlots: getInternalSlots });
}
