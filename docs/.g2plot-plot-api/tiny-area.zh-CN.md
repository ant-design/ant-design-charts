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

画布的 `padding` 值，代表图表在上右下左的间距，可以为单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向，或者开启 `auto`，由底层自动计算间距。

#### appendPadding

<description>**optional** _number\[] | number_</description>

额外增加的 `appendPadding` 值，在 `padding` 的基础上，设置额外的 padding 数值，可以是单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向。

#### renderer

<description>**optional** _string_ _default:_ `canvas`</description>

设置图表渲染方式为 `canvas` 或 `svg`。

#### pixelRatio

<description>**optional** _number_ _default:_ `window.devicePixelRatio`</description>

设置图表渲染的像素比，和底层的 devicePixelRatio 含义一致，一般不用设置，除非在页面有整体 scale 的情况下，可以自定义。

#### limitInPlot

<description>**optional** _boolean_</description>

是否对超出坐标系范围的 Geometry 进行剪切。

### 数据映射

#### data

<description>**required** _number\[]_</description>

设置图表数据源。mini 面积图的数据直接采用一个数字数组，代表一个指标的变化趋势，无需设置 x 轴字段。

#### meta

<description>**optional** _object_</description>

全局化配置图表数据元信息，以字段为单位进行配置，来定义数据的类型和展示方式。在 meta 上的配置将同时影响所有组件的文本信息。

| 细分配置项名称 | 类型        | 功能描述                                    |
| -------------- | ----------- | ------------------------------------------- |
| alias          | _string_    | 字段的别名                                  |
| formatter      | _function_  | callback 方法，对该字段所有值进行格式化处理 |
| values         | _string\[]_ | 枚举该字段下所有值                          |
| range          | _number\[]_ | 字段的数据映射区间，默认为\[0,1]            |

关于 `meta` 的更多配置项，请查看 [Meta Options](/zh-CN/guide/common)

### 图形样式

#### smooth

<description>**optional** _boolean_ _default:_ `false`</description>

是否平滑。

#### areaStyle

<description>**optional** _StyleAttr | Function_</description>

面积图形样式。

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

关于 ShapeStyle 更加详细的文档参考 [绘图属性](/zh-CN/guide/graphic-style)。

#### line

<description>**optional** _lineStyle_</description>

面积中折线的样式。

| 细分配置项名称 | 类型         | 功能描述          |
| -------------- | ------------ | ----------------- | ---------- | -------- |
| color          | \*string     | string\[]         | Function\* | 颜色映射 |
| style          | \*ShapeStyle | Function\*        | 样式映射   |
| size           | \*number     | \[number, number] | Function\* | 折线宽度 |

#### point

<description>**optional** _pointStyle_</description>

面积图数据点图形样式。

