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
export const filter: (<
  Tree extends import('unist').Node<import('unist').Data>,
  Check extends import('unist-util-is').Test
>(
  node: Tree,
  options: Options | null | undefined,
  test: Check | null | undefined
) => import('./complex-types.js').Matches<Tree, Check>) &
  (<
    Tree_1 extends import('unist').Node<import('unist').Data>,
    Check_1 extends import('unist-util-is').Test
  >(
    node: Tree_1,
    test: Check_1
  ) => import('./complex-types.js').Matches<Tree_1, Check_1>) &
  (<Tree_2 extends import('unist').Node<import('unist').Data>>(
    node: Tree_2,
    options?: Options | null | undefined
  ) => Tree_2)
export type Node = import('unist').Node
export type Parent = import('unist').Parent
export type Test = import('unist-util-is').Test
/**
 * Configuration (optional).
 */
export type Options = {
  /**
   * Whether to drop parent nodes if they had children, but all their children
   * were filtered out.
   */
  cascade?: boolean | null | undefined
}
