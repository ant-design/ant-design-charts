---
title: Axis
order: 2
---

## Overview

In Ant Design Charts, the **Axis** component serves as the "ruler" of charts, establishing the mapping relationship between data and visual positions. Through scales, labels, grid lines, and other elements, it helps users intuitively understand data distribution and proportions. It enables you to quickly comprehend the position and numerical values in graphics.

Simply put, axis help us correlate data numbers with positions on the chart, making charts easier to understand.

> For example: In a bar chart, the horizontal axis usually represents time, and the vertical axis represents sales. This way, you can see at a glance that "sales were 2 million in March and rose to 3 million in April."

![Axis Usage Diagram](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gv2RSJ6zZykAAAAAAAAAAAAAemJ7AQ/original)

### Components

<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*vMugQZrzeeYAAAAAAAAAAAAAemJ7AQ/original" width="1000px" />

### Usage

Through the overview content above, I believe you now have a clear understanding of axis. So how exactly do you use them? Next, I'll guide you step by step on how to configure axis.

Configuring axis is like building with blocks - just remember a simple core principle: "Use the axis property, configure by direction, change what needs to be changed where it needs to be changed."

**Step 1: Enable Axis (enabled by default)**

Ant Design Charts automatically generates axis based on your data types. No configuration is needed to see basic axis.

![Enable Axis (enabled by default)](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gv2RSJ6zZykAAAAAAAAAAAAAemJ7AQ/original)

```js
{
    width: 500,
    height: 300,
    data: [
      { id: 1, month: 'March', sales: 200 },
      { id: 3, month: 'April', sales: 300 },
      { id: 4, month: 'May', sales: 400 },
      { id: 5, month: 'June', sales: 500 },
      { id: 6, month: 'July', sales: 600 },
      { id: 7, month: 'August', sales: 700 },
    ],
    xField: 'month',
    yField: 'sales',
    // No axis configuration needed for automatic axis generation
    // axis: {},
    colorField: 'month'
}
```

**Step 2: Configure by Direction**

> Configure x (horizontal direction) axis

```js
{
    width: 500,
    height: 300,
    data: [
      { id: 1, month: 'March', sales: 200 },
      { id: 3, month: 'April', sales: 300 },
      { id: 4, month: 'May', sales: 400 },
      { id: 5, month: 'June', sales: 500 },
      { id: 6, month: 'July', sales: 600 },
      { id: 7, month: 'August', sales: 700 },
    ],
    xField: 'month',
    yField: 'sales',
    colorField: 'month',
    // Configure axis
    axis: {
      // Configure horizontal axis properties
      x: {
        // Configuration parameters and examples can be found below...
      },
    }
}
```

> Configure y (vertical direction) axis

```js
{
    width: 500,
    height: 300,
    data: [
      { id: 1, month: 'March', sales: 200 },
      { id: 3, month: 'April', sales: 300 },
      { id: 4, month: 'May', sales: 400 },
      { id: 5, month: 'June', sales: 500 },
      { id: 6, month: 'July', sales: 600 },
      { id: 7, month: 'August', sales: 700 },
    ],
    xField: 'month',
    yField: 'sales',
    colorField: 'month',
    // Configure axis
    axis: {
      // Configure vertical axis properties
      y: {
        // Configuration parameters and examples can be found below...
      },
    }
}
```

### Configuration Levels

Axis can be configured at the Mark level. In Ant Design Charts, each mark has its own axis. If the marks correspond to synchronized scales, the axis will be merged.

```js
({
  axis: {
    x: { labelFormatter: '%0' },
    y: { tickCount: 5 },
  },
});
```

### Hide Axis

Hide axis for each channel:

![Axis hiding demonstration](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Z2JsTKPQxUMAAAAAAAAAAAAAemJ7AQ/original)

> Hide x axis:

```js
({
  axis: { x: false }, // Hide x horizontal axis
});
```

> Hide y axis:

