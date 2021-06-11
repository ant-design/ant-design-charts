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

#### data

<description>**required** _array object_</description>

设置图表数据源。数据源为对象集合，例如：`[{ time: '1991'，value: 20 }, { time: '1992'，value: 20 }]`。

#### xField

<description>**required** _string_</description>

图形在 x 方向对应的数据字段名，一般是横向的坐标轴对应的字段。比如：要看不同班级的人数情况，那么班级字段就是对应的 xField。

#### yField

<description>**required** _string_</description>

图形在 y 方向对应的数据字段名，一般是纵向的坐标轴对应的字段。比如：要看不同班级的人数情况，那么人数字段就是对应的 yField。

#### seriesField

<description>**optional** _string_</description>

拆分字段，在分组条形图下同 groupField、colorField，在堆积条形图下同 stackField、colorField。

#### groupField

<description>**optional** _string_</description>

拆分字段，用于堆叠分组条形图，拆分优先级高于 seriesField，isGroup: true 时会根据 groupField 进行分组。

#### isGroup

<description>**optional** _boolean_</description>

是否分组柱形图。

#### isStack

<description>**optional** _boolean_</description>

是否堆积条形图。

#### isRange

<description>**optional** _boolean_</description>

是否区间条形图。

#### isPercent

<description>**optional** _boolean_</description>

是否百分比条形图，isPercent 为 true 时，isStack 也需要为 true。

#### meta

<description>**optional** _object_</description>

全局化配置图表数据元信息，以字段为单位进行配置，来定义数据的类型和展示方式。在 meta 上的配置将同时影响所有组件的文本信息。

| 细分配置项名称 | 类型        | 功能描述                                    |
| -------------- | ----------- | ------------------------------------------- |
| alias          | _string_    | 字段的别名                                  |
| formatter      | _function_  | callback 方法，对该字段所有值进行格式化处理 |
| values         | _string\[]_ | 枚举该字段下所有值                          |
| range          | _number\[]_ | 字段的数据映射区间，默认为\[0,1]            |

