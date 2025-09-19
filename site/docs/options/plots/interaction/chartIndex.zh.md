---
title: chartIndex
order: 9
---

## 概述

`chartIndex` 是一种交互组件，用于查看折线图相对于某个时间点的相对趋势。

<img alt="example" src="https://gw.alipayobjects.com/zos/raptor/1669041887727/chart-index.gif" width="640">

```js
import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
      data: {
        type: 'fetch',
        value: 'https://assets.antv.antgroup.com/g2/indices.json',
      },
      xField: (d) => new Date(d.Date),
      yField: 'Close',
      colorField: 'Symbol',
      keyField: 'Symbol',
      titleField: (d) => d.Date.toLocaleString(),
      axis: {
        y: {
          title: '↑ Change in price (%)',
          labelAutoRotate: false,
        },
      },
      scale: {
        y: {
          type: 'log',
        },
      },
      label: {
        text: 'Symbol',
        selector: 'last',
        style: {
          fontSize: 10,
        },
      },
      interaction: {
        chartIndex: {
          ruleStroke: '#aaa',
          labelDx: 5,
          labelTextAlign: 'center',
          labelStroke: '#fff',
          labelLineWidth: 5,
          labelFormatter: (d) => `${d.toLocaleDateString()}`,
        },
      }
  };

  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## 使用方式

`chartIndex` 通过传入 [配置项](#配置项) 对交互进行配置

```js
({
  interaction: {
    chartIndex: {},
  },
});
```

## 配置层级

交互可以配置在 Mark 层级：

```js
({
  interaction: { chartIndex: {} },
});
```


## 配置项

| 属性               | 描述                                                                                                              | 类型                                                       | 默认值  | 必选 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------- | ---- |
| ruleStroke         | 指示线的颜色                                                                                                      | string                                                     | `black` |      |
| ruleLineWidth      | 指示线宽                                                                                                          | number                                                     | `1`     |      |
| ruleLineDash       | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。ruleLineDash 设为[0,0]的效果为没有描边。        | `[number,number]`                                          |         |      |
| ruleStrokeOpacity  | 指示线的透明度                                                                                                    | number                                                     |         |      |
| ruleOpacity        | 整体透明度                                                                                                        | number                                                     |         |      |
| ruleShadowColor    | 指示线阴影颜色                                                                                                    | string                                                     |         |      |
| ruleShadowBlur     | 指示线高斯模糊系数                                                                                                | number                                                     |         |      |
| ruleShadowOffsetX  | 指示线阴影距图形的水平距离                                                                                        | number                                                     |         |      |
| ruleShadowOffsetY  | 指示线阴影距图形的垂直距离                                                                                        | number                                                     |         |      |
| labelFontSize      | 文字大小                                                                                                          | number                                                     |         |      |
| labelFontFamily    | 文字字体                                                                                                          | string                                                     |         |      |
| labelFontWeight    | 字体粗细                                                                                                          | number                                                     |         |      |
| labelLineHeight    | 文字的行高                                                                                                        | number                                                     |         |      |
| labelTextAlign     | 设置文本内容的当前对齐方式                                                                                        | `center` \| `end` \| `left` \| `right` \| `start`          |         |      |
| labelTextBaseline  | 设置在绘制文本时使用的当前文本基线                                                                                | `top` \| `middle` \| `bottom` \| `alphabetic` \| `hanging` |         |      |
| labelFill          | 文字的填充色                                                                                                      | string                                                     |         |      |
| labelFillOpacity   | 文字的填充透明度                                                                                                  | number                                                     |         |      |
| labelStroke        | 文字的描边                                                                                                        | string                                                     |         |      |
| labelLineWidth     | 文字描边的宽度                                                                                                    | number                                                     |         |      |
| labelLineDash      | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。labelLineDash 设为[0,0]的效果为没有描边。 | `[number,number] `                                         |         |      |
| labelStrokeOpacity | 描边透明度                                                                                                        | number                                                     |         |      |
| labelOpacity       | 文字的整体透明度                                                                                                  | number                                                     |         |      |
| labelShadowColor   | 文字阴影颜色                                                                                                      | string                                                     |         |      |
| labelShadowBlur    | 文字阴影的高斯模糊系数                                                                                            | number                                                     |         |      |
| labelShadowOffsetX | 设置阴影距文字的水平距离                                                                                          | number                                                     |         |      |
| labelShadowOffsetY | 设置阴影距文字的垂直距离                                                                                          | number                                                     |         |      |
| labelDx            | 文字在 x 方向偏移                                                                                                 | number                                                     |         |      |
| labelDy            | 文字在 y 方向偏移                                                                                                 | number                                                     |         |      |
| labelFormatter     | 格式化日期                                                                                                        | `FormatterFunction`                                        |         |      |

## 示例

### 指示线和文字

```js | ob { autoMount: true }
import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {

  const config ={
      autoFit: true,
      data: {
        type: 'fetch',
        value: 'https://assets.antv.antgroup.com/g2/indices.json',
      },
      xField: (d) => new Date(d.Date),
      yField: 'Close',
      colorField: 'Symbol',
      keyField: 'Symbol',
      titleField: (d) => d.Date.toLocaleString(),
      axis: {
        y: {
          title: '↑ Change in price (%)',
          labelAutoRotate: false,
        },
      },
      scale: {
        y: {
          type: 'log',
        },
      },
      label: {
        text: 'Symbol',
        selector: 'last',
        style: {
          fontSize: 10,
        },
      },
      interaction: {
        tooltip: {
          crosshairs: false, // 关闭辅助线
        },
        chartIndex: {
          ruleStroke: 'pink',
          ruleLineWidth: 8,
          ruleLineDash: [4, 8],
          ruleShadowColor: 'green',
          ruleShadowBlur: 5,
          ruleShadowOffsetX: 5,
          ruleShadowOffsetY: 5,
          ruleOpacity: 0.9,
          labelDy: 30,
          labelFontSize: 20,
          labelTextAlign: 'center',
          labelFill: 'red',
          labelStroke: 'yellow',
          labelLineWidth: 2,
          labelFormatter: (d) => `${d.toLocaleDateString()}`,
        },
      }
  };

  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```
