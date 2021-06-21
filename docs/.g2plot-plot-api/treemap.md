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

<description>**required** _Record\<string: array | string>_</description>

Configure the chart data source. The data source of the matrix tree graph is an object with a tree structure, as follows

```javascript
const data = {
  name: 'root',
  children: [
    { name: '分类 1', value: 560 },
    { name: '分类 2', value: 500 },
  ],
};
```

Each level of data needs to have three attributes

- name
- value (A leaf node)
- children (Non-leaf node)

In the nested rectangular tree diagram, the layout is determined by the value value of the leaf node.

G2 plot generates the following data structure based on data:

- name
- value
- path: Level information of the current node (including the current node)，The level information is from data (node metadata), value (node value), height (node height)
- children: Leaf node information of the current node (only if it exists)

Among them, you can get the path parameter in the formatter function of label (tooltip), so as to calculate the proportion, [DEMO](/en/examples/more-plots/treemap#treemap-nest)

#### colorField

<description>**optional** _string_</description>

Color mapping field name.

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

#### rectStyle

<description>**optional** _object_</description>

Rectangular graphic styles. The 'fill' in rectStyle overrides the 'color' configuration. RectStyle can be specified either directly or via a callback to specify a separate style based on the data.

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
// Config
{
  rectStyle: {
    fill: 'red',
  },
}
// Function
{
  rectStyle: (data) => {
    if (data.value > 10) {
      return {
        fill: 'green',
      }
    }
    return {
      fill: 'red',
    }
  }
}
```

#### hierarchyConfig

<description>**optional** _object_</description>

Hierarchical layout configuration, such as' tile ', etc., refer to detailed configuration [d3-hierarchy](https://github.com/d3/d3-hierarchy#treemap)。 The default is `{tile: 'treemapSquarify', ratio: 0.5 * (1 + Math.sqrt(5))}` (Golden Section Ratio)

### Plot Components

#### label

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

### Plot Interactions

Built-in interactions of Treemap are as follows:

| Interaction | Description | Configuration |
| --- | --- | --- |
| drill-down | 用于下钻交互，配置该交互后，矩形树图默认显示深度为 1 的节点，点击后下钻。 | `drilldown: { enabled: true }` |
| view-zoom | view-zoom 用于放大 view，配置该交互后，canavs 自动识别 zoom 手势，放大或缩小矩形树图 | `interactions: [{ type: 'view-zoom' }]` |
| drag-move | drag-move 用于拖拽 view，可和 view-zoom 配套使用，查看矩形树图细节 | `interactions: [{ type: 'drag-move' }]` |

#### drilldown

<description>**optional** _DrillDownCfg_ </description>

Configuration of drilldown interaction.

Types of _DrillDownCfg_ are as follows:

| Properties | Type            | Description                                            |
| ---------- | --------------- | ------------------------------------------------------ |
| enabled    | _boolean_       | Whether enable drilldown interaction, default: 'false' |
| breadCrumb | _BreadCrumbCfg_ | UI configurations of breadCrumb.                       |

Types of _BreadCrumbCfg_ are as follows:

| Properties  | Type         | Description                                  |
| ----------- | ------------ | -------------------------------------------- | ------------- |
| position    | _string_     | Position of breadCrumnb. Options: 'top-left' | 'bottom-left' |
| rootText    | _string_     | Text content of root, default: 'Root'        |
| dividerText | _string_     | Divider, default: '/'                        |
| textStyle   | _ShapeAttrs_ | Style of text                                |
| activeStyle | _ShapeAttrs_ | Style of text when active (hover)            |

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

### Plot Events

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

### Plot Methods

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
