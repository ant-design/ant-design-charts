---
category: Components
type: Graph
usage: relation
title: NetworkGraph 网络图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q9AkRIF8fF4AAAAAAAAAAAAADmJ7AQ/original
order: 7
---

展示一系列节点（如实体、对象或概念）以及它们之间的连接或关系。

```js
import { NetworkGraph } from '@ant-design/graphs';
```

## 何时使用

当需要展示复杂网络结构中的节点及其相互关系时，直观地揭示连接模式和数据流动。

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/network-graph/default.tsx">基本用法</code>
<code src="../graphs-demos/network-graph/label.tsx">节点标签</code>
<code src="../graphs-demos/network-graph/node-importance.tsx">节点重要性</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### NetworkGraph

| 属性   | 说明              | 类型              | 默认值 |
| ------ | ----------------- | ----------------- | ------ |
| data   | 数据              | [Data](#data)     | -      |
| layout | D3 Force 布局配置 | [Layout](#layout) | -      |

<embed src="../graphs-common/graph-data.zh.md"></embed>

<embed src="../graphs-common/d3-force-layout.zh.md"></embed>
