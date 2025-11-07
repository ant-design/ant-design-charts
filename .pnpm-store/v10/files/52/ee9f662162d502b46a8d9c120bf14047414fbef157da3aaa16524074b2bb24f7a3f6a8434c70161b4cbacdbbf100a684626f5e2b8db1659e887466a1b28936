"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnyArray = void 0;
// eslint-disable-next-line @typescript-eslint/unbound-method
const toString = Object.prototype.toString;
/**
 * Checks if an object is an instance of an Array (array or typed array, except those that contain bigint values).
 *
 * @param value - Object to check.
 * @returns True if the object is an array or a typed array.
 */
function isAnyArray(value) {
    const tag = toString.call(value);
    return tag.endsWith('Array]') && !tag.includes('Big');
}
exports.isAnyArray = isAnyArray;
//# sourceMappingURL=index.js.map