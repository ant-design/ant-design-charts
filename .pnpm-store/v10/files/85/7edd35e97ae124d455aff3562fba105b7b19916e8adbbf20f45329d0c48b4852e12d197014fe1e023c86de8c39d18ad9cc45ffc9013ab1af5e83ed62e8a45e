/**
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('vfile-message').VFileMessage} VFileMessage
 * @typedef {import('vfile-statistics').Statistics} Statistics
 */

/**
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [color]
 *   Use ANSI colors in report.
 *   The default behavior in Node.js is the check if color is supported.
 * @property {boolean | null | undefined} [verbose=false]
 *   Show message `note`s.
 *   Notes are optional, additional, long descriptions.
 * @property {boolean | null | undefined} [quiet=false]
 *   Do not show files without messages.
 * @property {boolean | null | undefined} [silent=false]
 *   Show errors only, this hides info and warning messages, and sets
 *   `quiet: true`.
 * @property {string | null | undefined} [defaultName='<stdin>']
 *   Label to use for files without file path.
 *   If one file and no `defaultName` is given, no name will show up in the
 *   report.
 */

/**
 * @typedef MessageRow
 *   Message.
 * @property {string} place
 *   Serialized positional info.
 * @property {string} label
 *   Kind of message.
 * @property {string} reason
 *   Reason.
 * @property {string} ruleId
 *   Rule.
 * @property {string} source
 *   Source.
 *
 * @typedef {keyof MessageRow} MessageColumn
 *
 * @typedef FileRow
 *   File header row.
 * @property {'file'} type
 *   Kind.
 * @property {VFile} file
 *   Virtual file.
 * @property {Statistics} stats
 *   Statistics.
 *
 * @typedef {Record<MessageColumn, number>} Sizes
 *   Sizes for message columns.
 *
 * @typedef Info
 *   Result.
 * @property {Array<FileRow | MessageRow>} rows
 *   Rows.
 * @property {Statistics} stats
 *   Total statistics.
 * @property {Sizes} sizes
 *   Sizes for message columns.
 */

import width from 'string-width'
import {stringifyPosition} from 'unist-util-stringify-position'
import {statistics} from 'vfile-statistics'
import {sort} from 'vfile-sort'
import {color} from './color.js'
import {platform} from './platform.js'

const own = {}.hasOwnProperty

// `log-symbols` without chalk, ignored for Windows:
/* c8 ignore next 4 */
const chars =
  platform === 'win32' ? {error: '×', warning: '‼'} : {error: '✖', warning: '⚠'}

const labels = {
  true: 'error',
  false: 'warning',
  null: 'info',
  undefined: 'info'
}

/**
 * Create a report from an error, one file, or multiple files.
 *
 * @param {Error | VFile | Array<VFile> | null | undefined} [files]
 *   Files or error to report.
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {string}
 *   Report.
 */
export function reporter(files, options) {
  if (!files) {
    return ''
  }

  // Error.
  if ('name' in files && 'message' in files) {
    return String(files.stack || files)
  }

  const options_ = options || {}

  // One file.
  if (Array.isArray(files)) {
    return format(transform(files, options_), false, options_)
  }

  return format(transform([files], options_), true, options_)
}

/**
 * Parse a list of messages.
 *
 * @param {Array<VFile>} files
 *   List of files.
 * @param {Options} options
 *   Options.
 * @returns {Info}
 *   Rows.
 */
function transform(files, options) {
  /** @type {Array<FileRow | MessageRow>} */
  const rows = []
  /** @type {Array<VFileMessage>} */
  const all = []
  /** @type {Sizes} */
  const sizes = {place: 0, label: 0, reason: 0, ruleId: 0, source: 0}
  let index = -1

  while (++index < files.length) {
    // @ts-expect-error it works fine.
    const messages = sort({messages: [...files[index].messages]}).messages
    /** @type {Array<MessageRow>} */
    const messageRows = []
    let offset = -1

    while (++offset < messages.length) {
      const message = messages[offset]

      if (!options.silent || message.fatal) {
        all.push(message)

        const row = {
          place: stringifyPosition(
            message.position
              ? message.position.end.line && message.position.end.column
                ? message.position
                : message.position.start
              : undefined
          ),
          label: labels[/** @type {keyof labels} */ (String(message.fatal))],
          reason:
            (message.stack || message.message) +
            (options.verbose && message.note ? '\n' + message.note : ''),
          ruleId: message.ruleId || '',
          source: message.source || ''
        }

        /** @type {MessageColumn} */
        let key

        for (key in row) {
          // eslint-disable-next-line max-depth
          if (own.call(row, key)) {
            sizes[key] = Math.max(size(row[key]), sizes[key] || 0)
          }
        }

        messageRows.push(row)
      }
    }

    if ((!options.quiet && !options.silent) || messageRows.length > 0) {
      rows.push(
        {type: 'file', file: files[index], stats: statistics(messages)},
        ...messageRows
      )
    }
  }

  return {rows, stats: statistics(all), sizes}
}

