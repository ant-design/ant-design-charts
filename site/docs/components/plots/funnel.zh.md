---
category: Components
type: Plot
usage: flow,comparison
title: Funnel 漏斗图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*VHVOTK8LhxkAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-funnel
order: 6
---

## 简介

漏斗图（Funnel）是一种形似漏斗的可视化图表，核心用于展示业务流程中各环节的转化效率，其特征包括：

- 上宽下窄形态：顶部代表初始阶段（如潜在用户），底部代表最终阶段（如成交用户），各环节的宽度与数值成比例。
- 流程化展示：按业务逻辑顺序排列环节（如 “曝光→点击→咨询→下单”），直观呈现每一步的损耗与留存。
- 数据标注：每个环节通常标注具体数值和转化率（如 “点击量 1000，转化率 20%”），便于量化分析。

## 代码演示

更多示例详见[漏斗图](/examples#statistics-funnel)

### 基础用法

<Playground path="/statistics/funnel/demo/funnel.js" rid="funnel-basic"></playground>

### 不同形状

<Playground path="/statistics/funnel/demo/pyramid.js" rid="funnel-pyramid"></playground>

### 转置

<Playground path="/statistics/funnel/demo/transpose.js" rid="funnel-transpose"></playground>

### 镜像对比

<Playground path="/statistics/funnel/demo/mirror-funnel.js" rid="funnel-mirror"></playground>


## 配置项

通用属性参考：[通用配置](/components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| shapeField | 阶梯形状 | `funnel` \| `pyramid` | funnel |
| compareField | 对比字段。声明此字段时会自动渲染为对比漏斗图 | string | - |
| isTransposed | 漏斗图布局是否转置 | boolean | false |
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
| annotations | 视图好比一个画板，`Funnel` 组件默认在其上绘制了一个漏斗图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
