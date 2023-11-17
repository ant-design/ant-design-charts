---
title: legendHighlight
---

图例高亮元素。

## 开始使用

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*M4eVSKTMPs4AAAAAAAAAAAAADmJ7AQ/original" width="640">

```ts
{
  state: {
    inactive: { opacity: 0.5 },
  },
  interaction: {
    legendHighlight: true
  }
}
```

## 案例

### 获得数据

```js
let chart;
const config = {
  onReady: (c) => chart = c
}
chart.on('legend:highlight', (e) => {
  const { nativeEvent, data } = e;
  if (!nativeEvent) return;
  console.log(data);
});

chart.on('legend:unhighlight', (e) => {
  const { nativeEvent } = e;
  if (!nativeEvent) return;
  console.log('unhighlight');
});
```

### 触发交互

```js
chart.emit('legend:highlight', {
  data: { channel: 'color', value: 'Increase' },
});

chart.emit('legend:unhighlight', {});
```
