

## title: Events&#xA;order: 6

### Event Types

In G2Plot (inherited G2 events), we divide events into several event types:

#### 1. Basic Events

> It mainly contains basic events of DOM.

*   **mouse event**
    *   mousedown
    *   mousemove
    *   mouseup
    *   mouseover
    *   mouseout
    *   mouseenter
    *   mouseleave
*   **touch event (for mobile)**
    *   touchstart
    *   touchmove
    *   touchend
    *   touchcancel
*   **drag event**
    *   dragenter
    *   dragover
    *   dragleave
    *   drop
*   **contextmenu event**
*   **dblclick event**

#### 2. Composite Events

In `Basic Events`, as long as these events are triggered in the canvas, they will be executed, but in most scenarios, we need to accurately locate the click of an element, such as:

*   When the column of the column plot is clicked
*   When a certain item of the legend is hovered
*   When the axis label is dblclicked
*   and so on...

In this case, we can use the composite event of G2. The composite event rule of G2 is: `component name: basic event name`, namely:

```sign
${componentName}:${eventName}
```

For example, corresponding to the above scenarios, the event name is:

*   element:click
*   legend-item:mouseover
*   axis-label:dblclick
*   and so on...

> Among the built-in components of G2Plot(G2), the classification of componentName is very detailed, which can be roughly explained with the following figure.

<!-- 截图来自于 https://riddle.alibaba-inc.com/riddles/e899cd72 -->

![event](https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A\*ZFbySLuhjPsAAAAAAAAAAAAAARQnAQ)

It can be roughly divided into:

*   plot
*   axis
    *   axis-line
    *   axis-label
*   legend
    *   legend-item
*   label
*   slider
*   element
    *   interval
    *   line
    *   area
    *   point
    *   polygon
    *   schema
    *   path
    *   ...

Then combine these component names and basic event names into a permutation and composite, that is, G2Plot(G2) built-in events.

### Event Listener

On Plot, binding events are removed by `ON` and `OFF` method.

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
