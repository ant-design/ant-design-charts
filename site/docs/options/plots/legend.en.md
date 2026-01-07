---
title: Legend
order: 3
---

## Overview

In Ant Design Charts, the **Legend** is an auxiliary element of the chart that uses color, size, and shape to distinguish different data types and is used for data filtering in charts. It can be understood as the visualization of scales corresponding to non-spatial channels (`color`, `opacity`, `size`, `shape`). Ant Design Charts automatically generates different legends based on the set graphic attribute mappings and data types. When a variable corresponds to multiple graphic attributes, Ant Design Charts merges the legends to achieve simplification.

The four non-spatial channels `color`, `opacity`, `size`, and `shape` automatically generate different legends when they receive parameters that are determined to be fields from the data source:

| Visual Channel | Description                                |
| -------------- | ------------------------------------------ |
| color          | Generate legend based on different colors  |
| opacity        | Generate legend based on different opacity |
| size           | Generate legend based on different sizes   |
| shape          | Generate legend based on different shapes  |

### Components

<img alt="legend-overview" width=900 src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*lGLWS4QUPscAAAAAAAAAAAAAemJ7AQ/original"/>

### Usage

There are two ways to configure legends:

First, pass a `boolean` to set whether to display the legend.

```js
({
  legend: false, // Hide all legends
})
```

```js
({
  legend: {color: false}, // Hide the legend for the color channel
})
```

Second, pass _legendOption_ to configure the legend as a whole.

```js
({
  legend: {
    color: {},
    size: {},
  },
});
```

### Configuration Levels

The legend can be configured at the mark level. In Ant Design Charts, each mark has its own legend. If the scale corresponding to the mark is synchronized, the legends will be merged.

## Hide Legend

Hide the legend of each channel:

```js
({
  legend: { color: false }, // Hide the legend of the color channel
});
```

Hide multiple legends:

```js
({
  legend: false,
});
```

## Configuration Options

Legends in Ant Design Charts are divided into **continuous legends** and **categorical legends**. Due to the different structures of these two types of legends, their configuration options also differ.

Some configuration options are scoped to categorical legends and continuous legends:
<Badge type="success">Categorical Legend</Badge>
<Badge type="warning">Continuous Legend</Badge>

### Layout

<description> _LegendLayoutCfg_ **optional** </description>

Legend component supports adjusting its position on the canvas through the `layout` property. Legend layout uses the **Flexbox layout model**, where `position` determines the legend's basic position on the canvas, and `layout` further controls the precise alignment within the legend.

#### Concept of Layout Axes

The key to understanding legend layout is mastering the concepts of **main axis** and **cross axis**:

| **position** | **Default flexDirection** | **Main Axis Direction** | **Cross Axis Direction** | **Main Axis Meaning**   | **Cross Axis Meaning** |
| ------------ | ------------------------- | ----------------------- | ------------------------ | ----------------------- | ---------------------- |
| `top`        | `row`                     | Horizontal →            | Vertical ↓               | Legend items left-right | Legend area top-bottom |
| `bottom`     | `row`                     | Horizontal →            | Vertical ↑               | Legend items left-right | Legend area top-bottom |
| `left`       | `column`                  | Vertical ↓              | Horizontal →             | Legend items top-bottom | Legend area left-right |
| `right`      | `column`                  | Vertical ↓              | Horizontal ←             | Legend items top-bottom | Legend area left-right |

#### Configuration Properties

_LegendLayoutCfg_ configuration:

| Property       | Description         | Type                                   | Default Value                                                 | Affects | Required |
| -------------- | ------------------- | -------------------------------------- | ------------------------------------------------------------- | ------- | -------- |
| justifyContent | Main axis align     | `flex-start` \| `flex-end` \| `center` | `flex-start`                                                  | Main    |          |
| alignItems     | Cross axis align    | `flex-start` \| `flex-end` \| `center` | `flex-start`                                                  | Cross   |          |
| flexDirection  | Main axis direction | `row` \| `column`                      | `row` when position is `top` and `bottom`, `column` otherwise | -       |          |

#### position + layout Combination Configuration

Through the combination of `position` and `layout`, precise positioning of legends can be achieved:

```js
// 1. Top center legend
({
  legend: {
    color: {
      position: 'top', // Legend at top
      layout: {
        justifyContent: 'center', // Main axis (horizontal) center
      },
    },
  },
});

// 2. Right vertical center legend
({
  legend: {
    color: {
      position: 'right', // Legend at right
      layout: {
        justifyContent: 'center', // Main axis (vertical) center
      },
    },
  },
});

// 3. Bottom right-aligned legend
({
  legend: {
    color: {
      position: 'bottom', // Legend at bottom
      layout: {
        justifyContent: 'flex-end', // Main axis (horizontal) right-align
      },
    },
  },
});

// 4. Left bottom-aligned legend
({
  legend: {
    color: {
      position: 'left', // Legend at left
      layout: {
        justifyContent: 'flex-end', // Main axis (vertical) bottom-align
      },
    },
  },
});
```

