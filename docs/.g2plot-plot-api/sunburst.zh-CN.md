



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


### 数据映射

#### data

<description>**required** *object*</description>

设置图表数据源。

#### meta

<description>**optional** *object*</description>

全局化配置图表数据元信息，以字段为单位进行配置，来定义数据的类型和展示方式。在 meta 上的配置将同时影响所有组件的文本信息。

| 细分配置项名称 | 类型       | 功能描述                                    |
| -------------- | ---------- | ------------------------------------------- |
| alias          | *string*   | 字段的别名                                  |
| formatter      | *function* | callback 方法，对该字段所有值进行格式化处理 |
| values         | *string\[]* | 枚举该字段下所有值                          |
| range          | *number\[]* | 字段的数据映射区间，默认为\[0,1]             |

关于 `meta` 的更多配置项，请查看 [Meta Options](/zh-CN/guide/common#meta)


#### type

<description>**optional** *partition | treemap* *default:* `partition`</description>

布局类型，更多类型探索中。

#### seriesField

<description>**optional** *string*</description>

分组字段，即要映射的数值字段。

#### reflect

<description>**optional** *x | y*</description>

径向类型，非特殊情况不建议使用。

#### hierarchyConfig

<description>**optional** *object*</description>

层级布局配置，例如 `size`、`padding` 等，详细配置参考[d3-hierarchy](https://github.com/d3/d3-hierarchy#treemap)。

### 图形样式

#### radius

<description>**optional** *string* *default:* `1`</description>

半径，0 ~ 1。

#### innerRadius

<description>**optional** *number* *default:* `0`</description>

内径，0 ~ 1。

#### colorField

<description>**optional** *string*</description>

颜色映射字段。

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


#### sunburstStyle

<description>**optional** *object*</description>

旭日图形样式。pointStyle 中的`fill`会覆盖 `color` 的配置。sunburstStyle 可以直接指定，也可以通过 callback 的方式，根据数据指定单独的样式。

默认配置：

| 细分配置      | 类型   | 功能描述   |
| ------------- | ------ | ---------- |
| fill          | string | 填充颜色   |
| stroke        | string | 描边颜色   |
| lineWidth     | number | 线宽       |
| lineDash      | number | 虚线显示   |
| opacity       | number | 透明度     |
| fillOpacity   | number | 填充透明度 |
| strokeOpacity | number | 描边透明度 |

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

### 图表组件

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
| type           | *`x` | `y` | `xy`*  | crosshairs 的类型: `x` 表示 x 轴上的辅助线，`y` 表示 y 轴上的辅助项 |
| line           | *lineStyle*           | 线的配置项，详细可见 [*ShapeAttrs*](/zh-CN/guide/graphic-style#configure-line-styles)                          |
| text           | *textStyle*           | 辅助线文本配置，支持回调                                            |
| textBackground | *textBackgroundStyle* | 辅助线文本背景配置                                                  |
| follow         | *boolean*             | 辅助线是否跟随鼠标移动，默认为 false，即定位到数据点                |

***textStyle***

<!--文本样式-->

| 属性名        | 类型            | 介绍                                                                                                         |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| fontSize      | *number*          | 文字大小                                                                                                     |
| fontFamily    | *string*          | 文字字体                                                                                                     |
| fontWeight    | *number*          | 字体粗细                                                                                                     |
| lineHeight    | *number*          | 文字的行高                                                                                                   |
| textAlign     | *string*          | 设置文本内容的当前对齐方式, 支持的属性：`center` | `end` | `left` | `right` | `start`，默认值为`start`   |
| fill          | *string*          | 文字的填充色                                                                                                 |
| fillOpacity   | *number*          | 文字的填充透明度                                                                                             |
| stroke        | *string*          | 文字的描边                                                                                                   |
| lineWidth     | *number*          | 文字描边的宽度                                                                                               |
| lineDash      | \[number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| lineOpacity   | *number*          | 描边透明度                                                                                                   |
| opacity       | *number*          | 文字的整体透明度                                                                                             |
| shadowColor   | *string*          | 文字阴影颜色                                                                                                 |
| shadowBlur    | *number*          | 文字阴影的高斯模糊系数                                                                                       |
| shadowOffsetX | *number*          | 设置阴影距文字的水平距离                                                                                     |
| shadowOffsetY | *number*          | 设置阴影距文字的垂直距离                                                                                     |
| cursor        | *string*          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                                                                 |

示例代码，以 label.style 配置为例：

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

| 细分配置项名称 | 类型                 | 功能描述           |
| -------------- | -------------------- | ------------------ |
| padding        | *number | number\[]* | 文本背景周围的留白 |
| style          | *shapeStyle*         | 线的配置项, 详细可见 [*ShapeAttrs*](/zh-CN/guide/graphic-style)          |

##### showMarkers

<description>**可选** *boolean* *default:* `true`</description>

是否渲染 tooltipMarkers。

##### marker

<description>**可选** *ShapeAttrs*</description>

tooltipMarker 的样式配置。

样式配置类型，详细可见: [ShapeAttrs](/zh-CN/guide/graphic-style)

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

##### customContent

<description>**可选** *Function*</description>

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


#### annotations

##### type

<description>**required** *string* </description>

标注类型, text | line | image | region | dataMarker | dataRegion | regionFilter | shape | html.

##### position

<description>**required** *object* </description>

标注位置。

*   第一种，object 使用图表 x, y 对应的原始数据例如：{ time: '2010-01-01', value: 200 };
*   第二种，数组来配置位置 \[ x, y ]，根据数组中的值的存在以下几种形式：
    1、对应数据源中的原始数据；
    2、关键字：'min'、'max'、'median'、'start'、'end' 分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束；
    3、x, y 都是百分比的形式，如 30%，在绘图区域定位(即坐标系内)。
    1 和 2 两种类型的数据可以混用，但是使用百分比形式时 x 和 y 必须都是百分比形式。
*   第三种，回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景。

##### top

<description>**optional** *boolean* *default:* `false`</description>

是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层。

##### animate

<description>**optional** *boolean* </description>

是否进行动画。

##### offsetX

<description>**optional** *number* </description>

x 方向的偏移量。

##### offsetY

<description>**optional** *number* </description>

y 方向的偏移量。

##### start

<description>**optional** *Array* </description>

起始位置，一般用于 line、region 等。

##### end

<description>**optional** *Array* </description>

结束位置，一般用于 line、region 等。

```ts
{
  type: 'line',
  start: ['min', 'median'],
  end: ['max', 'median'],
},
```

##### style

<description>**optional** *object* </description>

图形样式属性，参考绘图属性。

##### src

<description>**optional** *string* </description>

图片路径，用于 image 中。

##### content

<description>**optional** *string* </description>

文本内容，用于 text 中。

##### rotate

<description>**optional** *number* </description>

文本的旋转角度，弧度制。

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

##### background

<description>**optional** *object* </description>

文字包围盒样式设置。

| 参数名  | 类型                | 默认值 | 描述               |
| ------- | ------------------- | -------- | ------ |
| style   | *object* | -      | 文本背景的样式, 参考[绘图属性](/zh-CN/guide/graphic-style)     |
| padding | *number | number\[]* | -      | 文本背景周围的留白 |

##### color

<description>**optional** *string* </description>

染色色值，一般用于 regionFilter。

##### apply

<description>**optional** *string\[]* </description>

设定 regionFilter 只对特定 geometry 类型起作用，如 apply: \['area']，一般用于 regionFilter。

##### autoAdjust

<description>**optional** *boolean* </description>

文本超出绘制区域时，是否自动调节文本方向。

##### direction

<description>**optional** *upward | downward* </description>

朝向。

##### lineLength

<description>**optional** *number* </description>

line 长度，用于 dataRegion。

##### render

<description>**optional** *string* </description>

自定义标记的绘制 render 函数，其他 container 为标记绘制的父容器, view 为图形实例, helpers 为辅助函数，其他 parserPosition 可以用来计算数据点对应的坐标位置，用于 shape。

##### container

<description>**optional** *string | HTMLElement* </description>

自定义 HTML 图形标记的容器元素，用于 html

##### html

<description>**optional** *string | HTMLElement* </description>

自定义的图形标记的 HTML 元素，可为 HTML DOM 字符串，或 HTML 元素，或 html 回调函数，用于 html

##### alignX

<description>**optional** *'left' | 'middle' | 'right'* </description>

DOM 元素在 X 方向的对齐方式，用于 html

##### alignY

<description>**optional** *left' | 'middle' | 'right'* </description>

DOM 元素在 Y 方向的对齐方式，用于 html


### 图表主题

#### 内置主题

目前默认的内置主要要两套：`default` 和 `dark`

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

前往 [DEMO](/zh/examples/general/theme#register-theme)


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


### 图表交互

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

#### 内置主题

目前默认的内置主要要两套：`default` 和 `dark`

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

前往 [DEMO](/zh/examples/general/theme#register-theme)


### 图表交互

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
