---
title: Axis
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


🏷️  Coordinate axis refers to the axis of statistical chart in two-dimensional space, which is used to define the mapping relationship between **direction** and **value of data** in coordinate system.

🎨  Go to [AntV Design | 坐标轴 Axis](https://www.yuque.com/mo-college/vis-design/twx9oi) of 墨者学院 to learn more about **Design guide**.

#### Axes

![axis](https://gw.alipayobjects.com/zos/antfincdn/9%265Yc6tQuN/648d2019-aee9-4a17-8567-6bbc5910c38d.png)

#### Usage

There are two kinds of coordinate axes: `xAxis` and `yAxis`, which vary according to the specific `Plot`.

<b>There are two ways to configure axes: </b>

Method 1, pass in 'Boolean' to set whether to display a legend.

```ts
xAxis: false; // hide xAxis
```

Method 2, pass in *AxisCfg* to configure the axis as a whole.

```ts
xAxis: {
  text: 'title of xAxis'
}
```

#### Properties - *AxisCfg*

##### top

<description>**optional** *boolean*  *default:* `false`</description>

是否渲染在画布顶层，防止部分图形中，需要将 axis 显示在图形上面，避免被图形遮挡。

##### position

<description>**optional** *`top` | `bottom` | `left` | `right`*</description>

For Cartesian coordinates, set the position of the coordinate axes.

##### title

<description>**optional** *object*</description>

A configuration item for the title, NULL means not to be displayed.

| Properties | Type         | Description                                                                |
| ---------- | ------------ | -------------------------------------------------------------------------- |
| text       | *string*     | The title of axis                                                          |
| position   | *string*     | Position of the axis title, default: 'center'. Options: start, center, end |
| offset     | *number*     | The distance of the title from the coordinate axis                         |
| spacing    | *number*     | The distance between the title and the text on the coordinate axis         |
| style      | *shapeStyle* | Title text configuration items                                             |
| autoRotate | *boolean*    | Whether to rotate automatically or not                                     |

***shapeStyle***

<!--shape style-->

| Properties    | Type            | Description                                                                                                                                                                              |
| ------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fill          | *string*        | Fill color of the shape                                                                                                                                                                  |
| r          | *number*         | used in `point`, means the radius of geometry |
| fillOpacity   | *number*        | Fill opacity of the shape                                                                                                                                                                |
| stroke        | *string*        | Stroke color of the shape                                                                                                                                                                |
| lineWidth     | *number*        | The width of the stroke of the shape                                                                                                                                                     |
| lineDash      | \[number,number] | Configure dashed line stroke. The first parameter is the length of each segment, and the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| lineOpacity   | *number*        | Opacity of the stroke                                                                                                                                                                    |
| opacity       | *number*        | Opacity of the shape                                                                                                                                                                     |
| shadowColor   | *string*        | Shadow color of the shape                                                                                                                                                                |
| strokeOpacity | *number*        | Stroke opacity of the shape                                                                                                                                                              |
| shadowBlur    | *number*        | Gaussian blur coefficient of the shadow                                                                                                                                                  |
| shadowOffsetX | *number*        | Configure horizontal distance between shadow and shape                                                                                                                                   |
| shadowOffsetY | *number*        | Configure vertical distance between shadow and shape                                                                                                                                     |
| cursor        | *string*        | Mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                                   |

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

More documents about `ShapeStyle`, see [Graphic Style](/en/docs/api/graphic-style).


***label***

<description>**optional** *object*</description>

A configuration item for the text label. NULL indicates that it is not displayed.

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


##### label

<description> *AxisLabelCfg | null* **optional** </description>

Configurations related to axis label. Set this to `null` to prevent the axis label from appearing. The details of \_ AxisLabelCfg\_ are as follows:

| Properties   | Type                                                     |         |
| ------------ | -------------------------------------------------------- | ------- | --------------------------------------------------------- |
| style        | *[ShapeAttrs](/en/docs/api/graphic-style)*               | -       | Axis label text graphic property style                    |
| offset       | *number*                                                 | -       | Axis label offset                                         |
| rotate       | *number*                                                 | -       | Axis label text rotation Angle                            |
| autoRotate   | *boolean |avoidCallback*                                                 | `true`  | Whether to rotate automatically, default true             |
| autoHide     | *boolean |avoidCallback | { type:string,cfg?:AxisLabelAutoHideCfg }*                | `false` | Whether to hide it automatically, default to false        |
| autoEllipsis | *boolean*                                                | `false` | Whether to ellipsis label when overflow, default to false |
| formatter    | *`(text: string, item: ListItem, index: number) => any`* | `false` | Format function                                           |

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

Mark the direction of the label on the axis, with 1 to the left and -1 to the right (Only works in vertical axis).

##### verticalLimitLength

<description>**optional** *number*</description>

Configuring the maximum limit length in the vertical direction of the coordinate axis has a significant impact on text adaptation.

##### grid

<description>**optional** *object*</description>

Axis grid line configuration item. NULL means not shown.

| Properties     | Type               | Description                                                        |
| -------------- | ------------------ | ------------------------------------------------------------------ |
| line           | *lineStyle*        | The style of the line                                              |
| alternateColor | *string|string\[]* | The fill color between two grid lines                              |
| closed         | *boolean*          | Whether to close the grid for circle                               |
| alignTick      | *boolean*          | If the value is false, it will be displayed between the two scales |

Then config of `grid.line` is the same as: [line](#line)

##### line

<description>**optional** *object*</description>

Coordinate axis configuration item, NULL means not displayed.

<!--line style-->

> **Attention:** The full configuration of lineStyle is `{ style: { stroke: '#ddd', ... } }`, please check it when your configuration doesn't work.

| Properties    | Type              | Description                                                                                                                                                                   |
| ------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke        | *string*          | color of the line                                                                                                                                                             |
| lineWidth     | *number*          | width of the line                                                                                                                                                             |
| lineDash      | *\[number,number]* | configure dashed line, the first parameter is the length of each segment, the second parameter is the gap between segment. When lineDash is set to \[0,0], there is no effect. |
| opacity       | *number*          | opacity                                                                                                                                                                       |
| shadowColor   | *string*          | shadow color                                                                                                                                                                  |
| shadowBlur    | *number*          | Gaussian blur coefficient                                                                                                                                                     |
| shadowOffsetX | *number*          | configure horizontal distance between shadow and line                                                                                                                         |
| shadowOffsetY | *number*          | configure vertical distance between shadow and line                                                                                                                           |
| cursor        | *string*          | mouse style, same as the mouse style of CSS, default value : 'default'                                                                                                        |

Example (config the grid line style of xAxis)：

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

The configuration item of the coordinate axis scale line. NULL means not displayed.

| Properties | Type        | Description                            |
| ---------- | ----------- | -------------------------------------- |
| style      | *lineStyle* | The style of tickLine.                 |
| alignTick  | *boolean*   | Whether aligh tickLine with tick label |
| length     | *number*    | The length of tickLine.                |

Go [ShapeAttrs](/zh/docs/api/graphic-style) see more details about *ShapeAttrs*. The params of *ShapeAttrsCallback* are as follow：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### subTickLine

<description>**optional** *object*</description>

A configuration item for a coordinate subscale. NULL indicates that it is not displayed.

| Properties | Type                               | Description                |
| ---------- | ---------------------------------- | -------------------------- |
| style      | *ShapeAttrs | ShapeAttrsCallback* | The style of subTickLine.  |
| count      | *number*                           | The count of subTickLine.  |
| length     | *number*                           | The length of subTickLine. |

Go [ShapeAttrs](/zh/docs/api/graphic-style) see more details about *ShapeAttrs*. The params of *ShapeAttrsCallback* are as follow：

```ts
type ShapeAttrsCallback = (item: any, index: number, items: any[]) => ShapeAttrs;
```

##### nice

<description>**optional** *boolean* *default:* `true`</description>

Whether to nice.

##### min

<description>**optional** *number* *default:* `0`</description>

Minimum axis.

##### max

<description>**optional** *number*</description>

Maximum axis.

##### minLimit

<description>**optional** *number*</description>

Minimal limit.

##### maxLimit

<description>**optional** *number*</description>

Maximum limit.

##### tickCount

<description>**optional** *number*</description>

The expected number of axes, not the final result.

##### tickInterval

<description>**optional** *number*</description>

Interval of axes.

##### tickMethod

<description>**optional** *string | Function* *default:* `false`</description>

Specify a tick calculation method, or customize a tick calculation method. Built-in tick calculations include `cat`、`time-cat`、 `wilkinson-extended`、`r-pretty`、`time`、`time-pretty`、`log`、`pow`、`quantile`、`d3-linear`。

##### animate

<description>**optional** *boolean* *default:* `true`</description>

Animation switch, default true.

##### animateOption

<description>**optional** *object*</description>

Animation parameter configuration.

```ts
interface ComponentAnimateCfg {
  /** Duration of the first animation */
  readonly duration?: number;
  /** Easing method used for the first animation. */
  readonly easing?: string;
  /** Delay before updating the animation */
  readonly delay?: number;
}
// Configure the reference
{
  animateOption: {
    appear: ComponentAnimateCfg;
    update: ComponentAnimateCfg;
    enter: ComponentAnimateCfg;
    leave: ComponentAnimateCfg;
  }
}
```
