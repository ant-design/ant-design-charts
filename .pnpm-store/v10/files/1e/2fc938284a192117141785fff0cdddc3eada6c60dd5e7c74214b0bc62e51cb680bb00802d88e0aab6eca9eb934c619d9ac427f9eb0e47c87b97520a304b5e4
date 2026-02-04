import { LookupSupportedLocales } from '@formatjs/intl-localematcher';
import { ToObject } from './262';
import { GetOption } from './GetOption';
/**
 * https://tc39.es/ecma402/#sec-supportedlocales
 * @param availableLocales
 * @param requestedLocales
 * @param options
 */
export function SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = 'best fit';
    if (options !== undefined) {
        options = ToObject(options);
        matcher = GetOption(options, 'localeMatcher', 'string', ['lookup', 'best fit'], 'best fit');
    }
    if (matcher === 'best fit') {
        return LookupSupportedLocales(Array.from(availableLocales), requestedLocales);
    }
    return LookupSupportedLocales(Array.from(availableLocales), requestedLocales);
}
