import G6 from '@antv/g6';
import Menu from './components/menu';
import type { MenuConfig } from './components/menu';
import { Graph } from '../interface';

export const processMenu = (cfg: MenuConfig = {}, graph: Graph): void => {
  if (!graph || graph.destroyed) {
    return;
  }
  // 兼容旧逻辑
  const [pluginMenu] = graph.get('plugins').filter((plugin) => plugin.get('name') === 'menu');
  if (pluginMenu) {
    graph.removePlugin(pluginMenu);
  }
  if (cfg.show || cfg.show === undefined) {
    const menu = new Menu({
      offsetX: 16 + 10,
      offsetY: 0,
      itemTypes: ['node'],
      ...cfg,
      name: 'menu',
    });

    graph.addPlugin(menu as any);
  }
};
