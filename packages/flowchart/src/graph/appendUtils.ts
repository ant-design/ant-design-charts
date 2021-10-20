/** 向 graph 原型上挂在一系列方法 */
import { Graph } from '@antv/x6';
import { NsGraphCmd, XFlowGraphCommands, NsGraph } from '@ali/xflow';

export interface IGraph extends Graph {
  __proto__?: Record<string, any>;
  [key: string]: unknown;
}

export const appendUtils = (graph: IGraph) => {
  const x6Graph = graph;
  /** 更新节点指定数据
   * @param {id} string 节点 id
   * @param {key} string 需要更新的字段
   * @param {data} object 更新内容
   */
  const updateNodeKeyById = (id: string, key: string, data: object) => {
    const currentNode = x6Graph.getCellById(id);
    if (currentNode) {
      x6Graph.getCellById(id).prop(key, {
        ...currentNode[key],
        ...data,
      });
    }
  };

  const getGraphData = () => {
    const x6Nodes = x6Graph.getNodes();
    const x6Edges = x6Graph.getEdges();
    const nodes = x6Nodes.map((node) => {
      const data = node.getData<NsGraph.INodeConfig>();
      const position = node.position();
      const size = node.size();
      return {
        ...data,
        ...position,
        ...size,
      };
    });

    const edges = x6Edges.map((edge) => {
      const data = edge.getData<NsGraph.IEdgeConfig>();
      return {
        ...data,
      };
    });
    const graphData = { nodes, edges };

    return graphData;
  };

  if (x6Graph.__proto__) {
    x6Graph.__proto__.updateNodeKeyById = updateNodeKeyById;
    x6Graph.__proto__.getGraphData = getGraphData;
  }

  return x6Graph;
};
