/**
 * 全量 Command，用户通过 name 指定，支持配置式和命令式
 * enum Command {Undo, Redo, SaveGraphData,frontNode,backNode}
 */

/** undo 操作 */
const UNDO_CMD = 'undo-cmd';
/** redo 操作 */
const REDO_CMD = 'redo-cmd';
/** 保存 */
const SAVE_GRAPH_DATA = 'save-graph-data';
/** 置前 */
const FRONT_NODE = 'front-node';
/** 置后 */
const BACK_NODE = 'back-node';

const MULTI_SELECT = 'graph-toggle-multi-select';

const ADD_GROUP = 'add-group';

const DEL_GROUP = 'del-group';

export const CommandPool = {
  UNDO_CMD,
  REDO_CMD,
  SAVE_GRAPH_DATA,
  FRONT_NODE,
  BACK_NODE,
  MULTI_SELECT,
  ADD_GROUP,
  DEL_GROUP,
};
