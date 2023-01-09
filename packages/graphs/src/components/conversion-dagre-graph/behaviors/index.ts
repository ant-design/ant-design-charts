import type { Graph } from '@antv/g6';
import './custom-hover';
import './custom-click';

const modes = {
  default: ['conv-hover', 'conv-click'],
};

export default (graph: Graph) => {
  Object.keys(modes).forEach((key) => {
    graph.addBehaviors(modes[key], key);
  });
};
