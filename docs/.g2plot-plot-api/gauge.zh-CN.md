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

<description>**optional** _number\[] | number | 'auto'_</description>

画布的 `padding` 值，代表图表在上右下左的间距，可以为单个数字 `16`，或者数组 `[16, 8, 16, 8]` 代表四个方向，或者开启 `auto`，由底层自动计算间距。

#### appendPadding

<description>**optional** _number\[] | number_</description>

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

| 配置项 | 类型        | 描述                 |
| ------ | ----------- | -------------------- | ------------------------------------------------------------------------------- |
| ticks  | _number\[]_ | 辅助圆弧显示数字数组 |
| color  | \*string    | string\[]\*          | 辅助圆弧的颜色色板，按照色板顺序取值; 当设置 ticks 时，color 无法使用回调的方式 |

<playground rid="gauge" path="progress-plots/gauge/demo/basic.ts"></playground>

#### axis

<description>**optional** _object_</description>

指标辅助轴样式。

##### position

<description>**optional** _`top` | `bottom` | `left` | `right`_</description>

适用于直角坐标系，设置坐标轴的位置。

#### label

<description> _AxisLabelCfg | null_ **optional** </description>

文本标签的配置项，null 表示不展示。_AxisLabelCfg_ 配置如下：

| 参数名 | 类型 | 是否必选 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| style | [ShapeAttrs](/zh/docs/api/shape/shape-attrs) |  | - | 坐标轴刻度线的样式配置项 |
| offset | number |  | - | label 的偏移量 |
| rotate | number |  | - | 文本旋转角度 |
| autoRotate | boolean |  | `true` | 是否自动旋转 |
| autoHide | boolean |  | `false` | 是否自动隐藏 |
| autoEllipsis | boolean |  | `false` | 是否自动省略 |
| formatter | `(text: string, item: ListItem, index: number) => any` |  | `false` | 格式化函数 |

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

<description>**optional** _string | Function_ _default:_ `false`</description>

指定 tick 计算方法，或自定义计算 tick 的方法，内置 tick 计算方法包括 `cat`、`time-cat`、 `wilkinson-extended`、`r-pretty`、`time`、`time-pretty`、`log`、`pow`、`quantile`、`d3-linear`。

##### line

<description>**optional** _object_</description>

