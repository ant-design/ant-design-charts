---
category: Components
type: Plot
usage: comparison
title: Rose 玫瑰图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Cx8zT7vT5bUAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-rose
order: 10
---

## 简介

玫瑰图（Rose）又称南丁格尔玫瑰图（Nightingale Rose Chart），是条形图与饼图的变形，由弗洛伦斯・南丁格尔在克里米亚战争期间首创。其核心特征包括：

- 环形放射结构：将圆形划分为多个扇形区域，每个扇形的半径和角度同时编码数据（传统饼图仅用角度）。
- 双重数据维度：
  - 扇形角度：通常代表分类占比（与饼图类似）。
  - 半径长度：代表数值大小（类似条形图的高度）。
- 花瓣式视觉隐喻：通过花瓣的 “大小” 与 “宽窄” 直观传递数据差异，适合展示周期性或分类数据。

## 代码演示

更多示例详见[玫瑰图](/examples#statistics-rose)

### 基础用法

<Playground path="/statistics/rose/demo/rose.js" rid="rose-basic"></playground>

### 堆叠

<Playground path="/statistics/rose/demo/stacked-rose.js" rid="rose-stacked"></playground>

### 添加标签

<Playground path="/statistics/rose/demo/rose-label.js" rid="rose-label"></playground>

### 南丁格尔玫瑰环图

<Playground path="/statistics/rose/demo/donut-rose.js" rid="rose-donut"></playground>


### 风向图

<Playground path="/statistics/rose/demo/wind-rose.js" rid="rose-wind"></playground>

## 配置项

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| colorField | 和 seriesField 类似，不过会加上颜色通道，详见[color](/options/plots/color) | string（可选） | - |
| sizeField | 大小、大小映射字段 | number \| string（可选） | - |
| stack | 玫瑰图是否堆叠 | boolean\|[Stack](#stack) | false |
| group | 玫瑰图是否分组 | boolean\|[Group](#group) | false |
| radius | 半径 | number[0~1]  | - |
| innerRadius | 内径 | number[0~1]  | 0 |
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
| annotations | 视图好比一个画板，`Rose` 组件默认在其上绘制了一个玫瑰图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


### Stack

| 属性    | 描述                      | 类型                 | 默认值 |
| ------- | ------------------------- | -------------------- | ------ |
| groupBy | 指定分组通道              | `string \| string[]` | `x`    |
| orderBy | 指定排序的数据            | `TransformOrder`     | null   |
| y       | y 通道选择的数据通道来源  | `'y'\|'y1'`          | `y`    |
| y1      | y1 通道选择的数据通道来源 | `'y'\|'y1'`          | `y1`   |
| reverse | 是否逆序                  | `boolean`            | false  |
| series  | 是否有分组字段            | `boolean`            | true   |


### Group

| 属性    | 描述                          | 类型               | 默认值     | 必选 |
| ------- | ----------------------------- | ------------------ | ---------- | ---- |
| groupBy | 数据分组的通道或通道组合      | string \| string[] | `x`        |      |
| orderBy | 分组内元素的排序规则          | TransformOrder     | () => null |      |
| reverse | 是否逆序排列分组内的元素      | boolean            | false      |      |
| padding | 分组内元素之间的间距（0 ~ 1） | number             | 0          |      |


## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。
