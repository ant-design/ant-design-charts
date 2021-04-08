---
title: 通用配置
order: 3
nav:
  title: 使用文档
  order: 1
---

## 通用配置

| 配置项 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onReady | 图表加载回调 | (plot)=> void | - |
| onEvent | 图表事件绑定 | (chart, event)=> void | - |
| loading | 是否显示加载状态，异步获取数据时使用 | boolean | false |
| loadingTemplate | 自定义 loading 组件 | React.ReactElement | - |
| errorTemplate | 图表加载出错时呈现的模板 | (e: Error) => React.ReactNode | - |
| className | 图表容器 class | string | - |
| style | 图表容器 style | React.CSSProperties | - |
| chartRef | 图表实例引用 | (React.MutableRefObject&lt;Chart&gt;)=> void | - |

## 事件

### 事件类别

在 Ant Design Charts 中(继承 G2 事件)，我们将事件分成为几种事件类型：

#### 1. 基础事件

> 主要包含有 DOM 的基础事件。

- **mouse 事件**
  - mousedown
  - mousemove
  - mouseup
  - mouseover
  - mouseout
  - mouseenter
  - mouseleave
- **touch 事件 (移动端事件)**
  - touchstart
  - touchmove
  - touchend
  - touchcancel
- **drag 事件**
  - dragenter
  - dragover
  - dragleave
  - drop
- **contextmenu 右键事件**
- **dblclick 双击事件**

#### 2. 组合事件

`基础事件`中，只要画布中触发这些事件，都会执行，但是大部分场景下，我们需要精确定位到某一个元素的点击，比如：

- 柱形图的柱子被 click 的时候
- 图例的某一项被 hover 的时候
- 坐标轴的标签被 dblclick 的时候
- ...

这种情况我们就可以使用 G2 的组合事件，G2 的组合事件规则为：`组件名:基础事件名`，即：

```sign
${componentName}:${eventName}
```

例如对应上述的几个场景，事件名称为：

- element:click
- legend-item:mouseover
- axis-label:dblclick
- ...

> Ant Design Charts (G2) 内置的组件中，componentName 的分类很细，可以以下面的一个图进行大概说明。

<!-- 截图来自于 https://riddle.alibaba-inc.com/riddles/e899cd72 -->

![event](https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*ZFbySLuhjPsAAAAAAAAAAAAAARQnAQ)

也就是大致可以分成为：

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

然后将这些组件名称和基础事件名进行一个排列组合，即为 Ant Design Charts(G2) 内置的事件。

### 事件监听

在 Plot(onReady 会返回 plot) 上通过 `on` 绑定事件、`off` 移除绑定事件。

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

## Meta

通过 `meta` 可以全局化配置图表数据元信息，以字段为单位进行配置。在 `meta` 上的配置将同时影响所有组件的文本信息。

传入以字段名为 key，_MetaOption_ 为 value 的配置，同时设置多个字段的元信息。

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

_MetaOption_ 配置如下：

### MetaOption.type

<description> _string_ **optional**</description>

声明度量类型：

| 度量类型 | 描述 |
| --- | --- |
| 分类度量 | - cat: 分类度量 <br /> - timeCat: 时间分类度量 |
| 连续度量 | - linear: 线性度量 <br /> - time：连续的时间度量 <br /> - log: log 度量 <br /> - pow: pow 度量 <br /> - quantize：分段度量，用户可以指定不均匀的分段 <br /> - quantile: 等分度量，根据数据的分布自动计算分段 <br /> |
| 常量度量 | - identity: 常量度量 |

### MetaOption.alias

<description> _string_ **optional**</description>

数据字段的显示别名，scale 内部不感知，外部注入。

### MetaOption.values

<description> _any[]_ **optional**</description>

输入域、定义域。

### MetaOption.formatter

<description> _(v: any, k?: number) => any_ **optional**</description>

