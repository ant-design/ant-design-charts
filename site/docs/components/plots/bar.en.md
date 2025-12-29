---
category: Components
type: Plot
usage: comparison
title: Bar Chart
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*eU1cRqm_fPAAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-bar
order: 1.2
---

## Introduction

A bar chart is a visualization that uses the width of rectangular bars to represent data magnitude, used to display comparisons between different categories or show data distribution. Its configuration is identical to [Column](/components/plots/column) and can be fully referenced.

## Code Examples

For more examples, see [Bar Chart](/examples#statistics-bar)

### Basic Usage

<Playground path="/statistics/bar/demo/bar.js" rid="bar-basic"></playground>

### Background Color

<Playground path="/statistics/bar/demo/background.js" rid="bar-background"></playground>

### Grouped Bar Chart

Implemented through `group: true`, can be configured as an object to adjust group spacing.

<Playground path="/statistics/bar/demo/group.js" rid="bar-group"></playground>

### Conversion Rate Bar Chart

Implemented through `conversionTag`.

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

### Reflected Bar Chart

<Playground path="/statistics/bar/demo/reflect.js" rid="bar-reflect"></playground>

### Gantt Chart

Implemented through `group: true`, can be configured as an object to adjust group spacing.

<Playground path="/statistics/bar/demo/gantt.js" rid="bar-gantt"></playground>

## Configuration

Common properties reference: [Common Configuration](/components/plots/overview#common-configuration)

### Overview

|Configuration|Description|Type|Default|
|-----|---|----|-----|
| data | [Data](/options/plots/data/overview) | Array | [] |
| xField | X-axis field | string | - |
| yField | Y-axis field | string \| string[] | - |
| seriesField | Field to distinguish multiple bar charts | string (optional) | - |
| colorField | Similar to seriesField, but adds color channel, see [color](/options/plots/color) | string (optional) | - |
| stack | Whether bar chart is stacked | boolean\|[Stack](#stack) | false |
| group | Whether bar chart is grouped | boolean\|[Group](#group) | false |
| percent | Whether bar chart shows as percentage in stacked state | boolean | false |
| conversionTag | Conversion rate configuration | [conversionTag](#conversiontag) | - |
| markBackground | Element background configuration, no different from configuring bars, can be seen as a bar component placed at the bottom layer, needs `scale.y.domain` configuration to take effect | [MarkBackground](#markbackground) | - |
| title | Used to specify chart title content, see [Title](/options/plots/title) | object (optional) | - |
| axis | Used to establish mapping between data and visual position, see [Axis](/options/plots/axis) | object (optional) | - |
| legend | Auxiliary element of the chart, uses color, size, shape to distinguish different data types, used for filtering data in the chart, see [Legend](/options/plots/legend) | object (optional) | - |
| scrollbar | Used to filter data, can be bound to x or y channel, see [Scrollbar](/options/plots/scrollbar) | object (optional) | - |
| slider | Used to filter data, allows users to focus on local data at a time when there is a large amount of data, is an auxiliary component for viewing data, see [Slider](/options/plots/slider) | object (optional) | - |
| label | Data labels are one of the means to add annotations to the chart, see [Label](/options/plots/label) | object (optional) | - |
| tooltip | Used to dynamically display detailed information of data points, see [Tooltip](/options/plots/tooltip) | object (optional) | - |
| style | Visual style, configuration details see [Drawing Properties](/options/plots/style#drawing-properties) | object (optional) | - |
| theme | Used to control the overall appearance of the chart, including visual properties such as colors, fonts, margins, see [Theme](/options/plots/theme/overview) | string \| object (optional) | `light` |
| onReady | Chart load callback, used for subsequent [event](/options/plots/event) binding | Function (optional) | - |
| scale | Maps abstract data to visual data, see [Scale](/options/plots/scale/overview) | object (optional) | - |
| animate | Animation as an important part of visualization can significantly improve the expressiveness of data visualization, see [Animation](/options/plots/animate/overview) | object (optional) | - |
| interaction | Provides the ability to explore data on demand, see [Interaction](/options/plots/interaction/overview) | object (optional) | - |
| state | Implements interaction feedback, highlighting, selection and other effects, see [State](/options/plots/state), chart styles under different interactions | object (optional) | - |
| annotations | View is like a drawing board, `bar` component draws a bar chart on it by default, we can overlay more layers on it through annotations, see [Annotations](/examples#statistics-annotation-shape) | Array (optional) | - |


### Stack

| Property | Description | Type | Default |
| ------- | ------------------------- | -------------------- | ------ |
| groupBy | Specify grouping channel | `string \| string[]` | `x` |
| orderBy | Specify data for sorting | `TransformOrder` | null |
| y | Data channel source selected by y channel | `'y'\|'y1'` | `y` |
| y1 | Data channel source selected by y1 channel | `'y'\|'y1'` | `y1` |
| reverse | Whether to reverse order | `boolean` | false |
| series | Whether there is a grouping field | `boolean` | true |


### Group

| Property | Description | Type | Default | Required |
| ------- | ----------------------------- | ------------------ | ---------- | ---- |
| groupBy | Channel or channel combination for data grouping | string \| string[] | `x` | |
| orderBy | Sorting rule for elements within a group | TransformOrder | () => null | |
| reverse | Whether to reverse the order of elements within a group | boolean | false | |
| padding | Spacing between elements within a group (0 ~ 1) | number | 0 | |


### ConversionTag

| Property | Description | Type | Default | Required |
| ------- | ----------------------------- | ------------------ | ---------- | ---- |
| size | Icon height | number | 40 | false |
| arrowSize | Arrow size | number | 20 | false |
| spacing | Distance from bar | boolean | 4 | false |
| text | Text configuration | number | 0 | |
| style | Icon style | [ShapeAttrs](/options/plots/style#drawing-properties) | - | false |

```ts
type Text = {
  /** Text style */
  style?: ShapeAttrs;
  /** Text formatter */
  formatter?: (prev: number, next: number) => string;
};
```

### MarkBackground

```ts
type MarkBackground = {
  /** background style */
  style?: ShapeAttrs;
  [key: string]: any
};
```

## Events

See [Options - Events](/options/plots/event).

## Methods

See [Chart Overview - Chart Methods](/components/plots/overview#chart-methods).

## FAQ

1. How to set bar chart width?

There's a misconception here - Bar and Column have identical configurations, just with coordinate transposition, so all configurations are the same, please refer to Column.

```js
style: {
  minWidth: 20,
  maxWidth: 20
}
```

2. How to set spacing inside bars in stacking case [spacing in stacking bar chart](https://github.com/ant-design/ant-design-charts/discussions/2999)

```js
style: {
  insetRight: 2,
  // stroke: '#fff',
  // lineWidth: 2
}
```
