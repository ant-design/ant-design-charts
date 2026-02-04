/**
 * Plugin to support the generic directives proposal (`:cite[smith04]`,
 * `::youtube[Video of a cat in a box]{v=01ab2cd3efg}`, and such).
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
export default function remarkDirective():
  | void
  | import('unified').Transformer<import('mdast').Root, import('mdast').Root>
export type Root = import('mdast').Root
export type DoNotTouchAsThisImportIncludesDirectivesInTree =
  typeof import('mdast-util-directive')
