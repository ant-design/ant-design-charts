---
category: Components
type: Plot
usage: comparison,distribution,interval,trend,time
title: Area 面积图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZxtyTrhyN4sAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-area
order: 2
---

## 简介

面积图（Area）是一种以折线图为基础，将折线与坐标轴之间的区域用颜色或纹理填充的统计图表。它通过面积大小直观展示数据的变化趋势、累计总量及部分与整体的关系，兼具折线图的趋势表达与柱状图的面积对比优势。

## 代码演示

更多示例详见[面积图](/examples#statistics-area)

### 基础用法

<Playground path="/statistics/area/demo/basic.js" rid="area-basic"></playground>

### 渐变面积图

<Playground path="/statistics/area/demo/area-gradient.js" rid="area-gradient"></playground>

### 百分比面积图

<Playground path="/statistics/area/demo/percentage-area.js" rid="area-percentage"></playground>

### 标记点面积图

通过配置 `line` 给面积图加上线条属性，通过 `point` 给面积图加上 [symbols](/options/plots/legend#symbols-可选类型) 标记，注意前后顺序，会出现覆盖情况。

<Playground path="/statistics/area/demo/marker.js" rid="area-marker"></playground>

### 堆叠面积图

<Playground path="/statistics/area/demo/stacked-area.js" rid="area-stacked"></playground>

### 区间面积图

<Playground path="/statistics/area/demo/range-spline-area.js" rid="area-range-spline"></playground>

### 差分面积图

通过 `diff` 实现， diff 是一个比较特殊的通道变化，主要是针对 yField 中的 y1 进行变换。对于面积图来说，它具备有 y 和 y1 通道，分别代表着面积图形的上边界和下边界，diffY 会对每一个面积图形的 y1 做以下处理：

1. 计算每个 x 对应的 y1 的最大值 y1max
2. 然后针对每个图形的 y 去判断和 y1max 的大小，如果 y1max > y 则移除这个数据，否则设置 y1 = y1max

例如下面的的案例是看 New York 和 San Francisco 两个城市的天气情况的趋势，通过 diffY 就可以凸显出在同一个时间 x 下，到底那个城市的温度更高。

<Playground path="/statistics/area/demo/area-difference.js" rid="area-difference"></playground>

### 添加事件

获取点击图表时映射的 X 数据，更多详见[事件](/options/plots/event)。

<Playground path="/statistics/events/demo/get-area-data.js" rid="area-get-data"></playground>


## 配置项

通用属性参考：[通用配置](components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| seriesField | 多面积图区分字段 | string（可选） | - |
| colorField | 和 seriesField 类似，不过会加上颜色通道，详见[color](/options/plots/color) | string（可选） | - |
| shapeField | 绑定 line 标记的 shape 属性通道，改变图形标记的绘制形状 | `line \| smooth \| vh \| hv \| hvh \| trail` | line |
| sizeField | 绑定 line 标记的 size 属性通道，改变图形标记的大小， 对于折线来说，size 视觉通道映射在线的宽度上 | string（可选） | - |
| line | 开启折线图，配置和[折线图](/components/plots/line)基本一致，默认继承了 `Area` 的 `data` \| `xField` \| `yField` 等属性，同时关闭了 `tooltip`，通过 `style` 指定[绘图属性](/options/plots/style#绘图属性)。 | object(可选) | - |
| point | 标记，配置和 line 类似，也继承了上层的一些通用配置，通过 `shapeField` 指定[标记类型](/options/plots/legend#symbols-可选类型), 可通过 `sizeField` 指定标记大小，可以通过 `style` 指定[绘图属性](/options/plots/style#绘图属性)。 | object(可选) | - |
| stack | 面积图是否堆叠 | boolean\|[Stack](#stack) | false |
| percent | 堆叠状态下条形图是否百分比展示 | boolean | false |
| symmetry | 数据是否围绕 Y 轴对称分布，展示正负关联（如收益与亏损、进出口平衡） | boolean | false |
| diff | 是否开启差分 | boolean | false |
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
| annotations | 视图好比一个画板，`Line` 组件默认在其上绘制了一个面积图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


### Stack

| 属性    | 描述                      | 类型                 | 默认值 |
| ------- | ------------------------- | -------------------- | ------ |
| groupBy | 指定分组通道              | `string \| string[]` | `x`    |
| orderBy | 指定排序的数据            | `TransformOrder`     | null   |
| y       | y 通道选择的数据通道来源  | `'y'\|'y1'`          | `y`    |
| y1      | y1 通道选择的数据通道来源 | `'y'\|'y1'`          | `y1`   |
| reverse | 是否逆序                  | `boolean`            | false  |
| series  | 是否有分组字段            | `boolean`            | true   |

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
