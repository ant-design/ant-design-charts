---
title: elementSelect
---

选择点击的元素。

## 开始使用

<img alt="example" src="https://gw.alipayobjects.com/zos/raptor/1670298301906/element-select.gif" width="640">

```ts
{
  state: {
    unselected: { opacity: 0.5 },
    selected: { fill: 'orange' }
  },
  interaction: {
    elementSelect: true
  }
}
```

## 选项

| 属性                      | 描述           | 类型         | 默认值 |
| ------------------------- | -------------- | ------------ | ------ |
| background                | 是否高亮背景   | `boolean`    | false  |
| offset                    | 主方向的偏移量 | `number`     | 0      |
| `background${StyleAttrs}` | 背景的样式     | `StyleAttrs` | -      |
| single                    | 是否单选       | `boolean`    | false  |

## 案例

### 获得数据

```js
let chart;
const config = {
  onReady: (c) => chart = c
}
chart.on('element:select', (event) => {
  const { data, nativeEvent } = event;
  if (nativeEvent) console.log('element:select', data);
});

chart.on('element:unselect', (event) => {
  const { nativeEvent } = event;
  if (nativeEvent) console.log('reset');
});
```

### 触发交互

```js
chart.emit('element:select', {
  data: { data: [{ population: 5038433 }, { population: 3983091 }] },
});

chart.emit('element:unselect', {});
```
