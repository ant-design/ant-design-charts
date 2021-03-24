## title: Pie&#xA;order: 4

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

#### data

<description>**required** _array object_</description>

Configure the data source. The data source is a collection of objects. For example:`[{ time: '1991'，value: 20 }, { time: '1992'，value: 20 }]`。

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

```ts
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  const data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
  ];
  const config = {
    data,
    meta: {
      country: {
        alias: '国家',
        range: [0, 1],
      },
      value: {
        alias: '数量',
        formatter: (v) => {
          return `${v}个`;
        },
      },
    },
    angleField: 'value',
    colorField: 'country',
  };
  return <Pie {...config} />;
};

export default DemoPie;
```

#### angleField

<description>**required** _string_</description>

The data field name corresponding to the sector slice size (radians).

#### colorField

<description>**required** _string_</description>

The data field name corresponding to the sector color map.

### Geometry Style

#### radius

<description>**optional** _number_</description>

The radius of the pie chart, the origin is the center of the canvas. The configuration range is (0,1), where 1 represents a pie chart that fills the drawing area.

#### innerRadius

<description>**optional** _number_</description>

The inner radius of the pie chart, starting at the center of the canvas. Configure the range (0,1)

#### startAngle

<description>**optional** _number_</description>

Configure the starting Angle of the coordinate system.

#### endAngle

<description>**optional** _number_</description>

Configure the end Angle of the coordinate system.

<playground rid="quarter-circle" path="pie/basic/demo/quarter-circle.ts"></playground>

#### color

<description>**optional** _string | string\[] | Function_</description>

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

#### pieStyle

<description>**optional** _object_</description>

Set the sector style. The 'fill' in the pieStyle will override the 'color' configuration. The pieStyle can be specified either directly or via callback to specify a separate style for each sector slice based on the data.

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

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*TBHtTY6RmHIAAAAAAAAAAAAAARQnAQ" alt="Load failed" width="600">

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
| --- | --- | --- | --- | --- |
| type | \_`x` | `y` | `xy`\_ | Crosshairs Type: 'X' represents the auxiliary line on the X axis, 'Y' on the Y axis |
| line | _lineStyle_ | The configuration item for line, see more [_ShapeAttrs_](/guide/graphic-style) |
| text | _textStyle_ | Guideline text configuration, support callback |
| textBackground | _textBackgroundStyle_ | Guideline text background configuration |
| follow | _boolean_ | Whether the guide line follows the mouse. Default is false, that is, to locate the data point |

\***\*textStyle\*\***

<!--文本样式-->

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

| Properties | Type | Description |
| --- | --- | --- | --- |
| padding | \*number | number\[]\* | White space around the background of a text |
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

#### label

Configure label style.

<!--label样式-->

| Properties | Type | Description |
| --- | --- | --- | --- | --- | --- | --- |
| type | _string_ | When a user uses a custom label type, need to declare the specific type, otherwise you will use the default label type rendering (pie chart label support `inner | outer | spiders`) |
| offset | _number_ | label offset |
| offsetX | _number_ | The offset distance of the label from the data point in the X direction |
| offsetY | _number_ | The offset distance of the label from the data point in the Y direction |
| content | \*string | IGroup | IShape | GeometryLabelContentCallback\* | Text content that is displayed, if not declared, is displayed according to the value of the first field participating in the mapping |
| style | _ShapeAttrs_ | Label text graphic property style |
| autoRotate | _string_ | Whether to rotate automatically, default true |
| rotate | _number_ | Text rotation Angle |
| labelLine | _null_ | _boolean_ | _LabelLineCfg_ | Used to set the style property of the text connector. NULL indicates that it is not displayed. |
| labelEmit | _boolean_ | Only applies to text in polar coordinates, indicating whether the text is radially displayed according to the Angle. True means on and false means off |
| layout | \*'overlap' | 'fixedOverlap' | 'limitInShape'\* | Text layout type, support a variety of layout function combination. |
| position | \*'top' | 'bottom' | 'middle' | 'left' | 'right'\* | Specifies the position of the current Label relative to the current graphic |
| animate | \*boolean | AnimateOption\* | Animation configuration. |
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

