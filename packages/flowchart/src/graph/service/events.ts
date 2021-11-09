import { XFlowNodeCommands, IModelService, IGraphCommandService, XFlowEdgeCommands } from '@ali/xflow';
import { get } from 'lodash';
import { onConfigChange, getGraphInstance } from '../../util';
import { Node } from '../../interface';

/**
 * 节点移动时，实时更新位置信息
 */
export const movedNode = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { node } = e;
  if (!node) {
    return;
  }

  const { data } = node;
  // 更新组内元素
  if (data?.groupChildren) {
    const x6Graph = getGraphInstance();
    data?.groupChildren.forEach(async (id: string) => {
      const currentNode = x6Graph.getCellById(id) as Node;
      if (currentNode) {
        await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
          nodeConfig: {
            ...currentNode.data,
            ...currentNode.getPosition?.(),
          },
        });
      }
    });
  }
  const nodeConfig = {
    ...node.data,
    ...node.getPosition(),
  };
  await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
    nodeConfig,
  });
  onConfigChange({ type: 'move:node', config: nodeConfig });
};

/**
 * 修改节点大小
 */
export const resizeNode = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { node } = e;
  if (!node) {
    return;
  }
  const { width, height } = node.size();
  const nodeConfig = {
    ...node.data,
    width,
    height,
  };
  await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
    nodeConfig,
  });
  onConfigChange({ type: 'resize:node', config: nodeConfig });
};

/** 设置 ports visible */
export const changePortsVisible = (visible: boolean) => {
  const container = document.getElementsByClassName('xflow-canvas-root')[0];
  const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>;
  const graph = getGraphInstance();
  // 选中中节点时不展示链接桩
  const isSelectedNode = graph.getSelectedCells()?.[0]?.isNode();
  for (let i = 0, len = ports.length; i < len; i = i + 1) {
    ports[i].style.visibility = !isSelectedNode && visible ? 'visible' : 'hidden';
  }
};

/** 高亮边 */
export const setEdgeSelected = (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { edge } = e;
  if (!edge) {
    return;
  }
  // cmds.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {
  //   edgeConfig: {
  //     ...get(edge, 'data'),
  //     attrs: {
  //       ...get(edge, 'data.attrs'),
  //       line: {
  //         ...get(edge, 'data.attrs.line'),
  //         stroke: '#1890ff',
  //       },
  //     },
  //   },
  // });
};

// 添加辅助工具
export const addTools = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { edge } = e;
  if (!edge) {
    return;
  }
  edge.addTools('vertices', 'ondbclick');
};

// 添加辅助工具
export const removeTools = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { edge } = e;
  if (!edge) {
    return;
  }
  if (edge.hasTools('ondbclick')) {
    cmds.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {
      edgeConfig: {
        ...get(edge, 'data'),
        vertices: edge.getVertices(),
      },
    });
    edge.removeTools();
  }
};
