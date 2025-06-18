---
category: Components
type: Plot
title: Violin 小提琴图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*LKFOT6UA11QAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-violin
order: 13
---

## 简介

小提琴图（Violin）是一种用于可视化连续变量分布概率密度的图表类型，通过核密度估计[（Kernel Density Estimation, KDE）](/options/plots/data/kde) 将离散数据点转化为平滑的连续概率密度曲线，直观反映数据的集中趋势、分布形态及异常值。

`Violin` 的核心目标是从散点或点云数据中提取出其整体分布模式，并将其密度信息映射为一个连续的区域图或渐变效果。这种图表通常用于分析大量数据点的聚集区域、数据集中热点或数据分布的概率密度，例如在地理可视化中用于表示人口分布的密集程度，或者在分析中展示交易频率的区域性。

## 代码演示

更多示例详见[小提琴图](/examples#statistics-violin)

### 基础用法

<Playground path="/statistics/violin/demo/violin.js" rid="violin-basic"></playground>

### 核密度图

<Playground path="/statistics/violin/demo/density.js" rid="violin-density"></playground>

### 极坐标小提琴图

<Playground path="/statistics/violin/demo/polar.js" rid="violin-polar"></playground>

## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| seriesField | 分组字段 | string（可选） | - |
| colorField | 颜色映射字段，详见[color](/options/plots/color) | string（可选） | - |
| box | 是否叠加 boxplot 图形 | boolean | false |
| coordinateType | 坐标系类型，支持直角坐标和极坐标 | cartesian \| polar | cartesian |
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
| annotations | 视图好比一个画板，`Violin` 组件默认在其上绘制了一个柱状图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
