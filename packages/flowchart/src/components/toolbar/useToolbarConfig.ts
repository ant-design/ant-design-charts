import { createToolbarConfig, IconStore } from '@antv/xflow';
import { getProps, Log } from '../../util';
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
import { CommandPool, defaultCommands } from './constants';
import { CommandItem, FlowchartProps } from '../../interface';
import { NSToolbarConfig } from './toolbarConfig';

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

export const useToolbarConfig = createToolbarConfig<FlowchartProps['toolbarPanelProps']>((toolbarConfig, proxy) => {
  const { flowchartId } = proxy.getValue();
  const toolbarPanelProps = getProps(flowchartId, 'toolbarPanelProps') ?? {};
  registerIcon();

  let { commands = defaultCommands } = toolbarPanelProps;

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
      const toolbarItems = await NSToolbarConfig.getToolbarItems(state, getIconConfig, commands, flowchartId);

      toolbarModel.setValue((toolbar) => {
        toolbar.mainGroups = toolbarItems;
      });
    };

    //画布中被选中节点的 models 和能否多选的 models
    const models = await NSToolbarConfig.getDependencies(modelService);
    const subscriptions = models.map((model) => {
      return model.watch(async () => {
        updateToolbarModel();
      });
    });
    toDispose.pushAll(subscriptions);
  });
});
