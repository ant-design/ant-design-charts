---
title: 子弹图
order: 10
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

<description>**required** *array object*</description>

设置图表数据源。数据源为对象集合，例如：`[{title: '满意度', ranges: [50,100], measures: [80], target: 85}]`。

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


#### measureField

<description>**required** *string*</description>

使用数据条的长度，实际数值的设置字段，表示实际数值。

#### rangeField

<description>**required** *string*</description>

使用背景色条的长度的设置字段，表示区间范围。

#### targetField

<description>**required** *string*</description>

使用测量标记的刻度轴位置的设置字段，表示目标值。

#### xField

<description>**optional** *string*</description>

用于区分不同的类型，适用于分组子弹图。

### 图形样式

#### layout

<description>**optional** *'horizontal' | 'vertical'* *default:* 'horizontal'</description>

表示子弹图方向。

#### color

<description>**optional** *object*</description>

设置子弹图各图形 color 属性。

| 细分配置 | 类型        | 功能描述     | 默认配置 |
| -------- | ----------- | ------------ | -------- |
| range    | *string|string\[]* | 区间背景颜色 | 无       |
| measure  | *string|string\[]* | 实际值颜色   | 无       |
| target   | *string|string\[]* | 目标值颜色   | 无       |

#### size

<description>**optional** *object*</description>

设置子弹图各图形 size 属性。

| 细分配置 | 类型       | 功能描述     | 默认配置 |
| -------- | ---------- | ------------ | -------- |
| range    | *SizeAttr* | 区间背景样式 | 30       |
| measure  | *SizeAttr* | 实际值样式   | 20       |
| target   | *SizeAttr* | 目标值样式   | 20       |

```plain
type SizeAttr = number | [number, number] | ((datum: Datum) => number);
```

#### bulletStyle

<description>**optional** *object*</description>

设置子弹图各图形 style 属性。

| 细分配置 | 类型        | 功能描述     | 默认配置             |
| -------- | ----------- | ------------ | -------------------- |
| range    | *StyleAttr* | 区间背景样式 | { fillOpacity: 0.5 } |
| measure  | *StyleAttr* | 实际值样式   | 无                   |
| target   | *StyleAttr* | 目标值样式   | 无                   |

```plain
type StyleAttr = ShapeStyle | ((datum: object) => ShapeStyle);
```

`ShapeStyle` 结构可以参考：

<!--图形样式-->

