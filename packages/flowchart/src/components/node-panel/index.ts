/**
 * 节点面板
 * 内置多种节点，同时提供用户注册机制
 * ```ts
 * nodePanelProps: {
 *  registerNode:{
 *   nodes: [
 *     {
 *       component: CustomNode, // 函数组件
 *       popover: () => <div>节点1</div>,
 *       name: 'custom-node',
 *       width: 60,
 *       height: 40,
 *      },
 *     ],
 *   }
 * }
 * ```
 */
import { GraphConfig, uuidv4, NsNodeTreePanel } from '@ali/xflow';
import { getProps } from '../../util';
import AppContext from '../../context';
import { withPopover } from './with-popover';
import { NODE_HEIGHT, NODE_WIDTH, NODEPOOL, ASPECTRATIONODE } from './constants';
import * as NodeComponents from './nodes';
export { searchService, onNodeDrop } from './service';

import { FlowchartProps } from '../../interface';

export { NodeComponents, NODE_HEIGHT, NODE_WIDTH, AppContext, ASPECTRATIONODE };

/** 和 graph config 注册的节点保持一致 */
const getAnchorStyle = (position: string) => {
  return {
    position: { name: position },
    attrs: {
      circle: {
        r: 4,
        magnet: true,
        stroke: '#31d0c6',
        strokeWidth: 2,
        fill: '#fff',
        style: {
          visibility: 'hidden',
        },
      },
    },
    zIndex: 10,
  };
};

const getPorts = (position = ['top', 'right', 'bottom', 'left']) => {
  return {
    items: position.map((name) => {
      return { group: name, id: uuidv4() };
    }),
    groups: {
      top: getAnchorStyle('top'),
      right: getAnchorStyle('right'),
      bottom: getAnchorStyle('bottom'),
      left: getAnchorStyle('left'),
    },
  };
};

export const getRegisterNode = () => {
  const { registerNode } = (getProps('nodePanelProps') as FlowchartProps['nodePanelProps']) ?? {};

  return (registerNode?.nodes || []).map((item) => {
    const { name, popover, label = '', width = NODE_HEIGHT, height = NODE_HEIGHT, ports } = item;
    const id = uuidv4(); // 暂不使用上层数据
    return {
      parentId: '',
      id,
      renderKey: name,
      name,
      label,
      popoverContent: popover,
      width,
      height,
      ports: ports || getPorts(),
      originData: { ...item },
      isCustom: true,
    };
  });
};

export const treeDataService: NsNodeTreePanel.ITreeDataService = async () => {
  const customNodes = getRegisterNode();

  return [
    ...customNodes,
    ...NODEPOOL.map(({ name, ports, width = NODE_WIDTH, height = NODE_HEIGHT, label = '' }) => {
      return {
        parentId: '',
        id: uuidv4(), // 不会被使用
        renderKey: name,
        // name: `${name.replace(/\s+/g, '-')}`,
        name,
        label,
        popoverContent: () => name,
        width,
        height,
        ports: getPorts(ports),
      };
    }),
  ];
};

export const setNodeRender = (config: GraphConfig, nodePanelProps: FlowchartProps['nodePanelProps']) => {
  // 自定义节点
  const { registerNode } = nodePanelProps ?? {};
  const nodes = registerNode?.nodes || [];
  if (nodes.length) {
    nodes.forEach((item) => {
      const { name, component } = item;
      config.setNodeRender(name, component);
    });
  }
  // 默认节点
  NODEPOOL.forEach((item) => {
    config.setNodeRender(item.name, (props) => {
      return withPopover(props)(NodeComponents[`${item.name.replace(/\s+/g, '')}Node`]);
    });
  });
};
