import { ResolveLocale } from '@formatjs/intl-localematcher';
import { CanonicalizeLocaleList } from '../CanonicalizeLocaleList';
import { CoerceOptionsToObject } from '../CoerceOptionsToObject';
import { GetOption } from '../GetOption';
import { GetStringOrBooleanOption } from '../GetStringOrBooleanOption';
import { invariant } from '../utils';
import { CurrencyDigits } from './CurrencyDigits';
import { SetNumberFormatDigitOptions } from './SetNumberFormatDigitOptions';
import { SetNumberFormatUnitOptions } from './SetNumberFormatUnitOptions';
/**
 * https://tc39.es/ecma402/#sec-initializenumberformat
 */
export function InitializeNumberFormat(nf, locales, opts, _a) {
    var getInternalSlots = _a.getInternalSlots, localeData = _a.localeData, availableLocales = _a.availableLocales, numberingSystemNames = _a.numberingSystemNames, getDefaultLocale = _a.getDefaultLocale, currencyDigitsData = _a.currencyDigitsData;
    var requestedLocales = CanonicalizeLocaleList(locales);
    var options = CoerceOptionsToObject(opts);
    var opt = Object.create(null);
    var matcher = GetOption(options, 'localeMatcher', 'string', ['lookup', 'best fit'], 'best fit');
    opt.localeMatcher = matcher;
    var numberingSystem = GetOption(options, 'numberingSystem', 'string', undefined, undefined);
    if (numberingSystem !== undefined &&
        numberingSystemNames.indexOf(numberingSystem) < 0) {
        // 8.a. If numberingSystem does not match the Unicode Locale Identifier type nonterminal,
        // throw a RangeError exception.
        throw RangeError("Invalid numberingSystems: ".concat(numberingSystem));
    }
    opt.nu = numberingSystem;
    var r = ResolveLocale(Array.from(availableLocales), requestedLocales, opt, 
    // [[RelevantExtensionKeys]] slot, which is a constant
    ['nu'], localeData, getDefaultLocale);
    var dataLocaleData = localeData[r.dataLocale];
    invariant(!!dataLocaleData, "Missing locale data for ".concat(r.dataLocale));
    var internalSlots = getInternalSlots(nf);
    internalSlots.locale = r.locale;
    internalSlots.dataLocale = r.dataLocale;
    internalSlots.numberingSystem = r.nu;
    internalSlots.dataLocaleData = dataLocaleData;
    SetNumberFormatUnitOptions(internalSlots, options);
    var style = internalSlots.style;
    var notation = GetOption(options, 'notation', 'string', ['standard', 'scientific', 'engineering', 'compact'], 'standard');
    internalSlots.notation = notation;
    var mnfdDefault;
    var mxfdDefault;
    if (style === 'currency' && notation === 'standard') {
        var currency = internalSlots.currency;
        var cDigits = CurrencyDigits(currency, { currencyDigitsData: currencyDigitsData });
        mnfdDefault = cDigits;
        mxfdDefault = cDigits;
    }
    else {
        mnfdDefault = 0;
        mxfdDefault = style === 'percent' ? 0 : 3;
    }
    SetNumberFormatDigitOptions(internalSlots, options, mnfdDefault, mxfdDefault, notation);
    var compactDisplay = GetOption(options, 'compactDisplay', 'string', ['short', 'long'], 'short');
    var defaultUseGrouping = 'auto';
    if (notation === 'compact') {
        internalSlots.compactDisplay = compactDisplay;
        defaultUseGrouping = 'min2';
    }
    var useGrouping = GetStringOrBooleanOption(options, 'useGrouping', ['min2', 'auto', 'always'], 'always', false, defaultUseGrouping);
    internalSlots.useGrouping = useGrouping;
    var signDisplay = GetOption(options, 'signDisplay', 'string', ['auto', 'never', 'always', 'exceptZero', 'negative'], 'auto');
    internalSlots.signDisplay = signDisplay;
    return nf;
}
