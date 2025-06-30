---
category: Components
type: Plot
usage: comparison
title: Bullet 子弹图
cover: https://mdn.alipayobjects.com/huamei_za7we3/afts/img/A*R4hCRJwwMhgAAAAAAAAAAAAADo2bAQ/original
link: /examples#statistics-bullet
order: 10
---

## 简介

子弹图（Bullet）是一种紧凑、高信息密度的图表，由数据可视化专家斯蒂芬・菲尼（Stephen Few）于 2005 年提出，旨在替代传统仪表盘（如速度表、量表），更高效地展示单一指标的实际值与目标值、参考标准的对比关系。

其核心特点是：

- 以条形为基础，通过长度和颜色区分数据层级；
- 仅用一个图表即可呈现 “实际值 + 目标值 + 基准线（如优良中差标准）”，节省空间且信息直观；
- 广泛应用于业务绩效、KPI 考核、进度跟踪等场景。

## 代码演示

更多示例详见[Bullet](/examples#statistics-bullet)

### 基础用法

<Playground path="/statistics/bullet/demo/bullet.js" rid="bullet-basic"></playground>

### 多指标子弹图

<Playground path="/statistics/bullet/demo/bullets.js" rid="bullet-bullets"></playground>

### 坐标转置

<Playground path="/statistics/bullet/demo/bullet-vertical.js" rid="bullet-transpose"></playground>

### 分组子弹图

<Playground path="/statistics/bullet/demo/bullet-group.js" rid="bullet-group"></playground>

## 配置项

通用属性参考：[通用配置](components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | 图表数据，详见图表[示例](/examples#statistics-bullet) | Array | [] |
| xField | 横轴字段 | string | `title` |
| rangeField | 区间值字段 | string | `ranges` |
| measureField | 实际值字段 | string | `measures` |
| targetField | 目标字段 | string | `targets` |
| seriesField | 多子弹图区分字段 | string（可选） | - |
| transpose | 坐标转置 | boolean | `true` |
| color | 颜色映射 | [Color](#color) | - |
| colorField | 功能和 color 类似，由于映射关系复杂，推荐使用 color | string \| Function（可选） | - |
| mapField | 功能和 color 类似，用于文本映射 | string \| Function（可选） | - |
| range | 区域 Shape 的配置 | [Shape](#shape) | - |
| measure | 真实值 Shape 的配置 | [Shape](#shape) | - |
| target | 目标 Shape 的配置 | [Shape](#shape) | - |
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
| annotations | 视图好比一个画板，`bullet` 组件默认在其上绘制了一个子弹图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


### Color

<description>**optional** _object_</description>

设置子弹图各图形 color 属性。

| 细分配置 | 类型        | 功能描述     | 默认配置 |
| -------- | ----------- | ------------ | -------- |
| ranges    | _string\|string[]_ | 区间背景颜色 | 无       |
| measures  | _string\|string[]_ | 实际值颜色   | 无       |
| targets   | _string\|string[]_ | 目标值颜色   | 无       |


### Shape

配置对应图形样式，常见的是 `style` ，更多配置可参考通用组件[Column](/components/plots/column#配置项)

| 属性    | 描述                          | 类型               | 默认值     | 必选 |
| ------- | ----------------------------- | ------------------ | ---------- | ---- |
| style | Mark 样式     | [详见>>](options/plots/style#配置图形样式)        |  -    |
| sizeField | 尺寸映射        |   number  | - |      |


## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
