import type { GraphOptions } from '../../types';

export interface FlowGraphOptions extends GraphOptions {
  /**
   * The direction of the FlowGraph.
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
}
