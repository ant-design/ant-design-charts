---
category: Components
type: Plot
usage: proportion
title: Pie 饼图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*DSItR6amdjMAAAAAAAAAAAAADmJ7AQ/original
order: 3
---

## 简介

饼图（Pie）是一种圆形统计图表，通过将圆形划分为若干扇形区域，来展示各部分数据在总体中所占的比例关系。每个扇形的圆心角度数、面积大小均与该部分数据的占比成正比，直观呈现 “整体与部分” 的关系。

## 代码演示

更多示例详见[饼图](/examples#statistics-pie)

### 基础用法

<Playground path="/statistics/pie/demo/basic.js" rid="pie-basic"></playground>

### 调整标签位置

<Playground path="/statistics/pie/demo/outer-label.js" rid="pie-outer-label"></playground>

### 自定义标签

通过 `label.render` 实现。

<Playground path="/statistics/pie/demo/custom-label.js" rid="pie-custom-label"></playground>

### 调整内径

<Playground path="/statistics/pie/demo/basic-donut.js" rid="pie-basic-donut"></playground>

### 设置绘制区域

<Playground path="/statistics/pie/demo/quarter-circle.js" rid="pie-quarter-circle"></playground>

### 图片填充

<Playground path="/statistics/pie/demo/pie-texture.js" rid="pie-pie-texture"></playground>

## 配置项

通用属性参考：[通用配置](components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| angleField | 角度映射字段 | string  | - |
| colorField | 颜色映射通道，详见[color](/options/plots/color) | string（可选） | - |
| radius | 半径 | number[0~1]  | - |
| innerRadius | 内径 | number[0~1]  | 0 |
| startAngle | 起始角度 | number  | - |
| endAngle | 起始角度 | number  | - |
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
| annotations | 视图好比一个画板，`Column` 组件默认在其上绘制了一个饼图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。

## 常见问题

1. 如何避免标签遮挡

<img alt="line-1.jpg" width=600 src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1kI5Ra8hjJ8AAAAAQgAAAAgAemJ7AQ/fmt.webp" />

通过 `label.transform` 调整，更多详见[LabelTransform](/options/plots/label#transform)

```js
label: {
  text: (d) => `${d.type}\n ${d.value}`,
  position: 'spider',
  transform: [
    {
      type: 'overlapDodgeY'
    }
  ]
},
```

