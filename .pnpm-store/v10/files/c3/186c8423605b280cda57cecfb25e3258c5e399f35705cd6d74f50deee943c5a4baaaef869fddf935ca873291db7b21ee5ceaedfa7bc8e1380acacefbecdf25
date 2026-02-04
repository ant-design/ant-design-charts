/**
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('vfile-message').VFileMessage} VFileMessage
 */

/** @type {Record<string, number>} */
const severities = {true: 2, false: 1, null: 0, undefined: 0}

/**
 * Sort messages in the given vfile.
 *
 * @template {VFile} File
 *   File type.
 * @param {File} file
 *   File to sort.
 * @returns {File}
 *   Sorted file.
 */
// To do: next major: don’t return `file`.
export function sort(file) {
  file.messages.sort(comparator)
  return file
}

/**
 * Compare a message.
 *
 * @param {VFileMessage} a
 *   Left message.
 * @param {VFileMessage} b
 *   Right message.
 * @returns {number}
 *   Order.
 */
function comparator(a, b) {
  return (
    check(a, b, 'line') ||
    check(a, b, 'column') ||
    severities[String(b.fatal)] - severities[String(a.fatal)] ||
    compare(a, b, 'source') ||
    compare(a, b, 'ruleId') ||
    compare(a, b, 'reason') ||
    0
  )
}

/**
 * Compare a numeric field.
 *
 * @param {VFileMessage} a
 *   Left message.
 * @param {VFileMessage} b
 *   Right message.
 * @param {'column' | 'line'} field
 *   Numeric field.
 * @returns {number}
 *   Order.
 */
function check(a, b, field) {
  return (a[field] || 0) - (b[field] || 0)
}

/**
 * @param {VFileMessage} a
 *   Left message.
 * @param {VFileMessage} b
 *   Right message.
 * @param {'reason' | 'ruleId' | 'source'} field
 *   String field.
 * @returns {number}
 *   Order.
 */
function compare(a, b, field) {
  return String(a[field] || '').localeCompare(b[field] || '')
}