<description>**optional** _horizontal | vertical_ </description>

Layout

##### position

<description>**optional** _string_ </description>

The position of legend is optional:

- `top`
- `top-left`
- `top-right`
- `right`
- `right-top`
- `right-bottom`
- `left`
- `left-top`
- `left-bottom`
- `bottom`
- `bottom-left`
- `bottom-right`

##### background

<description>**optional** _LegendBackgroundCfg_ </description>

Background box configuration item. _LegendBackgroundCFG_ is configured as follows:

| Properties | Type   | Default   | Description                                             |
| ---------- | ------ | --------- | ------------------------------------------------------- | ----------------------------- |
| padding    | number | number\[] | -                                                       | White space in the background |
| style      | object | -         | Background style configuration, Reference Graphic Style |

##### flipPage

<description>**optional** _boolean_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>,whether to page when there are too many legend items.

##### pageNavigator

<description>**optional** _object_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configure the style of page navigator, it works when legend is in flipPage. Types of _LegendPageNavigatorCfg_ are as follow:

| Properties   | Type                       | Default | Description                  |
| ------------ | -------------------------- | ------- | ---------------------------- |
| marker.style | _PageNavigatorMarkerStyle_ | -       | 分页器指示箭头配置项         |
| text.style   | _PageNavigatorTextStyle_   | -       | The text style of page info. |

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

##### handler

<description>**optional** _ContinueLegendHandlerCfg_ </description> Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, configuration items for slider _ContinueLegendHandlerCfg_ is configured as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| size | _number_ | - | Slider size |
| style | _object_ | - | Slider configuration, reference [Graphic Style](/zh-CN/guide/graphic-style) |

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

##### itemSpacing

<description>**optional** _number_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, control the horizontal spacing of legend items.

##### itemValue

<description>**optional** _LegendItemValueCfg_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, configuration item of legend item Value added value. _LegendItemValueCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| style | _object_ | - | Text style configuration item, reference [Graphic Style](/zh-CN/guide/graphic-style) |
| alignRight | _boolean_ | `false` | Right-align, false by default, only when setting legend item width. |
| formatter | _function_ | - | Format function, `(text: string, item: ListItem, index: number) => any;` |

##### animate

<description>**optional** _boolean_ </description>

Whether to turn on the animation switch.

##### animateOption

<description>**optional** _ComponentAnimateOption_ </description>

Animation parameter configuration, which takes effect if and only if the animate property is true, that is, when the animation is turned on. Animation configuration details are as follows:

<div class='custom-api-docs'>

_ComponentAnimateOption_ is configured for each component animation type.

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

| Animation | Effect | Description | Not suitable |
| --- | --- | --- | --- |
| 'fade-in' | ![fade-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*LTRRRL8JwfQAAAAAAAAAAABkARQnAQ) | 渐现动画。 |  |
| 'fade-out' | ![fade-out.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*s4Y4S5JJ6WEAAAAAAAAAAABkARQnAQ) | 渐隐动画。 |  |
| 'grow-in-x' | ![grow-in-x.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*vhRVSLxDqU8AAAAAAAAAAABkARQnAQ) | 容器沿着 x 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。 | 不适用于饼图、玫瑰图等 polar、theta 坐标系下的图表以及柱、条状图 |
| 'grow-in-y' | ![grow-in-y.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*L6mkQa3aG64AAAAAAAAAAABkARQnAQ) | 容器沿着 y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。 | 不适用于饼图、玫瑰图等 polar、theta 坐标系下的图表以及柱、条状图 |
| 'grow-in-xy' | ![grow-in-xy.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*LfPrQouGwYIAAAAAAAAAAABkARQnAQ) | 容器沿着 x,y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。 |  |
| 'scale-in-x' | ![scale-in-x.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*oiaGTLx-dNcAAAAAAAAAAABkARQnAQ) | 单个图形沿着 x 方向的生长动画。 |  |
| 'scale-in-y' | ![scale-in-y.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*T6mLTY3o9OoAAAAAAAAAAABkARQnAQ) | 单个图形沿着 y 方向的生长动画。 |  |
| 'wave-in' | ![wave-in-p.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*W5CdQIWw-M4AAAAAAAAAAABkARQnAQ)![wave-in-r.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*z9jjQY-lHcwAAAAAAAAAAABkARQnAQ) | 划入入场动画效果，不同坐标系下效果不同。 |  |
| 'zoom-in' | ![zoom-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*wc4dQp4E6vkAAAAAAAAAAABkARQnAQ) | 沿着图形中心点的放大动画。 |  |
| 'zoom-out' | ![zoom-out.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*PZ2gTrkV29YAAAAAAAAAAABkARQnAQ) | 沿着图形中心点的缩小动画。 |  |
| 'path-in' | ![path-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A*gxZ1RIIMtdIAAAAAAAAAAABkARQnAQ) | path 路径入场动画。 |  |
| 'position-update' |  | 图形位置移动动画。 | 限用于图表标签 label 上 |