/**
 * @param {Info} map
 *   Rows.
 * @param {boolean} one
 *   Whether the input was explicitly one file (not an array).
 * @param {Options} options
 *   Configuration.
 * @returns {string}
 *   Report.
 */
// eslint-disable-next-line complexity
function format(map, one, options) {
  /** @type {boolean} */
  const enabled =
    options.color === undefined || options.color === null
      ? color
      : options.color
  /** @type {Array<string>} */
  const lines = []
  let index = -1

  while (++index < map.rows.length) {
    const row = map.rows[index]

    if ('type' in row) {
      const stats = row.stats
      let line = row.file.history[0] || options.defaultName || '<stdin>'

      line =
        one && !options.defaultName && !row.file.history[0]
          ? ''
          : (enabled
              ? '\u001B[4m' /* Underline. */ +
                (stats.fatal
                  ? '\u001B[31m' /* Red. */
                  : stats.total
                  ? '\u001B[33m' /* Yellow. */
                  : '\u001B[32m') /* Green. */ +
                line +
                '\u001B[39m\u001B[24m'
              : line) +
            (row.file.stored && row.file.path !== row.file.history[0]
              ? ' > ' + row.file.path
              : '')

      if (!stats.total) {
        line =
          (line ? line + ': ' : '') +
          (row.file.stored
            ? enabled
              ? '\u001B[33mwritten\u001B[39m' /* Yellow. */
              : 'written'
            : 'no issues found')
      }

      if (line) {
        if (index && !('type' in map.rows[index - 1])) {
          lines.push('')
        }

        lines.push(line)
      }
    } else {
      let reason = row.reason
      const match = /\r?\n|\r/.exec(reason)
      /** @type {string} */
      let rest

      if (match) {
        rest = reason.slice(match.index)
        reason = reason.slice(0, match.index)
      } else {
        rest = ''
      }

      lines.push(
        (
          '  ' +
          ' '.repeat(map.sizes.place - size(row.place)) +
          row.place +
          '  ' +
          (enabled
            ? (row.label === 'error'
                ? '\u001B[31m' /* Red. */
                : '\u001B[33m') /* Yellow. */ +
              row.label +
              '\u001B[39m'
            : row.label) +
          ' '.repeat(map.sizes.label - size(row.label)) +
          '  ' +
          reason +
          ' '.repeat(map.sizes.reason - size(reason)) +
          '  ' +
          row.ruleId +
          ' '.repeat(map.sizes.ruleId - size(row.ruleId)) +
          '  ' +
          (row.source || '')
        ).replace(/ +$/, '') + rest
      )
    }
  }

  const stats = map.stats

  if (stats.fatal || stats.warn) {
    let line = ''

    if (stats.fatal) {
      line =
        (enabled
          ? '\u001B[31m' /* Red. */ + chars.error + '\u001B[39m'
          : chars.error) +
        ' ' +
        stats.fatal +
        ' ' +
        (labels.true + (stats.fatal === 1 ? '' : 's'))
    }

    if (stats.warn) {
      line =
        (line ? line + ', ' : '') +
        (enabled
          ? '\u001B[33m' /* Yellow. */ + chars.warning + '\u001B[39m'
          : chars.warning) +
        ' ' +
        stats.warn +
        ' ' +
        (labels.false + (stats.warn === 1 ? '' : 's'))
    }

    if (stats.total !== stats.fatal && stats.total !== stats.warn) {
      line = stats.total + ' messages (' + line + ')'
    }

    lines.push('', line)
  }

  return lines.join('\n')
}

/**
 * Get the length of the first line of `value`, ignoring ANSI sequences.
 *
 * @param {string} value
 *   Message.
 * @returns {number}
 *   Width.
 */
function size(value) {
  const match = /\r?\n|\r/.exec(value)
  return width(match ? value.slice(0, match.index) : value)
}
