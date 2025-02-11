import type { GraphData, TreeData } from '@antv/g6';
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
}