```js
({
  axis: { y: false }, // Hide y vertical axis
});
```

> Hide multiple axis

```js
({
  axis: false,
});
```

## Configuration Options

Each axis consists of title, line, tick, label, grid, and breaks.

| Property | Description                      | Type                                               | Default Value                | Required |
| -------- | -------------------------------- | -------------------------------------------------- | ---------------------------- | -------- |
| title    | Set axis title text and style    | [title](#title)                                    | -                            |          |
| line     | Set axis line display and style  | [line](#line)                                      | -                            |          |
| tick     | Set axis tick display and style  | [tick](#tick)                                      | -                            |          |
| label    | Set axis label display and style | [label](#label)                                    | -                            |          |
| grid     | Set axis grid display and style  | [grid](#grid)                                      | -                            |          |
| breaks     | Set axis breaks display and style | [breaks](#breaks)   | -   |      |
| animate  | Set axis animation effects       | `boolean` &#124; [animate](#animate)               | -                            |
| position | Set axis position                | `left` &#124; `right` &#124; `top` &#124; `bottom` | `x: bottom` &#124; `y: left` |          |

:::warning{title=Note}
Title, line, tick, label, and grid configurations are at the same level, not configured as objects, but through prefix + property approach.
:::

For example, to configure label rotation, it's not configured under a label object, but through the following approach:

```js
({
  axis: {
    x: {
      title: 'X Axis Title',
      labelFontSize: 12,
      labelFormatter: (d) => `2025-${d}`,
      transform: [
        // Rotation
        {
          type: 'rotate',
          optionalAngles: [0, 45, 90], // Try rotating 0°, 45°, 90°
          recoverWhenFailed: true, // Recover to default angle if rotation fails
        },
      ],
    },
  },
});
```

### title

| Property           | Description                                                              | Type                                                                                                                         | Default Value | Required |
| ------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| title              | Turn off title or set title content                                      | `false`&#124;`string` &#124; `number` &#124; [DisplayObject](https://g.antv.antgroup.com/api/basic/display-object)           | -             |          |
| titleSpacing       | Distance from title to axis                                              | `number` &#124; `(datum, index, data) => number`                                                                             | 10            |          |
| titlePosition      | Title position relative to axis                                          | `'top'`&#124;`'bottom'`&#124;`'left'`&#124;`'right'`                                                                         | `'lb'`        |          |
| titleFontSize      | Title font size                                                          | `number` &#124; `(datum, index, data) => number`                                                                             | -             |          |
| titleFontWeight    | Title font weight                                                        | `number` &#124; `(datum, index, data) => number`                                                                             | -             |          |
| titleFontFamily    | Title font family                                                        | `string` &#124; `(datum, index, data) => string`                                                                             | -             |          |
| titleFill          | Title text fill color                                                    | `string` &#124; `(datum, index, data) => string`                                                                             | -             |          |
| titleOpacity       | Title text overall opacity                                               | `number` &#124; `(datum, index, data) => number`                                                                             | 1             |          |

### line

| Property          | Description                                                                                                                 | Type                                                                  | Default Value | Required |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------- | -------- |
| line              | Whether to show axis line                                                                                                   | `boolean`                                                             | false         |          |
| arrow             | Whether to show arrow                                                                                                       | `boolean`                                                             | true          |          |
| lineLineWidth     | Axis line stroke width                                                                                                      | `number` &#124; `(datum, index, data) => number`                      | -             |          |
| lineStroke        | Axis line stroke color                                                                                                      | `string` &#124; `(datum, index, data) => string`                      | -             |          |
| lineOpacity       | Axis line overall opacity                                                                                                   | `number` &#124; `(datum, index, data) => number`                      | 1             |          |

### tick

| Property          | Description                                                                                                            | Type                                                                                                                        | Default Value | Required |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| tick              | Whether to show ticks                                                                                                  | `boolean`                                                                                                                   | true          |          |
| tickCount         | Set recommended number of ticks to generate                                                                            | `number`                                                                                                                    | -             |          |
| tickLength        | Tick length                                                                                                            | `number`&#124;`(datum, index, data)=>number`                                                                                | 15            |          |
| tickStroke        | Tick stroke color                                                                                                      | `string` &#124; `(datum, index, data, Vector)=>string`                                                                      | -             |          |

### label

| Property           | Description                                                                                                                                                                                                   | Type                                                                                                                       | Default Value | Required |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| label              | Whether to show tick labels                                                                                                                                                                                   | `boolean`                                                                                                                  | -             |          |
| labelFontSize      | Label font size                                                                                                                                                                                               | `number` &#124; `(datum, index, data)=>number`                                                                             | -             |          |
| labelFormatter     | Label formatting, accepts function or [d3-format](https://d3js.org/d3-format) supported string                                                                                                                | `string` \| `(datum, index, array) => string`                                                                              | -             |          |
| labelAlign         | Label alignment: 'horizontal', 'parallel', 'perpendicular'                                                                                                                                                    | `'horizontal'` &#124; `'parallel'` &#124; `'perpendicular'`                                                                | `parallel`    |          |
| labelFill          | Label text fill color                                                                                                                                                                                         | `string` &#124; `(datum, index, data)=>string`                                                                             | -             |          |

### grid

| Property          | Description                                                                                                                 | Type                                                              | Default Value | Required |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------- | -------- |
| grid              | Whether to show grid lines                                                                                                  | `boolean`                                                         | false         |          |
| gridStroke        | Grid line stroke color                                                                                                      | `string` &#124; `(datum, index, data)=> string`                   | -             |          |
| gridLineWidth     | Grid line stroke width                                                                                                      | `number` &#124; `(datum, index, data)=> number`                   | -             |          |
| gridLineDash      | Grid line stroke dash configuration                                                                                         | `[number,number]` &#124; `(datum, index, data)=> [number,number]` | -             |          |

### breaks

Configure axis breaks for discontinuous data ranges.

```js
{
  breaks: [
    {
      start: 5000,
      end: 50000,
      gap: '3%',
    }
  ]
}
```

### animate

| Property | Description          | Type                            | Default Value | Required |
| -------- | -------------------- | ------------------------------- | ------------- | -------- |
| animate  | Whether to enable animation | `boolean` &#124; `EffectTiming` | -             |          |

## Example

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Demo = () => {
  const config = {
    marginTop: 40,
    data: [
      { id: 1, label: 'X Axis Label 1', value: 200 },
      { id: 2, label: 'X Axis Label 2', value: 300 },
      { id: 3, label: 'X Axis Label 3', value: 400 },
      { id: 4, label: 'X Axis Label 4', value: 500 },
      { id: 5, label: 'X Axis Label 5', value: 600 },
      { id: 6, label: 'X Axis Label 6', value: 700 },
    ],
    xField: 'label',
    yField: 'value',
    axis: {
      x: {
        position: 'bottom',
        title: 'X Axis Title',
        titleFontWeight: 500,
        grid: true,
        gridLineWidth: 2,
        line: true,
        lineLineWidth: 5,
        lineStroke: '#f50',
        tick: true,
        tickLineWidth: 5,
        tickLength: 10,
        tickStroke: '#3366ff',
        label: true,
        labelFontSize: 12,
        labelFill: '#009900',
        labelFontWeight: 500,
      },
      y: {
        position: 'left',
        title: 'Y Axis Title',
        titleFontWeight: 500,
        grid: true,
        gridLineWidth: 2,
        line: true,
        lineLineWidth: 5,
        lineStroke: '#f50',
        tick: true,
        tickLineWidth: 5,
        tickLength: 10,
        tickStroke: '#3366ff',
        label: true,
        labelFontSize: 12,
        labelFill: '#009900',
        labelFontWeight: 500,
      },
    }
  };
  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

For more examples, see the [Chart Examples - Axis](/examples/component/axis/#axis-x) page.
