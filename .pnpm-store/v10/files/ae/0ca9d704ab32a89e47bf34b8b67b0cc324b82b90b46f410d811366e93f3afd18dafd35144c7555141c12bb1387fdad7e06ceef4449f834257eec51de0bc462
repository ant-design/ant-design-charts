/**
 * @typedef {import('hast-util-sanitize').Schema} Schema
 * @typedef {import('hast-util-to-html').Options} ToHtmlOptions
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-to-hast').Handlers} Handlers
 * @typedef {import('unified').Compiler<Root, string>} Compiler
 * @typedef {import('unified').Processor<undefined, undefined, undefined, Root, string>} Processor
 */

/**
 * @typedef ExtraOptionsFields
 *   Extra fields.
 * @property {Readonly<Handlers> | null | undefined} [handlers]
 *   How to turn mdast nodes into hast nodes (optional);
 *   passed to `mdast-util-to-hast`.
 * @property {Readonly<Schema> | boolean | null | undefined} [sanitize]
 *   Sanitize the output, and how (default: `true`).
 *
 * @typedef {ToHtmlOptions & ExtraOptionsFields} Options
 *   Configuration.
 */

import {sanitize} from 'hast-util-sanitize'
import {toHast} from 'mdast-util-to-hast'
import {toHtml} from 'hast-util-to-html'

/** @type {Readonly<Options>} */
const emptyOptions = {}

/**
 * Serialize markdown as HTML.
 *
 * ###### Notes
 *
 * Passing `sanitize: false` is dangerous.
 * It allows arbitrary HTML and does not sanitize elements.
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns {undefined}
 *   Nothing.
 */
export default function remarkHtml(options) {
  /** @type {Processor} */
  // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
  // eslint-disable-next-line unicorn/no-this-assignment
  const self = this
  const {handlers, sanitize: clean, ...toHtmlOptions} = options || emptyOptions
  let allowDangerousHtml = false
  /** @type {Readonly<Schema> | undefined} */
  let schema

  if (typeof clean === 'boolean') {
    allowDangerousHtml = !clean
  } else if (clean) {
    schema = clean
  }

  self.compiler = compiler

  /**
   * @type {Compiler}
   */
  function compiler(tree, file) {
    const hast = toHast(tree, {handlers, allowDangerousHtml})
    const safeHast = allowDangerousHtml ? hast : sanitize(hast, schema)
    const result = toHtml(safeHast, {...toHtmlOptions, allowDangerousHtml})

    if (file.extname) {
      file.extname = '.html'
    }

    // Add an eof eol.
    return tree &&
      tree.type === 'root' &&
      result &&
      /[^\r\n]/.test(result.charAt(result.length - 1))
      ? result + '\n'
      : result
  }
}
