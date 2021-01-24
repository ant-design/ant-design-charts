

## title: Scatter&#xA;order: 5

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


```ts
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/charts';

const DemoScatter: React.FC = () => {
  const data = [
    {
        country: 'Asia',
        year: '1750',
        value: 502
    },
    {
        country: 'Asia',
        year: '1800',
        value: 635
    },
    {
        country: 'Europe',
        year: '1750',
        value: 163
    },
    {
        country: 'Europe',
        year: '1800',
        value: 203
    }
];
const config = {
    data,
    meta: {
        year: {
            alias: '年份',
            range: [
                0,
                1
            ]
        },
        value: {
            alias: '数量',
            formatter: v => {
                return `${ v }个`;
            }
        }
    },
    xField: 'year',
    yField: 'value',
    colorField: 'country'
};
  return <Scatter {...config} />;
};

export default DemoScatter;


```

#### type

<description>**optional** *jitter | stack | symmetric | dodge* *default:* `jitter`</description>

Adjust the data.
Adjust types provided by G2Plot includes 'stack', 'dodge' 'jitter', 'symmetric'. Not recommended to modify.

#### colorField

<description>**optional** *string*</description>

The name of the data field corresponding to the dot color map.

### Geometry Style

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


#### sizeField

<description>**optional** *string*</description>

The name of the data field corresponding to the point size map.

#### size

<description>**optional** \_number | \[number, number] | Function\_</description>

<playground path="scatter/scatter/demo/color-mapping.ts" rid="rect"></playground>

Specifies the size of the point. If no sizeField is configured, specify one. When the Sizefiled is configured, the size array '\[minSize, maxSize]' can be specified, or the corresponding value can be set through the callback function method.

```ts
// Set a single size
{
  size: 10
}
// size range
{
  sizeField: 'weight',
  size: [2, 10],
}
// Function
{
  sizeField: 'weight',
  size: (weight) => {
    // TODO
    return Math.floor(weight / 100);
  }
}
```

#### shapeField

<description>**optional** *string*</description>

The name of the data field corresponding to the dot shape map.

#### shape

<description>**optional** \_string | string\[] | Function\_</description>

<playground path="scatter/bubble/demo/quadrant.ts" rid="rect-quadrant"></playground>

Specifies the size of the point. If no sizeField is configured, specify one. When the Sizefiled is configured, the size array '\[minSize, maxSize]' can be specified, or the corresponding value can be set through the callback function method.

Built-in shape: circle, square, bowtie, diamond, hexagon, triangle,triangle-down, hollow-circle, hollow-square, hollow-bowtie,hollow-diamond, hollow-hexagon, hollow-triangle, hollow-triangle-down, cross, tick, plus, hyphen, line.

```ts
// Set a single size
{
  shape: 'square'
}
// The size of the range
{
  shapeField: 'gender',
  shape: ['circle', 'square'],
}
// Function
{
  shapeField: 'gender',
  shape: (gender) => {
    if(type === 'male'){
      return 'circle';
    }
    // TODO
    return 'square';
  },
}
```

#### pointStyle

<description>**optional** *object*</description>

