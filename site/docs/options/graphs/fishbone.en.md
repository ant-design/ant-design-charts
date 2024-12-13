---
category: Components
type: Graph
usage: relation
title: Fishbone
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*olIATZ-4qMEAAAAAAAAAAAAADmJ7AQ/original
order: 2
---

The Fishbone diagram, also known as the Ishikawa diagram, is a systematic graphical tool for analyzing the root causes of problems. By breaking a problem down into various factors, it assists in identifying and resolving issues.

```js
import { Fishbone } from '@ant-design/graphs';
```

## When to Use

The Fishbone analysis method, also referred to as cause-and-effect analysis, was developed by the Japanese management expert Kaoru Ishikawa. This method is designed to look beyond symptoms to uncover the underlying causes of a problem, helping to quickly identify the root causes that lead to the issue.

The basic principle of the Fishbone method is to identify the main causes of a problem (represented as the fish’s head) and list them as primary branches (the fish’s spine). These main causes are then further subdivided into smaller causes (represented by the fish's branches). The analysis continues in this manner until the underlying causes are fully explored, leading to potential solutions or actionable steps.

## Examples

<!-- prettier-ignore -->
<code src="../graphs-demos/fishbone/default.tsx">Cause-type Fishbone Diagram</code>
<code src="../graphs-demos/fishbone/decision.tsx">Decision-type Fishbone Diagram</code>
<code src="../graphs-demos/fishbone/layout.tsx">Adjust Layout Parameters</code>

## API

For general graph properties, refer to: [General Graph Properties](./overview#general-graph-properties)

### Fishbone

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| data | The dataset | [Data](#data) | - |
| labelField | Specifies the node label content <br> - Select a field from the data, and the corresponding field value will be used as the node label <br> - Dynamically generated: this function will be called with node data as a parameter, and its return value will be used as the node label | string \| ((node: NodeData) => string) | Node ID |
| type | Type of fishbone diagram | `cause` \| `decision` | `cause` |
| defaultExpandLevel | The default expansion level; if not specified, all levels will be expanded | number | - |
| layout | Fishbone layout configuration | [Layout](#layout) | - |

<embed src="../graphs-common/tree-data.en.md"></embed>

### Layout

Layout for fishbone diagrams. Parameters are as follows:

| Property  | Description                                       | Type                       | Default Value          |
| --------- | ------------------------------------------------- | -------------------------- | ---------------------- |
| type      | Layout type                                       | string                     | `fishbone`             |
| direction | Arrangement direction                             | `RL` \| `LR`               | `RL`                   |
| vGap      | Vertical gap                                      | number                     | Default is node height |
| hGap      | Horizontal gap                                    | number                     | Default is node width  |
| getRibSep | Function to set the spacing between fishbone ribs | (node: NodeData) => number | () => 60               |
