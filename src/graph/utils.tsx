import G6, { Graph, IGraph, IG6GraphEvent, INode, IEdge } from '@antv/g6';
import { deepClone } from '../util/utils';
import { MiniMapConfig, RelationGraph } from './types';

const defaultMinimapCfg = {
  show: false,
  size: [150, 100],
  type: 'keyShape',
};

export const getGraphSize = (
  width: number | undefined,
  height: number | undefined,
  container: React.RefObject<HTMLDivElement>,
): number[] => {
  let CANVAS_WIDTH;
  let CANVAS_HEIGHT;
  if (container && container.current) {
    CANVAS_WIDTH = container.current.offsetWidth;
    CANVAS_HEIGHT = container.current.offsetHeight || 500;
  }
  if ((!width && !CANVAS_WIDTH) || (!height && !CANVAS_HEIGHT)) {
    console.warn('请为 Graph 指定 width 与 height！否则将使用默认值 500 * 500');
    return [500, 500];
  }
  return [width || CANVAS_WIDTH || 500, height || CANVAS_HEIGHT || 500];
};

export const processMinimap = (cfg: MiniMapConfig | undefined, graph: Graph) => {
  if (!graph || graph.destroyed) return;
  if (cfg && cfg.show) {
    const curMminimapCfg = Object.assign(defaultMinimapCfg, cfg);
    const minimap = new G6.Minimap({
      ...curMminimapCfg,
    });

    graph.addPlugin(minimap);
    return minimap;
  }
  return null;
};

const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// 同一页面存在多 graph 时需要指定 graphId
export const getGraphId = (graph: { current?: string }) => {
  if (graph.current) {
    return graph.current;
  }
  graph.current = `IndentedTreeGraph-${uuid()}`;
  return graph.current;
};

export const renderGraph = (graph: IGraph, data: any) => {
  const originData = deepClone(data);
  graph.data(originData);
  graph.render();
  graph.fitView();
};

// 事件绑定，兼容历史数据
export const bindEvents = (graph: IGraph, props: RelationGraph, bindNodeClick: boolean = true) => {
  const {
    handleEdgeClick,
    handleEdgeHover,
    handleEdgeUnHover,
    handleNodeClick,
    handleNodeHover,
    handleNodeUnHover,
    handleCanvasClick,
  } = props;
  graph.on('edge:mouseenter', (evt: IG6GraphEvent) => {
    const item = evt.item as IEdge;
    graph.setItemState(item, 'hover', true);
    handleEdgeHover?.(item, graph);
  });
  graph.on('edge:mouseleave', (evt: IG6GraphEvent) => {
    const item = evt.item as IEdge;
    graph.setItemState(item, 'hover', false);
    handleEdgeUnHover?.(item, graph);
  });
  graph.on('edge:click', (evt: IG6GraphEvent) => {
    const item = evt.item as IEdge;
    handleEdgeClick?.(item, graph);
  });
  graph.on('edge:touchstart', (evt: IG6GraphEvent) => {
    const item = evt.item as IEdge;
    handleEdgeClick?.(item, graph);
  });
  graph.on('node:mouseenter', (evt: IG6GraphEvent) => {
    const item = evt.item as INode;
    graph.setItemState(item, 'hover', true);
    handleNodeHover?.(item, graph);
  });
  graph.on('node:mouseleave', (evt: IG6GraphEvent) => {
    const item = evt.item as INode;
    graph.setItemState(item, 'hover', false);
    handleNodeUnHover?.(item, graph);
  });
  if (bindNodeClick) {
    graph.on('node:click', (evt: IG6GraphEvent) => {
      const item = evt.item as INode;
      handleNodeClick?.(item, graph);
    });
  }
  graph.on('canvas:click', () => {
    handleCanvasClick?.(graph);
  });
  graph.on('canvas:touchstart', () => {
    handleCanvasClick?.(graph);
  });
};
