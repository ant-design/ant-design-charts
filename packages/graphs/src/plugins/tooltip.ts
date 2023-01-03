import G6 from '@antv/g6';
import { isFunction } from '@antv/util';
import { TooltipCfg, Graph } from '../interface';
import { createNode } from '../utils';
const tooltipMaps = {};

export const processTooltip = (cfg: TooltipCfg = {}, graph: Graph): void => {
  const graphId = graph?.get('id');
  if (!graph || graph.destroyed) {
    tooltipMaps[graphId] = null;
    return;
  }
  // 兼容旧逻辑
  if (cfg?.show === false && tooltipMaps[graphId]) {
    const [pluginTooltip] = graph.get('plugins').filter((plugin) => plugin.get('name') === 'tooltip');
    if (pluginTooltip) {
      graph.removePlugin(pluginTooltip);
    }
    tooltipMaps[graphId] = null;
  }
  if ((cfg.show || cfg.show === undefined) && !tooltipMaps[graphId]) {
    const { customContent, ...rest } = cfg;
    const tooltip = new G6.Tooltip({
      offsetX: 10,
      offsetY: 20,
      itemTypes: ['node'],
      ...rest,
      getContent(e) {
        return isFunction(customContent)
          ? createNode(customContent(e.item.getModel()), {
              className: 'g6-tooltip',
            })
          : '';
      },
      name: 'tooltip',
    });

    graph.addPlugin(tooltip);
    tooltipMaps[graphId] = tooltip;
  }
};
