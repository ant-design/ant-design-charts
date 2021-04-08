---
title: Common configuration
order: 3
nav:
  title: Docs
  order: 1
---

## Common Props

| Configuration items | describe | type | default |
| --- | --- | --- | --- |
| onReady | Chart load callback | (plot)=> void | - |
| onEvent | Bind events | (chart, event)=> void | - |
| loading | Load state, used when asynchronously fetching data | boolean | false |
| loadingTemplate | Custom Loading component | React.ReactElement | - |
| errorTemplate | Template rendered when the chart load error occurs | (e: Error) => React.ReactNode | - |
| className | The chart container class | string | - |
| style | The chart container style | React.CSSProperties | - |
| chartRef | Chart instance | (React.MutableRefObject&lt;Chart&gt;)=> void | - |

## Event

### Event Types

In Ant Design Charts (inherited G2 events), we divide events into several event types:

#### 1. Basic Events

> It mainly contains basic events of DOM.

- **mouse event**
  - mousedown
  - mousemove
  - mouseup
  - mouseover
  - mouseout
  - mouseenter
  - mouseleave
- **touch event (for mobile)**
  - touchstart
  - touchmove
  - touchend
  - touchcancel
- **drag event**
  - dragenter
  - dragover
  - dragleave
  - drop
- **contextmenu event**
- **dblclick event**

#### 2. Composite Events

In `Basic Events`, as long as these events are triggered in the canvas, they will be executed, but in most scenarios, we need to accurately locate the click of an element, such as:

- When the column of the column plot is clicked
- When a certain item of the legend is hovered
- When the axis label is dblclicked
- and so on...

In this case, we can use the composite event of G2. The composite event rule of G2 is: `component name: basic event name`, namely:

```sign
${componentName}:${eventName}
```

For example, corresponding to the above scenarios, the event name is:

- element:click
- legend-item:mouseover
- axis-label:dblclick
- and so on...

> Among the built-in components of Ant Design Charts(G2), the classification of componentName is very detailed, which can be roughly explained with the following figure.

<!-- 截图来自于 https://riddle.alibaba-inc.com/riddles/e899cd72 -->

![event](https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*ZFbySLuhjPsAAAAAAAAAAAAAARQnAQ)

It can be roughly divided into:

- plot
- axis
  - axis-line
  - axis-label
- legend
  - legend-item
- label
- slider
- element
  - interval
  - line
  - area
  - point
  - polygon
  - schema
  - path
  - ...

Then combine these component names and basic event names into a permutation and composite, that is, Ant Design Charts(G2) built-in events.

### Event Listener

On Plot(onReady return plot), binding events are removed by `ON` and `OFF` method.

```ts
// Bind event
plot.on('eventName', callback);
// Bind event, only trigger one time
plot.once('eventName', callback);
// Remove event
plot.off('eventName', callback);
```

Composition: `${componentName}:${eventName}`

Element refers to the type of element to bind to, for example `element`、`legend-item`、`axis-label`、`mask`、`plot`、`legend-item-name`、`reset-button` etc.

Events correspond to DOM common events, for example `click`、`mousedown`、`mouseup`、`dblclick`、`mouseenter`、`mouseout`、`mouseover`、`mousemove`、`mouseleave`、`contextmenu` etc. And support mobile events: `touchstart`、`touchmove`、`touchend`

```ts
// Plot adds click events to the entire chart area
plot.on('plot:click', (...args) => {
  console.log(...args);
});

// Element to add a click event, element represents the graphic elements, graphical elements, please see: https://g2.antv.vision/en/docs/manual/concepts/element
plot.on('element:click', (...args) => {
  console.log(...args);
});

// Legend adds click events
plot.on('legend-item:click', (...args) => {
  console.log(...args);
});

// Legend name adds click event
plot.on('legend-item-name:click', (...args) => {
  console.log(...args);
});

// 给 tooltip 添加点击事件
plot.on('tooltip:show', (...args) => {
  console.log(...args);
});

plot.on('tooltip:hide', (...args) => {
  console.log(...args);
});

plot.on('tooltip:change', (...args) => {
  console.log(...args);
});

// Label adds click events
plot.on('label:click', (...args) => {
  console.log(...args);
});

// Mask adds click events
plot.on('mask:click', (...args) => {
  console.log(...args);
});

// Axis-label adds click events
plot.on('axis-label:click', (...args) => {
  console.log(...args);
});

// Add click events to the annotation
plot.on('annotation:click', (...args) => {
  console.log(...args);
});
```

## Meta Configuration

Pass in a configuration with field name key, _MetaOption_ as value, and set meta information for multiple fields at the same time.

```sign
{
  meta: {
    [field: string]: MetaOption
  }
}
```

Example:

```ts
{
  meta: {
    sale: {
      min: 0,
      max: 100,
    },
  }
}
```

