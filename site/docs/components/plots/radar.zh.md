---
category: Components
type: Plot
usage: comparison
title: Radar 雷达图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*okGTT7D7fBEAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-radar
order: 10
---

## 简介

雷达图（Radar）又称蜘蛛网图或星图，是一种将多个维度的数据以二维图表形式展示的可视化工具。其核心特征包括：

- 辐射状坐标轴：从中心向外辐射出若干条等距坐标轴（每个轴代表一个维度），形似雷达的扫描波纹。
- 多边形闭合曲线：将各维度数据点连接成闭合多边形，通过面积或形状对比不同对象的综合表现。
- 多维度并行展示：可同时展示 3 个以上维度的数据（如最多 12 个维度），适合多维指标的综合评估。

## 代码演示

更多示例详见[雷达图](/examples#statistics-radar)

### 基础用法

<Playground path="/statistics/radar/demo/basic.js" rid="radar-basic"></playground>

### 带网格

<Playground path="/statistics/radar/demo/grid.js" rid="radar-grid"></playground>

### 带底色

<Playground path="/statistics/radar/demo/background.js" rid="radar-background"></playground>

### 平滑曲线

<Playground path="/statistics/radar/demo/radar.js" rid="radar-radar"></playground>

### 径向雷达图

<Playground path="/statistics/radar/demo/area-radial.js" rid="radar-area-radial"></playground>

## 配置项

通用属性参考：[通用配置](/components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| colorField | 颜色映射字段，详见[color](/options/plots/color) | string（可选） | - |
| shapeField | 绑定 line 标记的 shape 属性通道，改变图形标记的绘制形状 | `line \| smooth \| vh \| hv \| hvh \| trail` | line |
| area | 开启面积图，配置和[面积图](/components/plots/area)基本一致，默认继承了 `Radar` 的 `data` \| `xField` \| `yField` 等属性，同时关闭了 `tooltip`，通过 `style` 指定[绘图属性](/options/plots/style#绘图属性)。 | object(可选) | - |
| point | 标记，配置和 area 类似，也继承了上层的一些通用配置，通过 `shapeField` 指定[标记类型](/options/plots/legend#symbols-可选类型), 可通过 `sizeField` 指定标记大小，可以通过 `style` 指定[绘图属性](/options/plots/style#绘图属性)。 | object(可选) | - |
| radius | 半径 | number[0~1]  | - |
| innerRadius | 内径 | number[0~1]  | 0 |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| axis | 用于建立数据与视觉位置的映射关系，详见[坐标轴](/options/plots/axis) | object（可选） | - |
| legend | 图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选，详见[图例](/options/plots/legend) | object（可选） | - |
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
| annotations | 视图好比一个画板，`bar` 组件默认在其上绘制了一个雷达图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
