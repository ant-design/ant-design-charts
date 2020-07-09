import G6 from '@antv/g6';
import { MiniMapConfig } from './types';
import { IGraph } from '@antv/g6/lib/interface/graph';


const defaultMinimapCfg = {
    show: false,
    size: [150, 100],
    type: 'keyShape'
}

export const getGraphSize = (width: number | undefined, height: number | undefined, container: React.MutableRefObject<null>) => {
    let CANVAS_WIDTH, CANVAS_HEIGHT;
    if (container && container.current) {
      CANVAS_WIDTH = container.current.offsetWidth;
      CANVAS_HEIGHT = container.current.offsetHeight || 500;
    }
    if ((!width && !CANVAS_WIDTH) || (!height && !CANVAS_HEIGHT)) {
      console.warn('请为 Graph 指定 width 与 height！否则将使用默认值 500 * 500');
      return [500, 500];
    }
    return [width || CANVAS_WIDTH, height || CANVAS_HEIGHT];
}

export const processMinimap = (cfg: MiniMapConfig | undefined, graph: IGraph) => {
    if (cfg && cfg.show) {
        const curMminimapCfg = Object.assign(defaultMinimapCfg, cfg);
        const minimap = new G6.Minimap({
          ...curMminimapCfg
        })
  
        graph.addPlugin(minimap)
      }
}