import { createCmdConfig, DisposableCollection, uuidv4 } from '@ali/xflow';
import { getProps } from '../../util';

export const useCmdConfig = createCmdConfig((config) => {
  // 设置hook
  config.setRegisterHookFn((hooks) => {
    const list = [
      hooks.addNode.registerHook({
        name: 'get node config from backend api',
        handler: async (args) => {
          args.nodeConfig = {
            ...args.nodeConfig,
            id: args.nodeConfig.id || `node-${uuidv4()}`,
            zIndex: args.nodeConfig.zIndex || 10,
            /** 移除 _copied */
            label: args.nodeConfig.label?.replace?.(/\_copied/g, ''),
          };
          const onAddNode = getProps('onAddNode');
          if (typeof onAddNode === 'function') {
            onAddNode(args.nodeConfig);
          }
        },
      }),
    ];
    const toDispose = new DisposableCollection();
    toDispose.pushAll(list);
    return toDispose;
  });
});
