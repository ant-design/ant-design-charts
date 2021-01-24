<<<<<<< HEAD
### Plot Container
=======
### 图表容器
>>>>>>> master

#### width

<description>**optional** _number_ _default:_ `400`</description>

<<<<<<< HEAD
Set the width of the chart.
=======
设置图表宽度。
>>>>>>> master

#### height

<description>**optional** _number_ _default:_ `400`</description>

<<<<<<< HEAD
Set the height of the chart.
=======
设置图表高度。
>>>>>>> master

#### autoFit

<description>**optional** _boolean_ _default:_ `true`</description>

<<<<<<< HEAD
Whether the chart automatically adjusts to fit the container. If it is set to `true`, `width` and `height` configuration would fail.
=======
图表是否自适应容器宽高。当 `autoFit` 设置为 true 时，`width` 和 `height` 的设置将失效。
>>>>>>> master

#### padding

<description>**optional** _number\[] | number | 'auto'_</description>

<<<<<<< HEAD
Set `padding` value of the canvas. You can also use `auto`.
=======
画布的 `padding` 值，代表图表在上右下左的间距，可以为单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向，或者开启 `auto`，由底层自动计算间距。
>>>>>>> master

#### appendPadding

<description>**optional** _number\[] | number_</description>

<<<<<<< HEAD
Extra `appendPadding` value.
=======
额外增加的 `appendPadding` 值，在 `padding` 的基础上，设置额外的 padding 数值，可以是单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向。
>>>>>>> master

#### renderer

<description>**optional** _string_ _default:_ `canvas`</description>

<<<<<<< HEAD
Set the render way to `canvas` or `svg`.
=======
设置图表渲染方式为 `canvas` 或 `svg`。
>>>>>>> master

#### pixelRatio

<description>**optional** _number_ _default:_ `window.devicePixelRatio`</description>

<<<<<<< HEAD
Set the pixel ratio of the chart.
=======
设置图表渲染的像素比，和底层的 devicePixelRatio 含义一致，一般不用设置，除非在页面有整体 scale 的情况下，可以自定义。
>>>>>>> master

#### limitInPlot

<description>**optional** _boolean_</description>

<<<<<<< HEAD
Whether clip the Geometry beyond the coordinate system。

### Data Mapping
=======
是否对超出坐标系范围的 Geometry 进行剪切。

### 数据映射
>>>>>>> master

#### data

<description>**required** _Record\<string: array | string>_</description>

<<<<<<< HEAD
Configure the chart data source. The data source of the matrix tree graph is an object with a tree structure, as follows
=======
设置图表数据源。矩阵树图数据源为一个树状结构的对象，如下
>>>>>>> master

```javascript
const data = {
  name: 'root',
  children: [
    { name: '分类 1', value: 560 },
    { name: '分类 2', value: 500 },
  ],
};
```

<<<<<<< HEAD
Each level of data needs to have three attributes

- name
- value (A leaf node)
- children (Non-leaf node)

In the nested rectangular tree diagram, the layout is determined by the value value of the leaf node.
=======
其中，每一层级的数据都需要具备三个属性

- name
- value (叶子节点)
- children (非叶子节点)

嵌套矩形树图中，布局由叶子节点的 value 值决定。
>>>>>>> master

#### colorField

<description>**optional** _string_</description>

<<<<<<< HEAD
Color mapping field name.

### Geometry Style
=======
颜色映射字段名。

### 图形样式
>>>>>>> master

#### color

<description>**optional** _string | string\[] | Function_</description>

<<<<<<< HEAD
Configure the color. If there is no colorField configured, set one single color. Otherwise you can set a series of colors, or you can use callback function.

Default: The color board of the theme.

```ts
// set one single color
{
  color: '#a8ddb5'
}
// set a series of colors
{
  colorField: 'type', // or seriesField in some cases
=======
指定点的颜色。如没有配置 colorField，指定一个单值即可。对 colorFiled 进行了配置的情况下，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。

默认配置：采用 theme 中的色板。

```ts
// 设置单一颜色
{
  color: '#a8ddb5'
}
// 设置多色
{
  colorField: 'type', // 部分图表使用 seriesField
>>>>>>> master
  color: ['#d62728', '#2ca02c', '#000000'],
}
// Function
{
<<<<<<< HEAD
  colorField: 'type', // or seriesField in some cases
=======
  colorField: 'type', // 部分图表使用 seriesField
>>>>>>> master
  color: ({ type }) => {
    if(type === 'male'){
      return 'red';
    }
    return 'yellow';
  }
}
```

#### rectStyle

<description>**optional** _object_</description>

<<<<<<< HEAD
Rectangular graphic styles. The 'fill' in rectStyle overrides the 'color' configuration. RectStyle can be specified either directly or via a callback to specify a separate style based on the data.

Default configuration:

| Properties    | Type   | Description           |
| ------------- | ------ | --------------------- |
| fill          | string | Fill color            |
| stroke        | string | Stroke color          |
| lineWidth     | number | Line width            |
| lineDash      | number | The dotted lines show |
| opacity       | number | Transparency          |
| fillOpacity   | number | Fill transparency     |
| strokeOpacity | number | Stroke transparency   |

```ts
// Config
=======
矩形图形样式。rectStyle 中的`fill`会覆盖 `color` 的配置。rectStyle 可以直接指定，也可以通过 callback 的方式，根据数据指定单独的样式。

默认配置：

| 细分配置      | 类型   | 功能描述   |
| ------------- | ------ | ---------- |
| fill          | string | 填充颜色   |
| stroke        | string | 描边颜色   |
| lineWidth     | number | 线宽       |
| lineDash      | number | 虚线显示   |
| opacity       | number | 透明度     |
| fillOpacity   | number | 填充透明度 |
| strokeOpacity | number | 描边透明度 |

```ts
// 直接指定
>>>>>>> master
{
  rectStyle: {
    fill: 'red',
  },
}
// Function
{
  rectStyle: (data) => {
    if (data.value > 10) {
      return {
        fill: 'green',
      }
    }
    return {
      fill: 'red',
    }
  }
}
```

