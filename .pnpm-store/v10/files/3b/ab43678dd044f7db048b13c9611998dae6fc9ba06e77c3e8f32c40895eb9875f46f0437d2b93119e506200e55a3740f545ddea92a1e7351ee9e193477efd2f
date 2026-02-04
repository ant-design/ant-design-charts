"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDefaultAdaptor = useDefaultAdaptor;
exports.useOverrideAdaptor = useOverrideAdaptor;
exports.isObject = isObject;
exports.mergeData = mergeData;
const util_1 = require("@antv/util");
/**
 * Adaptor return default options for raw options.
 */
function useDefaultAdaptor(adaptor) {
    return (options, ...rest) => (0, util_1.deepMix)({}, adaptor(options, ...rest), options);
}
/**
 * Adaptor return options override raw options.
 */
function useOverrideAdaptor(adaptor) {
    return (options, ...rest) => (0, util_1.deepMix)({}, options, adaptor(options, ...rest));
}
function isObject(d) {
    if (d instanceof Date)
        return false;
    return typeof d === 'object';
}
function mergeData(dataDescriptor, dataValue) {
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