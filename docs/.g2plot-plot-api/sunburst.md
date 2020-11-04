

title: 旭日图

## order: 17

### 图表容器

#### width

<description>**optional** _number_ _default:_ `400`</description>

设置图表宽度。

#### height

<description>**optional** _number_ _default:_ `400`</description>

设置图表高度。

#### autoFit

<description>**optional** _boolean_ _default:_ `true`</description>

图表是否自适应容器宽高。当 `autoFit` 设置为 true 时，`width` 和 `height` 的设置将失效。

#### padding

<description>**optional** _number\[] | number | 'auto'_</description>

画布的 `padding` 值，或者开启 `auto`。

#### appendPadding

<description>**optional** _number\[] | number_</description>

额外增加的 `appendPadding` 值。

#### renderer

<description>**optional** _string_ _default:_ `canvas`</description>

设置图表渲染方式为 `canvas` 或 `svg`。

#### pixelRatio

<description>**optional** _number_ _default:_ `window.devicePixelRatio`</description>

设置图表渲染的像素比。


### 数据映射

#### data

<description>**required** _object_</description>

设置图表数据源。

#### meta

<description>**optional** _object_</description>

全局化配置图表数据元信息，以字段为单位进行配置。在 meta 上的配置将同时影响所有组件的文本信息。

| 细分配置项名称   | 类型          | 功能描述                       |
| --------- | ----------- | -------------------------- |
| alias     | _string_    | 字段的别名                      |
| formatter | _function_  | callback 方法，对该字段所有值进行格式化处理 |
| values    | _string\[]_ | 枚举该字段下所有值                  |
| range     | _number\[]_ | 字段的数据映射区间，默认为[0,1]         |


#### type

<description>**optional** _partition | treemap_ _default:_ `partition`</description>

布局类型，更多类型探索中。

#### seriesField

<description>**optional** _string_</description>

分组字段，即要映射的数值字段。

#### reflect

<description>**optional** _x | y_</description>

径向类型，非特殊情况不建议使用。

#### hierarchyConfig

<description>**optional** _object_</description>

