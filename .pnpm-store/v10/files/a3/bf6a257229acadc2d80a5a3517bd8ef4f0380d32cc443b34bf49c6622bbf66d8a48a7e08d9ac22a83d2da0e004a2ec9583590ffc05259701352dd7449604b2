// eslint-disable-next-line @typescript-eslint/unbound-method
const toString = Object.prototype.toString;

export type AnyArray =
  | any[] // eslint-disable-line @typescript-eslint/no-explicit-any
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

/**
 * Checks if an object is an instance of an Array (array or typed array, except those that contain bigint values).
 *
 * @param value - Object to check.
 * @returns True if the object is an array or a typed array.
 */
export function isAnyArray(value: unknown): value is AnyArray {
  const tag = toString.call(value);
  return tag.endsWith('Array]') && !tag.includes('Big');
}
