---
category: Components
type: Plot
usage: comparison
title: Bar 条形图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*eU1cRqm_fPAAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-bar
order: 1.2
---

## 简介

条形图（bar）是一种以矩形条的宽度来表示数据大小的可视化图表，用于展示不同类别之间的比较或显示数据分布，其配置和 [Column](/components/plots/column) 一致，可完成参考。

## 代码演示

更多示例详见[条形图](/examples#statistics-bar)

### 基础用法

<Playground path="/statistics/bar/demo/bar.js" rid="bar-basic"></playground>

### 背景色

<Playground path="/statistics/bar/demo/background.js" rid="bar-background"></playground>

### 分组条形图

通过 `group: true` 实现，可配置为对象调整分组间距离。

<Playground path="/statistics/bar/demo/group.js" rid="bar-group"></playground>

### 转化率条形图

通过 `conversionTag` 实现。

```js
conversionTag: {
  size: 40,
  spacing: 4,
  text: {
    formatter: (prev, next) => `${((next / prev) * 100).toFixed(1)}%`,
  },
},
```

<Playground path="/statistics/bar/demo/conversion-tag.js" rid="bar-conversion-tag"></playground>

### 反射条形图

<Playground path="/statistics/bar/demo/reflect.js" rid="bar-reflect"></playground>

### 甘特图

通过 `group: true` 实现，可配置为对象调整分组间距离。

<Playground path="/statistics/bar/demo/gantt.js" rid="bar-gantt"></playground>

## 配置项

通用属性参考：[通用配置](/components/plots/overview#通用配置项)

### 概览

|配置项|说明|类型|默认值|
|-----|---|----|-----|
| data | [数据](/options/plots/data/overview) | Array | [] |
| xField | 横轴字段 | string | - |
| yField | 纵轴字段 | string \| string[] | - |
| seriesField | 多条形图区分字段 | string（可选） | - |
| colorField | 和 seriesField 类似，不过会加上颜色通道，详见[color](/options/plots/color) | string（可选） | - |
| stack | 条形图是否堆叠 | boolean\|[Stack](#stack) | false |
| group | 条形图是否分组 | boolean\|[Group](#group) | false |
| percent | 堆叠状态下条形图是否百分比展示 | boolean | false |
| conversionTag | 转化率配置 | [conversionTag](#conversiontag) | - |
| markBackground | 元素背景配置，和配置柱子无区别，可以看做是放置于底层的 bar 组件，需要配置 `scale.y.domain` 才能生效 | [MarkBackground](#markBackground) | - |
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
| annotations | 视图好比一个画板，`bar` 组件默认在其上绘制了一个条形图，我们可以通过 annotations 在上面叠加更多的图层，详见[标注](/examples#statistics-annotation-shape) | Array（可选） | - |


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


### ConversionTag

| 属性    | 描述                          | 类型               | 默认值     | 必选 |
| ------- | ----------------------------- | ------------------ | ---------- | ---- |
| size | Icon 高度      | number | 40        |   false   |
| arrowSize | 箭头大小          |   number   | 20 |  false    |
| spacing | 距离柱子间距      | boolean            | 4      |   false   |
| text | 文本配置 | number             | 0          |      |
| style | Icon 样式 | [ShapeAttrs](/options/plots/style#绘图属性)            | -         |   false   |

```ts
type Text = {
  /** 文字样式 */
  style?: ShapeAttrs;
  /** 文本格式化 */
  formatter?: (prev: number, next: number) => string;
};
```

### MarkBackground

```ts
type MarkBackground = {
  /** background 样式 */
  style?: ShapeAttrs;
  [key: string]: any
};
```

## 事件

详见[选项-事件](/options/plots/event)。

## 方法

详见[图表概览-图表方法](/components/plots/overview#图表方法)。

## 常见问题

1. 如何设置条形图宽度？

这里有个误区，Bar 和 Column 的配置是完全一致的，只是做了个坐标转置，所有配置也是一致的，可参考 Column。

```js
style: {
  minWidth: 20,
  maxWidth: 20
}
```
