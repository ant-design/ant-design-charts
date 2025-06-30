---
category: Components
type: Plot
usage: comparison
title: BidirectionalBar 对称条形图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*19M9So-1OpoAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-bidirectional-bar
order: 10
---

## 简介

对称条形图（BidirectionalBar）是一种以坐标轴为中心，向左右两侧延伸条形的图表类型，用于展示正负值数据或双向对比关系。其核心特征包括：

- 双向布局：以 Y 轴（或 X 轴）为对称轴，左侧条形表示负值或参照组，右侧表示正值或实验组。
- 视觉平衡感：通过对称布局强化数据的对比效果，适合展示 “增加 / 减少”“输入 / 输出”“优势 / 劣势” 等对立关系。
- 数据映射：
  - 条形长度 → 数值大小（绝对值），
  - 方向 → 正负属性（左负右正），
  - 颜色 → 类别区分（如蓝色代表正向，红色代表负向）。

## 代码演示

更多示例详见[对称条形图](/examples#statistics-bidirectional-bar)

### 基础用法

<Playground path="/statistics/bidirectional-bar/demo/basic.js" rid="bidirectional-bar-basic"></playground>

### 垂直对称条形图

<Playground path="/statistics/bidirectional-bar/demo/layout.js" rid="bidirectional-bar-layout"></playground>

## 配置项

通用属性参考：[通用配置](/components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string[] | - |
| axis | 用于建立数据与视觉位置的映射关系，详见[坐标轴](/options/plots/axis) | object（可选） | - |
| label | 数据标签是给图表添加标注的手段之一，详见[标签](/options/plots/label) | object（可选） | - |
| tooltip | 用于动态展示数据点的详细信息，详见[提示](/options/plots/tooltip) | object（可选） | - |
| style | 视觉样式，配置项详见[绘图属性](/options/plots/style#绘图属性) | object（可选） | - |
| theme | 用于控制图表的整体外观，包括颜色、字体、边距等视觉属性，详见[主题](/options/plots/theme/overview) | string \| object（可选） | `light` |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| scale | 将抽象数据映射为视觉数据，详见[比例尺](/options/plots/scale/overview) | object（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| interaction | 提供了按需探索数据的能力，详见[交互](/options/plots/interaction/overview) | object（可选） | - |
| state | 实现交互反馈、高亮、选中等效果，详见[状态](/options/plots/state)，不同交互下图表样式 | object（可选） | - |
| annotations | 视图好比一个画板，`BidirectionalBar` 组件默认在其上绘制了一个对称条形图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。

## 特有

### yField

<description>**optional** _string[]_</description>

Y 轴字段

### layout

<description>**optional** _vertical | horizontal_ **default** _vertical_</description>

布局
