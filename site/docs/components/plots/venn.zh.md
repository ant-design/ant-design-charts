---
category: Components
type: Plot
usage: relation
title: Venn 韦恩图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*I7XlS4ps7IcAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-venn
order: 10
---

## 简介

韦恩图（Venn）是一种用重叠圆形或其他闭合图形来表示集合关系的可视化工具，由英国逻辑学家约翰・韦恩（John Venn）在 19 世纪发明。它通过图形的重叠区域直观展示不同集合的交集、并集、补集等逻辑关系，广泛应用于数学、逻辑学、统计学、计算机科学等领域。

## 代码演示

更多示例详见[韦恩图](/examples#statistics-venn)

### 基础用法

<Playground path="/statistics/venn/demo/basic.js" rid="venn-basic"></playground>

### 自定义颜色

<Playground path="/statistics/venn/demo/custom-color.js" rid="venn-custom-color"></playground>

### 添加标签

<Playground path="/statistics/venn/demo/label.js" rid="venn-label"></playground>

### 元素交互

<Playground path="/statistics/venn/demo/interaction.js" rid="venn-interaction"></playground>


## 配置项

通用属性参考：[通用配置](components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview)，必须包含 sets 字段 | Array | [] |
| sizeField | 面积映射字段，当 data 中包含 size 字段时，可以不填 | string（可选） | - |
| colorField | 和 seriesField 类似，不过会加上颜色通道，详见[color](/options/plots/color) | string（可选） | - |
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
| annotations | 视图好比一个画板，`Venn` 组件默认在其上绘制了一个韦恩图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。

