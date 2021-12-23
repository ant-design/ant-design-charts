---
title: Organization Graph
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
  id: string;
  value: {
    title: string;
    items: Array<{
      text: string;
      value: string;
      icon: string;
    }>;
  };
  children: Data[];
}
```

#### nodeCfg

Node configuration.

##### type

<description>**optional** _`string`_</description>

Node type, default 'indicator-card', the configuration may not be effective after modification.

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

##### label

<description>**optional** _object_</description>

Node text styles, style supports callbacks.

```ts
{
  label: {
    style: {
      fill: 'red';
    }
  }
}
```

##### anchorPoints

<description>**optional** _Number[]_</description>

The anchorPoint of a node is the link point where the related edges link to. In other words, it is the intersection of a node and its related edges. anchorPoints is a 2d array, each element represents the position of one anchor point. The positions of the anchor points in a Shape are shown below, the range of each x and y is [0, 1]:<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*EJTyR4j9VN4AAAAAAAAAAABkARQnAQ' width='600' height='300' alt='img'/>

##### padding

<description>**optional** _number | number[]_</description>

Item content padding .

```ts
{
  padding: 8,
}
```

##### autoWidth

<description>**optional** _Boolean_</description>

Whether to dynamically adjust the node width.

##### customContent

<description>**optional** _Function_</description>

Custom items, returns the maximum height of a custom items.

```ts
{
  customContent: (item, group, cfg) => {
    const { startX, startY, width } = cfg;
    const { text } = item;
    const textShape =
      text &&
      group!.addShape('text', {
        attrs: {
          textBaseline: 'top',
          x: startX,
          y: startY,
          text,
          fill: '#aaa',
        },
        // group 内唯一字段
        name: `text-${Math.random()}`,
      });
    return textShape?.getBBox().height ?? 0;
  },
}
```

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

#### markerCfg

<description>**optional** _Boolean | MarkerCfg_</description>

Marker configuration, support callback.

```ts
interface MarkerCfg {
  show?: boolean;
  collapsed?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  style?: ShapeStyle;
}
```

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
{
  /** Direction for rank nodes. Can be TB, BT, LR, or RL, where T = top, B = bottom, L = left, and R = right. */
  direction: 'TB',
  getWidth: () => {
    // The width of the node used to calculate the layout is recommended as size[0]
    return 16;
  },
  getHeight: () => {
    // The height of the node used to calculate the layout is recommended as size[1]
    return 16;
  },
  getVGap: () => {
    // The vertical clearance of each node is used in conjunction with the getHeight return value
    return 16;
  },
  getHGap: () => {
    // The vertical clearance of each node is used in conjunction with the getWidth return value
    return 100;
  },
}
```

### Functions

[Reference](/en/docs/api/common-graph/common-graph#functions)

### Events

[Reference](/en/docs/api/common-graph/common-graph#events)