坐标轴线的配置项，null 表示不展示。

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | _string_ | 线的颜色 |
| lineWidth | _number_ | 线宽 |
| lineDash | \[number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| opacity | _number_ | 透明度 |
| shadowColor | _string_ | 阴影颜色 |
| shadowBlur | _number_ | 高斯模糊系数 |
| shadowOffsetX | _number_ | 设置阴影距图形的水平距离 |
| shadowOffsetY | _number_ | 设置阴影距图形的垂直距离 |
| cursor | _string_ | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

示例代码：

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

坐标轴刻度线线的配置项，null 表示不展示。

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | _string_ | 线的颜色 |
| lineWidth | _number_ | 线宽 |
| lineDash | \[number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| opacity | _number_ | 透明度 |
| shadowColor | _string_ | 阴影颜色 |
| shadowBlur | _number_ | 高斯模糊系数 |
| shadowOffsetX | _number_ | 设置阴影距图形的水平距离 |
| shadowOffsetY | _number_ | 设置阴影距图形的垂直距离 |
| cursor | _string_ | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

示例代码：

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

##### subTickLine

<description>**optional** _object_</description>

坐标轴子刻度线的配置项，null 表示不展示。

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | _string_ | 线的颜色 |
| lineWidth | _number_ | 线宽 |
| lineDash | \[number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| opacity | _number_ | 透明度 |
| shadowColor | _string_ | 阴影颜色 |
| shadowBlur | _number_ | 高斯模糊系数 |
| shadowOffsetX | _number_ | 设置阴影距图形的水平距离 |
| shadowOffsetY | _number_ | 设置阴影距图形的垂直距离 |
| cursor | _string_ | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

示例代码：

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

##### title

<description>**optional** _object_</description>

标题的配置项，null 表示不展示。

| 细分配置项名称 | 类型         | 功能描述                 |
| -------------- | ------------ | ------------------------ |
| offset         | _number_     | 标题距离坐标轴的距离     |
| spacing        | _lineStyle_  | 标题距离坐标轴文本的距离 |
| style          | _shapeStyle_ | 标题文本配置项           |
| autoRotate     | _boolean_    | 是否自动旋转             |

**_shapeStyle_**

<!--图形样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| fill | _string_ | 图形的填充色 |
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
| --- | --- | --- | --- | --- | --- | --- |
| type | _string_ | 当用户使用了自定义的 label 类型，需要声明具体的 type 类型，否则会使用默认的 label 类型渲染（饼图 label 支持 `inner | outer | spider`） |
| offset | _number_ | label 的偏移量 |
| offsetX | _number_ | label 相对于数据点在 X 方向的偏移距离 |
| offsetY | _number_ | label 相对于数据点在 Y 方向的偏移距离 |
| content | \*string | IGroup | IShape | GeometryLabelContentCallback\* | 展示的文本内容，如果不声明则按照参与映射的第一字段的值进行显示 |
| style | object | label 文本图形属性样式 |
| autoRotate | _string_ | 是否自动旋转，默认 true |
| rotate | _number_ | 文本旋转角度 |
| labelLine | \*null | _boolean_ | object\* | 用于设置文本连接线的样式属性，null 表示不展示。 |
| labelEmit | _boolean_ | 只对极坐标下的文本生效，表示文本是否按照角度进行放射状显示，true 表示开启，false 表示关闭 |
| layout | \*'overlap' | 'fixedOverlap' | 'limitInShape'\* | 文本布局类型，支持多种布局函数组合使用。 |
| position | \*'top' | 'bottom' | 'middle' | 'left' | 'right'\* | 指定当前 label 与当前图形的相对位置 |
| animate | \*boolean | AnimateOption\* | 动画配置。 |
| formatter | _Function_ | 格式化函数 |
| autoHide | _boolean_ | 是否自动隐藏，默认 false |

|

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

##### grid

<description>**optional** _object_</description>

坐标轴网格线的配置项，null 表示不展示。

| 细分配置项名称 | 类型        | 功能描述                                                 |
| -------------- | ----------- | -------------------------------------------------------- | -------------------- |
| line           | _lineStyle_ | 线的样式                                                 |
| alternateColor | \*string    | string\[]\*                                              | 两个栅格线间的填充色 |
| closed         | _boolean_   | 对于 circle 是否关闭 grid                                |
| alignTick      | _boolean_   | 是否同刻度线对齐，如果值为 false，则会显示在两个刻度中间 |

**_lineStyle_**

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | _string_ | 线的颜色 |
| lineWidth | _number_ | 线宽 |
| lineDash | \[number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为\[0,0]的效果为没有描边。 |
| opacity | _number_ | 透明度 |
| shadowColor | _string_ | 阴影颜色 |
| shadowBlur | _number_ | 高斯模糊系数 |
| shadowOffsetX | _number_ | 设置阴影距图形的水平距离 |
| shadowOffsetY | _number_ | 设置阴影距图形的垂直距离 |
| cursor | _string_ | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

示例代码：

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

##### verticalFactor

<description>**optional** _number_</description>

标记坐标轴 label 的方向，左侧为 1，右侧为 -1。

##### verticalLimitLength

<description>**optional** _number_</description>

配置坐标轴垂直方向的最大限制长度，对文本自适应有很大影响。

#### indicator

<description>**optional** _object_</description>

仪表盘指示器样式配置。按照组件分成为：

- `pointer`：指示器中的指针样式配置
- `pin`：指示器中的圆盘样式配置

他们都有以下配置项：

| 配置项 | 类型   | 描述       |
| ------ | ------ | ---------- |
| style  | object | ShapeStyle |

<!--图形样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| fill | _string_ | 图形的填充色 |
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

| 配置项  | 类型  | 描述          |
| ------- | ----- | ------------- | -------- |
| title   | false | StatisticText | 标题     |
| content | false | StatisticText | 主体内容 |

StatisticText

| 配置项 | 类型 | 描述 |
| --- | --- | --- |
| style | CSSStyleDeclaration | 统计文本的样式 (css 样式) |
| customHtml | `(container: HTMLElement, view: View, datum: object, data: object[]) => string;` | 自定义主体文本的 html，优先级高于 formatter |
| formatter | Function | 主体文本的格式化内容 |
| rotate | number | 旋转角度 |
| offsetX | number | X 偏移值 |
| offsetY | number | Y 偏移值 |
