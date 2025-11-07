var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { deepMix } from '@antv/util';
/**
 * Adaptor return default options for raw options.
 */
export function useDefaultAdaptor(adaptor) {
    return (options, ...rest) => deepMix({}, adaptor(options, ...rest), options);
}
/**
 * Adaptor return options override raw options.
 */
export function useOverrideAdaptor(adaptor) {
    return (options, ...rest) => deepMix({}, options, adaptor(options, ...rest));
}
export function isObject(d) {
    if (d instanceof Date)
        return false;
    return typeof d === 'object';
}
export function mergeData(dataDescriptor, dataValue) {
    if (!dataDescriptor)
        return dataValue;
    if (Array.isArray(dataDescriptor))
        return dataDescriptor;
    if (isObject(dataDescriptor)) {
        const { value = dataValue } = dataDescriptor, rest = __rest(dataDescriptor, ["value"]);
        return Object.assign(Object.assign({}, rest), { value });
    }
    return dataDescriptor;
}
//# sourceMappingURL=utils.js.map