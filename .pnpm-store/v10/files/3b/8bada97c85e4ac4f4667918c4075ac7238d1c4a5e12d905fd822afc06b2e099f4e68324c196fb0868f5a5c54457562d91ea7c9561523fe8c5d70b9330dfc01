"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = camelCase;
exports.kebabCase = kebabCase;
/**
 * camelCase('foo-bar');
 * // => 'fooBar'
 * @param s
 */
function camelCase(s) {
    return s.replace(/-(\w)/g, function (_, letter) {
        return letter.toUpperCase();
    });
}
/**
 * kebabCase('fooBar');
 * // => 'foo-bar'
 * @param s
 */
function kebabCase(s) {
    return s.replace(/([A-Z])/g, '-$1').toLowerCase();
}
//# sourceMappingURL=string.js.map