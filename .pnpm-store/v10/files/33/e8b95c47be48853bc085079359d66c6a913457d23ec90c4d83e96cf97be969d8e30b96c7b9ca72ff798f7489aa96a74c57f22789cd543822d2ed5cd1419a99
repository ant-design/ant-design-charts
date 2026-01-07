"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetNumberFormatUnitOptions = SetNumberFormatUnitOptions;
var GetOption_1 = require("../GetOption");
var IsWellFormedCurrencyCode_1 = require("../IsWellFormedCurrencyCode");
var IsWellFormedUnitIdentifier_1 = require("../IsWellFormedUnitIdentifier");
var utils_1 = require("../utils");
/**
 * https://tc39.es/ecma402/#sec-setnumberformatunitoptions
 */
function SetNumberFormatUnitOptions(internalSlots, options) {
    if (options === void 0) { options = Object.create(null); }
    // 1. Let style be ? GetOption(options, "style", "string", « "decimal", "percent", "currency", "unit" », "decimal").
    var style = (0, GetOption_1.GetOption)(options, 'style', 'string', ['decimal', 'percent', 'currency', 'unit'], 'decimal');
    // 2. Set internalSlots.[[Style]] to style.
    internalSlots.style = style;
    // 3. Let currency be ? GetOption(options, "currency", "string", undefined, undefined).
    var currency = (0, GetOption_1.GetOption)(options, 'currency', 'string', undefined, undefined);
    // 4. If currency is not undefined, then
    // a. If the result of IsWellFormedCurrencyCode(currency) is false, throw a RangeError exception.
    (0, utils_1.invariant)(currency === undefined || (0, IsWellFormedCurrencyCode_1.IsWellFormedCurrencyCode)(currency), 'Malformed currency code', RangeError);
    // 5. If style is "currency" and currency is undefined, throw a TypeError exception.
    (0, utils_1.invariant)(style !== 'currency' || currency !== undefined, 'currency cannot be undefined', TypeError);
    // 6. Let currencyDisplay be ? GetOption(options, "currencyDisplay", "string", « "code", "symbol", "narrowSymbol", "name" », "symbol").
    var currencyDisplay = (0, GetOption_1.GetOption)(options, 'currencyDisplay', 'string', ['code', 'symbol', 'narrowSymbol', 'name'], 'symbol');
    // 7. Let currencySign be ? GetOption(options, "currencySign", "string", « "standard", "accounting" », "standard").
    var currencySign = (0, GetOption_1.GetOption)(options, 'currencySign', 'string', ['standard', 'accounting'], 'standard');
    // 8. Let unit be ? GetOption(options, "unit", "string", undefined, undefined).
    var unit = (0, GetOption_1.GetOption)(options, 'unit', 'string', undefined, undefined);
    // 9. If unit is not undefined, then
    // a. If the result of IsWellFormedUnitIdentifier(unit) is false, throw a RangeError exception.
    (0, utils_1.invariant)(unit === undefined || (0, IsWellFormedUnitIdentifier_1.IsWellFormedUnitIdentifier)(unit), 'Invalid unit argument for Intl.NumberFormat()', RangeError);
    // 10. If style is "unit" and unit is undefined, throw a TypeError exception.
    (0, utils_1.invariant)(style !== 'unit' || unit !== undefined, 'unit cannot be undefined', TypeError);
    // 11. Let unitDisplay be ? GetOption(options, "unitDisplay", "string", « "short", "narrow", "long" », "short").
    var unitDisplay = (0, GetOption_1.GetOption)(options, 'unitDisplay', 'string', ['short', 'narrow', 'long'], 'short');
    // 12. If style is "currency", then
    if (style === 'currency') {
        // a. Set internalSlots.[[Currency]] to the result of converting currency to upper case as specified in 6.1.
        internalSlots.currency = currency.toUpperCase();
        // b. Set internalSlots.[[CurrencyDisplay]] to currencyDisplay.
        internalSlots.currencyDisplay = currencyDisplay;
        // c. Set internalSlots.[[CurrencySign]] to currencySign.
        internalSlots.currencySign = currencySign;
    }
    // 13. If style is "unit", then
    if (style === 'unit') {
        // a. Set internalSlots.[[Unit]] to unit.
        internalSlots.unit = unit;
        // b. Set internalSlots.[[UnitDisplay]] to unitDisplay.
        internalSlots.unitDisplay = unitDisplay;
    }
}
