### Plot Container

#### width

<description>**optional** _number_ _default:_ `400`</description>

Set the width of the chart.

#### height

<description>**optional** _number_ _default:_ `400`</description>

Set the height of the chart.

#### autoFit

<description>**optional** _boolean_ _default:_ `true`</description>

Whether the chart automatically adjusts to fit the container. If it is set to `true`, `width` and `height` configuration would fail.

#### padding

<description>**optional** _number\[] 、 number 、 'auto'_</description>

Set `padding` value of the canvas. You can also use `auto`.

#### appendPadding

<description>**optional** _number\[] 、 number_</description>

Extra `appendPadding` value.

#### renderer

<description>**optional** _string_ _default:_ `canvas`</description>

Set the render way to `canvas` or `svg`.

#### pixelRatio

<description>**optional** _number_ _default:_ `window.devicePixelRatio`</description>

Set the pixel ratio of the chart.

#### limitInPlot

<description>**optional** _boolean_</description>

Whether clip the Geometry beyond the coordinate system。

<!-- 先插入到这里 -->

#### locale

<description>**optional** _string_</description>

Specify the locale. There are two built-in locales: 'zh-CN' and 'en-US'. Or you can use `G2Plot.registerLocale` to register a new locale. Go [src/locales/en_US.ts](https://github.com/antvis/G2Plot/blob/master/src/locales/en_US.ts) to see the format.

### Data Mapping

#### data

<description>**required** _array object_</description>

Configure the data source. The data source is a collection of objects. For example:`[{ time: '1991'，value: 20 }, { time: '1992'，value: 20 }]`。

#### xField

<description>**required** _string_</description>

The name of the data field corresponding to the graph in the x direction, usually the field corresponding to the horizontal coordinate axis. For example, to see how many people are in different classes, the class field is the corresponding xField.

#### yField

<description>**required** _string_</description>

The name of the data field corresponding to the graph in the y direction, usually the field corresponding to the vertical coordinate axis. For example, to see the number of students in different classes, the number field is the corresponding yField.

#### seriesField

<description>**optional** _string_</description>

Split fields, same as GroupField and ColorField under the grouping bar chart, same as StackField and ColorField under the stacking bar chart.

#### groupField

<description>**optional** _string_</description>

Split field used to stack grouping columns. Split field has a higher priority than SeriesField. IsGroup: true will group by GroupField.

#### isGroup

<description>**optional** _boolean_</description>

Whether to group bar charts.

#### isStack

<description>**optional** _boolean_</description>

Whether to stack columns.

#### isRange

<description>**optional** _boolean_</description>

Whether to range columns.

#### isPercent

<description>**optional** _boolean_</description>

Whether to percent columns, if isPercent is true, isStack also needs to be true.

#### meta

<description>**optional** _object_</description>

Configure the meta of each data field of the chart in global, to define the type and presentation of data. Configuration of the meta will affect the text content of all components.

| Properties | Type        | Description                                              |
| ---------- | ----------- | -------------------------------------------------------- |
| alias      | _string_    | alias of the data field                                  |
| formatter  | _function_  | callback function to format all values of the data field |
| values     | _string\[]_ | enumerate all the values of the data field               |
| range      | _number\[]_ | mapping range of the data field, default: \[0,1]         |

See also the [Meta Options](/guide/common#meta) to learn more about configuration of `meta`.

### Geometry Style

#### color

<description>**optional** _string 、 string\[] 、 Function_</description>

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
  color: ['#d62728', '#2ca02c', '#000000'],
}
// Function
{
  colorField: 'type', // or seriesField in some cases
  color: ({ type }) => {
    if(type === 'male'){
      return 'red';
    }
    return 'yellow';
  }
}
```

#### intervalPadding

<description>**optional**, _number_</description>

Specify the padding of interval, pixel value. Used in GroupColumn plot.

<playground path='column/grouped/interval-padding.ts' rid='rect1'></playground>

#### dodgePadding

<description>**optional**, _number_</description>

Specify the padding of interval on the same group, pixel value. Used in GroupColumn plot.

<playground path='column/grouped/dodge-padding.ts' rid='rect2'></playground>

#### minColumnWidth

<description>**optional**, _number_</description>

Specify the min width of column, pixel value. Auto adapt by default.

#### maxColumnWidth

<description>**optional**, _number_</description>

Specify the max width of column, pixel value. Auto adapt by default.

#### columnStyle

<description>**optional** _StyleAttr 、 Function_</description>

Column graphic Style.

<!--shape style-->

| Properties | Type | Description |
| --- | --- | --- |
| fill | _string_ | Fill color of the shape |
| r | _number_ | used in `point`, means the radius of geometry |
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

More documents about `ShapeStyle`, see [Graphic Style](/guide/graphic-style).

#### columnBackground.style

<description>**optional** _StyleAttr_</description>

Background style of column graphic

Example:

```ts
{
  columnBackground: {
    style: {
      fill: '#000',
      fillOpacity: 0.25,
    }
  }
}
```

#### columnWidthRatio

<description>**optional** _number_</description>

Width ratio of column \[0-1].

#### marginRatio

<description>**optional** _number_</description>

The spacing between columns in a grouping \[0-1] applies only to grouping columns.

#### state

<description>**optional** _object_</description>

Set the style of the corresponding state. Now you can config four state styles: `'default' | 'active' | 'inactive' | 'selected'`.

Example：

```ts
{
  interactions: [{ type: 'element-active' }],
  state: {
    // 设置 active 激活状态的样式
    active: {
      animate: { duration: 100, easing: 'easeLinear' },
      style: {
        lineWidth: 2,
        stroke: '#000',
      },
    },
  }
};
```

### Plot Components

#### axis

xAxis、yAxis 配置相同。**注意**：由于 DualAxes(双轴图) 和 BidirectionalBar(对称条形图) 是双 y 轴， yAxis 类型是以 yField 中的字段作为 `key` 值的`object`。

##### top

<description>**optional** _boolean_ _default:_ `false`</description>

是否渲染在画布顶层，防止部分图形中，需要将 axis 显示在图形上面，避免被图形遮挡。

##### position

<description>**optional** _`top` | `bottom` | `left` | `right`_</description>

For Cartesian coordinates, set the position of the coordinate axes.

##### title

<description>**optional** _object_</description>

A configuration item for the title, NULL means not to be displayed.

| Properties | Type | Description |
| --- | --- | --- |
| text | _string_ | The title of axis |
| position | _string_ | Position of the axis title, default: 'center'. Options: start, center, end |
| offset | _number_ | The distance of the title from the coordinate axis |
| spacing | _number_ | The distance between the title and the text on the coordinate axis |
| style | _shapeStyle_ | Title text configuration items |
| autoRotate | _boolean_ | Whether to rotate automatically or not |

**_shapeStyle_**

<!--shape style-->

| Properties | Type | Description |
| --- | --- | --- |
| fill | _string_ | Fill color of the shape |
| r | _number_ | used in `point`, means the radius of geometry |
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

More documents about `ShapeStyle`, see [Graphic Style](/guide/graphic-style).

**_label_**

<description>**optional** _object_</description>

A configuration item for the text label. NULL indicates that it is not displayed.

<!--label样式-->

| Properties | Type | Description |
| --- | --- | --- |
| type | _string_ | When a user uses a custom label type, need to declare the specific type, otherwise you will use the default label type rendering (pie chart label support `inner 、 outer 、spiders`) |
| offset | _number_ | label offset |
| offsetX | _number_ | The offset distance of the label from the data point in the X direction |
| offsetY | _number_ | The offset distance of the label from the data point in the Y direction |
| content | _string 、 IGroup 、 IShape 、 GeometryLabelContentCallback_ | Text content that is displayed, if not declared, is displayed according to the value of the first field participating in the mapping |
| style | _ShapeAttrs_ | Label text graphic property style |
| autoRotate | _string_ | Whether to rotate automatically, default true |
| rotate | _number_ | Text rotation Angle |
| labelLine | _null_ 、 _boolean_ 、 _LabelLineCfg_ | Used to set the style property of the text connector. NULL indicates that it is not displayed. |
| labelEmit | _boolean_ | Only applies to text in polar coordinates, indicating whether the text is radially displayed according to the Angle. True means on and false means off |
| layout | _'overlap' 、 'fixedOverlap' 、 'limitInShape'_ | Text layout type, support a variety of layout function combination. |
| position | _'top' 、 'bottom' 、 'middle' 、 'left' 、 'right'_ | Specifies the position of the current Label relative to the current graphic |
| animate | _boolean 、 AnimateOption_ | Animation configuration. |
| formatter | _Function_ | Format function |
| autoHide | _boolean_ | Whether to hide it automatically, default to false |

Types of **_LabelLineCfg_** are as follow: (Go [ShapeAttrs](/zh-CN/guide/graphic-style) see more details about _ShapeAttrs_)

```plain
type LabelLineCfg = {
  style?: ShapeAttrs;
}
```

Example code:

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

##### label

<description> _AxisLabelCfg 、 null_ **optional** </description>

Configurations related to axis label. Set this to `null` to prevent the axis label from appearing. The details of \_ AxisLabelCfg\_ are as follows:

| Properties | Type |  |  |
| --- | --- | --- | --- |
| style | _[ShapeAttrs](/guide/graphic-style)_ | - | Axis label text graphic property style |
| offset | _number_ | - | Axis label offset |
| rotate | _number_ | - | Axis label text rotation Angle |
| autoRotate | _boolean 、avoidCallback_ | `true` | Whether to rotate automatically, default true |
| autoHide | _boolean 、avoidCallback 、 { type:string,cfg?:AxisLabelAutoHideCfg }_ | `false` | Whether to hide it automatically, default to false |
| autoEllipsis | _boolean_ | `false` | Whether to ellipsis label when overflow, default to false |
| formatter | _`(text: string, item: ListItem, index: number) => any`_ | `false` | Format function |

**_avoidCallback_** 类型定义如下：

```ts
type avoidCallback = (isVertical: boolean, labelGroup: IGroup, limitLength?: number) => boolean;
```

**_AxisLabelAutoHideCfg_** 类型定义如下：

```ts
interface AxisLabelAutoHideCfg {
  /** 最小间距配置 */
  minGap?: number;
}
```

##### verticalFactor

<description>**optional** _number_</description>

Mark the direction of the label on the axis, with 1 to the left and -1 to the right (Only works in vertical axis).

##### verticalLimitLength

<description>**optional** _number_</description>

Configuring the maximum limit length in the vertical direction of the coordinate axis has a significant impact on text adaptation.

##### grid

<description>**optional** _object_</description>

Axis grid line configuration item. NULL means not shown.

| Properties | Type | Description |
| --- | --- | --- |
| line | _lineStyle_ | The style of the line |
| alternateColor | _string、string\[]_ | The fill color between two grid lines |
| closed | _boolean_ | Whether to close the grid for circle |
| alignTick | _boolean_ | If the value is false, it will be displayed between the two scales |

Then config of `grid.line` is the same as: [line](#line)

##### line

<description>**optional** _object_</description>

Coordinate axis configuration item, NULL means not displayed.

<!--line style-->

> **Attention:** The full configuration of lineStyle is `{ style: { stroke: '#ddd', ... } }`, please check it when your configuration doesn't work.

| Properties | Type | Description |
| --- | --- | --- |
| stroke | _string_ | color of the line |
| lineWidth | _number_ | width of the line |
| lineDash | _\[number,number]_ | configure dashed line, the first parameter is the length of each segment, the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| opacity | _number_ | opacity |
| shadowColor | _string_ | shadow color |
| shadowBlur | _number_ | Gaussian blur coefficient |
| shadowOffsetX | _number_ | configure horizontal distance between shadow and line |
| shadowOffsetY | _number_ | configure vertical distance between shadow and line |
| cursor | _string_ | mouse style, same as the mouse style of CSS, default value : 'default' |

Example (config the grid line style of xAxis)：

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

The configuration item of the coordinate axis scale line. NULL means not displayed.

| Properties | Type        | Description                            |
| ---------- | ----------- | -------------------------------------- |
| style      | _lineStyle_ | The style of tickLine.                 |
| alignTick  | _boolean_   | Whether aligh tickLine with tick label |
| length     | _number_    | The length of tickLine.                |

Go [ShapeAttrs](/zh-CN/guide/graphic-style) see more details about _ShapeAttrs_. The params of _ShapeAttrsCallback_ are as follow：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### subTickLine

<description>**optional** _object_</description>

A configuration item for a coordinate subscale. NULL indicates that it is not displayed.

| Properties | Type                               | Description                |
| ---------- | ---------------------------------- | -------------------------- |
| style      | _ShapeAttrs 、 ShapeAttrsCallback_ | The style of subTickLine.  |
| count      | _number_                           | The count of subTickLine.  |
| length     | _number_                           | The length of subTickLine. |

Go [ShapeAttrs](/zh-CN/guide/graphic-style) see more details about _ShapeAttrs_. The params of _ShapeAttrsCallback_ are as follow：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### nice

<description>**optional** _boolean_ _default:_ `true`</description>

Whether to nice.

##### min

<description>**optional** _number_ _default:_ `0`</description>

Minimum axis.

##### max

<description>**optional** _number_</description>

Maximum axis.

##### minLimit

<description>**optional** _number_</description>

Minimal limit.

##### maxLimit

<description>**optional** _number_</description>

Maximum limit.

##### tickCount

<description>**optional** _number_</description>

The expected number of axes, not the final result.

##### tickInterval

<description>**optional** _number_</description>

Interval of axes.

##### tickMethod

<description>**optional** _string 、 Function_ _default:_ `false`</description>

Specify a tick calculation method, or customize a tick calculation method. Built-in tick calculations include `cat`、`time-cat`、 `wilkinson-extended`、`r-pretty`、`time`、`time-pretty`、`log`、`pow`、`quantile`、`d3-linear`。

##### animate

<description>**optional** _boolean_ _default:_ `true`</description>

Animation switch, default true.

##### animateOption

<description>**optional** _object_</description>

Animation parameter configuration.

```ts
interface ComponentAnimateCfg {
  /** Duration of the first animation */
  readonly duration?: number;
  /** Easing method used for the first animation. */
  readonly easing?: string;
  /** Delay before updating the animation */
  readonly delay?: number;
}
// Configure the reference
{
  animateOption: {
    appear: ComponentAnimateCfg;
    update: ComponentAnimateCfg;
    enter: ComponentAnimateCfg;
    leave: ComponentAnimateCfg;
  }
}
```

#### legend

There are two ways to configure legends

Method 1, pass in 'Boolean' to set whether to display a legend.

```ts
legend: false; // close legend
```

Method 2, pass in _LegendCfg_ to configure the legend as a whole.

```ts
legend: {
  layout: 'horizontal',
  position: 'right'
}
```

##### layout

<description>**optional** _horizontal 、 vertical_ </description>

Layout of legend.

##### title

<description>**optional** _G2LegendTitleCfg_ </description>

Legend title configuration is not displayed by default. _G2LegendTitleCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| title | _string_ | Content of legend title |
| spacing | _number_ | - | The spacing between the title and the legend item |
| style | _object_ | - | Text style configuration item, refer to [Graphic Style](/zh-CN/guide/graphic-style) |

##### position

<description>**optional** _string_ </description>

The position of legend is optional:'top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right'。

<playground path="component/legend/demo/legend-position.jsx" rid="legend-position"></playground>

##### offsetX

<description>**optional** _number_ </description>

Legends offset in the x direction.

##### offsetY

<description>**optional** _number_ </description>

Legends offset in the y direction.

##### background

<description>**optional** _LegendBackgroundCfg_ </description>

Background box configuration item. _LegendBackgroundCFG_ is configured as follows:

| Properties | Type | Description |
| --- | --- | --- |
| padding | _number 、 number\[]_ | White space in the background |
| style | _ShapeAttr_ | Background style configuration, Reference [Graphic Style](/guide/graphic-style) |

##### flipPage

<description>**optional** _boolean_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>,whether to page when there are too many legend items. (⚠️ 暂不支持多行展示分页)

##### pageNavigator

<description>**optional** _object_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configure the style of page navigator, it works when legend is in flipPage. Types of _LegendPageNavigatorCfg_ are as follow:

| Properties   | Type                       | Description                  |
| ------------ | -------------------------- | ---------------------------- |
| marker.style | _PageNavigatorMarkerStyle_ | 分页器指示箭头配置项         |
| text.style   | _PageNavigatorTextStyle_   | The text style of page info. |

Types of **_PageNavigatorMarkerStyle_** are as follow:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| inactiveFill | _string_ | - | Fill color of arrow marker when unclickable (inactive status). |
| inactiveOpacity | _number_ | - | Fill opacity of arrow marker when unclickable (inactive status). |
| fill | _string_ | - | Default fill color of arrow marker (active status). |
| opacity | _number_ | - | Default fill opacity of arrow marker (active status). |
| size | _number_ | - | Size of arrow marker. |

Types of **_PageNavigatorTextStyle_** are as follow:

| Properties | Type     | Default | Description                        |
| ---------- | -------- | ------- | ---------------------------------- |
| fill       | _string_ | -       | Font color of page navigator info. |
| fontSize   | _number_ | -       | Font size of page navigator info.  |

Example：

```ts
pageNavigator: {
  marker: {
    style: {
      // 非激活，不可点击态时的填充色设置
      inactiveFill: '#000',
      inactiveOpacity: 0.45,
      // 默认填充色设置
      fill: '#000',
      opacity: 0.8,
      size: 12,
    },
  },
  text: {
    style: {
      fill: '#ccc',
      fontSize: 8,
    },
  },
},
```

##### itemHeight

<description>**optional** _number_ _default:_ `null`</description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, lengend item height, default null。

##### itemWidth

<description>**optional** _number_ _default:_ `null`</description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, legend item width, default null, automatic calculation.

##### itemName

<description>**optional** _LegendItemNameCfg_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configure the legend item name text. _LegendItemNameCfg_ is configured as follows：

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| style | _object_ | - | Text style configuration, referecnce [Graphic Style](/zh-CN/guide/graphic-style) |
| spacing | _number_ | `false` | The spacing between legend item marker and the following name |
| formatter | _function_ | - | Format function, `(text: string, item: ListItem, index: number) => any;` |

##### itemValue

<description>**optional** _LegendItemValueCfg_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configuration item of legend item Value added value. _LegendItemValueCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| style | _object_ | - | Text style configuration item, reference [Graphic Style](/zh-CN/guide/graphic-style) |
| alignRight | _boolean_ | `false` | Right-align, false by default, only when setting legend item width. |
| formatter | _function_ | - | Format function, `(text: string, item: ListItem, index: number) => any;` |

<playground path="component/legend/demo/legend-item-value.ts" rid="legend-item-value"></playground>

##### itemSpacing

<description>**optional** _number_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, control the horizontal spacing of legend items.

##### marker

<description>**optional** _MarkerCfg_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the configuration of the Marker icon of the legend item.

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| symbol | _Marker_ 、 _MarkerCallback_ | - | The symbol shape of a legend marker is configured |
| style | ShapeAttrs | - | The configuration item of legend item Marker |
| spacing | number | - | The spacing between legend item marker and the following name |

_Marker_ The supported tag types are： _circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen_； _MarkerCallback_ is `(x: number, y: number, r: number) => PathCommand`；

##### maxWidth

<description>**optional** _number_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum width of the legend item. 当 layout 等于 'horizontal' 时，生效，当图例项横向排布，超过最大宽度时，会结合 `flipPage: true` 进行分页。

##### maxHeight

<description>**optional** _number_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum height of the legend item. 当 layout 等于 'vertical' 时，生效，当图例项纵向排布，超过最大高度时，会结合 `flipPage: true` 进行分页。

##### reversed

<description>**optional** _boolean_ </description> Apply to <tag color="green" text="Classification legend">Classification legend</tag>, whether to display legend items in reverse order.

##### custom

<description>**optional** _boolean_ </description>

If it is a custom legend, the items property needs to be declared when this property is true.

##### items

<description>**optional** _LegendItem\[]_ </description> Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the user configures the content of the legend item. _LegendItem_ Configuration is as follows:

| Properties | Type        | Required | Description                          |
| ---------- | ----------- | -------- | ------------------------------------ |
| id         | _string_    |          | Unique value for animation or lookup |
| name       | _string_    | required | name                                 |
| value      | any         | required | value                                |
| marker     | _MarkerCfg_ |          | marker                               |

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| symbol | _Marker_ 、 _MarkerCallback_ | - | The symbol shape of a legend marker is configured |
| style | ShapeAttrs | - | The configuration item of legend item Marker |
| spacing | number | - | The spacing between legend item marker and the following name |

_Marker_ The supported tag types are： _circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen_； _MarkerCallback_ is `(x: number, y: number, r: number) => PathCommand`；

##### min

<description>**optional** _number_ </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the minimum value of the range.

##### max

<description>**optional** _number_ </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the maximum value of the range.

##### value

<description>**optional** _number\[]_ </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, 当前选中的范围.

##### selected ✨ 🆕

<description> _object_ **optional** </description>

图例高亮状态，false 表示默认置灰，默认不设置或为 true 表示高亮，会同步进行数据的筛选展示。

示例：

```ts
legend: {
  selected: {
    '分类一': true,
    '分类二': false,
    '分类三': false,
  }
}
```

<playground path='component/legend/demo/legend-focus.ts' rid='legend-selected'></playground>

##### slidable

<description>**optional** _boolean_ _default:_ `true`</description> Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, whether the slider can slide.

##### rail

<description>**optional** _ContinueLegendRailCfg_ </description> Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, a style configuration item for the legend slider (background)._ContinueLegendRailCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| type | _string_ | - | rail type: color and size, default: 'color' |
| size | _number_ | - | The width of the slide rail |
| defaultLength | _number_ | - | The default length of the slider, default: 100. When maxWidth,maxHeight is limited, this property is not used and the length is automatically calculated |
| style | _object_ | - | Slide rail style, refer to [Graphic Style](/zh-CN/guide/graphic-style) |

| **rail.type='color'** | **rail.type='size** |
| --- | --- |
| ![color](https://gw.alipayobjects.com/zos/antfincdn/jwMUDJ63aN/72957823-0148-4b24-bbf4-c756959467d3.png) | ![size](https://gw.alipayobjects.com/zos/antfincdn/t%26LwpJHUA6/52de13d5-b232-4efb-aacf-6d673778d92a.png) |

##### label

<description>**optional** _ContinueLegendLabelCfg_ </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, a configuration item for the text, _ContinueLegendLabelCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| align | _string_ | - | The alignment of text with the slider <br/> - rail : Align with the slide rail, at both ends of the slide rail <br/> - top, bottom: Legends are valid when laid out horizontally <br/> - left, right: Legends are valid when laid out vertically |
| style | _object_ | - | Text style configuration item, reference [Graphic Style](/zh-CN/guide/graphic-style) |
| spacing | _number_ | - | The distance between the text and the slide |
| formatter | _(value: any) => string_ | 文本的格式化方式 |

##### track

<description>**optional** _ContinueLegendTrackCfg_ </description> Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the color block style configuration item for the range. _ContinueLegendTrackCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| style | _object_ | - | Selected range of styles, reference [Graphic Style](/zh-CN/guide/graphic-style) |

##### handler

<description>**optional** _ContinueLegendHandlerCfg_ </description> Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, configuration items for slider. (暂不支持自定义)

_ContinueLegendHandlerCfg_ is configured as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| size | _number_ | - | Slider size, default: 10 |
| style | _object_ | - | Slider configuration, reference [Graphic Style](/zh-CN/guide/graphic-style) |

#### label

> Label configuration is not supported in violin，you can use `annnotation` to replace it.

<!--label样式-->

| Properties | Type | Description |
| --- | --- | --- |
| type | _string_ | When a user uses a custom label type, need to declare the specific type, otherwise you will use the default label type rendering (pie chart label support `inner 、 outer 、spiders`) |
| offset | _number_ | label offset |
| offsetX | _number_ | The offset distance of the label from the data point in the X direction |
| offsetY | _number_ | The offset distance of the label from the data point in the Y direction |
| content | _string 、 IGroup 、 IShape 、 GeometryLabelContentCallback_ | Text content that is displayed, if not declared, is displayed according to the value of the first field participating in the mapping |
| style | _ShapeAttrs_ | Label text graphic property style |
| autoRotate | _string_ | Whether to rotate automatically, default true |
| rotate | _number_ | Text rotation Angle |
| labelLine | _null_ 、 _boolean_ 、 _LabelLineCfg_ | Used to set the style property of the text connector. NULL indicates that it is not displayed. |
| labelEmit | _boolean_ | Only applies to text in polar coordinates, indicating whether the text is radially displayed according to the Angle. True means on and false means off |
| layout | _'overlap' 、 'fixedOverlap' 、 'limitInShape'_ | Text layout type, support a variety of layout function combination. |
| position | _'top' 、 'bottom' 、 'middle' 、 'left' 、 'right'_ | Specifies the position of the current Label relative to the current graphic |
| animate | _boolean 、 AnimateOption_ | Animation configuration. |
| formatter | _Function_ | Format function |
| autoHide | _boolean_ | Whether to hide it automatically, default to false |

Types of **_LabelLineCfg_** are as follow: (Go [ShapeAttrs](/zh-CN/guide/graphic-style) see more details about _ShapeAttrs_)

```plain
type LabelLineCfg = {
  style?: ShapeAttrs;
}
```

Example code:

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

#### tooltip

##### fields

<description>**optional** _string\[]_</description>

Specifies the fields to be displayed in the Tooltip. By default, different charts have different default field lists. Use with the 'formatter' configuration for more effect.

```ts
tooltip: {
  fields: ['x', 'y'],
}
```

##### formatter

<description>**optional** _Function_</description>

Formats the contents of the Tooltip Item (you can use `customContent` when content contains multiple tooltipItems).

```ts
tooltip: {
  formatter: (datum: Datum) => {
    return { name: datum.x, value: datum.y + '%' };
  },
}
```

##### follow

<description>**optional** _boolean_ _default:_ `true`</description>

Sets whether the Tooltip content box follows the mouse.

##### enterable

<description>**optional** _boolean_ _default:_ `false`</description>

Whether the tooltip allows mouse to slide in.

##### showTitle

<description>**optional** _boolean_ _default:_ `false`</description>

Whether show tooltip title.

##### title

<description>**optional** _string_</description>

Set the title content of the Tooltip: If the value is the name of the data field, the value for the field in the data is displayed, and if the field does not exist in the data, the title value is displayed directly.

##### position

<description>**optional** _`top` | `bottom` | `left` | `right`_</description>

Sets the fixed display location of the Tooltip relative to the data point.

##### shared

<description>**optional** _boolean_</description>

True means that all data corresponding to the current point is merged and displayed, while false means that only the data content closest to the current point is displayed.

##### showCrosshairs

<description>**optional** _boolean_ _default:_ `false`</description>

Whether show crosshairs。

##### crosshairs

<description>**optional** _object_</description>

Configure tooltip crosshairs to work if and only if 'showCrosshairs' is true.

| Properties | Type | Description |
| --- | --- | --- |
| type | _'x' 、 'y' 、 'xy'_ | Crosshairs Type: 'X' represents the auxiliary line on the X axis, 'Y' on the Y axis |
| line | _lineStyle_ | The configuration item for line, see more [_ShapeAttrs_](/guide/graphic-style#configure-line-styles) |
| text | _TooltipCrosshairsText 、 TooltipCrosshairsTextCallback_ | Text configuration of crosshairs pointer, support callback |
| textBackground | _textBackgroundStyle_ | Guideline text background configuration |
| follow | _boolean_ | Whether the guide line follows the mouse. Default is false, that is, to locate the data point |

<!-- 类型定义 -->

**_TooltipCrosshairsText_** 类型定义如下：

```ts
/** 辅助线文本配置 */
type TooltipCrosshairsText = {
  /**
   * 文本位置，只支持 start， end
   * @type {string}
   */
  position?: string;
  /**
   * 文本内容
   */
  content?: string;
  /**
   * 距离线的距离
   * @type {number}
   */
  offset?: number;
  /**
   * 是否自动旋转
   * @type {boolean}
   */
  autoRotate?: boolean;
  /**
   * 文本的配置项
   * @type {ShapeAttrs}
   */
  style?: TextStyle;
};
```

其中，**_TextStyle_** 类型定义详见: [通用文本样式](/zh-CN/guide/graphic-style#%E9%85%8D%E7%BD%AE%E6%96%87%E5%AD%97%E6%A0%B7%E5%BC%8F)

**_TooltipCrosshairsTextCallback_** 类型定义如下：

```ts
/**
 * 辅助线文本回调函数
 * @param type 对应当前 crosshairs 的类型，值为 'x' 或者 'y'
 * @param defaultContent 对应当前 crosshairs 默认的文本内容
 * @param items 对应当前 tooltip 内容框中的数据
 * @param currentPoint 对应当前坐标点
 * @returns 返回当前 crosshairs 对应的辅助线文本配置
 */
type TooltipCrosshairsTextCallback = (
  type: string,
  defaultContent: any,
  items: any[],
  currentPoint: Point,
) => TooltipCrosshairsText;
```

<!-- 容器无限变大 -->

<!-- <playground path="more-plots/stock/demo/custom-crosshairs.ts" rid="crosshairs" height="400"></playground> -->

**_TextBackgroundStyle_**

| Properties | Type | Description |
| --- | --- | --- |
| padding | _number 、 number\[]_ | White space around the background of a text |
| style | _shapeStyle_ | The configuration item for line, see more [_ShapeAttrs_](/guide/graphic-style) |

##### showMarkers

<description>**optional** _boolean_ _default:_ `true`</description>

Whether to render TooltipMarkers.

##### marker

<description>**optional** _ShapeAttrs_</description>

TooltipMarker style configuration.

Please refer to the style configuration [ShapeAttrs](/guide/graphic-style)

##### showContent

<description>**optional** _boolean_ _default:_ `false`</description>

Whether to display the Tooltip content box.

##### container

<description>**optional** _string|HTMLElement_</description>

Custom tooltip container.

##### containerTpl

<description>**optional** _string_</description>

Templates used to specify the legend container must include the classes of each DOM node when customizing the template

##### itemTpl

<description>**optional** _string_</description>

The default template for each record, which must include the classes of each DOM node when customizing the template.

##### domStyles

<description>**optional** _TooltipDomStyles_</description>

The styles for each DOM.

<img src="https://gw.alipayobjects.com/zos/antfincdn/pKDA06iIeQ/tooltip.png" class="img-400" alt="dom-styles" />

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
  }
}
```

##### offset

<description>**optional** _number_</description>

Tooltip offset.

##### reversed

<description>**optional** _boolean_</description>

是否将 tooltip items 逆序.

##### showNil

<description>**optional** _boolean_</description>

是否显示空值的 tooltip 项

##### customItems ✨

<description>**optional** _Function_</description>

在 tooltip 渲染之前，对最终的 items 进行自定义处理（比如排序、过滤、格式化等）。

```ts
{
  tooltip: {
    customItems: (originalItems: TooltipItem[]) => {
      // process originalItems,
      return originalItems;
    };
  }
}
```

##### customContent

<description>**optional** _Function_</description>

Support for custom templates.

```ts
{
  tooltip: {
    customContent: (title, data) => {
      return `<div>${title}</div>`;
    };
  }
}
```

Try it:

<playground path="case/customize/demo/customize-tooltip.ts" rid="customize-tooltip"></playground>

#### annotations

Annotations are array types and can be set multiple times.

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

Type of annotation, text | line | image | region | dataMarker | dataRegion | regionFilter | shape | html.

##### position

<description>**required** _object_ </description>

The position of annotation.

- In the first case, object uses the raw data corresponding to graphs x and y. For example: { time: '2010-01-01', value: 200 };
- The second way is to configure the position \[x, y] in an array. Based on the presence of the values in the array, the following forms are used: 1、Corresponding to the original data in the data source; 2、Key words: 'min', 'Max', 'median', 'median', 'start' and 'end' respectively represent the maximum value, minimum value, median value of data and the start and end of coordinate system interval; 3、X, y are percentages, such as 30%, located in the drawing area (that is, in the coordinate system). The 1 and 2 types of data can be used interchangeably, but when using the percentage form, x and y must both be in the percentage form.
- The third, callback function, can dynamically determine the position of the auxiliary element, applied to dynamic data update, the position of the auxiliary element changes according to the data.

##### top

<description>**optional** _boolean_ _default:_ `false`</description>

If it is drawn at the top of the canvas, the default is false, meaning it is drawn at the bottom.

##### animate

<description>**optional** _boolean_ </description>

Whether to enable animation.

##### offsetX

<description>**optional** _number_ </description>

The offset in the x direction.

##### offsetY

<description>**optional** _number_ </description>

The offset in the y direction.

##### start

<description>**optional** _Array_ </description>

Starting position, commonly used for line, region, etc.

##### end

<description>**optional** _Array_ </description>

End position, commonly used for line, region, etc.

```ts
{
  type: 'line',
  start: ['min', 'median'],
  end: ['max', 'median'],
},
```

##### style

<description>**optional** _object_ </description>

The graph style properties refer to the Graphic Style.

##### src

<description>**optional** _string_ </description>

Image path, used in image.

##### content

<description>**optional** _string_ </description>

Text content, used in text.

##### rotate

<description>**optional** _number_ </description>

The rotation Angle of text in radians.

##### maxLength

<description>**optional** _number_ </description>

The maximum length of a text.

##### autoEllipsis

<description>**optional** _boolean_ </description>

Whether the maxLength beyond is automatically omitted.

##### ellipsisPosition

<description>**optional** \_head | middle | tail \_ </description>

The location of the text truncation.

##### isVertical

<description>**optional** _boolean_ </description>

The display position of the text in a two-dimensional coordinate system, whether it is displayed along the X axis or along the Y axis.

##### background

<description>**optional** _object_ </description>

Text wrap box style Settings.

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| style | _object_ | - | Text background style, reference[Graphic Style](/guide/graphic-style) |
| padding | _number 、 number\[]_ | - | White space around the background of a text |

##### color

<description>**optional** _string_ </description>

Color value, usually used in RegionFilter.

##### apply

<description>**optional** _string\[]_ </description>

RegionFilter is set to work only on a specific Geometry type, such as Apply: \['area'], which is generally used with RegionFilter.

##### autoAdjust

<description>**optional** _boolean_ </description>

Whether to automatically adjust text orientation when text exceeds the drawn area.

##### direction

<description>**optional** _upward 、 downward_ </description>

Orientation.

##### lineLength

<description>**optional** _number_ </description>

Line length for dataRegion.

##### render

<description>**optional** _string_ </description>

Render function of custom marking, other container is the parent container of marking drawing, view is the graphic instance, helpers is the auxiliary function, other parserPosition can be used to calculate the coordinate position corresponding to data points, used in shape.

##### container

<description>**optional** _string 、 HTMLElement_ </description>

Container elements for custom HTML graphical tags for HTML

##### html

<description>**optional** _string 、 HTMLElement_ </description>

Custom graphical markup of HTML elements, either as HTML DOM strings, or HTML elements, or HTML callback functions, for HTML

##### alignX

<description>**optional** _'left' 、 'middle' 、 'right'_ </description>

Alignment of DOM elements in the X direction for HTML

##### alignY

<description>**optional** _left' 、 'middle' 、 'right'_ </description>

Alignment of DOM elements in the Y direction for HTML

#### slider

> Only line plot, area plot and dual-axes plot are supported.

| Properties | Type | Description |
| --- | --- | --- |
| start | _number_ | Default starting position |
| end | _number_ | Default ending position |
| height | _number_ | Slider height |
| trendCfg | _TrendCfg_ | Configuration of background trends |
| backgroundStyle | _object_ | Background style, reference[Graphic Style](/guide/graphic-style) |
| foregroundStyle | _object_ | Foreground style, reference[Graphic Style](/guide/graphic-style) |
| handlerStyle | _HandlerStyle_ | Handler configuration |
| textStyle | _object_ | Text style, reference[Graphic Style](/guide/graphic-style) |
| minLimit | _number_ | Lower limit of sliding position allowed |
| maxLimit | _number_ | Upper limit of sliding position allowed |
| formatter | _Function_ | Slider text formatting function |

Types of **_TrendCfg_** are as follow:

| Properties | Type | Description |
| --- | --- | --- |
| data | _number\[]_ | Trend data |
| smooth | _boolean_ | Whether smooth |
| isArea | _boolean_ | Whether area |
| backgroundStyle | _object_ | Background style configuration, reference[Graphic Style](/guide/graphic-style) |
| lineStyle | _object_ | Line style configuration, reference[Graphic Style](/guide/graphic-style) |
| areaStyle | _object_ | Area style configuration, reference[Graphic Style](/guide/graphic-style) |

Types of **_HandlerStyle_** are as follow:

| Properties    | Type     | Description                                     |
| ------------- | -------- | ----------------------------------------------- |
| width         | _number_ | Width of slider handler                         |
| height        | _number_ | Height of slider handler                        |
| fill          | _string_ | Fill color of handler                           |
| highLightFill | _string_ | Highlight fill color of handler (when hovering) |
| stroke        | _string_ | Stroke color of handler                         |
| opacity       | _number_ | Fill opacity of handler                         |
| radius        | _number_ | Radius of handler rect                          |
| cursor        | _string_ | Style of cursor (when hovering handler)         |

#### slider

> Only line plot, area plot and dual-axes plot are supported.

| Properties | Type | Description |
| --- | --- | --- |
| start | _number_ | Default starting position |
| end | _number_ | Default ending position |
| height | _number_ | Slider height |
| trendCfg | _TrendCfg_ | Configuration of background trends |
| backgroundStyle | _object_ | Background style, reference[Graphic Style](/guide/graphic-style) |
| foregroundStyle | _object_ | Foreground style, reference[Graphic Style](/guide/graphic-style) |
| handlerStyle | _HandlerStyle_ | Handler configuration |
| textStyle | _object_ | Text style, reference[Graphic Style](/guide/graphic-style) |
| minLimit | _number_ | Lower limit of sliding position allowed |
| maxLimit | _number_ | Upper limit of sliding position allowed |
| formatter | _Function_ | Slider text formatting function |

Types of **_TrendCfg_** are as follow:

| Properties | Type | Description |
| --- | --- | --- |
| data | _number\[]_ | Trend data |
| smooth | _boolean_ | Whether smooth |
| isArea | _boolean_ | Whether area |
| backgroundStyle | _object_ | Background style configuration, reference[Graphic Style](/guide/graphic-style) |
| lineStyle | _object_ | Line style configuration, reference[Graphic Style](/guide/graphic-style) |
| areaStyle | _object_ | Area style configuration, reference[Graphic Style](/guide/graphic-style) |

Types of **_HandlerStyle_** are as follow:

| Properties    | Type     | Description                                     |
| ------------- | -------- | ----------------------------------------------- |
| width         | _number_ | Width of slider handler                         |
| height        | _number_ | Height of slider handler                        |
| fill          | _string_ | Fill color of handler                           |
| highLightFill | _string_ | Highlight fill color of handler (when hovering) |
| stroke        | _string_ | Stroke color of handler                         |
| opacity       | _number_ | Fill opacity of handler                         |
| radius        | _number_ | Radius of handler rect                          |
| cursor        | _string_ | Style of cursor (when hovering handler)         |

#### Conversion Tag

Applicable to base bar charts and base bar charts, the Conversion Rate component allows the user to focus on the rate of change in the data.

<description>**optional** _object_ 、 _false_</description>

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| size | _number_ | - | Conversion rate Component dimensions |
| spacing | _number_ | - | Component and column spacing |
| offset | _number_ | - | Component and axis spacing |
| arrow | _ArrowCfg 、 false_ | - | Arrow shape configuration, false does not display arrows |
| text | _TextCfg 、 false_ | - | Text configuration, false does not display text |

ArrowCfg configuration is as follows:

| Properties | Type     | Default | Description       |
| ---------- | -------- | ------- | ----------------- |
| headSize   | _number_ | -       | Size of the arrow |
| style      | _object_ | -       | Arrow style       |

TextCfg configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| headSize | _number_ | - | Size of the arrow |
| style | _object_ | - | Arrow style |
| formatter | _(prev:number, next:number) => string_ | - | Custom conversion rate calculation |

Please refer to the style configuration [ShapeAttrs](/guide/graphic-style)

#### Connected Area

Applicable to stacked bar charts and stacked bar charts, the link area component provides visual assistant identification by drawing the link area of the same field, which is convenient for data comparison.

<description>**optional** _object_ 、 _false_</description>

| Properties | Type             | Required     | Default ｜ Description |
| ---------- | ---------------- | ------------ | ---------------------- |
| trigger    | 'hover'、'click' | No ｜'hover' | Trigger method         |

### Plot Event

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

### Plot Method

#### render()

Render the chart.

#### update()

<description>**optional** </description>

Update chart configuration and overwrite it without comparing difference.

Example：

```ts
plot.update({
  ...currentConfig,
  legend: false,
});
```

<!--
#### changeData()

<description>**optional** </description>

更新图表数据。`update()`方法会导致图形区域销毁并重建，如果只进行数据更新，而不涉及其他配置项更新，推荐使用本方法。。

Default configuration:`无`

使用示例：

```ts
plot.changeData(newData);
``` -->

### Plot Theme

Recommend to use 💄 [ThemeSet](https://theme-set.antv.vision) to customize your theme configurations online.

#### Built-in Theme

Built-in defaults: 'default' and 'dark'

```ts
{
  theme: 'default', // 'dark',
}
```

#### Theme attributes

In addition to using the built-in 'default' and 'dark' themes, you can also modify some of the theme content by setting the theme properties.

The following table lists the specific properties on the configuration items that make up the topic:

| **Properties** | **Type** | **Description** |
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
| multiplePieWidthRatio | _number_ | Multilayer pie and loop ratio, 0-1 range values |
| geometries | _object_ | Configure the style of each shape for each Geometry, including the default style and the style for each state |
| components | _object_ | Configure theme samples for axes, legends, tooltips, and annotations |
| labels | _object_ | Configure the theme style of the label under Geometry |
| innerLabels | _object_ | Configure Geometry to display the Labels theme style inside the graph |
| pieLabels | _object_ | Configure the theme style of pie chart labels |

usage:

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

#### Theme attributes (StyleSheet)

除了以上介绍的主题属性之外，还可以传入主题样式表来自定义主题。如果你需要对全局主题进行配置的话，对样式风格进行切换，比如更改颜色、字体大小、边框粗细等

usage:

```ts
{
  theme: {
    styleSheet: {
      fontFamily: 'Avenir';
    }
  }
}
```

支持的样式表属性：

| **Properties**          | **Type** | **Description**                                   |
| ----------------------- | -------- | ------------------------------------------------- |
| `backgroundColor`       | _string_ | Background color                                  |
| `brandColor`            | _string_ | Brand color，默认取 10 色分类颜色色板的第一个颜色 |
| `paletteQualitative10`  | _string_ | Qualitative palette，分类个数小于 10 时使用       |
| `paletteQualitative20`  | _string_ | Qualitative palette，分类个数大于 10 时使用       |
| `paletteSemanticRed`    | _string_ | Semantic red                                      |
| `paletteSemanticGreen`  | _string_ | Semantic green                                    |
| `paletteSemanticYellow` | _string_ | Semantic yellow                                   |
| `fontFamily`            | _string_ | fontFamily                                        |

#### Update theme

usage：

```ts
// example 1:
plot.update({ theme: 'dark' });

// example 2:
plot.update({ theme: { defaultColor: '#FF6B3B' } });
```

#### Custom theme

In addition, G2 provides a custom topic mechanism to define a new topic structure, allowing users to switch and define chart topics. Go [G2 | Custom theme](https://g2.antv.vision/en/docs/api/advanced/register-theme) for more details.

<playground path="general/theme/demo/register-theme.ts" rid="rect-register-theme"></playground>

🌰 Customize theme [DEMO](/zh/examples/general/theme#register-theme)

### Plot Interactions

#### Add interacions

Usage:

```ts
// Enable the Active interaction when the mouse moves over a chart element (bar in a bar, dot in a dot, etc.)
interactions: [{ type: 'element-active' }];

// Enable multiple interactions
interactions: [{ type: 'element-active' }, { type: 'brush' }];
```

#### Config interactions

通过 `cfg` 可以对交互行为进行配置，详细参考 [G2 | 修改交互的默认交互](https://g2.antv.vision/en/docs/api/general/interaction/#修改交互的默认交互)

```ts
// 修改 tooltip 触发事件
interactions: [
  {
    type: 'tooltip',
    cfg: { start: [{ trigger: 'element:click', action: 'tooltip:show' }] },
  },
];
```

#### Remove the interaction

```ts
// 方式1: 关闭 tooltip 交互
interactions: [{ type: 'tooltip', enable: false }];

// 方式2:
plot.chart.removeInteraction('interaction-type');
```

Example:

```ts
// Removes legend filtering interaction
plot.chart.removeInteraction('legend-filter');
```
