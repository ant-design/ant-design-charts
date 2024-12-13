---
category: Components
type: Graph
usage: flow,relation
title: FlowGraph 流程图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*n9JgQIGi9BQAAAAAAAAAAAAADmJ7AQ/original
order: 5
---

用于直观地表示过程或系统的步骤和决策点。

```js
import { FlowGraph } from '@ant-design/graphs';
```

## 何时使用

展示了从开始到结束的整个流程。每个节点代表一个特定的步骤或决策点，边则表示步骤之间的顺序和关系。

- 适用于需要展示线性流程或步骤的场景
- 规划和跟踪项目进度，明确任务的先后顺序和依赖关系
- 构建决策树，展示不同决策点和路径的场景

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/flow-graph/default.tsx">基本用法</code>
<code src="../graphs-demos/flow-graph/hover-activate-chain.tsx">高亮元素及其所在链路</code>
<code src="../graphs-demos/flow-graph/custom-node.tsx">自定义节点</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### FlowGraph

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据 | [Data](#data) | - |
| labelField | 指定节点标签内容 <br> - 从数据中选择一个字段，对应字段的值作为节点的标签 <br> - 动态生成，将以节点数据为参数调用该函数，并使用返回值作为节点的标签 | string \| ((node: NodeData) => string) | 节点 ID |
| layout | Dagre 布局配置 | [Layout](#layout) | - |

<embed src="../graphs-common/graph-data.zh.md"></embed>

<embed src="../graphs-common/dagre-layout.zh.md"></embed>
