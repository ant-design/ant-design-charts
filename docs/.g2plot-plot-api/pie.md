



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

<description>**required** *array object*</description>

设置图表数据源。数据源为对象集合，例如：`[{ time: '1991'，value: 20 }, { time: '1992'，value: 20 }]`。

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


```ts
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  const data = [
    {
        country: 'Asia',
        year: '1750',
        value: 502
    },
    {
        country: 'Asia',
        year: '1800',
        value: 635
    },
    {
        country: 'Europe',
        year: '1750',
        value: 163
    },
    {
        country: 'Europe',
        year: '1800',
        value: 203
    }
];
const config = {
    data,
    meta: {
        country: {
            alias: '国家',
            range: [
                0,
                1
            ]
        },
        value: {
            alias: '数量',
            formatter: v => {
                return `${ v }个`;
            }
        }
    },
    angleField: 'value',
    colorField: 'country'
};
  return <Pie {...config} />;
};

export default DemoPie;


```

#### angleField

<description>**required** *string*</description>

扇形切片大小（弧度）所对应的数据字段名。

#### colorField

<description>**required** *string*</description>

扇形颜色映射对应的数据字段名。

### 图形样式

#### radius

<description>**optional** *number*</description>

饼图的半径，原点为画布中心。配置值域为 (0,1]，1 代表饼图撑满绘图区域。

#### innerRadius

<description>**optional** *number*</description>

饼图的内半径，原点为画布中心。配置值域为 (0,1]

#### startAngle

<description>**optional** *number*</description>

配置坐标系的起始角度。

#### endAngle

<description>**optional** *number*</description>

配置坐标系的结束角度。

<playground rid="quarter-circle" path="pie/basic/demo/quarter-circle.ts"></playground>

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


#### statistic ✨

<description>**optional** *object*</description>

统计内容组件。当内半径(`innerRadius`) 大于 0 时才生效，默认展示汇总值，可以通过 `formatter` 格式化展示内容，也可以通过 `customHtml` 自定义更多的内容。

