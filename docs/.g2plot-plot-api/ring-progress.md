## 配置属性

### 图表容器

#### width

<description>**可选** _number_</description>

功能描述：设置图表宽度。

默认配置：`400`

#### height

<description>**可选** _number_</description>

功能描述：设置图表高度。

默认配置：`400`

#### autoFit

<description>**可选** _boolean_</description>

功能描述：图表是否自适应容器宽高。当 `autoFit` 设置为 true 时，`width` 和 `height` 的设置将失效。

默认配置：`true`

#### padding

<description>**可选** _number\[] | number | 'auto'_</description>

功能描述： 画布的 `padding` 值，或者开启 `auto`。

#### appendPadding

<description>**可选** _number\[] | number_</description>

功能描述： 额外增加的 `appendPadding` 值。

#### renderer

<description>**可选** _string_</description>

功能描述: 设置图表渲染方式为 `canvas` 或 `svg`。

默认配置： `canvas`

#### pixelRatio

<description>**可选** _number_</description>

功能描述: 设置图表渲染的像素比。

默认配置： `window.devicePixelRatio`

### 数据映射

#### percent 📌

**必选**, _number_

功能描述： 设置图表数据源

默认配置： 无

### 图形样式

#### radius

**可选**, _number_

功能描述： 外环的半径 。

默认配置： 无

#### innerRadius

**可选**, _number_

功能描述： 内环的半径 。

默认配置： 无

#### progressStyle

**可选**, _StyleAttr | Function_

功能描述： 柱子样式配置 。

默认配置： 无

<!--图形样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| fill | string | 图形的填充色 |
| fillOpacity | number | 图形的填充透明度 |
| stroke | string | 图形的描边 |
| lineWidth | number | 图形描边的宽度 |
| lineDash | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity | number | 描边透明度 |
| opacity | number | 图形的整体透明度 |
| shadowColor | string | 图形阴影颜色 |
| strokeOpacity | number | 图形边框透明度 |
| shadowBlur | number | 图形阴影的高斯模糊系数 |
| shadowOffsetX | number | 设置阴影距图形的水平距离 |
| shadowOffsetY | number | 设置阴影距图形的垂直距离 |
| cursor | string | 鼠标样式。同 css 的鼠标样式，默认 'default'。 |

示例代码：

```ts
{
  style: {
    fill: 'red',
    fillOpacity: 0.5,
    stroke: 'black',
    lineWidth: 1,
    lineDash: [4, 5],
    strokeOpacity: 0.7,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    cursor: 'pointer'
  }
}
```

#### color

**可选**, _string | string\[] | Function_

功能描述： 指定点的颜色。如没有配置 colorField，指定一个单值即可。对 colorFiled 进行了配置的情况下，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。

默认配置：采用 theme 中的色板。

```ts
// 设置单一颜色
{
  color: '#a8ddb5'
}
// 设置多色
{
  colorField: 'type', // 部分图表使用 seriesField
  color: ['#d62728', '#2ca02c', '#000000'],
}
// Function
{
  colorField: 'type', // 部分图表使用 seriesField
  color: (type) => {
    if(type === 'male'){
      return 'red';
    }
    // TODO
    return 'yellow';
  }
}
```

#### statistic

**可选**, _number_

功能描述： 统计内容组件 。

默认配置： 无

| 配置项  | 类型                   | 描述     |
| ------- | ---------------------- | -------- |
| title   | false \| StatisticText | 标题     |
| content | false \| StatisticText | 主体内容 |

StatisticText

| 配置项    | 类型     | 描述                 |
| --------- | -------- | -------------------- |
| style     | object   | 统计文本的样式       |
| formatter | Function | 主体文本的格式化内容 |
| rotate    | number   | 旋转角度             |
| offsetX   | number   | X 偏移值             |
| offsetY   | number   | Y 偏移值             |

### 图表组件

#### tooltip

##### follow

<description>**可选** _boolean_</description>

功能描述：设置 tooltip 内容框是否跟随鼠标移动。

默认配置：`true`

##### enterable

<description>**可选** _boolean_</description>

功能描述：tooltip 是否允许鼠标滑入。

默认配置：`false`

##### showTitle

<description>**可选** _boolean_</description>

功能描述：是否展示 tooltip 标题。

