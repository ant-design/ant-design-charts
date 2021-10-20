/** 向 graph 原型上挂在一系列方法 */
import { Graph } from '@antv/x6';

export interface IGraph extends Graph {
  __proto__?: Record<string, any>;
  [key: string]: unknown;
}

export const appendUtils = (graph: IGraph) => {
  const ggraph = graph;
  /** 更新节点指定数据
   * @param {id} string 节点 id
   * @param {key} string 需要更新的字段
   * @param {data} object 更新内容
   */
  const updateNodeKeyById = (id: string, key: string, data: object) => {
    const currentNode = ggraph.getCellById(id);
    if (currentNode) {
      ggraph.getCellById(id).prop(key, {
        ...currentNode[key],
        ...data,
      });
    }
  };

  if (ggraph.__proto__) {
    ggraph.__proto__.updateNodeKeyById = updateNodeKeyById;
  }

  return ggraph;
};
