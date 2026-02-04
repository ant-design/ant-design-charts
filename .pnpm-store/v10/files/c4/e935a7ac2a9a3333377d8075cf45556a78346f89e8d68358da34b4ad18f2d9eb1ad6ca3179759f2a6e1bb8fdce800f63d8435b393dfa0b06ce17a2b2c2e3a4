"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = uniq;
function uniq(arr, cache) {
    if (cache === void 0) { cache = new Map(); }
    var r = [];
    if (Array.isArray(arr)) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var item = arr[i];
            // 加一个 cache，提升性能
            if (!cache.has(item)) {
                r.push(item);
                cache.set(item, true);
            }
        }
    }
    return r;
}
//# sourceMappingURL=uniq.js.map