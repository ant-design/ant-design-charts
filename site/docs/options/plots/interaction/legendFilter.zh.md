---
title: legendFilter
---

图例筛选元素。

## 开始使用

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7_QxQ7n7YEIAAAAAAAAAAAAADmJ7AQ/original" width="640">

```ts
{
  interaction: {
    legendFilter: true
  }
}
```

## 案例

### 触发交互

```js
let chart;
const config = {
  onReady: (c) => chart = c
}
chart.emit('legend:filter', {
  data: { channel: 'color', values: ['Sports', 'Strategy'] },
});

chart.emit('legend:reset', {});
```

### 获得数据

```js
chart.on('legend:filter', (e) => {
  const { nativeEvent, data } = e;
  if (!nativeEvent) return;
  console.log(data);
});

chart.on('legend:reset', (e) => {
  const { nativeEvent } = e;
  if (!nativeEvent) return;
  console.log('end');
});
```
