export function group(array, keyFunc) {
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