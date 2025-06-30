---
category: Components
type: Plot
usage: comparison,trend,time
title: DualAxes 双轴图
cover: https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*GLvKQbqMjTQAAAAAAAAAAAAADmJ7AQ/fmt.webp
link: /examples#statistics-dual-axes
order: 5
---

## 简介

双轴图（DualAxes）是一种将两组不同量级或不同单位的数据，通过左右两个纵坐标轴（Y 轴）和共同的横坐标轴（X 轴）进行可视化的图表类型。其核心特点是：

- 双纵轴设计：左侧 Y 轴对应一组数据（通常为主变量），右侧 Y 轴对应另一组数据（辅助变量），两组数据共享 X 轴（如时间、类别等）。
- 数据兼容性：适用于两组数据量级差异大或单位不同（如 “销售额” 与 “增长率”“产量” 与 “合格率”），避免单轴图表因数值差异导致小数据被淹没。

## 代码演示

更多示例详见[双轴图](/examples#statistics-dual-axes)

### 基础用法

<Playground path="/statistics/dual-axes/demo/basic.js" rid="dual-axes-basic"></playground>

### 单柱子-多折线

<Playground path="/statistics/dual-axes/demo/column-multi-line.js" rid="dual-axes-column-multi-line"></playground>

### 多柱子-单折线

<Playground path="/statistics/dual-axes/demo/grouped-column-line.js" rid="dual-axes-grouped-column-line"></playground>

### 多柱子-多折线

<Playground path="/statistics/dual-axes/demo/grouped-column-multi-line.js" rid="dual-axes-grouped-column-multi-line"></playground>

### 多轴图

`childern` 支持任意拓展，理论上可以绘制任意图表。

<Playground path="/statistics/dual-axes/demo/multi-line.js" rid="dual-axes-multi-line"></playground>

### 文本标记

<Playground path="/statistics/dual-axes/demo/custom-column-line.js" rid="dual-axes-custom-column-line"></playground>

## 配置项

通用属性参考：[通用配置](components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| children | 图表列表 | any[] | - |
| seriesField | 多 Mark 区分字段 | string（可选） | - |
| colorField | 和 seriesField 类似，不过会加上颜色通道，详见[color](/options/plots/color) | string（可选） | - |
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
| annotations | 视图好比一个画板，`Column` 组件默认在其上绘制了一个双轴图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


### Children

通过配置 type 指定图表类型，常见 type 如下:
- `line`: 配置项和[折线图(Line)](/components/plots/line)一致。
- `interval`: 配置项和[柱状图(Column)](/components/plots/column)一致。
- `area`: 配置项和[柱状图(Column)](/components/plots/area)一致。
- `point`: 配置项和[折线图-point(Line)](/components/plots/line#配置项)一致，一般用于给折线图加上 shape 标记。为了支持拓展能力，不能直接在 `type: 'line'` 图表中配置 `point`。

children 会继承父级配置的所有属性，例如 `data`、`xField`、`tooltip`、`legend` 等，如果 children 里面也配置了相同属性，会覆盖父级的配置。

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。

## 常见问题

1. 如何保持左右刻度一致？

在父级配置 scale ，设置相同的值域。

```js
scale: { y: { domain: [0, 10] } },
```

2. 不同图表如何贡献坐标轴？

通过 key 进行绑定，并将 independent 设置为 false 。

```js
const config = {
  xField: 'time',
  children: [
    {
      type: 'interval',
      scale: { y: { domainMax: 1200, key: 'key1', independent: false } },
    },
    {
      type: 'line',
      scale: { y: { key: 'key1', independent: false } },
    },
  ],
};
```

3. 图表出现遮挡？

children 里面图表，会根据顺序依次绘制，调整绘制顺序即可。

```js
children: [
  {
    type: 'line',
  },
  {
    type: 'point',
  },
],
```
