---
title: 资金流向图
---

### 基础配置

> 请结合[通用配置](/zh-CN/guide/common-graph#基础配置)

#### data

数据，详见示例代码。

```ts
// 具体参考示例代码
interface Data {
  nodes: Array<{
    id: string;
    value: {
      text: string;
      icon?: string;
    };
  }>;
  edges: Array<{
    source: string;
    target: string;
    value: {
      text?: string;
      subText?: string;
  }>;
}
```

#### nodeCfg

节点配置

##### type

<description>**optional** _`string`_</description>

节点类型，默认 `fund-card`, 修改后部分配置可能不生效。

#### edgeCfg

边配置

##### type

边类型，默认 'fund-polyline'，修改后部分配置可能不生效。

#### layout

<description>**optional** _object_</description>

布局。

```ts
{
  /** Direction for rank nodes. Can be TB, BT, LR, or RL, where T = top, B = bottom, L = left, and R = right. */
  rankdir: 'LR',
   /** Number of pixels that separate nodes vertically in the layout. */
  nodesep: 30,
  /** Number of pixels that separate nodes horizontally in the layout. */
  ranksep: 50,
}
```