![image](https://gw.alipayobjects.com/zos/bmw-prod/860bbf6e-cf20-4bdf-88bd-e8d685d12e9a.svg)

| 配置项  | 类型                   | 描述     |
| ------- | ---------------------- | -------- |
| title   | *false | StatisticText* | 标题     |
| content | *false | StatisticText* | 主体内容 |

StatisticText

| 配置项    | 类型     | 描述                 |
| --------- | -------- | -------------------- |
| style     | *CSSStyleDeclaration* | 统计文本的样式 (css 样式)      |
| customHtml | `(container: HTMLElement, view: View, datum: object, data: object[]) => string;` | 自定义主体文本的 html，优先级高于 formatter |
| formatter | *Function* | 主体文本的格式化内容 |
| rotate    | *number*   | 旋转角度             |
| offsetX   | *number*   | X 偏移值             |
| offsetY   | *number*   | Y 偏移值             |


#### pieStyle

<description>**optional** *object*</description>

设置扇形样式。pieStyle 中的`fill`会覆盖 `color` 的配置。pieStyle 可以直接指定，也可以通过 callback 的方式，根据数据为每个扇形切片指定单独的样式。

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

关于 ShapeStyle 更加详细的文档参考 [绘图属性](/zh-CN/guide/graphic-style)。


#### state

<description>**可选** *object*</description>

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

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*TBHtTY6RmHIAAAAAAAAAAAAAARQnAQ" alt="加载失败" width="600">

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
| line           | *lineStyle*           | 线的配置项，详细可见 [*ShapeAttrs*](/zh-CN/guide/graphic-style)                                                         |
| text           | *textStyle*           | 辅助线文本配置，支持回调                                            |
| textBackground | *textBackgroundStyle* | 辅助线文本背景配置                                                  |
| follow         | *boolean*             | 辅助线是否跟随鼠标移动，默认为 false，即定位到数据点                |

****textStyle****

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


#### 标签文本

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
| position     | *'top' | 'bottom' | 'middle' | 'left' | 'right'*         | 指定当前 label 与当前图形的相对位置                                                        |
| animate      | *boolean | AnimateOption*                                   | 动画配置。                                                                                 |
| formatter    | *Function*                                                   | 格式化函数                                                                                 |
| autoHide     | *boolean*                                                    | 是否自动隐藏，默认 false                                                                   |

***LabelLineCfg*** 类型定义如下：（关于 *ShapeAttrs* 详细查看 [ShapeAttrs](/zh-CN/guide/graphic-style) 文档）

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

布局方式

##### position

<description>**optional** *string* </description>

图例的位置，可选项：

*   `top`
*   `top-left`
*   `top-right`
*   `right`
*   `right-top`
*   `right-bottom`
*   `left`
*   `left-top`
*   `left-bottom`
*   `bottom`
*   `bottom-left`
*   `bottom-right`

##### background

<description>**optional** *LegendBackgroundCfg* </description>

背景框配置项。*LegendBackgroundCfg* 配置如下：

| 参数名  | 类型                | 默认值 | 描述           |
| ------- | ------------------- | ------ | -------------- |
| padding | number | number\[]  | -      | 背景的留白     |
| style   | object 参考绘图属性 | -      | 背景样式配置项 |

##### flipPage

<description>**optional** *boolean* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，当图例项过多时是否进行分页。

##### pageNavigator

<description>**optional** *object* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例分页导航器的主题样式设置。*LegendPageNavigatorCfg* 配置如下：

| 参数名  | 类型                | 默认值 | 描述           |
| ------ | --------------------- | ------ | -------------- |
| marker.style | *PageNavigatorMarkerStyle* | -      | 分页器指示箭头 样式配置    |
| text.style   | *PageNavigatorTextStyle*   | -      | 分页器页面信息 样式配置   |

***PageNavigatorMarkerStyle*** 配置如下：

| 参数名  | 类型                | 默认值 | 描述           |
| ------ | --------------------- | ------ | -------------- |
| inactiveFill | *string* | -      | Fill color of arrow marker when unclickable (inactive status). |
| inactiveOpacity   | *number*   | -      | Fill opacity of arrow marker when unclickable (inactive status). |
| fill | *string* | -      | Default fill color of arrow marker (active status). |
| opacity   | *number*   | -      | Default fill opacity of arrow marker (active status). |
| size   | *number*   | -      | Size of arrow marker. |

***PageNavigatorTextStyle*** 配置如下：

| 参数名  | 类型                | 默认值 | 描述           |
| ------ | --------------------- | ------ | -------------- |
| fill | *string* | -      | Font color of page navigator info. |
| fontSize   | *number*   | -      |  Font size of page navigator info. |

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

##### handler

<description>**optional** *ContinueLegendHandlerCfg* </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块的配置项。*ContinueLegendHandlerCfg* 配置如下：

| 参数名 | 类型     | 默认值 | 描述                                                        |
| ------ | -------- | ------ | ----------------------------------------------------------- |
| size   | *number* | -      | 滑块的大小                                                  |
| style  | *object* | -      | 滑块的样式设置，参考 [绘图属性](/zh-CN/guide/graphic-style) |

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
| style     | *object*   | -       | 文本样式配置项，参考  [绘图属性](/zh-CN/guide/graphic-style)        |
| spacing   | *number*   | `false` | 图例项 marker 同后面 name 的间距                                    |
| formatter | *function* | -       | 格式化函数, `(text: string, item: ListItem, index: number) => any;` |

##### itemSpacing

<description>**optional** *number* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，控制图例项水平方向的间距。

##### itemValue

<description>**optional** *LegendItemValueCfg* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项 value 附加值的配置项。*LegendItemValueCfg* 配置如下：

| 参数名     | 类型       | 默认值  | 描述                                                                |
| ---------- | ---------- | ------- | ------------------------------------------------------------------- |
| style      | *object*   | -       | 文本样式配置项，详见  [绘图属性](/zh-CN/guide/graphic-style)        |
| alignRight | *boolean*  | `false` | 是否右对齐，默认为 false，仅当设置图例项宽度时生效                  |
| formatter  | *function* | -       | 格式化函数, `(text: string, item: ListItem, index: number) => any;` |

##### animate

<description>**optional** *boolean* </description>

是否开启动画开关。

##### animateOption

<description>**optional** *ComponentAnimateOption* </description>

动画参数配置，当且仅当 animate 属性为 true，即动画开启时生效。动画配置详情如下：

<div class='custom-api-docs'>

*ComponentAnimateOption* 为组件各个动画类型配置。

```ts
interface ComponentAnimateOption {
  appear?: ComponentAnimateCfg; // 图表第一次加载时的入场动画
  enter?: ComponentAnimateCfg; // 图表绘制完成，发生更新后，产生的新图形的进场动画
  update?: ComponentAnimateCfg; // 图表绘制完成，数据发生变更后，有状态变更的图形的更新动画
  leave?: ComponentAnimateCfg; // 图表绘制完成，数据发生变更后，被销毁图形的销毁动画
}

interface ComponentAnimateCfg {
  animation?: string; // 动画效果，内置的动画效果见下表，也可以通过自定义动画的方式实现自定义效果
  duration?: number; // 动画执行时间
  easing?: string; // 动画缓动函数
  delay?: number; // 动画延迟时间
}
```

其中 `animation` 传入动画函数名称，内置默认动画函数如下表，同时也可以通过 `registerAnimation` 自定义动画函数。

**动画效果**，前往[图表示例](/zh/examples/dynamic-plots/animation)查看效果

| animation         | 效果           | 说明                         | 不适用场景 |
| ----------------- | --- | -------------------------------- |-------- |
| 'fade-in'         | ![fade-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*LTRRRL8JwfQAAAAAAAAAAABkARQnAQ)                                                                                                          | 渐现动画。                                                       | |
| 'fade-out'        | ![fade-out.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*s4Y4S5JJ6WEAAAAAAAAAAABkARQnAQ)                                                                                                         | 渐隐动画。                                                       | |
| 'grow-in-x'       | ![grow-in-x.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*vhRVSLxDqU8AAAAAAAAAAABkARQnAQ)                                                                                                        | 容器沿着 x 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。   | 不适用于饼图、玫瑰图等 polar、theta 坐标系下的图表以及柱、条状图 |
| 'grow-in-y'       | ![grow-in-y.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*L6mkQa3aG64AAAAAAAAAAABkARQnAQ)                                                                                                        | 容器沿着 y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。   | 不适用于饼图、玫瑰图等 polar、theta 坐标系下的图表以及柱、条状图 |
| 'grow-in-xy'      | ![grow-in-xy.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*LfPrQouGwYIAAAAAAAAAAABkARQnAQ)                                                                                                       | 容器沿着 x,y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。 ||
| 'scale-in-x'      | ![scale-in-x.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*oiaGTLx-dNcAAAAAAAAAAABkARQnAQ)                                                                                                       | 单个图形沿着 x 方向的生长动画。                                  ||
| 'scale-in-y'      | ![scale-in-y.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*T6mLTY3o9OoAAAAAAAAAAABkARQnAQ)                                                                                                       | 单个图形沿着 y 方向的生长动画。                                  ||
| 'wave-in'         | ![wave-in-p.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*W5CdQIWw-M4AAAAAAAAAAABkARQnAQ)![wave-in-r.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*z9jjQY-lHcwAAAAAAAAAAABkARQnAQ) | 划入入场动画效果，不同坐标系下效果不同。                         ||
| 'zoom-in'         | ![zoom-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*wc4dQp4E6vkAAAAAAAAAAABkARQnAQ)                                                                                                          | 沿着图形中心点的放大动画。                                       ||
| 'zoom-out'        | ![zoom-out.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*PZ2gTrkV29YAAAAAAAAAAABkARQnAQ)                                                                                                         | 沿着图形中心点的缩小动画。                                       ||
| 'path-in'         | ![path-in.gif](https://gw.alipayobjects.com/mdn/rms_f5c722/afts/img/A\*gxZ1RIIMtdIAAAAAAAAAAABkARQnAQ)                                                                                                          | path 路径入场动画。                                              ||
| 'position-update' |                                                                                                                                                                                                                | 图形位置移动动画。                                               | 限用于图表标签 label 上 |

</div>


##### label

<description>**optional** *ContinueLegendLabelCfg* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，文本的配置项。*ContinueLegendLabelCfg* 配置如下：

| 参数名  | 类型     | 默认值 | 描述                                                                                                                                          |
| ------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| align   | *string* | -      | 文本同滑轨的对齐方式 <br/> - rail ： 同滑轨对齐，在滑轨的两端 <br/> - top, bottom: 图例水平布局时有效 <br/> - left, right: 图例垂直布局时有效 |
| style   | *object* | -      | 文本样式配置项，详见  [绘图属性](/zh-CN/guide/graphic-style)                                                                                  |
| spacing | *number* | -      | 文本同滑轨的距离                                                                                                                              |

##### marker

<description>**optional** *MarkerCfg* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项的 marker 图标的配置。

| 参数名  | 类型                          | 默认值 | 描述                             |
| ------- | ---------------------------- | ------ | -------------------------------- |
| symbol  | *Marker* | *MarkerCallback* | -      | 配置图例 marker 的 symbol 形状   |
| style   | *ShapeAttrs*                   | -      | 图例项 marker 的配置项           |
| spacing | *number*                       | -      | 图例项 marker 同后面 name 的间距 |

*Marker* 为支持的标记类型有： *circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen*；
*MarkerCallback* 为 `(x: number, y: number, r: number) => PathCommand`；


##### min

<description>**optional** *number* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最小值。

##### max

<description>**optional** *number* </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最大值。

##### maxWidth

<description>**optional** *number* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项最大宽度设置。

##### maxHeight

<description>**optional** *number* </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项最大高度设置。

##### offsetX

<description>**optional** *number* </description>

图例 x 方向的偏移。

##### offsetY

<description>**optional** *number* </description>

图例 y 方向的偏移。

##### rail

<description>**optional** *ContinueLegendRailCfg* </description>
适用于 <tag color="green" text="分类图例">分类图例</tag>，图例滑轨（背景）的样式配置项。*ContinueLegendRailCfg* 配置如下：

| 参数名        | 类型     | 默认值 | 描述                                                                             |
| ------------- | -------- | ------ | -------------------------------------------------------------------------------- |
| type          | *string* | -      | rail 的类型，color, size                                                         |
| size          | *number* | -      | 滑轨的宽度                                                                       |
| defaultLength | *number* | -      | 滑轨的默认长度，，当限制了 maxWidth,maxHeight 时，不会使用这个属性会自动计算长度 |
| style         | *object* | -      | 滑轨的样式，参考 [绘图属性](/zh-CN/guide/graphic-style)                          |

##### reversed

<description>**optional** *boolean* </description>
适用于 <tag color="green" text="分类图例">分类图例</tag>，是否将图例项逆序展示。

##### slidable

<description>**optional** *boolean* </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块是否可以滑动。

##### title

<description>**optional** *G2LegendTitleCfg* </description>

图例标题配置，默认不展示。*G2LegendTitleCfg* 配置如下：

| 参数名  | 类型     | 默认值 | 描述                                                         |
| ------- | -------- | ------ | ------------------------------------------------------------ |
| spacing | *number* | -      | 标题同图例项的间距                                           |
| style   | *object* | -      | 文本样式配置项，参考  [绘图属性](/zh-CN/guide/graphic-style) |

##### track

<description>**optional** *ContinueLegendTrackCfg* </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的色块样式配置项。*ContinueLegendTrackCfg* 配置如下：

| 参数名 | 类型     | 默认值 | 描述                                                        |
| ------ | -------- | ------ | ----------------------------------------------------------- |
| style  | *object* | -      | 选定范围的样式，参考 [绘图属性](/zh-CN/guide/graphic-style) |

##### values

<description>**optional** *number\[]* </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择的值。

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

| 参数名  | 类型                          | 默认值 | 描述                             |
| ------- | ---------------------------- | ------ | -------------------------------- |
| symbol  | *Marker* | *MarkerCallback* | -      | 配置图例 marker 的 symbol 形状   |
| style   | *ShapeAttrs*                   | -      | 图例项 marker 的配置项           |
| spacing | *number*                       | -      | 图例项 marker 同后面 name 的间距 |

*Marker* 为支持的标记类型有： *circle | square | line | diamond | triangle | triangle-down | hexagon | bowtie | cross | tick | plus | hyphen*；
*MarkerCallback* 为 `(x: number, y: number, r: number) => PathCommand`；


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
| ------- | ------------------- | -------- | ------ | ------------------ |
| style   | *object* | -      | 文本背景的样式, 参考[绘图属性](/guide/graphic-style)     |
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
