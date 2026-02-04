export function omit(obj, keys) {
    var res = {};
    var innerKeys = Array.isArray(keys) ? keys : [keys];
    for (var key in obj) {
        if (!innerKeys.includes(key)) {
            res[key] = obj[key];
        }
    }
    return res;
}
//# sourceMappingURL=omit.js.map