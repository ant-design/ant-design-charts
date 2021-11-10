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

<!-- <playground path="more-plots/stock/demo/custom-crosshairs.ts" rid="crosshairs" height="400"></playground> -->


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
