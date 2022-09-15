import G6 from '@antv/g6';
import { defaultMinimapCfg } from '../constants';
import { MiniMapConfig, Graph } from '../interface';
const grapgMinmapMaps = {};

export const processMinimap = (cfg: MiniMapConfig | undefined = {}, graph: Graph): void => {
  const graphId = graph?.get('id');
  if (!graph || graph.destroyed) {
    grapgMinmapMaps[graphId] = null;
    return;
  }
  if ((!cfg || !cfg.show) && grapgMinmapMaps[graphId]) {
    const [pluginMinimap] = graph.get('plugins');
    if (pluginMinimap) {
      graph.removePlugin(pluginMinimap);
    }
    grapgMinmapMaps[graphId] = null;
  }
  if (cfg.show && !grapgMinmapMaps[graphId]) {
    const curMminimapCfg = Object.assign(defaultMinimapCfg, cfg);
    const minimap = new G6.Minimap({
      ...curMminimapCfg,
      id: graphId,
    });

    graph.addPlugin(minimap);
    grapgMinmapMaps[graphId] = minimap;
  }
};
