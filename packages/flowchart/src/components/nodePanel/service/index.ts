import { NsNodeTreePanel, NsNodeCmd, uuidv4, XFlowNodeCommands } from '@ali/xflow';

/** 节点查找 */
export const searchService: NsNodeTreePanel.ISearchService = async (
  treeNodeList: NsNodeTreePanel.ITreeNode[] = [],
  keyword: string,
) => {
  const list = treeNodeList.filter((i) => i.isDirectory || i.label.includes(keyword) || i.name.includes(keyword));
  return list;
};

export const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (node, commands) => {
  const args: NsNodeCmd.AddNode.IArgs = {
    nodeConfig: { ...node, id: uuidv4() },
  };
  commands.executeCommand(XFlowNodeCommands.ADD_NODE.id, args);
};