Set polyline styles. The 'fill' in pointStyle overrides the configuration of 'color'. PointStyle can be specified either directly or via a callback to specify a separate style based on the data.

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
// Specified directly
{
  pointStyle: {
    fill: 'red',
    stroke: 'yellow',
    opacity: 0.8
  },
}
// Function
{
  pointStyle: (x, y, colorField) => {
    if (colorField === 'male') {
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

Formats the contents of the Tooltip Item.

```ts
tooltip: {
  formatter: (datum: Datum) => {
    return { name: datum.x, value: datum.y + '% };
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
| line           | *lineStyle*            | The configuration item for line                                                               |
| text           | *textStyle*            | Guideline text configuration, support callback                                                |
| textBackground | *textBackgroundStyle*  | Guideline text background configuration                                                       |
| follow         | *boolean*              | Whether the guide line follows the mouse. Default is false, that is, to locate the data point |

***lineStyle***

<!--line style-->

| Properties    | Type            | Description                                                                                                                                                                   |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke        | *string*        | color of the line                                                                                                                                                             |
| lineWidth     | *number*        | width of the line                                                                                                                                                             |
| lineDash      | \[number,number] | configure dashed line, the first parameter is the length of each segment, the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| opacity       | *number*        | opacity                                                                                                                                                                       |
| shadowColor   | *string*        | shadow color                                                                                                                                                                  |
| shadowBlur    | *number*        | Gaussian blur coefficient                                                                                                                                                     |
| shadowOffsetX | *number*        | configure horizontal distance between shadow and line                                                                                                                         |
| shadowOffsetY | *number*        | configure vertical distance between shadow and line                                                                                                                           |
| cursor        | *string*        | mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                        |

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
| style      | *shapeStyle*         | The configuration item for line             |

***shapeStyle***

<!--shape style-->

| Properties    | Type            | Description                                                                                                                                                                              |
| ------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fill          | *string*        | Fill color of the shape                                                                                                                                                                  |
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


##### showMarkers

<description>**optional** *boolean* *default:* `true`</description>

Whether to render TooltipMarkers.

##### marker

<description>**optional** *object*</description>

TooltipMarker style configuration.

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
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | --------- |
| type       | *string*                                                     | When a user uses a custom label type, need to declare the specific type, otherwise you will use the default label type rendering (pie chart label support `inner | outer | spiders`) |
| offset     | *number*                                                     | label offset                                                                                                                                                     |
| offsetX    | *number*                                                     | The offset distance of the label from the data point in the X direction                                                                                          |
| offsetY    | *number*                                                     | The offset distance of the label from the data point in the Y direction                                                                                          |
| content    | *string | IGroup | IShape | GeometryLabelContentCallback* | Text content that is displayed, if not declared, is displayed according to the value of the first field participating in the mapping                             |
| style      | object                                                       | Label text graphic property style                                                                                                                                |
| autoRotate | *string*                                                     | Whether to rotate automatically, default true                                                                                                                    |
| rotate     | *number*                                                     | Text rotation Angle                                                                                                                                              |
| labelLine  | *null | \_boolean* |object\_                               | Used to set the style property of the text connector. NULL indicates that it is not displayed.                                                                   |
| labelEmit  | *boolean*                                                    | Only applies to text in polar coordinates, indicating whether the text is radially displayed according to the Angle. True means on and false means off           |
| layout     | *'overlap' | 'fixedOverlap' | 'limitInShape'*              | Text layout type, support a variety of layout function combination.                                                                                              |
| position   | *'top' | 'bottom' | 'middle' | 'left' | 'right'*         | Specifies the position of the current Label relative to the current graphic                                                                                      |
| animate    | *boolean | AnimateOption*                                   | Animation configuration.                                                                                                                                         |
| formatter  | *Function*                                                   | Format function                                                                                                                                                  |
| autoHide   | *boolean*                                                    | Whether to hide it automatically, default to false                                                                                                               |
|            |

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

Same for xAxis and yAxis.

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

##### position

<description>**optional** *`top` | `bottom` | `left` | `right`*</description>

For Cartesian coordinates, set the position of the coordinate axes.

##### line

<description>**optional** *object*</description>

Coordinate axis configuration item, NULL means not displayed.

<!--line style-->

| Properties    | Type            | Description                                                                                                                                                                   |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke        | *string*        | color of the line                                                                                                                                                             |
| lineWidth     | *number*        | width of the line                                                                                                                                                             |
| lineDash      | \[number,number] | configure dashed line, the first parameter is the length of each segment, the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| opacity       | *number*        | opacity                                                                                                                                                                       |
| shadowColor   | *string*        | shadow color                                                                                                                                                                  |
| shadowBlur    | *number*        | Gaussian blur coefficient                                                                                                                                                     |
| shadowOffsetX | *number*        | configure horizontal distance between shadow and line                                                                                                                         |
| shadowOffsetY | *number*        | configure vertical distance between shadow and line                                                                                                                           |
| cursor        | *string*        | mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                        |

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

<description>**optional** *object*</description>

The configuration item of the coordinate axis scale line. NULL means not displayed.

<!--line style-->

| Properties    | Type            | Description                                                                                                                                                                   |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke        | *string*        | color of the line                                                                                                                                                             |
| lineWidth     | *number*        | width of the line                                                                                                                                                             |
| lineDash      | \[number,number] | configure dashed line, the first parameter is the length of each segment, the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| opacity       | *number*        | opacity                                                                                                                                                                       |
| shadowColor   | *string*        | shadow color                                                                                                                                                                  |
| shadowBlur    | *number*        | Gaussian blur coefficient                                                                                                                                                     |
| shadowOffsetX | *number*        | configure horizontal distance between shadow and line                                                                                                                         |
| shadowOffsetY | *number*        | configure vertical distance between shadow and line                                                                                                                           |
| cursor        | *string*        | mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                        |

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

<description>**optional** *object*</description>

A configuration item for a coordinate subscale. NULL indicates that it is not displayed.

<!--line style-->

| Properties    | Type            | Description                                                                                                                                                                   |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke        | *string*        | color of the line                                                                                                                                                             |
| lineWidth     | *number*        | width of the line                                                                                                                                                             |
| lineDash      | \[number,number] | configure dashed line, the first parameter is the length of each segment, the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| opacity       | *number*        | opacity                                                                                                                                                                       |
| shadowColor   | *string*        | shadow color                                                                                                                                                                  |
| shadowBlur    | *number*        | Gaussian blur coefficient                                                                                                                                                     |
| shadowOffsetX | *number*        | configure horizontal distance between shadow and line                                                                                                                         |
| shadowOffsetY | *number*        | configure vertical distance between shadow and line                                                                                                                           |
| cursor        | *string*        | mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                        |

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

<description>**optional** *object*</description>

A configuration item for the title, NULL means not to be displayed.

| Properties | Type         | Description                                                        |
| ---------- | ------------ | ------------------------------------------------------------------ |
| offset     | *number*     | The distance of the title from the coordinate axis                 |
| spacing    | *lineStyle*  | The distance between the title and the text on the coordinate axis |
| style      | *shapeStyle* | Title text configuration items                                     |
| autoRotate | *boolean*    | Whether to rotate automatically or not                             |

***shapeStyle***

<!--shape style-->

| Properties    | Type            | Description                                                                                                                                                                              |
| ------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fill          | *string*        | Fill color of the shape                                                                                                                                                                  |
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
| style      | object                                                       | Label text graphic property style                                                                                                                                |
| autoRotate | *string*                                                     | Whether to rotate automatically, default true                                                                                                                    |
| rotate     | *number*                                                     | Text rotation Angle                                                                                                                                              |
| labelLine  | *null | \_boolean* |object\_                               | Used to set the style property of the text connector. NULL indicates that it is not displayed.                                                                   |
| labelEmit  | *boolean*                                                    | Only applies to text in polar coordinates, indicating whether the text is radially displayed according to the Angle. True means on and false means off           |
| layout     | *'overlap' | 'fixedOverlap' | 'limitInShape'*              | Text layout type, support a variety of layout function combination.                                                                                              |
| position   | *'top' | 'bottom' | 'middle' | 'left' | 'right'*         | Specifies the position of the current Label relative to the current graphic                                                                                      |
| animate    | *boolean | AnimateOption*                                   | Animation configuration.                                                                                                                                         |
| formatter  | *Function*                                                   | Format function                                                                                                                                                  |
| autoHide   | *boolean*                                                    | Whether to hide it automatically, default to false                                                                                                               |
|            |

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

***lineStyle***

<!--line style-->

| Properties    | Type            | Description                                                                                                                                                                   |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke        | *string*        | color of the line                                                                                                                                                             |
| lineWidth     | *number*        | width of the line                                                                                                                                                             |
| lineDash      | \[number,number] | configure dashed line, the first parameter is the length of each segment, the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| opacity       | *number*        | opacity                                                                                                                                                                       |
| shadowColor   | *string*        | shadow color                                                                                                                                                                  |
| shadowBlur    | *number*        | Gaussian blur coefficient                                                                                                                                                     |
| shadowOffsetX | *number*        | configure horizontal distance between shadow and line                                                                                                                         |
| shadowOffsetY | *number*        | configure vertical distance between shadow and line                                                                                                                           |
| cursor        | *string*        | mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                        |

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

##### verticalFactor

<description>**optional** *number*</description>

Mark the direction of the label on the axis, with 1 to the left and -1 to the right.

##### verticalLimitLength

<description>**optional** *number*</description>

Configuring the maximum limit length in the vertical direction of the coordinate axis has a significant impact on text adaptation.


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

##### handler

<description>**optional** *ContinueLegendHandlerCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, configuration items for slider *ContinueLegendHandlerCfg* is configured as follows:

| Properties | Type     | Default | Description                                                                 |
| ---------- | -------- | ------- | --------------------------------------------------------------------------- |
| size       | *number* | -       | Slider size                                                                 |
| style      | *object* | -       | Slider configuration, reference [Graphic Style](/zh/docs/api/graphic-style) |

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
| style      | *object*   | -       | Text style configuration, referecnce [Graphic Style](/zh/docs/api/graphic-style) |
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
| style      | *object*   | -       | Text style configuration item, reference [Graphic Style](/zh/docs/api/graphic-style) |
| alignRight | *boolean*  | `false` | Right-align, false by default, only when setting legend item width.                  |
| formatter  | *function* | -       | Format function, `(text: string, item: ListItem, index: number) => any;`             |

##### animate

<description>**optional** *boolean* </description>

Whether to turn on the animation switch.

##### animateOption

<description>**optional** *ComponentAnimateOption* </description>

Animation parameter configuration, which takes effect if and only if the animate property is true, that is, when the animation is turned on. Animation configuration details are as follows:

<div class='custom-api-docs'>

*ComponentAnimateOption* is configured for each component animation type. Where 'easing' passes in the name of the animation function, the built-in default animation function is shown in the table below, and you can also customize the animation function through 'registerAnimation'.

```ts
import React, { useState, useEffect } from 'react';
import {  } from '@ant-design/charts';

const Demo: React.FC = () => {
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
  return < {...config} />;
};

export default Demo;


```

| Animation         | Effect                                                                                                                                                                                                         | Description                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 'fade-in'         | ![fade-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*LTRRRL8JwfQAAAAAAAAAAABkARQnAQ)                                                                                                          | 渐现动画。                                                       |
| 'fade-out'        | ![fade-out.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*s4Y4S5JJ6WEAAAAAAAAAAABkARQnAQ)                                                                                                         | 渐隐动画。                                                       |
| 'grow-in-x'       | ![grow-in-x.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*vhRVSLxDqU8AAAAAAAAAAABkARQnAQ)                                                                                                        | 容器沿着 x 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。   |
| 'grow-in-y'       | ![grow-in-y.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*L6mkQa3aG64AAAAAAAAAAABkARQnAQ)                                                                                                        | 容器沿着 y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。   |
| 'grow-in-xy'      | ![grow-in-xy.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*LfPrQouGwYIAAAAAAAAAAABkARQnAQ)                                                                                                       | 容器沿着 x,y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。 |
| 'scale-in-x'      | ![scale-in-x.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*oiaGTLx-dNcAAAAAAAAAAABkARQnAQ)                                                                                                       | 单个图形沿着 x 方向的生长动画。                                  |
| 'scale-in-y'      | ![scale-in-y.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*T6mLTY3o9OoAAAAAAAAAAABkARQnAQ)                                                                                                       | 单个图形沿着 y 方向的生长动画。                                  |
| 'wave-in'         | ![wave-in-p.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*W5CdQIWw-M4AAAAAAAAAAABkARQnAQ)![wave-in-r.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*z9jjQY-lHcwAAAAAAAAAAABkARQnAQ) | 划入入场动画效果，不同坐标系下效果不同。                         |
| 'zoom-in'         | ![zoom-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*wc4dQp4E6vkAAAAAAAAAAABkARQnAQ)                                                                                                          | 沿着图形中心点的放大动画。                                       |
| 'zoom-out'        | ![zoom-out.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*PZ2gTrkV29YAAAAAAAAAAABkARQnAQ)                                                                                                         | 沿着图形中心点的缩小动画。                                       |
| 'path-in'         | ![path-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*gxZ1RIIMtdIAAAAAAAAAAABkARQnAQ)                                                                                                          | path 路径入场动画。                                              |
| 'position-update' |                                                                                                                                                                                                                | 图形位置移动动画。                                               |

</div>


##### label

<description>**optional** *ContinueLegendLabelCfg* </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, a configuration item for the text, *ContinueLegendLabelCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                                                                                                                                                                                      |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| align      | *string* | -       | The alignment of text with the slider <br/> - rail : Align with the slide rail, at both ends of the slide rail <br/> - top, bottom: Legends are valid when laid out horizontally <br/> - left, right: Legends are valid when laid out vertically |
| style      | *object* | -       | Text style configuration item, reference [Graphic Style](/zh/docs/api/graphic-style)                                                                                                                                                             |
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
| style         | *object* | -       | Slide rail style, refer to [Graphic Style](/zh/docs/api/graphic-style)                                                                     |

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
| style      | *object* | -       | Text style configuration item, refer to [Graphic Style](/zh/docs/api/graphic-style) |

##### track

<description>**optional** *ContinueLegendTrackCfg* </description>
Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the color block style configuration item for the range. *ContinueLegendTrackCfg* Configuration is as follows:

| Properties | Type     | Default | Description                                                                     |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------- |
| style      | *object* | -       | Selected range of styles, reference [Graphic Style](/zh/docs/api/graphic-style) |

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
| style      | *object*             | -       | Text background style, reference[Graphic Style](/en/docs/api/graphic-style) |
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

##### container

<description>**optional** *string | HTMLElement* </description>

Custom graphical markup of HTML elements, either as HTML DOM strings, or HTML elements, or HTML callback functions, for HTML

##### alignX

<description>**optional** *left' | 'middle' | 'right'* </description>

Alignment of DOM elements in the X direction for HTML

##### alignY

<description>**optional** *left' | 'middle' | 'right'* </description>

Alignment of DOM elements in the Y direction for HTML


#### quadrant

[**DEMO**](../../../examples/scatter/bubble#quadrant)

<description>**optional** *object*</description>

Quadrant components.

| Properties  | Type     | Description                                                                                         |
| ----------- | -------- | --------------------------------------------------------------------------------------------------- |
| xBaseline   | number   | The quadrant dividing baseline in the x direction, which defaults to 0                              |
| yBaseline   | number   | The Y direction of the quadrant division base line, the default is 0                                |
| lineStyle   | object   | Configure the style of the quadrant divider. Configure the reference drawing properties for details |
| regionStyle | object\[] | Quadrant style with detailed configuration of reference drawing properties                          |
| labels      | object\[] | Quadrant text configuration, detailed configuration reference drawing properties                    |

#### regressionLine

[**DEMO**](../../../examples/scatter/scatter#line)

<description>**optional** *object*</description>

Regression line.

| Properties | Type                                                                | Description                                                                                 |
| ---------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| type       | string                                                              | The type of regression line, exp | linear | loess | log | poly | pow | quad           |
| style      | object                                                              | Configure the regression line style. Configure the reference drawing properties for details |
| algorithm  | Array<\[number, number]> | ((data: any) => Array<\[number, number]>) | Custom algorithm with a higher priority than type                                           |
| top        | boolean                                                             | Whether top level display                                                                   |

```ts
regressionLine: {
  algorithm: () => {
    return [
      [8, 6],
      [16, 7],
      [24, 7],
    ];
  },
}
```

### Event

On Plot, binding events are removed by ON and OFF.

```ts
// Bind event
plot.on('eventName', callback);
// Remove event
plot.off('eventName', callback);
```

#### eventName

Composition: element + ':' + events。

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

#### Theme

Built-in defaults: 'default' and 'dark'

```ts
{
  theme: 'default', // 'dark',
}
```

#### Theme attributes

In addition to using the built-in 'default' and 'dark' themes, you can also modify some of the theme content by setting the theme properties.

The following table lists the specific properties on the configuration items that make up the topic:

| Properties            | Type       | Description                                                                                                   |
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
| multiplePieWidthRatio | number     | Multilayer pie and loop ratio, 0-1 range values                                                               |
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
        '#247FEA'
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
        '#791DC9'
    ]
});
const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    theme: 'new-theme'
};
  return <Pie {...config} />;
};

export default DemoPie;


```


### Plot Interactions

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

```ts
plot.chart.removeInteraction('interaction-type');
```

Usage:

```ts
// Removes legend filtering interaction
plot.chart.removeInteraction('legend-filter');
```

#### More

More instructions about interaction, see \[G2 document] (https://g2.antv.vision/en/docs/api/general/interaction)

The list of built-in supported interactions and interactions with specific plot bindings will be added later.