默认配置：`false`

##### title

<description>**可选** _string_</description>

功能描述：设置 tooltip 的标题内容：如果值为数据字段名，则会展示数据中对应该字段的数值，如果数据中不存在该字段，则直接展示 title 值。

默认配置：`无`

##### position

<description>**可选** _`top` \| `bottom` \| `left` \| `right`_</description>

功能描述：设置 tooltip 的固定展示位置，相对于数据点。

默认配置：`无`

##### shared

<description>**可选** _boolean_</description>

功能描述：true 表示合并当前点对应的所有数据并展示，false 表示只展示离当前点最逼近的数据内容。

默认配置：`无`

##### showCrosshairs

<description>**可选** _boolean_</description>

功能描述：是否展示 crosshairs。

默认配置：`false`

##### crosshairs

<description>**可选** _object_</description>

功能描述：配置 tooltip 的 crosshairs，当且仅当 `showCrosshairs` 为 true 时生效。

| 细分配置项名称 | 类型 | 功能描述 |
| --- | --- | --- |
| type | \_`x` \| `y` \| `xy`\_ | crosshairs 的类型: `x` 表示 x 轴上的辅助线，`y` 表示 y 轴上的辅助项 |
| line | _lineStyle_ | 线的配置项 |
| text | _textStyle_ | 辅助线文本配置，支持回调 |
| textBackground | _textBackgroundStyle_ | 辅助线文本背景配置 |
| follow | _boolean_ | 辅助线是否跟随鼠标移动，默认为 false，即定位到数据点 |

**_lineStyle_**

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | string | 线的颜色 |
| lineWidth | number | 线宽 |
| lineDash | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity | number | 透明度 |
| shadowColor | string | 阴影颜色 |
| shadowBlur | number | 高斯模糊系数 |
| shadowOffsetX | number | 设置阴影距图形的水平距离 |
| shadowOffsetY | number | 设置阴影距图形的垂直距离 |
| cursor | string | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

示例代码：

```ts
{
  xAxis: {
    grid: {
      line: {
        style: {
          stroke: 'black',
          lineWidth: 2,
          lineDash: [4, 5],
          strokeOpacity: 0.7,
          shadowColor: 'black',
          shadowBlur: 10,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          cursor: 'pointer'
        }
      }
    }
  }
}
```

\***\*textStyle\*\***

<!--文本样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| fontSize | number | 文字大小 |
| fontFamily | string | 文字字体 |
| fontWeight | number | 字体粗细 |
| lineHeight | number | 文字的行高 |
| textAlign | string | 设置文本内容的当前对齐方式, 支持的属性：`center` \| `end` \| `left` \| `right` \| `start`，默认值为`start` |
| fill | string | 文字的填充色 |
| fillOpacity | number | 文字的填充透明度 |
| stroke | string | 文字的描边 |
| lineWidth | number | 文字描边的宽度 |
| lineDash | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity | number | 描边透明度 |
| opacity | number | 文字的整体透明度 |
| shadowColor | string | 文字阴影颜色 |
| shadowBlur | number | 文字阴影的高斯模糊系数 |
| shadowOffsetX | number | 设置阴影距文字的水平距离 |
| shadowOffsetY | number | 设置阴影距文字的垂直距离 |
| cursor | string | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

示例代码，以 label.style 配置为例：

```ts
{
  label: {
    style:{
      fontSize: 80,
      fontWeight: 300,
      textAlign: 'center',
      textBaseline: 'middle',
      shadowColor: 'white',
      shadowBlur: 10,
    }
  }
}
```

**_textBackgroundStyle_**

| 细分配置项名称 | 类型                | 功能描述           |
| -------------- | ------------------- | ------------------ |
| padding        | number \| number\[] | 文本背景周围的留白 |
| style          | _shapeStyle_        | 线的配置项         |

**_shapeStyle_**

<!--图形样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| fill | string | 图形的填充色 |
| fillOpacity | number | 图形的填充透明度 |
| stroke | string | 图形的描边 |
| lineWidth | number | 图形描边的宽度 |
| lineDash | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity | number | 描边透明度 |
| opacity | number | 图形的整体透明度 |
| shadowColor | string | 图形阴影颜色 |
| strokeOpacity | number | 图形边框透明度 |
| shadowBlur | number | 图形阴影的高斯模糊系数 |
| shadowOffsetX | number | 设置阴影距图形的水平距离 |
| shadowOffsetY | number | 设置阴影距图形的垂直距离 |
| cursor | string | 鼠标样式。同 css 的鼠标样式，默认 'default'。 |

