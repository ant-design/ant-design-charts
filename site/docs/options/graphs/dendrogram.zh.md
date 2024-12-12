---
category: Components
type: Graph
usage: relation
title: Dendrogram 生态树图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*mvnUTaA91H0AAAAAAAAAAAAADmJ7AQ/original
order: 3
---

将事物或现象分解成树枝状结构，来系统地展示其构成关系或内在逻辑关系。

```js
import { Dendrogram } from '@ant-design/graphs';
```

## 何时使用

适用于展示数据的层级关系、明确问题的重点、寻求达成目标的合理步骤。

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/dendrogram/default.tsx">基本用法</code>
<code src="../graphs-demos/dendrogram/direction.tsx">排布方向</code>
<code src="../graphs-demos/dendrogram/compact.tsx">紧凑模式</code>
<code src="../graphs-demos/dendrogram/collapse-expand.tsx">展开/收起节点</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### Dendrogram

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 语法糖，设置树图节点的排布方向。当设置 layout.direction 时会以后者为准 | `vertical` \| `horizontal` \| `radial` | `horizontal` |
| compact | 是否为紧凑模式 | boolean | false |
| data | 设置数据 | [Data](#data) | - |
| layout | 设置布局配置 | [Layout](#layout) | - |
| behaviors | 设置用户交互事件 | [Behaviors](#behaviors) | - |
| plugins | 设置画布插件 | [Plugins](#plugins) | - |

<embed src="../graphs-common/option-data.zh.md"></embed>

### Layout

树图布局，可配置的参数如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局类型 | string | `dendrogram` |
| direction | 布局方向 | `LR` \| `RL` \| `TB` \| `BT` \| `H` \| `V` | `RL` |
| nodeSep | 节点间距 | number | 40 |
| rankSep | 层与层之间的间距 | number | 200 |
| radial | 是否按照辐射状布局。若 radial 为 true，建议 direction 设置为 `LR` 或 `RL` |  |  |

<embed src="../graphs-common/option-behaviors.zh.md"></embed>

<embed src="../graphs-common/option-plugins.zh.md"></embed>
