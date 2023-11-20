---
title: sliderFilter
order: 1
---

缩略轴筛选是一个默认交互，当设置了 slider 默认就会有这个交互。

## 开始使用

<img alt="slider" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*nNa7R6quqkwAAAAAAAAAAAAADmJ7AQ/original" width="600" />

```js
{
  slider: { y: true, x: true },
}
```

## 案例

### 触发事件

```js
let chart;
const config = {
  onReady: (c) => chart = c
}
chart.emit('sliderX:filter', {
  data: { selection: [['2001-01', '2001-03'], undefined] },
});

chart.emit('sliderY:filter', {
  data: { selection: [undefined, [50, 550]] },
});
```

### 监听数据

```js
chart.on('sliderX:filter', (event) => {
  const { data, nativeEvent } = event;
  if (nativeEvent) console.log('sliderX:filter', data.selection);
});

chart.on('sliderY:filter', (event) => {
  const { data, nativeEvent } = event;
  if (nativeEvent) console.log('sliderY:filter', data.selection);
});
```
