import G6 from '@antv/g6';
import { isFunction } from '@antv/util';
import { TooltipCfg, Graph } from '../interface';
import { createNode } from '../utils';

export const processTooltip = (cfg: TooltipCfg = {}, graph: Graph): void => {
  if (!graph || graph.destroyed) {
    return;
  }
  const [pluginTooltip] = graph.get('plugins').filter((plugin) => plugin.get('name') === 'tooltip');
  if (pluginTooltip) {
    graph.removePlugin(pluginTooltip);
  }
  if (cfg.show) {
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
  }
};
