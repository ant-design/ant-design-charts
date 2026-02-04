"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinPath = void 0;
const identifierRegex = /[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u;
function joinPath(path) {
    if (path.length === 1) {
        return path[0].toString();
    }
    return path.reduce((acc, item) => {
        if (typeof item === 'number') {
            return acc + '[' + item.toString() + ']';
        }
        if (item.includes('"')) {
            return acc + '["' + escapeQuotes(item) + '"]';
        }
        if (!identifierRegex.test(item)) {
            return acc + '["' + item + '"]';
        }
        const separator = acc.length === 0 ? '' : '.';
        return acc + separator + item;
    }, '');
}
exports.joinPath = joinPath;
function escapeQuotes(str) {
    return str.replace(/"/g, '\\"');
}
