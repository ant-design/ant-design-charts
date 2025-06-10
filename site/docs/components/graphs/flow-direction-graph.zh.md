---
category: Components
type: Graph
usage: flow,relation
title: FlowDirectionGraph 流向图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jOEPRKWxPE0AAAAAAAAAAAAADmJ7AQ/original
order: 6
---

用于直观展示流动路径和量值变化。

```js
import { FlowDirectionGraph } from '@ant-design/graphs';
```

## 何时使用

适用于信息繁杂、需要明确逻辑关系或决策支持时，能直观、清晰地展示数据流向和关系，提升理解和决策效率。

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/flow-direction-graph/default.tsx">基本用法</code>
<code src="../graphs-demos/flow-direction-graph/hover-activate-neighbor.tsx">高亮相邻元素</code>
<code src="../graphs-demos/flow-direction-graph/hover-activate-chain.tsx">高亮元素及其所在链路</code>
<code src="../graphs-demos/flow-direction-graph/custom.tsx">自定义</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### FlowDirectionGraph

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据 | [Data](#data) | - |
| labelField | 指定节点标签内容 <br> - 从数据中选择一个字段，对应字段的值作为节点的标签 <br> - 动态生成，将以节点数据为参数调用该函数，并使用返回值作为节点的标签 | string \| ((node: NodeData) => string) | 节点 ID |
| layout | Dagre 布局配置 | [Layout](#layout) | - |

<embed src="../graphs-common/graph-data.zh.md"></embed>

<embed src="../graphs-common/dagre-layout.zh.md"></embed>