</div>

##### label

<description>**optional** _ContinueLegendLabelCfg_ </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, a configuration item for the text, _ContinueLegendLabelCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| align | _string_ | - | The alignment of text with the slider <br/> - rail : Align with the slide rail, at both ends of the slide rail <br/> - top, bottom: Legends are valid when laid out horizontally <br/> - left, right: Legends are valid when laid out vertically |
| style | _object_ | - | Text style configuration item, reference [Graphic Style](/zh-CN/guide/graphic-style) |
| spacing | _number_ | - | The distance between the text and the slide |

##### marker

<description>**optional** _MarkerCfg_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the configuration of the Marker icon of the legend item.

| Properties | Type | Default | Description |
| --- | --- | --- | --- | --- |
| symbol | _Marker_ | _MarkerCallback_ | - | The symbol shape of a legend marker is configured |
| style | ShapeAttrs | - | The configuration item of legend item Marker |
| spacing | number | - | The spacing between legend item marker and the following name |

_Marker_ The supported tag types are： _circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen_； _MarkerCallback_ is `(x: number, y: number, r: number) => PathCommand`；

##### min

<description>**optional** _number_ </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the minimum value of the range.

##### max

<description>**optional** _number_ </description>

Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the maximum value of the range.

##### maxWidth

<description>**optional** _number_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum width of the legend item.

##### maxHeight

<description>**optional** _number_ </description>

Apply to <tag color="green" text="Classification legend">Classification legend</tag>, the maximum height of the legend item.

##### offsetX

<description>**optional** _number_ </description>

Legends offset in the x direction.

##### offsetY

<description>**optional** _number_ </description>

Legends offset in the y direction.

##### rail

<description>**optional** _ContinueLegendRailCfg_ </description> Apply to <tag color="green" text="Classification legend">Classification legend</tag>, a style configuration item for the legend slider (background)._ContinueLegendRailCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| type | _string_ | - | rail type: color and size |
| size | _number_ | - | The width of the slide rail |
| defaultLength | _number_ | - | The default length of the slider. When maxWidth,maxHeight is limited, this property is not used and the length is automatically calculated |
| style | _object_ | - | Slide rail style, refer to [Graphic Style](/zh-CN/guide/graphic-style) |

##### reversed

<description>**optional** _boolean_ </description> Apply to <tag color="green" text="Classification legend">Classification legend</tag>, whether to display legend items in reverse order.

##### slidable

<description>**optional** _boolean_ </description> Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, whether the slider can slide.

##### title

<description>**optional** _G2LegendTitleCfg_ </description>

Legend title configuration is not displayed by default. _G2LegendTitleCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| spacing | _number_ | - | The spacing between the title and the legend item |
| style | _object_ | - | Text style configuration item, refer to [Graphic Style](/zh-CN/guide/graphic-style) |

##### track

<description>**optional** _ContinueLegendTrackCfg_ </description> Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, select the color block style configuration item for the range. _ContinueLegendTrackCfg_ Configuration is as follows:

