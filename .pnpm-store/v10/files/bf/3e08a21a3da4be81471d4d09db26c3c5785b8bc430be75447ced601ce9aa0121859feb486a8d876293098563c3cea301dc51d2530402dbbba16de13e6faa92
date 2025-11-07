"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipSpaces = skipSpaces;
var is_space_1 = require("./is-space");
/**
 * Points the parser to the next character in the
 * path string every time it encounters any kind of
 * space character.
 */
function skipSpaces(path) {
    var pathValue = path.pathValue, max = path.max;
    while (path.index < max && (0, is_space_1.isSpace)(pathValue.charCodeAt(path.index))) {
        path.index += 1;
    }
}
//# sourceMappingURL=skip-spaces.js.map