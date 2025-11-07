"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCase = exports.camelCase = void 0;
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
exports.camelCase = camelCase;
/**
 * kebabCase('fooBar');
 * // => 'foo-bar'
 * @param s
 */
function kebabCase(s) {
    return s.replace(/([A-Z])/g, '-$1').toLowerCase();
}
exports.kebabCase = kebabCase;
//# sourceMappingURL=string.js.map