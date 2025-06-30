---
category: Components
type: Plot
usage: comparison,distribution,relation
title: Treemap 矩阵树图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*T2zHS6J1cGMAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-treemap
order: 10
---

## 简介

矩阵树图（Treemap）是一种将树状结构数据以嵌套矩形形式展示的可视化图表。其核心特征包括：

- 空间填充布局：用矩形面积表示数据大小，嵌套关系表示层级结构（父矩形包含子矩形）。
- 多维信息编码：
  - 面积 → 数值大小（如销售额、用户数），
  - 颜色 → 类别属性（如产品类型、地区），
  - 位置 → 层级归属（如父节点居中，子节点环绕）。
- 高效空间利用：在有限区域内展示大量层级数据，避免传统树状图的长分支问题。

## 代码演示

更多示例详见[矩阵树图](/examples#statistics-treemap)

### 基础用法

<Playground path="/statistics/treemap/demo/treemap.js" rid="treemap-basic"></playground>

### 图表砖取

<Playground path="/statistics/treemap/demo/drill-down.js" rid="treemap-drill-down"></playground>

## 配置项

通用属性参考：[通用配置](/components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| valueField | 值映射字段 | string | - |
| layout | [布局](#layout) | object | - |
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
| annotations | 视图好比一个画板，`Treemap` 组件默认在其上绘制了一个矩阵树图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

### layout

| 属性 | 说明  | 类型   | 默认值 |
| ------- | -------- | -------- | ------- |
| tile    | 布局方式                                                                                                      | `'treemapBinary' \| 'treemapDice' \| 'treemapSlice' \| 'treemapSliceDice' \| 'treemapSquarify' \| 'treemapResquarify'` | `'treemapSquarify'` |
| paddingInner | 内距，另外还有 `paddingOuter \| paddingTop \| paddingBottom \| paddingRight \| paddingLeft` | `number`   | 0  |
| sort    | 排序规则        | `(a: any, b: any): number`   | `(a, b) => b.value - a.value` |
| layer   | 渲染层级  | `number \| (d) => number`  | 0   |


## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。


