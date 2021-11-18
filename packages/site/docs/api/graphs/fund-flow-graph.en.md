---
title: Fund Flow Graph
---

### Base configuration

> Please combine with [General Configuration](/en/docs/api/common/common-graph#basic-configuration)

#### data

Data, see the sample code.

```ts
// Refer to the sample code for details.
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

Node configration.

##### type

<description>**optional** _`string`_</description>

The default edge type is `fund-card`, Some configurations may not take effect after the modification.

#### edgeCfg

Edge configuration.

##### type

The default edge type is 'fund-line'. Some configurations may not take effect after modification.

#### layout

<description>**optional** _object_</description>

Layout.

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
