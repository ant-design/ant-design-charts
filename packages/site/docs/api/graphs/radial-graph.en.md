---
title: Radial Graph
---

### Base configuration

#### width

<description>**optional** _number_ _default:_ `500`</description>

Set the width of the graph.

#### height

<description>**optional** _number_ _default:_ `500`</description>

Set the height of the graph.

#### data

Data, see the sample code.

```ts
// Refer to the sample code for details.
interface Data {
  nodes: Array<{
    id: string;
    value: {
      title: string;
      items: Array<{
        text: string;
        value: string;
        icon: string;
      }>;
    };
  }>;
  edges: Array<{
    source: string;
    target: string;
    value: string;
  }>;
}
```

#### nodeCfg

Node configuration.

##### type

<description>**optional** _`string`_</description>

Node type, default `rect`, support `icon-node`, Built-in nodes include `circle，rect，ellipse，diamond，triangle，star，image，modelRect，donut`. <br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*FY3RTbDCz_8AAAAAAAAAAABkARQnAQ' width='750' height='100' alt='img'/> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NRJ7RpkMPNsAAAAAAAAAAAAAARQnAQ' width='50' alt='img'/>

##### size

<description>**optional** _Number[] | false | [120, 40]_</description>

The (minimum) size of the node. Some graphs may be adapted to the size of the node content.

##### style

<description>**optional** _object | Function_</description>

Node style with support for callbacks.

```ts
{
  style: {
    stroke: 'red';
  }
}
```

##### labelCfg

<description>**optional** _object_</description>

Node text styles, style supports callbacks.

```ts
{
  labelCfg: {
    style: {
      fill: 'red';
    }
  }
}
```

##### asyncData

<description>**optional** _Function_</description>

Asynchronously data when a node is double-clicked, and the acquisition time can also be set automatically through Menu. See the example for details


##### nodeStateStyles

<description>**optional** _object_</description>

Node style configuration items in different states.

```ts
{
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
}
```

#### edgeCfg

Edge configuration.

##### type

Edge type, default `polyline`

- line: straight line without control points;
- polyline: polyline with one or more control points;
- arc;
- quadratic: quadratic bezier curve;
- cubic: cubic bezier curve;
- cubic-vertical：vertical cubic bezier curve. The user can not assign the control point for this type of edge;
- cubic-horizontal: horizontal cubic bezier curve. The user can not assign the control point for this type of edge;
- loop: self-loop edge.

<br /> 
<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*H6Y5SrPstw4AAAAAAAAAAABkARQnAQ' width='750' height='120' alt='img'/>

##### label

<description>**optional** _object_</description>

Edge text styles, style supports callbacks.

```ts
{
  label: {
    content: string | ((edge: EdgeCfg) => string);
    style: {
      fill: 'red';
    }
  }
}
```

##### startArrow

<description>**optional** _object_</description>

Edge start arrow.

```ts
interface ArrowConfig {
  /** Arrow type */
  type?: 'vee' | 'triangle';
  /** Arrow offset */
  d?: number;
  /** Arrow path */
  path?: string;
  /** Arrow stroke */
  stroke?: string;
  /** Arrow fill */
  fill?: string;
}
// eg
{
  startArrow: {
    fill: 'red';
  },
}
```

##### endArrow

<description>**optional** _object_</description>

Edge end arrow.

```ts
{
  endArrow: {
    fill: 'red';
  },
}
```

##### edgeStateStyles

<description>**optional** _object_</description>

Side style configuration items in different states.

```ts
{
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
}
```

#### behaviors

<description>**optional** _Number[]_</description>

Interaction mode, default `['drag-canvas', 'zoom-canvas']`.

- drag-canvas: Drag canvas
- scroll-canvas: Scroll canvas
- zoom-canvas: Zoom canvas
- drag-node: Drag node


#### animate

<description>**optional** _Boolean_</description>

Whether to turn on animation, default to 'true'.

#### autoFit

<description>**optional** _Boolean_</description>

Whether to scale node size adaptive container. Default value is 'true '.

#### minimapCfg

<description>**optional** _objecr_</description>

Min map configruation.

```ts
interface MiniMapConfig {
  show?: boolean;
  viewportClassName?: string;
  type?: 'default' | 'keyShape' | 'delegate';
  size?: number[];
  delegateStyle?: ShapeStyle;
  refresh?: boolean;
  padding?: number;
}
```

#### layout

<description>**optional** _object_</description>

Layout.

```ts
interface Layout{
  /** 布局中心 */
  center?: PointTuple;
  /** 停止迭代的最大迭代数 */
  maxIteration?: number;
  /** 中心点，默认为数据中第一个点 */
  focusNode?: string | Node | null;
  /** 每一圈半径 */
  unitRadius?: number | null;
  /** 默认边长度 */
  linkDistance?: number;
  /** 是否防止重叠 */
  preventOverlap?: boolean;
  /** 节点直径 */
  nodeSize?: number | number[] | undefined;
  /** 节点间距，防止节点重叠时节点之间的最小距离（两节点边缘最短距离） */
  nodeSpacing?: number | Function | undefined;
  /** 是否必须是严格的 radial 布局，即每一层的节点严格布局在一个环上。preventOverlap 为 true 时生效 */
  strictRadial?: boolean;
  /** 防止重叠步骤的最大迭代次数 */
  maxPreventOverlapIteration?: number;
  sortBy?: string | undefined;
  sortStrength?: number;
  width?: number | undefined;
  height?: number | undefined;
}
```

### Functions

[Reference](/en/docs/api/common-graph/common-graph#functions)

### Events

[Reference](/en/docs/api/common-graph/common-graph#events)
