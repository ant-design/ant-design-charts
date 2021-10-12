---
title: 旭日图
order: 17
---

### 图表容器

#### width

<description>**optional** *number* *default:* `400`</description>

设置图表宽度。

#### height

<description>**optional** *number* *default:* `400`</description>

设置图表高度。

#### autoFit

<description>**optional** *boolean* *default:* `true`</description>

图表是否自适应容器宽高。当 `autoFit` 设置为 true 时，`width` 和 `height` 的设置将失效。

#### padding

<description>**optional** *number\[] | number | 'auto'*</description>

画布的 `padding` 值，代表图表在上右下左的间距，可以为单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向，或者开启 `auto`，由底层自动计算间距。

#### appendPadding

<description>**optional** *number\[] | number*</description>

额外增加的 `appendPadding` 值，在 `padding` 的基础上，设置额外的 padding 数值，可以是单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向。

#### renderer

<description>**optional** *string* *default:* `canvas`</description>

设置图表渲染方式为 `canvas` 或 `svg`。

#### pixelRatio

<description>**optional** *number* *default:* `window.devicePixelRatio`</description>

设置图表渲染的像素比，和底层的 devicePixelRatio 含义一致，一般不用设置，除非在页面有整体 scale 的情况下，可以自定义。

#### limitInPlot

<description>**optional** *boolean*</description>

是否对超出坐标系范围的 Geometry 进行剪切。

<!-- 先插入到这里 -->

#### locale

<description>**optional** *string*</description>