#### hierarchyConfig

<description>**optional** _object_</description>

<<<<<<< HEAD
Hierarchical layout configuration, such as' tile ', etc., refer to detailed configuration [d3-hierarchy](https://github.com/d3/d3-hierarchy#treemap)。 The default is `{tile: 'treemapResquarify'}`

### Plot Components
=======
层级布局配置，例如 `tile`等，详细配置参考[d3-hierarchy](https://github.com/d3/d3-hierarchy#treemap)。默认为 `{tile: 'treemapResquarify'}`

### 图表组件
>>>>>>> master

#### tooltip

##### fields

<description>**optional** _string\[]_</description>

<<<<<<< HEAD
Specifies the fields to be displayed in the Tooltip. By default, different charts have different default field lists. Use with the 'formatter' configuration for more effect.
=======
指定 tooltip 中显示的字段，默认不同图表有不同的默认字段列表。配合 `formatter` 配置一起使用，效果更加。
>>>>>>> master

```ts
tooltip: {
  fields: ['x', 'y'],
}
```

##### formatter

<description>**optional** _Function_</description>

<<<<<<< HEAD
Formats the contents of the Tooltip Item.
=======
格式化 tooltip item 内容。
>>>>>>> master

```ts
tooltip: {
  formatter: (datum: Datum) => {
    return { name: datum.x, value: datum.y + '% };
  },
}
```

##### follow

<description>**optional** _boolean_ _default:_ `true`</description>

<<<<<<< HEAD
Sets whether the Tooltip content box follows the mouse.
=======
设置 tooltip 内容框是否跟随鼠标移动。
>>>>>>> master

##### enterable

<description>**optional** _boolean_ _default:_ `false`</description>

<<<<<<< HEAD
Whether the tooltip allows mouse to slide in.
=======
tooltip 是否允许鼠标滑入。
>>>>>>> master

##### showTitle

<description>**optional** _boolean_ _default:_ `false`</description>

<<<<<<< HEAD
Whether show tooltip title.
=======
是否展示 tooltip 标题。
>>>>>>> master

##### title

<description>**optional** _string_</description>

<<<<<<< HEAD
Set the title content of the Tooltip: If the value is the name of the data field, the value for the field in the data is displayed, and if the field does not exist in the data, the title value is displayed directly.
=======
设置 tooltip 的标题内容：如果值为数据字段名，则会展示数据中对应该字段的数值，如果数据中不存在该字段，则直接展示 title 值。
>>>>>>> master

##### position

<description>**optional** _`top` | `bottom` | `left` | `right`_</description>

<<<<<<< HEAD
Sets the fixed display location of the Tooltip relative to the data point.
=======
设置 tooltip 的固定展示位置，相对于数据点。
>>>>>>> master

##### shared

<description>**optional** _boolean_</description>

<<<<<<< HEAD
True means that all data corresponding to the current point is merged and displayed, while false means that only the data content closest to the current point is displayed.
=======
true 表示合并当前点对应的所有数据并展示，false 表示只展示离当前点最逼近的数据内容。
>>>>>>> master

##### showCrosshairs

<description>**optional** _boolean_ _default:_ `false`</description>

<<<<<<< HEAD
Whether show crosshairs。
=======
是否展示 crosshairs。
>>>>>>> master

##### crosshairs

<description>**optional** _object_</description>

<<<<<<< HEAD
Configure tooltip crosshairs to work if and only if 'showCrosshairs' is true.

| Properties | Type | Description |
| --- | --- | --- | --- | --- |
| type | \_`x` | `y` | `xy`\_ | Crosshairs Type: 'X' represents the auxiliary line on the X axis, 'Y' on the Y axis |
| line | _lineStyle_ | The configuration item for line |
| text | _textStyle_ | Guideline text configuration, support callback |
| textBackground | _textBackgroundStyle_ | Guideline text background configuration |
| follow | _boolean_ | Whether the guide line follows the mouse. Default is false, that is, to locate the data point |

**_lineStyle_**

<!--line style-->

| Properties | Type | Description |
| --- | --- | --- |
| stroke | _string_ | color of the line |
| lineWidth | _number_ | width of the line |
| lineDash | \[number,number] | configure dashed line, the first parameter is the length of each segment, the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| opacity | _number_ | opacity |
| shadowColor | _string_ | shadow color |
| shadowBlur | _number_ | Gaussian blur coefficient |
| shadowOffsetX | _number_ | configure horizontal distance between shadow and line |
| shadowOffsetY | _number_ | configure vertical distance between shadow and line |
| cursor | _string_ | mouse style, same as the mouse style of CSS, default value : 'default' |

Example：
=======
配置 tooltip 的 crosshairs，当且仅当 `showCrosshairs` 为 true 时生效。

| 细分配置项名称 | 类型                  | 功能描述                                             |
| -------------- | --------------------- | ---------------------------------------------------- | ------ | ------------------------------------------------------------------- |
| type           | \*`x`                 | `y`                                                  | `xy`\* | crosshairs 的类型: `x` 表示 x 轴上的辅助线，`y` 表示 y 轴上的辅助项 |
| line           | _lineStyle_           | 线的配置项                                           |
| text           | _textStyle_           | 辅助线文本配置，支持回调                             |
| textBackground | _textBackgroundStyle_ | 辅助线文本背景配置                                   |
| follow         | _boolean_             | 辅助线是否跟随鼠标移动，默认为 false，即定位到数据点 |

**_lineStyle_**

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | _string_ | 线的颜色 |
| lineWidth | _number_ | 线宽 |
| lineDash | \[number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| opacity | _number_ | 透明度 |
| shadowColor | _string_ | 阴影颜色 |
| shadowBlur | _number_ | 高斯模糊系数 |
| shadowOffsetX | _number_ | 设置阴影距图形的水平距离 |
| shadowOffsetY | _number_ | 设置阴影距图形的垂直距离 |
| cursor | _string_ | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

示例代码：
>>>>>>> master

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

<<<<<<< HEAD
| Properties | Type | Description |
| --- | --- | --- | --- | --- | --- | --- |
| fontSize | _number_ | Font size |
| fontFamily | _string_ | Font family |
| fontWeight | _number_ | Font weight |
| lineHeight | _number_ | Line height |
| textAlign | _string_ | Text align, supported `center` | `end` | `left` | `right` | `start`, default `start` |
| fill | _string_ | Fill color for text |
| fillOpacity | _number_ | Fill transparency for text |
| stroke | _string_ | Stroke text |
| lineWidth | _number_ | The width of the text stroke |
| lineDash | \[number,number] | For the dashed line configuration of the stroke, the first value is the length of each segment of the dashed line, and the second value is the distance between segments. LineDash sets \[0,0] to no stroke. |
| lineOpacity | _number_ | Stroke transparency |
| opacity | _number_ | Overall transparency of the text |
| shadowColor | _string_ | Shadow color |
| shadowBlur | _number_ | Shadow blur |
| shadowOffsetX | _number_ | Sets the horizontal distance between the shadow and the text |
| shadowOffsetY | _number_ | Sets the vertical distance between the shadow and the text |
| cursor | _string_ | Mouse style. With CSS mouse styles, default 'default'. |

Example code, using label.style configuration:
=======
| 属性名 | 类型 | 介绍 |
| --- | --- | --- | --- | --- | --- | --- |
| fontSize | _number_ | 文字大小 |
| fontFamily | _string_ | 文字字体 |
| fontWeight | _number_ | 字体粗细 |
| lineHeight | _number_ | 文字的行高 |
| textAlign | _string_ | 设置文本内容的当前对齐方式, 支持的属性：`center` | `end` | `left` | `right` | `start`，默认值为`start` |
| fill | _string_ | 文字的填充色 |
| fillOpacity | _number_ | 文字的填充透明度 |
| stroke | _string_ | 文字的描边 |
| lineWidth | _number_ | 文字描边的宽度 |
| lineDash | \[number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| lineOpacity | _number_ | 描边透明度 |
| opacity | _number_ | 文字的整体透明度 |
| shadowColor | _string_ | 文字阴影颜色 |
| shadowBlur | _number_ | 文字阴影的高斯模糊系数 |
| shadowOffsetX | _number_ | 设置阴影距文字的水平距离 |
| shadowOffsetY | _number_ | 设置阴影距文字的垂直距离 |
| cursor | _string_ | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

示例代码，以 label.style 配置为例：
>>>>>>> master

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

<<<<<<< HEAD
| Properties | Type         | Description                     |
| ---------- | ------------ | ------------------------------- | ------------------------------------------- |
| padding    | \*number     | number\[]\*                     | White space around the background of a text |
| style      | _shapeStyle_ | The configuration item for line |

**_shapeStyle_**

<!--shape style-->

| Properties | Type | Description |
| --- | --- | --- |
| fill | _string_ | Fill color of the shape |
| fillOpacity | _number_ | Fill opacity of the shape |
| stroke | _string_ | Stroke color of the shape |
| lineWidth | _number_ | The width of the stroke of the shape |
| lineDash | \[number,number] | Configure dashed line stroke. The first parameter is the length of each segment, and the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| lineOpacity | _number_ | Opacity of the stroke |
| opacity | _number_ | Opacity of the shape |
| shadowColor | _string_ | Shadow color of the shape |
| strokeOpacity | _number_ | Stroke opacity of the shape |
| shadowBlur | _number_ | Gaussian blur coefficient of the shadow |
| shadowOffsetX | _number_ | Configure horizontal distance between shadow and shape |
| shadowOffsetY | _number_ | Configure vertical distance between shadow and shape |
| cursor | _string_ | Mouse style, same as the mouse style of CSS, default value : 'default' |

Example：
=======
| 细分配置项名称 | 类型         | 功能描述    |
| -------------- | ------------ | ----------- | ------------------ |
| padding        | \*number     | number\[]\* | 文本背景周围的留白 |
| style          | _shapeStyle_ | 线的配置项  |

**_shapeStyle_**

<!--图形样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| fill | _string_ | 图形的填充色 |
| fillOpacity | _number_ | 图形的填充透明度 |
| stroke | _string_ | 图形的描边 |
| lineWidth | _number_ | 图形描边的宽度 |
| lineDash | \[number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| lineOpacity | _number_ | 描边透明度 |
| opacity | _number_ | 图形的整体透明度 |
| shadowColor | _string_ | 图形阴影颜色 |
| strokeOpacity | _number_ | 图形边框透明度 |
| shadowBlur | _number_ | 图形阴影的高斯模糊系数 |
| shadowOffsetX | _number_ | 设置阴影距图形的水平距离 |
| shadowOffsetY | _number_ | 设置阴影距图形的垂直距离 |
| cursor | _string_ | 鼠标样式。同 css 的鼠标样式，默认 'default'。 |

示例代码：
>>>>>>> master

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

<<<<<<< HEAD
More documents about `ShapeStyle`, see [Graphic Style](/guide/graphic-style).
=======
关于 ShapeStyle 更加详细的文档参考 [绘图属性](/zh/docs/api/graphic-style)。
>>>>>>> master

##### showMarkers

<description>**optional** _boolean_ _default:_ `true`</description>

<<<<<<< HEAD
Whether to render TooltipMarkers.
=======
是否渲染 tooltipMarkers。
>>>>>>> master

##### marker

<description>**optional** _object_</description>

<<<<<<< HEAD
TooltipMarker style configuration.
=======
tooltipMarker 的样式配置。
>>>>>>> master

##### showContent

<description>**optional** _boolean_ _default:_ `false`</description>

<<<<<<< HEAD
Whether to display the Tooltip content box.
=======
是否展示 tooltip 内容框。
>>>>>>> master

##### container

<description>**optional** _string|HTMLElement_</description>

<<<<<<< HEAD
Custom tooltip container.
=======
自定义 tooltip 的容器。
>>>>>>> master

##### containerTpl

<description>**optional** _string_</description>

<<<<<<< HEAD
Templates used to specify the legend container must include the classes of each DOM node when customizing the template
=======
用于指定图例容器的模板，自定义模板时必须包含各个 dom 节点的 class。
>>>>>>> master

##### itemTpl

<description>**optional** _string_</description>

<<<<<<< HEAD
The default template for each record, which must include the classes of each DOM node when customizing the template.
=======
每项记录的默认模板，自定义模板时必须包含各个 dom 节点的 class。
>>>>>>> master

##### domStyles

<description>**optional** _TooltipDomStyles_</description>

<<<<<<< HEAD
The styles for each DOM.

```ts
/** Tooltip content box css style */
{
  domStyles: {
    'g2-tooltip'?: CSSProperties;
    'g2-tooltip-title'?: CSSProperties;
    'g2-tooltip-list'?: CSSProperties;
    'g2-tooltip-list-item'?: CSSProperties;
    'g2-tooltip-marker'?: CSSProperties;
    'g2-tooltip-value'?: CSSProperties;
    'g2-tooltip-name'?: CSSProperties;
=======
传入各个 dom 的样式。

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
>>>>>>> master
  }
}
```

##### offset

<description>**optional** _number_</description>

<<<<<<< HEAD
Tooltip offset.
=======
tooltip 偏移量。
>>>>>>> master

##### customContent

<description>**optional** _Function_</description>

<<<<<<< HEAD
Support for custom templates.
=======
支持自定义模板。
>>>>>>> master

```ts
{
  tooltip: {
    customContent: (title, data) => {
      return `<div>${title}</div>`;
    };
  }
}
```

#### annotations

<<<<<<< HEAD
Annotations are array types and can be set multiple times.
=======
标注是数组类型，可以设置多个。
>>>>>>> master

```ts
annotations: [
  {
    type: 'text',
    position: ['median', 'median'],
    content: '辅助文本',
    style: {
      fill: 'red',
    },
  },
];
```

##### type

<description>**required** _string_ </description>

<<<<<<< HEAD
Type of annotation, text | line | image | region | dataMarker | dataRegion | regionFilter | shape | html.
=======
标注类型, text | line | image | region | dataMarker | dataRegion | regionFilter | shape | html.
>>>>>>> master

##### position

<description>**required** _object_ </description>

<<<<<<< HEAD
The position of annotation.

- In the first case, object uses the raw data corresponding to graphs x and y. For example: { time: '2010-01-01', value: 200 };
- The second way is to configure the position \[x, y] in an array. Based on the presence of the values in the array, the following forms are used: 1、Corresponding to the original data in the data source; 2、Key words: 'min', 'Max', 'median', 'median', 'start' and 'end' respectively represent the maximum value, minimum value, median value of data and the start and end of coordinate system interval; 3、X, y are percentages, such as 30%, located in the drawing area (that is, in the coordinate system). The 1 and 2 types of data can be used interchangeably, but when using the percentage form, x and y must both be in the percentage form.
- The third, callback function, can dynamically determine the position of the auxiliary element, applied to dynamic data update, the position of the auxiliary element changes according to the data.
=======
标注位置。

- 第一种，object 使用图表 x, y 对应的原始数据例如：{ time: '2010-01-01', value: 200 };
- 第二种，数组来配置位置 \[ x, y ]，根据数组中的值的存在以下几种形式： 1、对应数据源中的原始数据； 2、关键字：'min'、'max'、'median'、'start'、'end' 分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束； 3、x, y 都是百分比的形式，如 30%，在绘图区域定位(即坐标系内)。 1 和 2 两种类型的数据可以混用，但是使用百分比形式时 x 和 y 必须都是百分比形式。
- 第三种，回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景。
>>>>>>> master

##### top

<description>**optional** _boolean_ _default:_ `false`</description>

<<<<<<< HEAD
If it is drawn at the top of the canvas, the default is false, meaning it is drawn at the bottom.
=======
是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。
>>>>>>> master

##### animate

<description>**optional** _boolean_ </description>

<<<<<<< HEAD
Whether to enable animation.
=======
是否进行动画。
>>>>>>> master

##### offsetX

<description>**optional** _number_ </description>

<<<<<<< HEAD
The offset in the x direction.
=======
x 方向的偏移量。
>>>>>>> master

##### offsetY

<description>**optional** _number_ </description>

<<<<<<< HEAD
The offset in the y direction.
=======
y 方向的偏移量。
>>>>>>> master

##### start

<description>**optional** _Array_ </description>

<<<<<<< HEAD
Starting position, commonly used for line, region, etc.
=======
起始位置，一般用于 line、region 等。
>>>>>>> master

##### end

<description>**optional** _Array_ </description>

<<<<<<< HEAD
End position, commonly used for line, region, etc.
=======
结束位置，一般用于 line、region 等。
>>>>>>> master

```ts
{
  type: 'line',
  start: ['min', 'median'],
  end: ['max', 'median'],
},
```

##### style

<description>**optional** _object_ </description>

<<<<<<< HEAD
The graph style properties refer to the Graphic Style.
=======
图形样式属性，参考绘图属性。
>>>>>>> master

##### src

<description>**optional** _string_ </description>

<<<<<<< HEAD
Image path, used in image.
=======
图片路径，用于 image 中。
>>>>>>> master

##### content

<description>**optional** _string_ </description>

<<<<<<< HEAD
Text content, used in text.
=======
文本内容，用于 text 中。
>>>>>>> master

##### rotate

<description>**optional** _number_ </description>

<<<<<<< HEAD
The rotation Angle of text in radians.
=======
文本的旋转角度，弧度制。
>>>>>>> master

##### maxLength

<description>**optional** _number_ </description>

<<<<<<< HEAD
The maximum length of a text.
=======
文文本的最大长度。
>>>>>>> master

##### autoEllipsis

<description>**optional** _boolean_ </description>

<<<<<<< HEAD
Whether the maxLength beyond is automatically omitted.
=======
超出 maxLength 是否自动省略。
>>>>>>> master

##### ellipsisPosition

<description>**optional** \_head | middle | tail \_ </description>

<<<<<<< HEAD
The location of the text truncation.
=======
文本截断的位置。
>>>>>>> master

##### isVertical

<description>**optional** _boolean_ </description>

<<<<<<< HEAD
The display position of the text in a two-dimensional coordinate system, whether it is displayed along the X axis or along the Y axis.
=======
文本在二维坐标系的显示位置，是沿着 x 轴显示 还是沿着 y 轴显示。
>>>>>>> master

##### background

<description>**optional** _object_ </description>

<<<<<<< HEAD
Text wrap box style Settings.

| Properties | Type | Default | Description |
| --- | --- | --- | --- | --- |
| style | _object_ | - | Text background style, reference[Graphic Style](/guide/graphic-style) |
| padding | \*number | number\[]\* | - | White space around the background of a text |
=======
文字包围盒样式设置。

| 参数名  | 类型     | 默认值      | 描述                                                       |
| ------- | -------- | ----------- | ---------------------------------------------------------- | ------------------ |
| style   | _object_ | -           | 文本背景的样式, 参考[绘图属性](/en/docs/api/graphic-style) |
| padding | \*number | number\[]\* | -                                                          | 文本背景周围的留白 |
>>>>>>> master

##### color

<description>**optional** _string_ </description>

<<<<<<< HEAD
Color value, usually used in RegionFilter.
=======
染色色值，一般用于 regionFilter。
>>>>>>> master

##### apply

<description>**optional** _string\[]_ </description>

<<<<<<< HEAD
RegionFilter is set to work only on a specific Geometry type, such as Apply: \['area'], which is generally used with RegionFilter.
=======
设定 regionFilter 只对特定 geometry 类型起作用，如 apply: \['area']，一般用于 regionFilter。
>>>>>>> master

##### autoAdjust

<description>**optional** _boolean_ </description>

<<<<<<< HEAD
Whether to automatically adjust text orientation when text exceeds the drawn area.
=======
文本超出绘制区域时，是否自动调节文本方向。
>>>>>>> master

##### direction

<description>**optional** _upward | downward_ </description>

<<<<<<< HEAD
Orientation.
=======
朝向。
>>>>>>> master

##### lineLength

<description>**optional** _number_ </description>

<<<<<<< HEAD
Line length for dataRegion.
=======
line 长度，用于 dataRegion。
>>>>>>> master

##### render

<description>**optional** _string_ </description>

<<<<<<< HEAD
Render function of custom marking, other container is the parent container of marking drawing, view is the graphic instance, helpers is the auxiliary function, other parserPosition can be used to calculate the coordinate position corresponding to data points, used in shape.
=======
自定义标记的绘制 render 函数，其他 container 为标记绘制的父容器, view 为图形实例, helpers 为辅助函数，其他 parserPosition 可以用来计算数据点对应的坐标位置，用于 shape。
>>>>>>> master

##### container

<description>**optional** _string | HTMLElement_ </description>

<<<<<<< HEAD
Container elements for custom HTML graphical tags for HTML
=======
自定义 HTML 图形标记的容器元素，用于 html
>>>>>>> master

##### container

<description>**optional** _string | HTMLElement_ </description>

<<<<<<< HEAD
Custom graphical markup of HTML elements, either as HTML DOM strings, or HTML elements, or HTML callback functions, for HTML
=======
自定义的图形标记的 HTML 元素，可为 HTML DOM 字符串，或 HTML 元素，或 html 回调函数，用于 html
>>>>>>> master

##### alignX

<description>**optional** _left' | 'middle' | 'right'_ </description>

<<<<<<< HEAD
Alignment of DOM elements in the X direction for HTML
=======
DOM 元素在 X 方向的对齐方式，用于 html
>>>>>>> master

##### alignY

<description>**optional** _left' | 'middle' | 'right'_ </description>

<<<<<<< HEAD
Alignment of DOM elements in the Y direction for HTML

### Plot Theme

#### Theme

Built-in defaults: 'default' and 'dark'
=======
DOM 元素在 Y 方向的对齐方式，用于 html

### 图表主题

#### 内置主题

目前默认的内置主要要两套：`default` 和 `dark`
>>>>>>> master

```ts
{
  theme: 'default', // 'dark',
}
```

<<<<<<< HEAD
#### Theme attributes

In addition to using the built-in 'default' and 'dark' themes, you can also modify some of the theme content by setting the theme properties.

The following table lists the specific properties on the configuration items that make up the topic:

| Properties | Type | Description |
| --- | --- | --- |
| defaultColor | _string_ | Theme color |
| padding | _number_ | number\[] |
| fontFamily | _string_ | Chart font |
| colors10 | _string\[]_ | Category color palette, used when the number of categories is less than 10 |
| colors20 | _string\[]_ | Category color palette, used when the number of categories is greater than 10 |
| columnWidthRatio | _number_ | General histogram width ratio, 0-1 range of values |
| maxColumnWidth | _number_ | Maximum width of histogram, pixel value |
| minColumnWidth | _number_ | Minimum width of histogram, pixel value |
| roseWidthRatio | _number_ | Rose width ratio, 0-1 range of value |
| multiplePieWidthRatio | number | Multilayer pie and loop ratio, 0-1 range values |
| geometries | _object_ | Configure the style of each shape for each Geometry, including the default style and the style for each state |
| components | _object_ | Configure theme samples for axes, legends, tooltips, and annotations |
| labels | _object_ | Configure the theme style of the label under Geometry |
| innerLabels | _object_ | Configure Geometry to display the Labels theme style inside the graph |
| pieLabels | _object_ | Configure the theme style of pie chart labels |

usage:
=======
#### 主题属性

除了使用内置的 `default` 和 `dark` 主题之外，还可以通过设置主题属性来修改部分主题内容：

下表列出了组成主题的大配置项上的具体属性：

| 主题属性 | 类型 | 描述 |
| --- | --- | --- |
| defaultColor | _string_ | 主题色 |
| padding | _number_ | number\[] |
| fontFamily | _string_ | 图表字体 |
| colors10 | _string\[]_ | 分类颜色色板，分类个数小于 10 时使用 |
| colors20 | _string\[]_ | 分类颜色色板，分类个数大于 10 时使用 |
| columnWidthRatio | _number_ | 一般柱状图宽度占比，0 - 1 范围数值 |
| maxColumnWidth | _number_ | 柱状图最大宽度，像素值 |
| minColumnWidth | _number_ | 柱状图最小宽度，像素值 |
| roseWidthRatio | _number_ | 玫瑰图占比，0 - 1 范围数值 |
| multiplePieWidthRatio | number | 多层饼图/环图占比，0 - 1 范围数值 |
| geometries | _object_ | 配置每个 Geometry 下每个 shape 的样式，包括默认样式以及各个状态下的样式 |
| components | _object_ | 配置坐标轴，图例，tooltip, annotation 的主题样式 |
| labels | _object_ | 配置 Geometry 下 label 的主题样式 |
| innerLabels | _object_ | 配置 Geometry 下展示在图形内部的 labels 的主题样式 |
| pieLabels | _object_ | 配置饼图 labels 的主题样式 |

使用方式：
>>>>>>> master

```ts
{
  theme: {
    colors10: [
      '#FF6B3B',
      '#626681',
      '#FFC100',
      '#9FB40F',
      '#76523B',
      '#DAD5B5',
      '#0E8E89',
      '#E19348',
      '#F383A2',
      '#247FEA',
    ];
  }
}
```

<<<<<<< HEAD
#### Update theme

usage：

```ts
// example 1:
plot.update({ theme: 'dark' });

// example 2:
plot.update({ theme: { defaultColor: '#FF6B3B' } });
```

#### Custom theme

In addition, G2 provides a custom topic mechanism to define a new topic structure, allowing users to switch and define chart topics.
=======
#### 更新主题

使用方式：

```ts
// 示例1:
plot.update({ theme: 'dark' });

// 示例2:
plot.update({ theme: { defaultColor: '#FF6B3B' } });
```

#### 自定义注册主题

另外，还可以通过 G2 提供了自定义主题机制来定义全新的主题结构，以允许用户切换、定义图表主题。
>>>>>>> master

```ts
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  G2.registerTheme('new-theme', {
    defaultColor: '#FF6B3B',
    colors10: [
      '#FF6B3B',
      '#626681',
      '#FFC100',
      '#9FB40F',
      '#76523B',
      '#DAD5B5',
      '#0E8E89',
      '#E19348',
      '#F383A2',
      '#247FEA',
    ],
    colors20: [
      '#FF6B3B',
      '#626681',
      '#FFC100',
      '#9FB40F',
      '#76523B',
      '#DAD5B5',
      '#0E8E89',
      '#E19348',
      '#F383A2',
      '#247FEA',
      '#2BCB95',
      '#B1ABF4',
      '#1D42C2',
      '#1D9ED1',
      '#D64BC0',
      '#255634',
      '#8C8C47',
      '#8CDAE5',
      '#8E283B',
      '#791DC9',
    ],
  });
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    theme: 'new-theme',
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

<<<<<<< HEAD
### Event

On Plot, binding events are removed by ON and OFF.

```ts
// Bind event
plot.on('eventName', callback);
// Remove event
=======
### 事件

在 Plot 上通过 on 绑定事件、off 移除绑定事件。

```ts
// 绑定事件
plot.on('eventName', callback);
// 移除事件
>>>>>>> master
plot.off('eventName', callback);
```

#### eventName

<<<<<<< HEAD
Composition: element + ':' + events。

Element refers to the type of element to bind to, for example `element`、`legend-item`、`axis-label`、`mask`、`plot`、`legend-item-name`、`reset-button` etc.

Events correspond to DOM common events, for example `click`、`mousedown`、`mouseup`、`dblclick`、`mouseenter`、`mouseout`、`mouseover`、`mousemove`、`mouseleave`、`contextmenu` etc. And support mobile events: `touchstart`、`touchmove`、`touchend`

```ts
// Plot adds click events to the entire chart area
=======
组成方式：element + ':' + events。

element 指要绑定的元素类型，例如 `element`、`legend-item`、`axis-label`、`mask`、`plot`、`legend-item-name`、`reset-button` 等。

events 对应 DOM 常见事件，例如 `click`、`mousedown`、`mouseup`、`dblclick`、`mouseenter`、`mouseout`、`mouseover`、`mousemove`、`mouseleave`、`contextmenu` 等，同时支持几个移动端事件：`touchstart`、`touchmove`、`touchend`

```ts
// plot 添加点击事件,整个图表区域
>>>>>>> master
plot.on('plot:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Element to add a click event, element represents the graphic elements, graphical elements, please see: https://g2.antv.vision/en/docs/manual/concepts/element
=======
// element 添加点击事件， element 代表图形元素，关于图形元素，请查看：https://g2.antv.vision/zh/docs/manual/concepts/element
>>>>>>> master
plot.on('element:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Legend adds click events
=======
// 图例添加点击事件
>>>>>>> master
plot.on('legend-item:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Legend name adds click event
=======
// 图例名称添加点击事件
>>>>>>> master
plot.on('legend-item-name:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Label adds click events
=======
// label 添加点击事件
>>>>>>> master
plot.on('label:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Mask adds click events
=======
// mask 添加点击事件
>>>>>>> master
plot.on('mask:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Axis-label adds click events
=======
// axis-label 添加点击事件
>>>>>>> master
plot.on('axis-label:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Add click events to the annotation
=======
// 给 annotation 添加点击事件
>>>>>>> master
plot.on('annotation:click', (...args) => {
  console.log(...args);
});
```

<<<<<<< HEAD
### Plot Method

#### render()

Render the chart.

#### update()

<description>**optional** </description>

Update chart configuration and overwrite it without comparing difference.

Example：
=======
### 图表方法

#### render()

渲染图表。

#### update()

更新图表配置项，配置覆盖，不会做差异比对。

使用示例：
>>>>>>> master

```ts
plot.update({
  ...currentConfig,
  legend: false,
});
```

<<<<<<< HEAD
<!--
#### changeData()
=======
<!-- #### changeData()
>>>>>>> master

<description>**optional** </description>

更新图表数据。`update()`方法会导致图形区域销毁并重建，如果只进行数据更新，而不涉及其他配置项更新，推荐使用本方法。。

<<<<<<< HEAD
Default configuration:`无`
=======
默认配置：`无`
>>>>>>> master

使用示例：

```ts
plot.changeData(newData);
``` -->

<<<<<<< HEAD
### Plot Events

On Plot, binding events are removed by ON and OFF.

```ts
// Bind event
plot.on('eventName', callback);
// Remove event
=======
### 图表事件

在 Plot 上通过 on 绑定事件、off 移除绑定事件。

```ts
// 绑定事件
plot.on('eventName', callback);
// 移除事件
>>>>>>> master
plot.off('eventName', callback);
```

#### eventName

<<<<<<< HEAD
Composition: element + ':' + events。

Element refers to the type of element to bind to, for example `element`、`legend-item`、`axis-label`、`mask`、`plot`、`legend-item-name`、`reset-button` etc.

Events correspond to DOM common events, for example `click`、`mousedown`、`mouseup`、`dblclick`、`mouseenter`、`mouseout`、`mouseover`、`mousemove`、`mouseleave`、`contextmenu` etc. And support mobile events: `touchstart`、`touchmove`、`touchend`

```ts
// Plot adds click events to the entire chart area
=======
组成方式：element + ':' + events。

element 指要绑定的元素类型，例如 `element`、`legend-item`、`axis-label`、`mask`、`plot`、`legend-item-name`、`reset-button` 等。

events 对应 DOM 常见事件，例如 `click`、`mousedown`、`mouseup`、`dblclick`、`mouseenter`、`mouseout`、`mouseover`、`mousemove`、`mouseleave`、`contextmenu` 等，同时支持几个移动端事件：`touchstart`、`touchmove`、`touchend`

```ts
// plot 添加点击事件,整个图表区域
>>>>>>> master
plot.on('plot:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Element to add a click event, element represents the graphic elements, graphical elements, please see: https://g2.antv.vision/en/docs/manual/concepts/element
=======
// element 添加点击事件， element 代表图形元素，关于图形元素，请查看：https://g2.antv.vision/zh/docs/manual/concepts/element
>>>>>>> master
plot.on('element:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Legend adds click events
=======
// 图例添加点击事件
>>>>>>> master
plot.on('legend-item:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Legend name adds click event
=======
// 图例名称添加点击事件
>>>>>>> master
plot.on('legend-item-name:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Label adds click events
=======
// label 添加点击事件
>>>>>>> master
plot.on('label:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Mask adds click events
=======
// mask 添加点击事件
>>>>>>> master
plot.on('mask:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Axis-label adds click events
=======
// axis-label 添加点击事件
>>>>>>> master
plot.on('axis-label:click', (...args) => {
  console.log(...args);
});

<<<<<<< HEAD
// Add click events to the annotation
=======
// 给 annotation 添加点击事件
>>>>>>> master
plot.on('annotation:click', (...args) => {
  console.log(...args);
});
```

<<<<<<< HEAD
### Plot Methods

#### render()

Render the chart.

#### update()

<description>**optional** </description>

Update chart configuration and overwrite it without comparing difference.

Example：
=======
### 图表方法

#### render()

渲染图表。

#### update()

更新图表配置项，配置覆盖，不会做差异比对。

使用示例：
>>>>>>> master

```ts
plot.update({
  ...currentConfig,
  legend: false,
});
```

<<<<<<< HEAD
<!--
#### changeData()
=======
<!-- #### changeData()
>>>>>>> master

<description>**optional** </description>

更新图表数据。`update()`方法会导致图形区域销毁并重建，如果只进行数据更新，而不涉及其他配置项更新，推荐使用本方法。。

<<<<<<< HEAD
Default configuration:`无`
=======
默认配置：`无`
>>>>>>> master

使用示例：

```ts
plot.changeData(newData);
``` -->

<<<<<<< HEAD
### Plot Theme

#### Theme

Built-in defaults: 'default' and 'dark'
=======
### 图表主题

#### 内置主题

目前默认的内置主要要两套：`default` 和 `dark`
>>>>>>> master

```ts
{
  theme: 'default', // 'dark',
}
```

<<<<<<< HEAD
#### Theme attributes

In addition to using the built-in 'default' and 'dark' themes, you can also modify some of the theme content by setting the theme properties.

The following table lists the specific properties on the configuration items that make up the topic:

| Properties | Type | Description |
| --- | --- | --- |
| defaultColor | _string_ | Theme color |
| padding | _number_ | number\[] |
| fontFamily | _string_ | Chart font |
| colors10 | _string\[]_ | Category color palette, used when the number of categories is less than 10 |
| colors20 | _string\[]_ | Category color palette, used when the number of categories is greater than 10 |
| columnWidthRatio | _number_ | General histogram width ratio, 0-1 range of values |
| maxColumnWidth | _number_ | Maximum width of histogram, pixel value |
| minColumnWidth | _number_ | Minimum width of histogram, pixel value |
| roseWidthRatio | _number_ | Rose width ratio, 0-1 range of value |
| multiplePieWidthRatio | number | Multilayer pie and loop ratio, 0-1 range values |
| geometries | _object_ | Configure the style of each shape for each Geometry, including the default style and the style for each state |
| components | _object_ | Configure theme samples for axes, legends, tooltips, and annotations |
| labels | _object_ | Configure the theme style of the label under Geometry |
| innerLabels | _object_ | Configure Geometry to display the Labels theme style inside the graph |
| pieLabels | _object_ | Configure the theme style of pie chart labels |

usage:
=======
#### 主题属性

除了使用内置的 `default` 和 `dark` 主题之外，还可以通过设置主题属性来修改部分主题内容：

下表列出了组成主题的大配置项上的具体属性：

| 主题属性 | 类型 | 描述 |
| --- | --- | --- |
| defaultColor | _string_ | 主题色 |
| padding | _number_ | number\[] |
| fontFamily | _string_ | 图表字体 |
| colors10 | _string\[]_ | 分类颜色色板，分类个数小于 10 时使用 |
| colors20 | _string\[]_ | 分类颜色色板，分类个数大于 10 时使用 |
| columnWidthRatio | _number_ | 一般柱状图宽度占比，0 - 1 范围数值 |
| maxColumnWidth | _number_ | 柱状图最大宽度，像素值 |
| minColumnWidth | _number_ | 柱状图最小宽度，像素值 |
| roseWidthRatio | _number_ | 玫瑰图占比，0 - 1 范围数值 |
| multiplePieWidthRatio | number | 多层饼图/环图占比，0 - 1 范围数值 |
| geometries | _object_ | 配置每个 Geometry 下每个 shape 的样式，包括默认样式以及各个状态下的样式 |
| components | _object_ | 配置坐标轴，图例，tooltip, annotation 的主题样式 |
| labels | _object_ | 配置 Geometry 下 label 的主题样式 |
| innerLabels | _object_ | 配置 Geometry 下展示在图形内部的 labels 的主题样式 |
| pieLabels | _object_ | 配置饼图 labels 的主题样式 |

使用方式：
>>>>>>> master

```ts
{
  theme: {
    colors10: [
      '#FF6B3B',
      '#626681',
      '#FFC100',
      '#9FB40F',
      '#76523B',
      '#DAD5B5',
      '#0E8E89',
      '#E19348',
      '#F383A2',
      '#247FEA',
    ];
  }
}
```

<<<<<<< HEAD
#### Update theme

usage：

```ts
// example 1:
plot.update({ theme: 'dark' });

// example 2:
plot.update({ theme: { defaultColor: '#FF6B3B' } });
```

#### Custom theme

In addition, G2 provides a custom topic mechanism to define a new topic structure, allowing users to switch and define chart topics.
=======
#### 更新主题

使用方式：

```ts
// 示例1:
plot.update({ theme: 'dark' });

// 示例2:
plot.update({ theme: { defaultColor: '#FF6B3B' } });
```

#### 自定义注册主题

另外，还可以通过 G2 提供了自定义主题机制来定义全新的主题结构，以允许用户切换、定义图表主题。
>>>>>>> master

```ts
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  G2.registerTheme('new-theme', {
    defaultColor: '#FF6B3B',
    colors10: [
      '#FF6B3B',
      '#626681',
      '#FFC100',
      '#9FB40F',
      '#76523B',
      '#DAD5B5',
      '#0E8E89',
      '#E19348',
      '#F383A2',
      '#247FEA',
    ],
    colors20: [
      '#FF6B3B',
      '#626681',
      '#FFC100',
      '#9FB40F',
      '#76523B',
      '#DAD5B5',
      '#0E8E89',
      '#E19348',
      '#F383A2',
      '#247FEA',
      '#2BCB95',
      '#B1ABF4',
      '#1D42C2',
      '#1D9ED1',
      '#D64BC0',
      '#255634',
      '#8C8C47',
      '#8CDAE5',
      '#8E283B',
      '#791DC9',
    ],
  });
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    theme: 'new-theme',
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

<<<<<<< HEAD
### Interactions

#### Introduction

Interaction is an important API in G2, and it is a way to load G2's built-in interactions or custom Interaction interactions based on the Interaction syntax form. G2 4.0 has made a big change in terms of interaction. All interaction code is intrusive and is organized through interaction syntax. The way to use the interaction is also very simple, you just need to set the name of the interaction.

In G2Plot, G2's interaction syntax is passed through, as well as some built-in interactions with specific plot bindings.

Usage:

```ts
// Enable the Active interaction when the mouse moves over a chart element (bar in a bar, dot in a dot, etc.)
interactions: [{ type: 'element-active' }];

// Enable multiple interactions
interactions: [{ type: 'element-active' }, { type: 'brush' }];
```

#### Remove the interaction
=======
### 图表交互

#### 介绍

交互（Interaction）是 G2 中的重要 API，通过这个方法可以加载 G2 内置的交互，或者基于交互语法形式自定义的 Interaction 交互。G2 4.0 在交互方面做了非常大的调整，所有的交互代码都是插入式的，通过交互语法进行组织。使用交互的方式也非常简单，仅需要设置交互的名称即可。

在 G2Plot 中，透传了 G2 的交互语法，同时也内置了一些与具体 plot 绑定的交互。

使用方式：

```ts
// 开启「鼠标移入图表元素（柱状图的柱子、点图的点等）时触发 active」的交互
interactions: [{ type: 'element-active' }];

// 开启多个交互
interactions: [{ type: 'element-active' }, { type: 'brush' }];
```

#### 移除交互
>>>>>>> master

```ts
plot.chart.removeInteraction('interaction-type');
```

<<<<<<< HEAD
Usage:

```ts
// Removes legend filtering interaction
plot.chart.removeInteraction('legend-filter');
```

#### More

More instructions about interaction, see \[G2 document] (/guide/common#interaction)

The list of built-in supported interactions and interactions with specific plot bindings will be added later.
=======
使用示例：

```ts
// 移除 图例筛选 交互
plot.chart.removeInteraction('legend-filter');
```

#### 更多

更多关于交互的使用说明，见 [G2 文档](https://g2.antv.vision/zh/docs/api/general/interaction)

后续会补充内置支持的交互列表以及与具体 plot 绑定的交互，敬请期待。
>>>>>>> master
