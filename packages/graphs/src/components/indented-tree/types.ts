import type { GraphOptions } from '../../types';

export interface IndentedTreeOptions extends GraphOptions {
  /**
   * The type of the mind map
   * @default 'default'
   */
  type?: 'default' | 'linear' | 'boxed';
  /**
   * The direction of the mind map.
   * @default 'right'
   */
  direction?: 'left' | 'right' | 'alternate';
  /**
   * The minimum width of the tree nodes. If the text of a tree node is too short, it will be centered.
   * @default 0
   */
  nodeMinWidth?: number;
  /**
   * The maximum width of the tree nodes. If the text of a tree node is too long, it will be wrapped.
   * @default 300
   */
  nodeMaxWidth?: number;
}