| 细分配置 | 类型 | 功能描述 |
| --- | --- | --- |
| color | \*string \| string\[] \| Function\* | 数据点颜色，也可以支持回调的方式设置，回调参数为 `color: (x, y, series) => string` |
| shape | \*string \| Function\* | 数据点形状，也可以支持回调的方式设置，回调参数为 `shape: (x, y, series) => string` |
| size | \*number \| Function\* | 数据点大小，也可以支持回调的方式设置，回调参数为 `size: (x, y, series) => number` |
| style | \*object \| Function\* | 数据点样式，也可以支持回调的方式设置，回调参数为 `style: (x, y, series) => object` |

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
  color: ({ type }) => {
    if(type === 'male'){
      return 'red';
    }
    return 'yellow';
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

<description>**optional** _`top` | `bottom` | `left` | `right`_</description>

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

| 细分配置项名称 | 类型 | 功能描述 |
| --- | --- | --- |
| type | \*`x` \| `y` \| `xy`\* | crosshairs 的类型: `x` 表示 x 轴上的辅助线，`y` 表示 y 轴上的辅助项 |
| line | _lineStyle_ | 线的配置项 |
| text | _textStyle_ | 辅助线文本配置，支持回调 |
| textBackground | _textBackgroundStyle_ | 辅助线文本背景配置 |
| follow | _boolean_ | 辅助线是否跟随鼠标移动，默认为 false，即定位到数据点 |

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
| fontSize | _number_ | 文字大小 |
| fontFamily | _string_ | 文字字体 |
| fontWeight | _number_ | 字体粗细 |
| lineHeight | _number_ | 文字的行高 |
| textAlign | _string_ | 设置文本内容的当前对齐方式, 支持的属性：`center` \| `end` \| `left` \| `right` \| `start`，默认值为`start` |
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

| 细分配置项名称 | 类型                    | 功能描述           |
| -------------- | ----------------------- | ------------------ |
| padding        | \*number \| number\[]\* | 文本背景周围的留白 |
| style          | _shapeStyle_            | 线的配置项         |

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

关于 ShapeStyle 更加详细的文档参考 [绘图属性](/zh-CN/guide/graphic-style)。

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
    'g2-tooltip'?: CSSProperties;
    'g2-tooltip-title'?: CSSProperties;
    'g2-tooltip-list'?: CSSProperties;
    'g2-tooltip-list-item'?: CSSProperties;
    'g2-tooltip-marker'?: CSSProperties;
    'g2-tooltip-value'?: CSSProperties;
    'g2-tooltip-name'?: CSSProperties;
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

#### axis

xAxis、yAxis 配置相同。

##### position

<description>**optional** _`top` | `bottom` | `left` | `right`_</description>

适用于直角坐标系，设置坐标轴的位置。

#### label

<description> _AxisLabelCfg | null_ **optional** </description>

文本标签的配置项，null 表示不展示。_AxisLabelCfg_ 配置如下：

| 参数名 | 类型 | 是否必选 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| style | [ShapeAttrs](/zh/docs/api/shape/shape-attrs) |  | - | 坐标轴刻度线的样式配置项 |
| offset | number |  | - | label 的偏移量 |
| rotate | number |  | - | 文本旋转角度 |
| autoRotate | boolean |  | `true` | 是否自动旋转 |
| autoHide | boolean |  | `false` | 是否自动隐藏 |
| autoEllipsis | boolean |  | `false` | 是否自动省略 |
| formatter | `(text: string, item: ListItem, index: number) => any` |  | `false` | 格式化函数 |

##### nice

<description>**optional** _boolean_ _default:_ `true`</description>

是否美化。

##### min

<description>**optional** _number_ _default:_ `0`</description>

坐标轴最小值。

##### max

<description>**optional** _number_</description>

坐标轴最大值。

##### minLimit

<description>**optional** _number_</description>

最小值限定。

##### maxLimit

<description>**optional** _number_</description>

最大值限定。

##### tickCount

<description>**optional** _number_</description>

期望的坐标轴刻度数量，非最终结果。

##### tickInterval

<description>**optional** _number_</description>

坐标轴刻度间隔。

##### tickMethod

<description>**optional** _string | Function_ _default:_ `false`</description>

指定 tick 计算方法，或自定义计算 tick 的方法，内置 tick 计算方法包括 `cat`、`time-cat`、 `wilkinson-extended`、`r-pretty`、`time`、`time-pretty`、`log`、`pow`、`quantile`、`d3-linear`。

##### line

<description>**optional** _object_</description>

坐标轴线的配置项，null 表示不展示。

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

##### tickLine

<description>**optional** _object_</description>

坐标轴刻度线线的配置项，null 表示不展示。

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

##### subTickLine

<description>**optional** _object_</description>

坐标轴子刻度线的配置项，null 表示不展示。

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

##### title

<description>**optional** _object_</description>

标题的配置项，null 表示不展示。

| 细分配置项名称 | 类型         | 功能描述                 |
| -------------- | ------------ | ------------------------ |
| offset         | _number_     | 标题距离坐标轴的距离     |
| spacing        | _lineStyle_  | 标题距离坐标轴文本的距离 |
| style          | _shapeStyle_ | 标题文本配置项           |
| autoRotate     | _boolean_    | 是否自动旋转             |

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

关于 ShapeStyle 更加详细的文档参考 [绘图属性](/zh-CN/guide/graphic-style)。

**_label_**

<description>**optional** _object_</description>

文本标签的配置项，null 表示不展示。

<!--label样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| type | _string_ | 当用户使用了自定义的 label 类型，需要声明具体的 type 类型，否则会使用默认的 label 类型渲染（饼图 label 支持 `inner \| outer \| spider`） |
| offset | _number_ | label 的偏移量 |
| offsetX | _number_ | label 相对于数据点在 X 方向的偏移距离 |
| offsetY | _number_ | label 相对于数据点在 Y 方向的偏移距离 |
| content | \*string \| IGroup \| IShape \| GeometryLabelContentCallback\* | 展示的文本内容，如果不声明则按照参与映射的第一字段的值进行显示 |
| style | object | label 文本图形属性样式 |
| autoRotate | _string_ | 是否自动旋转，默认 true |
| rotate | _number_ | 文本旋转角度 |
| labelLine | \*null \| _boolean_ \| object\* | 用于设置文本连接线的样式属性，null 表示不展示。 |
| labelEmit | _boolean_ | 只对极坐标下的文本生效，表示文本是否按照角度进行放射状显示，true 表示开启，false 表示关闭 |
| layout | \*'overlap' \| 'fixedOverlap' \| 'limitInShape'\* | 文本布局类型，支持多种布局函数组合使用。 |
| position | \*'top' \| 'bottom' \| 'middle' \| 'left' \| 'right'\* | 指定当前 label 与当前图形的相对位置 |
| animate | \*boolean \| AnimateOption\* | 动画配置。 |
| formatter | _Function_ | 格式化函数 |
| autoHide | _boolean_ | 是否自动隐藏，默认 false |

|

示例代码：

```ts
{
  label: {
    style: {
      fill: 'red',
      opacity: 0.6,
      fontSize: 24
    },
    rotate: true
  }
}
```

##### grid

<description>**optional** _object_</description>

坐标轴网格线的配置项，null 表示不展示。

| 细分配置项名称 | 类型 | 功能描述 |
| --- | --- | --- |
| line | _lineStyle_ | 线的样式 |
| alternateColor | \*string \| string\[]\* | 两个栅格线间的填充色 |
| closed | _boolean_ | 对于 circle 是否关闭 grid |
| alignTick | _boolean_ | 是否同刻度线对齐，如果值为 false，则会显示在两个刻度中间 |

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

##### animate

<description>**optional** _boolean_ _default:_ `true`</description>

动画开关，默认开启。

##### animateOption

<description>**optional** _object_</description>

动画参数配置。

```ts
interface ComponentAnimateCfg {
  /** 动画执行时间 */
  readonly duration?: number;
  /** 动画缓动函数 */
  readonly easing?: string;
  /** 动画延迟时间 */
  readonly delay?: number;
}
// 配置参考
{
  animateOption: {
    appear: ComponentAnimateCfg;
    update: ComponentAnimateCfg;
    enter: ComponentAnimateCfg;
    leave: ComponentAnimateCfg;
  }
}
```

##### verticalFactor

<description>**optional** _number_</description>

标记坐标轴 label 的方向，左侧为 1，右侧为 -1。

##### verticalLimitLength

<description>**optional** _number_</description>

配置坐标轴垂直方向的最大限制长度，对文本自适应有很大影响。

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

- 第一种，object 使用图表 x, y 对应的原始数据例如：{ time: '2010-01-01', value: 200 };
- 第二种，数组来配置位置 \[ x, y ]，根据数组中的值的存在以下几种形式： 1、对应数据源中的原始数据； 2、关键字：'min'、'max'、'median'、'start'、'end' 分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束； 3、x, y 都是百分比的形式，如 30%，在绘图区域定位(即坐标系内)。 1 和 2 两种类型的数据可以混用，但是使用百分比形式时 x 和 y 必须都是百分比形式。
- 第三种，回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景。

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

<description>**optional** \_head | middle | tail \_ </description>

文本截断的位置。

##### isVertical

<description>**optional** _boolean_ </description>

文本在二维坐标系的显示位置，是沿着 x 轴显示 还是沿着 y 轴显示。

##### background

<description>**optional** _object_ </description>

文字包围盒样式设置。

| 参数名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| style | _object_ | - | 文本背景的样式, 参考[绘图属性](/guide/graphic-style) |
| padding | \*number \| number\[]\* | - | 文本背景周围的留白 |

##### color

<description>**optional** _string_ </description>

染色色值，一般用于 regionFilter。

##### apply

<description>**optional** _string\[]_ </description>

设定 regionFilter 只对特定 geometry 类型起作用，如 apply: \['area']，一般用于 regionFilter。

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

##### html

<description>**optional** _string | HTMLElement_ </description>

自定义的图形标记的 HTML 元素，可为 HTML DOM 字符串，或 HTML 元素，或 html 回调函数，用于 html

##### alignX

<description>**optional** _left' | 'middle' | 'right'_ </description>

DOM 元素在 X 方向的对齐方式，用于 html

##### alignY

<description>**optional** _left' | 'middle' | 'right'_ </description>

DOM 元素在 Y 方向的对齐方式，用于 html

### 图表主题

#### 内置主题

目前默认的内置主要要两套：`default` 和 `dark`

```ts
{
  theme: 'default', // 'dark',
}
```

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

### 事件

在 Plot 上通过 on 绑定事件、off 移除绑定事件。

```ts
// 绑定事件
plot.on('eventName', callback);
// 移除事件
plot.off('eventName', callback);
```

#### eventName

组成方式：element + ':' + events。

element 指要绑定的元素类型，例如 `element`、`legend-item`、`axis-label`、`mask`、`plot`、`legend-item-name`、`reset-button` 等。

events 对应 DOM 常见事件，例如 `click`、`mousedown`、`mouseup`、`dblclick`、`mouseenter`、`mouseout`、`mouseover`、`mousemove`、`mouseleave`、`contextmenu` 等，同时支持几个移动端事件：`touchstart`、`touchmove`、`touchend`

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
