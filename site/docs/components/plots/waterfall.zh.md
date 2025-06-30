---
category: Components
type: Plot
title: Waterfall 瀑布图
cover: https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*fG4DT7XWNzUAAAAAAAAAAAAADmJ7AQ
link: /examples#statistics-waterfall
order: 14
---

## 简介

瀑布图（Waterfall）又称桥接图或飞瀑图，是一种用于展示数据从初始值到最终值的演变过程及各因素影响的可视化图表。其核心特征包括：

- 阶梯式布局：以柱状图为基础，通过垂直条形的增减叠加，呈现数据的累积变化。
- 因果关系可视化：
  - 初始值与最终值用完整柱形表示（通常居左、右两端）。
  - 中间柱形表示各因素的影响（正值向上延伸，负值向下延伸）。
- 流向隐喻：形似瀑布的水流方向，直观展示数据 “增长 - 衰减” 的动态过程。

## 代码演示

更多示例详见[Waterfall](/examples#statistics-waterfall)

### 基础用法

<Playground path="/statistics/waterfall/demo/basic.js" rid="waterfall-basic"></playground>

### 连接线标记

<Playground path="/statistics/waterfall/demo/connector.js" rid="waterfall-connector"></playground>

### 反向链接线标记

<Playground path="/statistics/waterfall/demo/reverse.js" rid="waterfall-reverse"></playground>

## 配置项

通用属性参考：[通用配置](/components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string | - |
| colorField | 和 seriesField 类似，不过会加上颜色通道，详见[color](/options/plots/color) | string（可选） | - |
| linkStyle | 连接线样式，配置项详见[配置线的样式](/options/plots/style#配置线的样式) | object（可选） | - |
| connector | 连接线标记，配置和 [Line](/components/plots/line) 类似，默认处理了 `xField`、`yField`、`data`，可通过 `reverse` 字段让连线绘制方向颠倒，通过 `style` 指定[配置线的样式](/options/plots/style#配置线的样式)。 | object(可选) | - |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| axis | 用于建立数据与视觉位置的映射关系，详见[坐标轴](/options/plots/axis) | object（可选） | - |
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
| annotations | 视图好比一个画板，`Waterfall` 组件默认在其上绘制了一个瀑布图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
