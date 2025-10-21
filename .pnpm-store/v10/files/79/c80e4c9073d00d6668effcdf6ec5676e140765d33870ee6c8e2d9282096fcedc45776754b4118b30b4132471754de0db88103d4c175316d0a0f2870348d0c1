/**
 * https://tc39.es/ecma402/#sec-getstringorbooleanoption
 * @param opts
 * @param prop
 * @param values
 * @param trueValue
 * @param falsyValue
 * @param fallback
 */
import { ToString } from './262';
export function GetStringOrBooleanOption(opts, prop, values, trueValue, falsyValue, fallback) {
    var value = opts[prop];
    if (value === undefined) {
        return fallback;
    }
    if (value === true) {
        return trueValue;
    }
    var valueBoolean = Boolean(value);
    if (valueBoolean === false) {
        return falsyValue;
    }
    value = ToString(value);
    if (value === 'true' || value === 'false') {
        return fallback;
    }
    if ((values || []).indexOf(value) === -1) {
        throw new RangeError("Invalid value ".concat(value));
    }
    return value;
}
