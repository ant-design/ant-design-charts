---
title: poptip
order: 19
---

## 概述

poptip 是 Ant Design Charts 中的一种交互类型，用于在用户与图表元素交互时显示简洁的提示信息。它提供了一种轻量级的方式来展示数据点的详细信息，而不会干扰用户对整体图表的浏览体验。与完整的 tooltip 相比，poptip 更加简洁，通常只显示最基本的信息。

## 使用方式

要启用 poptip 交互，只需在图表配置中添加 `interaction: 'poptip'` 或使用 `chart.interaction('poptip', true)` 方法。

```js
{
    // 其他配置...
    interaction: { poptip: true }
}
```

或者使用方法调用的方式：

```js
{
  "interaction": {
    "poptip": true
  }
}
```

## 配置层级

poptip 交互的配置可以在图表的 `options` 对象中的 `interaction` 属性下进行设置：

```js
{
    // 其他图表配置...
    interaction: {
      poptip: {
        // poptip 配置项
        offsetX: 10,
        offsetY: 10,
        // tip 样式配置
        tipBackgroundColor: 'rgba(0, 0, 0, 0.75)',
        tipColor: '#fff',
      },
    }
}
```

## 配置项

poptip 交互支持以下配置项：

| 属性    | 描述                              | 类型     | 默认值 | 必选 |
| ------- | --------------------------------- | -------- | ------ | ---- |
| offsetX | 提示框相对于触发点的 X 方向偏移量 | `number` | `8`    |      |
| offsetY | 提示框相对于触发点的 Y 方向偏移量 | `number` | `8`    |      |

### 样式配置项

poptip 的样式配置项需要以 `tip` 为前缀：

| 属性               | 描述           | 类型     | 默认值                                                                                              | 必选 |
| ------------------ | -------------- | -------- | --------------------------------------------------------------------------------------------------- | ---- |
| tipBackgroundColor | 提示框背景色   | `string` | `'rgba(0,0,0,0.75)'`                                                                                |      |
| tipColor           | 文本颜色       | `string` | `'#fff'`                                                                                            |      |
| tipWidth           | 提示框宽度     | `string` | `'max-content'`                                                                                     |      |
| tipPadding         | 提示框内边距   | `string` | `'1px 4px'`                                                                                         |      |
| tipFontSize        | 文本字体大小   | `string` | `'12px'`                                                                                            |      |
| tipBorderRadius    | 提示框圆角半径 | `string` | `'2.5px'`                                                                                           |      |
| tipBoxShadow       | 提示框阴影     | `string` | `'0 3px 6px -4px rgba(0,0,0,0.12), 0 6px 16px 0 rgba(0,0,0,0.08), 0 9px 28px 8px rgba(0,0,0,0.05)'` |      |

## 事件

poptip 交互会触发以下事件：

| 事件名      | 描述                 | 回调参数                 |
| ----------- | -------------------- | ------------------------ |
| poptip:show | 当 poptip 显示时触发 | `{ data, target, x, y }` |
| poptip:hide | 当 poptip 隐藏时触发 | `{ target }`             |

可以通过以下方式监听这些事件：

```js
chart.on('poptip:show', (event) => {
  console.log('Poptip shown:', event.data);
});
chart.on('poptip:hide', (event) => {
  console.log('Poptip hidden');
});
```

## 示例

### 示例一：矩形树图

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*wAQiRpx1jcMAAAAAAAAAAAAADmJ7AQ/original">

### 示例二：散点图

```js | ob {  pin : false , autoMount: true }
import { Scatter } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {
  // 生成模拟数据
  const generateScatterData = () => {
    const data = [];
    const groups = ['组A', '组B', '组C', '组D'];
    const centers = [
      [3, 3],
      [7, 7],
      [3, 7],
      [7, 3],
    ];

    groups.forEach((group, i) => {
      const [centerX, centerY] = centers[i];
      for (let j = 0; j < 30; j++) {
        // 生成围绕中心点的随机散点
        const x = centerX + (Math.random() - 0.5) * 4;
        const y = centerY + (Math.random() - 0.5) * 4;
        const size = Math.random() * 20 + 5;
        data.push({
          x,
          y,
          size,
          group,
          id: `${group}-${j}`,
          value: Math.round(x * y),
        });
      }
    });
    return data;
  };
  const data = [];
  const groups = ['组A', '组B', '组C', '组D'];
  const centers = [
    [3, 3],
    [7, 7],
    [3, 7],
    [7, 3],
  ];
  const data = generateScatterData();

  const config ={
      data,
      xField: 'x',
      yField: 'y',
      colorField: 'group',
      sizeField: 'size',
      shapeField: 'circle',
      scale: {
        x: {
          nice: true,
          domain: [0, 10],
        },
        y: {
          nice: true,
          domain: [0, 10],
        },
        size: {
          domain: [5, 25],
        },
        color: {
          palette: 'category10',
        },
      },
      style: {
        fillOpacity: 0.65,
        stroke: '#fff',
        lineWidth: 1,
      },
      axis: {
        x: {
          title: 'X 轴',
          grid: true,
        },
        y: {
          title: 'Y 轴',
          grid: true,
        },
      },
      legend: {
        color: {
          position: 'top',
          flipPage: false,
          maxItemWidth: 80,
          itemMarginBottom: 8,
          layout: 'horizontal',
        },
      },
      animate: {
        enter: {
          type: 'fadeIn',
          duration: 800,
          delay: (d, i) => i * 10,
        },
      }
  };

  return <Scatter {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

### 示例三：玫瑰图

```js | ob {  pin : false , autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {
  // 简化的数据集
  const data = [
    { category: '类别A', value: 27 },
    { category: '类别B', value: 25 },
    { category: '类别C', value: 23 },
    { category: '类别D', value: 21 },
    { category: '类别E', value: 19 },
    { category: '类别F', value: 17 },
    { category: '类别G', value: 12 },
    { category: '类别H', value: 10 },
    { category: '类别I', value: 6 },
  ];

  const config ={
      data,
      coordinate: {
        type: 'polar',
        innerRadius: 0.2,
        endAngle: Math.PI * 2,
      },
      xField: 'category',
      yField: 'value',
      colorField: 'category',
      transform: [
        {
          type: 'stackY',
        },
      ],
      scale: {
        color: {
          palette: 'spectral',
        },
      },
      style: {
        stroke: '#fff',
        lineWidth: 1,
      },
      legend: {
        color: {
          position: 'right',
        },
      },
      animate: {
        enter: {
          type: 'fadeIn',
          duration: 800,
        },
      }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
