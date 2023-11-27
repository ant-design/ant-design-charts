---
title: 图表事件
order: 6
---

## 交互事件
```ts
{
  onReady: ({ chart })=> {
    // Do something
  }
}
```

如果你想要获取图表的交互信息，可以通过下面的方式：

- 监听全局 `element` 事件

```js
chart.on(`element:${ChartEvent.EventType}`, (ev) => {
  console.log(ev);
});
```

- 监听指定 `element` 事件

```js
chart.on(`${markType}:${ChartEvent.EventType}`, (ev) => {
  console.log(ev);
});

// 如，监听柱状图中的柱子的点击事件
chart.on(`interval:click`, (ev) => {
  console.log(ev);
});
```

- 监听 plot 区域事件

```js
chart.on('plot:click', (event) => console.log(event));
```

- 监听全局 component 事件

```js
chart.on('component:click', (event) => console.log(event));
```


- 监听全局 interval 事件

```js
chart.on('interval:click', (event) => console.log(event));
```

```ts
export type MarkTypes =
  | 'interval'
  | 'rect'
  | 'line'
  | 'point'
  | 'text'
  | 'cell'
  | 'area'
  | 'node'
  | 'edge'
  | 'link'
  | 'image'
  | 'polygon'
  | 'box'
  | 'vector'
  | 'lineX'
  | 'lineY'
  | 'connector'
  | 'range'
  | 'rangeX'
  | 'rangeY'
  | 'sankey'
  | 'chord'
  | 'path'
  | 'treemap'
  | 'pack'
  | 'boxplot'
  | 'shape'
  | 'forceGraph'
  | 'tree'
  | 'wordCloud'
  | 'gauge'
  | 'density'
  | 'heatmap'
  | 'liquid'

exports.ChartEvent = {
  CLICK: 'click',
  DBLCLICK: 'dblclick',
  BEFORE_PAINT: 'beforepaint',
  AFTER_PAINT: 'afterpaint',
  BEFORE_CHANGE_DATA: 'beforechangedata',
  AFTER_CHANGE_DATA: 'afterchangedata',
  BEFORE_CLEAR: 'beforeclear',
  AFTER_CLEAR: 'afterclear',
  BEFORE_DESTROY: 'beforedestroy',
  AFTER_DESTROY: 'afterdestroy',
  BEFORE_CHANGE_SIZE: 'beforechangesize',
  AFTER_CHANGE_SIZE: 'afterchangesize',
  POINTER_TAP: 'pointertap',
  POINTER_DOWN: 'pointerdown',
  POINTER_UP: 'pointerup',
  POINTER_OVER: 'pointerover',
  POINTER_OUT: 'pointerout',
  POINTER_MOVE: 'pointermove',
  POINTER_ENTER: 'pointerenter',
  POINTER_LEAVE: 'pointerleave',
  POINTER_UPOUTSIDE: 'pointerupoutside',
  DRAG_START: 'dragstart',
  DRAG: 'drag',
  DRAG_END: 'dragend',
  DRAG_ENTER: 'dragenter',
  DRAG_LEAVE: 'dragleave',
  DRAG_OVER: 'dragover',
  DROP: 'DROP',
};
```

### 点击事件

| 事件名                | 说明 | 回调参数 |
| --------------------- | ---- | -------- |
| `ChartEvent.`CLICK    | 点击 | `Event`  |
| `ChartEvent.`DBLCLICK | 双击 | `Event`  |

### 指针事件

| 事件名                         | 说明                           | 回调参数 |
| ------------------------------ | ------------------------------ | -------- |
| `ChartEvent.`POINTER_TAP       |                                | `Event`  |
| `ChartEvent.`POINTER_DOWN      | 当指针按下时                   | `Event`  |
| `ChartEvent.`POINTER_UP        | 当指针松开时                   | `Event`  |
| `ChartEvent.`POINTER_OVER      | 当指针进入目标元素时           | `Event`  |
| `ChartEvent.`POINTER_OUT       | 当指针离开目标元素时           | `Event`  |
| `ChartEvent.`POINTER_MOVE      | 当指针改变坐标时               | `Event`  |
| `ChartEvent.`POINTER_ENTER     | 当指针进入目标元素或其子元素时 | `Event`  |
| `ChartEvent.`POINTER_LEAVE     | 当指针离开目标元素或其子元素时 | `Event`  |
| `ChartEvent.`POINTER_UPOUTSIDE |                                | `Event`  |

### 拖拽事件

如果希望监听拖拽事件，需要设置 draggable 和 droppable 属性

```js
{
  style: {
    draggable: true,
    droppable, true
  }
}
```

| 事件名                  | 说明                         | 回调参数 |
| ----------------------- | ---------------------------- | -------- |
| `ChartEvent.`DRAG_START | 开始拖拽时                   | `Event`  |
| `ChartEvent.`DRAG       | 拖拽过程中                   | `Event`  |
| `ChartEvent.`DRAG_END   | 拖拽完成时                   | `Event`  |
| `ChartEvent.`DRAG_ENTER | 元素被拖拽进入目标元素内时   | `Event`  |
| `ChartEvent.`DRAG_LEAVE | 元素被拖拽离开目标元素时     | `Event`  |
| `ChartEvent.`DRAG_OVER  | 元素被拖拽悬停在目标元素内时 | `Event`  |
| `ChartEvent.`DROP       | 元素被放置到目标元素内时     | `Event`  |