示例代码：

```ts
{
  style: {
    fill: 'red',
    fillOpacity: 0.5,
    stroke: 'black',
    lineWidth: 1,
    lineDash: [4, 5],
    strokeOpacity: 0.7,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
    cursor: 'pointer'
  }
}
```

##### showMarkers

<description>**可选** _boolean_</description>

功能描述：是否渲染 tooltipMarkers。

默认配置：`true`

##### marker

<description>**可选** _object_</description>

功能描述：tooltipMarker 的样式配置。

默认配置：`无`

##### showContent

<description>**可选** _boolean_</description>

功能描述：是否展示 tooltip 内容框。

默认配置：`false`

##### container

<description>**可选** _string|HTMLElement_</description>

功能描述：自定义 tooltip 的容器。

默认配置：`无`

##### containerTpl

<description>**可选** _string_</description>

功能描述：用于指定图例容器的模板，自定义模板时必须包含各个 dom 节点的 class。

默认配置：`无`

##### itemTpl

<description>**可选** _string_</description>

功能描述：每项记录的默认模板，自定义模板时必须包含各个 dom 节点的 class。

默认配置：`无`

##### domStyles

<description>**可选** _TooltipDomStyles_</description>

功能描述：传入各个 dom 的样式。

默认配置： `无`

```ts
/** Tooltip 内容框的 css 样式定义 */
{
  domStyles: {
    'g2-tooltip'?: object;
    'g2-tooltip-title'?: object;
    'g2-tooltip-list'?: object;
    'g2-tooltip-list-item'?: object;
    'g2-tooltip-marker'?: object;
    'g2-tooltip-value'?: object;
    'g2-tooltip-name'?: object;
  }
}
```

##### offset

<description>**可选** _number_</description>

功能描述：tooltip 偏移量。

默认配置：`无`

##### customContent

<description>**可选** _Function_</description>

功能描述：支持自定义模板。

默认配置：`无`

```ts
{
  tooltip: {
    customContent: (title, data) => {
      return `<div>${title}</div>`;
    };
  }
}
```

#### theme

主题支持 `light`、 `dark` 两种模式，当然也可以自己指定， 默认使用 `light`。

```ts
theme: 'dark';
```

### 事件

在 Chart 和 View 上通过 on 绑定事件、off 移除绑定事件。

```ts
// 绑定事件
chart.on('eventName', callback);
// 移除事件
chart.off('eventName', callback);
```

#### eventName

组成方式：element + ':' + es 。

element 指要绑定的元素类型，例如 `element`、`legend-item`、`axis-label`、`mask`、`plot`、`legend-item-name`、`reset-button` 等。

es 对应 DOM 常见事件，例如 `click`、`mousedown`、`mouseup`、`dblclick`、`mouseenter`、`mouseout`、`mouseover`、`mousemove`、`mouseleave`、`contextmenu` 等，同时支持几个移动端事件：`touchstart`、`touchmove`、`touchend`

```ts
// plot添加点击事件,整个图表区域
chart.on('plot:click', (e) => {
  console.log(e);
});

// element 添加点击事件， element 代指 label|point 等
chart.on('element:click', (e) => {
  console.log(e);
});

// 图例添加点击事件
chart.on('legend-item:click', (e) => {
  console.log(e);
});

// 图例名称添加点击事件
chart.on('legend-item-name:click', (e) => {
  console.log(e);
});

// label 添加点击事件
chart.on('label:click', (e) => {
  console.log(e);
});

// mask 添加点击事件
chart.on('mask:click', (e) => {
  console.log(e);
});

// axis-label 添加点击事件
chart.on('axis-label:click', (e) => {
  console.log(e);
});

// 给 annotation 添加点击事件
chart.on('annotation:click', (e) => {
  console.log(e);
});

// 给 slider 添加点击事件
chart.on('slider:valuechanged', (e) => {
  console.log(e);
});
```
