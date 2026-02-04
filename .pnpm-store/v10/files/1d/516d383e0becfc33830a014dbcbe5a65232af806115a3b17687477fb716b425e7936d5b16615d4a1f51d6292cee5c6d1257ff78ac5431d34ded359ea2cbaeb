export function toUppercaseFirstLetter(string) {
    return string.toString().charAt(0).toUpperCase() + string.toString().slice(1);
}
export function toLowercaseFirstLetter(string) {
    return string.toString().charAt(0).toLowerCase() + string.toString().slice(1);
}
export function addPrefix(string, prefix) {
    return "".concat(prefix).concat(toUppercaseFirstLetter(string));
}
export function removePrefix(string, prefix, lowercaseFirstLetter) {
    var _a;
    if (lowercaseFirstLetter === void 0) { lowercaseFirstLetter = true; }
    var inferPrefix = prefix || ((_a = string.match(/^([a-z][a-z0-9]+)/)) === null || _a === void 0 ? void 0 : _a[0]) || '';
    var withoutPrefix = string.replace(new RegExp("^(".concat(inferPrefix, ")")), '');
    return lowercaseFirstLetter ? toLowercaseFirstLetter(withoutPrefix) : withoutPrefix;
}
//# sourceMappingURL=string.js.map