import { XFlowNodeCommands, IModelService, IGraphCommandService, XFlowEdgeCommands } from '@antv/xflow';
import { get } from 'lodash';
import { onConfigChange, getGraphInstance, getFlowchartId } from '../../util';
import { Node } from '@antv/x6';

/**
 * 节点移动时，实时更新位置信息
 */
export const movedNode = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { node } = e;
  if (!node) {
    return;
  }
  const flowchartId = getFlowchartId(e);
  const { data } = node;
  // 更新组内元素
  if (data?.groupChildren) {
    const x6Graph = getGraphInstance(flowchartId);
    data?.groupChildren.forEach(async (id: string) => {
      const currentNode = x6Graph.getCellById(id) as Node;
      if (currentNode) {
        await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
          nodeConfig: {
            ...currentNode.data,
            ...currentNode.getSize(),
            ...currentNode.getPosition?.(),
          },
        });
      }
    });
  }
  const nodeConfig = {
    ...node.data,
    ...node.getPosition(),
    ...node.getSize(),
  };
  await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
    nodeConfig,
  });
  onConfigChange({ type: 'move:node', config: nodeConfig }, flowchartId);
};

/**
 * 修改节点大小
 */
export const resizeNode = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { node } = e;
  if (!node) {
    return;
  }
  const flowchartId = getFlowchartId(e);
  const nodeConfig = {
    ...node.data,
    ...node.getPosition(),
    ...node.size(),
  };
  await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
    nodeConfig,
  });
  onConfigChange({ type: 'resize:node', config: nodeConfig }, flowchartId);
};

const getContainer = (e) => {
  let currentNode = e?.e?.currentTarget;
  if (!currentNode) {
    return document.getElementsByClassName('xflow-canvas-container');
  }
  let containter = null;
  while (!containter) {
    const current = currentNode.getElementsByClassName('xflow-canvas-container');
    if (current?.length > 0) {
      containter = current;
    }
    currentNode = currentNode.parentNode;
  }
  return containter;
};

/** 设置 ports visible */
export const changePortsVisible = (visible: boolean, e?: any) => {
  const containers = getContainer(e);
  Array.from(containers).forEach((container: HTMLDivElement) => {
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>;
    const graph = getGraphInstance(container.getAttribute('data-flowchartId'));
    if (!graph) {
      return;
    }
    // 选中中节点时不展示链接桩
    const isSelectedNode = graph.getSelectedCells()?.[0]?.isNode();
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = !isSelectedNode && visible ? 'visible' : 'hidden';
    }
  });
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
