import { NsNodeTreePanel, NsNodeCmd, uuidv4, XFlowNodeCommands } from '@ali/xflow';
import { getProps, onConfigChange } from '../../../util';

/** 节点查找 */
export const searchService: NsNodeTreePanel.ISearchService = async (
  treeNodeList: NsNodeTreePanel.ITreeNode[] = [],
  keyword: string,
) => {
  const list = treeNodeList.filter((i) => i.isDirectory || i.label?.includes(keyword) || i.name?.includes(keyword));
  return list;
};

export const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (node, commands) => {
  const { ports } = node;
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

  const onAddNode = getProps('onAddNode');
  if (typeof onAddNode === 'function') {
    onAddNode(nodeConfig);
  }
  onConfigChange({ type: 'add:node', config: nodeConfig });
};