指定具体语言，目前内置 'zh-CN' and 'en-US' 两个语言，你也可以使用 `G2Plot.registerLocale` 方法注册新的语言。语言包格式参考：[src/locales/en\_US.ts](https://github.com/antvis/G2Plot/blob/master/src/locales/en\_US.ts)


### 数据映射

#### data

<description>**required** *object*</description>

设置图表数据源。旭日图的数据格式要求为：

```sign
type Node = { name: string; value?: number; children: Node[]; }
```

示例:

```ts
{
  name: 'root',
  children: [
    { name: 'type1', value: 1 },
    { name: 'type2', value: 3, children: [{ name: 'type2-1', value: 2 }] }
  ]
}
```

#### meta

<description>**optional** *object*</description>

全局化配置图表数据元信息，以字段为单位进行配置，来定义数据的类型和展示方式。在 meta 上的配置将同时影响所有组件的文本信息。

| 细分配置项名称 | 类型       | 功能描述                                    |
| -------------- | ---------- | ------------------------------------------- |
| alias          | *string*   | 字段的别名                                  |
| formatter      | *function* | callback 方法，对该字段所有值进行格式化处理 |
| values         | *string\[]* | 枚举该字段下所有值                          |
| range          | *number\[]* | 字段的数据映射区间，默认为\[0,1]             |

关于 `meta` 的更多配置项，请查看 [Meta Options](/zh/docs/api/options/meta)


旭日图内含的数据字段有：

| 字段 | 字段描述 | 字段值类型 |
｜ --- ｜ --- ｜ --- ｜
｜`Sunburst.SUNBURST_PATH_FIELD`| 节点的路径信息 |*string* |
｜`Sunburst.SUNBURST_ANCESTOR_FIELD`| 当前节点的祖先节点 | *string* |
｜`Sunburst.NODE_ANCESTORS_FIELD`| 当前节点的祖先节点列表 |*object\[]* |
｜`nodeIndex`| 当前节点在同一父节点下的所有节点中的索引顺序 |*number* |
| `childNodeCount` | 当前节点的儿子节点数 |*number* |
｜`depth`| |*number* |
｜`height`| | *number* |

可以通过下面的方式来设置字段的元信息：

```ts
meta: {
  [Sunburst.SUNBURST_PATH_FIELD]: {
    alias: '节点路径',
    formatter: (v) => `${v}`,
  },
  [Sunburst.SUNBURST_ANCESTOR_FIELD]: {
    alias: '祖先节点',
  },
  depth: {
    alias: '节点层级',
  },
},
```

#### colorField

<description>**optional** *string*</description>

颜色映射字段。默认为：`Sunburst.SUNBURST_ANCESTOR_FIELD`，即节点的祖先节点，颜色透明度逐渐减小（可以通过 sunburstStyle 回调来控制填充透明度）

#### rawFields

<description>**optional** *string\[]*</description>

额外的原始字段。配置之后，可以在 tooltip，sunburstStyle 等回调函数的 datum 参数中，获取到更多额外的原始数据。

### 图形样式

#### hierarchyConfig ✨

<description>**optional** *object*</description>

层级布局配置，参考[d3-hierarchy](https://github.com/d3/d3-hierarchy#partition)。

支持配置属性：

| Properties        | Type               | Description                                                                                                                          |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| field             | *string*           | 数据节点权重映射字段，默认为：`value`. 当你的节点数据格式不是：`{ name: 'xx', value: 'xx' }`, 可以通过该字段来指定，详细见：图表示例 |
| padding           | *number|number\[]* | 默认：`0`。参考：[d3-hierarchy#partition\_padding](https://github.com/d3/d3-hierarchy#partition\_padding)                              |
| size              | *number\[]*         | 默认：`[1, 1]`。参考：[d3-hierarchy#partition\_size](https://github.com/d3/d3-hierarchy#partition\_size)                               |
| round             | *boolean*          | 默认：`false`。参考：[d3-hierarchy#partition\_round](https://github.com/d3/d3-hierarchy#partition\_round)                              |
| sort              | *Function*         | 数据节点排序方式，默认：降序。参考: [d3-hierarchy#node\_sort](https://github.com/d3/d3-hierarchy#node\_sort)                           |
| ignoreParentValue | *boolean*          | 是否忽略 parentValue, 默认：true。 当设置为 true 时，父节点的权重由子元素决定                                                        |

#### radius

<description>**optional** *string* *default:* `0.85`</description>

半径，0 ~ 1。

#### innerRadius

<description>**optional** *number* *default:* `0`</description>

内径，0 ~ 1。

<!-- Color 配置 -->

#### color

<description>**optional** *string | string\[] | Function*</description>

指定点的颜色。如没有配置 colorField，指定一个单值即可。对 colorFiled 进行了配置的情况下，即可以指定一系列色值，也可以通过回调函数的方法根据对应数值进行设置。

默认配置：采用 theme 中的色板。

```ts
// 设置单一颜色
{
  color: '#a8ddb5'
}
// 设置多色
{
  colorField: 'type', // 部分图表使用 seriesField
  color: ['#d62728', '#2ca02c', '#000000'],
}
// Function
{
  colorField: 'type', // 部分图表使用 seriesField
  color: ({ type }) => {
    if(type === 'male'){
      return 'red';
    }
    return 'yellow';
  }
}
```


#### pattern ✨

<description>**optional** *object | Function*</description>

设置图形的贴图样式。

*   配置项：由`type`和`cfg`组成，`type`目前包括三种类型：`dot`、`line`、`square`，`cfg`为可选项。
*   特点：`pattern`会覆盖当前图形设置的`style`样式(如 pieStyle、columnStyle 等)。
*   使用方式：可通过 配置项(PatternOption) 或传入 CanvasPattern 对象 的方式给图表的所有图形设置统一的贴图样式，还提供了 callback 的方式给对应的图形设置样式。此外，提供了 getCanvasPattern 方法传入 PatternOption 配置来创建 pattern，以修改 Legend 样式[Demo](/zh/examples/plugin/pattern#legend-marker-with-pattern)

pattern 的类型定义如下：

```plain
PatternAttr =
  | CanvasPattern
  | PatternOption
  | ((datum: Datum, color: string /** inherit color */) => PatternOption | CanvasPattern);
```

具体用法：

```ts
// 给图形设置统一贴图
{
   pattern: {
    type: 'dot',
    cfg: {
      size: 4,
      padding: 4,
      rotation: 0,
      fill: '#FFF',
      isStagger: true,
    },
  },
}
// 给图形分别设置贴图
{
  pattern: ({type}, color) =>{
    if(type ==='分类一') {
      return { 
        type: 'dot',
        cfg: {
          backgroundColor: color, // 继承主题颜色
        }
      }
    } else if(type ==='分类二') {
      return {
         type: 'square',
         cfg: {
           backgroundColor: 'pink', // 自定义颜色
         }
       }
    } else if(type ==='分类三') {
      return { 
        type: 'line' 
      }
    }
  },
}
```

<!--各个 pattern 的配置项-->

pattern 共有的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| backgroundColor   | *string*         | 贴图的背景色            |
| fill     | *string*         | 贴图元素的填充色      |
| fillOpacity   |   *number* | 贴图元素填充的透明度 |
| stroke   | *string*         | 贴图元素的描边色          |
| strokeOpacity       | *number*         | 贴图元素的描边透明度色    |
| lineWidth   | *number*         | 贴图元素的描边粗细        |
| opacity | *number*         | 贴图整体的透明度              |
| rotation    | *number*         | 贴图整体的旋转角度             |

dotPattern 额外的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| size          | *number*         | 圆点的大小，默认为`6`  |
| padding          | *number*         | 圆点之间的间隔，默认为`2` |
| isStagger        | *boolean*         | 圆点之间是否交错，默认为`true`    |

linePattern 额外的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| spacing          | *number*         | 两条线之间的距离，默认为`5`  |

squarePattern 额外的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| size          | *number*         | 矩形的大小，默认为`6`  |
| padding          | *number*         | 矩形之间的间隔，默认为`1` |
| isStagger        | *boolean*         | 矩形之间是否交错，默认为`true`    |


#### sunburstStyle

<description>**optional** *object | Function*</description>

旭日图形样式。旭日图默认随着层级增加，而逐渐减小填充透明度，可以通过 sunburstStyle 回调来控制填充透明度，详细见：[图表示例](/zh/examples/more-plots/sunburst#style)

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
// 直接指定
{
  sunburstStyle: {
    fill: 'red',
    stroke: 'yellow',
    opacity: 0.8
  },
}
// Function
{
  sunburstStyle: (datum) => {
    if (datum.value === 0.5) {
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
  }
}
```

#### reflect

<description>**optional** *x | y*</description>

径向类型，非特殊情况不建议使用。在旭日图中，不可使用 `reflect: 'x'` 进行 x 轴反转，使用 `reflect: 'y'` 进行 y 轴反转后，祖先节点在最外层，从外至内依次：父节点 - 孩子节点 - 孙子节点

### 图表组件

#### label

<!--label样式-->

| 属性名       | 类型                                                       | 介绍                                                                                       |
| ------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| type         | *string*                                                     | 当用户使用了自定义的 label 类型，需要声明具体的 type 类型，否则会使用默认的 label 类型渲染（饼图 label 支持 `inner|outer|spider`）|
| offset       | *number*                                                     | label 的偏移量                                                                             |
| offsetX      | *number*                                                     | label 相对于数据点在 X 方向的偏移距离                                                      |
| offsetY      | *number*                                                     | label 相对于数据点在 Y 方向的偏移距离                                                      |
| content      | *string | IGroup | IShape | GeometryLabelContentCallback* | 展示的文本内容，如果不声明则按照参与映射的第一字段的值进行显示                             |
| style        | *ShapeAttrs*                                                     | label 文本图形属性样式                                                                     |
| autoRotate   | *string*                                                     | 是否自动旋转，默认 true                                                                    |
| rotate       | *number*                                                     | 文本旋转角度                                                                               |
| labelLine    | *null* | *boolean* | *LabelLineCfg*                                   | 用于设置文本连接线的样式属性，null 表示不展示。                                            |
| labelEmit    | *boolean*                                                    | 只对极坐标下的文本生效，表示文本是否按照角度进行放射状显示，true 表示开启，false 表示关闭  |
| layout       | *'overlap' | 'fixedOverlap' | 'limitInShape'*              | 文本布局类型，支持多种布局函数组合使用。                                                   |
| position     | *'top' | 'bottom' | 'middle' | 'left' | 'right'*         | 指定当前 label 与当前图形的相对位置 (只对 geometry 为 interval 的 柱条形图生效)                                                       |
| animate      | *boolean | AnimateOption*                                   | 动画配置。                                                                                 |
| formatter    | *Function*                                                   | 格式化函数                                                                                 |
| autoHide     | *boolean*                                                    | 是否自动隐藏，默认 false                                                                   |

***LabelLineCfg*** 类型定义如下：（关于 *ShapeAttrs* 详细查看 [ShapeAttrs](/zh/docs/api/graphic-style) 文档）

```plain
type LabelLineCfg = {
  style?: ShapeAttrs;
}
```

示例代码：

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

<description>**可选** *string\[]*</description>

指定 tooltip 中显示的字段，默认不同图表有不同的默认字段列表。配合 `formatter` 配置一起使用，效果更佳。

```ts
tooltip: {
  fields: ['x', 'y'],
}
```

##### formatter

<description>**可选** *Function*</description>

格式化 tooltip item 内容（暂时不支持多 tooltipItems 的格式化，可以使用 `customContent` 处理）

```ts
tooltip: {
  formatter: (datum: Datum) => {
    return { name: datum.x, value: datum.y + '%' };
  },
}
```

##### follow

<description>**可选** *boolean* *default:* `true`</description>

设置 tooltip 内容框是否跟随鼠标移动。

##### enterable

<description>**可选** *boolean* *default:* `false`</description>

tooltip 是否允许鼠标滑入。

##### showTitle

<description>**可选** *boolean* *default:* `false`</description>

是否展示 tooltip 标题。

##### title

<description>**可选** *string*</description>

设置 tooltip 的标题内容：如果值为数据字段名，则会展示数据中对应该字段的数值，如果数据中不存在该字段，则直接展示 title 值。

##### position

<description>**可选** *`top` | `bottom` | `left` | `right`*</description>

设置 tooltip 的固定展示位置，相对于数据点。

##### shared

<description>**可选** *boolean*</description>

true 表示合并当前点对应的所有数据并展示，false 表示只展示离当前点最逼近的数据内容。

##### showCrosshairs

<description>**可选** *boolean* *default:* `false`</description>

是否展示 crosshairs。

##### crosshairs

<description>**可选** *object*</description>

配置 tooltip 的 crosshairs，当且仅当 `showCrosshairs` 为 true 时生效。

| 细分配置项名称 | 类型                  | 功能描述                                                            |
| -------------- | --------------------- | ------------------------------------------------------------------- |
| type           | *'x' | 'y' | 'xy'*  | crosshairs 的类型: `x` 表示 x 轴上的辅助线，`y` 表示 y 轴上的辅助项 |
| line           | *lineStyle*           | 线的配置项，详细可见 [*ShapeAttrs*](/zh/docs/api/graphic-style#configure-line-styles)                          |
| text           | *TooltipCrosshairsText | TooltipCrosshairsTextCallback*             | 辅助线文本配置，支持回调                                            |
| textBackground | *TextBackgroundStyle* | 辅助线文本背景配置                                                  |
| follow         | *boolean*             | 辅助线是否跟随鼠标移动，默认为 false，即定位到数据点                |

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

| 细分配置项名称 | 类型                 | 功能描述           |
| -------------- | -------------------- | ------------------ |
| padding        | *number | number\[]* | 文本背景周围的留白 |
| style          | *shapeStyle*         | 线的配置项, 详细可见 [*ShapeAttrs*](/zh/docs/api/graphic-style)          |

##### showMarkers

<description>**可选** *boolean* *default:* `true`</description>

是否渲染 tooltipMarkers。

##### marker

<description>**可选** *ShapeAttrs*</description>

tooltipMarker 的样式配置。

样式配置类型，详细可见: [ShapeAttrs](/zh/docs/api/graphic-style)

##### showContent

<description>**可选** *boolean* *default:* `false`</description>

是否展示 tooltip 内容框。

##### container

<description>**可选** *string|HTMLElement*</description>

自定义 tooltip 的容器。

##### containerTpl

<description>**可选** *string*</description>

用于指定图例容器的模板，自定义模板时必须包含各个 dom 节点的 class。

##### itemTpl

<description>**可选** *string*</description>

每项记录的默认模板，自定义模板时必须包含各个 dom 节点的 class。

##### domStyles

<description>**可选** *TooltipDomStyles*</description>

传入各个 dom 的样式。

<img src="https://gw.alipayobjects.com/zos/antfincdn/pKDA06iIeQ/tooltip.png" class="img-400" alt="dom-styles" />

```ts
/** Tooltip 内容框的 css 样式定义 */
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

<description>**可选** *number*</description>

tooltip 偏移量。

##### reversed

<description>**optional** *boolean*</description>

是否将 tooltip items 逆序.

##### showNil

<description>**optional** *boolean*</description>

是否显示空值的 tooltip 项

##### customItems

<description>**可选** *Function*</description>

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

<!-- todo 补充 customItems demo -->

##### customContent

<description>**可选** *Function*</description>

支持自定义模板。[在线示例](/zh/examples/case/customize#customize-tooltip)

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


### 图表交互

旭日图内置了一些交互，列表如下:

| 交互       | 描述                                     | 配置                           |
| ---------- | ---------------------------------------- | ------------------------------ |
| drill-down | 用于下钻交互，配置该交互后，点击可下钻。 | `drilldown: { enabled: true }` |

#### drilldown

<description>**optional** *DrillDownCfg*</description>

下钻交互配置。

*DrillDownCfg* 类型定义如下：

| 属性       | 类型            | 描述                     |
| ---------- | --------------- | ------------------------ |
| enabled | *boolean* | 是否开启下钻交互，默认为：'false' |
| breadCrumb | *BreadCrumbCfg* | 下钻交互的面包屑 UI 配置 |

*BreadCrumbCfg* 类型定义如下：

| 属性        | 类型         | 描述                                       |
| ----------- | ------------ | ------------------------------------------ |
| position    | *string*     | 位置。可选项：'top-left' | 'bottom-left' |
| rootText    | *string*     | 根节点的文案，默认：'Root'（中文：'初始'） |
| dividerText | *string*     | 分割线，默认：'/'                          |
| textStyle   | *ShapeAttrs* | 字体样式                                   |
| activeTextStyle | *ShapeAttrs* | 激活字体样式                               |


#### 添加交互

```ts
// 开启「鼠标移入图表元素（柱状图的柱子、点图的点等）时触发 active」的交互
interactions: [{ type: 'element-active' }]

// 开启多个交互
interactions: [{ type: 'element-active' }, { type: 'brush' }]
```

#### 配置交互

通过 `cfg` 可以对交互行为进行配置，详细参考 [G2 | 修改交互的默认交互](https://g2.antv.vision/zh/docs/api/general/interaction/#修改交互的默认交互)

```ts
// 修改 tooltip 触发事件
interactions: [
  { 
    type: 'tooltip',
    cfg: { start: [{ trigger: 'element:click', action: 'tooltip:show' }] } 
  }
]
```

#### 移除交互

```ts
// 方式1: 关闭 tooltip 交互
interactions: [{ type: 'tooltip', enable: false }]

// 方式2:
plot.chart.removeInteraction('interaction-type');
```

使用示例：

```ts
// 移除 图例筛选 交互
plot.chart.removeInteraction('legend-filter');
```


### 图表事件

在 Plot 上通过 `on` 绑定事件、`off` 移除绑定事件。

```sign
// 绑定事件
plot.on('eventName', callback);
// 绑定事件，只触发一次
plot.once('eventName', callback);
// 移除事件
plot.off('eventName', callback);
```

组合方式: `${componentName}:${eventName}`

```ts
// plot 添加点击事件,整个图表区域
plot.on('plot:click', (...args) => {
  console.log(...args);
});

// element 添加点击事件， element 代表图形元素，关于图形元素，请查看：https://g2.antv.vision/zh/docs/manual/concepts/element
plot.on('element:click', (...args) => {
  console.log(...args);
});

// 图例添加点击事件
plot.on('legend-item:click', (...args) => {
  console.log(...args);
});

// 图例名称添加点击事件
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

// label 添加点击事件
plot.on('label:click', (...args) => {
  console.log(...args);
});

// mask 添加点击事件
plot.on('mask:click', (...args) => {
  console.log(...args);
});

// axis-label 添加点击事件
plot.on('axis-label:click', (...args) => {
  console.log(...args);
});

// 给 annotation 添加点击事件
plot.on('annotation:click', (...args) => {
  console.log(...args);
});
```


### 图表方法

#### render()

渲染图表。

#### update()

更新图表配置项，配置覆盖，不会做差异比对。

使用示例：

```ts
plot.update({
  ...currentConfig,
  legend: false,
});
```

<!-- #### changeData()

<description>**optional** </description>

更新图表数据。`update()`方法会导致图形区域销毁并重建，如果只进行数据更新，而不涉及其他配置项更新，推荐使用本方法。。

默认配置：`无`

使用示例：

```ts
plot.changeData(newData);
``` -->


### 图表主题

推荐使用 💄 [ThemeSet](https://theme-set.antv.vision) 在线自定义自己的主题配置。

#### 内置主题

目前默认的内置主要有两套：`default` 和 `dark`

```ts
{
  theme: 'default', // 'dark',
}
```

#### 主题属性

除了使用内置的 `default` 和 `dark` 主题之外，还可以通过设置主题属性来修改部分主题内容：

下表列出了组成主题的大配置项上的具体属性：

| 主题属性 | 类型 |	描述 |
| --- | --- | ---|
| defaultColor | *string*| 主题色 |
| padding | *number* |	number\[] |
| fontFamily | *string* |	图表字体 |
| colors10 | *string\[]* |	分类颜色色板，分类个数小于 10 时使用 |
| colors20 |*string\[]* |	分类颜色色板，分类个数大于 10 时使用 |
| columnWidthRatio | *number* |	一般柱状图宽度占比，0 - 1 范围数值
| maxColumnWidth | *number* |	柱状图最大宽度，像素值 |
| minColumnWidth| *number* |	柱状图最小宽度，像素值 |
| roseWidthRatio | *number* |	玫瑰图占比，0 - 1 范围数值 |
| multiplePieWidthRatio	| *number* | 多层饼图/环图占比，0 - 1 范围数值 |
| geometries | *object* |	配置每个 Geometry 下每个 shape 的样式，包括默认样式以及各个状态下的样式 |
| components | *object* |	配置坐标轴，图例，tooltip, annotation 的主题样式 |
| labels | *object* |	配置 Geometry 下 label 的主题样式 |
| innerLabels	| *object*  | 配置 Geometry 下展示在图形内部的 labels 的主题样式 |
| pieLabels	| *object* | 配置饼图 labels 的主题样式 |

使用方式：

```ts
{
  theme: {
    colors10: ['#FF6B3B', '#626681', '#FFC100', '#9FB40F', '#76523B', '#DAD5B5', '#0E8E89', '#E19348', '#F383A2', '#247FEA']
  }
}
```

#### 主题属性（主题样式表）

除了以上介绍的主题属性之外，还可以传入主题样式表来自定义主题。如果你需要对全局主题进行配置的话，对样式风格进行切换，比如更改颜色、字体大小、边框粗细等

使用方式:

```ts
{
  theme: {
    styleSheet: {
      fontFamily: 'Avenir'
    }
  }
}
```

支持的样式表属性：

| **属性**                | **类型** | **描述**      |
| ----------------------- | -------- | ------------- |
| `backgroundColor`       | *string* | 背景色        |
| `brandColor`            | *string* | 主题色，默认取 10 色分类颜色色板的第一个颜色 |
| `paletteQualitative10`  | *string* | 分类颜色色板，分类个数小于 10 时使用 |
| `paletteQualitative20`  | *string* | 分类颜色色板，分类个数大于 10 时使用 |
| `paletteSemanticRed`    | *string* | 语义红色      |
| `paletteSemanticGreen`  | *string* | 语义绿色      |
| `paletteSemanticYellow` | *string* | 语义黄色      |
| `fontFamily`            | *string* | 字体          |

#### 更新主题

使用方式：

```ts
// 示例1:
plot.update({ theme: 'dark' });

// 示例2:
plot.update({ theme: { defaultColor: '#FF6B3B' } })
```

#### 自定义注册主题

另外，还可以通过 G2 提供了自定义主题机制来定义全新的主题结构，以允许用户切换、定义图表主题。前往 [G2 | 自定义主题](https://g2.antv.vision/zh/docs/api/advanced/register-theme) 查看详情。

<playground path="general/theme/demo/register-theme.ts" rid="rect-register-theme"></playground>

🌰 自定义主题 [DEMO](/zh/examples/general/theme#register-theme) 示例
