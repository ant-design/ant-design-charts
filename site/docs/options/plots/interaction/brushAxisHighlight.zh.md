---
title: brushAxisHighlight
---

框选坐标轴高亮，常常用于平行坐标系。

## 开始使用

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*y-afSbt4oroAAAAAAAAAAAAADmJ7AQ/original" width="640">

```js
/**
 * A recreation of this demo: https://observablehq.com/@d3/parallel-coordinates
 */
{
  interaction: { brushAxisHighlight: true, tooltip: false },
}
```

## 选项

| 属性                | 描述           | 类型                           | 默认值 |
| ------------------- | -------------- | ------------------------------ | ------ |
| reverse             | brush 是否反转 | `boolean`                      | false  |
| `mask${StyleAttrs}` | brush 的样式   | `number             \| string` | -      |

## 案例

### 获得数据

```js
let chart;
const config = {
  onReady: (c) => chart = c
}

chart.on('brushAxis:highlight', (event) => {
  const { data, nativeEvent } = event;
  if (nativeEvent) console.log('brushAxis:highlight', data);
});

chart.on('brushAxis:remove', (event) => {
  const { data, nativeEvent } = event;
  if (nativeEvent) console.log('brushAxis:remove', data);
});
```

### 触发交互

```js
chart.emit('brushAxis:highlight', {
  data: { selection: [[20, 30], undefined, [100, 300]] },
});

chart.emit('brushAxis:remove', {});
```
