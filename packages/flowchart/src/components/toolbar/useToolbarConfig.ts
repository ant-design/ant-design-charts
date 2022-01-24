import { createToolbarConfig } from '@antv/xflow';
import { getProps, Log } from '../../util';
import { CommandPool, defaultCommands } from './constants';
import { CommandItem, FlowchartProps } from '../../interface';
import { NSToolbarConfig } from './toolbarConfig';
import { registerIcon } from './utils';

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
