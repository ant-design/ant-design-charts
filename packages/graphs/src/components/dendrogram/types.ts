import type { GraphData, TreeData, NodeData } from '@antv/g6';
import type { GraphOptions } from '../../types';

export interface DendrogramOptions extends Omit<GraphOptions, 'data'> {
  /**
   * The data.
   * It can be either tree data or graph data that conforms to a tree structure.
   */
  data?: GraphData | TreeData;
  /**
   * The default expand level. If not set, all nodes will be expanded.
   */
  defaultExpandLevel?: number;
  /**
   * The direction of the dendrogram.
   * - `'vertical'`: vertical direction (top to bottom).
   * - `'horizontal'`: horizontal direction (left to right).
   * - `'radial'`: radial direction (clockwise).
   * @default 'horizontal'
   */
  direction?: 'vertical' | 'horizontal' | 'radial';
  /**
   * Whether to compact the layout.
   * @default false
   */
  compact?: boolean;
    /**
   * Selects a field from the data to use as the label for the node.
   * If a string is provided, it will select the field as `data[labelField]`.
   * If a function is provided, it will call the function with the data and use the returned value.
   * @default (data) => data.id
   */
  labelField?: string | ((node: NodeData) => string);
}
