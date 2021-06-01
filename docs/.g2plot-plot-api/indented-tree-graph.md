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
   // console.log(graph.findById(item.source).getModel());
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

Interaction mode, default `['drag-canvas', 'zoom-canvas']`.

- drag-canvas: Drag canvas
- scroll-canvas: Scroll canvas
- zoom-canvas: Zoom canvas
- drag-node: Drag node

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

Events are bound to the Graph by 'on' and removed by 'off'. OnReady returns the Graph instance.

```ts
graph.on(eventName, (evt) => {});
graph.off(eventName, (evt) => {});
```

```ts
{
  onReady: (graph) => {
    graph.on('node:mouseenter', (evt) => {
      const item = evt.item;
      graph.setItemState(item, 'hover', true);
    });
    graph.on('node:mouseleave', (evt) => {
      const item = evt.item;
      graph.setItemState(item, 'hover', false);
    });
  };
}
```

Where, the event object `evt` has the properties:

- `type`: The type of the event
- `name`: The name of the event
- `x`: The x coordinate on the canvas
- `y`: The y coordinate on the canvas
- `clientX`: The x coordinate about the client
- `clientY`: The y coordinate about the client
- `canvasX`: The x coordinate about parent DOM of the canvas
- `canvasY`: The y coordinate about parent DOM of the canvas
- `item`: The item being manipulated, which can be a node, an edge, or a Combo）
- `target`: The target Shape on the `item` being manupulated, or the canvas instance
- `bubbles`: Whether bubbles
- `defaultPrevented`: Whether prevent the original event
- `originalEvent`: The original client event object. where the `button` can be used to distinguish the left/middle/right button of the mouse on some events like `click` or `dblclick`
- `timeStamp`: The time stamp the event triggered
- `propagationStopped`: Wheher stop the propogation
- `propagationPath`: The triggering path

`eventName` can be refered to the following parts.

### Common Interaction Event

| Event Name | Description |
| --- | --- |
| click | Activated by clicking the **left button** of mouse or Enter button. |
| dblclick | Activated by double clicking the **left button** of mouse. |
| mouseenter | Activated when mouse enters an item. **This is not a bubbled event**, which means this event will not be activated when the mouse moves to the descendant items. |
| mousemove | Activated while the mouse is moving inside an item. It cannot be activated by keyboard. |
| mouseout | Activated while the mouse moves out of an item. |
| mouseover | Activated when the mouse moves over an item. |
| mouseleave | Activated when the mouse leaves an item. **This is not a bubbled event**, which means this event will not be activated when the mouse leaves the descendant items. |
| mousedown | Activated when the left or right button is clicked down. It cannot be activated by keyboard. |
| mouseup | Activated when the left or right button is released. It cannot be activated by keyboard. |
| contextmenu | Open the context menu when user clicks the right button of mouse |
| dragstart | Activated when user begins to drag. This event is applied on a dragged item. |
| drag | Activated during the dragging process. This event is applied on a dragged item. |
| dragend | Activated when user stops dragging. This event is applied on a dragged item. |
| dragenter | Activated when user drags an item into a target item. This event is applied on a dragged item. |
| dragleave | Activated when user drags an item out of a target item. This event is applied on the target item. |
| drop | Activated when user drops an item on a target item. This event is applied on the target item. |
| keydown | Activated when user presses down a button on keyboard. |
| keyup | Activated when user releases a button on keyboard. |
| wheel | Activated when user scroll the wheel. |
| touchstart | Activated when a finger touches the screen. If there are fingers on the screen already, it will be activated too. |
| touchmove | Activated during the processes of finger moving on the screen. Call `preventDefault()` to prevent scrolling. |
| touchend | Activated when a finger leaves the screen. |

### Node Interaction Event

