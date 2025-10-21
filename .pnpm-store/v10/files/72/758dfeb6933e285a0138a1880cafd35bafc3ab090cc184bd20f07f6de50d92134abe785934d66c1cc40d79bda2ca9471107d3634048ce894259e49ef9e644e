"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.group = group;
function group(array, keyFunc) {
    var grouped = new Map();
    array.forEach(function (item) {
        var key = keyFunc(item);
        if (!grouped.has(key)) {
            grouped.set(key, []);
        }
        grouped.get(key).push(item);
    });
    return grouped;
}
//# sourceMappingURL=group.js.map