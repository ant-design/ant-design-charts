import G6, { Graph } from '@antv/g6';
import { MiniMapConfig } from './types';

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
};
