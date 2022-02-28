import { DisposableCollection, createHookConfig, XFlowEdgeCommands } from '@antv/xflow';
import { getProps as getGlobalProps, onConfigChange } from '../../util';
import { Edge } from '@antv/x6';

/** 自定义React节点 */
export namespace NsAddEdgeEvent {
  export const EVENT_NAME = 'ADD_EDGE_CMD_EVENT';
  export interface IArgs {
    targetPortId: string;
    sourcePortId: string;
    source: string;
    target: string;
    edge: Edge;
  }
}

export const useGraphHook = createHookConfig((config, proxy) => {
  const { flowchartId } = proxy.getValue();
  config.setRegisterHook((hooks) => {
    const todo = new DisposableCollection();
    const edgeData = hooks.afterGraphInit.registerHook({
      name: 'call add edge to replace temp edge',
      handler: async (args) => {
        const { commandService, graph } = args;
        graph.on(NsAddEdgeEvent.EVENT_NAME, async (args: NsAddEdgeEvent.IArgs) => {
          const { edge, ...edgeConfig } = args;
          const config = {
            edgeConfig: {
              ...edgeConfig,
              // renderKey: FLOWCHART_EDGE, // 暂不支持
              source: {
                cell: edgeConfig.source,
                port: edgeConfig.sourcePortId,
              },
              target: {
                cell: edgeConfig.target,
                port: edgeConfig.targetPortId,
              },
              zIndex: 1,
              attrs: {
                line: {
                  stroke: '#A2B1C3',
                  targetMarker: {
                    name: 'block',
                    width: 12,
                    height: 8,
                  },
                  strokeDasharray: '5 5',
                  strokeWidth: 1,
                },
              },
              data: { ...edgeConfig },
            },
          };
          await commandService.executeCommand(XFlowEdgeCommands.ADD_EDGE.id, config);
          const onAddEdge = getGlobalProps(flowchartId, 'onAddEdge');
          if (typeof onAddEdge === 'function') {
            onAddEdge(config);
          }
          onConfigChange({ type: 'add:edge', config });
          args.edge.remove();
        });
      },
    });
    todo.push(edgeData);
    return todo;
  });
});
