import { filterProps } from './utils';
import { ErrorCode, FormatError } from 'intl-messageformat';
import { IntlFormatError } from './error';
var DISPLAY_NAMES_OPTONS = [
    'style',
    'type',
    'fallback',
    'languageDisplay',
];
export function formatDisplayName(_a, getDisplayNames, value, options) {
    var locale = _a.locale, onError = _a.onError;
    var DisplayNames = Intl.DisplayNames;
    if (!DisplayNames) {
        onError(new FormatError("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = filterProps(options, DISPLAY_NAMES_OPTONS);
    try {
        return getDisplayNames(locale, filteredOptions).of(value);
    }
    catch (e) {
        onError(new IntlFormatError('Error formatting display name.', locale, e));
    }
}