层级布局配置，例如 `size`、`padding` 等，详细配置参考[d3-hierarchy](https://github.com/d3/d3-hierarchy#treemap)。

### 图形样式

#### radius

<description>**optional** _string_ _default:_ `1`</description>

半径，0 ~ 1。

#### innerRadius

<description>**optional** _number_ _default:_ `0`</description>

内径，0 ~ 1。

#### colorField

<description>**optional** _string_</description>

颜色映射字段。

#### color

<description>**optional** _string | string\[] | Function_</description>

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


#### sunburstStyle

<description>**optional** _object_</description>

旭日图形样式。pointStyle 中的`fill`会覆盖 `color` 的配置。sunburstStyle 可以直接指定，也可以通过 callback 的方式，根据数据指定单独的样式。

默认配置：

| 细分配置          | 类型     | 功能描述  |
| ------------- | ------ | ----- |
| fill          | string | 填充颜色  |
| stroke        | string | 描边颜色  |
| lineWidth     | number | 线宽    |
| lineDash      | number | 虚线显示  |
| opacity       | number | 透明度   |
| fillOpacity   | number | 填充透明度 |
| strokeOpacity | number | 描边透明度 |

```ts
// 直接指定
{
  sunburstStyle: {
    fill: 'red',
    stroke: 'yellow',
    opacity: 0.8
  },
}
// Function
{
  sunburstStyle: (value, item) => {
    if (value === 0.5) {
      return {
        fill: 'green',
        stroke: 'yellow',
        opacity: 0.8,
      }
    }
    // TODO
    return {
      fill: 'red',
      stroke: 'yellow',
      opacity: 0.8,
    }
  }
}
```

### 图表组件

#### tooltip

##### fields

<description>**optional** _string\[]_</description>

指定 tooltip 中显示的字段，默认不同图表有不同的默认字段列表。配合 `formatter` 配置一起使用，效果更加。

```ts
tooltip: {
  fields: ['x', 'y'],
}
```

##### formatter

<description>**optional** _Function_</description>

格式化 tooltip item 内容。

```ts
tooltip: {
  formatter: (datum: Datum) => {
    return { name: datum.x, value: datum.y + '% };
  },
}
```

##### follow

<description>**optional** _boolean_ _default:_ `true`</description>

设置 tooltip 内容框是否跟随鼠标移动。

##### enterable

<description>**optional** _boolean_ _default:_ `false`</description>

tooltip 是否允许鼠标滑入。

##### showTitle

<description>**optional** _boolean_ _default:_ `false`</description>

是否展示 tooltip 标题。

##### title

<description>**optional** _string_</description>

设置 tooltip 的标题内容：如果值为数据字段名，则会展示数据中对应该字段的数值，如果数据中不存在该字段，则直接展示 title 值。

##### position

<description>**optional** _`top` \| `bottom` \| `left` \| `right`_</description>

设置 tooltip 的固定展示位置，相对于数据点。

##### shared

<description>**optional** _boolean_</description>

true 表示合并当前点对应的所有数据并展示，false 表示只展示离当前点最逼近的数据内容。

##### showCrosshairs

<description>**optional** _boolean_ _default:_ `false`</description>

是否展示 crosshairs。

##### crosshairs

<description>**optional** _object_</description>

配置 tooltip 的 crosshairs，当且仅当 `showCrosshairs` 为 true 时生效。

| 细分配置项名称        | 类型                     | 功能描述                                            |
| -------------- | ---------------------- | ----------------------------------------------- |
| type           | \_`x` \| `y` \| `xy`\_ | crosshairs 的类型: `x` 表示 x 轴上的辅助线，`y` 表示 y 轴上的辅助项 |
| line           | _lineStyle_            | 线的配置项                                           |
| text           | _textStyle_            | 辅助线文本配置，支持回调                                    |
| textBackground | _textBackgroundStyle_  | 辅助线文本背景配置                                       |
| follow         | _boolean_              | 辅助线是否跟随鼠标移动，默认为 false，即定位到数据点                   |

**_lineStyle_**

<!--线条样式-->

| 属性名           | 类型              | 介绍                                                         |
| ------------- | --------------- | ---------------------------------------------------------- |
| stroke        | string          | 线的颜色                                                       |
| lineWidth     | number          | 线宽                                                         |
| lineDash      | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity       | number          | 透明度                                                        |
| shadowColor   | string          | 阴影颜色                                                       |
| shadowBlur    | number          | 高斯模糊系数                                                     |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                               |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                               |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                             |

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


**__textStyle__**

<!--文本样式-->

| 属性名           | 类型              | 介绍                                                                                 |
| ------------- | --------------- | ---------------------------------------------------------------------------------- |
| fontSize      | number          | 文字大小                                                                               |
| fontFamily    | string          | 文字字体                                                                               |
| fontWeight    | number          | 字体粗细                                                                               |
| lineHeight    | number          | 文字的行高                                                                              |
| textAlign     | string          | 设置文本内容的当前对齐方式, 支持的属性：`center` \| `end` \| `left` \| `right` \| `start`，默认值为`start` |
| fill          | string          | 文字的填充色                                                                             |
| fillOpacity   | number          | 文字的填充透明度                                                                           |
| stroke        | string          | 文字的描边                                                                              |
| lineWidth     | number          | 文字描边的宽度                                                                            |
| lineDash      | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。                      |
| lineOpacity   | number          | 描边透明度                                                                              |
| opacity       | number          | 文字的整体透明度                                                                           |
| shadowColor   | string          | 文字阴影颜色                                                                             |
| shadowBlur    | number          | 文字阴影的高斯模糊系数                                                                        |
| shadowOffsetX | number          | 设置阴影距文字的水平距离                                                                       |
| shadowOffsetY | number          | 设置阴影距文字的垂直距离                                                                       |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                                                     |

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

| 细分配置项名称 | 类型                  | 功能描述      |
| ------- | ------------------- | --------- |
| padding | number \| number\[] | 文本背景周围的留白 |
| style   | _shapeStyle_        | 线的配置项     |

**_shapeStyle_**

<!--图形样式-->

| 属性名           | 类型              | 介绍                                                            |
| ------------- | --------------- | ------------------------------------------------------------- |
| fill          | string          | 图形的填充色                                                        |
| fillOpacity   | number          | 图形的填充透明度                                                      |
| stroke        | string          | 图形的描边                                                         |
| lineWidth     | number          | 图形描边的宽度                                                       |
| lineDash      | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity   | number          | 描边透明度                                                         |
| opacity       | number          | 图形的整体透明度                                                      |
| shadowColor   | string          | 图形阴影颜色                                                        |
| strokeOpacity | number          | 图形边框透明度                                                       |
| shadowBlur    | number          | 图形阴影的高斯模糊系数                                                   |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                                  |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                                  |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式，默认 'default'。                                |

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

<description>**optional** _boolean_ _default:_ `true`</description>

是否渲染 tooltipMarkers。

##### marker

<description>**optional** _object_</description>

tooltipMarker 的样式配置。

##### showContent

<description>**optional** _boolean_ _default:_ `false`</description>

是否展示 tooltip 内容框。

##### container

<description>**optional** _string|HTMLElement_</description>

自定义 tooltip 的容器。

##### containerTpl

<description>**optional** _string_</description>

用于指定图例容器的模板，自定义模板时必须包含各个 dom 节点的 class。

##### itemTpl

<description>**optional** _string_</description>

每项记录的默认模板，自定义模板时必须包含各个 dom 节点的 class。

##### domStyles

<description>**optional** _TooltipDomStyles_</description>

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
  }
}
```

##### offset

<description>**optional** _number_</description>

tooltip 偏移量。

##### customContent

<description>**optional** _Function_</description>

支持自定义模板。

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

标注是数组类型，可以设置多个。

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

标注类型, text | line | image | region | dataMarker | dataRegion | regionFilter | shape | html.

##### position

<description>**required** _object_ </description>

标注位置。

-   第一种，object 使用图表 x, y 对应的原始数据例如：{ time: '2010-01-01', value: 200 };
-   第二种，数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
    1、对应数据源中的原始数据；
    2、关键字：'min'、'max'、'median'、'start'、'end' 分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束；
    3、x, y 都是百分比的形式，如 30%，在绘图区域定位(即坐标系内)。
    1 和 2 两种类型的数据可以混用，但是使用百分比形式时 x 和 y 必须都是百分比形式。
-   第三种，回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景。

##### top

<description>**optional** _boolean_ _default:_ `false`</description>

是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### animate

<description>**optional** _boolean_ </description>

是否进行动画。

##### offsetX

<description>**optional** _number_ </description>

x 方向的偏移量。

##### offsetY

<description>**optional** _number_ </description>

y 方向的偏移量。

##### start

<description>**optional** _Array_ </description>

起始位置，一般用于 line、region 等。

##### end

<description>**optional** _Array_ </description>

结束位置，一般用于 line、region 等。

```ts
{
  type: 'line',
  start: ['min', 'median'],
  end: ['max', 'median'],
},
```

##### style

<description>**optional** _object_ </description>

图形样式属性，参考绘图属性。

##### src

<description>**optional** _string_ </description>

图片路径，用于 image 中。

##### content

<description>**optional** _string_ </description>

文本内容，用于 text 中。

##### rotate

<description>**optional** _number_ </description>

文本的旋转角度，弧度制。

##### maxLength

<description>**optional** _number_ </description>

文文本的最大长度。

##### autoEllipsis

<description>**optional** _boolean_ </description>

超出 maxLength 是否自动省略。

##### ellipsisPosition

<description>**optional** _head | middle | tail _ </description>

文本截断的位置。

##### isVertical

<description>**optional** _boolean_ </description>

文本在二维坐标系的显示位置，是沿着 x 轴显示 还是沿着 y 轴显示。

##### background

<description>**optional** _object_ </description>

文字包围盒样式设置。

| 参数名     | 类型                  | 是否必选 | 默认值 | 描述        |
| ------- | ------------------- | ---- | --- | --------- |
| style   | object 参考绘图属性       |      | -   | 文本背景的样式   |
| padding | number \| number\[] |      | -   | 文本背景周围的留白 |

##### color

<description>**optional** _string_ </description>

染色色值，一般用于 regionFilter。

##### apply

<description>**optional** _string\[]_ </description>

设定 regionFilter 只对特定 geometry 类型起作用，如 apply: ['area']，一般用于 regionFilter。

##### autoAdjust

<description>**optional** _boolean_ </description>

文本超出绘制区域时，是否自动调节文本方向。

##### direction

<description>**optional** _upward | downward_ </description>

朝向。

##### lineLength

<description>**optional** _number_ </description>

line 长度，用于 dataRegion。

##### render

<description>**optional** _string_ </description>

自定义标记的绘制 render 函数，其他 container 为标记绘制的父容器, view 为图形实例, helpers 为辅助函数，其他 parserPosition 可以用来计算数据点对应的坐标位置，用于 shape。

##### container

<description>**optional** _string | HTMLElement_ </description>

自定义 HTML 图形标记的容器元素，用于 html

##### container

<description>**optional** _string | HTMLElement_ </description>

自定义的图形标记的 HTML 元素，可为 HTML DOM 字符串，或 HTML 元素，或 html 回调函数，用于 html

##### alignX

<description>**optional** _left' | 'middle' | 'right'_ </description>

DOM 元素在 X 方向的对齐方式，用于 html

##### alignY

<description>**optional** _left' | 'middle' | 'right'_ </description>

DOM 元素在 Y 方向的对齐方式，用于 html


#### theme

主题支持 `light`、 `dark` 两种模式，当然也可以自己指定， 默认使用 `light`。

```ts
theme: 'dark';
```

默认配置如下， `dark` 和 `light` 配置项没有区别，只是预设值不一样。

<div style="max-height: 400px; overflow: hiddenn; overflow-y: auto; background-color: f5f7ff">

```ts
const BLACK_COLORS = {
  100: '#000',
  95: '#0D0D0D',
  85: '#262626',
  65: '#595959',
  45: '#8C8C8C',
  25: '#BFBFBF',
  15: '#D9D9D9',
  6: '#F0F0F0',
};

