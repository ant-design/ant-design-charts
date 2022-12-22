---
title: 图表事件
order: 6
---

### 事件类别

在 G2Plot 中(继承 G2 事件)，我们将事件分成为几种事件类型：

#### 1. 基础事件

> 主要包含有 DOM 的基础事件。

*   **mouse 事件**
    *   mousedown
    *   mousemove
    *   mouseup
    *   mouseover
    *   mouseout
    *   mouseenter
    *   mouseleave
*   **touch 事件 (移动端事件)**
    *   touchstart
    *   touchmove
    *   touchend
    *   touchcancel
*   **drag 事件**
    *   dragenter
    *   dragover
    *   dragleave
    *   drop
*   **contextmenu 右键事件**
*   **dblclick 双击事件**

#### 2. 组合事件

`基础事件`中，只要画布中触发这些事件，都会执行，但是大部分场景下，我们需要精确定位到某一个元素的点击，比如：

*   柱形图的柱子被 click 的时候
*   图例的某一项被 hover 的时候
*   坐标轴的标签被 dblclick 的时候
*   ...

这种情况我们就可以使用 G2 的组合事件，G2 的组合事件规则为：`组件名:基础事件名`，即：

```sign
${componentName}:${eventName}
```

例如对应上述的几个场景，事件名称为：

*   element:click
*   legend-item:mouseover
*   axis-label:dblclick
*   ...

> G2Plot(G2) 内置的组件中，componentName 的分类很细，可以以下面的一个图进行大概说明。

<!-- 截图来自于 https://riddle.alibaba-inc.com/riddles/e899cd72 -->

![event](https://gw.alipayobjects.com/mdn/rms\_d314dd/afts/img/A\*ZFbySLuhjPsAAAAAAAAAAAAAARQnAQ)

也就是大致可以分成为：

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

然后将这些组件名称和基础事件名进行一个排列组合，即为 G2Plot(G2) 内置的事件。

### 事件监听

在 Plot 上通过 `on` 绑定事件、`off` 移除绑定事件。

```sign
// 绑定事件
plot.on('eventName', callback);
// 绑定事件，只触发一次
plot.once('eventName', callback);
// 移除事件
plot.off('eventName', callback);
```

组合方式: `${componentName}:${eventName}`

```ts
// plot 添加点击事件,整个图表区域
plot.on('plot:click', (...args) => {
  console.log(...args);
});

// element 添加点击事件， element 代表图形元素，关于图形元素，请查看：https://g2.antv.vision/zh/docs/manual/concepts/element
plot.on('element:click', (...args) => {
  console.log(...args);
});

// 图例添加点击事件
plot.on('legend-item:click', (...args) => {
  console.log(...args);
});

// 图例名称添加点击事件
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

// label 添加点击事件
plot.on('label:click', (...args) => {
  console.log(...args);
});

// mask 添加点击事件
plot.on('mask:click', (...args) => {
  console.log(...args);
});

// axis-label 添加点击事件
plot.on('axis-label:click', (...args) => {
  console.log(...args);
});

// 给 annotation 添加点击事件
plot.on('annotation:click', (...args) => {
  console.log(...args);
});
```
