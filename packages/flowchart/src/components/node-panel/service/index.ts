import { NsNodeTreePanel, NsNodeCmd, uuidv4, XFlowNodeCommands } from '@antv/xflow';
import { getProps, onConfigChange } from '../../../util';
import { ISearchService, ITreeData } from '../../canvas-node-tree-panel/interface';

/** 节点查找 */
export const searchService: ISearchService = async (treeData: ITreeData = {}, keyword: string) => {
  const nodeTypes = Object.keys(treeData);
  const searchNodes = {};
  nodeTypes.forEach((type) => {
    searchNodes[type] = treeData[type].nodes.filter((i) => i.label?.includes(keyword) || i.name?.includes(keyword));
  });
  return searchNodes;
};

export const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (node, commands) => {
  const { ports, flowchartId } = node;
  const nodeConfig = {
    ...node,
    id: `node-${uuidv4()}`,
    zIndex: 10,
    ports: {
      ...ports,
      // @ts-ignore
      items: ports.items?.map((item) => ({
        ...item,
        id: uuidv4(),
      })),
    },
  };

  const args: NsNodeCmd.AddNode.IArgs = {
    nodeConfig,
  };

  await commands.executeCommand(XFlowNodeCommands.ADD_NODE.id, args);

  const onAddNode = getProps(flowchartId, 'onAddNode');
  if (typeof onAddNode === 'function') {
    onAddNode(nodeConfig);
  }
  onConfigChange({ type: 'add:node', config: nodeConfig });
};