关于 `meta` 的更多配置项，请查看 [Meta Options](/zh-CN/guide/common#meta)

### 图形样式

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

#### intervalPadding

<description>**optional**, _number_</description>

Specify the padding of interval, pixel value. Used in GroupColumn plot.

<playground path='bar/grouped/interval-padding.ts' rid='rect1'></playground>

#### dodgePadding

<description>**optional**, _number_</description>

Specify the padding of interval on the same group, pixel value. Used in GroupColumn plot.

<playground path='bar/grouped/dodge-padding.ts' rid='rect2'></playground>

#### minBarWidth

<description>**optional**, _number_</description>

Specify the min width of bar, pixel value. Auto adapt by default.

#### maxBarWidth

<description>**optional**, _number_</description>

Specify the max width of bar, pixel value. Auto adapt by default.

#### barStyle

<description>**optional** _StyleAttr 、 Function_</description>

Bar graphic Style.

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

#### barBackground.style

<description>**optional** _StyleAttr_</description>

Background style of bar graphic. **Attention**: It doesn't work when `type="line"` in Radial-bar plot.

Example:

```ts
{
  barBackground: {
    style: {
      fill: '#000',
      fillOpacity: 0.25,
    }
  }
}
```

#### barWidthRatio

<description>**optional** _number_</description>

条形图宽度占比 \[0-1]。

#### marginRatio

<description>**optional** _number_</description>

分组中柱子之间的间距 \[0-1]，仅对分组条形图适用。

#### state

<description>**可选** _object_</description>

设置对应状态的样式，开放的状态有：`'default' | 'active' | 'inactive' | 'selected'` 四种。

示例：

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

### 图表组件

#### axis

xAxis、yAxis 配置相同。**注意**：由于 DualAxes(双轴图) 和 BidirectionalBar(对称条形图) 是双 y 轴， yAxis 类型是以 yField 中的字段作为 `key` 值的`object`。

##### top

<description>**optional** _boolean_ _default:_ `false`</description>

是否渲染在画布顶层，防止部分图形中，需要将 axis 显示在图形上面，避免被图形遮挡。

##### position

<description>**optional** _`top` | `bottom` | `left` | `right`_</description>

适用于直角坐标系，设置坐标轴的位置。

##### title

<description>**optional** _object_</description>

标题的配置项，null 表示不展示。

| 细分配置项名称 | 类型         | 功能描述                                                  |
| -------------- | ------------ | --------------------------------------------------------- |
| text           | _string_     | 坐标轴标题                                                |
| position       | _string_     | 轴标题的位置，默认：'center'。可选项： start, center, end |
| offset         | _number_     | 标题距离坐标轴的距离                                      |
| spacing        | _number_     | 标题距离坐标轴文本的距离                                  |
| style          | _shapeStyle_ | 标题文本配置项                                            |
| autoRotate     | _boolean_    | 是否自动旋转                                              |

**_shapeStyle_**

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

**_label_**

<description>**optional** _object_</description>

文本标签的配置项，null 表示不展示。

<!--label样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| type | _string_ | 当用户使用了自定义的 label 类型，需要声明具体的 type 类型，否则会使用默认的 label 类型渲染（饼图 label 支持 `inner、outer、spider`） |
| offset | _number_ | label 的偏移量 |
| offsetX | _number_ | label 相对于数据点在 X 方向的偏移距离 |
| offsetY | _number_ | label 相对于数据点在 Y 方向的偏移距离 |
| content | _string 、 IGroup 、 IShape 、 GeometryLabelContentCallback_ | 展示的文本内容，如果不声明则按照参与映射的第一字段的值进行显示 |
| style | _ShapeAttrs_ | label 文本图形属性样式 |
| autoRotate | _string_ | 是否自动旋转，默认 true |
| rotate | _number_ | 文本旋转角度 |
| labelLine | _null_ 、 _boolean_ 、 _LabelLineCfg_ | 用于设置文本连接线的样式属性，null 表示不展示。 |
| labelEmit | _boolean_ | 只对极坐标下的文本生效，表示文本是否按照角度进行放射状显示，true 表示开启，false 表示关闭 |
| layout | _'overlap' 、 'fixedOverlap' 、 'limitInShape'_ | 文本布局类型，支持多种布局函数组合使用。 |
| position | _'top' 、 'bottom' 、 'middle' 、 'left' 、 'right'_ | 指定当前 label 与当前图形的相对位置 |
| animate | _boolean 、 AnimateOption_ | 动画配置。 |
| formatter | _Function_ | 格式化函数 |
| autoHide | _boolean_ | 是否自动隐藏，默认 false |

**_LabelLineCfg_** 类型定义如下：（关于 _ShapeAttrs_ 详细查看 [ShapeAttrs](/zh-CN/guide/graphic-style) 文档）

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

<description> **optional** _AxisLabelCfg 、 null_</description>

文本标签的配置项，null 表示不展示。_AxisLabelCfg_ 配置如下：

| 参数名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| offset | _number_ | - | label 的偏移量 |
| rotate | _number_ | - | 文本旋转角度 |
| autoRotate | _boolean 、avoidCallback_ | `true` | 是否自动旋转 |
| autoHide | _boolean 、avoidCallback 、 { type:string,cfg?:AxisLabelAutoHideCfg }_ | `false` | 是否自动隐藏 |
| autoEllipsis | _boolean 、avoidCallback 、string_ | `false` | 是否自动省略 |
| formatter | _`(text: string, item: ListItem, index: number) => any`_ | `false` | 格式化函数 |
| style | _[ShapeAttrs](/zh-CN/guide/graphic-style)_ | - | 坐标轴刻度线的样式配置项 |

**_avoidCallback_** 类型定义如下：

```ts
type avoidCallback = (isVertical: boolean, labelGroup: IGroup, limitLength?: number) => boolean;
```

**_AxisLabelAutoHideCfg_** 类型定义如下：

```ts
interface AxisLabelAutoHideCfg {
  /** 最小间距配置 */
  minGap?: number;
}
```

##### verticalFactor

<description>**optional** _number_</description>

标记坐标轴 label 的方向，左侧为 1，右侧为 -1（仅适用于垂直方向的坐标轴）

##### verticalLimitLength

<description>**optional** _number_</description>

配置坐标轴垂直方向的最大限制长度，对文本自适应有很大影响。

##### grid

<description>**optional** _object_</description>

坐标轴网格线的配置项，null 表示不展示。

| 细分配置项名称 | 类型                | 功能描述                                                 |
| -------------- | ------------------- | -------------------------------------------------------- |
| line           | _lineStyle_         | 线的样式,                                                |
| alternateColor | _string、string\[]_ | 两个栅格线间的填充色                                     |
| closed         | _boolean_           | 对于 circle 是否关闭 grid                                |
| alignTick      | _boolean_           | 是否同刻度线对齐，如果值为 false，则会显示在两个刻度中间 |

网格线条样式的配置与 [line](#line) 是一致的。

##### line

<description>**optional** _object_</description>

坐标轴线的配置项，null 表示不展示。

<!--线条样式-->

> **注意:** 线条样式的完整配置是 `{ style: { stroke: '#ddd', ... } }`, 如果配置线条样式不生效的时候，请检查一下。

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | _string_ | 线的颜色 |
| lineWidth | _number_ | 线宽 |
| lineDash | _\[number,number]_ | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| opacity | _number_ | 透明度 |
| shadowColor | _string_ | 阴影颜色 |
| shadowBlur | _number_ | 高斯模糊系数 |
| shadowOffsetX | _number_ | 设置阴影距图形的水平距离 |
| shadowOffsetY | _number_ | 设置阴影距图形的垂直距离 |
| cursor | _string_ | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

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

<description>**optional** _object_</description>

坐标轴刻度线的配置项，null 表示不展示。

| 细分配置项名称 | 类型                               | 功能描述                     |
| -------------- | ---------------------------------- | ---------------------------- |
| style          | _ShapeAttrs 、 ShapeAttrsCallback_ | 坐标轴刻度线的样式。         |
| alignTick      | _boolean_                          | 坐标轴刻度线是否同 tick 对齐 |
| length         | _number_                           | 坐标轴刻度线长度             |

关于 _ShapeAttrs_ 详细查看 [ShapeAttrs](/zh-CN/guide/graphic-style) 文档。_ShapeAttrsCallback_ 回调参数如下：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### subTickLine

<description>**optional** _object_</description>

坐标轴子刻度线的配置项，null 表示不展示。

| 细分配置项名称 | 类型                               | 功能描述               |
| -------------- | ---------------------------------- | ---------------------- |
| style          | _ShapeAttrs 、 ShapeAttrsCallback_ | 坐标轴子刻度线的样式。 |
| count          | _number_                           | 子刻度个数             |
| length         | _number_                           | 坐标轴子刻度线长度     |

关于 _ShapeAttrs_ 详细查看 [ShapeAttrs](/zh-CN/guide/graphic-style) 文档。_ShapeAttrsCallback_ 回调参数如下：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### nice

<description>**optional** _boolean_ _default:_ `true`</description>

是否美化。

##### min

<description>**optional** _number_ _default:_ `0`</description>

坐标轴最小值。

##### max

<description>**optional** _number_</description>

坐标轴最大值。

##### minLimit

<description>**optional** _number_</description>

最小值限定。

##### maxLimit

<description>**optional** _number_</description>

最大值限定。

##### tickCount

<description>**optional** _number_</description>

期望的坐标轴刻度数量，非最终结果。

##### tickInterval

<description>**optional** _number_</description>

坐标轴刻度间隔。

##### tickMethod

<description>**optional** _string 、 Function_ _default:_ `false`</description>

指定 tick 计算方法，或自定义计算 tick 的方法，内置 tick 计算方法包括 `cat`、`time-cat`、 `wilkinson-extended`、`r-pretty`、`time`、`time-pretty`、`log`、`pow`、`quantile`、`d3-linear`。

##### animate

<description>**optional** _boolean_ _default:_ `true`</description>

动画开关，默认开启。

##### animateOption

<description>**optional** _object_</description>

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

#### legend

配置图例有两种方式第一种，传入 `boolean` 设置是否显示图例。

```ts
legend: false; // 关闭图例
```

第二种，传入 _LegendCfg_ 对图例进行整体配置。

```ts
legend: {
  layout: 'horizontal',
  position: 'right'
}
```

##### layout

<description>**optional** _horizontal 、 vertical_ </description>

图例布局方式。提供横向布局和纵向布局。

##### title

<description>**optional** _G2LegendTitleCfg_ </description>

图例标题配置，默认不展示。_G2LegendTitleCfg_ 配置如下：

| 参数名  | 类型     | 描述                                                         |
| ------- | -------- | ------------------------------------------------------------ |
| title   | _string_ | 文本显示内容                                                 |
| spacing | _number_ | 标题同图例项的间距                                           |
| style   | _object_ | 文本样式配置项，参考  [绘图属性](/zh-CN/guide/graphic-style) |

##### position

<description>**optional** _string_ </description>

图例位置，可选项：'top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right'。

尝试一下：

<playground path="component/legend/demo/legend-position.jsx" rid="legend-position"></playground>

##### offsetX

<description>**optional** _number_ </description>

图例 x 方向的偏移。

##### offsetY

<description>**optional** _number_ </description>

图例 y 方向的偏移。

##### background

<description>**optional** _LegendBackgroundCfg_ </description>

背景框配置项。_LegendBackgroundCfg_ 配置如下：

| 参数名  | 类型                  | 描述                                                       |
| ------- | --------------------- | ---------------------------------------------------------- |
| padding | _number 、 number\[]_ | 背景的留白                                                 |
| style   | _ShapeAttr_           | 背景样式配置项, 参考[绘图属性](/zh-CN/guide/graphic-style) |

##### flipPage

<description>**optional** _boolean_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，当图例项过多时是否进行分页。(⚠️ 暂不支持多行展示分页)

##### pageNavigator

<description>**optional** _object_ </description>

<!-- todo 补充分页器的图文介绍 -->

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例分页导航器的主题样式设置。_LegendPageNavigatorCfg_ 配置如下：

| 参数名       | 类型                       | 默认值 | 描述                    |
| ------------ | -------------------------- | ------ | ----------------------- |
| marker.style | _PageNavigatorMarkerStyle_ | -      | 分页器指示箭头 样式配置 |
| text.style   | _PageNavigatorTextStyle_   | -      | 分页器页面信息 样式配置 |

**_PageNavigatorMarkerStyle_** 配置如下：

| 参数名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| inactiveFill | _string_ | - | Fill color of arrow marker when unclickable (inactive status). |
| inactiveOpacity | _number_ | - | Fill opacity of arrow marker when unclickable (inactive status). |
| fill | _string_ | - | Default fill color of arrow marker (active status). |
| opacity | _number_ | - | Default fill opacity of arrow marker (active status). |
| size | _number_ | - | Size of arrow marker. |

**_PageNavigatorTextStyle_** 配置如下：

| 参数名   | 类型     | 默认值 | 描述                               |
| -------- | -------- | ------ | ---------------------------------- |
| fill     | _string_ | -      | Font color of page navigator info. |
| fontSize | _number_ | -      | Font size of page navigator info.  |

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

##### itemHeight

<description>**optional** _number_ _default:_ `null`</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例的高度, 默认为 null。

##### itemWidth

<description>**optional** _number_ _default:_ `null`</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项的宽度, 默认为 null，自动计算。

##### itemName

<description>**optional** _LegendItemNameCfg_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项 name 文本的配置。_LegendItemNameCfg_ 配置如下：

| 参数名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| style | _object_ | - | 文本样式配置项，参考  [绘图属性](/zh-CN/guide/graphic-style) |
| spacing | _number_ | `false` | 图例项 marker 同后面 name 的间距 |
| formatter | _function_ | - | 格式化函数, `(text: string, item: ListItem, index: number) => any;` |

##### itemValue

<description>**optional** _LegendItemValueCfg_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项 value 附加值的配置项。_LegendItemValueCfg_ 配置如下：

| 参数名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| style | _object_ | - | 文本样式配置项，详见  [绘图属性](/zh-CN/guide/graphic-style) |
| alignRight | _boolean_ | `false` | 是否右对齐，默认为 false，仅当设置图例项宽度时生效 |
| formatter | _function_ | - | 格式化函数, `(text: string, item: ListItem, index: number) => any;` |

<playground path="component/legend/demo/legend-item-value.ts" rid="legend-item-value"></playground>

##### itemSpacing

<description>**optional** _number_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，控制图例项水平方向的间距。

##### label

<description>**optional** _ContinueLegendLabelCfg_ </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，文本的配置项。_ContinueLegendLabelCfg_ 配置如下：

| 参数名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| align | _string_ | - | 文本同滑轨的对齐方式 <br/> - rail ： 同滑轨对齐，在滑轨的两端 <br/> - top, bottom: 图例水平布局时有效 <br/> - left, right: 图例垂直布局时有效 |
| style | _object_ | - | 文本样式配置项，详见  [绘图属性](/zh-CN/guide/graphic-style) |
| spacing | _number_ | - | 文本同滑轨的距离 |
| formatter | _(value: any) => string_ | 文本的格式化方式 |

##### marker

<description>**optional** _MarkerCfg_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项的 marker 图标的配置。

| 参数名  | 类型                         | 默认值 | 描述                             |
| ------- | ---------------------------- | ------ | -------------------------------- |
| symbol  | _Marker_ 、 _MarkerCallback_ | -      | 配置图例 marker 的 symbol 形状   |
| style   | _ShapeAttrs_                 | -      | 图例项 marker 的配置项           |
| spacing | _number_                     | -      | 图例项 marker 同后面 name 的间距 |

_Marker_ 为支持的标记类型有： _circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen_； _MarkerCallback_ 为 `(x: number, y: number, r: number) => PathCommand`；

##### maxWidth

<description>**optional** _number_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项最大宽度设置。当 layout 等于 'horizontal' 时，生效，当图例项横向排布，超过最大宽度时，会结合 `flipPage: true` 进行分页。

##### maxHeight

<description>**optional** _number_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项最大高度设置。当 layout 等于 'vertical' 时，生效，当图例项纵向排布，超过最大高度时，会结合 `flipPage: true` 进行分页。

##### reversed

<description>**optional** _boolean_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，是否将图例项逆序展示。

##### custom

<description>**optional** _boolean_ </description>

是否为自定义图例，当该属性为 true 时，需要声明 items 属性。

##### items

<description>**optional** _LegendItem\[]_ </description> 适用于 <tag color="green" text="分类图例">分类图例</tag>，用户自己配置图例项的内容。_LegendItem_ 配置如下：

| 参数名 | 类型        | 是否必选 | 描述                     |
| ------ | ----------- | -------- | ------------------------ |
| id     | _string_    |          | 唯一值，用于动画或者查找 |
| name   | _string_    | required | 名称                     |
| value  | any         | required | 值                       |
| marker | _MarkerCfg_ |          | 图形标记                 |

| 参数名  | 类型                         | 默认值 | 描述                             |
| ------- | ---------------------------- | ------ | -------------------------------- |
| symbol  | _Marker_ 、 _MarkerCallback_ | -      | 配置图例 marker 的 symbol 形状   |
| style   | _ShapeAttrs_                 | -      | 图例项 marker 的配置项           |
| spacing | _number_                     | -      | 图例项 marker 同后面 name 的间距 |

_Marker_ 为支持的标记类型有： _circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen_； _MarkerCallback_ 为 `(x: number, y: number, r: number) => PathCommand`；

##### min

<description>**optional** _number_ </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最小值。

##### max

<description>**optional** _number_ </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最大值。

##### value

<description>**optional** _number\[]_ </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，当前选中的范围。

##### selected ✨ 🆕

<description> _object_ **optional** </description>

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

<description>**optional** _boolean_ _default:_ `true`</description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块是否可以滑动。

##### rail

<description>**optional** _ContinueLegendRailCfg_ </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，图例滑轨（背景）的样式配置项。_ContinueLegendRailCfg_ 配置如下：

| 参数名 | 类型 | 描述 |
| --- | --- | --- |
| type | _string_ | rail 的类型，color, size，默认：'color' |
| size | _number_ | 滑轨的宽度 |
| defaultLength | _number_ | 滑轨的默认长度，默认：100。当限制了 maxWidth,maxHeight 时，不会使用这个属性会自动计算长度 |
| style | _object_ | 滑轨的样式，参考 [绘图属性](/zh-CN/guide/graphic-style) |

| **rail.type='color'** | **rail.type='size** |
| --- | --- |
| ![color](https://gw.alipayobjects.com/zos/antfincdn/jwMUDJ63aN/72957823-0148-4b24-bbf4-c756959467d3.png) | ![size](https://gw.alipayobjects.com/zos/antfincdn/t%26LwpJHUA6/52de13d5-b232-4efb-aacf-6d673778d92a.png) |

##### track

<description>**optional** _ContinueLegendTrackCfg_ </description> 适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的色块样式配置项。_ContinueLegendTrackCfg_ 配置如下：

| 参数名 | 类型     | 默认值 | 描述                                                        |
| ------ | -------- | ------ | ----------------------------------------------------------- |
| style  | _object_ | -      | 选定范围的样式，参考 [绘图属性](/zh-CN/guide/graphic-style) |

##### handler

<description>**optional** _ContinueLegendHandlerCfg_ </description> 适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块的配置项。(暂不支持自定义)

_ContinueLegendHandlerCfg_ 配置如下：

| 参数名 | 类型     | 默认值 | 描述                                                        |
| ------ | -------- | ------ | ----------------------------------------------------------- |
| size   | _number_ | -      | 滑块的大小，默认：10                                        |
| style  | _object_ | -      | 滑块的样式设置，参考 [绘图属性](/zh-CN/guide/graphic-style) |

#### label

> 小提琴图暂时不支持 label 展示，可以使用 annnotation 进行替代

<!--label样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| type | _string_ | 当用户使用了自定义的 label 类型，需要声明具体的 type 类型，否则会使用默认的 label 类型渲染（饼图 label 支持 `inner、outer、spider`） |
| offset | _number_ | label 的偏移量 |
| offsetX | _number_ | label 相对于数据点在 X 方向的偏移距离 |
| offsetY | _number_ | label 相对于数据点在 Y 方向的偏移距离 |
| content | _string 、 IGroup 、 IShape 、 GeometryLabelContentCallback_ | 展示的文本内容，如果不声明则按照参与映射的第一字段的值进行显示 |
| style | _ShapeAttrs_ | label 文本图形属性样式 |
| autoRotate | _string_ | 是否自动旋转，默认 true |
| rotate | _number_ | 文本旋转角度 |
| labelLine | _null_ 、 _boolean_ 、 _LabelLineCfg_ | 用于设置文本连接线的样式属性，null 表示不展示。 |
| labelEmit | _boolean_ | 只对极坐标下的文本生效，表示文本是否按照角度进行放射状显示，true 表示开启，false 表示关闭 |
| layout | _'overlap' 、 'fixedOverlap' 、 'limitInShape'_ | 文本布局类型，支持多种布局函数组合使用。 |
| position | _'top' 、 'bottom' 、 'middle' 、 'left' 、 'right'_ | 指定当前 label 与当前图形的相对位置 |
| animate | _boolean 、 AnimateOption_ | 动画配置。 |
| formatter | _Function_ | 格式化函数 |
| autoHide | _boolean_ | 是否自动隐藏，默认 false |

**_LabelLineCfg_** 类型定义如下：（关于 _ShapeAttrs_ 详细查看 [ShapeAttrs](/zh-CN/guide/graphic-style) 文档）

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

#### slider

> 目前只适用于：折线图、面积图、双轴图。

| 配置项          | 类型           | 功能描述                                             |
| --------------- | -------------- | ---------------------------------------------------- |
| start           | _number_       | 默认起始位置                                         |
| end             | _number_       | 默认结束位置                                         |
| height          | _number_       | 缩略轴高度                                           |
| trendCfg        | _TrendCfg_     | 背景趋势的配置                                       |
| backgroundStyle | _object_       | 背景配置，参考[绘图属性](/zh-CN/guide/graphic-style) |
| foregroundStyle | _object_       | 前景配置，参考[绘图属性](/zh-CN/guide/graphic-style) |
| handlerStyle    | _HandlerStyle_ | handler 配置                                         |
| textStyle       | _object_       | 文本配置，参考[绘图属性](/zh-CN/guide/graphic-style) |
| minLimit        | _number_       | 允许滑动位置下限                                     |
| maxLimit        | _number_       | 允许滑动位置上限                                     |
| formatter       | _Function_     | 滑块文本格式化函数                                   |

**_TrendCfg_** 类型如下：

| 配置项          | 类型        | 功能描述                                                  |
| --------------- | ----------- | --------------------------------------------------------- |
| data            | _number\[]_ | 统计文本的样式                                            |
| smooth          | _boolean_   | 是否平滑                                                  |
| isArea          | _boolean_   | 是否面积图                                                |
| backgroundStyle | _object_    | 背景样式配置，参考[绘图属性](/zh-CN/guide/graphic-style)  |
| lineStyle       | _object_    | line 样式配置，参考[绘图属性](/zh-CN/guide/graphic-style) |
| areaStyle       | _object_    | area 样式配置，参考[绘图属性](/zh-CN/guide/graphic-style) |

**_HandlerStyle_** 类型如下：

| 配置项        | 类型     | 功能描述                           |
| ------------- | -------- | ---------------------------------- |
| width         | _number_ | 缩略轴手柄宽度                     |
| height        | _number_ | 缩略轴手柄高度                     |
| fill          | _string_ | 缩略轴手柄填充色                   |
| highLightFill | _string_ | 缩略轴手柄填充高亮色（hover 状态） |
| stroke        | _string_ | 缩略轴手柄描边色                   |
| opacity       | _number_ | 缩略轴手柄填充透明度               |
| radius        | _number_ | 缩略轴手柄背景圆角                 |
| cursor        | _string_ | 缩略轴手柄鼠标样式 （hover 状态）  |

#### 滚动条

> 目前只适用于：折线图、面积图、双轴图。

| 配置项          | 类型           | 功能描述                                             |
| --------------- | -------------- | ---------------------------------------------------- |
| start           | _number_       | 默认起始位置                                         |
| end             | _number_       | 默认结束位置                                         |
| height          | _number_       | 缩略轴高度                                           |
| trendCfg        | _TrendCfg_     | 背景趋势的配置                                       |
| backgroundStyle | _object_       | 背景配置，参考[绘图属性](/zh-CN/guide/graphic-style) |
| foregroundStyle | _object_       | 前景配置，参考[绘图属性](/zh-CN/guide/graphic-style) |
| handlerStyle    | _HandlerStyle_ | handler 配置                                         |
| textStyle       | _object_       | 文本配置，参考[绘图属性](/zh-CN/guide/graphic-style) |
| minLimit        | _number_       | 允许滑动位置下限                                     |
| maxLimit        | _number_       | 允许滑动位置上限                                     |
| formatter       | _Function_     | 滑块文本格式化函数                                   |

**_TrendCfg_** 类型如下：

| 配置项          | 类型        | 功能描述                                                  |
| --------------- | ----------- | --------------------------------------------------------- |
| data            | _number\[]_ | 统计文本的样式                                            |
| smooth          | _boolean_   | 是否平滑                                                  |
| isArea          | _boolean_   | 是否面积图                                                |
| backgroundStyle | _object_    | 背景样式配置，参考[绘图属性](/zh-CN/guide/graphic-style)  |
| lineStyle       | _object_    | line 样式配置，参考[绘图属性](/zh-CN/guide/graphic-style) |
| areaStyle       | _object_    | area 样式配置，参考[绘图属性](/zh-CN/guide/graphic-style) |

**_HandlerStyle_** 类型如下：

| 配置项        | 类型     | 功能描述                           |
| ------------- | -------- | ---------------------------------- |
| width         | _number_ | 缩略轴手柄宽度                     |
| height        | _number_ | 缩略轴手柄高度                     |
| fill          | _string_ | 缩略轴手柄填充色                   |
| highLightFill | _string_ | 缩略轴手柄填充高亮色（hover 状态） |
| stroke        | _string_ | 缩略轴手柄描边色                   |
| opacity       | _number_ | 缩略轴手柄填充透明度               |
| radius        | _number_ | 缩略轴手柄背景圆角                 |
| cursor        | _string_ | 缩略轴手柄鼠标样式 （hover 状态）  |

#### 转化标签

适用于基础柱形图和基础条形图，转化率组件可以让用户关注到数据的变化比例。

<description>**optional** _object_ 、 _false_</description>

| 配置项  | 类型                | 默认值 | 功能描述                         |
| ------- | ------------------- | ------ | -------------------------------- |
| size    | _number_            | -      | 转化率组件尺寸                   |
| spacing | _number_            | -      | 组件和柱子间距                   |
| offset  | _number_            | -      | 组件和轴线间距                   |
| arrow   | _ArrowCfg 、 false_ | -      | 箭头形状配置，false 时不显示箭头 |
| text    | _TextCfg 、 false_  | -      | 文本配置、false 时不显示文本     |

其中 ArrowCfg 配置如下

| 配置项   | 类型     | 默认值 | 功能描述 |
| -------- | -------- | ------ | -------- |
| headSize | _number_ | -      | 箭头尺寸 |
| style    | _object_ | -      | 箭头样式 |

TextCfg 配置如下

| 配置项    | 类型                                   | 默认值 | 功能描述         |
| --------- | -------------------------------------- | ------ | ---------------- |
| headSize  | _number_                               | -      | 箭头尺寸         |
| style     | _object_                               | -      | 箭头样式         |
| formatter | _(prev:number, next:number) => string_ | -      | 自定义转化率计算 |

样式配置类型请参考 [绘图属性](/zh-CN/guide/graphic-style)

#### 联通对比区域

适用于堆叠柱状图和堆叠条形图，联通区域组件通过绘制同一字段的联通区域提供视觉上的辅助识别，方便进行数据对比。

<description>**optional** _object_ 、 _false_</description>

| 配置项  | 类型             | 是否必选      | 默认值 ｜ 功能描述 |
| ------- | ---------------- | ------------- | ------------------ |
| trigger | 'hover'、'click' | 否 ｜ 'hover' | 触发方式           |

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

### 图表交互
