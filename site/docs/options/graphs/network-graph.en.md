---
category: Components
type: Graph
usage: relation
title: NetworkGraph
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q9AkRIF8fF4AAAAAAAAAAAAADmJ7AQ/original
order: 7
---

Displays a series of nodes (such as entities, objects, or concepts) and their connections or relationships.

```js
import { NetworkGraph } from '@ant-design/graphs';
```

## When to Use

Use when you need to visualize nodes and their relationships in a complex network structure, revealing connection patterns and data flow intuitively.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/network-graph/default.tsx">Basic Usage</code>
<code src="../graphs-demos/network-graph/label.tsx">Node Labels</code>
<code src="../graphs-demos/network-graph/node-importance.tsx">Node Importance</code>

## API

For general graph properties, refer to: [General Graph Properties](./overview#general-graph-properties)

### NetworkGraph

| 属性   | 说明                          | 类型              | 默认值 |
| ------ | ----------------------------- | ----------------- | ------ |
| data   | The dataset                   | [Data](#data)     | -      |
| layout | D3 Force layout configuration | [Layout](#layout) | -      |

<embed src="../graphs-common/graph-data.en.md"></embed>

<embed src="../graphs-common/d3-force-layout.en.md"></embed>
