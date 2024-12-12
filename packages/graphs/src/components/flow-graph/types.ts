import type { NodeData } from '@antv/g6';
import type { GraphOptions } from '../../types';

export interface FlowGraphOptions extends GraphOptions {
  /**
   * The direction of the FlowGraph.
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Selects a field from the data to use as the label for the node.
   * If a string is provided, it will select the field as `data[labelField]`.
   * If a function is provided, it will call the function with the data and use the returned value.
   * @default (data) => data.id
   */
  labelField?: string | ((node: NodeData) => string);
}
