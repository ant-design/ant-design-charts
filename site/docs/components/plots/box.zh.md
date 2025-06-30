---
category: Components
type: Plot
usage: distribution
title: Box 箱线图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*A746SrYUxbsAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-box
order: 10
---

## 简介

箱线图（Box）又称盒须图、盒式图，是一种用于展示一组数据分布情况的统计图表。箱线图通常包含以下几个关键统计值：

- **最小值**：数据集中的最小值（不包括异常值）
- **下四分位数（Q1）**：数据集中排在 25%位置的值
- **中位数（Q2）**：数据集中排在 50%位置的值
- **上四分位数（Q3）**：数据集中排在 75%位置的值
- **最大值**：数据集中的最大值（不包括异常值）

`box` 标记的特殊之处在于，它的 `y` 通道对应的数据是一个包含这些统计值的数组，Ant Design Charts 会将这些数据映射为箱线图所需的 14 个点集合，形成完整的箱线图图形。

<img alt="box" width="100%" style="max-width: 400px" src="https://gw.alipayobjects.com/zos/antfincdn/f6WEf%24CrgE/20220913111713.jpg" />


### 箱线图的点集合结构

`box` 标记内部会将数据映射为以下 14 个点的集合，形成完整的箱线图：

```text
p0           p2          p1
   ──────────┬──────────
             │
             │
             │
             │ p3
p4 ┌─────────┴──────────┐ p5
   │                    │
   │                    │
p8 ├────────────────────┤ p9
   │                    │
   │        p10         │
p7 └─────────┬──────────┘ p6
             │
             │
             │
  ───────────┴───────────
p12         p11           p13
```

## 代码演示

更多示例详见[箱线图](/examples#statistics-box)

### 基础用法

<Playground path="/statistics/box/demo/basic.js" rid="box-basic"></playground>

### 颜色映射

<Playground path="/statistics/box/demo/box.js" rid="box-box"></playground>

### 分组箱线图

<Playground path="/statistics/box/demo/grouped-box.js" rid="box-grouped"></playground>

### 高阶标记

通过 `boxType: 'boxplot'` 指定，默认值为 `box`。

`box` 标记与 `boxplot` 标记的区别在于：

- `box` 是原子标记，需要开发者手动指定 5 个统计点的数据
- `boxplot` 是高阶标记，自带数据分组和数据统计聚合功能

因此，`box` 更适用于后端对超大数据进行计算和统计之后的可视化展示，而 `boxplot` 更适合用于前端数据的探索和分析过程。

<Playground path="/statistics/box/demo/boxplot-no-outlier.js" rid="boxplot-no-outlier"></playground>

### 预处理箱线图 tooltip 配置

<Playground path="/statistics/box/demo/box-tooltip.js" rid="box-tooltip"></playground>

### 径向箱线图

<Playground path="/statistics/box/demo/polar-box.js" rid="box-polar"></playground>

## 配置项

通用属性参考：[通用配置](components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](#data) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| seriesField | 多箱线图区分字段 | string（可选） | - |
| colorField | 和 seriesField 类似，不过会加上颜色通道，详见[color](/options/plots/color) | string（可选） | - |
| boxType | 标记类型，可选值为 `box` 和 `boxplot`。 `box` 是原子标记，需要开发者手动指定 5 个统计点的数据; `boxplot` 是高阶标记，自带数据分组和数据统计聚合功能； | box \| boxplot | `box` |
| transpose | 是否开启坐标转置 | boolean | - |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| axis | 用于建立数据与视觉位置的映射关系，详见[坐标轴](/options/plots/axis) | object（可选） | - |
| legend | 图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选，详见[图例](/options/plots/legend) | object（可选） | - |
| scrollbar | 用于过滤数据，可以和 x 或者 y 通道绑定，详见[滚动条](/options/plots/scrollbar) | object（可选） | - |
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
| annotations | 视图好比一个画板，`Box` 组件默认在其上绘制了一个箱线图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

### data

data 的数据类型取决于 `boxType`，更多参考图表示例。

- **box**: `yField` 映射的字段需要包含 `[min, q1, q2, q3, max]`
- **boxplot**: 对更具 `xField` 映射的字段进行聚合，聚合后至少能满足 `[min, q1, q2, q3, max, [Outliers]]` 的要求

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
