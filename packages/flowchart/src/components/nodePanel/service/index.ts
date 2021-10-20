import { NsNodeTreePanel, NsNodeCmd, uuidv4, XFlowNodeCommands } from '@ali/xflow';
import { getProps } from '../../../util';

/** 节点查找 */
export const searchService: NsNodeTreePanel.ISearchService = async (
  treeNodeList: NsNodeTreePanel.ITreeNode[] = [],
  keyword: string,
) => {
  const list = treeNodeList.filter((i) => i.isDirectory || i.label.includes(keyword) || i.name.includes(keyword));
  return list;
};

export const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (node, commands) => {
  const nodeConfig = { ...node, id: `node-${uuidv4()}` };
  const args: NsNodeCmd.AddNode.IArgs = {
    nodeConfig,
  };
  const onAddNode = getProps('onAddNode');
  if (typeof onAddNode === 'function') {
    onAddNode(nodeConfig);
  }
  commands.executeCommand(XFlowNodeCommands.ADD_NODE.id, args);
};
