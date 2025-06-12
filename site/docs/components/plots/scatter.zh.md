---
category: Components
type: Plot
usage: distribution,comparison
title: Scatter 散点图
cover: https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*u5aGSoyRDN8AAAAAAAAAAAAADmJ7AQ
link: /examples#statistics-scatter
order: 5
---

## 简介

散点图（bar）是一种通过在二维坐标系中绘制离散数据点来展示两个变量之间关系的统计图表。每个点的横纵坐标分别对应两个变量的观测值，点的分布形态（如密集程度、趋势走向）可直观反映变量间的相关性、分布规律或异常值。

## 代码演示

更多示例详见[散点图](/examples#statistics-scatter)

### 基础用法

<Playground path="/statistics/scatter/demo/basic.js" rid="scatter-basic"></playground>

### 带标签

<Playground path="/statistics/scatter/demo/point-label.js" rid="scatter-label"></playground>

### 多形状

通过 `scale.shape: { range: ['point', 'plus', 'diamond'] }` 指定映射值，通过 `shapeField: 'category'` 指定映射关系。也可以通过 `shapeField: 'diamond'` 指定具体值。

<Playground path="/statistics/scatter/demo/point-shape.js" rid="scatter-shape"></playground>

### 气泡图

通过 `sizeField: 'Deaths'` 指定大小映射字段，通过 `scale.size.rangeMax: 35` 指定最大值。

<Playground path="/statistics/scatter/demo/point-bubble.js" rid="scatter-bubble"></playground>

### 对数气泡图

通过 `scale.size: {type: 'log'}` 实现。

<Playground path="/statistics/scatter/demo/point-log.js" rid="scatter-log"></playground>

## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| sizeField | 大小映射通道 | string \| number（可选） | - |
| colorField | 颜色映射通道，详见[color](/options/plots/color) | string（可选） | - |
| shapeField | shape 属性通道，改变图形标记的[绘制形状](/options/plots/legend#symbols-可选类型) | 'point' |
| line | 开启折线图，一般用于绘制辅助线，配置和[折线图](/components/plots/line)基本一致，默认继承了 `Scatter` 的 `data` \| `xField` \| `yField` 等属性，同时关闭了 `tooltip`，通过 `style` 指定[绘图属性](/options/plots/style#绘图属性)。 | object(可选) | - |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| axis | 用于建立数据与视觉位置的映射关系，详见[坐标轴](/options/plots/axis) | object（可选） | - |
| legend | 图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选，详见[图例](/options/plots/legend) | object（可选） | - |
| scrollbar | 用于过滤数据，可以和 x 或者 y 通道绑定，详见[滚动条](/options/plots/scrollbar) | object（可选） | - |
| slider | 用于过滤数据，让用户在数据量较大的情况下一次只用关注局部的数据，是一种辅助看数据的组件，详见[滑块](/options/plots/slider) | object（可选） | - |
| label | 数据标签是给图表添加标注的手段之一，详见[标签](/options/plots/label) | object（可选） | - |
| tooltip | 用于动态展示数据点的详细信息，详见[提示](/options/plots/tooltip) | object（可选） | - |
| style | 视觉样式，配置项详见[绘图属性](/options/plots/style#绘图属性) | object（可选） | - |
| theme | 用于控制图表的整体外观，包括颜色、字体、边距等视觉属性，详见[主题](/options/plots/theme/overview) | string \| object（可选） | `light` |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| scale | 将抽象数据映射为视觉数据，详见[比例尺](/options/plots/scale/overview) | object（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| interaction | 提供了按需探索数据的能力，详见[交互](/options/plots/interaction/overview) | object（可选） | - |
| state | 实现交互反馈、高亮、选中等效果，详见[状态](/options/plots/state)，不同交互下图表样式 | object（可选） | - |
| annotations | 视图好比一个画板，`bar` 组件默认在其上绘制了一个散点图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。

## 常见问题

1. 如何自定义散点图形状？

```js
import { G2, Scatter } from '@ant-design/plots';

// 自定义一个 Shape
G2.register('shape.point.customShape', (style, context) => {
  const { document } = context;
  return (P, value, defaults) => {
    const { color: defaultColor } = defaults;
    const [p0, p1] = P;
    const w = p1[0] - p0[0];
    const h = p1[1] - p0[1];
    const { color = defaultColor } = value;
    // https://g.antv.antgroup.com/examples
    return document.createElement('rect', {
      style: {
        x: p0[0],
        y: p0[1],
        width: w + 20,
        height: h,
        fill: color,
        cursor: 'pointer',
        ...style,
      },
    });
  };
});

const DemoScatter = () => {
  const config = {
    shapeField: 'customShape',
  };
  return <Scatter {...config} />;
};
```

