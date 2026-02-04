import reduce from './reduce';
export default (function (obj, keys) {
    return reduce(obj, function (r, curr, key) {
        if (!keys.includes(key)) {
            r[key] = curr;
        }
        return r;
    }, {});
});
//# sourceMappingURL=omit.js.map