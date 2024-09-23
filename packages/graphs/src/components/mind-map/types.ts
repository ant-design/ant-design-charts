import type { GraphOptions } from '../../types';

export interface MindMapOptions extends GraphOptions {
  /**
   * The type of the mind map
   * @default 'default'
   */
  type?: 'default' | 'linear' | 'boxed';
  /**
   * The mode of the mind map.
   * @default 'alternate'
   */
  mode?: 'left' | 'right' | 'alternate';
  /**
   * The minimum width of the node.
   * @default 0(default) 120(boxed)
   */
  nodeMinWidth?: number;
  /**
   * The maximum width of the node.
   * @default 300
   */
  nodeMaxWidth?: number;
}