const WHITE_COLORS = {
  100: '#FFFFFF',
  95: '#F2F2F2',
  85: '#D9D9D9',
  65: '#A6A6A6',
  45: '#737373',
  25: '#404040',
  15: '#262626',
  6: '#0F0F0F',
};

const QUALITATIVE_10 = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#E86452',
  '#6DC8EC',
  '#945FB9',
  '#FF9845',
  '#1E9493',
  '#FF99C3',
];

const QUALITATIVE_20 = [
  '#5B8FF9',
  '#CDDDFD',
  '#5AD8A6',
  '#CDF3E4',
  '#5D7092',
  '#CED4DE',
  '#F6BD16',
  '#FCEBB9',
  '#E86452',
  '#F8D0CB',
  '#6DC8EC',
  '#D3EEF9',
  '#945FB9',
  '#DECFEA',
  '#FF9845',
  '#FFE0C7',
  '#1E9493',
  '#BBDEDE',
  '#FF99C3',
  '#FFE0ED',
];

export const antvLight = {
  /** 图表背景色 */
  backgroundColor: 'transparent',
  /** 主题色 */
  brandColor: QUALITATIVE_10[0],
  /** 分类色板 1，在数据量小于等于 10 时使用 */
  paletteQualitative10: QUALITATIVE_10,
  /** 分类色板 2，在数据量大于 10 时使用 */
  paletteQualitative20: QUALITATIVE_20,
  /** 语义色 */
  paletteSemanticRed: '#F4664A',
  /** 语义色 */
  paletteSemanticGreen: '#30BF78',
  /** 语义色 */
  paletteSemanticYellow: '#FAAD14',
  /** 字体 */
  fontFamily: `"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,
  "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  "Noto Color Emoji"`,

  // -------------------- 坐标轴 --------------------
  /** 坐标轴线颜色 */
  axisLineBorderColor: BLACK_COLORS[25],
  /** 坐标轴线粗细 */
  axisLineBorder: 1,
  /** 坐标轴线 lineDash 设置 */
  axisLineDash: null,

  /** 坐标轴标题颜色 */
  axisTitleTextFillColor: BLACK_COLORS[65],
  /** 坐标轴标题文本字体大小 */
  axisTitleTextFontSize: 12,
  /** 坐标轴标题文本行高 */
  axisTitleTextLineHeight: 12,
  /** 坐标轴标题文本字体粗细 */
  axisTitleTextFontWeight: 'normal',
  /** 坐标轴标题距离坐标轴文本的间距 */
  axisTitleSpacing: 12,

  /** 坐标轴刻度线颜色 */
  axisTickLineBorderColor: BLACK_COLORS[25],
  /** 坐标轴刻度线长度 */
  axisTickLineLength: 4,
  /** 坐标轴刻度线粗细 */
  axisTickLineBorder: 1,

  /** 坐标轴次刻度线颜色 */
  axisSubTickLineBorderColor: BLACK_COLORS[15],
  /** 坐标轴次刻度线长度 */
  axisSubTickLineLength: 2,
  /** 坐标轴次刻度线粗细 */
  axisSubTickLineBorder: 1,

  /** 坐标轴刻度文本颜色 */
  axisLabelFillColor: BLACK_COLORS[45],
  /** 坐标轴刻度文本字体大小 */
  axisLabelFontSize: 12,
  /** 坐标轴刻度文本行高 */
  axisLabelLineHeight: 12,
  /** 坐标轴刻度文本字体粗细 */
  axisLabelFontWeight: 'normal',
  /** 坐标轴刻度文本距离坐标轴线的间距 */
  axisLabelOffset: 8,

  /** 坐标轴网格线颜色 */
  axisGridBorderColor: BLACK_COLORS[15],
  /** 坐标轴网格线粗细 */
  axisGridBorder: 1,
  /** 坐标轴网格线虚线设置 */
  axisGridLineDash: null,

  // -------------------- 图例 --------------------
  /** 图例标题颜色 */
  legendTitleTextFillColor: BLACK_COLORS[45],
  /** 图例标题文本字体大小 */
  legendTitleTextFontSize: 12,
  /** 图例标题文本行高 */
  legendTitleTextLineHeight: 21,
  /** 图例标题文本字体粗细 */
  legendTitleTextFontWeight: 'normal',

  /** 图例 marker 颜色 */
  legendMarkerColor: QUALITATIVE_10[0],
  /** 图例 marker 距离图例文本的间距 */
  legendMarkerSpacing: 8,
  /** 图例 marker 默认半径大小 */
  legendMarkerSize: 4,
  /** 图例 'circle' marker 半径 */
  legendCircleMarkerSize: 4,
  /** 图例 'square' marker 半径 */
  legendSquareMarkerSize: 4,
  /** 图例 'line' marker 半径 */
  legendLineMarkerSize: 5,

  /** 图例项文本颜色 */
  legendItemNameFillColor: BLACK_COLORS[65],
  /** 图例项文本字体大小 */
  legendItemNameFontSize: 12,
  /** 图例项文本行高 */
  legendItemNameLineHeight: 12,
  /** 图例项粗细 */
  legendItemNameFontWeight: 'normal',
  /** 图例项之间的水平间距 */
  legendItemSpacing: 24,
  /** 图例项垂直方向的间隔 */
  legendItemMarginBottom: 12,
  /** 图例与图表绘图区域的偏移距离  */
  legendPadding: [8, 8, 8, 8],

  /** 连续图例滑块填充色 */
  sliderRailFillColor: BLACK_COLORS[15],
  /** 连续图例滑块边框粗细 */
  sliderRailBorder: 0,
  /** 连续图例滑块边框颜色 */
  sliderRailBorderColor: null,
  /** 连续图例滑块宽度 */
  sliderRailWidth: 100,
  /** 连续图例滑块高度 */
  sliderRailHeight: 12,

  /** 连续图例文本颜色 */
  sliderLabelTextFillColor: BLACK_COLORS[45],
  /** 连续图例文本字体大小 */
  sliderLabelTextFontSize: 12,
  /** 连续图例文本行高 */
  sliderLabelTextLineHeight: 12,
  /** 连续图例文本字体粗细 */
  sliderLabelTextFontWeight: 'normal',

  /** 连续图例滑块颜色 */
  sliderHandlerFillColor: BLACK_COLORS[6],
  /** 连续图例滑块宽度 */
  sliderHandlerWidth: 10,
  /** 连续图例滑块高度 */
  sliderHandlerHeight: 14,
  /** 连续图例滑块边框粗细 */
  sliderHandlerBorder: 1,
  /** 连续图例滑块边框颜色 */
  sliderHandlerBorderColor: BLACK_COLORS[25],

  // -------------------- Annotation，图形标注 --------------------
  /** arc 图形标注描边颜色 */
  annotationArcBorderColor: BLACK_COLORS[15],
  /** arc 图形标注粗细 */
  annotationArcBorder: 1,

  /** line 图形标注颜色 */
  annotationLineBorderColor: BLACK_COLORS[25],
  /** line 图形标注粗细 */
  annotationLineBorder: 1,
  /** lube 图形标注的虚线间隔 */
  annotationLineDash: null,

  /** text 图形标注文本颜色 */
  annotationTextFillColor: BLACK_COLORS[65],
  /** text 图形标注文本字体大小 */
  annotationTextFontSize: 12,
  /** text 图形标注文本行高 */
  annotationTextLineHeight: 12,
  /** text 图形标注文本字体粗细 */
  annotationTextFontWeight: 'normal',
  /** text 图形标注文本边框颜色 */
  annotationTextBorderColor: null,
  /** text 图形标注文本边框粗细 */
  annotationTextBorder: 0,

  /** region 图形标注填充颜色 */
  annotationRegionFillColor: BLACK_COLORS[100],
  /** region 图形标注填充颜色透明色 */
  annotationRegionFillOpacity: 0.06,
  /** region 图形标注描边粗细 */
  annotationRegionBorder: 0,
  /** region 图形标注描边颜色 */
  annotationRegionBorderColor: null,

  /** dataMarker 图形标注线的长度 */
  annotationDataMarkerLineLength: 16,

  // -------------------- Tooltip --------------------
  /** tooltip crosshairs 辅助线颜色 */
  tooltipCrosshairsBorderColor: BLACK_COLORS[25],
  /** tooltip crosshairs 辅助线粗细 */
  tooltipCrosshairsBorder: 1,
  /** tooltip crosshairs 辅助线虚线间隔 */
  tooltipCrosshairsLineDash: null,

  /** tooltip 内容框背景色 */
  tooltipContainerFillColor: 'rgb(255, 255, 255)',
  tooltipContainerFillOpacity: 0.95,
  /** tooltip 内容框阴影 */
  tooltipContainerShadow: '0px 0px 10px #aeaeae',
  /** tooltip 内容框圆角 */
  tooltipContainerBorderRadius: 3,

  /** tooltip 文本颜色 */
  tooltipTextFillColor: BLACK_COLORS[65],
  /** tooltip 文本字体大小 */
  tooltipTextFontSize: 12,
  /** tooltip 文本行高 */
  tooltipTextLineHeight: 12,
  /** tooltip 文本字体粗细 */
  tooltipTextFontWeight: 'bold',

  // -------------------- Geometry labels --------------------
  /** Geometry label 文本颜色 */
  labelFillColor: BLACK_COLORS[65],
  labelFillColorDark: '#2c3542',
  labelFillColorLight: '#ffffff',
  /** Geometry label 文本字体大小 */
  labelFontSize: 12,
  /** Geometry label 文本行高 */
  labelLineHeight: 12,
  /** Geometry label 文本字体粗细 */
  labelFontWeight: 'normal',
  /** Geometry label 文本描边颜色 */
  labelBorderColor: null,
  /** Geometry label 文本描边粗细 */
  labelBorder: 0,

  /** Geometry innerLabel 文本颜色 */
  innerLabelFillColor: WHITE_COLORS[100],
  /** Geometry innerLabel 文本字体大小 */
  innerLabelFontSize: 12,
  /** Geometry innerLabel 文本行高 */
  innerLabelLineHeight: 12,
  /** Geometry innerLabel 文本字体粗细 */
  innerLabelFontWeight: 'normal',
  /** Geometry innerLabel 文本描边颜色 */
  innerLabelBorderColor: null,
  /** Geometry innerLabel 文本描边粗细 */
  innerLabelBorder: 0,

  /** Geometry label　文本连接线粗细 */
  labelLineBorder: 1,
  /** Geometry label 文本连接线颜色 */
  labelLineBorderColor: BLACK_COLORS[25],

  // -------------------- Geometry 图形样式--------------------
  /** 点图填充颜色 */
  pointFillColor: QUALITATIVE_10[0],
  /** 点图填充颜色透明度 */
  pointFillOpacity: 0.95,
  /** 点图大小 */
  pointSize: 4,
  /** 点图描边粗细 */
  pointBorder: 1,
  /** 点图描边颜色 */
  pointBorderColor: WHITE_COLORS[100],
  /** 点图描边透明度 */
  pointBorderOpacity: 1,

  /** 点图 active 状态下描边颜色 */
  pointActiveBorderColor: BLACK_COLORS[100],

  /** 点图 selected 状态下描边粗细 */
  pointSelectedBorder: 2,
  /** 点图 selected 状态下描边颜色 */
  pointSelectedBorderColor: BLACK_COLORS[100],

  /** 点图 inactive 状态下填充颜色透明度 */
  pointInactiveFillOpacity: 0.3,
  /** 点图 inactive 状态下描边透明度 */
  pointInactiveBorderOpacity: 0.3,

  /** 空心点图大小 */
  hollowPointSize: 4,
  /** 空心点图描边粗细 */
  hollowPointBorder: 1,
  /** 空心点图描边颜色 */
  hollowPointBorderColor: QUALITATIVE_10[0],
  /** 空心点图描边透明度 */
  hollowPointBorderOpacity: 0.95,
  hollowPointFillColor: WHITE_COLORS[100],

  /** 空心点图 active 状态下描边粗细 */
  hollowPointActiveBorder: 1,
  /** 空心点图 active 状态下描边颜色 */
  hollowPointActiveBorderColor: BLACK_COLORS[100],
  /** 空心点图 active 状态下描边透明度 */
  hollowPointActiveBorderOpacity: 1,

  /** 空心点图 selected 状态下描边粗细 */
  hollowPointSelectedBorder: 2,
  /** 空心点图 selected 状态下描边颜色 */
  hollowPointSelectedBorderColor: BLACK_COLORS[100],
  /** 空心点图 selected 状态下描边透明度 */
  hollowPointSelectedBorderOpacity: 1,

  /** 空心点图 inactive 状态下描边透明度 */
  hollowPointInactiveBorderOpacity: 0.3,

  /** 线图粗细 */
  lineBorder: 2,
  /** 线图颜色 */
  lineBorderColor: QUALITATIVE_10[0],
  /** 线图透明度 */
  lineBorderOpacity: 1,

  /** 线图 Active 状态下粗细 */
  lineActiveBorder: 3,

  /** 线图 selected 状态下粗细 */
  lineSelectedBorder: 3,

  /** 线图 inactive 状态下透明度 */
  lineInactiveBorderOpacity: 0.3,

  /** area 填充颜色 */
  areaFillColor: QUALITATIVE_10[0],
  /** area 填充透明度 */
  areaFillOpacity: 0.25,

  /** area 在 active 状态下的填充透明度 */
  areaActiveFillColor: QUALITATIVE_10[0],
  areaActiveFillOpacity: 0.5,

  /** area 在 selected 状态下的填充透明度 */
  areaSelectedFillColor: QUALITATIVE_10[0],
  areaSelectedFillOpacity: 0.5,

  /** area inactive 状态下填充透明度 */
  areaInactiveFillOpacity: 0.3,

  /** hollowArea 颜色 */
  hollowAreaBorderColor: QUALITATIVE_10[0],
  /** hollowArea 边框粗细 */
  hollowAreaBorder: 2,
  /** hollowArea 边框透明度 */
  hollowAreaBorderOpacity: 1,

  /** hollowArea active 状态下的边框粗细 */
  hollowAreaActiveBorder: 3,
  hollowAreaActiveBorderColor: BLACK_COLORS[100],

  /** hollowArea selected 状态下的边框粗细 */
  hollowAreaSelectedBorder: 3,
  hollowAreaSelectedBorderColor: BLACK_COLORS[100],

  /** hollowArea inactive 状态下的边框透明度 */
  hollowAreaInactiveBorderOpacity: 0.3,

  /** interval 填充颜色 */
  intervalFillColor: QUALITATIVE_10[0],
  /** interval 填充透明度 */
  intervalFillOpacity: 0.95,

  /** interval active 状态下边框粗细 */
  intervalActiveBorder: 1,
  /** interval active 状态下边框颜色 */
  intervalActiveBorderColor: BLACK_COLORS[100],
  intervalActiveBorderOpacity: 1,

  /** interval selected 状态下边框粗细 */
  intervalSelectedBorder: 2,
  /** interval selected 状态下边框颜色 */
  intervalSelectedBorderColor: BLACK_COLORS[100],
  /** interval selected 状态下边框透明度 */
  intervalSelectedBorderOpacity: 1,

  /** interval inactive 状态下边框透明度 */
  intervalInactiveBorderOpacity: 0.3,
  /** interval inactive 状态下填充透明度 */
  intervalInactiveFillOpacity: 0.3,

  /** interval 边框粗细 */
  hollowIntervalBorder: 2,
  /** hollowInterval 边框颜色 */
  hollowIntervalBorderColor: QUALITATIVE_10[0],
  /** hollowInterval 边框透明度 */
  hollowIntervalBorderOpacity: 1,
  hollowIntervalFillColor: WHITE_COLORS[100],

  /** hollowInterval active 状态下边框粗细 */
  hollowIntervalActiveBorder: 2,
  /** hollowInterval active 状态下边框颜色 */
  hollowIntervalActiveBorderColor: BLACK_COLORS[100],

  /** hollowInterval selected 状态下边框粗细 */
  hollowIntervalSelectedBorder: 3,
  /** hollowInterval selected 状态下边框颜色 */
  hollowIntervalSelectedBorderColor: BLACK_COLORS[100],
  /** hollowInterval selected 状态下边框透明度 */
  hollowIntervalSelectedBorderOpacity: 1,

  /** hollowInterval inactive 状态下边框透明度 */
  hollowIntervalInactiveBorderOpacity: 0.3,
};
```

</div>


### 事件

在 Chart 和 View 上通过 on 绑定事件、off 移除绑定事件。

```ts
// 绑定事件
chart.on('eventName', callback);
// 移除事件
chart.off('eventName', callback);
```

#### eventName

组成方式：element + ':' + es。

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


### 图表方法

#### render()

渲染图表。

#### update()

更新图表配置项，配置覆盖，不会做差异比对。

使用示例：

```ts
plot.update({
  ...currentConfig,
  legend: false,
});
```

<!-- #### changeData()

<description>**optional** </description>

更新图表数据。`update()`方法会导致图形区域销毁并重建，如果只进行数据更新，而不涉及其他配置项更新，推荐使用本方法。。

默认配置：`无`

使用示例：

```ts
plot.changeData(newData);
``` -->
