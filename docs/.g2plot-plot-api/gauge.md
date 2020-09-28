## 配置属性

### 图表容器

#### width

<description>**可选** _number_</description>

功能描述：设置图表宽度。

默认配置：`400`

#### height

<description>**可选** _number_</description>

功能描述：设置图表高度。

默认配置：`400`

#### autoFit

<description>**可选** _boolean_</description>

功能描述：图表是否自适应容器宽高。当 `autoFit` 设置为 true 时，`width` 和 `height` 的设置将失效。

默认配置：`true`

#### padding

<description>**可选** _number\[] | number | 'auto'_</description>

功能描述： 画布的 `padding` 值，或者开启 `auto`。

#### appendPadding

<description>**可选** _number\[] | number_</description>

功能描述： 额外增加的 `appendPadding` 值。

#### renderer

<description>**可选** _string_</description>

功能描述: 设置图表渲染方式为 `canvas` 或 `svg`。

默认配置： `canvas`

#### pixelRatio

<description>**可选** _number_</description>

功能描述: 设置图表渲染的像素比。

默认配置： `window.devicePixelRatio`

### 数据映射

#### percent 📌

**必选**, _number_

功能描述： 指标比例

默认配置： 无

#### radius

**可选**, _number_

功能描述： 圆盘的外半径， 0 ~ 1 。

默认配置： `0.95`

#### innerRadius

**可选**, _number_

功能描述： 圆盘的内半径， 0 ~ 1 。

默认配置： `0.9`

#### startAngle

**可选**, _number_

功能描述： 圆盘的起始角度。

默认配置： `(-7 / 6) * Math.PI`

#### endAngle

**可选**, _number_

功能描述： 圆盘的终止角度。

默认配置： `(1 / 6) * Math.PI`

### 图形样式

#### range

**可选**, _object_

功能描述： 仪表盘辅助圆弧的样式。

| 配置项 | 类型      | 描述                                 |
| ------ | --------- | ------------------------------------ |
| ticks  | number\[] | 辅助圆弧显示数字数组                 |
| color  | string\[] | 辅助圆弧的颜色色板，按照色板顺序取值 |

#### indicator

**可选**, _object_

功能描述： 仪表盘指示器样式配置。按照组件分成为：

- `pointer`：指示器中的指针样式配置
- `pin`：指示器中的圆盘样式配置

| 配置项 | 类型   | 描述         |
| ------ | ------ | ------------ |
| style  | object | 组件样式配置 |

#### statistic

**可选**, _object_

功能描述： 指标文本组件 。

默认配置： 无

| 配置项  | 类型                   | 描述     |
| ------- | ---------------------- | -------- |
| title   | false \| StatisticText | 标题     |
| content | false \| StatisticText | 主体内容 |

StatisticText

| 配置项    | 类型     | 描述                 |
| --------- | -------- | -------------------- |
| style     | object   | 统计文本的样式       |
| formatter | Function | 主体文本的格式化内容 |
| rotate    | number   | 旋转角度             |
| offsetX   | number   | X 偏移值             |
| offsetY   | number   | Y 偏移值             |

#### axis

**可选**, _object_

功能描述： 指标辅助轴样式 。

默认配置： 无

#### nice

<description>**可选** _boolean_</description>

功能描述：是否美化。

默认配置：`true`

#### min

<description>**可选** _number_</description>

功能描述：坐标轴最小值。

默认配置：`无`

#### max

<description>**可选** _number_</description>

功能描述：坐标轴最大值。

默认配置：`无`

#### minLimit

<description>**可选** _number_</description>

功能描述：最小值限定。

默认配置：`无`

#### maxLimit

<description>**可选** _number_</description>

功能描述：最大值限定。

默认配置：`无`

#### tickCount

<description>**可选** _number_</description>

功能描述：期望的坐标轴刻度数量，非最终结果。

默认配置：`无`

#### tickInterval

<description>**可选** _number_</description>

功能描述：坐标轴刻度间隔。

默认配置：`无`

#### tickMethod

<description>**可选** _Function_</description>

功能描述：自定义计算 tick 的方法。

默认配置：`无`

#### position

<description>**可选** _`top` \| `bottom` \| `left` \| `right`_</description>

功能描述：适用于直角坐标系，设置坐标轴的位置。

默认配置：`无`

#### line

<description>**可选** _object_</description>

功能描述：坐标轴线的配置项，null 表示不展示。

默认配置：`无`

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | string | 线的颜色 |
| lineWidth | number | 线宽 |
| lineDash | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity | number | 透明度 |
| shadowColor | string | 阴影颜色 |
| shadowBlur | number | 高斯模糊系数 |
| shadowOffsetX | number | 设置阴影距图形的水平距离 |
| shadowOffsetY | number | 设置阴影距图形的垂直距离 |
| cursor | string | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

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

#### tickLine

<description>**可选** _object_</description>

功能描述：坐标轴刻度线线的配置项，null 表示不展示。

默认配置：`无`

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | string | 线的颜色 |
| lineWidth | number | 线宽 |
| lineDash | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity | number | 透明度 |
| shadowColor | string | 阴影颜色 |
| shadowBlur | number | 高斯模糊系数 |
| shadowOffsetX | number | 设置阴影距图形的水平距离 |
| shadowOffsetY | number | 设置阴影距图形的垂直距离 |
| cursor | string | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

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

