import type { Graph, NodeData } from '@antv/g6';

export interface NodeProps {
  /**
   * Node data
   */
  data: NodeData;
  /**
   * G6 Graph instance
   */
  graph: Graph;
}
