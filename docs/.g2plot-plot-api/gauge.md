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

#### percent

<description>**required** _number_</description>

Indicator ratio data \[0-1].

#### radius

<description>**optional** _number_ _default:_ `0.95`</description>

The radius of the outer ring \[0-1] is calculated with respect to the minimum width and height of the canvas.

#### innerRadius

<description>**optional** _number_ _default:_ `0.9`</description>

The radius of the inner ring \[0-1] is calculated relative to the inner radius radius.

#### startAngle

<description>**optional** _number_ _default:_ `(-7 / 6) * Math.PI`</description>

The starting Angle of the disk.

#### endAngle

<description>**optional** _number_ _default:_ `(1 / 6) * Math.PI`</description>

The termination Angle of the disk.

### Plot Style

#### range

<description>**optional** _object_</description>

Dashboard auxiliary arc style.

| Properties | Type | Description |
| --- | --- | --- |
| ticks | _number\[]_ | Dashboard auxiliary arc style. |
| color | _string 、string\[]_ | The color swatches of auxiliary arcs are selected in accordance with the color swatches; When ticks are set, color cannot be used as a callback |
| width | _number_ | Setting the width of gauge range. Default using `'radius', 'innerRadius'` to calculate the width of range. |

<playground rid="gauge" path="progress-plots/gauge/demo/basic.ts"></playground>

#### type ✨

<description>**optional** _string_ _default_: `undefined`</description>

Display type of gauge. options: `meter`, default: `undefined`

#### meter ✨

<description>**optional** _object_</description>

It works when `type = 'meter'`. Properties are as followed:

| Properties | Type | Description | Default |
| --- | --- | --- | --- |
| steps | _number_ | The total step count | 50 |
| stepRatio | _number_ | 0 ~ 1. Represent the ratio between `step` and `gap`. `gap` is zero when `stepRatio` is setting to `1` | 0.5 |

<img src="https://gw.alipayobjects.com/zos/antfincdn/WBhwhNUzkg/image.png" width="400" align="center" style="display:flex;margin:0 auto;" alt="gauge">

#### gaugeStyle

<description>**optional** _StyleAttr 、 Function_</description>

Gauge graphic style.

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

### Plot Components

#### axis

<description>**optional** _object_</description>

Indicates auxiliary shaft styles.

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
| --- | --- | --- | --- | --- |
| type | _string_ | When a user uses a custom label type, need to declare the specific type, otherwise you will use the default label type rendering (pie chart label support `inner | outer | spiders`) |
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

| Properties   | Type                                                                   |         |
| ------------ | ---------------------------------------------------------------------- | ------- | --------------------------------------------------------- |
| style        | _[ShapeAttrs](/guide/graphic-style)_                                   | -       | Axis label text graphic property style                    |
| offset       | _number_                                                               | -       | Axis label offset                                         |
| rotate       | _number_                                                               | -       | Axis label text rotation Angle                            |
| autoRotate   | _boolean 、avoidCallback_                                              | `true`  | Whether to rotate automatically, default true             |
| autoHide     | _boolean 、avoidCallback 、 { type:string,cfg?:AxisLabelAutoHideCfg }_ | `false` | Whether to hide it automatically, default to false        |
| autoEllipsis | _boolean_                                                              | `false` | Whether to ellipsis label when overflow, default to false |
| formatter    | _`(text: string, item: ListItem, index: number) => any`_               | `false` | Format function                                           |

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

#### indicator

<description>**optional** _object_</description>

Dashboard indicator style configuration. Divided into components as follows:

- `pointer`：Pointer style configuration in a pointer
- `pin`：The disc style configuration in the indicator

They all have the following configuration items:

| Properties | Type   | Description |
| ---------- | ------ | ----------- |
| style      | object | ShapeStyle  |

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

#### statistic

<description>**optional** _object_</description>

Metric central text component.

| Properties | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| title      | _false 、 StatisticText_ | title       |
| content    | _false 、 StatisticText_ | content     |

StatisticText

| Properties | Type | Description |
| --- | --- | --- |
| style | _CSSStyleDeclaration_ | Styles for statistical text (css styles) |
| content | _string_ | Content of the text。Priority: `customHtml` > `formatter` > `content` |
| customHtml | _CustomHtml_ | custom content by using html，priority is higher than formatter |
| formatter | _Function_ | The formatted content of the text |
| rotate | _number_ | Rotation Angle |
| offsetX | _number_ | X offset |
| offsetY | _number_ | Y offset |

Type of **CustomHtml** is as follow:

```ts
type CustomHtml = (container: HTMLElement, view: View, datum: object, data: object[]) => string;
```
