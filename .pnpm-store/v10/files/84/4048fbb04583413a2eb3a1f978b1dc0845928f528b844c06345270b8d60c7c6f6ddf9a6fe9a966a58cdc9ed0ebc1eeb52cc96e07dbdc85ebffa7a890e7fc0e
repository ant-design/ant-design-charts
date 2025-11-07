export function isUndefined (val) {
  return typeof val === 'undefined'
}

export function isNumeric (n) {
  return typeof n === 'number' &&
    !Number.isNaN(n) &&
    Number.isFinite(n)
}

export function isObject (obj) {
  return typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj)
}

export function matchesShape (obj, keys) {
  return keys.every(key => key in obj)
}
