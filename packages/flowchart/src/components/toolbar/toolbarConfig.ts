import {
  IModelService,
  IToolbarItemOptions,
  NsGroupCmd,
  uuidv4,
  XFlowGroupCommands,
  XFlowNodeCommands,
  XFlowGraphCommands,
  NsGraphCmd,
  NsNodeCmd,
  MODELS,
} from '@antv/xflow';
import { message } from 'antd';
import { getProps, getGraphHistory, getGraphInstance } from '../../util';
import { GROUP_NODE_RENDER_ID } from '../group-panel';
import { CommandPool } from './constants';
import { CommandItem } from '../../interface';
namespace TOOLBAR_ITEMS {
  export const BACK_NODE = XFlowNodeCommands.BACK_NODE.id;
  export const FRONT_NODE = XFlowNodeCommands.FRONT_NODE.id;
  export const SAVE_GRAPH_DATA = XFlowGraphCommands.SAVE_GRAPH_DATA.id;
  export const REDO_CMD = `${XFlowGraphCommands.REDO_CMD.id}`;
  export const UNDO_CMD = `${XFlowGraphCommands.UNDO_CMD.id}`;
  export const MULTI_SELECT = `${XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id}`;
  export const ADD_GROUP = `${XFlowGroupCommands.ADD_GROUP.id}`;
  export const DEL_GROUP = `${XFlowGroupCommands.DEL_GROUP.id}`;
  export const COPY = `${XFlowGraphCommands.GRAPH_COPY.id}`;
  export const PASTE = `${XFlowGraphCommands.GRAPH_PASTE.id}`;
  export const CLEAR = `${XFlowGraphCommands.GRAPH_RENDER.id}`;
}

export namespace NSToolbarConfig {
  /** toolbar依赖的状态 */
  export interface IToolbarState {
    isMultiSelctionActive: boolean;
    isGroupSelected: boolean;
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
    const { isEnable: isMultiSelctionActive } = await MODELS.GRAPH_ENABLE_MULTI_SELECT.useValue(modelService);
    // isGroupSelected
    const isGroupSelected = await MODELS.IS_GROUP_SELECTED.useValue(modelService);
    // isNormalNodesSelected: node不能是GroupNode
    const isNormalNodesSelected = await MODELS.IS_NORMAL_NODES_SELECTED.useValue(modelService);
    // undo redo
    const isUndoable = await MODELS.COMMAND_UNDOABLE.useValue(modelService);
    const isRedoable = await MODELS.COMMAND_REDOABLE.useValue(modelService);

    return {
      isUndoable,
      isRedoable,
      isNodeSelected: isNormalNodesSelected,
      isGroupSelected,
      isMultiSelctionActive,
    } as NSToolbarConfig.IToolbarState;
  };

  export const getToolbarItems = async (
    state: IToolbarState,
    getIconConfig: any,
    commands: CommandItem[],
    flowchartId: string,
  ) => {
    const toolbarGroup: IToolbarItemOptions[] = [];
    const history = getGraphHistory(flowchartId);
    const graph = getGraphInstance(flowchartId);
    const selectedCells = graph.getSelectedCells();

    /** 撤销 */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.UNDO_CMD),
      id: TOOLBAR_ITEMS.UNDO_CMD,
      isEnabled: history.canUndo(),
      onClick: async () => {
        history.undo();
      },
    });

    /** 重做 */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.REDO_CMD),
      id: TOOLBAR_ITEMS.REDO_CMD,
      isEnabled: history.canRedo(),
      onClick: async () => {
        history.redo();
      },
    });

    /** FRONT_NODE */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.FRONT_NODE),
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
      ...getIconConfig(CommandPool.BACK_NODE),
      id: TOOLBAR_ITEMS.BACK_NODE,
      isEnabled: state.isNodeSelected,
      onClick: async ({ commandService, modelService }) => {
        const node = await MODELS.SELECTED_NODE.useValue(modelService);
        commandService.executeCommand<NsNodeCmd.FrontNode.IArgs>(TOOLBAR_ITEMS.BACK_NODE, {
          nodeId: node?.id,
        });
      },
    });

    /** 开启框选 */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.MULTI_SELECT),
      id: TOOLBAR_ITEMS.MULTI_SELECT,
      active: state.isMultiSelctionActive,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.GraphToggleMultiSelect.IArgs>(TOOLBAR_ITEMS.MULTI_SELECT, {});
      },
    });

    /** 新建群组 */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.ADD_GROUP),
      id: TOOLBAR_ITEMS.ADD_GROUP,
      isEnabled: state.isNodeSelected,
      onClick: async ({ commandService, modelService }) => {
        const cells = await MODELS.SELECTED_CELLS.useValue(modelService);
        const groupChildren = cells.map((cell) => cell.id);
        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(TOOLBAR_ITEMS.ADD_GROUP, {
          nodeConfig: {
            id: uuidv4(),
            renderKey: GROUP_NODE_RENDER_ID,
            groupChildren,
            groupCollapsedSize: { width: 200, height: 40 },
            label: '新建群组',
          },
        });
      },
    });

    /** 解散群组 */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.DEL_GROUP),
      id: TOOLBAR_ITEMS.DEL_GROUP,
      isEnabled: state.isGroupSelected,
      onClick: async ({ commandService, modelService }) => {
        const cell = await MODELS.SELECTED_NODE.useValue(modelService);
        if (cell) {
          const nodeConfig = cell.getData();
          commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.DEL_GROUP.id, {
            nodeConfig: nodeConfig,
          });
        } else {
          message.error('没有可以解散的群组');
        }
      },
    });

    /** copy */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.COPY),
      id: TOOLBAR_ITEMS.COPY,
      isEnabled: !!selectedCells?.length,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.GraphCopySelection.IArgs>(XFlowGraphCommands.GRAPH_COPY.id, {});
      },
    });

    /** paste */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.PASTE),
      id: CommandPool.PASTE,
      isEnabled: true,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.GraphCopySelection.IArgs>(XFlowGraphCommands.GRAPH_PASTE.id, {});
      },
    });

    /** 保存数据 */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.SAVE_GRAPH_DATA),
      id: TOOLBAR_ITEMS.SAVE_GRAPH_DATA,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(TOOLBAR_ITEMS.SAVE_GRAPH_DATA, {
          saveGraphDataService: (meta, graphData) => {
            const onSave = getProps(flowchartId, 'onSave');
            if (onSave) {
              return onSave(graphData);
            }
          },
        });
      },
    });

    toolbarGroup.push({
      ...getIconConfig(CommandPool.CLEAR),
      id: TOOLBAR_ITEMS.CLEAR,
      onClick: async ({ commandService }) => {
        commandService.executeCommand(TOOLBAR_ITEMS.CLEAR, {
          graphData: { nodes: [], edges: [] },
        });
      },
    });

    return [
      {
        name: 'graphData',
        items: toolbarGroup
          .filter((item) => !!item?.iconName)
          .sort((pre: IToolbarItemOptions & { command: string }, next: IToolbarItemOptions & { command: string }) => {
            return (
              commands.findIndex((item: CommandItem) => item.command === pre.command) -
              commands.findIndex((item: CommandItem) => item.command === next.command)
            );
          }),
      },
    ];
  };
}
