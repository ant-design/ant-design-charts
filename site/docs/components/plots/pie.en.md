---
category: Components
type: Plot
usage: proportion
title: Pie Chart
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*DSItR6amdjMAAAAAAAAAAAAADmJ7AQ/original
order: 3
---

## Introduction

A pie chart is a circular statistical chart that divides a circle into several sector areas to show the proportional relationship of each part of data in the whole. The central angle and area of each sector are proportional to the proportion of that part of data, intuitively presenting the relationship between "whole and parts".

## Code Examples

For more examples, see [Pie Chart](/examples#statistics-pie)

### Basic Usage

<Playground path="/statistics/pie/demo/basic.js" rid="pie-basic"></playground>

### Adjust Label Position

<Playground path="/statistics/pie/demo/outer-label.js" rid="pie-outer-label"></playground>

### Custom Label

Implemented through `label.render`.

<Playground path="/statistics/pie/demo/custom-label.js" rid="pie-custom-label"></playground>

### Adjust Inner Radius

<Playground path="/statistics/pie/demo/basic-donut.js" rid="pie-basic-donut"></playground>

### Set Drawing Area

<Playground path="/statistics/pie/demo/quarter-circle.js" rid="pie-quarter-circle"></playground>

### Image Fill

<Playground path="/statistics/pie/demo/pie-texture.js" rid="pie-pie-texture"></playground>

## Configuration

Common properties reference: [Common Configuration](/components/plots/overview#common-configuration)

### Overview

|Configuration|Description|Type|Default|
|-----|---|----|-----|
| data | [Data](/options/plots/data/overview) | Array | [] |
| angleField | Angle mapping field | string  | - |
| colorField | Color mapping channel, see [color](/options/plots/color) | string (optional) | - |
| radius | Radius | number[0~1]  | - |
| innerRadius | Inner radius | number[0~1]  | 0 |
| startAngle | Start angle | number  | - |
| endAngle | End angle | number  | - |
| title | Used to specify chart title content, see [Title](/options/plots/title) | object (optional) | - |
| legend | Auxiliary element of the chart, uses color, size, shape to distinguish different data types, used for filtering data in the chart, see [Legend](/options/plots/legend) | object (optional) | - |
| label | Data labels are one of the means to add annotations to the chart, see [Label](/options/plots/label) | object (optional) | - |
| tooltip | Used to dynamically display detailed information of data points, see [Tooltip](/options/plots/tooltip) | object (optional) | - |
| style | Visual style, configuration details see [Drawing Properties](/options/plots/style#drawing-properties) | object (optional) | - |
| theme | Used to control the overall appearance of the chart, including visual properties such as colors, fonts, margins, see [Theme](/options/plots/theme/overview) | string \| object (optional) | `light` |
| onReady | Chart load callback, used for subsequent [event](/options/plots/event) binding | Function (optional) | - |
| scale | Maps abstract data to visual data, see [Scale](/options/plots/scale/overview) | object (optional) | - |
| animate | Animation as an important part of visualization can significantly improve the expressiveness of data visualization, see [Animation](/options/plots/animate/overview) | object (optional) | - |
| interaction | Provides the ability to explore data on demand, see [Interaction](/options/plots/interaction/overview) | object (optional) | - |
| state | Implements interaction feedback, highlighting, selection and other effects, see [State](/options/plots/state), chart styles under different interactions | object (optional) | - |
| annotations | View is like a drawing board, `Column` component draws a pie chart on it by default, we can overlay more layers on it through annotations, see [Annotations](/examples#statistics-annotation-shape) | Array (optional) | - |

## Events

See [Options - Events](/options/plots/event).

## Methods

See [Chart Overview - Chart Methods](/components/plots/overview#chart-methods).

## FAQ

1. How to avoid label overlapping

<img alt="line-1.jpg" width=600 src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1kI5Ra8hjJ8AAAAAQgAAAAgAemJ7AQ/fmt.webp" />

Adjust through `label.transform`, for more details see [LabelTransform](/options/plots/label#transform)

```js
label: {
  text: (d) => `${d.type}\n ${d.value}`,
  position: 'spider',
  transform: [
    {
      type: 'overlapDodgeY'
    }
  ]
},
```
