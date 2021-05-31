---
title: Indented Tree Graph
---

### Basic configuration

#### width

<description>**optional** _number_ _default:_ `500`</description>

Set the width of the graph.

#### height

<description>**optional** _number_ _default:_ `500`</description>

Set the height of the graph.

#### data

Data, see the sample code, `title`、`body`、`footer` only for nodeType: `card`, other nodeType types use label.

```ts
// value、valueStyle only apply to `footer`.
interface Items {
  content: string | number;
  value?: string | number;
  style?: CSSStyleDeclaration;
  valueStyle?: CSSStyleDeclaration;
}

type NodeConfig = string | number | Items;

// Refer to the sample code for details.
interface Data {
  id: string;
  title?: NodeConfig;
  body?: NodeConfig;
  footer?: NodeConfig;
  children?: Data[];
  [key: string]?: unknow
}
```

#### edgeType

Edge type, default `cubic-horizontal`

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

#### nodeType

<description>**optional** _`card`_</description>

Node type, default `card`, Built-in nodes include `card，circle，rect，ellipse，diamond，triangle，star，image，modelRect，donut`. <br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*FY3RTbDCz_8AAAAAAAAAAABkARQnAQ' width='750' height='100' alt='img'/> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NRJ7RpkMPNsAAAAAAAAAAAAAARQnAQ' width='50' alt='img'/>

#### nodeSize

<description>**optional** _Number[] | false | [120, 40]_</description>

The (minimum) size of the node. Some graphs may be adapted to the size of the node content.

#### nodeStyle

<description>**optional** _object | Function_</description>

Node style

```ts
{
  nodeStyle: {
    stroke: '#40a9ff',
  }
}
// callback
{
  nodeStyle: (node, graph)=>{
    return {
      stroke: '#40a9ff',
    }
  }
}
```

#### nodeStateStyles

<description>**optional** _object_</description>

Node style configuration items in different states.

```ts
{
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
  selected: {
    stroke: '#f00',
    lineWidth: 3,
  }
}
```

#### edgeStyle

<description>**optional** _object | Function_</description>

Edge style.

```ts
{
  edgeStyle: {
    stroke: '#40a9ff',
  }
}
// callback
{
  edgeStyle: (node, graph)=>{
    /**
     * graph.findById(item.target).getModel()
     * item.source: Get source data
     * item.target: Get target data
     */
    // console.log(graph.findById(item.target).getModel());
    return {
      stroke: '#40a9ff',
      lineWidth: Math.random() * 10,
    }
  }
}
```

#### edgeStateStyles

<description>**optional** _object_</description>

Side style configuration items in different states.

```ts
{
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
  selected: {
    stroke: '#f00',
    lineWidth: 3,
  },
}
```

#### titleStyle

<description>**optional** _object_</description>

The global title style configuration has a lower priority than the style within data.

```ts
{
  titleStyle: {
    fill: '#000';
  }
}
```

#### bodyStyle

<description>**optional** _object_</description>

The global body style configuration takes precedence over the data style.

```ts
{
  bodyStyle: {
    fill: '#000';
  }
}
```

#### footerStyle

<description>**optional** _object_</description>

The global footer style configuration takes precedence over the style within data.

```ts
{
  footerStyle: {
    fill: '#000';
  }
}
```

#### nodeAnchorPoints

<description>**optional** _Number[]_</description>

The anchorPoint of a node is the link point where the related edges link to. In other words, it is the intersection of a node and its related edges. anchorPoints is a 2d array, each element represents the position of one anchor point. The positions of the anchor points in a Shape are shown below, the range of each x and y is [0, 1]:<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*EJTyR4j9VN4AAAAAAAAAAABkARQnAQ' width='600' height='300' alt='img'/>

#### behaviors

<description>**optional** _Number[]_</description>

Interaction mode, default `['drag-canvas', 'zoom-canvas']`，[Detail](https://g6.antv.vision/en/docs/manual/middle/states/defaultBehavior).

#### collapseExpand

<description>**optional** _Boolean_</description>

Collapseable, the default value `true`.

#### showArrow

<description>**optional** _Boolean_</description>

Whether to display tail arrows, default to 'true'.

#### layout

<description>**optional** _object_</description>

layout.

```ts
{
  getHeight: () => {
    // The height of each node
    return 60;
  },
  getWidth: () => {
    // The width of each node
    return 16;
  },
  getVGap: () => {
    // Vertical clearance of each node
    return 16;
  },
  getHGap: () => {
    // Horizontal clearance of each node
    return 100;
  },
}
```

### Events

Events are bound to the Graph by 'on' and removed by 'off'. OnReady returns the Graph instance with the event name [details](https://g6.antv.vision/en/docs/api/Event).

```ts
graph.on('type:eventName', callback);
graph.off('type:eventName', callback);
```

```ts
{
  onReady: (graph) => {
    graph.on('node:mouseenter', (evt: IG6GraphEvent) => {
      const item = evt.item as INode;
      graph.setItemState(item, 'hover', true);
    });
    graph.on('node:mouseleave', (evt: IG6GraphEvent) => {
      const item = evt.item as INode;
      graph.setItemState(item, 'hover', false);
    });
  };
}
```
