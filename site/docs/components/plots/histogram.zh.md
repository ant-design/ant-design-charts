---
category: Components
type: Plot
usage: comparison,distribution
title: Histogram 直方图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*yTCIRruhfOoAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-histogram
order: 8
---

## 简介

直方图（Histogram）是一种展示连续型数据分布的统计图表，通过将数据划分为若干 “区间”（Bin），用矩形高度表示每个区间内数据的频数或频率。其核心特征包括：

- 连续型数据适配：适用于身高、体重、时间、温度等连续变量，而非离散分类数据。
- 矩形柱形排列：柱形之间无间隔（区别于柱状图），表示数据的连续性。
- 分布形态展示：通过柱形的高低起伏，直观呈现数据的集中趋势、离散程度和偏态特征。

## 代码演示

更多示例详见[直方图](/examples#statistics-histogram)

### 基础用法

<Playground path="/statistics/histogram/demo/binx.js" rid="histogram-binx"></playground>

### 添加颜色通道

<Playground path="/statistics/histogram/demo/binx-color.js" rid="histogram-binx-color"></playground>

### 直方图范围刻度

<Playground path="/statistics/histogram/demo/binWidth.js" rid="histogram-bin-width"></playground>


## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| binField | 设置直方图绘制 (进行分箱) 的字段。 | string | - |
| binWidth | 设置直方图的分箱宽度，binWidth 影响直方图分成多少箱, 不能与 binNumber 一起使用。 | number | - |
| binNumber | 设置直方图的分箱数量，binNumber 影响直方图分箱后每个柱子的宽度。 | number | - |
| channel | 数据的聚合方式。 | `count` | `count` |
| colorField | 添加颜色通道，详见[color](/options/plots/color) | string（可选） | - |
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
| annotations | 视图好比一个画板，`Histogram` 组件默认在其上绘制了一个直方图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
