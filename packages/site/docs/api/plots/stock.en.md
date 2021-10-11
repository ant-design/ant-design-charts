

## title: Stock&#xA;order: 18

### Plot Container

#### width

<description>**optional** *number* *default:* `400`</description>

Set the width of the chart.

#### height

<description>**optional** *number* *default:* `400`</description>

Set the height of the chart.

#### autoFit

<description>**optional** *boolean* *default:* `true`</description>

Whether the chart automatically adjusts to fit the container. If it is set to `true`, `width` and `height` configuration would fail.

#### padding

<description>**optional** *number\[] | number | 'auto'*</description>

Set `padding` value of the canvas. You can also use `auto`.

#### appendPadding

<description>**optional** *number\[] | number*</description>

Extra `appendPadding` value.

#### renderer

<description>**optional** *string* *default:* `canvas`</description>

Set the render way to `canvas` or `svg`.

#### pixelRatio

<description>**optional** *number* *default:* `window.devicePixelRatio`</description>

Set the pixel ratio of the chart.

#### limitInPlot

<description>**optional** *boolean*</description>

Whether clip the Geometry beyond the coordinate system。

<!-- 先插入到这里 -->

#### locale

<description>**optional** *string*</description>

Specify the locale. There are two built-in locales: 'zh-CN' and 'en-US'. Or you can use `G2Plot.registerLocale` to register a new locale. Go [src/locales/en_US.ts](https://github.com/antvis/G2Plot/blob/master/src/locales/en_US.ts) to see the format.


### Data Mapping

#### data

<description>**required** *array object*</description>

Configure the data source. The data source is a collection of objects. For example:

```ts
[
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-13',
    close: 2887.4265,
    open: 2804.2322,
    high: 2910.8812,
    low: 2799.9841,
    vol: 366450436,
    amount: 393019665.2,
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-12',
    close: 2923.4856,
    open: 2936.0163,
    high: 2944.4651,
    low: 2906.2838,
    vol: 307778457,
    amount: 328209202.4,
  },
];
```

#### xField

<description>**required** *string*</description>

图形标记在 y 方向位置映射所对应的数据字段名，一般对应一个日期或者日期时间格式的字段(交易日)。

目前`xField`会自动识别如下形式的时间格式，当用户需要生成 time 类型的度量时，建议将原始时间数据转换为如下形式：

*   时间戳，如 1436237115500；
*   时间字符串： '2015-03-01'，'2015-03-01 12:01:40'，'2015/01/05'，'2015-03-01T16:00:00.000Z'。

#### yField

<description>**required** *array string*</description>

该项为二维数组, 对应的是`[开盘价,收盘价,最高价,最低价]`字段的数组。

例如: `['open', 'close', 'high', 'low']`

#### meta

<description>**optional** *object*</description>

Configure the meta of each data field of the chart in global, to define the type and presentation of data. Configuration of the meta will affect the text content of all components.

| Properties | Type       | Description                                              |
| ---------- | ---------- | -------------------------------------------------------- |
| alias      | *string*   | alias of the data field                                  |
| formatter  | *function* | callback function to format all values of the data field |
| values     | *string\[]* | enumerate all the values of the data field               |
| range      | *number\[]* | mapping range of the data field, default: \[0,1]          |

See also the [Meta Options](/en/docs/api/options/meta) to learn more about configuration of `meta`.


[Live demo](/en/examples/more-plots/stock#meta-alias)

### Geometry Style

> Stock plot only support configure **Rising color** and **Falling color**. Configuring `color` is not supported now.

#### risingFill

<description>**optional** *number* *default:* `#ef5350`</description>

Rising color configuration.

#### fallingFill

<description>**optional** *number* *default:* `#26a69a`</description>

Falling color configuration.

<playground path="more-plots/stock/demo/custom-color.ts" rid="custom-color"></playground>

#### stockStyle

<description>**optional** *StyleAttr | Function*</description>

Graphic style of stock plot. You can either pass in the 'shapeStyle' structure directly, or you can use callbacks to return different styles for different data. For the ShapeStyle data structure, see:

<!--shape style-->

| Properties    | Type            | Description                                                                                                                                                                              |
| ------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fill          | *string*        | Fill color of the shape                                                                                                                                                                  |
| r          | *number*         | used in `point`, means the radius of geometry |
| fillOpacity   | *number*        | Fill opacity of the shape                                                                                                                                                                |
| stroke        | *string*        | Stroke color of the shape                                                                                                                                                                |
| lineWidth     | *number*        | The width of the stroke of the shape                                                                                                                                                     |
| lineDash      | \[number,number] | Configure dashed line stroke. The first parameter is the length of each segment, and the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| lineOpacity   | *number*        | Opacity of the stroke                                                                                                                                                                    |
| opacity       | *number*        | Opacity of the shape                                                                                                                                                                     |
| shadowColor   | *string*        | Shadow color of the shape                                                                                                                                                                |
| strokeOpacity | *number*        | Stroke opacity of the shape                                                                                                                                                              |
| shadowBlur    | *number*        | Gaussian blur coefficient of the shadow                                                                                                                                                  |
| shadowOffsetX | *number*        | Configure horizontal distance between shadow and shape                                                                                                                                   |
| shadowOffsetY | *number*        | Configure vertical distance between shadow and shape                                                                                                                                     |
| cursor        | *string*        | Mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                                   |

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

More documents about `ShapeStyle`, see [Graphic Style](/en/docs/api/graphic-style).


<playground path="more-plots/stock/demo/custom-style.ts" rid="custom-style"></playground>

### Plot Components

#### axis

xAxis、yAxis 配置相同。**注意**：由于 DualAxes(双轴图) 和 BidirectionalBar(对称条形图) 是双 y 轴， yAxis 类型是以 yField 中的字段作为 `key` 值的`object`。

##### top

<description>**optional** *boolean*  *default:* `false`</description>

是否渲染在画布顶层，防止部分图形中，需要将 axis 显示在图形上面，避免被图形遮挡。

##### position

<description>**optional** *`top` | `bottom` | `left` | `right`*</description>

For Cartesian coordinates, set the position of the coordinate axes.

##### title

<description>**optional** *object*</description>

A configuration item for the title, NULL means not to be displayed.

| Properties | Type         | Description                                                                |
| ---------- | ------------ | -------------------------------------------------------------------------- |
| text       | *string*     | The title of axis                                                          |
| position   | *string*     | Position of the axis title, default: 'center'. Options: start, center, end |
| offset     | *number*     | The distance of the title from the coordinate axis                         |
| spacing    | *number*     | The distance between the title and the text on the coordinate axis         |
| style      | *shapeStyle* | Title text configuration items                                             |
| autoRotate | *boolean*    | Whether to rotate automatically or not                                     |

***shapeStyle***

<!--shape style-->

| Properties    | Type            | Description                                                                                                                                                                              |
| ------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fill          | *string*        | Fill color of the shape                                                                                                                                                                  |
| r          | *number*         | used in `point`, means the radius of geometry |
| fillOpacity   | *number*        | Fill opacity of the shape                                                                                                                                                                |
| stroke        | *string*        | Stroke color of the shape                                                                                                                                                                |
| lineWidth     | *number*        | The width of the stroke of the shape                                                                                                                                                     |
| lineDash      | \[number,number] | Configure dashed line stroke. The first parameter is the length of each segment, and the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| lineOpacity   | *number*        | Opacity of the stroke                                                                                                                                                                    |
| opacity       | *number*        | Opacity of the shape                                                                                                                                                                     |
| shadowColor   | *string*        | Shadow color of the shape                                                                                                                                                                |
| strokeOpacity | *number*        | Stroke opacity of the shape                                                                                                                                                              |
| shadowBlur    | *number*        | Gaussian blur coefficient of the shadow                                                                                                                                                  |
| shadowOffsetX | *number*        | Configure horizontal distance between shadow and shape                                                                                                                                   |
| shadowOffsetY | *number*        | Configure vertical distance between shadow and shape                                                                                                                                     |
| cursor        | *string*        | Mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                                   |

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

More documents about `ShapeStyle`, see [Graphic Style](/en/docs/api/graphic-style).


***label***

<description>**optional** *object*</description>

A configuration item for the text label. NULL indicates that it is not displayed.

<!--label样式-->

| Properties | Type                                                         | Description                                                                                                                                                      |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | --------- |
| type       | *string*                                                     | When a user uses a custom label type, need to declare the specific type, otherwise you will use the default label type rendering (pie chart label support `inner | outer | spiders`) |
| offset     | *number*                                                     | label offset                                                                                                                                                     |
| offsetX    | *number*                                                     | The offset distance of the label from the data point in the X direction                                                                                          |
| offsetY    | *number*                                                     | The offset distance of the label from the data point in the Y direction                                                                                          |
| content    | *string | IGroup | IShape | GeometryLabelContentCallback* | Text content that is displayed, if not declared, is displayed according to the value of the first field participating in the mapping                             |
| style      | *ShapeAttrs*                                                       | Label text graphic property style                                                                                                                                |
| autoRotate | *string*                                                     | Whether to rotate automatically, default true                                                                                                                    |
| rotate     | *number*                                                     | Text rotation Angle                                                                                                                                              |
| labelLine  | *null* | *boolean* | *LabelLineCfg*                               | Used to set the style property of the text connector. NULL indicates that it is not displayed.                                                                   |
| labelEmit  | *boolean*                                                    | Only applies to text in polar coordinates, indicating whether the text is radially displayed according to the Angle. True means on and false means off           |
| layout     | *'overlap' | 'fixedOverlap' | 'limitInShape'*              | Text layout type, support a variety of layout function combination.                                                                                              |
| position   | *'top' | 'bottom' | 'middle' | 'left' | 'right'*         | Specifies the position of the current Label relative to the current graphic  (Only works for column plot and bar plot, which geometry is interval)                                                                                   |
| animate    | *boolean | AnimateOption*                                   | Animation configuration.                                                                                                                                         |
| formatter  | *Function*                                                   | Format function                                                                                                                                                  |
| autoHide   | *boolean*                                                    | Whether to hide it automatically, default to false                                                                                                               |

Types of ***LabelLineCfg*** are as follow: (Go [ShapeAttrs](/zh/docs/api/graphic-style) see more details about *ShapeAttrs*)

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

<description> *AxisLabelCfg | null* **optional** </description>

Configurations related to axis label. Set this to `null` to prevent the axis label from appearing. The details of \_ AxisLabelCfg\_ are as follows:

| Properties   | Type                                                     |         |
| ------------ | -------------------------------------------------------- | ------- | --------------------------------------------------------- |
| style        | *[ShapeAttrs](/en/docs/api/graphic-style)*               | -       | Axis label text graphic property style                    |
| offset       | *number*                                                 | -       | Axis label offset                                         |
| rotate       | *number*                                                 | -       | Axis label text rotation Angle                            |
| autoRotate   | *boolean |avoidCallback*                                                 | `true`  | Whether to rotate automatically, default true             |
| autoHide     | *boolean |avoidCallback | { type:string,cfg?:AxisLabelAutoHideCfg }*                | `false` | Whether to hide it automatically, default to false        |
| autoEllipsis | *boolean*                                                | `false` | Whether to ellipsis label when overflow, default to false |
| formatter    | *`(text: string, item: ListItem, index: number) => any`* | `false` | Format function                                           |

***avoidCallback*** 类型定义如下：

```ts
type avoidCallback = (isVertical: boolean, labelGroup: IGroup, limitLength?: number) => boolean;
```

***AxisLabelAutoHideCfg*** 类型定义如下：

```ts
interface AxisLabelAutoHideCfg {
  /** 最小间距配置 */
  minGap?: number;
}
```

##### verticalFactor

<description>**optional** *number*</description>

Mark the direction of the label on the axis, with 1 to the left and -1 to the right (Only works in vertical axis).

##### verticalLimitLength

<description>**optional** *number*</description>

Configuring the maximum limit length in the vertical direction of the coordinate axis has a significant impact on text adaptation.

##### grid

<description>**optional** *object*</description>

Axis grid line configuration item. NULL means not shown.

| Properties     | Type               | Description                                                        |
| -------------- | ------------------ | ------------------------------------------------------------------ |
| line           | *lineStyle*        | The style of the line                                              |
| alternateColor | *string|string\[]* | The fill color between two grid lines                              |
| closed         | *boolean*          | Whether to close the grid for circle                               |
| alignTick      | *boolean*          | If the value is false, it will be displayed between the two scales |

Then config of `grid.line` is the same as: [line](#line)

##### line

<description>**optional** *object*</description>

Coordinate axis configuration item, NULL means not displayed.

<!--line style-->

> **Attention:** The full configuration of lineStyle is `{ style: { stroke: '#ddd', ... } }`, please check it when your configuration doesn't work.

| Properties    | Type              | Description                                                                                                                                                                   |
| ------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke        | *string*          | color of the line                                                                                                                                                             |
| lineWidth     | *number*          | width of the line                                                                                                                                                             |
| lineDash      | *\[number,number]* | configure dashed line, the first parameter is the length of each segment, the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| opacity       | *number*          | opacity                                                                                                                                                                       |
| shadowColor   | *string*          | shadow color                                                                                                                                                                  |
| shadowBlur    | *number*          | Gaussian blur coefficient                                                                                                                                                     |
| shadowOffsetX | *number*          | configure horizontal distance between shadow and line                                                                                                                         |
| shadowOffsetY | *number*          | configure vertical distance between shadow and line                                                                                                                           |
| cursor        | *string*          | mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                        |

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

<description>**optional** *object*</description>

The configuration item of the coordinate axis scale line. NULL means not displayed.

| Properties | Type        | Description                            |
| ---------- | ----------- | -------------------------------------- |
| style      | *lineStyle* | The style of tickLine.                 |
| alignTick  | *boolean*   | Whether aligh tickLine with tick label |
| length     | *number*    | The length of tickLine.                |

Go [ShapeAttrs](/zh/docs/api/graphic-style) see more details about *ShapeAttrs*. The params of *ShapeAttrsCallback* are as follow：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### subTickLine

<description>**optional** *object*</description>

A configuration item for a coordinate subscale. NULL indicates that it is not displayed.

| Properties | Type                               | Description                |
| ---------- | ---------------------------------- | -------------------------- |
| style      | *ShapeAttrs | ShapeAttrsCallback* | The style of subTickLine.  |
| count      | *number*                           | The count of subTickLine.  |
| length     | *number*                           | The length of subTickLine. |

Go [ShapeAttrs](/zh/docs/api/graphic-style) see more details about *ShapeAttrs*. The params of *ShapeAttrsCallback* are as follow：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### nice

<description>**optional** *boolean* *default:* `true`</description>

Whether to nice.

##### min

<description>**optional** *number* *default:* `0`</description>

Minimum axis.

##### max

<description>**optional** *number*</description>

Maximum axis.

##### minLimit

<description>**optional** *number*</description>

Minimal limit.

##### maxLimit

<description>**optional** *number*</description>

Maximum limit.

##### tickCount

<description>**optional** *number*</description>

The expected number of axes, not the final result.

##### tickInterval

<description>**optional** *number*</description>

Interval of axes.

##### tickMethod

<description>**optional** *string | Function* *default:* `false`</description>

Specify a tick calculation method, or customize a tick calculation method. Built-in tick calculations include `cat`、`time-cat`、 `wilkinson-extended`、`r-pretty`、`time`、`time-pretty`、`log`、`pow`、`quantile`、`d3-linear`。

##### animate

<description>**optional** *boolean* *default:* `true`</description>

Animation switch, default true.

##### animateOption

<description>**optional** *object*</description>

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

Method 2, pass in *LegendCfg* to configure the legend as a whole.

```ts
legend: {
  layout: 'horizontal',
  position: 'right'
}
```

##### layout

<description>**optional** *horizontal | vertical* </description>

Layout of legend.

##### title

<description>**optional** *G2LegendTitleCfg* </description>

Legend title configuration is not displayed by default. *G2LegendTitleCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                         |
| ---------- | -------- | ------- | ----------------------------------------------------------------------------------- |
| title   | *string* | Content of legend title                                            |
| spacing    | *number* | -       | The spacing between the title and the legend item                                   |
| style      | *object* | -       | Text style configuration item, refer to [Graphic Style](/zh/docs/api/graphic-style) |

##### position

<description>**optional** *string* </description>

The position of legend is optional:'top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right'。

<playground path="component/legend/demo/legend-position.jsx" rid="legend-position"></playground>

##### offsetX

<description>**optional** *number* </description>

Legends offset in the x direction.

##### offsetY

<description>**optional** *number* </description>

Legends offset in the y direction.

##### background

<description>**optional** *LegendBackgroundCfg* </description>

Background box configuration item. *LegendBackgroundCFG* is configured as follows:

| Properties | Type               | Description                                             |
| ---------- | ------------------  | ------------------------------------------------------- |
| padding    | *number | number\[]* | White space in the background                           |
| style      | *ShapeAttr*     | Background style configuration, Reference [Graphic Style](/en/docs/api/graphic-style) |

##### flipPage

<description>**optional** *boolean* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>,whether to page when there are too many legend items. (⚠️ 暂不支持多行展示分页)

##### maxRow

<description> *number* **optional** </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>. You can set the maximum number of rows when legend items is flip-paged, (only applicable to 'layout:' horizontal '),default: 1.

##### pageNavigator

<description>**optional** *object* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configure the style of page navigator, it works when legend is in flipPage. Types of *LegendPageNavigatorCfg* are as follow:

| Properties | Type     | Description          |
| ------ | --------------------- | -------------- |
| marker.style | *PageNavigatorMarkerStyle* | 分页器指示箭头配置项    |
| text.style   | *PageNavigatorTextStyle*   | The text style of page info.    |

Types of ***PageNavigatorMarkerStyle*** are as follow:

| Properties | Type     | Default | Description          |
| ------ | --------------------- | ------ | -------------- |
| inactiveFill | *string* | -      | Fill color of arrow marker when unclickable (inactive status). |
| inactiveOpacity   | *number*   | -      | Fill opacity of arrow marker when unclickable (inactive status). |
| fill | *string* | -      | Default fill color of arrow marker (active status). |
| opacity   | *number*   | -      | Default fill opacity of arrow marker (active status). |
| size   | *number*   | -      | Size of arrow marker. |

Types of ***PageNavigatorTextStyle*** are as follow:

| Properties | Type     | Default | Description          |
| ------ | --------------------- | ------ | -------------- |
| fill | *string* | -      | Font color of page navigator info. |
| fontSize   | *number*   | -      |  Font size of page navigator info. |

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

<playground path="component/legend/demo/legend-flippage.ts" rid="page-navigator"></playground>

##### itemHeight

<description>**optional** *number* *default:* `null`</description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, lengend item height, default null。

##### itemWidth

<description>**optional** *number* *default:* `null`</description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, legend item width, default null, automatic calculation.

##### itemName

<description>**optional** *LegendItemNameCfg* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项 name 文本的配置。*LegendItemNameCfg* 配置如下：

| 参数名    | 类型       | 默认值  | 描述                                                                |
| --------- | ---------- | ------- | ------------------------------------------------------------------- |
| style     | *((item: ListItem, index: number, items: ListItem\[]) => ShapeAttrs) | ShapeAttrs*             |          | -      | 文本样式配置项                   |
| spacing   | number                                                  |          | -      | 图例项 marker 同后面 name 的间距 |
| formatter | `(text: string, item: ListItem, index: number) => any;` |          |        | 格式化函数                       |

其中, `ShapeAttrs` 详细配置见：[文档](/zh/docs/api/shape/shape-attrs)；`ListItem` 配置如下：

```ts
type ListItem = {
  /**
   * 名称 {string}
   */
  name: string;
  /**
   * 值 {any}
   */
  value: any;
  /**
   * 图形标记 {object|string}
   */
  marker?: Marker | string;
}

type Marker = {
  symbol? string;
  style?: ShapeAttrs;
  spacing?: number;
};
```

##### itemValue

<description>**optional** *LegendItemValueCfg* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项 value 附加值的配置项。*LegendItemValueCfg* 配置如下：

| 参数名     | 类型       | 默认值  | 描述                                                                |
| ---------- | ---------- | ------- | ------------------------------------------------------------------- |
| alignRight | *boolean*  | `false` | 是否右对齐，默认为 false，仅当设置图例项宽度时生效                  |
| formatter  | *function* | -       | 格式化函数, `(text: string, item: ListItem, index: number) => any;` |
| style     | *((item: ListItem, index: number, items: ListItem\[]) => ShapeAttrs) | ShapeAttrs*             |          | -      | 文本样式配置项                   |

其中, `ShapeAttrs` 详细配置见：[文档](/zh/docs/api/shape/shape-attrs)；`ListItem` 配置如下：

```ts
type ListItem = {
  /**
   * 名称 {string}
   */
  name: string;
  /**
   * 值 {any}
   */
  value: any;
  /**
   * 图形标记 {object|string}
   */
  marker?: Marker | string;
}

type Marker = {
  symbol? string;
  style?: ShapeAttrs;
  spacing?: number;
};
```

<playground path="component/legend/demo/legend-item-value.ts" rid="legend-item-value"></playground>

##### itemSpacing

<description>**optional** *number* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, control the horizontal spacing of legend items.

##### marker

<description>**optional** *MarkerCfg* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the configuration of the Marker icon of the legend item.

| Properties | Type                         | Default | Description                                                   |
| ---------- | ---------------------------- | ------- | ------------------------------------------------------------- |
| symbol     | *Marker* | *MarkerCallback* | -       | The symbol shape of a legend marker is configured             |
| style      | ShapeAttrs                   | -       | The configuration item of legend item Marker                  |
| spacing    | number                       | -       | The spacing between legend item marker and the following name |

*Marker* The supported tag types are： *circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen*；
*MarkerCallback* is `(x: number, y: number, r: number) => PathCommand`；


##### maxItemWidth

<description> *number* **optional** </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项最大宽度设置。

##### maxWidthRatio

<description> *number* **optional**. 取值范围：\[0, 1], 默认: 0.25</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项容器最大宽度比例（以 view 的 bbox 容器大小为参照）设置，如果不需要该配置，可以设置为 `null`。

##### maxHeightRatio

<description> *number* **optional**. 取值范围：\[0, 1], 默认: 0.25</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项容器最大高度比例（以 view 的 bbox 容器大小为参照）设置，如果不需要该配置，可以设置为 `null`。

##### maxWidth

<description>**optional** *number* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum width of the legend item. 当 layout 等于 'horizontal' 时，生效，当图例项横向排布，超过最大宽度时，会结合 `flipPage: true` 进行分页。

##### maxHeight

<description>**optional** *number* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum height of the legend item. 当 layout 等于 'vertical' 时，生效，当图例项纵向排布，超过最大高度时，会结合 `flipPage: true` 进行分页。

##### reversed

<description>**optional** *boolean* </description>
Apply to <tag color="green" text="Classification legend">Classification legend</tag>, whether to display legend items in reverse order.

##### custom

<description>**optional** *boolean* </description>

If it is a custom legend, the items property needs to be declared when this property is true.

##### items

<description>**optional** *LegendItem\[]* </description>
Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the user configures the content of the legend item. *LegendItem* Configuration is as follows:

| Properties | Type        | Required | Description                          |
| ---------- | ----------- | -------- | ------------------------------------ |
| id         | *string*    |          | Unique value for animation or lookup |
| name       | *string*    | required | name                                 |
| value      | any         | required | value                                |
| marker     | *MarkerCfg* |          | marker                               |

| Properties | Type                         | Default | Description                                                   |
| ---------- | ---------------------------- | ------- | ------------------------------------------------------------- |
| symbol     | *Marker* | *MarkerCallback* | -       | The symbol shape of a legend marker is configured             |
| style      | ShapeAttrs                   | -       | The configuration item of legend item Marker                  |
| spacing    | number                       | -       | The spacing between legend item marker and the following name |

*Marker* The supported tag types are： *circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen*；
*MarkerCallback* is `(x: number, y: number, r: number) => PathCommand`；


##### min

<description>**optional** *number* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the minimum value of the range.

##### max

<description>**optional** *number* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the maximum value of the range.

##### value

<description>**optional** *number\[]* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, 当前选中的范围.

##### selected ✨ 🆕

<description> *object* **optional** </description>

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

<description>**optional** *boolean* *default:* `true`</description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, whether the slider can slide.

##### rail

<description>**optional** *ContinueLegendRailCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, a style configuration item for the legend slider (background).*ContinueLegendRailCfg* Configuration is as follows:

| Properties    | Type     | Default | Description                                                                                                                                |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| type          | *string* | -       | rail type: color and size, default: 'color'                                                                                                     |
| size          | *number* | -       | The width of the slide rail                                                                                                                |
| defaultLength | *number* | -       | The default length of the slider, default: 100. When maxWidth,maxHeight is limited, this property is not used and the length is automatically calculated |
| style         | *object* | -       | Slide rail style, refer to [Graphic Style](/zh/docs/api/graphic-style)                                                                     |

|**rail.type='color'**| **rail.type='size** |
|---|---|
|![color](https://gw.alipayobjects.com/zos/antfincdn/jwMUDJ63aN/72957823-0148-4b24-bbf4-c756959467d3.png)|![size](https://gw.alipayobjects.com/zos/antfincdn/t%26LwpJHUA6/52de13d5-b232-4efb-aacf-6d673778d92a.png)|

##### label

<description>**optional** *ContinueLegendLabelCfg* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, a configuration item for the text, *ContinueLegendLabelCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                                                                                                                                                                                      |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| align      | *string* | -       | The alignment of text with the slider <br/> - rail : Align with the slide rail, at both ends of the slide rail <br/> - top, bottom: Legends are valid when laid out horizontally <br/> - left, right: Legends are valid when laid out vertically |
| style      | *object* | -       | Text style configuration item, reference [Graphic Style](/zh/docs/api/graphic-style)                                                                                                                                                             |
| spacing    | *number* | -       | The distance between the text and the slide                                                                                                                                                                                                      |
| formatter  | *(value: any) => string* | 文本的格式化方式 |

##### track

<description>**optional** *ContinueLegendTrackCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the color block style configuration item for the range. *ContinueLegendTrackCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                     |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------- |
| style      | *object* | -       | Selected range of styles, reference [Graphic Style](/zh/docs/api/graphic-style) |

##### handler

<description>**optional** *ContinueLegendHandlerCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, configuration items for slider. (暂不支持自定义)

*ContinueLegendHandlerCfg* is configured as follows:

| Properties | Type     | Default | Description                                                                 |
| ---------- | -------- | ------- | --------------------------------------------------------------------------- |
| size       | *number* | -       | Slider size, default: 10                                                             |
| style      | *object* | -       | Slider configuration, reference [Graphic Style](/zh/docs/api/graphic-style) |


#### label

> Label configuration is not supported in violin，you can use `annnotation` to replace it.

<!--label样式-->

| Properties | Type                                                         | Description                                                                                                                                                      |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | --------- |
| type       | *string*                                                     | When a user uses a custom label type, need to declare the specific type, otherwise you will use the default label type rendering (pie chart label support `inner | outer | spiders`) |
| offset     | *number*                                                     | label offset                                                                                                                                                     |
| offsetX    | *number*                                                     | The offset distance of the label from the data point in the X direction                                                                                          |
| offsetY    | *number*                                                     | The offset distance of the label from the data point in the Y direction                                                                                          |
| content    | *string | IGroup | IShape | GeometryLabelContentCallback* | Text content that is displayed, if not declared, is displayed according to the value of the first field participating in the mapping                             |
| style      | *ShapeAttrs*                                                       | Label text graphic property style                                                                                                                                |
| autoRotate | *string*                                                     | Whether to rotate automatically, default true                                                                                                                    |
| rotate     | *number*                                                     | Text rotation Angle                                                                                                                                              |
| labelLine  | *null* | *boolean* | *LabelLineCfg*                               | Used to set the style property of the text connector. NULL indicates that it is not displayed.                                                                   |
| labelEmit  | *boolean*                                                    | Only applies to text in polar coordinates, indicating whether the text is radially displayed according to the Angle. True means on and false means off           |
| layout     | *'overlap' | 'fixedOverlap' | 'limitInShape'*              | Text layout type, support a variety of layout function combination.                                                                                              |
| position   | *'top' | 'bottom' | 'middle' | 'left' | 'right'*         | Specifies the position of the current Label relative to the current graphic  (Only works for column plot and bar plot, which geometry is interval)                                                                                   |
| animate    | *boolean | AnimateOption*                                   | Animation configuration.                                                                                                                                         |
| formatter  | *Function*                                                   | Format function                                                                                                                                                  |
| autoHide   | *boolean*                                                    | Whether to hide it automatically, default to false                                                                                                               |

Types of ***LabelLineCfg*** are as follow: (Go [ShapeAttrs](/zh/docs/api/graphic-style) see more details about *ShapeAttrs*)

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

<description>**optional** *string\[]*</description>

Specifies the fields to be displayed in the Tooltip. By default, different charts have different default field lists. Use with the 'formatter' configuration for more effect.

```ts
tooltip: {
  fields: ['x', 'y'],
}
```

##### formatter

<description>**optional** *Function*</description>

Formats the contents of the Tooltip Item (you can use `customContent` when content contains multiple tooltipItems).

```ts
tooltip: {
  formatter: (datum: Datum) => {
    return { name: datum.x, value: datum.y + '%' };
  },
}
```

##### follow

<description>**optional** *boolean* *default:* `true`</description>

Sets whether the Tooltip content box follows the mouse.

##### enterable

<description>**optional** *boolean* *default:* `false`</description>

Whether the tooltip allows mouse to slide in.

##### showTitle

<description>**optional** *boolean* *default:* `false`</description>

Whether show tooltip title.

##### title

<description>**optional** *string*</description>

Set the title content of the Tooltip: If the value is the name of the data field, the value for the field in the data is displayed, and if the field does not exist in the data, the title value is displayed directly.

##### position

<description>**optional** *`top` | `bottom` | `left` | `right`*</description>

Sets the fixed display location of the Tooltip relative to the data point.

##### shared

<description>**optional** *boolean*</description>

True means that all data corresponding to the current point is merged and displayed, while false means that only the data content closest to the current point is displayed.

##### showCrosshairs

<description>**optional** *boolean* *default:* `false`</description>

Whether show crosshairs。

##### crosshairs

<description>**optional** *object*</description>

Configure tooltip crosshairs to work if and only if 'showCrosshairs' is true.

| Properties     | Type                   | Description                                                                                   |
| -------------- | ---------------------- | --------------------------------------------------------------------------------------------- |
| type           | *'x' | 'y' | 'xy'* | Crosshairs Type: 'X' represents the auxiliary line on the X axis, 'Y' on the Y axis           |
| line           | *lineStyle*            | The configuration item for line, see more [*ShapeAttrs*](/en/docs/api/graphic-style#configure-line-styles)      |
| text           | *TooltipCrosshairsText | TooltipCrosshairsTextCallback*     | Text configuration of crosshairs pointer, support callback                                                |
| textBackground | *textBackgroundStyle*  | Guideline text background configuration                                                       |
| follow         | *boolean*              | Whether the guide line follows the mouse. Default is false, that is, to locate the data point |

<!-- 类型定义 -->

***TooltipCrosshairsText*** 类型定义如下：

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
}
```

其中，***TextStyle*** 类型定义详见: [通用文本样式](/zh/docs/api/graphic-style#%E9%85%8D%E7%BD%AE%E6%96%87%E5%AD%97%E6%A0%B7%E5%BC%8F)

***TooltipCrosshairsTextCallback*** 类型定义如下：

```ts
/**
 * 辅助线文本回调函数
 * @param type 对应当前 crosshairs 的类型，值为 'x' 或者 'y'
 * @param defaultContent 对应当前 crosshairs 默认的文本内容
 * @param items 对应当前 tooltip 内容框中的数据
 * @param currentPoint 对应当前坐标点
 * @returns 返回当前 crosshairs 对应的辅助线文本配置
 */
type TooltipCrosshairsTextCallback = (type: string, defaultContent: any, items: any[], currentPoint: Point) => TooltipCrosshairsText;
```

<!-- 容器无限变大 -->

<!-- <playground path="more-plots/stock/demo/custom-crosshairs.ts" rid="crosshairs" height="400"></playground> -->


***TextBackgroundStyle***

| Properties | Type                 | Description                                 |
| ---------- | -------------------- | ------------------------------------------- |
| padding    | *number | number\[]* | White space around the background of a text |
| style      | *shapeStyle*         | The configuration item for line, see more [*ShapeAttrs*](/en/docs/api/graphic-style)             |

##### showMarkers

<description>**optional** *boolean* *default:* `true`</description>

Whether to render TooltipMarkers.

##### marker

<description>**optional** *ShapeAttrs*</description>

TooltipMarker style configuration.

Please refer to the style configuration [ShapeAttrs](/en/docs/api/graphic-style)

##### showContent

<description>**optional** *boolean* *default:* `false`</description>

Whether to display the Tooltip content box.

##### container

<description>**optional** *string|HTMLElement*</description>

Custom tooltip container.

##### containerTpl

<description>**optional** *string*</description>

Templates used to specify the legend container must include the classes of each DOM node when customizing the template

##### itemTpl

<description>**optional** *string*</description>

The default template for each record, which must include the classes of each DOM node when customizing the template.

##### domStyles

<description>**optional** *TooltipDomStyles*</description>

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

<description>**optional** *number*</description>

Tooltip offset.

##### reversed

<description>**optional** *boolean*</description>

是否将 tooltip items 逆序.

##### showNil

<description>**optional** *boolean*</description>

是否显示空值的 tooltip 项

##### customItems ✨

<description>**optional** *Function*</description>

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

<description>**optional** *Function*</description>

Support for custom templates. [Live demo](/en/examples/case/customize#customize-tooltip)

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

详细配置见：各 Annotation 配置项说明。

<!-- 直接 三级导航展开 -->

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

#### 💠 Text Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'text',` 标识为：辅助文本，在指定位置添加文本说明。

##### position

<description>**required** *\[string, string] | Datum | ((xScale, yScales) => \[string, string])*</description>

文本标注位置。

[Example](/zh/examples/component/annotation#text-annotation1)

##### x

<description>**optional** *number*</description>

文本标注位置 x，需要搭配 `y` 属性配置。不建议使用，建议使用 `position`。

##### y

<description>**optional** *number*</description>

文本标注位置 y，需要搭配 `x` 属性配置。不建议使用，建议使用 `position`。

##### content

<description>**optional** *string* </description>

Text annotations 的文本标注内容。

##### rotate

<description>**optional** *number* </description>

文本的旋转角度，弧度制。顺时针旋转。

##### offsetX

<description>**optional** *number* </description>

文本在 x 轴方向的偏移量。

##### offsetY

<description>**optional** *number* </description>

文本在 y 轴方向的偏移量。

##### style

<description>**optional** *object* </description>

文本标注样式，参考[绘图属性](/zh/docs/api/graphic-style)

##### background

<description>**optional** *object* </description>

文字包围盒样式设置。

| 参数名  | 类型                 | 描述                                                       |
| ------- | -------------------- | ---------------------------------------------------------- |
| style   | *object*             | 文本背景的样式, 参考[绘图属性](/zh/docs/api/graphic-style) |
| padding | *number | number\[]* | 文本背景周围的留白                                         |

##### maxLength

<description>**optional** *number* </description>

文文本的最大长度。

##### autoEllipsis

<description>**optional** *boolean* </description>

超出 maxLength 是否自动省略。

##### ellipsisPosition

<description>**optional** \_head | middle | tail \_ </description>

文本截断的位置。

##### isVertical

<description>**optional** *boolean* </description>

文本在二维坐标系的显示位置，是沿着 x 轴显示 还是沿着 y 轴显示。


#### 💠 Line Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'line',` 标识为：辅助线（可带文本），例如表示平均值或者预期分布的直线。

##### start

<description>**optional** *AnnotationPosition* </description>

起始位置，一般用于 line、region 等。

***AnnotationPosition*** 类型定义如下：

```ts
type AnnotationPositionCallback = (
  xScales: Scale[] | Record<string, Scale>,
  yScales: Scale[] | Record<string, Scale>
) => [number | string, number | string];

// types of annotation
type AnnotationPosition =
  | [number | string, number | string]
  | Record<string, number | string>
  | AnnotationPositionCallback;
```

除了指定原始数据之外，还可以使用预设定数据点，如：

*   'min': 最小值，minimum value.
*   'max': 最大值，maximum value.
*   'mean': 平均值，average value.
*   'median': 中位值，median value.
*   'start': 即 0.
*   'end': 即 1.

[Example](/zh/examples/component/annotation#line-annotation-position)

##### end

<description>**optional** *AnnotationPosition* </description>

结束位置，一般用于 line、region 等。具体配置属性参考: [start](#start)

##### style

<description>**optional** *object* </description>

辅助线样式属性，参考[绘图属性](/zh/docs/api/graphic-style)

##### text

<description>**optional** *LineAnnotationTextCfg* </description>

辅助线上的文本设置。

***LineAnnotationTextCfg*** 类型定义如下：

```ts
type LineAnnotationTextCfg = {
  /** 文本内容*/
  content?: string;
  /** 自动旋转，沿着线的方向，默认 true */
  autoRotate?: boolean;
  /** 文本的偏移 x */
  offsetX?: number;
  /** 文本的偏移 y */
  offsetY?: number;
  /** 字体样式，参考绘图属性 */
  style?: object;
};
```

[Example](/zh/examples/component/annotation#line-annotation-with-text)

##### top

<description>**optional** *boolean* </description>

指定 annotation 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### offsetX

<description>**optional** *number* </description>

x 轴方向的偏移量。

##### offsetY

<description>**optional** *number* </description>

y 轴方向的偏移量。

##### animate

<description>**optional** *boolean* </description>

是否进行动画。

##### animateOption

<description>**optional** *object* </description>

动画参数配置，当且仅当 `animate` 属性为 true，即动画开启时生效。，参考[动画参数配置](/zh/docs/api/options/animation)


#### 💠 Arc Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'arc',` 标识为：辅助弧线，只在**极坐标系**下生效。常用于绘制仪表盘。

##### start

<description>**optional** *AnnotationPosition* </description>

起始位置，一般用于 line、region 等。

***AnnotationPosition*** 类型定义如下：

```ts
type AnnotationPositionCallback = (
  xScales: Scale[] | Record<string, Scale>,
  yScales: Scale[] | Record<string, Scale>
) => [number | string, number | string];

// types of annotation
type AnnotationPosition =
  | [number | string, number | string]
  | Record<string, number | string>
  | AnnotationPositionCallback;
```

除了指定原始数据之外，还可以使用预设定数据点，如：

*   'min': 最小值，minimum value.
*   'max': 最大值，maximum value.
*   'mean': 平均值，average value.
*   'median': 中位值，median value.
*   'start': 即 0.
*   'end': 即 1.

[Example](/zh/examples/component/annotation#line-annotation-position)

##### end

<description>**optional** *AnnotationPosition* </description>

结束位置，一般用于 line、region 等。具体配置属性参考: [start](#start)

##### style

<description>**optional** *object* </description>

辅助线样式属性，参考[绘图属性](/zh/docs/api/graphic-style)


#### 💠 Image Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'image',` 标识为：辅助图片，在图表上添加辅助图片。

##### src

<description>**optional** *string* </description>

图片路径，用于 image 中。

##### position

<description>**optional** *\[string, string] | Datum | ((xScale, yScales) => \[string, string])*</description>

图片标注位置。

[Example](/zh/examples/component/annotation#image-annotation)

##### start

<description>**optional** *AnnotationPosition* </description>

起始位置，需搭配 `end` 使用，也可以直接只使用 `position`。具体配置属性参考 Line Annotation `start` 配置。

除了指定原始数据之外，还可以使用预设定数据点，如：

*   'min': 最小值，minimum value.
*   'max': 最大值，maximum value.
*   'mean': 平均值，average value.
*   'median': 中位值，median value.
*   'start': 即 0.
*   'end': 即 1.

[Example](/zh/examples/component/annotation#line-annotation-position)

##### end

<description>**optional** *AnnotationPosition* </description>

结束位置，需搭配 `start` 使用，也可以直接只使用 `position`。具体配置属性参考: [start](#start)

##### style

<description>**optional** *object* </description>

图片标注样式，可以设置图片标注的宽度和高度，如下：

```ts
annnotations: [{
  type: 'image',
  src: 'xxx',
  style: {
    width: 50,
    height: 50,
  }
}]
```

##### top

<description>**optional** *boolean* </description>

指定 annotation 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### offsetX

<description>**optional** *number* </description>

x 轴方向的偏移量。

##### offsetY

<description>**optional** *number* </description>

y 轴方向的偏移量。

##### animate

<description>**optional** *boolean* </description>

是否进行动画。

##### animateOption

<description>**optional** *object* </description>

动画参数配置，当且仅当 `animate` 属性为 true，即动画开启时生效。，参考[动画参数配置](/zh/docs/api/options/animation)


#### 💠 Region Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'region',` 标识为：辅助框，框选一段图区，设置背景、边框等。

##### start

<description>**optional** *AnnotationPosition* </description>

起始位置，一般用于 line、region 等。

***AnnotationPosition*** 类型定义如下：

```ts
type AnnotationPositionCallback = (
  xScales: Scale[] | Record<string, Scale>,
  yScales: Scale[] | Record<string, Scale>
) => [number | string, number | string];

// types of annotation
type AnnotationPosition =
  | [number | string, number | string]
  | Record<string, number | string>
  | AnnotationPositionCallback;
```

除了指定原始数据之外，还可以使用预设定数据点，如：

*   'min': 最小值，minimum value.
*   'max': 最大值，maximum value.
*   'mean': 平均值，average value.
*   'median': 中位值，median value.
*   'start': 即 0.
*   'end': 即 1.

[Example](/zh/examples/component/annotation#line-annotation-position)

##### end

<description>**optional** *AnnotationPosition* </description>

结束位置，一般用于 line、region 等。具体配置属性参考: [start](#start)

##### style

<description>**optional** *object* </description>

辅助线样式属性，参考[绘图属性](/zh/docs/api/graphic-style)

##### top

<description>**optional** *boolean* </description>

指定 annotation 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### offsetX

<description>**optional** *number* </description>

x 轴方向的偏移量。

##### offsetY

<description>**optional** *number* </description>

y 轴方向的偏移量。

##### animate

<description>**optional** *boolean* </description>

是否进行动画。

##### animateOption

<description>**optional** *object* </description>

动画参数配置，当且仅当 `animate` 属性为 true，即动画开启时生效。，参考[动画参数配置](/zh/docs/api/options/animation)


#### 💠 DataMarker Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'dataMarker',` 标识为：特殊数据点标注，多用于折线图和面积图。

##### position

<description>**required** *\[string, string] | Datum | ((xScale, yScales) => \[string, string])*</description>

DataMarker 标注位置，参考 Text Annotation 标注的 `position` 设置。

[Example](/zh/examples/component/annotation#text-annotation1)

##### point

<description>**optional** *null | DataMarkerPointCfg* </description>

point 设置。当设置为：`null` 时，不展示 point 点标识。

***DataMarkerPointCfg*** 类型定义如下：

```ts
// 当前只支持对 point 的样式进行设置。
type DataMarkerPointCfg = {
  style?: ShapeAttrs;
}
```

##### line

<description>**optional** *null | DataMarkerLineCfg* </description>

line 设置。当设置为：`null` 时，不展示 line 标识。

***DataMarkerLineCfg*** 类型定义如下：

```ts
// 当前只支持对 line 的样式以及长度进行设置。
type DataMarkerPointCfg = {
  style?: ShapeAttrs;
  length?: number;
}
```

##### text

<description>**optional** *null | AnnotationTextCfg* </description>

DataMareker 辅助标记上的文本设置。当设置为：`null` 时，不展示文本标识。

***AnnotationTextCfg*** 类型定义如下：

```ts
// 当前只支持对 line 的样式以及长度进行设置。
type AnnotationTextCfg = {
  /** 文本内容*/
  content?: string;
  /** 自动旋转，沿着线的方向，默认 true */
  autoRotate?: boolean;
  /** 文本的偏移 x */
  offsetX?: number;
  /** 文本的偏移 y */
  offsetY?: number;
  /** 字体样式，参考绘图属性 */
  style?: object;
};
```

##### autoAdjust

<description>**optional** *boolean* </description>

文本超出绘制区域时，是否自动调节文本方向。

##### direction

<description>**optional** *upward | downward* </description>

朝向。

```plain

`markdown:docs/common/annotations/base-annotation.zh.md`
```


#### 💠 DataRegion Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'dataRegion',` 标识为：特殊数据区间标注，多用于折线图和面积图。

##### position

<description>**required** *\[string, string] | Datum | ((xScale, yScales) => \[string, string])*</description>

DataMarker 标注位置，参考 Text Annotation 标注的 `position` 设置。

[Example](/zh/examples/component/annotation#text-annotation1)

##### lineLength

<description> *number* **optional** *default:* `0`</description>

line 长度。

##### region

<description> *null | { style?: ShapeAttrs }* **optional** *default:* `0`</description>

标注区间的配置。点击 [ShapeAttrs](/zh/docs/api/shape/shape-attrs) 查看详细样式配置。

##### text

<description> *null | EnhancedTextCfg* **optional** *default:* `0`</description>

文本的配置。

##### top

<description>**optional** *boolean* </description>

指定 annotation 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### offsetX

<description>**optional** *number* </description>

x 轴方向的偏移量。

##### offsetY

<description>**optional** *number* </description>

y 轴方向的偏移量。

##### animate

<description>**optional** *boolean* </description>

是否进行动画。

##### animateOption

<description>**optional** *object* </description>

动画参数配置，当且仅当 `animate` 属性为 true，即动画开启时生效。，参考[动画参数配置](/zh/docs/api/options/animation)


#### 💠 Region Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'regionFilter',` 标识为：区域着色，将图表中位于矩形选区中的图形元素提取出来，重新着色。

##### start

<description>**optional** *AnnotationPosition* </description>

起始位置，一般用于 line、region 等。

***AnnotationPosition*** 类型定义如下：

```ts
type AnnotationPositionCallback = (
  xScales: Scale[] | Record<string, Scale>,
  yScales: Scale[] | Record<string, Scale>
) => [number | string, number | string];

// types of annotation
type AnnotationPosition =
  | [number | string, number | string]
  | Record<string, number | string>
  | AnnotationPositionCallback;
```

除了指定原始数据之外，还可以使用预设定数据点，如：

*   'min': 最小值，minimum value.
*   'max': 最大值，maximum value.
*   'mean': 平均值，average value.
*   'median': 中位值，median value.
*   'start': 即 0.
*   'end': 即 1.

[Example](/zh/examples/component/annotation#line-annotation-position)

##### end

<description>**optional** *AnnotationPosition* </description>

结束位置，一般用于 line、region 等。具体配置属性参考: [start](#start)

##### style

<description>**optional** *object* </description>

辅助线样式属性，参考[绘图属性](/zh/docs/api/graphic-style)

##### color

<description>**optional** *string* </description>

染色色值，一般用于 regionFilter。

##### apply

<description>**optional** *string\[]* </description>

设定 regionFilter 只对特定 geometry 类型起作用，如 apply: \['area']，一般用于 regionFilter。

##### top

<description>**optional** *boolean* </description>

指定 annotation 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### offsetX

<description>**optional** *number* </description>

x 轴方向的偏移量。

##### offsetY

<description>**optional** *number* </description>

y 轴方向的偏移量。

##### animate

<description>**optional** *boolean* </description>

是否进行动画。

##### animateOption

<description>**optional** *object* </description>

动画参数配置，当且仅当 `animate` 属性为 true，即动画开启时生效。，参考[动画参数配置](/zh/docs/api/options/animation)


#### 💠 Html Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'html',`。自定义任意 HTML 类型的图形标记，通过 option 中的 html 配置来在图表中使用 HTML DOM 元素来添加图形标记。option 配置如下：

##### container

<description> *string* | *HTMLElement* **optional** </description>

可选，自定义 HTML 图形标记的容器元素

##### html

<description> *string* | *HTMLElement* | *((container: HTMLElement, view: View) => void | string | HTMLElement)* </description>

自定义的图形标记的 HTML 元素，可为 HTML DOM 字符串，或 HTML 元素，或 html 回调函数

##### alignX

<description> *'left'* | *'middle'* | *'right'* **optional** *default:* 'left' </description>

DOM 元素在 X 方向的对齐方式

##### alignY

<description> *'top'* | *'middle'* | *'bottom'* **optional** *default:* 'top'</description>

DOM 元素在 Y 方向的对齐方式

##### offsetX

<description> *number* **optional** </description>

X 方向的偏移

##### offsetY

<description> *number* **optional** </description>

Y 方向的偏移


#### 💠 Shape Annotation

##### type

<description>**optional** *string*</description>

需要指定 `type: 'shape',`。自定义任意类型的图形标记，通过 option 中的 render 回调函数来在图表区域绘制自定义标记。option 配置如下：

##### render

<description> *(
container: IGroup,
view: View,
helpers: { parsePosition: (position: \[string | number, string | number] | Datum) => Point }
) => void* </description>

自定义标记的绘制 render 函数，其他 *container* 为标记绘制的父容器, *view* 为图形实例, *helpers* 为辅助函数，其他 *parserPosition* 可以用来计算数据点对应的坐标位置

##### top

<description>**optional** *boolean* </description>

指定 annotation 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### offsetX

<description>**optional** *number* </description>

x 轴方向的偏移量。

##### offsetY

<description>**optional** *number* </description>

y 轴方向的偏移量。

##### animate

<description>**optional** *boolean* </description>

是否进行动画。

##### animateOption

<description>**optional** *object* </description>

动画参数配置，当且仅当 `animate` 属性为 true，即动画开启时生效。，参考[动画参数配置](/zh/docs/api/options/animation)


#### slider

> Only line plot, area plot and dual-axes plot are supported.

| Properties      | Type           | Description                             |
| --------------- | -------------- | --------------------------------------- |
| start           | *number*       | Default starting position               |
| end             | *number*       | Default ending position                 |
| height          | *number*       | Slider height                           |
| trendCfg        | *TrendCfg*     | Configuration of background trends      |
| backgroundStyle | *object*       | Background style, reference[Graphic Style](/en/docs/api/graphic-style)                        |
| foregroundStyle | *object*       | Foreground style, reference[Graphic Style](/en/docs/api/graphic-style)                        |
| handlerStyle    | *HandlerStyle* | Handler configuration                   |
| textStyle       | *object*       | Text style, reference[Graphic Style](/en/docs/api/graphic-style)                              |
| minLimit        | *number*       | Lower limit of sliding position allowed |
| maxLimit        | *number*       | Upper limit of sliding position allowed |
| formatter       | *Function*     | Slider text formatting function         |

Types of ***TrendCfg***  are as follow:

| Properties      | Type       | Description                    |
| --------------- | ---------- | ------------------------------ |
| data            | *number\[]* | Trend data                     |
| smooth          | *boolean*  | Whether smooth                 |
| isArea          | *boolean*  | Whether area                   |
| backgroundStyle | *object*   | Background style configuration, reference[Graphic Style](/en/docs/api/graphic-style) |
| lineStyle       | *object*   | Line style configuration, reference[Graphic Style](/en/docs/api/graphic-style)       |
| areaStyle       | *object*   | Area style configuration, reference[Graphic Style](/en/docs/api/graphic-style)       |

Types of ***HandlerStyle*** are as follow:

| Properties | Type     | Description              |
| ---------- | -------- | ------------------------ |
| width      | *number* | Width of slider handler  |
| height     | *number* | Height of slider handler |
| fill          | *string* | Fill color of handler                           |
| highLightFill | *string* | Highlight fill color of handler (when hovering) |
| stroke        | *string* | Stroke color of handler                         |
| opacity       | *number* | Fill opacity of handler                         |
| radius        | *number* | Radius of handler rect                          |
| cursor        | *string* | Style of cursor (when hovering handler)         |


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

| **Properties**        | **Type**   | **Description**                                                                                               |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| defaultColor          | *string*   | Theme color                                                                                                   |
| padding               | *number*   | number\[]                                                                                                      |
| fontFamily            | *string*   | Chart font                                                                                                    |
| colors10              | *string\[]* | Category color palette, used when the number of categories is less than 10                                    |
| colors20              | *string\[]* | Category color palette, used when the number of categories is greater than 10                                 |
| columnWidthRatio      | *number*   | General histogram width ratio, 0-1 range of values                                                            |
| maxColumnWidth        | *number*   | Maximum width of histogram, pixel value                                                                       |
| minColumnWidth        | *number*   | Minimum width of histogram, pixel value                                                                       |
| roseWidthRatio        | *number*   | Rose width ratio, 0-1 range of value                                                                          |
| multiplePieWidthRatio | *number*   | Multilayer pie and loop ratio, 0-1 range values                                                               |
| geometries            | *object*   | Configure the style of each shape for each Geometry, including the default style and the style for each state |
| components            | *object*   | Configure theme samples for axes, legends, tooltips, and annotations                                          |
| labels                | *object*   | Configure the theme style of the label under Geometry                                                         |
| innerLabels           | *object*   | Configure Geometry to display the Labels theme style inside the graph                                         |
| pieLabels             | *object*   | Configure the theme style of pie chart labels                                                                 |

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
| `backgroundColor`       | *string* | Background color                                  |
| `brandColor`            | *string* | Brand color，默认取 10 色分类颜色色板的第一个颜色 |
| `paletteQualitative10`  | *string* | Qualitative palette，分类个数小于 10 时使用       |
| `paletteQualitative20`  | *string* | Qualitative palette，分类个数大于 10 时使用       |
| `paletteSemanticRed`    | *string* | Semantic red                                      |
| `paletteSemanticGreen`  | *string* | Semantic green                                    |
| `paletteSemanticYellow` | *string* | Semantic yellow                                   |
| `fontFamily`            | *string* | fontFamily                                        |

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
