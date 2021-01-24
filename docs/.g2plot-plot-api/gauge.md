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

<description>**optional** _number\[] | number | 'auto'_</description>

Set `padding` value of the canvas. You can also use `auto`.

#### appendPadding

<description>**optional** _number\[] | number_</description>

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

| Properties | Type        | Description                    |
| ---------- | ----------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ticks      | _number\[]_ | Dashboard auxiliary arc style. |
| color      | \*string    | string\[]\*                    | The color swatches of auxiliary arcs are selected in accordance with the color swatches; When ticks are set, color cannot be used as a callback |

<playground rid="gauge" path="progress-plots/gauge/demo/basic.ts"></playground>

#### axis

<description>**optional** _object_</description>

Indicates auxiliary shaft styles.

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

<description>**optional** _string | Function_ _default:_ `false`</description>

Specify a tick calculation method, or customize a tick calculation method. Built-in tick calculations include `cat`、`time-cat`、 `wilkinson-extended`、`r-pretty`、`time`、`time-pretty`、`log`、`pow`、`quantile`、`d3-linear`。

##### position

<description>**optional** _`top` | `bottom` | `left` | `right`_</description>

For Cartesian coordinates, set the position of the coordinate axes.

##### line

<description>**optional** _object_</description>

Coordinate axis configuration item, NULL means not displayed.

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

A configuration item for a coordinate subscale. NULL indicates that it is not displayed.

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

A configuration item for the title, NULL means not to be displayed.

| Properties | Type         | Description                                                        |
| ---------- | ------------ | ------------------------------------------------------------------ |
| offset     | _number_     | The distance of the title from the coordinate axis                 |
| spacing    | _lineStyle_  | The distance between the title and the text on the coordinate axis |
| style      | _shapeStyle_ | Title text configuration items                                     |
| autoRotate | _boolean_    | Whether to rotate automatically or not                             |

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
| --- | --- | --- | --- | --- | --- | --- |
| type | _string_ | When a user uses a custom label type, need to declare the specific type, otherwise you will use the default label type rendering (pie chart label support `inner | outer | spiders`) |
| offset | _number_ | label offset |
| offsetX | _number_ | The offset distance of the label from the data point in the X direction |
| offsetY | _number_ | The offset distance of the label from the data point in the Y direction |
| content | \*string | IGroup | IShape | GeometryLabelContentCallback\* | Text content that is displayed, if not declared, is displayed according to the value of the first field participating in the mapping |
| style | object | Label text graphic property style |
| autoRotate | _string_ | Whether to rotate automatically, default true |
| rotate | _number_ | Text rotation Angle |
| labelLine | \*null | \_boolean\* | object\_ | Used to set the style property of the text connector. NULL indicates that it is not displayed. |
| labelEmit | _boolean_ | Only applies to text in polar coordinates, indicating whether the text is radially displayed according to the Angle. True means on and false means off |
| layout | \*'overlap' | 'fixedOverlap' | 'limitInShape'\* | Text layout type, support a variety of layout function combination. |
| position | \*'top' | 'bottom' | 'middle' | 'left' | 'right'\* | Specifies the position of the current Label relative to the current graphic |
| animate | \*boolean | AnimateOption\* | Animation configuration. |
| formatter | _Function_ | Format function |
| autoHide | _boolean_ | Whether to hide it automatically, default to false |
|  |

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

##### grid

<description>**optional** _object_</description>

Axis grid line configuration item. NULL means not shown.

| Properties | Type | Description |
| --- | --- | --- | --- |
| line | _lineStyle_ | The style of the line |
| alternateColor | \*string | string\[]\* | The fill color between two grid lines |
| closed | _boolean_ | Whether to close the grid for circle |
| alignTick | _boolean_ | If the value is false, it will be displayed between the two scales |

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

##### verticalFactor

<description>**optional** _number_</description>

Mark the direction of the label on the axis, with 1 to the left and -1 to the right.

##### verticalLimitLength

<description>**optional** _number_</description>

Configuring the maximum limit length in the vertical direction of the coordinate axis has a significant impact on text adaptation.

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

| Properties | Type  | Description   |
| ---------- | ----- | ------------- | ------- |
| title      | false | StatisticText | title   |
| content    | false | StatisticText | content |

StatisticText

| Properties | Type     | Description                       |
| ---------- | -------- | --------------------------------- |
| style      | object   | Styles for statistical text       |
| formatter  | Function | The formatted content of the text |
| rotate     | number   | Rotation Angle                    |
| offsetX    | number   | X offset                          |
| offsetY    | number   | Y offset                          |
