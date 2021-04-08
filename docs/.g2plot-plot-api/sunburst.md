



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

<description>**required** *object*</description>

Configure the chart data source.

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


#### type

<description>**optional** *partition | treemap* *default:* `partition`</description>

Layout types, more types to explore.

#### seriesField

<description>**optional** *string*</description>

Grouping fields, that is, numeric fields to map.

#### reflect

<description>**optional** *x | y*</description>

Radial type, not recommended in special cases.

#### hierarchyConfig

<description>**optional** *object*</description>

Hierarchy configuration, such as' size ', 'padding', etc., refer to [D3-Hierarchy](https://github.com/d3/d3-hierarchy#treemap) for detailed configuration.

### Geometry Style

#### radius

<description>**optional** *string* *default:* `1`</description>

Radius, 0~1 of the value.

#### innerRadius

<description>**optional** *number* *default:* `0`</description>

Inner radius, 0~1 of the value.

#### colorField

<description>**optional** *string*</description>

Color mapping field.

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


#### sunburstStyle

<description>**optional** *object*</description>

Sunburst graphic style. The 'fill' in pointStyle overrides the configuration of 'color'. SunBurstStyle can be specified either directly or via a callback to specify a separate style based on the data.

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
