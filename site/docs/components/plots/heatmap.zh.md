---
category: Components
type: Plot
usage: distribution
title: Heatmap 热力图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*oaJCT5yVPRsAAAAAAAAAAAAADmJ7AQ/original
order: 7
---

## 简介

热力图（Heatmap）是一种通过颜色强度映射二维数据密度或数值大小的可视化图表，擅长揭示数据分布规律、聚类特征及异常点。

典型应用包括：

- 相关性分析：例如，用于展示变量之间的相关性矩阵，通过颜色深浅快速识别强相关或弱相关的变量。
- 密度分析：展示二维数据的密度分布，常用于观察热点区域，例如在地理空间数据中用于分析人群聚集分布。
- 时间序列与类别分析：将时间（如小时、天、周）与类别数据结合，用于分析时序模式或分类分布。

## 代码演示

更多示例详见[热力图](/examples#statistics-heatmap)

### 基础用法

<Playground path="/statistics/heatmap/demo/basic.js" rid="heatmap-basic"></playground>

### 形状修改

<Playground path="/statistics/heatmap/demo/shape.js" rid="heatmap-shape"></playground>

### 自定义形状

<Playground path="/statistics/heatmap/demo/custom-shape.js" rid="heatmap-custom-shape"></playground>

### 密度热力图

<Playground path="/statistics/heatmap/demo/heatmap-density.js" rid="heatmap-density"></playground>

## 配置项

通用属性参考：[通用配置](/components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| shapeField | `point` \| `cell` \| `heatmap` | string（可选） | - |
| sizeField | 尺寸大小映射字段 | string（可选） | - |
| colorField | 颜色映射通道，详见[color](/options/plots/color) | string（可选） | - |
| title | 用于指定图表的标题内容，详见[标题](/options/plots/title) | object（可选） | - |
| axis | 用于建立数据与视觉位置的映射关系，详见[坐标轴](/options/plots/axis) | object（可选） | - |
| legend | 图表的辅助元素，使用颜色、大小、形状区分不同的数据类型，用于图表中数据的筛选，详见[图例](/options/plots/legend) | object（可选） | - |
| scrollbar | 用于过滤数据，可以和 x 或者 y 通道绑定，详见[滚动条](/options/plots/scrollbar) | object（可选） | - |
| slider | 用于过滤数据，让用户在数据量较大的情况下一次只用关注局部的数据，是一种辅助看数据的组件，详见[滑块](/options/plots/slider) | object（可选） | - |
| label | 数据标签是给图表添加标注的手段之一，详见[标签](/options/plots/label) | object（可选） | - |
| tooltip | 用于动态展示数据点的详细信息，详见[提示](/options/plots/tooltip) | object（可选） | - |
| style | 视觉样式，配置项详见[绘图属性](#style) | object（可选） | - |
| theme | 用于控制图表的整体外观，包括颜色、字体、边距等视觉属性，详见[主题](/options/plots/theme/overview) | string \| object（可选） | `light` |
| onReady | 图表加载回调，用于后续的事件[事件](/options/plots/event)绑定 | Function（可选） | - |
| scale | 将抽象数据映射为视觉数据，详见[比例尺](/options/plots/scale/overview) | object（可选） | - |
| animate | 动画作为可视化的重要组成部分，能显著提高数据可视化的表现力，详见[动画](/options/plots/animate/overview) | object（可选） | - |
| interaction | 提供了按需探索数据的能力，详见[交互](/options/plots/interaction/overview) | object（可选） | - |
| state | 实现交互反馈、高亮、选中等效果，详见[状态](/options/plots/state)，不同交互下图表样式 | object（可选） | - |
| annotations | 视图好比一个画板，`Heatmap` 组件默认在其上绘制了一个热力图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


### Style

视觉样式，更多配置项详见[绘图属性](/options/plots/style#绘图属性)

| 属性               | 描述                                                                                                          | 类型                                              | 默认值      | 必选 |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- | ---- |
| gradient           | 图形对应的渐变色配置                                                                                          | `string` \| `Array<[number, string]>`             | -           |      |
| opacity            | 热力图的透明度 ，如果设置，则会覆盖 `maxOpacity`, `minOpacity` 配置，范围 0 ~ 1                               | `number`                                          | `0.6`       |      |
| maxOpacity         | 热力图像素点透明度最大值，在 `opacity = 0` 时候生效，范围 0 ~ 1                                               | `number`                                          | `1`         |      |
| minOpacity         | 热力图像素点透明度最小值，在 `opacity = 0` 时候生效，范围 0 ~ 1                                               | `number`                                          | `0`         |      |
| blur               | 热力图的模糊因子，范围 0 ~ 1，越大图形约平滑                                                                  | `number`                                          | `0.85`      |      |
| useGradientOpacity | 图形的填充色                                                                                                  | `boolean`                                         | `false`     |      |

```ts
const gradient = [
  [0.25, 'rgb(0,0,255)'],
  [0.55, 'rgb(0,255,0)'],
  [0.85, 'yellow'],
  [1.0, 'rgb(255,0,0)'],
];

const gradient =
  '0.25:rgb(0,0,255) 0.55:rgb(0,255,0) 0.85:yellow 1.0:rgb(255,0,0)';
```

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
