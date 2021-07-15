---
title: Graph Common configuration
order: 3
nav:
  title: Docs
  order: 1
---

## Functions

#### graph.downloadFullImage(name, type, imageConfig)

Export the whole graph as an image, whatever (a part of) the graph is out of the screen.

**Parameters**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | false | The name of the image. 'graph' by default. |
| type | `'image/png'` / `'image/jpeg'` / `'image/webp'` / `'image/bmp'` | false | The type of the image. When the `renderer` of the graph is `'canvas'`(default), `type` takes effect. When the `renderer` is `'svg'`, `toFullDataURL` will export a svg file |
| imageConfig | Object | false | The configuration for the exported image, detials are shown below |

where the `imageConfig` is the configuration for exported image:

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| backgroundColor | String | false | The background color of the image. If it is not assigned, the background will be transparent. |
| padding | Number / Number[] | false | The top, right, bottom, right paddings of the exported image. When its type is number, the paddings around the graph are the same |

**Usage**

```javascript
{
  onReady: (graph) => {
    graph.downloadFullImage('tree-graph', {
      backgroundColor: '#ddd',
      padding: [30, 15, 15, 15],
    });
  };
}
```

#### graph.toFullDataURL(callback, type, backgroundColor)

Generate url of the image of the whole graph including the part out of the view port.

**Parameters**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| callback | Function | true | The callback function after finish generating the dataUrl of the full graph |
| Asynchronously |
| type | `'image/png'` / `'image/jpeg'` / `'image/webp'` / `'image/bmp'` | false | The type of the image. When the `renderer` of the graph is `'canvas'`(default), `type` takes effect. When the `renderer` is `'svg'`, `toFullDataURL` will export a svg file |
| imageConfig | Object | false | The configuration for the exported image, detials are shown below |

where the `imageConfig` is the configuration for exported image:

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| backgroundColor | String | false | The background color of the image. If it is not assigned, the background will be transparent. |
| padding | Number / Number[] | false | The top, right, bottom, right paddings of the exported image. When its type is number, the paddings around the graph are the same |

No return value, you can process the result in the callback function as shown below:

**Usage**

```ts
 onReady: (graph) => {
    graph.toFullDataUrl(
      // The first parameter: callback, required
      (res) => {
        // ... something
        console.log(res); // e.g. print the result
      },
      // The second and third parameter is not required
      'image/jpeg',
      (imageConfig: {
        backgroundColor: '#fff',
        padding: 10,
      }),
    );
 }
```

#### graph.zoom(ratio, center)

Zoom Graph.

**Usage**

```ts
{
  onReady: (graph) => {
    // 缩小 0.5
    graph.zoom(0.5);
    // 以[100, 100]为中心缩小 0.5
    graph.zoom(0.5, { x: 100, y: 100 });
  };
}
```

## Events

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
