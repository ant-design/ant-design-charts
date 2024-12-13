---
category: Components
type: Graph
usage: relation
title: Fishbone 鱼骨图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*olIATZ-4qMEAAAAAAAAAAAAADmJ7AQ/original
order: 2
---

鱼骨图，又名石川图，用于系统地分析问题根本原因的图表工具，通过将问题分解为多个因素，帮助识别和解决问题。

```js
import { Fishbone } from '@ant-design/graphs';
```

## 何时使用

鱼骨分析法又名因果分析法，由日本管理大师石川馨先生发展而来，是一种透过现象看本质的分析方法，可以帮助我们快速找出引发问题的根本原因。

鱼骨分析法的基本原理是针对一个问题（作为鱼头），列明产生问题的大要因（鱼骨主干），从大要因继续深入细分，挖掘小要因（鱼骨分支），如此一层层挖掘分析下去，直至找出可以解决问题的方法或者行动的步骤。

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/fishbone/default.tsx">原因型鱼骨图</code>
<code src="../graphs-demos/fishbone/decision.tsx">决策型鱼骨图</code>
<code src="../graphs-demos/fishbone/layout.tsx">调整布局参数</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### Fishbone

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据 | [Data](#data) | - |
| labelField | 指定节点标签内容 <br> - 从数据中选择一个字段，对应字段的值作为节点的标签 <br> - 动态生成，将以节点数据为参数调用该函数，并使用返回值作为节点的标签 | string \| ((node: NodeData) => string) | 节点 ID |
| type | 鱼骨图类型 | `cause` \| `decision` | `cause` |
| defaultExpandLevel | 默认展开层级，若不指定，将展开全部 | number | - |
| layout | 布局配置 | [Layout](#layout) | - |

<embed src="../graphs-common/tree-data.zh.md"></embed>

### Layout

鱼骨图布局。参数如下：

| 属性      | 说明         | 类型                       | 默认值           |
| --------- | ------------ | -------------------------- | ---------------- |
| type      | 布局类型     | string                     | `fishbone`       |
| direction | 排布方向     | `RL` \| `LR`               | `RL`             |
| vGap      | 设置垂直间距 | number                     | 默认使用节点高度 |
| hGap      | 设置水平间距 | number                     | 默认使用节点宽度 |
| getRibSep | 设置鱼骨间距 | (node: NodeData) => number | () => 60         |
