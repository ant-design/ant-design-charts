### 图表容器

#### width

<description>**optional** _number_ _default:_ `400`</description>

设置图表宽度。

#### height

<description>**optional** _number_ _default:_ `400`</description>

设置图表高度。

#### autoFit

<description>**optional** _boolean_ _default:_ `true`</description>

图表是否自适应容器宽高。当 `autoFit` 设置为 true 时，`width` 和 `height` 的设置将失效。

#### padding

<description>**optional** _number\[] 、 number 、 'auto'_</description>

画布的 `padding` 值，代表图表在上右下左的间距，可以为单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向，或者开启 `auto`，由底层自动计算间距。

#### appendPadding

<description>**optional** _number\[] 、 number_</description>

额外增加的 `appendPadding` 值，在 `padding` 的基础上，设置额外的 padding 数值，可以是单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向。

#### renderer

<description>**optional** _string_ _default:_ `canvas`</description>

设置图表渲染方式为 `canvas` 或 `svg`。

#### pixelRatio

<description>**optional** _number_ _default:_ `window.devicePixelRatio`</description>

设置图表渲染的像素比，和底层的 devicePixelRatio 含义一致，一般不用设置，除非在页面有整体 scale 的情况下，可以自定义。

#### limitInPlot

<description>**optional** _boolean_</description>

是否对超出坐标系范围的 Geometry 进行剪切。

<!-- 先插入到这里 -->

#### locale

<description>**optional** _string_</description>

