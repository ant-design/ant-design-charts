/**
 * @typedef {import('mdast').Root} Root
 *
 * @typedef {import('mdast-util-directive')} DoNotTouchAsThisImportIncludesDirectivesInTree
 */

import {directive} from 'micromark-extension-directive'
import {directiveFromMarkdown, directiveToMarkdown} from 'mdast-util-directive'

/**
 * Plugin to support the generic directives proposal (`:cite[smith04]`,
 * `::youtube[Video of a cat in a box]{v=01ab2cd3efg}`, and such).
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
export default function remarkDirective() {
  const data = this.data()

  add('micromarkExtensions', directive())
  add('fromMarkdownExtensions', directiveFromMarkdown)
  add('toMarkdownExtensions', directiveToMarkdown)

  /**
   * @param {string} field
   * @param {unknown} value
   */
  function add(field, value) {
    const list = /** @type {unknown[]} */ (
      // Other extensions
      /* c8 ignore next 2 */
      data[field] ? data[field] : (data[field] = [])
    )

    list.push(value)
  }
}
