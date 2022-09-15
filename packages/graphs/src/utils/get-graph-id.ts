import { uuid } from './uuid';
// 同一页面存在多 graph 时需要指定 graphId
export const getGraphId = (graph: { current?: string }, name: string) => {
  if (graph.current) {
    return graph.current;
  }
  graph.current = `${name}-graph-${uuid()}`;
  return graph.current;
};