#### subTickLine

<description>**可选** _object_</description>

功能描述：坐标轴子刻度线的配置项，null 表示不展示。

默认配置：`无`

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | string | 线的颜色 |
| lineWidth | number | 线宽 |
| lineDash | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity | number | 透明度 |
| shadowColor | string | 阴影颜色 |
| shadowBlur | number | 高斯模糊系数 |
| shadowOffsetX | number | 设置阴影距图形的水平距离 |
| shadowOffsetY | number | 设置阴影距图形的垂直距离 |
| cursor | string | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

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

#### title

<description>**可选** _object_</description>

功能描述：标题的配置项，null 表示不展示。

默认配置：`无`

| 细分配置项名称 | 类型         | 功能描述                 |
| -------------- | ------------ | ------------------------ |
| offset         | _number_     | 标题距离坐标轴的距离     |
| spacing        | _lineStyle_  | 标题距离坐标轴文本的距离 |
| style          | _shapeStyle_ | 标题文本配置项           |
| autoRotate     | _boolean_    | 是否自动旋转             |

##### shapeStyle

<!--图形样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| fill | string | 图形的填充色 |
| fillOpacity | number | 图形的填充透明度 |
| stroke | string | 图形的描边 |
| lineWidth | number | 图形描边的宽度 |
| lineDash | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity | number | 描边透明度 |
| opacity | number | 图形的整体透明度 |
| shadowColor | string | 图形阴影颜色 |
| strokeOpacity | number | 图形边框透明度 |
| shadowBlur | number | 图形阴影的高斯模糊系数 |
| shadowOffsetX | number | 设置阴影距图形的水平距离 |
| shadowOffsetY | number | 设置阴影距图形的垂直距离 |
| cursor | string | 鼠标样式。同 css 的鼠标样式，默认 'default'。 |

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

##### label

<description>**可选** _object_</description>

功能描述：文本标签的配置项，null 表示不展示。

默认配置：`无`

<!--label样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| type | string | 当用户使用了自定义的 label 类型，需要声明具体的 type 类型，否则会使用默认的 label 类型渲染 |
| offset | number | label 的偏移量 |
| offsetX | number | label 相对于数据点在 X 方向的偏移距离 |
| offsetY | number | label 相对于数据点在 Y 方向的偏移距离 |
| content | string \| IGroup \| IShape \| GeometryLabelContentCallback | 展示的文本内容，如果不声明则按照参与映射的第一字段的值进行显示 |
| style | object | label 文本图形属性样式 |
| autoRotate | string | 是否自动旋转，默认 true |
| rotate | number | 文本旋转角度 |
| labelLine | null \| boolean \|object | 用于设置文本连接线的样式属性，null 表示不展示。 |
| labelEmit | boolean | 只对极坐标下的文本生效，表示文本是否按照角度进行放射状显示，true 表示开启，false 表示关闭 |
| layout | 'overlap' \| 'fixedOverlap' \| 'limitInShape' | 文本布局类型，支持多种布局函数组合使用。 |
| position | 'top' \| 'bottom' \| 'middle' \| 'left' \| 'right' | 指定当前 label 与当前图形的相对位置 |
| animate | boolean \| AnimateOption | 动画配置。 |
| formatter | Function | 格式化函数 |
| autoHide | boolean | 是否自动隐藏，默认 false |
| autoEllipsis | boolean | 是否自动省略，默认 false |

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

#### grid

<description>**可选** _object_</description>

功能描述：坐标轴网格线的配置项，null 表示不展示。

默认配置：`无`

| 细分配置项名称 | 类型                | 功能描述                                                 |
| -------------- | ------------------- | -------------------------------------------------------- |
| line           | _lineStyle_         | 线的样式                                                 |
| alternateColor | _string\|string\[]_ | 两个栅格线间的填充色                                     |
| closed         | _boolean_           | 对于 circle 是否关闭 grid                                |
| alignTick      | _boolean_           | 是否同刻度线对齐，如果值为 false，则会显示在两个刻度中间 |

##### lineStyle

<!--线条样式-->

| 属性名 | 类型 | 介绍 |
| --- | --- | --- |
| stroke | string | 线的颜色 |
| lineWidth | number | 线宽 |
| lineDash | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity | number | 透明度 |
| shadowColor | string | 阴影颜色 |
| shadowBlur | number | 高斯模糊系数 |
| shadowOffsetX | number | 设置阴影距图形的水平距离 |
| shadowOffsetY | number | 设置阴影距图形的垂直距离 |
| cursor | string | 鼠标样式。同 css 的鼠标样式,默认 'default'。 |

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

#### animate

<description>**可选** _boolean_</description>

功能描述：动画开关，默认开启。

默认配置：`true`

#### animateOption

<description>**可选** _object_</description>

功能描述：动画参数配置。

默认配置： `无`

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

#### verticalFactor

<description>**可选** _number_</description>

功能描述：标记坐标轴 label 的方向，左侧为 1，右侧为 -1。

默认配置：`无`

#### verticalLimitLength

<description>**可选** _number_</description>

功能描述：配置坐标轴垂直方向的最大限制长度，对文本自适应有很大影响。

默认配置：`无`
