import type { NsNodeCmd, NsEdgeCmd, IMenuOptions, NsGraph } from '@ali/xflow';
import { createCtxMenuConfig, MenuItemType } from '@ali/xflow';
import { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@ali/xflow';
// import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons';

/** menuitem 配置 */
export namespace NsMenuItemConfig {
  /** 注册菜单依赖的icon */
  // IconStore.set('DeleteOutlined', DeleteOutlined);
  // IconStore.set('EditOutlined', EditOutlined);
  // IconStore.set('StopOutlined', StopOutlined);

  export const DELETE_EDGE: IMenuOptions = {
    id: XFlowEdgeCommands.DEL_EDGE.id,
    label: '删除边',
    // iconName: 'DeleteOutlined',
    onClick: async ({ target, commandService }) => {
      if (target.data) {
        commandService.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {
          edgeConfig: target.data as NsGraph.IEdgeConfig,
        });
      }
    },
  };

  export const DELETE_NODE: IMenuOptions = {
    id: XFlowNodeCommands.DEL_NODE.id,
    label: '删除节点',
    // iconName: 'DeleteOutlined',
    onClick: async ({ target, commandService }) => {
      if (target.data && target?.data?.id) {
        commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {
          nodeConfig: { id: target?.data?.id },
        });
      }
    },
  };

  export const EMPTY_MENU: IMenuOptions = {
    id: 'EMPTY_MENU_ITEM',
    label: '暂无可用',
    isEnabled: false,
    // iconName: 'DeleteOutlined',
  };

  export const SEPARATOR: IMenuOptions = {
    id: 'separator',
    type: MenuItemType.Separator,
  };
}

export const useMenuConfig = createCtxMenuConfig((config) => {
  config.setMenuModelService(async (target, model) => {
    if (!target) {
      return;
    }
    const { type } = target;

    switch (type) {
      /** 节点菜单 */
      case 'node':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.DELETE_NODE],
        });
        break;
      /** 边菜单 */
      case 'edge':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.DELETE_EDGE],
        });
        break;
      /** 画布菜单 */
      case 'blank':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.EMPTY_MENU],
        });
        break;
      /** 默认菜单 */
      default:
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.EMPTY_MENU],
        });
        break;
    }
  });
});
