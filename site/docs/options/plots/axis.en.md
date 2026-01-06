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