| Event Name | Description |
| --- | --- |
| node:click | Activated when user clicks the **left button** of the mouse on the node. |
| node:dblclick | Activated when user double clicks the **left button** of the mouse on the node. |
| node:mouseenter | Activated when the mouse enters the node. |
| node:mousemove | Activated while the mouse is moving inside the node. It cannot be activated by keyboard. |
| node:mouseout | Activated while the mouse moves out of the node. |
| node:mouseover | Activated when the mouse moves over the node. |
| node:mouseleave | Activated when the mouse leaves the node. |
| node:mousedown | Activated when the left or right button is clicked down on the node. It cannot be activated by keyboard. |
| node:mouseup | Activated when the left or right button is released on the node. It cannot be activated by keyboard. |
| node:dragstart | Activated when user begins to drag the node. This event is applied on the dragged node. |
| node:drag | Activated during the dragging process on the node. This event is applied on the dragged node. |
| node:dragend | Activated when user stops dragging on the node. This event is applied on the dragged node. |
| node:dragenter | Activated when user drags an item into a target node item. This event is applied on the target node item. |
| node:dragleave | Activated when user drags an item out of a target node item. This event is applied on the target node item. |
| node:dragover | Activated when user drags an item over a target node item. This event is applied on the target node item |
| node:drop | Activated when user drops an item on a target item. This event is applied on the target item. |
| node:touchstart | On touch screen, this event is activated when user begin to touch the node |
| node:touchmove | On touch screen, this event is activated when user is touching the node |
| node:touchend | On touch screen, this event is activated when user finish touching the node |
| node:contextmenu | Open the context menu when user clicks the right button of mouse on the node. |

### Edge Interaction Event

| Event Name | Description |
| --- | --- |
| edge:click | Activated when user clicks the **left button** of the mouse on the edge. |
| edge:dblclick | Activated when user double clicks the **left button** of the mouse on the edge. |
| edge:mouseenter | Activated when the mouse enters the edge. |
| edge:mousemove | Activated while the mouse is moving inside the edge. It cannot be activated by keyboard. |
| edge:mouseout | Activated while the mouse moves out of the edge. |
| edge:mouseover | Activated when the mouse moves over the edge. |
| edge:mouseleave | Activated when the mouse leaves the edge. |
| edge:mousedown | Activated when the left or right button is clicked down on the edge. It cannot be activated by keyboard. |
| edge:mouseup | Activated when the left or right button is released on the edge. It cannot be activated by keyboard. |
| edge:dragenter | Activated when user drags an item into a target edge item. This event is applied on the target edge item. |
| edge:dragleave | Activated when user drags an item out of a target edge item. This event is applied on the target edge item. |
| edge:dragover | Activated when user drags an item over a target edge item. This event is applied on the target edge item |
| edge:drop | Activated when user drops an item on a target edge item. This event is applied on the target edge item. |
| edge:contextmenu | Open the context menu when user clicks the right button of mouse on the edge |

## Canvas Interaction Event

| Event Name | Description |
| --- | --- |
| canvas:click | Activated when user clicks the **left button** of the mouse on the canvas. |
| canvas:dblclick | Activated when user double clicks the **left button** of the mouse on the canvas. |
| canvas:mouseenter | Activated when the mouse enters the canvas. |
| canvas:mousemove | Activated while the mouse is moving inside the canvas. It cannot be activated by keyboard. |
| canvas:mouseout | Activated while the mouse moves out of the canvas. |
| canvas:mouseover | Activated when the mouse moves over the canvas. |
| canvas:mouseleave | Activated when the mouse leaves the canvas. |
| canvas:mousedown | Activated when the left or right button is clicked down on the canvas. It cannot be activated by keyboard. |
| canvas:mouseup | Activated when the left or right button is released on the canvas. It cannot be activated by keyboard. |
| canvas:contextmenu | Open the context menu when user clicks the right button of mouse on the canvas. |
| canvas:dragstart | Activated when user begins to drag the canvas. This event is applied on the dragged canvas. |
| canvas:drag | Activated during the dragging process on the canvas. This event is applied on the dragged canvas. |
| canvas:dragend | Activated when user stops dragging on the canvas. This event is applied on the dragged canvas. |
| canvas:dragenter | Activated when user drags the canvas into a target item. This event is applied on the target item. |
| canvas:dragleave | Activated when user drags the canvas out of a target item. This event is applied on the target item. |
| canvas:drop | Activated when user drags and drops an item on the canvas. |
| canvas:touchstart | On touch screen, this event is activated when user begin to touch the canvas |
| canvas:touchmove | On touch screen, this event is activated when user is touching the canvas |
| canvas:touchend | On touch screen, this event is activated when user finish touching the canvas |