_MetaOption_ The configuration is as follows:

### MetaOption.type

<description> _string_ **optional**</description>

Declare the measurement type:

| Measure type | Description |
| --- | --- |
| Classification measurement | - cat: Classification measurement <br /> - timeCat: Time classification measurement |
| Continuous measurement | - linear: Linear measurement <br /> - time：Continuous time measurement <br /> - log: Log measurement <br /> - pow: Pow measurement<br /> - quantize：Segmentation measurement, where users can specify non-uniform segments <br /> - quantile: Equal measurement, according to the distribution of data automatically calculate segmentation <br /> |
| Constant measurement | - identity: Constant measurement |

### MetaOption.alias

<description> _string_ **optional**</description>

Data field display alias, scale is not internal awareness, external injection.

### MetaOption.values

<description> _any[]_ **optional**</description>

Input field, definition field.

### MetaOption.formatter

<description> _(v: any, k?: number) => any_ **optional**</description>

The tick formatting function affects the display of data on Axis, Legend, and Tooltip.

### MetaOption.range

<description> _[number, number]_ **optional** _default:_ `[0, 1]`</description>

Output field and value field represent the range available for drawing within the drawing range.

### MetaOption.sync

<description> _boolean | string_ **optional**</description>

```ts
{
  meta: {
    {
      x: { sync: true },
      y: { sync: true },
      x1: { sync: 'x1' },
      x2: { sync: 'x1' },
    }
  }
}
```

Synchronous scale. sync: `boolean` is sync: \[key\], The above case `x: { sync: true }` is equivalent to `x: { sync: 'x' }`，`y: { sync: true }` is equivalent to `y: { sync: 'y' }`，Therefore, with the above configuration, the measurement operation will be synchronized for fields X and Y and fields X1 and X2 respectively.

### MetaOption.min

<description> _any_ **optional**</description>

Domain minimum value, d3 is the domain, ggplot2 is the limits, not valid under type.

### MetaOption.max

<description> _any_ **optional**</description>

The maximum value of the domain. Invalid under type.

### MetaOption.minLimit

<description> _any_ **optional**</description>

The smallest value of the domain in strict mode. Set to force ticks to start at the smallest.

### MetaOption.maxLimit

<description> _any_ **optional**</description>

The maximum value of the domain in strict mode, which forces the ticks to end at the maximum.

### MetaOption.base

<description> _number_ **optional**</description>

Log is valid. Base.

### MetaOption.exponent

<description> _number_ **optional**</description>

Pow valid, exponent.

### MetaOption.nice

<description> _boolean_ **optional**</description>

Automatically adjust min and Max.

### MetaOption.ticks

<description> _any[]_ **optional**</description>

Use to specify tick, with the highest priority.

### MetaOption.tickInterval

<description> _number_ **optional**</description>

Tick interval, only for type and time type, takes precedence over tickCount.

### MetaOption.minTickInterval

<description> _number_ **optional**</description>

The tick interval is minimal and applies only to linear.

### MetaOption.tickCount

<description> _number_ **optional** _default:_ `5`</description>

The number of tick.

### MetaOption.maxTickCount

<description> _number_ **optional** _default:_ `10`</description>

Ticks maximum.

### MetaOption.tickMethod

<description> _string | TickMethod_ **optional**</description>

Algorithms for calculating ticks.

### MetaOption.showLast

<description> _boolean_ **optional**</description>

Only applies to scale of type: 'time', forcing the last date tick to be displayed.

### MetaOption.mask

<description> _string_ **optional**</description>

Time measures Time and is valid when TIMECAT. The underlying use [fecha] (https://github.com/taylorhakes/fecha#formatting-tokens) for the date format, so for the mask strings can directly refer to their wording.

## Interaction

Interaction is an important API in G2, and it is a way to load G2's built-in interactions or custom Interaction interactions based on the Interaction syntax form. G2 4.0 has made a big change in terms of interaction. All interaction code is intrusive and is organized through interaction syntax. The way to use the interaction is also very simple, you just need to set the name of the interaction.

In Ant Design Charts, G2's interaction syntax is passed through, as well as some built-in interactions with specific plot bindings.

Usage:

```ts
// Enable the Active interaction when the mouse moves over a chart element (bar in a bar, dot in a dot, etc.)
interactions: [{ type: 'element-active' }];

// Enable multiple interactions
interactions: [{ type: 'element-active' }, { type: 'brush' }];
```

#### Remove the interaction

```ts
plot.chart.removeInteraction('interaction-type');
```

Usage:

```ts
// Removes legend filtering interaction
plot.chart.removeInteraction('legend-filter');
```

#### More

More instructions about interaction, see [G2 document] (/guide/common#interaction)

The list of built-in supported interactions and interactions with specific plot bindings will be added later.
