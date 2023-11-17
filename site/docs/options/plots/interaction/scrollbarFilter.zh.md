---
title: scrollbarFilter
order: 1
---

滚动条筛选是一个默认交互，当设置了 scrollbar 默认就会有这个交互。关于 scrollbar 组件的配置，见文档 [component/scrollbar](/spec/component/scrollbar)。

## 开始使用

```js
{
  scrollbar: { y: { ratio: 0.3 }, x: { ratio: 0.5 } },
}
```

## 案例

### 触发事件

```js
let chart;
const config = {
  onReady: (c) => chart = c
}
chart.emit('scrollbarX:filter', {
  data: { selection: [['2001-03'], undefined] },
});

chart.emit('scrollbarY:filter', {
  data: { selection: [undefined, [50, 550]] },
});
```

### 监听数据

```js
chart.on('scrollbarX:filter', (event) => {
  const { data, nativeEvent } = event;
  if (nativeEvent) console.log('scrollbarX:filter', data.selection);
});

chart.on('scrollbarY:filter', (event) => {
  const { data, nativeEvent } = event;
  if (nativeEvent) console.log('scrollbarY:filter', data.selection);
});
```
