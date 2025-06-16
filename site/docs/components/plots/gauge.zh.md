---
category: Components
type: Plot
usage: interval
title: Gauge 仪表盘
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*hpjTRr6LM7IAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-gauge
order: 10
---

## 简介

仪表盘（Gauge）用于创建仪表盘，它是一种常见的可视化图表，用于展示数据的进度、比例或比较情况。

典型应用场景：

- 业务指标：销售额达成率、用户增长进度；
- 系统监控：CPU/内存使用率、磁盘容量预警；
- 设备仪表：车辆时速表、温度计模拟。

## 代码演示

更多示例详见[仪表盘](/examples#statistics-gauge)

### 基础用法

<Playground path="/statistics/gauge/demo/gauge.js" rid="gauge-basic"></playground>

### 自定义颜色

<Playground path="/statistics/gauge/demo/gauge-color.js" rid="gauge-color"></playground>

### 自定义样式

<Playground path="/statistics/gauge/demo/custom-style.js" rid="gauge-custom-style"></playground>

### 自定义指针

<Playground path="/statistics/gauge/demo/custom-pointer.js" rid="gauge-custom-pointer"></playground>


## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](#data) | object | [] |
| style | 视觉[样式](#style) | object（可选） | - |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| legend | 图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选，详见[图例](/options/plots/legend) | object（可选） | - |
| label | 数据标签是给图表添加标注的手段之一，详见[标签](/options/plots/label) | object（可选） | - |
| tooltip | 用于动态展示数据点的详细信息，详见[提示](/options/plots/tooltip) | object（可选） | - |
| theme | 用于控制图表的整体外观，包括颜色、字体、边距等视觉属性，详见[主题](/options/plots/theme/overview) | string \| object（可选） | `light` |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| scale | 将抽象数据映射为视觉数据，详见[比例尺](/options/plots/scale/overview) | object（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| interaction | 提供了按需探索数据的能力，详见[交互](/options/plots/interaction/overview) | object（可选） | - |
| state | 实现交互反馈、高亮、选中等效果，详见[状态](/options/plots/state)，不同交互下图表样式 | object（可选） | - |
| annotations | 视图好比一个画板，`Funnel` 组件默认在其上绘制了一个仪表盘，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

### data

`data`定义仪表盘的数值、目标值及分类信息，通过数据绑定驱动表盘指针位置、颜色映射及多仪表分面展示。

| 属性       | 描述                                                                                                                      | 类型       | 默认值 | 必选 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ | ---- |
| target     | 设置仪表盘指针的目标值                                                                                                    | `number`   | -      |      |
| total      | 设置仪表盘刻度的最大范围值                                                                                                | `number`   | -      |      |
| percent    | 设置仪表盘指针指向的百分比(配置`percent`时，`target`、`total`值会失效，`thresholds`请设置在合理区间，否则会造成渲染错误 ) | `number`   | -      |      |
| thresholds | 设置仪表盘刻度阈值区间                                                                                                    | `number[]` | -      |      |

更多的`data`配置，可以查查看 [data](/manual/core/data/overview) 介绍页面。

### style

视觉样式，更多通用配置项详见[绘图属性](/options/plots/style#绘图属性)

`style` 用于设置图表元素的外观样式，包括填充颜色、边框样式、阴影效果等。

<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*L2ajRK5KsBkAAAAAAAAAAAAAemJ7AQ/original" width=600/>

| 属性    | 描述                     | 类型                | 默认值                   | 必选 |
| ------- | ------------------------ | ------------------- | ------------------------ | ---- |
| arc     | 配置仪表盘圆弧的样式     | [arc](#arc)         | 详见 [arc](#arc)         |      |
| pin     | 配置仪表盘指针轴心的样式 | [pin](#pin)         | 详见 [pin](#pin)         |      |
| pointer | 配置仪表盘指针的样式     | [pointer](#pointer) | 详见 [pointer](#pointer) |      |
| text    | 配置仪表盘中心文字的样式 | [text](#text)       | 详见 [text](#text)       |      |

复合图形标记需要通过不同的前缀来区分图形的配置。

#### arc

通过 `arc` 前缀配置仪表盘圆弧的样式。

| 属性             | 描述                   | 类型                                                         | 默认值    | 必选 |
| ---------------- | ---------------------- | ------------------------------------------------------------ | --------- | ---- |
| arcShape         | 仪表盘圆弧形状         | `'rect'` \|`'hollow'`\|`'round'`                             | `'rect'`  |      |
| arcFill          | 仪表盘圆弧填充颜色     | string \| (datum, index, data) => string                     | -         |      |
| arcFillOpacity   | 仪表盘圆弧填充透明度   | number \| (datum, index, data) => number                     | -         |      |
| arcStroke        | 仪表盘圆弧描边颜色     | string \| (datum, index, data) => string                     | -         |      |
| arcStrokeOpacity | 仪表盘圆弧描边透明度   | number \| (datum, index, data) => number                     | -         |      |
| arcLineHeight    | 仪表盘圆弧行高         | number \| (datum, index, data) => number                     | -         |      |
| arcLineWidth     | 仪表盘圆弧描边宽度     | number \| (datum, index, data) => number                     | -         |      |
| arcLineDash      | 仪表盘圆弧虚线配置     | [number,number] \| (datum, index, data) => [number , number] | -         |      |
| arcOpacity       | 仪表盘圆弧整体透明度   | number \| (datum, index, data) => number                     | -         |      |
| arcShadowColor   | 仪表盘圆弧阴影颜色     | string \| (datum, index, data) => string                     | -         |      |
| arcShadowBlur    | 仪表盘圆弧阴影模糊系数 | number \| (datum, index, data) => number                     | -         |      |
| arcShadowOffsetX | 仪表盘圆弧阴影水平偏移 | number \| (datum, index, data) => number                     | -         |      |
| arcShadowOffsetY | 仪表盘圆弧阴影垂直偏移 | number \| (datum, index, data) => number                     | -         |      |
| arcCursor        | 仪表盘圆弧鼠标样式     | string \| (datum, index, data) => string                     | `default` |      |

#### pin

通过 `pin` 前缀配置仪表盘指针轴心的样式。

| 属性             | 描述                       | 类型                                                         | 默认值    | 必选 |
| ---------------- | -------------------------- | ------------------------------------------------------------ | --------- | ---- |
| pinR             | 仪表盘指针轴心半径大小     | number \| (datum, index, data) => number                     | `10`      |      |
| pinFill          | 仪表盘指针轴心填充颜色     | string \| (datum, index, data) => string                     | `'#fff'`  |      |
| pinFillOpacity   | 仪表盘指针轴心填充透明度   | number \| (datum, index, data) => number                     | -         |      |
| pinStroke        | 仪表盘指针轴心描边颜色     | string \| (datum, index, data) => string                     | -         |      |
| pinStrokeOpacity | 仪表盘指针轴心描边透明度   | number \| (datum, index, data) => number                     | -         |      |
| pinLineHeight    | 仪表盘指针轴心行高         | number \| (datum, index, data) => number                     | -         |      |
| pinLineWidth     | 仪表盘指针轴心描边宽度     | number \| (datum, index, data) => number                     | -         |      |
| pinLineDash      | 仪表盘指针轴心虚线配置     | [number,number] \| (datum, index, data) => [number , number] | -         |      |
| pinOpacity       | 仪表盘指针轴心整体透明度   | number \| (datum, index, data) => number                     | -         |      |
| pinShadowColor   | 仪表盘指针轴心阴影颜色     | string \| (datum, index, data) => string                     | -         |      |
| pinShadowBlur    | 仪表盘指针轴心阴影模糊系数 | number \| (datum, index, data) => number                     | -         |      |
| pinShadowOffsetX | 仪表盘指针轴心阴影水平偏移 | number \| (datum, index, data) => number                     | -         |      |
| pinShadowOffsetY | 仪表盘指针轴心阴影垂直偏移 | number \| (datum, index, data) => number                     | -         |      |
| pinCursor        | 仪表盘指针轴心鼠标样式     | string \| (datum, index, data) => string                     | `default` |      |

#### pointer

通过 `pointer` 前缀配置仪表盘指针的样式。

| 属性                 | 描述                   | 类型                                                             | 默认值    | 必选 |
| -------------------- | ---------------------- | ---------------------------------------------------------------- | --------- | ---- |
| pointerShape         | 仪表盘指针形状         | `'line'` \|`(points, value, coordinate, theme) => DisplayObject` | `'line'`  |      |
| pointerStroke        | 仪表盘指针描边颜色     | string \| (datum, index, data) => string                         | -         |      |
| pointerStrokeOpacity | 仪表盘指针描边透明度   | number \| (datum, index, data) => number                         | -         |      |
| pointerLineWidth     | 仪表盘指针线宽         | number \| (datum, index, data) => number                         | -         |      |
| pointerLineDash      | 仪表盘指针虚线配置     | [number,number] \| (datum, index, data) => [number , number]     | -         |      |
| pointerOpacity       | 仪表盘指针整体透明度   | number \| (datum, index, data) => number                         | -         |      |
| pointerShadowColor   | 仪表盘指针阴影颜色     | string \| (datum, index, data) => string                         | -         |      |
| pointerShadowBlur    | 仪表盘指针阴影模糊系数 | number \| (datum, index, data) => number                         | -         |      |
| pointerShadowOffsetX | 仪表盘指针阴影水平偏移 | number \| (datum, index, data) => number                         | -         |      |
| pointerShadowOffsetY | 仪表盘指针阴影垂直偏移 | number \| (datum, index, data) => number                         | -         |      |
| pointerCursor        | 仪表盘指针鼠标样式     | string \| (datum, index, data) => string                         | `default` |      |

#### text

通过 `text` 前缀配置仪表盘指示文本的样式。

| 属性              | 描述                                                                       | 类型                                                         | 默认值    | 必选 |
| ----------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------ | --------- | ---- |
| textContent       | 设置仪表盘中心指示文本内容                                                 | string                                                       | -         |      |
| textX             | 仪表盘中心指示文本 x 方向上的偏移量，可以设置为具体数值，也可以设置百分比  | number \| string                                             | `50%`     |      |
| textY             | 仪表盘中心指示文本 y 方向上的偏移量 ，可以设置为具体数值，也可以设置百分比 | number \| string                                             | `60%`     |      |
| textFontSize      | 仪表盘指示文本文字大小                                                     | number \| (datum, index, data) => number                     | `20`      |      |
| textFontFamily    | 仪表盘指示文本字体                                                         | string \| (datum, index, data) => string                     | -         |      |
| textFontWeight    | 仪表盘指示文本字重                                                         | number \| (datum, index, data) => number                     | `800`     |      |
| textTextAlign     | 仪表盘指示文本对齐方式                                                     | `center` \| `end` \| `left` \| `right` \| `start`            | `center`  |      |
| textTextBaseline  | 仪表盘指示文本基线对齐                                                     | `top` \| `middle` \| `bottom` \| `alphabetic` \| `hanging`   | `middle`  |      |
| textFill          | 仪表盘指示文本颜色                                                         | string \| (datum, index, data) => string                     | `#888`    |      |
| textFillOpacity   | 仪表盘指示文本透明度                                                       | number \| (datum, index, data) => number                     | -         |      |
| textStroke        | 仪表盘指示文本描边色                                                       | string \| (datum, index, data) => string                     | -         |      |
| textStrokeOpacity | 仪表盘指示文本描边透明度                                                   | number \| (datum, index, data) => number                     | -         |      |
| textLineHeight    | 仪表盘指示文本行高                                                         | number \| (datum, index, data) => number                     | -         |      |
| textLineWidth     | 仪表盘指示文本描边宽度                                                     | number \| (datum, index, data) => number                     | -         |      |
| textLineDash      | 仪表盘指示文本虚线配置                                                     | [number,number] \| (datum, index, data) => [number , number] | -         |      |
| textOpacity       | 仪表盘指示文本整体透明度                                                   | number \| (datum, index, data) => number                     | -         |      |
| textShadowColor   | 仪表盘指示文本阴影颜色                                                     | string \| (datum, index, data) => string                     | -         |      |
| textShadowBlur    | 仪表盘指示文本阴影模糊                                                     | number \| (datum, index, data) => number                     | -         |      |
| textShadowOffsetX | 仪表盘指示文本阴影水平偏移                                                 | number \| (datum, index, data) => number                     | -         |      |
| textShadowOffsetY | 仪表盘指示文本阴影垂直偏移                                                 | number \| (datum, index, data) => number                     | -         |      |
| textCursor        | 仪表盘指示文本鼠标样式                                                     | string \| (datum, index, data) => string                     | `default` |      |

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
