/**
 * Pass a hast tree through an HTML parser, which will fix nesting, and turn
 * raw nodes into actual nodes.
 *
 * @param {Node} tree
 *   Original hast tree to transform.
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {Node}
 *   Parsed again tree.
 */
export function raw(tree: Node, options?: Options | null | undefined): Node
export type DefaultTreeAdapterMap = import('parse5').DefaultTreeAdapterMap
export type CharacterToken = import('parse5').Token.CharacterToken
export type CommentToken = import('parse5').Token.CommentToken
export type DoctypeToken = import('parse5').Token.DoctypeToken
export type TagToken = import('parse5').Token.TagToken
export type Location = import('parse5').Token.Location
export type ParserOptions =
  import('parse5').ParserOptions<DefaultTreeAdapterMap>
export type VFile = import('vfile').VFile
export type Point = import('unist').Point
export type Root = import('hast').Root
export type Doctype = import('hast').DocType
export type Element = import('hast').Element
export type Text = import('hast').Text
export type Comment = import('hast').Comment
export type Content = import('hast').Content
export type Raw = import('mdast-util-to-hast').Raw
export type Node = Root | Content
export type Stitch = {
  type: 'comment'
  value: {
    stitch: Node
  }
}
/**
 * Configuration.
 */
export type Options = {
  /**
   * List of custom hast node types to pass through (keep).
   *
   * If the passed through nodes have children, those children are expected to
   * be hast again and will be handled.
   */
  passThrough?: Array<string> | null | undefined
  /**
   * Corresponding virtual file representing the input document.
   */
  file?: VFile | null | undefined
}
/**
 * Info passed around about the current state.
 */
export type State = {
  /**
   * Current parser.
   */
  parser: Parser<DefaultTreeAdapterMap>
  /**
   * Add a hast node to the parser.
   */
  handle: (node: Node) => void
  /**
   * Whether there are stitches.
   */
  stitches: boolean
  /**
   * User configuration.
   */
  options: Options
}
/**
 * Transform a stitch.
 *
 * @param {Node} node
 *   unknown node.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {void}
 *   Nothing.
 */
declare function stitch(node: Node, state: State): void
import {Parser} from 'parse5'
export {}
