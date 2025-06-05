---
title: brushXFilter
order: 7
---

## 概述

`brushXFilter` 交互是 brushFilter 的横向限定版本，专门用于基于 X 轴维度的数据筛选。该交互限制用户只能通过水平方向的框选操作（沿 X 轴方向），对图表元素进行范围过滤，特别适用于时间序列分析、横向对比等场景。

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Wz7zQaiBiXwAAAAAAAAAAAAADmJ7AQ/original" width="640">

核心特征：

单向操作：仅允许水平方向框选，Y 轴范围自动全选

维度聚焦：精准控制 X 轴数据范围（如时间范围、数值区间）

响应式更新：动态过滤后自动触发视图更新

```js
import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
      autoFit: true,
      data: {
        type: 'fetch',
        value:
          'https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json',
      },
      // X 轴绑定时间数据
      xField: (d) => new Date(d.date),
      yField: 'total',
      interaction: {
        brushXFilter: true, // 启用横向筛选
      }
  };

  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## 使用方式

配置 `brushXFilter` 交互有两种方式

### 快速启用模式

通过布尔值开启交互，使用默认配置：

```js
({
  interaction: { brushXFilter: true }, // 启用默认配置的X轴刷选过滤
});
```

### 自定义配置模式

通过[配置项](#配置项) 精细化控制交互行为：

```js
({
  interaction: {
    brushXFilter: {
      reverse: false, // 关闭反向选择
      maskFill: '#rgba(0,0,0,0.3)', // 自定义蒙版颜色
    },
  },
});
```

## 配置层级

交互可以配置在 Mark 层级：

```js
({
  interaction: { brushXFilter: true },
});
```


## 配置项

| 属性    | 描述               | 类型          | 默认值             | 必选 |
| ------- | ------------------ | ------------- | ------------------ | ---- |
| reverse | brush 是否反转     | boolean       | false              |      |
| mask    | 框选区域的蒙版样式 | [mask](#mask) | 详见 [mask](#mask) |

### mask

配置框选区域的蒙版的样式。

| 属性              | 描述                                                                                                         | 类型            | 默认值    | 必选 |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | --------------- | --------- | ---- |
| maskFill          | 蒙版的填充色                                                                                                 | string          | `#777`    |      |
| maskFillOpacity   | 蒙版的填充透明度                                                                                             | number          | 0.3       |      |
| maskStroke        | 蒙版的描边                                                                                                   | string          | `#fff`    |      |
| maskStrokeOpacity | 描边透明度                                                                                                   | number          |           |      |
| maskLineWidth     | 蒙版描边的宽度                                                                                               | number          |           |      |
| maskLineDash      | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 | [number,number] |           |      |
| maskOpacity       | 蒙版的整体透明度                                                                                             | number          |           |      |
| maskShadowColor   | 蒙版阴影颜色                                                                                                 | string          |           |      |
| maskShadowBlur    | 蒙版阴影的高斯模糊系数                                                                                       | number          |           |      |
| maskShadowOffsetX | 设置阴影距蒙版的水平距离                                                                                     | number          |           |      |
| maskShadowOffsetY | 设置阴影距蒙版的垂直距离                                                                                     | number          |           |      |
| maskCursor        | 鼠标样式。同 css 的鼠标样式                                                                                  | string          | `default` |      |

在配置框选区域的蒙版样式的时候，不是以对象的形式来配置，而是以 `mask`前缀加属性的方式来配置。

样式配置示例：

```js
({
  interaction: {
    brushXFilter: {
      maskFill: '#000',
      maskFillOpacity: 0.2,
      maskStroke: 'red',
      maskStrokeOpacity: 0.9,
      maskLineWidth: 2,
      maskLineDash: [4, 8],
      maskOpacity: 0.2,
      maskShadowColor: '#d3d3d3',
      maskShadowBlur: 10,
      maskShadowOffsetX: 10,
      maskShadowOffsetY: 10,
      maskCursor: 'pointer',
    },
  },
});
```

## 事件

### 监听事件

监听刷选过滤动作：

```js
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
chart.on('brush:filter', (event) => {
  const {
    data, // 筛选后的数据集合
    nativeEvent, // 原始 DOM 事件
  } = event;
  const [xStart, xEnd] = data.selection[0];
  console.log(`筛选范围：${xStart} ~ ${xEnd}`);
});
{
  "call": r
}
```

### 触发交互

通过编程方式触发筛选：

```js
chart.emit('brush:filter', {
  data: {
    selection: [
      [new Date('2023-01-01').getTime(), new Date('2023-06-30').getTime()],
    ],
  },
});
```

## 案例

```js | ob { autoMount: true }
{
    autoFit: true,
    interaction: {
      brushXFilter: {
        maskFill: '#000',
        maskFillOpacity: 0.2,
        maskStroke: 'red',
        maskStrokeOpacity: 0.9,
        maskLineWidth: 2,
        maskLineDash: [4, 8],
        maskOpacity: 0.2,
        maskShadowColor: '#d3d3d3',
        maskShadowBlur: 10,
        maskShadowOffsetX: 10,
        maskShadowOffsetY: 10,
        maskCursor: 'pointer',
      },
    }
}
```