#### Common Layout Scenarios

Here are some common legend layout requirements and their configuration methods:

```js
// 🎯 Scenario 1: Top center display, suitable for dashboards
({
  legend: {
    color: {
      position: 'top',
      layout: {
        justifyContent: 'center', // Horizontal center
      },
    },
  },
});

// 🎯 Scenario 2: Right vertical center, suitable for detailed charts
({
  legend: {
    color: {
      position: 'right',
      layout: {
        justifyContent: 'center', // Vertical center
      },
    },
  },
});

// 🎯 Scenario 3: Bottom left-aligned, space-saving
({
  legend: {
    color: {
      position: 'bottom',
      layout: {
        justifyContent: 'flex-start', // Left-aligned
      },
    },
  },
});

// 🎯 Scenario 4: Right top-aligned, compact layout
({
  legend: {
    color: {
      position: 'right',
      layout: {
        justifyContent: 'flex-start', // Top-aligned
      },
    },
  },
});

// 🎯 Scenario 5: Left bottom-aligned, aligned with chart bottom
({
  legend: {
    color: {
      position: 'left',
      layout: {
        justifyContent: 'flex-end', // Bottom-aligned
      },
    },
  },
});
```

💡 **Layout Tips**

- **Horizontal center**: `position: 'top'` + `justifyContent: 'center'`
- **Vertical center**: `position: 'right'` + `justifyContent: 'center'`
- **Compact layout**: Use `flex-start` to keep legend close to chart

### Size and Length

<description> _number_ **optional** </description>

**size**: Legend component size, used for Ant Design Charts internal layout calculation and space allocation. Affects the component size on the **cross axis**:
- For horizontal layout legends (`position: 'top'` or `'bottom'`), controls the legend height
- For vertical layout legends (`position: 'left'` or `'right'`), controls the legend width

**length**: Legend component length, used for Ant Design Charts internal layout calculation and space allocation. Affects the component size on the **main axis**:
- For horizontal layout legends (`position: 'top'` or `'bottom'`), controls the legend width
- For vertical layout legends (`position: 'left'` or `'right'`), controls the legend height

Manual configuration will cause Ant Design Charts internal calculation logic to fail, requiring you to configure margin, padding, inset, etc. yourself. See [Chart Layout](/options/plots/core/chart/chart-component#图表布局). Not recommended for configuration unless customization scenarios are needed.

### maxRows and maxCols

<description> _number_ **optional** </description>

**maxRows** (default: `3`): Applicable to <Badge type="success">Categorical Legend</Badge>. Specifies maximum number of rows for legend.

⚠️ **Note**: This configuration only takes effect in **horizontal layout** (`position: 'top'` or `'bottom'`). When legend position is `'left'` or `'right'`, Ant Design Charts automatically calculates the number of rows based on container height, and `maxRows` configuration will be ignored.

**maxCols** (default: `3`): Applicable to <Badge type="success">Categorical Legend</Badge>. Specifies maximum number of columns for legend.

⚠️ **Note**: This configuration only takes effect in **vertical layout** (`position: 'left'` or `'right'`). When legend position is `'top'` or `'bottom'`, Ant Design Charts automatically calculates the number of columns based on container width, and `maxCols` configuration will be ignored.

💡 **How do maxRows and maxCols affect legend layout?**

maxRows and maxCols are used to limit the maximum number of rows and columns in legend layout, but they have different effects under different layout directions:

| **Parameter** | **Horizontal Layout (top/bottom)**              | **Vertical Layout (left/right)**                 |
| ------------- | ----------------------------------------------- | ------------------------------------------------ |
| **maxRows**   | ✅ Limits rows, controls legend height          | ❌ **No effect**, rows auto-calculated by height |
| **maxCols**   | ❌ **No effect**, columns auto-calculated by width | ✅ Limits columns, controls legend width         |

⚠️ **Note**: When using `maxRows` and `maxCols`, avoid manually configuring legend container's `size` and `length`.

More detailed configuration options are available in the comprehensive API documentation. The configuration includes properties for:

- Position and orientation
- Item markers, labels, and values
- Pagination (nav)
- Continuous legend ribbons, handles, and indicators
- And many more styling options

For complete API reference, please refer to the main documentation.
