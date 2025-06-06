---
title: 事件（Event）
order: 9
---

Ant Design Charts 对外暴露了一些事件，用于获取图表的生命周期，以及交互信息。Ant Design Charts 导出了一个 `ChartEvent` 类型，用于定义事件的类型。

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

## 交互事件

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
chart.on(`interval:${ChartEvent.CLICK}`, (ev) => {
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

- 监听全局 label 事件

```js
chart.on('label:click', (event) => console.log(event));
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
  "style": {
    "droppable": true,
    "draggable": true
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

## 典型案例

详见交互-事件[示例](/examples#interaction-event)
