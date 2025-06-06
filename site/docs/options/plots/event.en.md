---
title: event
order: 9
---

Ant Design Charts exposes some events to get the chart life cycle and interaction information. Ant Design Charts exports a `ChartEvent` type, used to define the type of event.

<img alt="click event" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*z61ZQ5DM5IUAAAAAAAAAAAAADmJ7AQ/original" width="800" />

```js
{
  onReady: ({ chart }) => {
    chart.on('interval:click', (e) => {
      console.log(e.data.data); // 展示点击的数据
    });
    chart.on('element:click', (e) => {
      console.log(e.data.data); // 展示点击的数据
    });
  }
}
```

## Interaction events

If you want to get the interactive information of the chart, you can do the following:

- Monitor the global `element` event

```js
chart.on(`element:${ChartEvent.EventType}`, (ev) => {
  console.log(ev);
});
```

- Monitor specified `element` event

```js
chart.on(`${markType}:${ChartEvent.EventType}`, (ev) => {
  console.log(ev);
});
chart.on(`interval:${ChartEvent.CLICK}`, (ev) => {
  console.log(ev);
});
```

- Listen to plot area events

```js
chart.on('plot:click', (event) => console.log(event));
```

- Listen to global component events

```js
chart.on('component:click', (event) => console.log(event));
```

- Listen to global label events

```js
chart.on('label:click', (event) => console.log(event));
```

### Click event

| Event name            | Explanation  | Callback parameters |
| --------------------- | ------------ | ------------------- |
| `ChartEvent.`CLICK    | Click        | `Event`             |
| `ChartEvent.`DBLCLICK | Double click | `Event`             |

### Pointer event

| Event name                     | Explanation                                                      | Callback parameters |
| ------------------------------ | ---------------------------------------------------------------- | ------------------- |
| `ChartEvent.`POINTER_TAP       |                                                                  | `Event`             |
| `ChartEvent.`POINTER_DOWN      | When the pointer is pressed                                      | `Event`             |
| `ChartEvent.`POINTER_UP        | When the pointer is released                                     | `Event`             |
| `ChartEvent.`POINTER_OVER      | When the pointer enters the target element                       | `Event`             |
| `ChartEvent.`POINTER_OUT       | When the pointer leaves the target element                       | `Event`             |
| `ChartEvent.`POINTER_MOVE      | When the pointer changes coordinates                             | `Event`             |
| `ChartEvent.`POINTER_ENTER     | When the pointer enters the target element or its child elements | `Event`             |
| `ChartEvent.`POINTER_LEAVE     | When the pointer leaves the target element or its child elements | `Event`             |
| `ChartEvent.`POINTER_UPOUTSIDE |                                                                  | `Event`             |

### Drag event

If you want to listen to drag events, you need to set the draggable and droppable properties.

```js
{
  "style": {
    "droppable": true,
    "draggable": true
  }
}
```

| Event name              | Explanation                                                       | Callback parameters |
| ----------------------- | ----------------------------------------------------------------- | ------------------- |
| `ChartEvent.`DRAG_START | When starting to drag                                             | `Event`             |
| `ChartEvent.`DRAG       | During dragging                                                   | `Event`             |
| `ChartEvent.`DRAG_END   | When dragging is complete                                         | `Event`             |
| `ChartEvent.`DRAG_ENTER | When the element is dragged into the target element               | `Event`             |
| `ChartEvent.`DRAG_LEAVE | When the element is dragged away from the target element          | `Event`             |
| `ChartEvent.`DRAG_OVER  | When the element is dragged and hovered within the target element | `Event`             |
| `ChartEvent.`DROP       | When the element is placed inside the target element              | `Event`             |

## Typical cases

For details, see Interaction - Events [Examples](/en/examples#interaction-event)
