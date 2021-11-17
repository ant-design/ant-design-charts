/** 向 graph 原型上挂在一系列方法 */
import { getGraphData } from '../util';
import { IFlowchartGraph as IGraph } from '../interface';

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

  if (x6Graph.__proto__) {
    x6Graph.__proto__.updateNodeKeyById = updateNodeKeyById;
    x6Graph.__proto__.getGraphData = getGraphData;
  }

  return x6Graph;
};
