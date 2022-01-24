/**
 * 全量 Command，用户通过 name 指定，支持配置式和命令式
 * enum Command {Undo, Redo, SaveGraphData,frontNode,backNode}
 */

import { CommandItem, FlowchartProps } from '../../interface';

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

const COPY = 'graph-copy-selection';

const PASTE = 'graph-paste-selection';

export const CommandPool = {
  UNDO_CMD,
  REDO_CMD,
  SAVE_GRAPH_DATA,
  FRONT_NODE,
  BACK_NODE,
  MULTI_SELECT,
  ADD_GROUP,
  DEL_GROUP,
  COPY,
  PASTE,
};

export const defaultCommands = [
  {
    command: CommandPool.REDO_CMD,
    tooltip: '重做',
    iconName: 'RedoOutlined',
  },
  {
    command: CommandPool.UNDO_CMD,
    tooltip: '撤销',
    iconName: 'UndoOutlined',
  },
  {
    command: CommandPool.FRONT_NODE,
    tooltip: '置前',
    iconName: 'VerticalAlignTopOutlined',
  },
  {
    command: CommandPool.BACK_NODE,
    tooltip: '置后',
    iconName: 'VerticalAlignBottomOutlined',
  },
  {
    command: CommandPool.MULTI_SELECT,
    tooltip: '开启框选',
    iconName: 'GatewayOutlined',
  },
  {
    command: CommandPool.ADD_GROUP,
    tooltip: '新建群组',
    iconName: 'GroupOutlined',
  },
  {
    command: CommandPool.DEL_GROUP,
    tooltip: '解散群组',
    iconName: 'UngroupOutlined',
  },
  {
    command: CommandPool.COPY,
    tooltip: '复制',
    iconName: 'CopyOutlined',
  },
  {
    command: CommandPool.PASTE,
    tooltip: '粘贴',
    iconName: 'SnippetsOutlined',
  },
  {
    command: CommandPool.SAVE_GRAPH_DATA,
    tooltip: '保存',
    iconName: 'SaveOutlined',
  },
] as CommandItem[];
