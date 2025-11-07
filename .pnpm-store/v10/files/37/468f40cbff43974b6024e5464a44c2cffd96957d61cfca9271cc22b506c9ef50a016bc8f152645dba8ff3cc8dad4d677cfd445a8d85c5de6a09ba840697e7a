var PART_TYPES_TO_COLLAPSE = new Set([
    'unit',
    'exponentMinusSign',
    'minusSign',
    'plusSign',
    'percentSign',
    'exponentSeparator',
    'percent',
    'percentSign',
    'currency',
    'literal',
]);
/**
 * https://tc39.es/ecma402/#sec-collapsenumberrange
 * LDML: https://unicode-org.github.io/cldr/ldml/tr35-numbers.html#collapsing-number-ranges
 */
export function CollapseNumberRange(numberFormat, result, _a) {
    var getInternalSlots = _a.getInternalSlots;
    var internalSlots = getInternalSlots(numberFormat);
    var symbols = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
    var rangeSignRegex = new RegExp("s?[".concat(symbols.rangeSign, "]s?"));
    var rangeSignIndex = result.findIndex(function (r) { return r.type === 'literal' && rangeSignRegex.test(r.value); });
    var prefixSignParts = [];
    for (var i = rangeSignIndex - 1; i >= 0; i--) {
        if (!PART_TYPES_TO_COLLAPSE.has(result[i].type)) {
            break;
        }
        prefixSignParts.unshift(result[i]);
    }
    // Don't collapse if it's a single code point
    if (Array.from(prefixSignParts.map(function (p) { return p.value; }).join('')).length > 1) {
        var newResult = Array.from(result);
        newResult.splice(rangeSignIndex - prefixSignParts.length, prefixSignParts.length);
        return newResult;
    }
    var suffixSignParts = [];
    for (var i = rangeSignIndex + 1; i < result.length; i++) {
        if (!PART_TYPES_TO_COLLAPSE.has(result[i].type)) {
            break;
        }
        suffixSignParts.push(result[i]);
    }
    // Don't collapse if it's a single code point
    if (Array.from(suffixSignParts.map(function (p) { return p.value; }).join('')).length > 1) {
        var newResult = Array.from(result);
        newResult.splice(rangeSignIndex + 1, suffixSignParts.length);
        return newResult;
    }
    return result;
}
