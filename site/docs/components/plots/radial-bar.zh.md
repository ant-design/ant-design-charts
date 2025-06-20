---
category: Components
type: Plot
usage: comparison
title: RadialBar 玉珏图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*-1GkR6WftskAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-radial-bar
order: 21
---

## 简介

玉珏图（RadialBar）又名环形柱状图，是柱状图关于笛卡尔坐标系转换到极坐标系的仿射变换。其意义和用法与柱状图类似。

玉珏图有半径反馈效应。由于玉珏图中是用角度表示每个珏环数值的大小，角度是决定性因素。所以，哪怕外侧（半径大的）珏环的数值小于内侧（半径小的）珏环，外侧的每个珏环会相对的比里面的珏环更长。这会造成视觉上的误解。

而且因为我们的视觉系统更善于比较直线，所以笛卡尔坐标系更适合于比较各个分类的数值比较。所以玉珏图从实用的角度去看，其更多的是一种审美上的需求。。

## 代码演示

更多示例详见[玉珏图](/examples#statistics-radial-bar)

### 基础用法

<Playground path="/statistics/radial-bar/demo/basic.js" rid="radial-bar-basic"></playground>

### 带圆角

<Playground path="/statistics/radial-bar/demo/round-corner.js" rid="radial-bar-round-corner"></playground>

### 自定义颜色

<Playground path="/statistics/radial-bar/demo/color.js" rid="radial-bar-color"></playground>

### 堆叠

<Playground path="/statistics/radial-bar/demo/stacked.js" rid="radial-bar-stacked"></playground>

### 带背景

<Playground path="/statistics/radial-bar/demo/background.js" rid="radial-bar-background"></playground>


## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| colorField | 颜色映射通道，详见[color](/options/plots/color) | string（可选） | - |
| radius | 半径 | number[0~1]  | - |
| innerRadius | 内径 | number[0~1]  | 0 |
| startAngle | 起始角度 | number  | - |
| endAngle | 起始角度 | number  | - |
| stack | 柱状图是否堆叠 | boolean\|[Stack](#stack) | false |
| group | 柱状图是否分组 | boolean\|[Group](#group) | false |
| markBackground | 元素背景配置，和配置柱子无区别，可以看做是放置于底层的 Column 组件，需要配置 `scale.y.domain` 才能生效 | [MarkBackground](#markBackground) | - |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| legend | 图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选，详见[图例](/options/plots/legend) | object（可选） | - |
| label | 数据标签是给图表添加标注的手段之一，详见[标签](/options/plots/label) | object（可选） | - |
| tooltip | 用于动态展示数据点的详细信息，详见[提示](/options/plots/tooltip) | object（可选） | - |
| style | 视觉样式，配置项详见[绘图属性](/options/plots/style#绘图属性) | object（可选） | - |
| theme | 用于控制图表的整体外观，包括颜色、字体、边距等视觉属性，详见[主题](/options/plots/theme/overview) | string \| object（可选） | `light` |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| scale | 将抽象数据映射为视觉数据，详见[比例尺](/options/plots/scale/overview) | object（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| interaction | 提供了按需探索数据的能力，详见[交互](/options/plots/interaction/overview) | object（可选） | - |
| state | 实现交互反馈、高亮、选中等效果，详见[状态](/options/plots/state)，不同交互下图表样式 | object（可选） | - |
| annotations | 视图好比一个画板，`RadailBar` 组件默认在其上绘制了一个玉珏图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

### MarkBackground

```ts
type MarkBackground = {
  /** background 样式 */
  style?: ShapeAttrs;
  [key: string]: any
};
```

style 配置可以参考[配置图形样式](/options/plots/style#配置图形样式)

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
