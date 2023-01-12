import {
  createKeybindingConfig,
  XFlowNodeCommands,
  XFlowEdgeCommands,
  NsNodeCmd,
  MODELS,
  NsGraphCmd,
  XFlowGraphCommands,
} from '@antv/xflow';

export const useKeybindingConfig = createKeybindingConfig((config, proxy) => {
  const { onDelNode, onCopy, onPaste } = proxy.getValue();
  const emitBindEvents = async (modelService, callback) => {
    const cells = await MODELS.SELECTED_CELLS.useValue(modelService);
    if (typeof callback === 'function') callback(cells.map((item) => item.data));
  };
  config.setKeybindingFunc((regsitry) => {
    return regsitry.registerKeybinding([
      {
        id: 'delete node or edge',
        keybinding: ['delete', 'backspace'],
        callback: async function (item, modelService, cmd, e) {
          const cells = await MODELS.SELECTED_CELLS.useValue(modelService);
          // 先删除edges
          await Promise.all(
            cells.map((cell) => {
              if (cell.isEdge()) {
                return cmd.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, {
                  edgeConfig: { ...cell.getData(), id: cell.id },
                });
              }
              return null;
            }),
          );
          // 先删除nodes
          await Promise.all(
            cells.map((cell) => {
              if (cell.isNode()) {
                return cmd.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {
                  nodeConfig: {
                    ...cell.getData(),
                    id: cell.id,
                  },
                });
              }
              return null;
            }),
          );
          emitBindEvents(modelService, onDelNode);
        },
      },
      {
        id: 'copy',
        keybinding: ['command+c', 'ctrl+c'],
        callback: async function (item, modelService, cmd, e) {
          e.preventDefault();
          cmd.executeCommand<NsGraphCmd.GraphCopySelection.IArgs>(XFlowGraphCommands.GRAPH_COPY.id, {});
          emitBindEvents(modelService, onCopy);
        },
      },
      {
        id: 'paste',
        keybinding: ['command+v', 'ctrl+v'],
        callback: async function (item, modelService, cmd, e) {
          e.preventDefault();
          cmd.executeCommand(XFlowGraphCommands.GRAPH_PASTE.id, {});
          emitBindEvents(modelService, onPaste);
        },
      },
    ]);
  });
});
