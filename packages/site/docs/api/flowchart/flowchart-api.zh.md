---
title: Flowchart
order: 1
---

### 基本配置

#### data

<description>**optional** *Datum* </description>

默认数据

```ts
type Datum = {
  nodes?: unknown[];
  egdes?: unknown[];
};
```

#### isAutoCenter

<description>**optional** *boolean* *default:* `false`</description>

画布是否自动居中


#### nodePanelProps

<description>**optional** *NodePanelProps* </description>

节点面板配置

| 属性名 | 类型 | 描述 | 默认值 | 是否必填 |
|-------|-------|------|------|---------|
| showHeader | boolean | 是否展示 header | true | false |
| defaultActiveKey | string[]  | 默认展开的面板，custom: 自定义节点；official: 内置节点 | ['custom', 'official'] | ['custom'] |
| registerNode | RegisterNode  | 自定义节点 | - | false |

*RegisterNode*

| 属性名 | 类型 | 描述 | 默认值 | 是否必填 |
|-------|-------|------|------|---------|
| title | string | 自定义节点标题 | 自定级节点 | false |
| nodes | CustomNode[]  | 节点数组 | - | false |

```ts
interface CustomNode {
  /** 节点名称，唯一 */
  name: string;
  /** 节点 React 组件 */
  component: NsGraph.INodeRender<any>;
  /** popover 组件 */
  popover?: React.Component<any>;
  /** 默认标签 */
  label?: string;
  /** 默认宽度 */
  width?: number;
  /** 默认高度 */
  height?: number;
  /** 连接锚点配置，默认上下左右四个 */
  ports?: NsGraph.INodeConfig['ports'];
}
```

#### canvasProps

<description>**optional** *CanvasProps* </description>

主画布配置


| 属性名 | 类型 | 描述 | 默认值 | 是否必填 |
|-------|-------|------|------|---------|
| position | IPosition | 位置配置 | `{ top: 40, left: 240, right: 240, bottom: 0 }` | false |
| config | X6Config  | 网格线等配置 | - | false |

```ts
interface IPosition {
  width?: number;
  height?: number;
  lineHeight?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}
```

#### toolbarPanelProps

<description>**optional** *ToolbarPanelProps* </description>

Toolbar 配置


| 属性名 | 类型 | 描述 | 默认值 | 是否必填 |
|-------|-------|------|------|---------|
| position | IPosition | 位置配置 | `{ top: 0, left: 240, right: 240, bottom: 0 }` | false |
| commands | CommandItem[]  | 自定义命令 | - | false |

```ts
type Command =
  | 'undo-cmd'
  | 'redo-cmd'
  | 'front-node'
  | 'back-node'
  | 'save-graph-data'
  | 'multi-select'
  | 'add-group'
  | 'delete-group'
  | 'graph-toggle-multi-select'
  | 'graph-copy-selection'
  | 'graph-paste-selection';

type CommandItem = {
  /** 命令 */
  command: Command;
  /** 名称 */
  text?: string;
  /** tooltip */
  tooltip?: string;
  /**
   * iconName
   * 对应 antd/icons，不存在时需要先注册
   * eg: 'RedoOutlined'
  */
  iconName?: string;
}
```

```tsx
import { IconStore } from '@ant-design/charts'
import { SaveOutlined } from '@ant-design/icons';

IconStore.set('SaveOutlined', SaveOutlined);
```

#### scaleToolbarPanelProps

<description>**optional** *ScaleToolbarPanelProps* </description>

缩放控件


| 属性名 | 类型 | 描述 | 默认值 | 是否必填 |
|-------|-------|------|------|---------|
| position | IPosition | 位置配置 | `{ top: 12, right: 12 }` | false |


#### detailPanelProps

<description>**optional** *DetailPanelProps* </description>

form 表单

| 属性名 | 类型 | 描述 | 默认值 | 是否必填 |
|-------|-------|------|------|---------|
| position | IPosition | 位置配置 | `{  width: 240, top: 0, bottom: 0, right: 0 }` | false |
| controlMapService | ControlMapService | 注册自定义`Form`组件，参考示例 | - | false |
| formSchemaService | FormSchemaService | 控制面板切换逻辑，参考示例 | - | false |



#### contextMenuPanelProps

<description>**optional** *ContextMenuPanelProps* </description>

右键菜单

### 事件

#### onReady

<description>**optional** *Function* </description>

组件装载完成回调，返回图表实例。

#### onSave

<description>**optional** *Function* </description>

点击回调，仅支持 save-graph-data ，返回画布数据，可用于 data 配置。


#### onAddNode

<description>**optional** *Function* </description>

新增画布节点时的回调，返回节点配置。


#### onAddEdge

<description>**optional** *Function* </description>

新增边时的回调，返回边配置。


#### onConfigChange

<description>**optional** *Function* </description>

节点或边更新数据时的回调，

```ts
 /** 节点或边更新数据时调用 */
  onConfigChange?: (params: { data: Datum; type: string; config?: NsGraph.INodeConfig | NsGraph.IEdgeConfig }) => void;
```

#### onDestroy

<description>**optional** *Function* </description>

app 销毁前的回调

