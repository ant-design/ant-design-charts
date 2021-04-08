



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


### Data Mapping

#### data

<description>**required** *array object*</description>

Configure the data source. The data source is a collection of objects. For example:`[{ time: '1991'，value: 20 }, { time: '1992'，value: 20 }]`。

#### xField

<description>**required** *string*</description>

The name of the data field corresponding to the graph in the x direction, usually the field corresponding to the horizontal coordinate axis. For example, to see how many people are in different classes, the class field is the corresponding xField.

#### yField

<description>**required** *string*</description>

The name of the data field corresponding to the graph in the y direction, usually the field corresponding to the vertical coordinate axis. For example, to see the number of students in different classes, the number field is the corresponding yField.


#### seriesField

<description>**optional** *string*</description>

Grouping field. It is the same meaning as groupField、colorField in Grouped Bar, and the same as stackField、colorField in Stacked Bar.

To avoid issues related to stacked bars order, make sure each `yField` gets a bar defined for each possible value of `seriesField`, even if `xField` is 0.

Example：

```ts
config = {
    data: [
        {
            x: 0,
            y: "bar",
            color: "red"
        },
        {
            x: 40,
            y: "bar",
            color: "yellow"
        },
        {
            x: 2,
            y: "foo",
            color: "red"
        },
        {
            x: 40,
            y: "foo",
            color: "yellow"
        }
    ].reverse(),
    isStack: true,
    xField: "x",
    yField: "y",
    seriesField: "color",
    color: _ref => _ref.color
};
```

#### groupField

<description>**optional** *string*</description>

Grouping field for Stacked Bar and Grouped Bar. Its priority is higher than seriesField. When isGroup is `true`, the data will be grouped by `groupField`.

#### isGroup

<description>**optional** *boolean*</description>

Whether the plot is Grouped Bar.

#### isStack

<description>**optional** *boolean*</description>

Whether the plot is Stacked Bar.

#### isRange

<description>**optional** *boolean*</description>

Whether the plot is Range Bar.

#### isPercent

<description>**optional** *boolean*</description>

Whether the plot is Percent Bar. When isPercent is `true`, isStack must be `true`.

#### meta

<description>**optional** *object*</description>

Configure the meta of each data field of the chart in global, to define the type and presentation of data. Configuration of the meta will affect the text content of all components.

| Properties | Type       | Description                                              |
| ---------- | ---------- | -------------------------------------------------------- |
| alias      | *string*   | alias of the data field                                  |
| formatter  | *function* | callback function to format all values of the data field |
| values     | *string\[]* | enumerate all the values of the data field               |
| range      | *number\[]* | mapping range of the data field, default: \[0,1]          |