| Properties | Type | Default | Description |
| --- | --- | --- | --- |
| style | _object_ | - | Selected range of styles, reference [Graphic Style](/zh-CN/guide/graphic-style) |

##### values

<description>**optional** _number\[]_ </description> Apply to <tag color="cyan" text="Continuous legend">Continuous legend</tag>, selected value.

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
| --- | --- | --- | --- | --- |
| symbol | _Marker_ | _MarkerCallback_ | - | The symbol shape of a legend marker is configured |
| style | ShapeAttrs | - | The configuration item of legend item Marker |
| spacing | number | - | The spacing between legend item marker and the following name |

_Marker_ The supported tag types are： _circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen_； _MarkerCallback_ is `(x: number, y: number, r: number) => PathCommand`；

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
| --- | --- | --- | --- | --- |
| style | _object_ | - | Text background style, reference[Graphic Style](/guide/graphic-style) |
| padding | \*number | number\[]\* | - | White space around the background of a text |

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

<description>**optional** _upward | downward_ </description>

Orientation.

##### lineLength

<description>**optional** _number_ </description>

Line length for dataRegion.

##### render

<description>**optional** _string_ </description>

Render function of custom marking, other container is the parent container of marking drawing, view is the graphic instance, helpers is the auxiliary function, other parserPosition can be used to calculate the coordinate position corresponding to data points, used in shape.

##### container

<description>**optional** _string | HTMLElement_ </description>

Container elements for custom HTML graphical tags for HTML

##### html

<description>**optional** _string | HTMLElement_ </description>

Custom graphical markup of HTML elements, either as HTML DOM strings, or HTML elements, or HTML callback functions, for HTML

##### alignX

<description>**optional** _'left' | 'middle' | 'right'_ </description>

Alignment of DOM elements in the X direction for HTML

##### alignY

<description>**optional** _left' | 'middle' | 'right'_ </description>

Alignment of DOM elements in the Y direction for HTML

#### statistic ✨

<description>**optional** _object_</description>

Statistical content components. When the innerRadius (' innerRadius') is greater than 0, the default is to display the summary value. You can use 'formatter' to format the content, or you can use 'customHtml' to customize more content.

![image](https://gw.alipayobjects.com/zos/bmw-prod/860bbf6e-cf20-4bdf-88bd-e8d685d12e9a.svg)

| Properties | Type    | Description     |
| ---------- | ------- | --------------- | ------- |
| title      | \*false | StatisticText\* | title   |
| content    | \*false | StatisticText\* | content |

StatisticText

| Properties | Type | Description |
| --- | --- | --- |
| style | _CSSStyleDeclaration_ | Styles for statistical text (css styles) |
| customHtml | `(container: HTMLElement, view: View, datum: object, data: object[]) => string;` | custom content by using html，priority is higher than formatter |
| formatter | _Function_ | The formatted content of the text |
| rotate | _number_ | Rotation Angle |
| offsetX | _number_ | X offset |
| offsetY | _number_ | Y offset |

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

| **Properties** | **Type** | **Description** || --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- | | defaultColor | _string_ | Theme color | | padding | _number_ | number\[] | | fontFamily | _string_ | Chart font | | colors10 | _string\[]_ | Category color palette, used when the number of categories is less than 10 | | colors20 | _string\[]_ | Category color palette, used when the number of categories is greater than 10 | | columnWidthRatio | _number_ | General histogram width ratio, 0-1 range of values | | maxColumnWidth | _number_ | Maximum width of histogram, pixel value | | minColumnWidth | _number_ | Minimum width of histogram, pixel value | | roseWidthRatio | _number_ | Rose width ratio, 0-1 range of value | | multiplePieWidthRatio | _number_ | Multilayer pie and loop ratio, 0-1 range values | | geometries | _object_ | Configure the style of each shape for each Geometry, including the default style and the style for each state | | components | _object_ | Configure theme samples for axes, legends, tooltips, and annotations | | labels | _object_ | Configure the theme style of the label under Geometry | | innerLabels | _object_ | Configure Geometry to display the Labels theme style inside the graph | | pieLabels | _object_ | Configure the theme style of pie chart labels |

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
