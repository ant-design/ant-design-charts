import { XFlowNodeCommands, IContextService, IGraphCommandService, XFlowEdgeCommands } from '@ali/xflow';

/**
 * 节点移动时，实时更新位置信息
 */
export const movedNode = (e: any, cmds: IGraphCommandService, ctx: IContextService) => {
  const { node } = e;
  if (!node) {
    return;
  }
  cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
    nodeConfig: {
      ...node.data,
      ...node.getPosition(),
    },
  });
};

/**
 * 修改节点大小
 */
export const resizeNode = (e: any, cmds: IGraphCommandService, ctx: IContextService) => {
  const { node } = e;
  if (!node) {
    return;
  }
  const { width, height } = node.size();
  cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
    nodeConfig: {
      ...node.data,
      width,
      height,
    },
  });
};

/** 设置 ports visible */
export const changePortsVisible = (visible: boolean) => {
  const container = document.getElementsByClassName('xflow-canvas-root')[0];
  const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>;
  for (let i = 0, len = ports.length; i < len; i = i + 1) {
    ports[i].style.visibility = visible ? 'visible' : 'hidden';
  }
};

/** 高亮边 */
export const setEdgeSelected = (e: any, cmds: IGraphCommandService, ctx: IContextService) => {
  console.log(e);
  const { edge } = e;
  if (!edge) {
    return;
  }

  cmds.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {
    edgeConfig: {
      ...edge.data,
      // attrs: {
      //   line: {
      //     ...edge.data?.attrs.line,
      //     stroke: 'red',
      //   },
      // },
      attrs: {
        line: {
          stroke: '#1890ff',
          strokeDasharray: 5,
          targetMarker: 'classic',
          style: {
            animation: 'ant-line 30s infinite linear',
          },
        },
      },
    },
  });
};
