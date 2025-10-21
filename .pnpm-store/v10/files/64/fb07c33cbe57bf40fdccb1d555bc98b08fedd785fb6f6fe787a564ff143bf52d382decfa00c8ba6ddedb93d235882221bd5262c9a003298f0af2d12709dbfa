/**
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('vfile-message').VFileMessage} VFileMessage
 */

/**
 * @typedef Statistics
 *   Statistics.
 * @property {number} fatal
 *   Fatal errors (`fatal: true`).
 * @property {number} warn
 *   Warning messages (`fatal: false`).
 * @property {number} info
 *   Informational messages (`fatal: null | undefined`).
 * @property {number} nonfatal
 *   Warning + info.
 * @property {number} total
 *   Nonfatal + fatal.
 *
 * @typedef {'true' | 'false' | 'null'} Field
 *   Fatal field.
 */

/**
 * Get stats for a file, list of files, or list of messages.
 *
 * @param {VFile | VFileMessage | Array<VFile | VFileMessage> | null | undefined} [value]
 *   File, message, or list of files or messages.
 * @returns {Statistics}
 *   Statistics.
 */
export function statistics(value) {
  /** @type {Record<Field, number>} */
  const result = {true: 0, false: 0, null: 0}

  if (value) {
    if (Array.isArray(value)) {
      list(value)
    } else {
      one(value)
    }
  }

  return {
    fatal: result.true,
    nonfatal: result.false + result.null,
    warn: result.false,
    info: result.null,
    total: result.true + result.false + result.null
  }

  /**
   * Count a list.
   *
   * @param {Array<VFile | VFileMessage>} value
   *   List.
   * @returns {void}
   *   Nothing.
   */
  function list(value) {
    let index = -1

    while (++index < value.length) {
      one(value[index])
    }
  }

  /**
   * Count a value.
   *
   * @param {VFile | VFileMessage} value
   *   Value.
   * @returns {void}
   *   Nothing.
   */
  function one(value) {
    if ('messages' in value) return list(value.messages)

    const field = /** @type {Field} */ (
      String(
        value.fatal === undefined || value.fatal === null
          ? null
          : Boolean(value.fatal)
      )
    )

    result[field]++
  }
}
