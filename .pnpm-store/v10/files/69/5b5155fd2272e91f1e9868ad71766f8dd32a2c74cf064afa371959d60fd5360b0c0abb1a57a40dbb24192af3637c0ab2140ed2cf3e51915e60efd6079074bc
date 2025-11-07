/**
 * @fileoverview
 *   Remove comments (except conditional comments).
 *
 *   When configured with `force: true` (default: `false`), conditional comments
 *   are also removed.
 * @example
 *   <!--Hello-->
 *   <!--[if IE 6]>OK<![endif]-->
 */

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('unist').Node} Node
 * @typedef {Root|Root['children'][number]} HastNode
 *
 * @typedef Options
 *   Configuration.
 * @property {boolean} [removeConditional=false]
 *   Conditional comments are also removed when configured with `force: true`
 *   The default is to leave them.
 */

import {filter} from 'unist-util-filter'
import {isConditionalComment} from 'hast-util-is-conditional-comment'

/**
 * Remove comments (except conditional comments).
 *
 * When configured with `force: true` (default: `false`), conditional comments
 * are also removed.
 *
 * @type {import('unified').Plugin<[Options?] | void[], Root>}
 */
export default function rehypeRemoveComments(options = {}) {
  const force = options.removeConditional

  return (tree) =>
    // `undefined` is never returned because we don’t remove nodes (but TS
    // doesn’t know it.)
    /* c8 ignore next */
    filter(tree, {cascade: false}, force ? hard : soft) || undefined
}

/**
 * @param {Node} node
 * @returns {boolean}
 */
function soft(node) {
  const x = /** @type {HastNode} */ (node)
  return hard(x) || isConditionalComment(x)
}

/**
 * @param {Node} node
 * @returns {boolean}
 */
function hard(node) {
  const x = /** @type {HastNode} */ (node)
  return x.type !== 'comment'
}
