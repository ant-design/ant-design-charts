import G6 from '@antv/g6';
import { defaultMinimapCfg } from '../constants';
import { MiniMapConfig, Graph } from '../interface';

export const processMinimap = (cfg: MiniMapConfig | undefined = {}, graph: Graph): void => {
  if (!graph || graph.destroyed) {
    return;
  }
  const [pluginMinimap] = graph.get('plugins').filter((plugin) => plugin.get('name') === 'minimap');
  if (pluginMinimap) {
    graph.removePlugin(pluginMinimap);
  }
  if (cfg.show) {
    const curMminimapCfg = Object.assign(defaultMinimapCfg, cfg);
    const minimap = new G6.Minimap({
      ...curMminimapCfg,
      name: 'minimap',
    });

    graph.addPlugin(minimap);
  }
};
