import { createToolbarConfig, IModelService, IToolbarItemOptions, NsGroupCmd, uuidv4 } from '@ali/xflow';
import { XFlowNodeCommands, XFlowGraphCommands, MODELS, NsGraphCmd, NsNodeCmd, IconStore } from '@ali/xflow';

import { getProps } from '../../util';
import { CommandPool } from './constants';
import { CommandItem, FlowchartProps } from '../../interface';

export namespace TOOLBAR_ITEMS {
  export const BACK_NODE = XFlowNodeCommands.BACK_NODE.id;
  export const FRONT_NODE = XFlowNodeCommands.FRONT_NODE.id;
  export const SAVE = XFlowGraphCommands.SAVE_GRAPH_DATA.id;
  export const REDO = `${XFlowGraphCommands.REDO_CMD.id}`;
  export const UNDO = `${XFlowGraphCommands.UNDO_CMD.id}`;
}

namespace NSToolbarConfig {
  /** toolbar依赖的状态 */
  export interface IToolbarState {
    isNodeSelected: boolean;
    isUndoable: boolean;
    isRedoable: boolean;
  }

  export const getDependencies = async (modelService: IModelService) => {
    return [
      await MODELS.SELECTED_NODES.getModel(modelService),
      await MODELS.GRAPH_ENABLE_MULTI_SELECT.getModel(modelService),
    ];
  };

  /** toolbar依赖的状态 */
  export const getToolbarState = async (modelService: IModelService) => {
    // isMultiSelctionActive
    const isUndoable = await MODELS.COMMAND_UNDOABLE.useValue(modelService);
    const isRedoable = await MODELS.COMMAND_REDOABLE.useValue(modelService);
    // isNodeSelected
    const cells = await MODELS.SELECTED_NODES.useValue(modelService);
    const isNodeSelected = cells.length > 0;
    return {
      isNodeSelected,
      isUndoable,
      isRedoable,
    } as NSToolbarConfig.IToolbarState;
  };

  export const getToolbarItems = async (state: IToolbarState, getIconName: any) => {
    const toolbarGroup: IToolbarItemOptions[] = [];

    /** 保存数据 */
    toolbarGroup.push({
      ...getIconName(CommandPool.UNDO_CMD),
      id: TOOLBAR_ITEMS.UNDO,
      isEnabled: state.isUndoable,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.UndoCmd.IArgs>(XFlowGraphCommands.UNDO_CMD.id, {});
      },
    });
    /** 保存数据 */
    toolbarGroup.push({
      ...getIconName(CommandPool.REDO_CMD),
      id: TOOLBAR_ITEMS.REDO,
      isEnabled: state.isRedoable,
      onClick: async ({ commandService, modelService }) => {
        const cell = await MODELS.SELECTED_NODE.useValue(modelService);
        const nodeConfig = cell.getData();
        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(TOOLBAR_ITEMS.REDO, {
          nodeConfig: nodeConfig,
        });
      },
    });
    /** 保存数据 */
    toolbarGroup.push({
      ...getIconName(CommandPool.SAVE_GRAPH_DATA),
      id: TOOLBAR_ITEMS.SAVE,
      onClick: async ({ commandService, modelService }) => {
        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(TOOLBAR_ITEMS.SAVE, {
          saveGraphDataService: (meta, graphData) => {
            const onSave = getProps('onSave');
            if (onSave) {
              return onSave(graphData);
            }
          },
        });
      },
    });
    /** FRONT_NODE */
    toolbarGroup.push({
      ...getIconName(CommandPool.FRONT_NODE),
      id: TOOLBAR_ITEMS.FRONT_NODE,
      isEnabled: state.isNodeSelected,
      onClick: async ({ commandService, modelService }) => {
        const node = await MODELS.SELECTED_NODE.useValue(modelService);
        commandService.executeCommand<NsNodeCmd.FrontNode.IArgs>(TOOLBAR_ITEMS.FRONT_NODE, {
          nodeId: node?.id,
        });
      },
    });
    /** BACK_NODE */
    toolbarGroup.push({
      ...getIconName(CommandPool.BACK_NODE),
      id: TOOLBAR_ITEMS.BACK_NODE,
      isEnabled: state.isNodeSelected,
      onClick: async ({ commandService, modelService }) => {
        const node = await MODELS.SELECTED_NODE.useValue(modelService);
        commandService.executeCommand<NsNodeCmd.FrontNode.IArgs>(TOOLBAR_ITEMS.BACK_NODE, {
          nodeId: node?.id,
        });
      },
    });
    /** BACK_NODE */
    toolbarGroup.push({
      ...getIconName(CommandPool.BACK_NODE),
      id: TOOLBAR_ITEMS.BACK_NODE,
      isEnabled: state.isNodeSelected,
      onClick: async ({ commandService, modelService }) => {
        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(TOOLBAR_ITEMS.BACK_NODE, {
          saveGraphDataService: (meta, graphData) => {
            const onSave = getProps('onSave');
            if (onSave) {
              return onSave(graphData);
            }
          },
        });
      },
    });

    return [{ name: 'graphData', items: toolbarGroup }];
  };
}

export const useToolbarConfig = createToolbarConfig<FlowchartProps>((toolbarConfig, proxy) => {
  const toolbarPanelProps = proxy.getValue()?.toolbarPanelProps || {};
  let {
    commands = [
      {
        command: CommandPool.REDO_CMD,
        text: '重做',
      },
      {
        command: CommandPool.UNDO_CMD,
        text: '撤销',
      },
      {
        command: CommandPool.FRONT_NODE,
        text: '置前',
      },
      {
        command: CommandPool.BACK_NODE,
        text: '置后',
      },
      {
        command: CommandPool.SAVE_GRAPH_DATA,
        text: '保存',
      },
    ] as CommandItem[],
  } = toolbarPanelProps;

  const registerIcon = () => {
    commands = commands.map((item: CommandItem) => {
      const { icon } = item;
      if (icon) {
        const iconName = uuidv4();
        IconStore.set(iconName, icon);
        return {
          ...item,
          iconName,
        };
      }
      return { ...item };
    });
  };

  registerIcon();

  const getIconName = (commandName: string) => {
    if (!Object.values(CommandPool).includes(commandName)) {
      // console.warn(`unknown command: ${commandName}`);
      return {};
    }
    return commands.find((item: CommandItem) => item.command === commandName);
  };

  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async (toolbarModel, modelService, toDispose) => {
    const updateToolbarModel = async () => {
      const state = await NSToolbarConfig.getToolbarState(modelService);
      const toolbarItems = await NSToolbarConfig.getToolbarItems(state, getIconName);
      toolbarModel.setValue((toolbar) => {
        toolbar.mainGroups = toolbarItems;
      });
    };
    const models = await NSToolbarConfig.getDependencies(modelService);
    const subscriptions = models.map((model) => {
      return model.watch(async () => {
        updateToolbarModel();
      });
    });
    toDispose.pushAll(subscriptions);
  });
});
