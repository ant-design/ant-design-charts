---
title: Venn
order: 12
---

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

Specify the locale. There are two built-in locales: 'zh-CN' and 'en-US'. Or you can use `G2Plot.registerLocale` to register a new locale. Go [src/locales/en\_US.ts](https://github.com/antvis/G2Plot/blob/master/src/locales/en\_US.ts) to see the format.


### Data Mapping

#### data

<description>**required** *object*</description>

Configure the chart data source. For example：

```ts
 const data = [
    { sets: ['A'], size: 5 },
    { sets: ['B'], size: 10 },
    { sets: ['A', 'B'], size: 2 },
    ...
   ];
```

#### setsField

<description>**optional** *string*</description>

The field of the collection(sets).

#### sizeField

<description>**optional** *string*</description>

The name of the data field corresponding to the point size map.

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


#### blendMode

<description>**optional** *string*</description>

Color blend mode of the intersection area, default: `multiply`. Other: `normal`, `darken`, `lighten`, `screen`, `overlay`, `burn`, and `dodge`.
reference：https://gka.github.io/chroma.js/#chroma-blend

#### pointStyle

<description>**optional** *object*</description>

Set the point style. The `fill` in pointStyle overrides the configuration of `color`. PointStyle can be specified either directly or via a callback to specify individual styles based on the data.

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
  pointStyle: ({ size }) => {
    if (size > 1) {
      return {
        fill: 'green',
        stroke: 'yellow',
        opacity: 0.8,
      }
    }
    return {
      fill: 'red',
      stroke: 'yellow',
      opacity: 0.8,
    }
  },
}
```

### Plot Components

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

<Playground path="component/legend/demo/legend-position.jsx" rid="legend-position"></playground>

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

<Playground path="component/legend/demo/legend-flippage.ts" rid="page-navigator"></playground>

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

<Playground path="component/legend/demo/legend-item-value.ts" rid="legend-item-value"></playground>

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

<Playground path='component/legend/demo/legend-focus.ts' rid='legend-selected'></playground>

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

<!-- <Playground path="more-plots/stock/demo/custom-crosshairs.ts" rid="crosshairs" height="400"></playground> -->


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


### Plot Interactions

There are interactions for venn diagrams, listed below:

| interaction | description | configuration method |
| ---|--|--|
| venn-element-active | enable the "mouse-over venn diagram element triggers active" interaction | `interactions:[{ type: 'venn-element-active', enabled: true }]` |
| venn-element-selected | enable the interaction "trigger selected when mouse clicked on venn diagram element", multiple options available | `interactions:[{ type: 'venn-element-selected', enabled: true }]` |

#### Add interactions

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

<Playground path="general/theme/demo/register-theme.ts" rid="rect-register-theme"></playground>

🌰 Customize theme [DEMO](/zh/examples/general/theme#register-theme)
