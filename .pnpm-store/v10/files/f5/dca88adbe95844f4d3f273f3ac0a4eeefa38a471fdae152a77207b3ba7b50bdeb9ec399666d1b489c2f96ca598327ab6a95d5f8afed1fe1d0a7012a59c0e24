// eslint-disable-next-line @typescript-eslint/unbound-method
const toString = Object.prototype.toString;
/**
 * Checks if an object is an instance of an Array (array or typed array, except those that contain bigint values).
 *
 * @param value - Object to check.
 * @returns True if the object is an array or a typed array.
 */
export function isAnyArray(value) {
    const tag = toString.call(value);
    return tag.endsWith('Array]') && !tag.includes('Big');
}
//# sourceMappingURL=index.js.map