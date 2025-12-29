---
category: Components
type: Plot
usage: flow,comparison
title: Funnel Chart
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*VHVOTK8LhxkAAAAAAAAAAAAADmJ7AQ/original
link: /examples#statistics-funnel
order: 6
---

## Introduction

A funnel chart is a visualization that resembles a funnel, primarily used to show conversion efficiency across stages in a business process. Its characteristics include:

- Narrow-down shape: The top represents the initial stage (e.g., potential users), the bottom represents the final stage (e.g., converted customers), with each stage's width proportional to its value.
- Process flow display: Stages are arranged in business logic order (e.g., "Exposure → Click → Inquiry → Order"), intuitively showing loss and retention at each step.
- Data annotation: Each stage is usually annotated with specific values and conversion rates (e.g., "Clicks 1000, conversion rate 20%"), facilitating quantitative analysis.

## Code Examples

For more examples, see [Funnel Chart](/examples#statistics-funnel)

### Basic Usage

<Playground path="/statistics/funnel/demo/funnel.js" rid="funnel-basic"></playground>

### Different Shapes

<Playground path="/statistics/funnel/demo/pyramid.js" rid="funnel-pyramid"></playground>

### Transposed

<Playground path="/statistics/funnel/demo/transpose.js" rid="funnel-transpose"></playground>

### Mirror Comparison

<Playground path="/statistics/funnel/demo/mirror-funnel.js" rid="funnel-mirror"></playground>


## Configuration

Common properties reference: [Common Configuration](/components/plots/overview#common-configuration)

### Overview

|Configuration|Description|Type|Default|
|-----|---|----|-----|
| data | [Data](/options/plots/data/overview) | Array | [] |
| xField | X-axis field | string | - |
| yField | Y-axis field | string \| string[] | - |
| shapeField | Stage shape | `funnel` \| `pyramid` | funnel |
| compareField | Comparison field. When this field is declared, it will automatically render as a comparison funnel chart | string | - |
| isTransposed | Whether the funnel chart layout is transposed | boolean | false |
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
| annotations | View is like a drawing board, `Funnel` component draws a funnel chart on it by default, we can overlay more layers on it through annotations, see [Annotations](/examples#statistics-annotation-shape) | Array (optional) | - |

## Events

See [Options - Events](/options/plots/event).

## Methods

See [Chart Overview - Chart Methods](/components/plots/overview#chart-methods).
