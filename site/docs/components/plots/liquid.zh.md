---
category: Components
type: Plot
title: Liquid 水波图
cover: https://mdn.alipayobjects.com/huamei_za7we3/afts/img/A*cHArRaizyBsAAAAAAAAAAAAADo2bAQ/original
link: /examples#statistics-liquid
order: 9
---

## 简介

水波图（Liquid）又称涟漪图或波浪图，是一种通过模拟水波纹扩散效果来展示数据变化或进度的可视化图表。其核心特征包括：

- 动态波动形态：以圆形或环形为基础，通过多层半透明波纹的扩散、叠加或颜色渐变，直观呈现数据的 “强度”“进度” 或 “影响范围”。
- 隐喻化设计：借用自然水波的扩散原理，将抽象数据转化为具有物理动感的视觉符号（如波纹半径越大表示数值越高）。
- 交互性优势：常结合动画效果（如波纹缓慢扩散、颜色渐隐），增强数据的叙事性和用户吸引力。

## 代码演示

更多示例详见[水波图](/examples#statistics-liquid)

### 基础用法

<Playground path="/statistics/liquid/demo/liquid.js" rid="liquid-basic"></playground>

### 水滴形状

<Playground path="/statistics/liquid/demo/liquid-pin.js" rid="liquid-pin"></playground>

### 带背景

<Playground path="/statistics/liquid/demo/liquid-background.js" rid="liquid-background"></playground>

### 自定义形状

<Playground path="/statistics/liquid/demo/liquid-custom-shape.js" rid="liquid-custom-shape"></playground>

## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| percent | 数据(0 ~ 1) | number | - |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| style | [图表样式](#style) | object（可选） | - |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| annotations | 视图好比一个画板，`Liquid` 组件默认在其上绘制了一个水波图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


### style

配置 `liquid` 标记的样式。

| 属性            | 描述     | 类型     | 默认值   | 必选 |
| --------------- | -------- | -------- | -------- | ---- |
| shape           | 形状     | rect \| circle \| pin \| triangle | `circle` |      |
| stroke          | 边框颜色 | _string_ | -        |      |
| fill            | 水波颜色 | _string_ | -        |      |
| outlineBorder   | 边框宽度 | _number_ | `2`      |      |
| outlineDistance | 内间距   | _number_ | `0`      |      |
| waveLength      | 波长     | _number_ | `192`    |      |
| waveCount       | 波数     | _number_ | `3`      |      |
| backgroundFill  | 背景颜色 | _string_ | -        |      |
| contentText     | 文本内容 | _string_ | -        |      |
| contentFill     | 文本颜色 | _string_ | -        |      |
| contentFontSize | 文本大小 | _string_ | -        |      |


### shape

`liquid` 标记内置支持的形状如下：

| 形状     | 描述 | 示例                                                                                                             |
| -------- | ---- | ---------------------------------------------------------------------------------------------------------------- |
| rect     | 矩形 | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*yhm7SorCPUsAAAAAAAAAAAAAemJ7AQ/original"></img> |
| circle   | 圆形 | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*kMifQItNCRsAAAAAAAAAAAAAemJ7AQ/original"></img> |
| pin      | 水滴 | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*bAhUQZX4aYQAAAAAAAAAAAAAemJ7AQ/original"></img> |
| triangle | 三角 | <img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ApfoS7lBxv8AAAAAAAAAAAAAemJ7AQ/original"></img> |

如果需要自定义形状，可以通过自定义 shape 提供实现。 其中， 回调 `(x, y, r, w, h) => string`, 传入参数分别为 x y 中心点坐标， r 图表可画圆最大半径， w h 图表可画宽高，从而画出想要的形状，需要对 svg 或者 canvas 有一定理解。

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
