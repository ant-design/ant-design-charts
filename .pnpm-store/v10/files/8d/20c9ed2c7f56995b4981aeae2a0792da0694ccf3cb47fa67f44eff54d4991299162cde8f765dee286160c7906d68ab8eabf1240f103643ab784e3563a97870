import { ErrorCode, FormatError } from 'intl-messageformat';
import { IntlFormatError } from './error';
import { filterProps } from './utils';
var PLURAL_FORMAT_OPTIONS = ['type'];
export function formatPlural(_a, getPluralRules, value, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    if (!Intl.PluralRules) {
        onError(new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
    try {
        return getPluralRules(locale, filteredOptions).select(value);
    }
    catch (e) {
        onError(new IntlFormatError('Error formatting plural.', locale, e));
    }
    return 'other';
}
