---
category: Components
type: Plot
usage: comparison,trend,time
title: Stock 股票图
cover: https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*u5aGSoyRDN8AAAAAAAAAAAAADmJ7AQ
link: /examples#statistics-stock
order: 10
---


## 简介

股票图（Stock）是用于展示金融市场中证券（如股票、期货、外汇等）价格走势及相关交易数据的专业图表。它通过可视化方式呈现价格波动、成交量、交易量等关键指标，帮助投资者分析市场趋势、制定交易策略。其核心特点是：

- 以时间（X 轴）为基准，展示价格（Y 轴）及其他交易数据的动态变化；
- 结合多种技术分析元素（如均线、成交量、技术指标），提供综合决策依据。

## 代码演示

更多示例详见[Stock](/examples#statistics-stock)

### 基础用法

<Playground path="/statistics/stock/demo/basic.js" rid="stock-basic"></playground>

### 线阴样式

<Playground path="/statistics/stock/demo/line.js" rid="stock-line"></playground>

## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 设置一个指定 [开盘价, 收盘价, 最高价, 最低价] 字段的数组 | string[] | - |
| colorField | 和 seriesField 类似，不过会加上颜色通道，详见[color](/options/plots/color) | string（可选） | - |

| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| axis | 用于建立数据与视觉位置的映射关系，详见[坐标轴](/options/plots/axis) | object（可选） | - |
| legend | 图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选，详见[图例](/options/plots/legend) | object（可选） | - |
| scrollbar | 用于过滤数据，可以和 x 或者 y 通道绑定，详见[滚动条](/options/plots/scrollbar) | object（可选） | - |
| slider | 用于过滤数据，让用户在数据量较大的情况下一次只用关注局部的数据，是一种辅助看数据的组件，详见[滑块](/options/plots/slider) | object（可选） | - |
| label | 数据标签是给图表添加标注的手段之一，详见[标签](/options/plots/label) | object（可选） | - |
| tooltip | 用于动态展示数据点的详细信息，详见[提示](/options/plots/tooltip) | object（可选） | - |
| style | 实体样式，配置项详见[配置图形样式](/options/plots/style#配置图形样式) | object（可选） | - |
| lineStyle | 线影样式，配置项详见[配置线的样式](/options/plots/style#配置线的样式) | object（可选） | - |
| theme | 用于控制图表的整体外观，包括颜色、字体、边距等视觉属性，详见[主题](/options/plots/theme/overview) | string \| object（可选） | `light` |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| scale | 将抽象数据映射为视觉数据，详见[比例尺](/options/plots/scale/overview) | object（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| interaction | 提供了按需探索数据的能力，详见[交互](/options/plots/interaction/overview) | object（可选） | - |
| state | 实现交互反馈、高亮、选中等效果，详见[状态](/options/plots/state)，不同交互下图表样式 | object（可选） | - |
| annotations | 视图好比一个画板，`stock` 组件默认在其上绘制了一个条形图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。

## 常见问题

1. 如何设置条形图宽度？

这里有个误区，stock 和 Column 的配置是完全一致的，只是做了个坐标转置，所有配置也是一致的，可参考 Column。

```js
style: {
  minWidth: 20,
  maxWidth: 20
}
```


### risingFill

<description>**optional** _string_</description>

上涨色

### fallingFill

<description>**optional** _string_</description>

下跌色
