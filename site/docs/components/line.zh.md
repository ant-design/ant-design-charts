---
category: Components
type: Plot
usage: trend,time
title: Line 折线图
cover:   https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*EH-dTLnE4bcAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-line
order: 0
---

## 简介

折线图用于展示数据的连续变化趋势，适用于时间序列分析、数据对比等场景。

## 代码演示

更多示例详见[折线图](/examples#statistics-line)

### 基础用法

<Playground path="/statistics/line/demo/basic.js" rid="line-basic"></playground>

### 平滑曲线

<Playground path="/statistics/line/demo/smooth.js" rid="line-smooth"></playground>

### 添加填充

通过配置 `area` 添加填充属性，同理 `Area` 也可以配置 `line` 属性。

<Playground path="/statistics/line/demo/area.js" rid="line-area"></playground>

### 多折线图

通过颜色通道 `colorField` 进行分组。

<Playground path="/statistics/line/demo/line-var-size.js" rid="line-series"></playground>

### 自定义颜色

可通过 `scale: { color: { range: ['#30BF78', '#F4664A', '#FAAD14'] } },` 配置颜色映射关系，也可以通过 `style.stroke: callback` 进行精准匹配。

<Playground path="/statistics/line/demo/style-callback.js" rid="style-callback"></playground>

### 添加交互

以 `brushXFilter` 为例，可以通过鼠标刷选进行数据过滤，双击图表区域时候还原到初态，也可参考[监听交互](/options/plots/interaction/overview#监听交互事件)添加 reset 功能，详细交互见[interaction](/options/plots/interaction/overview)。

<Playground path="/statistics/interaction/demo/brush-filter.js" rid="line-filter"></playground>

### 添加事件

获取点击图表时映射的 X 数据，更多详见[事件](/options/plots/event)。

<Playground path="/statistics/events/demo/get-data-by-xy.js" rid="get-data-by-xy"></playground>


## 配置项

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string | - |
| seriesField | 多折线图区分字段 | string（可选） | - |
| colorField | 和 seriesField 类似，不过会加上颜色通道，详见[color](/options/plots/color) | string（可选） | - |
| shapeField | 绑定 line 标记的 shape 属性通道，改变图形标记的绘制形状 | `line \| smooth \| vh \| hv \| hvh \| trail` | line |
| sizeField | 绑定 line 标记的 size 属性通道，改变图形标记的大小， 对于折线来说，size 视觉通道映射在线的宽度上 | string（可选） | - |
| area | 开启面积图，配置和面积图基本一致，默认继承了 `Line` 的 `data` \| `xField` \| `yField` 等属性，同时关闭了 `tooltip`，通过 `style` 指定[绘图属性](/options/plots/style#绘图属性)。 | object(可选) | - |
| point | 标记，配置和 area 类似，也继承了上层的一些通用配置，通过 `shapeField` 指定[标记类型](/options/plots/legend#symbols-可选类型), 可通过 `sizeField` 指定标记大小，可以通过 `style` 指定[绘图属性](/options/plots/style#绘图属性)。 | object(可选) | - |
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
| stack | 折线图是否堆叠 | boolean | false |
| annotations | 视图好比一个画板，`Line` 组件默认在其上绘制了一个折线图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[选项-方法](/options/plots/method)。

## 常见问题

1. 如何调整折线图两端间隔

<img alt="line-1.jpg" width=600 src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*-gS7SrIITdoAAAAAQ3AAAAgAemJ7AQ/fmt.avif" />

```js
scale: {
  x: {
    padding: 0,
  }
},
```
