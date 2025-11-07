/**
 * Remove comments (except conditional comments).
 *
 * When configured with `force: true` (default: `false`), conditional comments
 * are also removed.
 *
 * @type {import('unified').Plugin<[Options?] | void[], Root>}
 */
export default function rehypeRemoveComments(
  options?: void | Options | undefined
):
  | void
  | import('unified').Transformer<import('hast').Root, import('hast').Root>
export type Root = import('hast').Root
export type Node = import('unist').Node
export type HastNode = Root | Root['children'][number]
/**
 * Configuration.
 */
export type Options = {
  /**
   * Conditional comments are also removed when configured with `force: true`
   * The default is to leave them.
   */
  removeConditional?: boolean | undefined
}
