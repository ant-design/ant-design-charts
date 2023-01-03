import G6 from '@antv/g6';
import Menu from './components/menu';
import type { MenuConfig } from './components/menu';
import { Graph } from '../interface';
const menuMaps = {};

export const processMenu = (cfg: MenuConfig = {}, graph: Graph): void => {
  const graphId = graph?.get('id');
  if (!graph || graph.destroyed) {
    menuMaps[graphId] = null;
    return;
  }
  // 兼容旧逻辑
  if (cfg.show === false && menuMaps[graphId]) {
    const [pluginMenu] = graph.get('plugins').filter((plugin) => plugin.get('name') === 'menu');
    if (pluginMenu) {
      graph.removePlugin(pluginMenu);
    }
    menuMaps[graphId] = null;
  }
  if ((cfg.show || cfg.show === undefined) && !menuMaps[graphId]) {
    const menu = new Menu({
      offsetX: 16 + 10,
      offsetY: 0,
      itemTypes: ['node'],
      ...cfg,
      name: 'menu',
    });

    graph.addPlugin(menu as any);
    menuMaps[graphId] = menu;
  }
};
