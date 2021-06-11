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

指标比例数据 \[0-1]。

#### radius

<description>**optional** _number_ _default:_ `0.95`</description>

外环的半径 \[0-1]，相对于画布宽高的最小值来计算的。

#### innerRadius

<description>**optional** _number_ _default:_ `0.9`</description>

内环的半径 \[0-1]，相对于内半径 radius 来计算的。

#### startAngle

<description>**optional** _number_ _default:_ `(-7 / 6) * Math.PI`</description>

圆盘的起始角度。

#### endAngle

<description>**optional** _number_ _default:_ `(1 / 6) * Math.PI`</description>

圆盘的终止角度。

### 图形样式

#### range

<description>**optional** _object_</description>

仪表盘辅助圆弧的样式。

| 配置项 | 类型 | 描述 |
| --- | --- | --- |
| ticks | _number\[]_ | 辅助圆弧显示数字数组 |
| color | _string 、string\[]_ | 辅助圆弧的颜色色板，按照色板顺序取值; 当设置 ticks 时，color 无法使用回调的方式 |
| width | _number_ | 对辅助圆弧的宽度进行像素级别的设置。默认通过 radius，innerRadius 来计算辅助圆弧的宽度。 |

<playground rid="gauge" path="progress-plots/gauge/demo/custom-color.ts"></playground>

#### type ✨

<description>**optional** _string_ _default_: `undefined`</description>

仪表盘的展示类型。可选项为：`meter`，默认为空

#### meter ✨

<description>**optional** _object_</description>

当 `type = 'meter'` 时生效，具体配置属性如下。

| 配置项 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| steps | _number_ | 总步数 | 50 |
| stepRatio | _number_ | \[0, 1] 范围。代表着 step 和 gap 的比例关系，当 `stepRatio` 为 1 时，gap 为 0 | 0.5，即默认 step 等于 gap 宽度 |

<img src="https://gw.alipayobjects.com/zos/antfincdn/WBhwhNUzkg/image.png" width="400" align="center" style="display:flex;margin:0 auto;" alt="gauge">

#### gaugeStyle

<description>**optional** _StyleAttr 、 Function_</description>

仪表盘的样式设置。

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

### 图表组件

#### axis

<description>**optional** _object_</description>

指标辅助轴样式。

- 💡 在仪表盘中，axis 组件可以使用的配置有：`label`, `tickLine`, `subTickLine`, 其他配置项不建议在仪表盘中使用。
- 💡 关于 `tick` 的设置, 可以直接在 `range.ticks` 中进行配置。

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

#### indicator

<description>**optional** _object_</description>

仪表盘**指示器**样式配置。按照组件分成为：

- `pointer`：指示器中的**指针**样式配置
- `pin`：指示器中的**圆盘**样式配置

他们都有以下配置项：

| 配置项 | 类型   | 描述       |
| ------ | ------ | ---------- |
| style  | object | ShapeStyle |

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

#### statistic

<description>**optional** _object_</description>

指标中心文本组件。

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