| 属性名        | 类型            | 介绍                                                                                                         |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| fill          | *string*         | 图形的填充色                                                                                                 |
| r          | *number*         | 用于 `point`, 代表图形的半径大小 |
| fillOpacity   | *number*         | 图形的填充透明度                                                                                             |
| stroke        | *string*         | 图形的描边                                                                                                   |
| lineWidth     | *number*         | 图形描边的宽度                                                                                               |
| lineDash      | \[number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| lineOpacity   | *number*         | 描边透明度                                                                                                   |
| opacity       | *number*         | 图形的整体透明度                                                                                             |
| shadowColor   | *string*         | 图形阴影颜色                                                                                                 |
| strokeOpacity | *number*         | 图形边框透明度                                                                                               |
| shadowBlur    | *number*         | 图形阴影的高斯模糊系数                                                                                       |
| shadowOffsetX | *number*         | 设置阴影距图形的水平距离                                                                                     |
| shadowOffsetY | *number*         | 设置阴影距图形的垂直距离                                                                                     |
| cursor        | *string*         | 鼠标样式。同 css 的鼠标样式，默认 'default'。                                                                |

示例代码：

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

关于 ShapeStyle 更加详细的文档参考 [绘图属性](/zh/docs/api/graphic-style)。


### 图表组件

#### label

<description>**optional** *object*</description>

设置子弹图各图形 label 属性。

| 细分配置 | 类型                | 功能描述            | 默认配置 |
| -------- | ------------------- | ------------------- | -------- |
| range    | *GeometryLabelAttr* | 区间的 label 属性   | 无       |
| measure  | *GeometryLabelAttr* | 实际值的 label 属性 | true     |
| target   | *GeometryLabelAttr* | 目标值的 label 属性 | 无       |

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


#### axis

xAxis、yAxis 配置相同（由于 DualAxes 是双轴， yAxis 类型是数组类型）。

##### top

<description>**optional** *boolean*  *default:* `false`</description>

是否渲染在画布顶层，防止部分图形中，需要将 axis 显示在图形上面，避免被图形遮挡。

##### position

<description>**optional** *`top` | `bottom` | `left` | `right`*</description>

适用于直角坐标系，设置坐标轴的位置。

##### title

<description>**optional** *object*</description>

标题的配置项，null 表示不展示。

| 细分配置项名称 | 类型         | 功能描述                                                  |
| -------------- | ------------ | --------------------------------------------------------- |
| text           | *string*     | 坐标轴标题                                                |
| position       | *string*     | 轴标题的位置，默认：'center'。可选项： start, center, end |
| offset         | *number*     | 标题距离坐标轴的距离                                      |
| spacing        | *number*     | 标题距离坐标轴文本的距离                                  |
| style          | *shapeStyle* | 标题文本配置项                                            |
| autoRotate     | *boolean*    | 是否自动旋转                                              |

***shapeStyle***

<!--图形样式-->

| 属性名        | 类型            | 介绍                                                                                                         |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| fill          | *string*         | 图形的填充色                                                                                                 |
| r          | *number*         | 用于 `point`, 代表图形的半径大小 |
| fillOpacity   | *number*         | 图形的填充透明度                                                                                             |
| stroke        | *string*         | 图形的描边                                                                                                   |
| lineWidth     | *number*         | 图形描边的宽度                                                                                               |
| lineDash      | \[number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| lineOpacity   | *number*         | 描边透明度                                                                                                   |
| opacity       | *number*         | 图形的整体透明度                                                                                             |
| shadowColor   | *string*         | 图形阴影颜色                                                                                                 |
| strokeOpacity | *number*         | 图形边框透明度                                                                                               |
| shadowBlur    | *number*         | 图形阴影的高斯模糊系数                                                                                       |
| shadowOffsetX | *number*         | 设置阴影距图形的水平距离                                                                                     |
| shadowOffsetY | *number*         | 设置阴影距图形的垂直距离                                                                                     |
| cursor        | *string*         | 鼠标样式。同 css 的鼠标样式，默认 'default'。                                                                |

示例代码：

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

关于 ShapeStyle 更加详细的文档参考 [绘图属性](/zh/docs/api/graphic-style)。


***label***

<description>**optional** *object*</description>

文本标签的配置项，null 表示不展示。

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


##### label

<description> **optional** *AxisLabelCfg | null*</description>

文本标签的配置项，null 表示不展示。*AxisLabelCfg* 配置如下：

| 参数名       | 类型                                                     | 默认值  | 描述                     |
| ------------ | -------------------------------------------------------- | ------- | ------------------------ |
| offset       | *number*                                                 | -       | label 的偏移量           |
| rotate       | *number*                                                 | -       | 文本旋转角度             |
| autoRotate   | *boolean |avoidCallback*             | `true`  | 是否自动旋转             |
| autoHide     | *boolean |avoidCallback | { type:string,cfg?:AxisLabelAutoHideCfg }*   | `false` | 是否自动隐藏             |
| autoEllipsis | *boolean |avoidCallback |string*                                                | `false` | 是否自动省略             |
| formatter    | *`(text: string, item: ListItem, index: number) => any`* | `false` | 格式化函数               |
| style        | *[ShapeAttrs](/zh/docs/api/graphic-style)*               | -       | 坐标轴刻度线的样式配置项 |

***avoidCallback*** 类型定义如下：

```ts
type avoidCallback = (isVertical: boolean, labelGroup: IGroup, limitLength?: number) => boolean;
```

***AxisLabelAutoHideCfg*** 类型定义如下：

```ts
interface AxisLabelAutoHideCfg {
  /** 最小间距配置 */
  minGap?: number;
}
```

##### verticalFactor

<description>**optional** *number*</description>

标记坐标轴 label 的方向，左侧为 1，右侧为 -1（仅适用于垂直方向的坐标轴）

##### verticalLimitLength

<description>**optional** *number*</description>

配置坐标轴垂直方向的最大限制长度，对文本自适应有很大影响。

##### grid

<description>**optional** *object*</description>

坐标轴网格线的配置项，null 表示不展示。

| 细分配置项名称 | 类型               | 功能描述                                                 |
| -------------- | ------------------ | -------------------------------------------------------- |
| line           | *lineStyle*        | 线的样式,                                                |
| alternateColor | *string|string\[]* | 两个栅格线间的填充色                                     |
| closed         | *boolean*          | 对于 circle 是否关闭 grid                                |
| alignTick      | *boolean*          | 是否同刻度线对齐，如果值为 false，则会显示在两个刻度中间 |

网格线条样式的配置与 [line](#line) 是一致的。

##### line

<description>**optional** *object*</description>

坐标轴线的配置项，null 表示不展示。

<!--线条样式-->

> **注意:** 线条样式的完整配置是 `{ style: { stroke: '#ddd', ... } }`, 如果配置线条样式不生效的时候，请检查一下。

| 属性名        | 类型              | 介绍                                                                                                   |
| ------------- | ----------------- | ------------------------------------------------------------------------------------------------------ |
| stroke        | *string*          | 线的颜色                                                                                               |
| lineWidth     | *number*          | 线宽                                                                                                   |
| lineDash      | *\[number,number]* | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| opacity       | *number*          | 透明度                                                                                                 |
| shadowColor   | *string*          | 阴影颜色                                                                                               |
| shadowBlur    | *number*          | 高斯模糊系数                                                                                           |
| shadowOffsetX | *number*          | 设置阴影距图形的水平距离                                                                               |
| shadowOffsetY | *number*          | 设置阴影距图形的垂直距离                                                                               |
| cursor        | *string*          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                                                           |

示例（设置 x 轴的 grid 网格线条样式）：

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

坐标轴刻度线的配置项，null 表示不展示。

| 细分配置项名称 | 类型                               | 功能描述                     |
| -------------- | ---------------------------------- | ---------------------------- |
| style          | *ShapeAttrs | ShapeAttrsCallback* | 坐标轴刻度线的样式。         |
| alignTick      | *boolean*                          | 坐标轴刻度线是否同 tick 对齐 |
| length         | *number*                           | 坐标轴刻度线长度             |

关于 *ShapeAttrs* 详细查看 [ShapeAttrs](/zh/docs/api/graphic-style) 文档。*ShapeAttrsCallback* 回调参数如下：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### subTickLine

<description>**optional** *object*</description>

坐标轴子刻度线的配置项，null 表示不展示。

| 细分配置项名称 | 类型                               | 功能描述               |
| -------------- | ---------------------------------- | ---------------------- |
| style          | *ShapeAttrs | ShapeAttrsCallback* | 坐标轴子刻度线的样式。 |
| count          | *number*                           | 子刻度个数             |
| length         | *number*                           | 坐标轴子刻度线长度     |

关于 *ShapeAttrs* 详细查看 [ShapeAttrs](/zh/docs/api/graphic-style) 文档。*ShapeAttrsCallback* 回调参数如下：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### nice

<description>**optional** *boolean* *default:* `true`</description>

是否美化。

##### min

<description>**optional** *number* *default:* `0`</description>

坐标轴最小值。

##### max

<description>**optional** *number*</description>

坐标轴最大值。

##### minLimit

<description>**optional** *number*</description>

最小值限定。

##### maxLimit

<description>**optional** *number*</description>

最大值限定。

##### tickCount

<description>**optional** *number*</description>

期望的坐标轴刻度数量，非最终结果。

##### tickInterval

<description>**optional** *number*</description>

坐标轴刻度间隔。

##### tickMethod

<description>**optional** *string | Function* *default:* `false`</description>

指定 tick 计算方法，或自定义计算 tick 的方法，内置 tick 计算方法包括 `cat`、`time-cat`、 `wilkinson-extended`、`r-pretty`、`time`、`time-pretty`、`log`、`pow`、`quantile`、`d3-linear`。

##### animate

<description>**optional** *boolean* *default:* `true`</description>

动画开关，默认开启。

##### animateOption

<description>**optional** *object*</description>

动画参数配置。

```ts
interface ComponentAnimateCfg {
  /** 动画执行时间 */
  readonly duration?: number;
  /** 动画缓动函数 */
  readonly easing?: string;
  /** 动画延迟时间 */
  readonly delay?: number;
}
// 配置参考
{
  animateOption: {
    appear: ComponentAnimateCfg;
    update: ComponentAnimateCfg;
    enter: ComponentAnimateCfg;
    leave: ComponentAnimateCfg;
  }
}
```


#### 图例

配置图例有两种方式
第一种，传入 `boolean` 设置是否显示图例。

```ts
legend: false; // 关闭图例
```

第二种，传入 *LegendCfg* 对图例进行整体配置。

```ts
legend: {
  layout: 'horizontal',
  position: 'right'
}
```

##### layout

<description>**optional** *horizontal | vertical* </description>

图例布局方式。提供横向布局和纵向布局。

##### title

<description>**optional** *G2LegendTitleCfg* </description>

图例标题配置，默认不展示。*G2LegendTitleCfg* 配置如下：

| 参数名  | 类型     | 描述                                                         |
| ------- | -------- | ------------------------------------------------------------ |
| title   | *string* | 文本显示内容                                                 |
| spacing | *number* | 标题同图例项的间距                                           |
| style   | *object* | 文本样式配置项，参考  [绘图属性](/zh/docs/api/graphic-style) |

##### position

<description>**optional** *string* </description>

图例位置，可选项：'top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right'。

尝试一下：

<playground path="component/legend/demo/legend-position.jsx" rid="legend-position"></playground>

##### offsetX

<description>**optional** *number* </description>

图例 x 方向的偏移。

##### offsetY

<description>**optional** *number* </description>

图例 y 方向的偏移。

##### background

<description>**optional** *LegendBackgroundCfg* </description>

背景框配置项。*LegendBackgroundCfg* 配置如下：

| 参数名  | 类型                 | 描述                                                       |
| ------- | -------------------- | ---------------------------------------------------------- |
| padding | *number | number\[]* | 背景的留白                                                 |
| style   | *ShapeAttr*          | 背景样式配置项, 参考[绘图属性](/zh/docs/api/graphic-style) |

##### flipPage

<description>**optional** *boolean* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，当图例项过多时是否进行分页。(⚠️ 暂不支持多行展示分页)

##### maxRow

<description> *number* **optional** </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，当图例项过多分页时，可以设置最大行数（仅适用于 `layout: 'horizontal'`），默认为：1。

##### pageNavigator

<description>**optional** *object* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例分页导航器的主题样式设置。*LegendPageNavigatorCfg* 配置如下：

| 参数名       | 类型                       | 默认值 | 描述                    |
| ------------ | -------------------------- | ------ | ----------------------- |
| marker.style | *PageNavigatorMarkerStyle* | -      | 分页器指示箭头 样式配置 |
| text.style   | *PageNavigatorTextStyle*   | -      | 分页器页面信息 样式配置 |

***PageNavigatorMarkerStyle*** 配置如下：

| 参数名          | 类型     | 默认值 | 描述                                                             |
| --------------- | -------- | ------ | ---------------------------------------------------------------- |
| inactiveFill    | *string* | -      | Fill color of arrow marker when unclickable (inactive status).   |
| inactiveOpacity | *number* | -      | Fill opacity of arrow marker when unclickable (inactive status). |
| fill            | *string* | -      | Default fill color of arrow marker (active status).              |
| opacity         | *number* | -      | Default fill opacity of arrow marker (active status).            |
| size            | *number* | -      | Size of arrow marker.                                            |

***PageNavigatorTextStyle*** 配置如下：

| 参数名   | 类型     | 默认值 | 描述                               |
| -------- | -------- | ------ | ---------------------------------- |
| fill     | *string* | -      | Font color of page navigator info. |
| fontSize | *number* | -      | Font size of page navigator info.  |

示例：

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

<playground path="component/legend/demo/legend-flippage.ts" rid="page-navigator"></playground>

##### itemHeight

<description>**optional** *number* *default:* `null`</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例的高度, 默认为 null。

##### itemWidth

<description>**optional** *number* *default:* `null`</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项的宽度, 默认为 null，自动计算。

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

<playground path="component/legend/demo/legend-item-value.ts" rid="legend-item-value"></playground>

##### itemSpacing

<description>**optional** *number* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，控制图例项水平方向的间距。

##### label

<description>**optional** *ContinueLegendLabelCfg* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，文本的配置项。*ContinueLegendLabelCfg* 配置如下：

| 参数名  | 类型     | 默认值 | 描述                                                                                                                                          |
| ------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| align   | *string* | -      | 文本同滑轨的对齐方式 <br/> - rail ： 同滑轨对齐，在滑轨的两端 <br/> - top, bottom: 图例水平布局时有效 <br/> - left, right: 图例垂直布局时有效 |
| style   | *object* | -      | 文本样式配置项，详见  [绘图属性](/zh/docs/api/graphic-style)                                                                                  |
| spacing | *number* | -      | 文本同滑轨的距离                                                                                                                              |
| formatter  | *(value: any) => string* | 文本的格式化方式 |

##### marker

<description>**optional** *MarkerCfg | MarkerCfgCallback* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项的 marker 图标的配置。

<!-- #### *MarkerCfg*  配置 -->

| 参数名  | 类型                  | 默认值 | 描述                                                                     |
| ------- | --------------------- | ------ | ------------------------------------------------------------------------ |
| symbol  | *string | MarkerSymbolCallback*  | -      | 配置图例 marker 的 symbol 形状 |
| style   | *ShapeAttrs | ((style: ShapeAttrs) => ShapeAttrs)*  | -   | 图例项 marker 的配置项                                           |
| spacing | number                | -      | 图例项 marker 同后面 name 的间距                                         |

***MarkerSymbolCallback*** 类型定义如下：

除了内置一些 symbol 类型，可以指定具体的标记类型，也可以通过回调的方式返回 symbol 绘制的 path 命令

内置支持的标记类型有：`"circle" | "square" | "line" | "diamond" | "triangle" | "triangle-down" | "hexagon" | "bowtie" | "cross" | "tick" | "plus" | "hyphen"`

回调的方式为：`(x: number, y: number, r: number) => PathCommand`；

<!--这里可以插入一个代码示例-->


```sign
type LegendItem = { name: string; value: string; } & MarkerCfg;

type MarkerCfgCallback = (name: string, index: number, item: LegendItem) => MarkerCfg;
```

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

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项容器最大宽度设置。当 layout 等于 'horizontal' 时，生效，当图例项横向排布，超过最大宽度时，会结合 `flipPage: true` 进行分页。实际上，图例项容器最大宽度的计算如下：

```sign
const viewBBox = this.view.viewBBox;
const maxWidth = Math.min(maxWidth, maxWidthRatio * viewBBox.width);
```

##### maxHeight

<description>**optional** *number* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项容器最大高度设置。当 layout 等于 'vertical' 时，生效，当图例项纵向排布，超过最大高度时，会结合 `flipPage: true` 进行分页。实际上，图例项容器最大宽度的计算如下：

```sign
const viewBBox = this.view.viewBBox;
const maxHeight = Math.min(maxHeight, maxHeightRatio * viewBBox.height);
```

##### reversed

<description>**optional** *boolean* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，是否将图例项逆序展示。

##### custom

<description>**optional** *boolean* </description>

是否为自定义图例，当该属性为 true 时，需要声明 items 属性。

##### items

<description>**optional** *LegendItem\[]* </description>
适用于 <tag color="green" text="分类图例">分类图例</tag>，用户自己配置图例项的内容。*LegendItem* 配置如下：

| 参数名 | 类型        | 是否必选 | 描述                     |
| ------ | ----------- | -------- | ------------------------ |
| id     | *string*    |          | 唯一值，用于动画或者查找 |
| name   | *string*    | required | 名称                     |
| value  | any         | required | 值                       |
| marker | *MarkerCfg* |          | 图形标记                 |

<!-- #### *MarkerCfg*  配置 -->

| 参数名  | 类型                  | 默认值 | 描述                                                                     |
| ------- | --------------------- | ------ | ------------------------------------------------------------------------ |
| symbol  | *string | MarkerSymbolCallback*  | -      | 配置图例 marker 的 symbol 形状 |
| style   | *ShapeAttrs | ((style: ShapeAttrs) => ShapeAttrs)*  | -   | 图例项 marker 的配置项                                           |
| spacing | number                | -      | 图例项 marker 同后面 name 的间距                                         |

***MarkerSymbolCallback*** 类型定义如下：

除了内置一些 symbol 类型，可以指定具体的标记类型，也可以通过回调的方式返回 symbol 绘制的 path 命令

内置支持的标记类型有：`"circle" | "square" | "line" | "diamond" | "triangle" | "triangle-down" | "hexagon" | "bowtie" | "cross" | "tick" | "plus" | "hyphen"`

回调的方式为：`(x: number, y: number, r: number) => PathCommand`；

<!--这里可以插入一个代码示例-->


##### min

<description>**optional** *number* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最小值。

##### max

<description>**optional** *number* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最大值。

##### value

<description>**optional** *number\[]* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，当前选中的范围。

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

<playground path='component/legend/demo/legend-focus.ts' rid='legend-selected'></playground>

##### slidable

<description>**optional** *boolean*  *default:* `true`</description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块是否可以滑动。

##### rail

<description>**optional** *ContinueLegendRailCfg* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，图例滑轨（背景）的样式配置项。*ContinueLegendRailCfg* 配置如下：

| 参数名        | 类型     | 描述                                                                             |
| ------------- | -------- | -------------------------------------------------------------------------------- |
| type          | *string* | rail 的类型，color, size，默认：'color'                                                       |
| size          | *number* | 滑轨的宽度                                                                       |
| defaultLength | *number* | 滑轨的默认长度，默认：100。当限制了 maxWidth,maxHeight 时，不会使用这个属性会自动计算长度 |
| style         | *object* | 滑轨的样式，参考 [绘图属性](/zh/docs/api/graphic-style)                          |

|**rail.type='color'**| **rail.type='size** |
|---|---|
|![color](https://gw.alipayobjects.com/zos/antfincdn/jwMUDJ63aN/72957823-0148-4b24-bbf4-c756959467d3.png)|![size](https://gw.alipayobjects.com/zos/antfincdn/t%26LwpJHUA6/52de13d5-b232-4efb-aacf-6d673778d92a.png)|

##### track

<description>**optional** *ContinueLegendTrackCfg* </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的色块样式配置项。*ContinueLegendTrackCfg* 配置如下：

| 参数名 | 类型     | 默认值 | 描述                                                        |
| ------ | -------- | ------ | ----------------------------------------------------------- |
| style  | *object* | -      | 选定范围的样式，参考 [绘图属性](/zh/docs/api/graphic-style) |

##### handler

<description>**optional** *ContinueLegendHandlerCfg* </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块的配置项。(暂不支持自定义)

*ContinueLegendHandlerCfg* 配置如下：

| 参数名 | 类型     | 默认值 | 描述                                                        |
| ------ | -------- | ------ | ----------------------------------------------------------- |
| size   | *number* | -      | 滑块的大小，默认：10                                                  |
| style  | *object* | -      | 滑块的样式设置，参考 [绘图属性](/zh/docs/api/graphic-style) |


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
