import { getProps, getGraphInstance } from './global';
import { NsGraph } from '../interface';

export const getGraphData = () => {
  const x6Graph = getGraphInstance();
  if (!x6Graph) {
    return;
  }
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

export const onConfigChange = () => {
  const configChange = getProps('onConfigChange');
  if (!configChange || typeof configChange !== 'function') {
    return;
  }
  return configChange(getGraphData());
};
