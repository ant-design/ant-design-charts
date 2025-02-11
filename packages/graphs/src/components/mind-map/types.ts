import type { GraphData, NodeData, TreeData } from '@antv/g6';
import type { GraphOptions } from '../../types';

export interface MindMapOptions extends Omit<GraphOptions, 'data'> {
  /**
   * The data.
   * It can be either tree data or graph data that conforms to a tree structure.
   */
  data?: GraphData | TreeData;
  /**
   * The default expand level of the mind map. If not set, all nodes will be expanded.
   */
  defaultExpandLevel?: number;
  /**
   * The type of the mind map
   * @default 'default'
   */
  type?: 'default' | 'linear' | 'boxed';
  /**
   * The direction of the mind map.
   * @default 'alternate'
   */
  direction?: 'left' | 'right' | 'alternate';
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
  /**
   * Selects a field from the data to use as the label for the node.
   * If a string is provided, it will select the field as `data[labelField]`.
   * If a function is provided, it will call the function with the data and use the returned value.
   * @default (data) => data.id
   */
  labelField?: string | ((data: NodeData) => string);
}