See also the [Meta Options](/guide/common#meta) to learn more about configuration of `meta`.


### Graphic Style

#### color

<description>**optional** *string | string\[] | Function*</description>

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


#### minBarWidth

<description>**optional**, *number*</description>

Specify the min width of bar, pixel value. Auto adapt by default.

#### maxBarWidth

<description>**optional**, *number*</description>

Specify the max width of bar, pixel value. Auto adapt by default.

#### barStyle

<description>**optional** *StyleAttr | Function*</description>

Bar graphic Style.

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

More documents about `ShapeStyle`, see [Graphic Style](/guide/graphic-style).


#### barBackground.style

<description>**optional** *StyleAttr*</description>

Background style of bar graphic. **Attention**: It doesn't work when `type="line"` in Radial-bar plot.

Example:

```ts
{
  barBackground: {
    style: {
      fill: '#000',
      fillOpacity: 0.25,
    }
  }
}
```


#### barWidthRatio

<description>**optional** *number*</description>

The ratio of bar width( Range:\[0-1] ).

#### marginRatio

<description>**optional** *number*</description>

The ratio of spacing between columns in groups( Range:\[0-1] ), only for Grouped Bar.

#### state

<description>**optional** *object*</description>

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
| type           | \_`x` | `y` | `xy`\_ | Crosshairs Type: 'X' represents the auxiliary line on the X axis, 'Y' on the Y axis           |
| line           | *lineStyle*            | The configuration item for line, see more [*ShapeAttrs*](/guide/graphic-style#configure-line-styles)      |
| text           | *textStyle*            | Guideline text configuration, support callback                                                |
| textBackground | *textBackgroundStyle*  | Guideline text background configuration                                                       |
| follow         | *boolean*              | Whether the guide line follows the mouse. Default is false, that is, to locate the data point |

****textStyle****

<!--文本样式-->

| Properties    | Type            | Description                                                                                                                                                                                                 |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fontSize      | *number*        | Font size                                                                                                                                                                                                   |
| fontFamily    | *string*        | Font family                                                                                                                                                                                                 |
| fontWeight    | *number*        | Font weight                                                                                                                                                                                                 |
| lineHeight    | *number*        | Line height                                                                                                                                                                                                 |
| textAlign     | *string*        | Text align, supported `center` | `end` | `left` | `right` | `start`, default `start`                                                                                                                    |
| fill          | *string*        | Fill color for text                                                                                                                                                                                         |
| fillOpacity   | *number*        | Fill transparency for text                                                                                                                                                                                  |
| stroke        | *string*        | Stroke text                                                                                                                                                                                                 |
| lineWidth     | *number*        | The width of the text stroke                                                                                                                                                                                |
| lineDash      | \[number,number] | For the dashed line configuration of the stroke, the first value is the length of each segment of the dashed line, and the second value is the distance between segments. LineDash sets \[0,0] to no stroke. |
| lineOpacity   | *number*        | Stroke transparency                                                                                                                                                                                         |
| opacity       | *number*        | Overall transparency of the text                                                                                                                                                                            |
| shadowColor   | *string*        | Shadow color                                                                                                                                                                                                |
| shadowBlur    | *number*        | Shadow blur                                                                                                                                                                                                 |
| shadowOffsetX | *number*        | Sets the horizontal distance between the shadow and the text                                                                                                                                                |
| shadowOffsetY | *number*        | Sets the vertical distance between the shadow and the text                                                                                                                                                  |
| cursor        | *string*        | Mouse style. With CSS mouse styles, default 'default'.                                                                                                                                                      |

Example code, using label.style configuration:

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


***textBackgroundStyle***

| Properties | Type                 | Description                                 |
| ---------- | -------------------- | ------------------------------------------- |
| padding    | *number | number\[]* | White space around the background of a text |
| style      | *shapeStyle*         | The configuration item for line, see more [*ShapeAttrs*](/guide/graphic-style)             |

##### showMarkers

<description>**optional** *boolean* *default:* `true`</description>

Whether to render TooltipMarkers.

##### marker

<description>**optional** *ShapeAttrs*</description>

TooltipMarker style configuration.

Please refer to the style configuration [ShapeAttrs](/guide/graphic-style)

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

##### customContent

<description>**optional** *Function*</description>

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


#### label

<!--label样式-->

| Properties | Type                                                         | Description                                                                                                                                                      |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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
| position   | *'top' | 'bottom' | 'middle' | 'left' | 'right'*         | Specifies the position of the current Label relative to the current graphic                                                                                      |
| animate    | *boolean | AnimateOption*                                   | Animation configuration.                                                                                                                                         |
| formatter  | *Function*                                                   | Format function                                                                                                                                                  |
| autoHide   | *boolean*                                                    | Whether to hide it automatically, default to false                                                                                                               |

Types of ***LabelLineCfg*** are as follow: (Go [ShapeAttrs](/zh-CN/guide/graphic-style) see more details about *ShapeAttrs*)

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


#### axis

Same for xAxis and yAxis. **Note**: Since `DualAxes` or `BidirectionalBar` has double Y-axes, the yAxis is a object which takes the field in yField as the 'key'.

##### position

<description>**optional** *`top` | `bottom` | `left` | `right`*</description>

For Cartesian coordinates, set the position of the coordinate axes.

##### label

<description> *AxisLabelCfg | null* **optional** </description>

Configurations related to axis label. Set this to `null` to prevent the axis label from appearing. The details of \_ AxisLabelCfg\_ are as follows:

| Properties   | Type                                                     |         |   |
| ------------ | -------------------------------------------------------- | ------- | --------------------------------------------------------- |
| style        | *[ShapeAttrs](/zh-CN/guide/graphic-style)*               | -       | Axis label text graphic property style                    |
| offset       | *number*                                                 | -       | Axis label offset                                         |
| rotate       | *number*                                                 | -       | Axis label text rotation Angle                            |
| autoRotate   | *boolean*                                                | `true`  | Whether to rotate automatically, default true             |
| autoHide     | *boolean*                                                | `false` | Whether to hide it automatically, default to false        |
| autoEllipsis | *boolean*                                                | `false` | Whether to ellipsis label when overflow, default to false |
| formatter    | *`(text: string, item: ListItem, index: number) => any`* | `false` | Format function                                           |

##### verticalFactor

<description>**optional** *number*</description>

Mark the direction of the label on the axis, with 1 to the left and -1 to the right (Only works in vertical axis).

##### verticalLimitLength

<description>**optional** *number*</description>

Configuring the maximum limit length in the vertical direction of the coordinate axis has a significant impact on text adaptation.

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

Go [ShapeAttrs](/zh-CN/guide/graphic-style) see more details about *ShapeAttrs*. The params of *ShapeAttrsCallback* are as follow：

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

Go [ShapeAttrs](/zh-CN/guide/graphic-style) see more details about *ShapeAttrs*. The params of *ShapeAttrsCallback* are as follow：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

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

More documents about `ShapeStyle`, see [Graphic Style](/guide/graphic-style).


***label***

<description>**optional** *object*</description>

A configuration item for the text label. NULL indicates that it is not displayed.

<!--label样式-->

| Properties | Type                                                         | Description                                                                                                                                                      |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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
| position   | *'top' | 'bottom' | 'middle' | 'left' | 'right'*         | Specifies the position of the current Label relative to the current graphic                                                                                      |
| animate    | *boolean | AnimateOption*                                   | Animation configuration.                                                                                                                                         |
| formatter  | *Function*                                                   | Format function                                                                                                                                                  |
| autoHide   | *boolean*                                                    | Whether to hide it automatically, default to false                                                                                                               |

Types of ***LabelLineCfg*** are as follow: (Go [ShapeAttrs](/zh-CN/guide/graphic-style) see more details about *ShapeAttrs*)

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

Layout

##### position

<description>**optional** *string* </description>

The position of legend is optional:

*   `top`
*   `top-left`
*   `top-right`
*   `right`
*   `right-top`
*   `right-bottom`
*   `left`
*   `left-top`
*   `left-bottom`
*   `bottom`
*   `bottom-left`
*   `bottom-right`

##### background

<description>**optional** *LegendBackgroundCfg* </description>

Background box configuration item. *LegendBackgroundCFG* is configured as follows:

| Properties | Type               | Default | Description                                             |
| ---------- | ------------------ | ------- | ------------------------------------------------------- |
| padding    | number | number\[] | -       | White space in the background                           |
| style      | object             | -       | Background style configuration, Reference Graphic Style |

##### flipPage

<description>**optional** *boolean* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>,whether to page when there are too many legend items.

##### pageNavigator

<description>**optional** *object* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configure the style of page navigator, it works when legend is in flipPage. Types of *LegendPageNavigatorCfg* are as follow:

| Properties | Type     | Default | Description          |
| ------ | --------------------- | ------ | -------------- |
| marker.style | *PageNavigatorMarkerStyle* | -      | 分页器指示箭头配置项    |
| text.style   | *PageNavigatorTextStyle*   | -      | The text style of page info.    |

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

##### handler

<description>**optional** *ContinueLegendHandlerCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, configuration items for slider *ContinueLegendHandlerCfg* is configured as follows:

| Properties | Type     | Default | Description                                                                 |
| ---------- | -------- | ------- | --------------------------------------------------------------------------- |
| size       | *number* | -       | Slider size                                                                 |
| style      | *object* | -       | Slider configuration, reference [Graphic Style](/zh-CN/guide/graphic-style) |

##### itemHeight

<description>**optional** *number* *default:* `null`</description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, lengend item height, default null。

##### itemWidth

<description>**optional** *number* *default:* `null`</description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, legend item width, default null, automatic calculation.

##### itemName

<description>**optional** *LegendItemNameCfg* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configure the legend item name text. *LegendItemNameCfg* is configured as follows：

| Properties | Type       | Default | Description                                                                      |
| ---------- | ---------- | ------- | -------------------------------------------------------------------------------- |
| style      | *object*   | -       | Text style configuration, referecnce [Graphic Style](/zh-CN/guide/graphic-style) |
| spacing    | *number*   | `false` | The spacing between legend item marker and the following name                    |
| formatter  | *function* | -       | Format function, `(text: string, item: ListItem, index: number) => any;`         |

##### itemSpacing

<description>**optional** *number* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, control the horizontal spacing of legend items.

##### itemValue

<description>**optional** *LegendItemValueCfg* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configuration item of legend item Value added value. *LegendItemValueCfg* Configuration is as follows:

| Properties | Type       | Default | Description                                                                          |
| ---------- | ---------- | ------- | ------------------------------------------------------------------------------------ |
| style      | *object*   | -       | Text style configuration item, reference [Graphic Style](/zh-CN/guide/graphic-style) |
| alignRight | *boolean*  | `false` | Right-align, false by default, only when setting legend item width.                  |
| formatter  | *function* | -       | Format function, `(text: string, item: ListItem, index: number) => any;`             |

##### animate

<description>**optional** *boolean* </description>

Whether to turn on the animation switch.

##### animateOption

<description>**optional** *ComponentAnimateOption* </description>

Animation parameter configuration, which takes effect if and only if the animate property is true, that is, when the animation is turned on. Animation configuration details are as follows:

<div class='custom-api-docs'>

*ComponentAnimateOption* is configured for each component animation type.

```ts
interface ComponentAnimateOption {
  appear?: ComponentAnimateCfg; // The entry animation when the chart first loads
  enter?: ComponentAnimateCfg; // After the chart is drawn and updated, the incoming animation of the new graph is generated
  update?: ComponentAnimateCfg; // After the chart is drawn and the data has changed, the updated animation of the graph with the state changed
  leave?: ComponentAnimateCfg; // After the chart is drawn and the data is changed, the destruction animation of the graph is destroyed
}

interface ComponentAnimateCfg {
  duration?: number; // Duration of the first animation
  easing?: string; // Easing method used for the first animation.
  delay?: number; // Delay before updating the animation
}
```

Where 'animation' passes in the name of the animation function, the built-in default animation function is shown in the table below, and you can also customize the animation function through 'registerAnimation'.

**Effects of animation**, go to see [Examples](/en/examples/dynamic-plots/animation) for more information

| Animation         | Effect      | Description                                 | Not suitable |
| ----------------- | -------| --------------- |-------- |
| 'fade-in'         | ![fade-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*LTRRRL8JwfQAAAAAAAAAAABkARQnAQ)                                                                                                          | 渐现动画。                                                       | |
| 'fade-out'        | ![fade-out.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*s4Y4S5JJ6WEAAAAAAAAAAABkARQnAQ)                                                                                                         | 渐隐动画。                                                       | |
| 'grow-in-x'       | ![grow-in-x.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*vhRVSLxDqU8AAAAAAAAAAABkARQnAQ)                                                                                                        | 容器沿着 x 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。   | 不适用于饼图、玫瑰图等 polar、theta 坐标系下的图表以及柱、条状图 |
| 'grow-in-y'       | ![grow-in-y.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*L6mkQa3aG64AAAAAAAAAAABkARQnAQ)                                                                                                        | 容器沿着 y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。   | 不适用于饼图、玫瑰图等 polar、theta 坐标系下的图表以及柱、条状图 |
| 'grow-in-xy'      | ![grow-in-xy.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*LfPrQouGwYIAAAAAAAAAAABkARQnAQ)                                                                                                       | 容器沿着 x,y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。 ||
| 'scale-in-x'      | ![scale-in-x.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*oiaGTLx-dNcAAAAAAAAAAABkARQnAQ)                                                                                                       | 单个图形沿着 x 方向的生长动画。                                  ||
| 'scale-in-y'      | ![scale-in-y.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*T6mLTY3o9OoAAAAAAAAAAABkARQnAQ)                                                                                                       | 单个图形沿着 y 方向的生长动画。                                  ||
| 'wave-in'         | ![wave-in-p.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*W5CdQIWw-M4AAAAAAAAAAABkARQnAQ)![wave-in-r.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*z9jjQY-lHcwAAAAAAAAAAABkARQnAQ) | 划入入场动画效果，不同坐标系下效果不同。                         ||
| 'zoom-in'         | ![zoom-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*wc4dQp4E6vkAAAAAAAAAAABkARQnAQ)                                                                                                          | 沿着图形中心点的放大动画。                                       ||
| 'zoom-out'        | ![zoom-out.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*PZ2gTrkV29YAAAAAAAAAAABkARQnAQ)                                                                                                         | 沿着图形中心点的缩小动画。                                       ||
| 'path-in'         | ![path-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*gxZ1RIIMtdIAAAAAAAAAAABkARQnAQ)                                                                                                          | path 路径入场动画。                                              ||
| 'position-update' |                                                                                                                                                                                                                | 图形位置移动动画。                                               | 限用于图表标签 label 上 |

</div>


##### label

<description>**optional** *ContinueLegendLabelCfg* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, a configuration item for the text, *ContinueLegendLabelCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                                                                                                                                                                                      |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| align      | *string* | -       | The alignment of text with the slider <br/> - rail : Align with the slide rail, at both ends of the slide rail <br/> - top, bottom: Legends are valid when laid out horizontally <br/> - left, right: Legends are valid when laid out vertically |
| style      | *object* | -       | Text style configuration item, reference [Graphic Style](/zh-CN/guide/graphic-style)                                                                                                                                                             |
| spacing    | *number* | -       | The distance between the text and the slide                                                                                                                                                                                                      |

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


##### min

<description>**optional** *number* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the minimum value of the range.

##### max

<description>**optional** *number* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the maximum value of the range.

##### maxWidth

<description>**optional** *number* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum width of the legend item.

##### maxHeight

<description>**optional** *number* </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum height of the legend item.

##### offsetX

<description>**optional** *number* </description>

Legends offset in the x direction.

##### offsetY

<description>**optional** *number* </description>

Legends offset in the y direction.

##### rail

<description>**optional** *ContinueLegendRailCfg* </description>
Apply to <tag color="green" text="Classification legend">Classification legend</tag>, a style configuration item for the legend slider (background).*ContinueLegendRailCfg* Configuration is as follows:

| Properties    | Type     | Default | Description                                                                                                                                |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| type          | *string* | -       | rail type: color and size                                                                                                                  |
| size          | *number* | -       | The width of the slide rail                                                                                                                |
| defaultLength | *number* | -       | The default length of the slider. When maxWidth,maxHeight is limited, this property is not used and the length is automatically calculated |
| style         | *object* | -       | Slide rail style, refer to [Graphic Style](/zh-CN/guide/graphic-style)                                                                     |

##### reversed

<description>**optional** *boolean* </description>
Apply to <tag color="green" text="Classification legend">Classification legend</tag>, whether to display legend items in reverse order.

##### slidable

<description>**optional** *boolean* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, whether the slider can slide.

##### title

<description>**optional** *G2LegendTitleCfg* </description>

Legend title configuration is not displayed by default. *G2LegendTitleCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                         |
| ---------- | -------- | ------- | ----------------------------------------------------------------------------------- |
| spacing    | *number* | -       | The spacing between the title and the legend item                                   |
| style      | *object* | -       | Text style configuration item, refer to [Graphic Style](/zh-CN/guide/graphic-style) |

##### track

<description>**optional** *ContinueLegendTrackCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the color block style configuration item for the range. *ContinueLegendTrackCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                     |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------- |
| style      | *object* | -       | Selected range of styles, reference [Graphic Style](/zh-CN/guide/graphic-style) |

##### values

<description>**optional** *number\[]* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, selected value.

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

<description>**required** *string* </description>

Type of annotation, text | line | image | region | dataMarker | dataRegion | regionFilter | shape | html.

##### position

<description>**required** *object* </description>

The position of annotation.

*   In the first case, object uses the raw data corresponding to graphs x and y. For example: { time: '2010-01-01', value: 200 };
*   The second way is to configure the position \[x, y] in an array. Based on the presence of the values in the array, the following forms are used:
    1、Corresponding to the original data in the data source;
    2、Key words: 'min', 'Max', 'median', 'median', 'start' and 'end' respectively represent the maximum value, minimum value, median value of data and the start and end of coordinate system interval;
    3、X, y are percentages, such as 30%, located in the drawing area (that is, in the coordinate system).
    The 1 and 2 types of data can be used interchangeably, but when using the percentage form, x and y must both be in the percentage form.
*   The third, callback function, can dynamically determine the position of the auxiliary element, applied to dynamic data update, the position of the auxiliary element changes according to the data.

##### top

<description>**optional** *boolean* *default:* `false`</description>

If it is drawn at the top of the canvas, the default is false, meaning it is drawn at the bottom.

##### animate

<description>**optional** *boolean* </description>

Whether to enable animation.

##### offsetX

<description>**optional** *number* </description>

The offset in the x direction.

##### offsetY

<description>**optional** *number* </description>

The offset in the y direction.

##### start

<description>**optional** *Array* </description>

Starting position, commonly used for line, region, etc.

##### end

<description>**optional** *Array* </description>

End position, commonly used for line, region, etc.

```ts
{
  type: 'line',
  start: ['min', 'median'],
  end: ['max', 'median'],
},
```

##### style

<description>**optional** *object* </description>

The graph style properties refer to the Graphic Style.

##### src

<description>**optional** *string* </description>

Image path, used in image.

##### content

<description>**optional** *string* </description>

Text content, used in text.

##### rotate

<description>**optional** *number* </description>

The rotation Angle of text in radians.

##### maxLength

<description>**optional** *number* </description>

The maximum length of a text.

##### autoEllipsis

<description>**optional** *boolean* </description>

Whether the maxLength beyond is automatically omitted.

##### ellipsisPosition

<description>**optional** \_head | middle | tail \_ </description>

The location of the text truncation.

##### isVertical

<description>**optional** *boolean* </description>

The display position of the text in a two-dimensional coordinate system, whether it is displayed along the X axis or along the Y axis.

##### background

<description>**optional** *object* </description>

Text wrap box style Settings.

| Properties | Type                 | Default | Description                                                                 |
| ---------- | -------------------- | ------- | --------------------------------------------------------------------------- |
| style      | *object*             | -       | Text background style, reference[Graphic Style](/guide/graphic-style) |
| padding    | *number | number\[]* | -       | White space around the background of a text                                 |

##### color

<description>**optional** *string* </description>

Color value, usually used in RegionFilter.

##### apply

<description>**optional** *string\[]* </description>

RegionFilter is set to work only on a specific Geometry type, such as Apply: \['area'], which is generally used with RegionFilter.

##### autoAdjust

<description>**optional** *boolean* </description>

Whether to automatically adjust text orientation when text exceeds the drawn area.

##### direction

<description>**optional** *upward | downward* </description>

Orientation.

##### lineLength

<description>**optional** *number* </description>

Line length for dataRegion.

##### render

<description>**optional** *string* </description>

Render function of custom marking, other container is the parent container of marking drawing, view is the graphic instance, helpers is the auxiliary function, other parserPosition can be used to calculate the coordinate position corresponding to data points, used in shape.

##### container

<description>**optional** *string | HTMLElement* </description>

Container elements for custom HTML graphical tags for HTML

##### html

<description>**optional** *string | HTMLElement* </description>

Custom graphical markup of HTML elements, either as HTML DOM strings, or HTML elements, or HTML callback functions, for HTML

##### alignX

<description>**optional** *'left' | 'middle' | 'right'* </description>

Alignment of DOM elements in the X direction for HTML

##### alignY

<description>**optional** *left' | 'middle' | 'right'* </description>

Alignment of DOM elements in the Y direction for HTML


#### Conversion Tag

Applicable to base bar charts and base bar charts, the Conversion Rate component allows the user to focus on the rate of change in the data.

<description>**optional** *object* | *false*</description>

| Properties | Type                | Default | Description                                              |
| ---------- | ------------------- | ------- | -------------------------------------------------------- | ----------------------------------------------- |
| size       | *number*            | -       | Conversion rate Component dimensions                     |
| spacing    | *number*            | -       | Component and column spacing                             |
| offset     | *number*            | -       | Component and axis spacing                               |
| arrow      | *ArrowCfg | false* | -       | Arrow shape configuration, false does not display arrows |
| text       | *TextCfg | false*  | No      | -                                                        | Text configuration, false does not display text |

ArrowCfg configuration is as follows:

| Properties | Type     | Default | Description       |
| ---------- | -------- | ------- | ----------------- |
| headSize   | *number* | -       | Size of the arrow |
| style      | *object* | -       | Arrow style       |

TextCfg configuration is as follows:

| Properties | Type                                   | Default | Description                        |
| ---------- | -------------------------------------- | ------- | ---------------------------------- |
| headSize   | *number*                               | -       | Size of the arrow                  |
| style      | *object*                               | -       | Arrow style                        |
| formatter  | *(prev:number, next:number) => string* | -       | Custom conversion rate calculation |

Please refer to the style configuration [ShapeAttrs](/guide/graphic-style)


#### Connected Area

Applicable to stacked bar charts and stacked bar charts, the link area component provides visual assistant identification by drawing the link area of the same field, which is convenient for data comparison.

<description>**optional** *object* | *false*</description>

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

Go [DEMO](/en/examples/general/theme#register-theme)


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
    cfg: { start: [{ trigger: 'element:click', action: 'tooltip:show' }] } 
  }
]
```

#### Remove the interaction

```ts
// 方式1: 关闭 tooltip 交互
interactions: [{ type: 'tooltip', enable: false }]

// 方式2:
plot.chart.removeInteraction('interaction-type');
```

Example:

```ts
// Removes legend filtering interaction
plot.chart.removeInteraction('legend-filter');
```
