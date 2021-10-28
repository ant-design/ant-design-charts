import {
  createToolbarConfig,
  IModelService,
  IToolbarItemOptions,
  NsGroupCmd,
  uuidv4,
  XFlowGroupCommands,
  XFlowNodeCommands,
  XFlowGraphCommands,
  NsGraphCmd,
  NsNodeCmd,
  IconStore,
  MODELS,
} from '@ali/xflow';
import { message } from 'antd';
import { getProps, Log, getGraphHistory, getGraphInstance } from '../../util';
import {
  UngroupOutlined,
  SaveOutlined,
  GroupOutlined,
  GatewayOutlined,
  UndoOutlined,
  RedoOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignBottomOutlined,
  CopyOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { GROUP_NODE_RENDER_ID } from '../groupPanel';
import { CommandPool } from './constants';
import { CommandItem, FlowchartProps } from '../../interface';

export namespace TOOLBAR_ITEMS {
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
}

namespace NSToolbarConfig {
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

  export const getToolbarItems = async (state: IToolbarState, getIconConfig: any) => {
    const toolbarGroup: IToolbarItemOptions[] = [];
    const history = getGraphHistory();
    const graph = getGraphInstance();
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

    /** 保存数据 */
    toolbarGroup.push({
      ...getIconConfig(CommandPool.SAVE_GRAPH_DATA),
      id: TOOLBAR_ITEMS.SAVE_GRAPH_DATA,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(TOOLBAR_ITEMS.SAVE_GRAPH_DATA, {
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
        const nodeConfig = cell.getData();
        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.DEL_GROUP.id, {
          nodeConfig: nodeConfig,
        });
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

    return [{ name: 'graphData', items: toolbarGroup }];
  };
}

/** 注册icon 类型 */
const registerIcon = () => {
  IconStore.set('SaveOutlined', SaveOutlined);
  IconStore.set('UndoOutlined', UndoOutlined);
  IconStore.set('RedoOutlined', RedoOutlined);
  IconStore.set('VerticalAlignTopOutlined', VerticalAlignTopOutlined);
  IconStore.set('VerticalAlignBottomOutlined', VerticalAlignBottomOutlined);
  IconStore.set('GatewayOutlined', GatewayOutlined);
  IconStore.set('GroupOutlined', GroupOutlined);
  IconStore.set('UngroupOutlined', UngroupOutlined);
  IconStore.set('CopyOutlined', CopyOutlined);
  IconStore.set('SnippetsOutlined', SnippetsOutlined);
};

export const useToolbarConfig = createToolbarConfig<FlowchartProps>((toolbarConfig, proxy) => {
  const toolbarPanelProps = getProps('toolbarPanelProps') ?? {};
  registerIcon();

  let {
    commands = [
      {
        command: CommandPool.SAVE_GRAPH_DATA,
        tooltip: '保存',
        iconName: 'SaveOutlined',
      },
      {
        command: CommandPool.REDO_CMD,
        tooltip: '重做',
        iconName: 'RedoOutlined',
      },
      {
        command: CommandPool.UNDO_CMD,
        tooltip: '撤销',
        iconName: 'UndoOutlined',
      },
      {
        command: CommandPool.FRONT_NODE,
        tooltip: '置前',
        iconName: 'VerticalAlignTopOutlined',
      },
      {
        command: CommandPool.BACK_NODE,
        tooltip: '置后',
        iconName: 'VerticalAlignBottomOutlined',
      },
      {
        command: CommandPool.MULTI_SELECT,
        tooltip: '开启框选',
        iconName: 'GatewayOutlined',
      },
      {
        command: CommandPool.ADD_GROUP,
        tooltip: '新建群组',
        iconName: 'GroupOutlined',
      },
      {
        command: CommandPool.DEL_GROUP,
        tooltip: '解散群组',
        iconName: 'UngroupOutlined',
      },
      {
        command: CommandPool.COPY,
        tooltip: '复制',
        iconName: 'CopyOutlined',
      },
      {
        command: CommandPool.PASTE,
        tooltip: '粘贴',
        iconName: 'SnippetsOutlined',
      },
    ] as CommandItem[],
  } = toolbarPanelProps;

  const getIconConfig = (commandName: string) => {
    if (!Object.values(CommandPool).includes(commandName)) {
      Log.warn(`unknown command: ${commandName}`);
      return {};
    }
    /** 暂时不支持自定义 icon，感觉使用上并不方便，后续再考虑接入 */
    return commands.find((item: CommandItem) => item.command === commandName);
  };

  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async (toolbarModel, modelService, toDispose) => {
    const updateToolbarModel = async () => {
      const state = await NSToolbarConfig.getToolbarState(modelService);
      const toolbarItems = await NSToolbarConfig.getToolbarItems(state, getIconConfig);
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
