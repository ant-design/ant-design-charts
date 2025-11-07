/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [cascade=true]
 *   Whether to drop parent nodes if they had children, but all their children
 *   were filtered out.
 */

import {convert} from 'unist-util-is'

const own = {}.hasOwnProperty

/**
 * Create a new `tree` of copies of all nodes that pass `test`.
 *
 * The tree is walked in *preorder* (NLR), visiting the node itself, then its
 * head, etc.
 *
 * @param tree
 *   Tree to filter.
 * @param options
 *   Configuration (optional).
 * @param test
 *   `unist-util-is` compatible test.
 * @returns
 *   New filtered tree.
 *
 *   `null` is returned if `tree` itself didn’t pass the test, or is cascaded
 *   away.
 */
export const filter =
  /**
   * @type {(
   *  (<Tree extends Node, Check extends Test>(node: Tree, options: Options | null | undefined, test: Check | null | undefined) => import('./complex-types.js').Matches<Tree, Check>) &
   *  (<Tree extends Node, Check extends Test>(node: Tree, test: Check) => import('./complex-types.js').Matches<Tree, Check>) &
   *  (<Tree extends Node>(node: Tree, options?: Options | null | undefined) => Tree)
   * )}
   */
  (
    /**
     * @param {Node} tree
     * @param {Options | Test | null | undefined} [options]
     * @param {Test | null | undefined} [test]
     * @returns {Node | null}
     */
    function (tree, options, test) {
      const is = convert(test || options)
      /** @type {boolean | null | undefined} */
      const cascadeRaw =
        options && typeof options === 'object' && 'cascade' in options
          ? /** @type {boolean | null | undefined} */ (options.cascade)
          : undefined
      const cascade =
        cascadeRaw === undefined || cascadeRaw === null ? true : cascadeRaw

      return preorder(tree)

      /**
       * @param {Node} node
       *   Current node.
       * @param {number | undefined} [index]
       *   Index of `node` in `parent`.
       * @param {Parent | undefined} [parent]
       *   Parent node.
       * @returns {Node | null}
       *   Shallow copy of `node`.
       */
      function preorder(node, index, parent) {
        /** @type {Array<Node>} */
        const children = []

        if (!is(node, index, parent)) return null

        // @ts-expect-error: Looks like a parent.
        if (node.children) {
          let childIndex = -1

          // @ts-expect-error Looks like a parent.
          while (++childIndex < node.children.length) {
            // @ts-expect-error Looks like a parent.
            const result = preorder(node.children[childIndex], childIndex, node)

            if (result) {
              children.push(result)
            }
          }

          // @ts-expect-error Looks like a parent.
          if (cascade && node.children.length > 0 && children.length === 0)
            return null
        }

        // Create a shallow clone, using the new children.
        /** @type {typeof node} */
        // @ts-expect-error all the fields will be copied over.
        const next = {}
        /** @type {string} */
        let key

        for (key in node) {
          if (own.call(node, key)) {
            // @ts-expect-error: Looks like a record.
            next[key] = key === 'children' ? children : node[key]
          }
        }

        return next
      }
    }
  )