tick 格式化函数，会影响数据在坐标轴 axis、图例 legend、tooltip 上的显示。

### MetaOption.range

<description> _[number, number]_ **optional** _default:_ `[0, 1]`</description>

输出域、值域，表示在绘图范围内可用于绘制的范围。

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

同步 scale。sync: `boolean` 即为 sync: \[key\]，如上例中 `x: { sync: true }` 等同于 `x: { sync: 'x' }`，`y: { sync: true }` 等同于 `y: { sync: 'y' }`，所以，通过以上配置，会分别对 x 和 y 两个字段，x1 和 x2 两个字段进行同步度量操作。

### MetaOption.min

<description> _any_ **optional**</description>

定义域的最小值，d3 为 domain，ggplot2 为 limits，分类型下无效。

### MetaOption.max

<description> _any_ **optional**</description>

定义域的最大值，分类型下无效。

### MetaOption.minLimit

<description> _any_ **optional**</description>

严格模式下的定义域最小值，设置后会强制 ticks 从最小值开始。

### MetaOption.maxLimit

<description> _any_ **optional**</description>

严格模式下的定义域最大值，设置后会强制 ticks 以最大值结束。

### MetaOption.base

<description> _number_ **optional**</description>

log 有效，底数。

### MetaOption.exponent

<description> _number_ **optional**</description>

pow 有效，指数。

### MetaOption.nice

<description> _boolean_ **optional**</description>

自动调整 min、max 。

### MetaOption.ticks

<description> _any[]_ **optional**</description>

用于指定 tick，优先级最高。

### MetaOption.tickInterval

<description> _number_ **optional**</description>

tick 间隔，只对分类型和时间型适用，优先级高于 tickCount。

### MetaOption.minTickInterval

<description> _number_ **optional**</description>

tick 最小间隔，只对 linear 适用。

### MetaOption.tickCount

<description> _number_ **optional** _default:_ `5`</description>

tick 个数。

### MetaOption.maxTickCount

<description> _number_ **optional** _default:_ `10`</description>

ticks 最大值。

### MetaOption.tickMethod

<description> _string | TickMethod_ **optional**</description>

计算 ticks 的算法。

### MetaOption.showLast

<description> _boolean_ **optional**</description>

只对 type: 'time' 的 scale 生效，强制显示最后的日期 tick。

### MetaOption.mask

<description> _string_ **optional**</description>

时间度量 time, timeCat 时有效。底层使用 [fecha](https://github.com/taylorhakes/fecha#formatting-tokens) 进行日期的格式，所以对于 mask 的字符串可以直接参考其写法。

## Interaction

交互（Interaction）是 G2 中的重要 API，通过这个方法可以加载 G2 内置的交互，或者基于交互语法形式自定义的 Interaction 交互。G2 4.0 在交互方面做了非常大的调整，所有的交互代码都是插入式的，通过交互语法进行组织。使用交互的方式也非常简单，仅需要设置交互的名称即可。

在 Ant Design Charts 中，透传了 G2 的交互语法，同时也内置了一些与具体 plot 绑定的交互。

使用方式：

```ts
// 开启「鼠标移入图表元素（柱状图的柱子、点图的点等）时触发 active」的交互
interactions: [{ type: 'element-active' }];

// 开启多个交互
interactions: [{ type: 'element-active' }, { type: 'brush' }];
```

#### 移除交互

```ts
// 方式1: 关闭 tooltip 交互
interactions: [{ type: 'tooltip', enable: false }];

// 方式2:
plot.chart.removeInteraction('interaction-type');
```

使用示例：

```ts
// 移除 图例筛选 交互
plot.chart.removeInteraction('legend-filter');
```

#### 更多

更多关于交互的使用说明，见 [G2 文档](https://g2.antv.vision/zh/docs/api/general/interaction)

后续会补充内置支持的交互列表以及与具体 plot 绑定的交互，敬请期待。
