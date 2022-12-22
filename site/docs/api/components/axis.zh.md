---
title: 坐标轴 - Axis
order: 1
contributors:
  [
    {
      author: '新茗',
      github: 'visiky',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/KAeYPA3TV0/avatar.jpeg',
    },
     {
      author: 'BBSQQ',
      github: 'BBSQQ',
      avatar: 'https://avatars.githubusercontent.com/u/35586469',
    },
     {
      author: 'lxfu1',
      github: 'lxfu1',
      avatar: 'https://avatars.githubusercontent.com/u/31396322',
    },
  ]
---

<style>
  span.ant-tag {
    margin: 0 4px;
    line-height: 18px;
  }
</style>


<style>
  .gatsby-highlight + p {
    margin-top: 18px;
  }
  
  table {
    margin-top: 12px !important;
  }

  h4 {
   margin-top: 30px !important;
    margin-bottom: 12px !important;
  }

  h5 {
    font-size: 18px !important;
    line-height: 22px;
    margin-top: 1.5em !important;
  }

  h4 + h5 {
    margin-top: 20px !important;
  }

  code.language-text {
    padding: .2em;
    margin: 0;
    font-size: .85em;
    background-color: #f7f7f7 !important;
  }

  ul li {
    line-height: 1.5;
  }
</style>


🏷️  坐标轴指二维空间中统计图表中的轴，它用来定义坐标系中数据在方向和值的映射关系的图表组件。

🎨  前往墨者学院 [AntV 设计 | 坐标轴 Axis](https://www.yuque.com/mo-college/vis-design/twx9oi) 查看**设计指引**

#### 构成元素

![axis](https://gw.alipayobjects.com/zos/antfincdn/9%265Yc6tQuN/648d2019-aee9-4a17-8567-6bbc5910c38d.png)

#### 使用方式

坐标轴通常有 `xAxis`, `yAxis` 两种，会根据具体 `Plot` 有所差异。

<b>配置坐标轴有两种方式：</b>

第一种，传入 `false` 设置隐藏坐标轴。

```ts
xAxis: false; // 隐藏 x 轴
```

第二种，传入 *AxisCfg* 对坐标轴进行整体配置。

```ts
xAxis: {
  text: 'x 轴标题'
}
```

#### 配置属性 - *AxisCfg*

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
