/**
 * https://tc39.es/ecma402/#sec-formatapproximately
 */
export function FormatApproximately(internalSlots, result) {
    var symbols = internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem];
    var approximatelySign = symbols.approximatelySign;
    result.push({ type: 'approximatelySign', value: approximatelySign });
    return result;
}
