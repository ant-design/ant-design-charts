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
import { uuidv4, NsNodeTreePanel } from '@antv/xflow';
import { getProps } from '../../util';
import AppContext from '../../context';
import { FlowchartProps } from '../../interface';
import { withPopover } from './with-popover';
import { NODE_HEIGHT, NODE_WIDTH, NODEPOOL, ASPECTRATIONODE } from './constants';
import { NodeComponent } from './node-components';
export { searchService, onNodeDrop } from './service';

export { NODE_HEIGHT, NODE_WIDTH, AppContext, ASPECTRATIONODE };

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

export const getRegisterNode = (flowchartId: string) => {
  const { registerNode = [] } = (getProps(flowchartId, 'nodePanelProps') as FlowchartProps['nodePanelProps']) ?? {};
  const treeData = {};
  registerNode.forEach((item) => {
    const nodes = item.nodes.map((node) => {
      const { name, popover, label = '', width = NODE_HEIGHT, height = NODE_HEIGHT, ports } = node;
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
      };
    });
    treeData[item.type] = {
      title: item.title,
      nodes,
    };
  });
  return treeData;
};

export const treeDataService = async (meta, modelService, flowchartId) => {
  const registerNode = getRegisterNode(flowchartId);
  const treeData = {
    ...registerNode,
    common: {
      title: '通用节点',
      nodes: [],
    },
    flowchart: {
      title: '流程图节点',
      nodes: [],
    },
  };
  NODEPOOL.forEach(({ name, ports, width = NODE_WIDTH, height = NODE_HEIGHT, label = '', type }) => {
    treeData[type]?.nodes?.push({
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
    });
  });
  return treeData;
};

export const setNodeRender = (config, nodePanelProps: FlowchartProps['nodePanelProps']) => {
  // 自定义节点
  const { registerNode = [] } = nodePanelProps ?? {};
  let nodes = [];
  registerNode.forEach((item) => {
    nodes = [...nodes, ...item.nodes];
  });
  if (nodes.length) {
    nodes.forEach((item) => {
      const { name, component } = item;
      config.setNodeRender(name, component);
    });
  }
  // 默认节点
  NODEPOOL.forEach((item) => {
    config.setNodeRender(item.name, (props) => {
      return withPopover({ ...props }, item.name)(NodeComponent);
    });
  });
};
