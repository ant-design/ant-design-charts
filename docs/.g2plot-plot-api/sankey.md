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

Configure the chart data source. The data source is a collection of objects, for example：`[{ source: '支付宝首页', target: '花呗', value: 20 }, ...]`。

#### sourceField

<description>**required** _string_</description>

Sets the source node data field of the Sankey diagram. For example, for the above data, it is: 'source'.

#### targetField

<description>**required** _string_</description>

Sets the target node data field of Sankey diagram. For the above data, for example, it is: 'target'.

#### weightField

<description>**required** _string_</description>

Set the weight field information of the relationship between nodes. The larger the data, the larger the edge. For example, for the above data, it is: 'value'.

#### rawFields

<description>**optional** _string\[_</description>

Raw fields of original data. With the 'rawsFields' definition, you can get the original (raw) datum on node or edge elements.

<playground path="relation-plots/sankey/demo/draggable.ts" rid="sankey-raw-fields"></playground>

### Geometry Style

#### nodeStyle

<description>**optional** _StyleAttr 、 Function_</description>

Sankey diagram node style configuration.

#### edgeStyle

<description>**optional** _StyleAttr 、 Function_</description>

Sankey diagram variable style configuration.

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

#### nodeWidthRatio

<description>**optional** _number_</description>

Sankey diagram node width configuration, 0 ~ 1, refer to the width of the canvas, the default is' 0.008 '.

#### nodeWidthPadding

<description>**optional** _number_</description>

The vertical spacing between nodes in Sankey diagram, 0 ~ 1, referring to the height of the canvas, default is' 0.01 '.

#### nodeAlign

<description>**optional** _string_</description>

The sankey diagram node layout direction, the default is `the justify`, can choose the 'left' | 'right' | 'center' | 'the justify' four ways.

#### nodeDepth

<description>**optional** _Function_</description>

The sankey diagram node `depth` configure, use function to return the depth value, started from zero, and we need to ensure contains node in every depth level.

```ts
{
  nodeDepth: (datum, maxDepth) => {
    const { name } = datum;
    if (name === 'node1') {
      return 0;
    }
    return 1;
  };
}
```

#### nodeDraggable

<description>**optional** _boolean_</description>

Whether the node of sankey is draggable, default is `false`.

```ts
{
  nodeDraggable: true,
}
```

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
