"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = groupBy;
function groupBy(source, by) {
    return source.reduce(function (acc, curr) {
        (acc[curr[by]] = acc[curr[by]] || []).push(curr);
        return acc;
    }, {});
}
//# sourceMappingURL=group-by.js.map