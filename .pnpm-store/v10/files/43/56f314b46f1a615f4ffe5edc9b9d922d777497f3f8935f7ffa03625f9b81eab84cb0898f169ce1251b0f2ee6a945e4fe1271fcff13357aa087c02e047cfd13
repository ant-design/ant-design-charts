"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartitionNumberRangePattern = PartitionNumberRangePattern;
var utils_1 = require("../utils");
var CollapseNumberRange_1 = require("./CollapseNumberRange");
var FormatApproximately_1 = require("./FormatApproximately");
var FormatNumeric_1 = require("./FormatNumeric");
var PartitionNumberPattern_1 = require("./PartitionNumberPattern");
/**
 * https://tc39.es/ecma402/#sec-partitionnumberrangepattern
 */
function PartitionNumberRangePattern(numberFormat, x, y, _a) {
    var getInternalSlots = _a.getInternalSlots;
    // 1. Assert: x and y are both mathematical values.
    (0, utils_1.invariant)(!x.isNaN() && !y.isNaN(), 'Input must be a number', RangeError);
    var internalSlots = getInternalSlots(numberFormat);
    // 3. Let xResult be ? PartitionNumberPattern(numberFormat, x).
    var xResult = (0, PartitionNumberPattern_1.PartitionNumberPattern)(internalSlots, x);
    // 4. Let yResult be ? PartitionNumberPattern(numberFormat, y).
    var yResult = (0, PartitionNumberPattern_1.PartitionNumberPattern)(internalSlots, y);
    if ((0, FormatNumeric_1.FormatNumeric)(internalSlots, x) === (0, FormatNumeric_1.FormatNumeric)(internalSlots, y)) {
        var appxResult = (0, FormatApproximately_1.FormatApproximately)(internalSlots, xResult);
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
    return (0, CollapseNumberRange_1.CollapseNumberRange)(numberFormat, result, { getInternalSlots: getInternalSlots });
}