指定具体语言，目前内置 'zh-CN' and 'en-US' 两个语言，你也可以使用 `G2Plot.registerLocale` 方法注册新的语言。语言包格式参考：[src/locales/en_US.ts](https://github.com/antvis/G2Plot/blob/master/src/locales/en_US.ts)

### 数据映射

#### percent

<description>**required** _number_</description>

设置百分比数值 \[0-1]，表示进度条图的进度情况。

### 图形样式

#### radius

<description>**optional** _number_</description>

外环的半径 \[0-1]，相对于画布宽高的最小值来计算的。

#### innerRadius

<description>**optional** _number_</description>

内环的半径 \[0-1]，相对于内半径 radius 来计算的。

#### progressStyle

<description>**optional** _StyleAttr 、 Function_</description>

柱子样式配置。

<!--图形样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| fill | _string_ | 图形的填充色 |
| r | _number_ | 用于 `point`, 代表图形的半径大小 |
| fillOpacity | _number_ | 图形的填充透明度 |
| stroke | _string_ | 图形的描边 |
| lineWidth | _number_ | 图形描边的宽度 |
| lineDash | \[number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| lineOpacity | _number_ | 描边透明度 |
| opacity | _number_ | 图形的整体透明度 |
| shadowColor | _string_ | 图形阴影颜色 |
| strokeOpacity | _number_ | 图形边框透明度 |
| shadowBlur | _number_ | 图形阴影的高斯模糊系数 |
| shadowOffsetX | _number_ | 设置阴影距图形的水平距离 |
| shadowOffsetY | _number_ | 设置阴影距图形的垂直距离 |
| cursor | _string_ | 鼠标样式。同 css 的鼠标样式，默认 'default'。 |

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

关于 ShapeStyle 更加详细的文档参考 [绘图属性](/zh-CN/guide/graphic-style)。

#### color

<description>**optional** _string 、 string\[] 、 Function_</description>

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

### 图表组件

#### tooltip

##### fields

<description>**可选** _string\[]_</description>

指定 tooltip 中显示的字段，默认不同图表有不同的默认字段列表。配合 `formatter` 配置一起使用，效果更佳。

```ts
tooltip: {
  fields: ['x', 'y'],
}
```

##### formatter

<description>**可选** _Function_</description>

格式化 tooltip item 内容（暂时不支持多 tooltipItems 的格式化，可以使用 `customContent` 处理）

```ts
tooltip: {
  formatter: (datum: Datum) => {
    return { name: datum.x, value: datum.y + '%' };
  },
}
```

##### follow

<description>**可选** _boolean_ _default:_ `true`</description>

设置 tooltip 内容框是否跟随鼠标移动。

##### enterable

<description>**可选** _boolean_ _default:_ `false`</description>

tooltip 是否允许鼠标滑入。

##### showTitle

<description>**可选** _boolean_ _default:_ `false`</description>

是否展示 tooltip 标题。

##### title

<description>**可选** _string_</description>

设置 tooltip 的标题内容：如果值为数据字段名，则会展示数据中对应该字段的数值，如果数据中不存在该字段，则直接展示 title 值。

##### position

<description>**可选** _`top` | `bottom` | `left` | `right`_</description>

设置 tooltip 的固定展示位置，相对于数据点。

##### shared

<description>**可选** _boolean_</description>

true 表示合并当前点对应的所有数据并展示，false 表示只展示离当前点最逼近的数据内容。

##### showCrosshairs

<description>**可选** _boolean_ _default:_ `false`</description>

是否展示 crosshairs。

##### crosshairs

<description>**可选** _object_</description>

配置 tooltip 的 crosshairs，当且仅当 `showCrosshairs` 为 true 时生效。

| 细分配置项名称 | 类型 | 功能描述 |
| --- | --- | --- |
| type | _'x' 、 'y' 、 'xy'_ | crosshairs 的类型: `x` 表示 x 轴上的辅助线，`y` 表示 y 轴上的辅助项 |
| line | _lineStyle_ | 线的配置项，详细可见 [_ShapeAttrs_](/zh-CN/guide/graphic-style#configure-line-styles) |
| text | _TooltipCrosshairsText 、 TooltipCrosshairsTextCallback_ | 辅助线文本配置，支持回调 |
| textBackground | _TextBackgroundStyle_ | 辅助线文本背景配置 |
| follow | _boolean_ | 辅助线是否跟随鼠标移动，默认为 false，即定位到数据点 |

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

| 细分配置项名称 | 类型 | 功能描述 |
| --- | --- | --- |
| padding | _number 、 number\[]_ | 文本背景周围的留白 |
| style | _shapeStyle_ | 线的配置项, 详细可见 [_ShapeAttrs_](/zh-CN/guide/graphic-style) |

##### showMarkers

<description>**可选** _boolean_ _default:_ `true`</description>

是否渲染 tooltipMarkers。

##### marker

<description>**可选** _ShapeAttrs_</description>

tooltipMarker 的样式配置。

样式配置类型，详细可见: [ShapeAttrs](/zh-CN/guide/graphic-style)

##### showContent

<description>**可选** _boolean_ _default:_ `false`</description>

是否展示 tooltip 内容框。

##### container

<description>**可选** _string|HTMLElement_</description>

自定义 tooltip 的容器。

##### containerTpl

<description>**可选** _string_</description>

用于指定图例容器的模板，自定义模板时必须包含各个 dom 节点的 class。

##### itemTpl

<description>**可选** _string_</description>

每项记录的默认模板，自定义模板时必须包含各个 dom 节点的 class。

##### domStyles

<description>**可选** _TooltipDomStyles_</description>

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

<description>**可选** _number_</description>

tooltip 偏移量。

##### reversed

<description>**optional** _boolean_</description>

是否将 tooltip items 逆序.

##### showNil

<description>**optional** _boolean_</description>

是否显示空值的 tooltip 项

##### customItems

<description>**可选** _Function_</description>

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

<description>**可选** _Function_</description>

支持自定义模板。

```ts
{
  tooltip: {
    customContent: (title, data) => {
      return `<div>${title}</div>`;
    };
  }
}
```

尝试一下：

<playground path="case/customize/demo/customize-tooltip.ts" rid="customize-tooltip"></playground>

#### annotations

##### type

<description>**required** _string_ </description>

标注类型, text | line | image | region | dataMarker | dataRegion | regionFilter | shape | html.

##### position

<description>**required** _object_ </description>

标注位置。

- 第一种，object 使用图表 x, y 对应的原始数据例如：{ time: '2010-01-01', value: 200 };
- 第二种，数组来配置位置 \[ x, y ]，根据数组中的值的存在以下几种形式： 1、对应数据源中的原始数据； 2、关键字：'min'、'max'、'median'、'start'、'end' 分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束； 3、x, y 都是百分比的形式，如 30%，在绘图区域定位(即坐标系内)。 1 和 2 两种类型的数据可以混用，但是使用百分比形式时 x 和 y 必须都是百分比形式。
- 第三种，回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景。

##### top

<description>**optional** _boolean_ _default:_ `false`</description>

是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### animate

<description>**optional** _boolean_ </description>

是否进行动画。

##### offsetX

<description>**optional** _number_ </description>

x 方向的偏移量。

##### offsetY

<description>**optional** _number_ </description>

y 方向的偏移量。

##### start

<description>**optional** _Array_ </description>

起始位置，一般用于 line、region 等。

##### end

<description>**optional** _Array_ </description>

结束位置，一般用于 line、region 等。

```ts
{
  type: 'line',
  start: ['min', 'median'],
  end: ['max', 'median'],
},
```

##### style

<description>**optional** _object_ </description>

图形样式属性，参考绘图属性。

##### src

<description>**optional** _string_ </description>

图片路径，用于 image 中。

##### content

<description>**optional** _string_ </description>

文本内容，用于 text 中。

##### rotate

<description>**optional** _number_ </description>

文本的旋转角度，弧度制。

##### maxLength

<description>**optional** _number_ </description>

文文本的最大长度。

##### autoEllipsis

<description>**optional** _boolean_ </description>

超出 maxLength 是否自动省略。

##### ellipsisPosition

<description>**optional** \_head | middle | tail \_ </description>

文本截断的位置。

##### isVertical

<description>**optional** _boolean_ </description>

文本在二维坐标系的显示位置，是沿着 x 轴显示 还是沿着 y 轴显示。

##### background

<description>**optional** _object_ </description>

文字包围盒样式设置。

| 参数名  | 类型                  | 默认值 | 描述                                                 |
| ------- | --------------------- | ------ | ---------------------------------------------------- |
| style   | _object_              | -      | 文本背景的样式, 参考[绘图属性](/guide/graphic-style) |
| padding | _number 、 number\[]_ | -      | 文本背景周围的留白                                   |

##### color

<description>**optional** _string_ </description>

染色色值，一般用于 regionFilter。

##### apply

<description>**optional** _string\[]_ </description>

设定 regionFilter 只对特定 geometry 类型起作用，如 apply: \['area']，一般用于 regionFilter。

##### autoAdjust

<description>**optional** _boolean_ </description>

文本超出绘制区域时，是否自动调节文本方向。

##### direction

<description>**optional** _upward 、 downward_ </description>

朝向。

##### lineLength

<description>**optional** _number_ </description>

line 长度，用于 dataRegion。

##### render

<description>**optional** _string_ </description>

自定义标记的绘制 render 函数，其他 container 为标记绘制的父容器, view 为图形实例, helpers 为辅助函数，其他 parserPosition 可以用来计算数据点对应的坐标位置，用于 shape。

##### container

<description>**optional** _string 、 HTMLElement_ </description>

自定义 HTML 图形标记的容器元素，用于 html

##### html

<description>**optional** _string 、 HTMLElement_ </description>

自定义的图形标记的 HTML 元素，可为 HTML DOM 字符串，或 HTML 元素，或 html 回调函数，用于 html

##### alignX

<description>**optional** _'left' 、 'middle' 、 'right'_ </description>

DOM 元素在 X 方向的对齐方式，用于 html

##### alignY

<description>**optional** _left' 、 'middle' 、 'right'_ </description>

DOM 元素在 Y 方向的对齐方式，用于 html

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

| 主题属性 | 类型 | 描述 |
| --- | --- | --- |
| defaultColor | _string_ | 主题色 |
| padding | _number_ | number\[] |
| fontFamily | _string_ | 图表字体 |
| colors10 | _string\[]_ | 分类颜色色板，分类个数小于 10 时使用 |
| colors20 | _string\[]_ | 分类颜色色板，分类个数大于 10 时使用 |
| columnWidthRatio | _number_ | 一般柱状图宽度占比，0 - 1 范围数值 |
| maxColumnWidth | _number_ | 柱状图最大宽度，像素值 |
| minColumnWidth | _number_ | 柱状图最小宽度，像素值 |
| roseWidthRatio | _number_ | 玫瑰图占比，0 - 1 范围数值 |
| multiplePieWidthRatio | _number_ | 多层饼图/环图占比，0 - 1 范围数值 |
| geometries | _object_ | 配置每个 Geometry 下每个 shape 的样式，包括默认样式以及各个状态下的样式 |
| components | _object_ | 配置坐标轴，图例，tooltip, annotation 的主题样式 |
| labels | _object_ | 配置 Geometry 下 label 的主题样式 |
| innerLabels | _object_ | 配置 Geometry 下展示在图形内部的 labels 的主题样式 |
| pieLabels | _object_ | 配置饼图 labels 的主题样式 |

使用方式：

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

#### 主题属性（主题样式表）

除了以上介绍的主题属性之外，还可以传入主题样式表来自定义主题。如果你需要对全局主题进行配置的话，对样式风格进行切换，比如更改颜色、字体大小、边框粗细等

使用方式:

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

| **属性**                | **类型** | **描述**                                     |
| ----------------------- | -------- | -------------------------------------------- |
| `backgroundColor`       | _string_ | 背景色                                       |
| `brandColor`            | _string_ | 主题色，默认取 10 色分类颜色色板的第一个颜色 |
| `paletteQualitative10`  | _string_ | 分类颜色色板，分类个数小于 10 时使用         |
| `paletteQualitative20`  | _string_ | 分类颜色色板，分类个数大于 10 时使用         |
| `paletteSemanticRed`    | _string_ | 语义红色                                     |
| `paletteSemanticGreen`  | _string_ | 语义绿色                                     |
| `paletteSemanticYellow` | _string_ | 语义黄色                                     |
| `fontFamily`            | _string_ | 字体                                         |

#### 更新主题

使用方式：

```ts
// 示例1:
plot.update({ theme: 'dark' });

// 示例2:
plot.update({ theme: { defaultColor: '#FF6B3B' } });
```

#### 自定义注册主题

另外，还可以通过 G2 提供了自定义主题机制来定义全新的主题结构，以允许用户切换、定义图表主题。前往 [G2 | 自定义主题](https://g2.antv.vision/zh/docs/api/advanced/register-theme) 查看详情。

<playground path="general/theme/demo/register-theme.ts" rid="rect-register-theme"></playground>

🌰 自定义主题 [DEMO](/zh/examples/general/theme#register-theme) 示例

#### statistic

<description>**optional** _object_</description>

统计内容组件，主要包含 title、content 来部分内容。

| 配置项  | 类型                     | 描述     |
| ------- | ------------------------ | -------- |
| title   | _false 、 StatisticText_ | 标题     |
| content | _false 、 StatisticText_ | 主体内容 |

StatisticText

| 配置项 | 类型 | 描述 |
| --- | --- | --- |
| style | _CSSStyleDeclaration_ | 统计文本的样式 (css 样式) |
| content | _string_ | 主体文本内容。优先级: `customHtml` > `formatter` > `content` |
| customHtml | _CustomHtml_ | 自定义主体文本的 html，优先级高于 formatter |
| formatter | _Function_ | 主体文本的格式化内容 |
| rotate | _number_ | 旋转角度 |
| offsetX | _number_ | X 偏移值 |
| offsetY | _number_ | Y 偏移值 |

**CustomHtml** 类型定义如下：

```ts
type CustomHtml = (container: HTMLElement, view: View, datum: object, data: object[]) => string;
```
