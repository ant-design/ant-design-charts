import { Graph } from '@antv/g6';

export const globalInstance = {};

export const setGlobalInstance = (instanceId: string, graph: Graph) => {
  globalInstance[instanceId] = graph;
};
export const getGlobalInstance = (instanceId: string) => {
  return globalInstance[instanceId];
};
