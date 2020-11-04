

title: 词云图

## order: 8

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

画布的 `padding` 值，或者开启 `auto`。

#### appendPadding

<description>**optional** _number\[] | number_</description>

额外增加的 `appendPadding` 值。

#### renderer

<description>**optional** _string_ _default:_ `canvas`</description>

设置图表渲染方式为 `canvas` 或 `svg`。

#### pixelRatio

<description>**optional** _number_ _default:_ `window.devicePixelRatio`</description>

设置图表渲染的像素比。


### 数据映射

#### data

<description>**required** _array object_</description>

设置图表数据源。数据源为对象集合，例如：`[{ time: '1991'，value: 20 }, { time: '1992'，value: 20 }]`。

#### wordField

<description>**required** _string_</description>

单词内容在数据中所对应的字段名。

#### weightField

<description>**required** _string_</description>

单词所占权重在数据中所对应的字段名。

#### colorField

<description>**optional** _string_</description>

根据该字段进行颜色映射。

#### random

<description>**optional** _number | function_</description>

自定义所使用的随机函数，其值可以是一个 \[0, 1) 区间中的值，也可以是一个返回该值的函数，当该值是一个固定的值时，每次渲染相同数据的词云图时，其对应的每个单词的布局坐标一致。

默认配置： 默认使用的是浏览器内置的 `Math.random`，也就是每次渲染，单词的位置都不一样。

#### spiral

<description>**optional** _'archimedean' | 'rectangular'_ _default:_ `'archimedean'`</description>

当设置为 `archimedean` 时，整个词云图接近于`椭圆`的形状，当设置为 `rectangular` 时，整个词云图接近于`矩形`的形状。

#### placementStrategy

<description>**optional** _function_</description>

自定义每个词语的坐标，返回值必须包含 x 和 y 属性，其余的可选。也可以在 `wordStyle` 中的选项中设置。

其返回值的类型如下：

| 细分配置   | 类型                 | 功能描述      |
| ------ | ------------------ | --------- |
| x      | _number_           | 当前文本的横向坐标 |
| y      | _number_           | 当前文本的纵向坐标 |
| font   | _string_           | 文本的字体     |
| weight | _number \| string_ | 文本的字重     |
| size   | _numberg_          | 文本的字体大小   |
| rotate | _numberg_          | 文本的旋转角度   |

#### timeInterval

<description>**optional** _number_ _default:_ `2000`</description>

设置绘制程序最大的执行时间，单位毫秒，如果时间设置过短可能会只绘制一部分词语。

#### meta

<description>**optional** _object_</description>

全局化配置图表数据元信息，以字段为单位进行配置。在 meta 上的配置将同时影响所有组件的文本信息。

| 细分配置项名称   | 类型          | 功能描述                       |
| --------- | ----------- | -------------------------- |
| alias     | _string_    | 字段的别名                      |
| formatter | _function_  | callback 方法，对该字段所有值进行格式化处理 |
| values    | _string\[]_ | 枚举该字段下所有值                  |
| range     | _number\[]_ | 字段的数据映射区间，默认为[0,1]         |


### 图形样式

#### imageMask

<description>**optional** _HTMLImageElement \| string_</description>

设置一张图片，然后图表就可以根据该图片的形状进行渲染，可以是图片元素实例或者 url 地址和 base64。

注意： 词语只渲染在图片的深色部位，浅色的部位（如白色）不渲染词语。当使用图片的 url 地址时，图片的大小不宜过大，不然图片加载时间过长。

#### wordStyle

<description>**optional** _object_</description>

设置每个词语的样式。

| 细分配置          | 类型                                | 默认值       | 功能描述                                 |
| ------------- | --------------------------------- | --------- | ------------------------------------ |
| fontFamily    | _string \| function_              | 'Verdana' | 词云的字体                                |
| fontWeight    | _string \| number \| function_    | 'normal'  | 设置字体的粗细                              |
| padding       | _number \| function_              | 1         | 每个单词所占的盒子的内边距，默认为 1。 越大单词之间的间隔越大。    |
| fontSize      | _number\[] \| number \| function_ | [20, 60]  | 字体的大小范围，比如 [10, 20] 表示最小字体是 10，最大 20 |
| rotation      | _number\[] \| number \| function_ | [0, 90]   | 旋转的最小角度和最大角度 默认 [0, 90]              |
| rotationSteps | _number_                          | 2         | 旋转实际的步数,越大可能旋转角度越小, 默认是 2            |

以上，某些属性可以设置为一个函数，其函数的参数如下：

| 细分配置  | 类型        | 功能描述            |
| ----- | --------- | --------------- |
| word  | _Word_    | 每个文本的数据对象       |
| index | _number_  | 当前文本对象在总数据中的索引值 |
| words | _Word\[]_ | 总的文本数据，是一个数组    |

类型`Word`的配置如下：

| 细分配置  | 类型       | 功能描述        |
| ----- | -------- | ----------- |
| text  | _string_ | 文本内容        |
| value | _number_ | 文本权重        |
| color | _any_    | 进行颜色映射的值    |
| datum | _object_ | 存储的所对应的原始数据 |

#### color

<description>**optional** _string | string\[] | Function_</description>

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
  color: (type) => {
    if(type === 'male'){
      return 'red';
    }
    // TODO
    return 'yellow';
  }
}
```


### 图表组件

#### tooltip

##### fields

<description>**optional** _string\[]_</description>

指定 tooltip 中显示的字段，默认不同图表有不同的默认字段列表。配合 `formatter` 配置一起使用，效果更加。

```ts
tooltip: {
  fields: ['x', 'y'],
}
```

##### formatter

<description>**optional** _Function_</description>

格式化 tooltip item 内容。

```ts
tooltip: {
  formatter: (datum: Datum) => {
    return { name: datum.x, value: datum.y + '% };
  },
}
```

##### follow

<description>**optional** _boolean_ _default:_ `true`</description>

设置 tooltip 内容框是否跟随鼠标移动。

##### enterable

<description>**optional** _boolean_ _default:_ `false`</description>

tooltip 是否允许鼠标滑入。

##### showTitle

<description>**optional** _boolean_ _default:_ `false`</description>

是否展示 tooltip 标题。

##### title

<description>**optional** _string_</description>

设置 tooltip 的标题内容：如果值为数据字段名，则会展示数据中对应该字段的数值，如果数据中不存在该字段，则直接展示 title 值。

##### position

<description>**optional** _`top` \| `bottom` \| `left` \| `right`_</description>

设置 tooltip 的固定展示位置，相对于数据点。

##### shared

<description>**optional** _boolean_</description>

true 表示合并当前点对应的所有数据并展示，false 表示只展示离当前点最逼近的数据内容。

##### showCrosshairs

<description>**optional** _boolean_ _default:_ `false`</description>

是否展示 crosshairs。

##### crosshairs

<description>**optional** _object_</description>

配置 tooltip 的 crosshairs，当且仅当 `showCrosshairs` 为 true 时生效。

| 细分配置项名称        | 类型                     | 功能描述                                            |
| -------------- | ---------------------- | ----------------------------------------------- |
| type           | \_`x` \| `y` \| `xy`\_ | crosshairs 的类型: `x` 表示 x 轴上的辅助线，`y` 表示 y 轴上的辅助项 |
| line           | _lineStyle_            | 线的配置项                                           |
| text           | _textStyle_            | 辅助线文本配置，支持回调                                    |
| textBackground | _textBackgroundStyle_  | 辅助线文本背景配置                                       |
| follow         | _boolean_              | 辅助线是否跟随鼠标移动，默认为 false，即定位到数据点                   |

**_lineStyle_**

<!--线条样式-->

| 属性名           | 类型              | 介绍                                                         |
| ------------- | --------------- | ---------------------------------------------------------- |
| stroke        | string          | 线的颜色                                                       |
| lineWidth     | number          | 线宽                                                         |
| lineDash      | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity       | number          | 透明度                                                        |
| shadowColor   | string          | 阴影颜色                                                       |
| shadowBlur    | number          | 高斯模糊系数                                                     |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                               |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                               |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                             |

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


**__textStyle__**

<!--文本样式-->

| 属性名           | 类型              | 介绍                                                                                 |
| ------------- | --------------- | ---------------------------------------------------------------------------------- |
| fontSize      | number          | 文字大小                                                                               |
| fontFamily    | string          | 文字字体                                                                               |
| fontWeight    | number          | 字体粗细                                                                               |
| lineHeight    | number          | 文字的行高                                                                              |
| textAlign     | string          | 设置文本内容的当前对齐方式, 支持的属性：`center` \| `end` \| `left` \| `right` \| `start`，默认值为`start` |
| fill          | string          | 文字的填充色                                                                             |
| fillOpacity   | number          | 文字的填充透明度                                                                           |
| stroke        | string          | 文字的描边                                                                              |
| lineWidth     | number          | 文字描边的宽度                                                                            |
| lineDash      | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。                      |
| lineOpacity   | number          | 描边透明度                                                                              |
| opacity       | number          | 文字的整体透明度                                                                           |
| shadowColor   | string          | 文字阴影颜色                                                                             |
| shadowBlur    | number          | 文字阴影的高斯模糊系数                                                                        |
| shadowOffsetX | number          | 设置阴影距文字的水平距离                                                                       |
| shadowOffsetY | number          | 设置阴影距文字的垂直距离                                                                       |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                                                     |

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


**_textBackgroundStyle_**

| 细分配置项名称 | 类型                  | 功能描述      |
| ------- | ------------------- | --------- |
| padding | number \| number\[] | 文本背景周围的留白 |
| style   | _shapeStyle_        | 线的配置项     |

**_shapeStyle_**

<!--图形样式-->

| 属性名           | 类型              | 介绍                                                            |
| ------------- | --------------- | ------------------------------------------------------------- |
| fill          | string          | 图形的填充色                                                        |
| fillOpacity   | number          | 图形的填充透明度                                                      |
| stroke        | string          | 图形的描边                                                         |
| lineWidth     | number          | 图形描边的宽度                                                       |
| lineDash      | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity   | number          | 描边透明度                                                         |
| opacity       | number          | 图形的整体透明度                                                      |
| shadowColor   | string          | 图形阴影颜色                                                        |
| strokeOpacity | number          | 图形边框透明度                                                       |
| shadowBlur    | number          | 图形阴影的高斯模糊系数                                                   |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                                  |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                                  |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式，默认 'default'。                                |

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


##### showMarkers

<description>**optional** _boolean_ _default:_ `true`</description>

是否渲染 tooltipMarkers。

##### marker

<description>**optional** _object_</description>

tooltipMarker 的样式配置。

##### showContent

<description>**optional** _boolean_ _default:_ `false`</description>

是否展示 tooltip 内容框。

##### container

<description>**optional** _string|HTMLElement_</description>

自定义 tooltip 的容器。

##### containerTpl

<description>**optional** _string_</description>

用于指定图例容器的模板，自定义模板时必须包含各个 dom 节点的 class。

##### itemTpl

<description>**optional** _string_</description>

每项记录的默认模板，自定义模板时必须包含各个 dom 节点的 class。

##### domStyles

<description>**optional** _TooltipDomStyles_</description>

传入各个 dom 的样式。

```ts
/** Tooltip 内容框的 css 样式定义 */
{
  domStyles: {
    'g2-tooltip'?: object;
    'g2-tooltip-title'?: object;
    'g2-tooltip-list'?: object;
    'g2-tooltip-list-item'?: object;
    'g2-tooltip-marker'?: object;
    'g2-tooltip-value'?: object;
    'g2-tooltip-name'?: object;
  }
}
```

##### offset

<description>**optional** _number_</description>

tooltip 偏移量。

##### customContent

<description>**optional** _Function_</description>

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


#### label

<!--label样式-->

| 属性名          | 类型                                                         | 介绍                                                      |
| ------------ | ---------------------------------------------------------- | ------------------------------------------------------- |
| type         | string                                                     | 当用户使用了自定义的 label 类型，需要声明具体的 type 类型，否则会使用默认的 label 类型渲染 |
| offset       | number                                                     | label 的偏移量                                              |
| offsetX      | number                                                     | label 相对于数据点在 X 方向的偏移距离                                 |
| offsetY      | number                                                     | label 相对于数据点在 Y 方向的偏移距离                                 |
| content      | string \| IGroup \| IShape \| GeometryLabelContentCallback | 展示的文本内容，如果不声明则按照参与映射的第一字段的值进行显示                         |
| style        | object                                                     | label 文本图形属性样式                                          |
| autoRotate   | string                                                     | 是否自动旋转，默认 true                                          |
| rotate       | number                                                     | 文本旋转角度                                                  |
| labelLine    | null \| boolean \|object                                   | 用于设置文本连接线的样式属性，null 表示不展示。                              |
| labelEmit    | boolean                                                    | 只对极坐标下的文本生效，表示文本是否按照角度进行放射状显示，true 表示开启，false 表示关闭      |
| layout       | 'overlap' \| 'fixedOverlap' \| 'limitInShape'              | 文本布局类型，支持多种布局函数组合使用。                                    |
| position     | 'top' \| 'bottom' \| 'middle' \| 'left' \| 'right'         | 指定当前 label 与当前图形的相对位置                                   |
| animate      | boolean \| AnimateOption                                   | 动画配置。                                                   |
| formatter    | Function                                                   | 格式化函数                                                   |
| autoHide     | boolean                                                    | 是否自动隐藏，默认 false                                         |
| autoEllipsis | boolean                                                    | 是否自动省略，默认 false                                         |

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


#### axis

xAxis、yAxis 配置相同（由于 DualAxes 是双轴， yAxis 类型是数组类型）。

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

##### position

<description>**optional** _`top` \| `bottom` \| `left` \| `right`_</description>

适用于直角坐标系，设置坐标轴的位置。

##### line

<description>**optional** _object_</description>

坐标轴线的配置项，null 表示不展示。

<!--线条样式-->

| 属性名           | 类型              | 介绍                                                         |
| ------------- | --------------- | ---------------------------------------------------------- |
| stroke        | string          | 线的颜色                                                       |
| lineWidth     | number          | 线宽                                                         |
| lineDash      | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity       | number          | 透明度                                                        |
| shadowColor   | string          | 阴影颜色                                                       |
| shadowBlur    | number          | 高斯模糊系数                                                     |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                               |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                               |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                             |

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

| 属性名           | 类型              | 介绍                                                         |
| ------------- | --------------- | ---------------------------------------------------------- |
| stroke        | string          | 线的颜色                                                       |
| lineWidth     | number          | 线宽                                                         |
| lineDash      | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity       | number          | 透明度                                                        |
| shadowColor   | string          | 阴影颜色                                                       |
| shadowBlur    | number          | 高斯模糊系数                                                     |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                               |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                               |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                             |

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

| 属性名           | 类型              | 介绍                                                         |
| ------------- | --------------- | ---------------------------------------------------------- |
| stroke        | string          | 线的颜色                                                       |
| lineWidth     | number          | 线宽                                                         |
| lineDash      | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity       | number          | 透明度                                                        |
| shadowColor   | string          | 阴影颜色                                                       |
| shadowBlur    | number          | 高斯模糊系数                                                     |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                               |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                               |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                             |

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

| 细分配置项名称    | 类型           | 功能描述         |
| ---------- | ------------ | ------------ |
| offset     | _number_     | 标题距离坐标轴的距离   |
| spacing    | _lineStyle_  | 标题距离坐标轴文本的距离 |
| style      | _shapeStyle_ | 标题文本配置项      |
| autoRotate | _boolean_    | 是否自动旋转       |

**_shapeStyle_**

<!--图形样式-->

| 属性名           | 类型              | 介绍                                                            |
| ------------- | --------------- | ------------------------------------------------------------- |
| fill          | string          | 图形的填充色                                                        |
| fillOpacity   | number          | 图形的填充透明度                                                      |
| stroke        | string          | 图形的描边                                                         |
| lineWidth     | number          | 图形描边的宽度                                                       |
| lineDash      | [number,number] | 描边的虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| lineOpacity   | number          | 描边透明度                                                         |
| opacity       | number          | 图形的整体透明度                                                      |
| shadowColor   | string          | 图形阴影颜色                                                        |
| strokeOpacity | number          | 图形边框透明度                                                       |
| shadowBlur    | number          | 图形阴影的高斯模糊系数                                                   |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                                  |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                                  |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式，默认 'default'。                                |

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


**_label_**

<description>**optional** _object_</description>

文本标签的配置项，null 表示不展示。

<!--label样式-->

| 属性名          | 类型                                                         | 介绍                                                      |
| ------------ | ---------------------------------------------------------- | ------------------------------------------------------- |
| type         | string                                                     | 当用户使用了自定义的 label 类型，需要声明具体的 type 类型，否则会使用默认的 label 类型渲染 |
| offset       | number                                                     | label 的偏移量                                              |
| offsetX      | number                                                     | label 相对于数据点在 X 方向的偏移距离                                 |
| offsetY      | number                                                     | label 相对于数据点在 Y 方向的偏移距离                                 |
| content      | string \| IGroup \| IShape \| GeometryLabelContentCallback | 展示的文本内容，如果不声明则按照参与映射的第一字段的值进行显示                         |
| style        | object                                                     | label 文本图形属性样式                                          |
| autoRotate   | string                                                     | 是否自动旋转，默认 true                                          |
| rotate       | number                                                     | 文本旋转角度                                                  |
| labelLine    | null \| boolean \|object                                   | 用于设置文本连接线的样式属性，null 表示不展示。                              |
| labelEmit    | boolean                                                    | 只对极坐标下的文本生效，表示文本是否按照角度进行放射状显示，true 表示开启，false 表示关闭      |
| layout       | 'overlap' \| 'fixedOverlap' \| 'limitInShape'              | 文本布局类型，支持多种布局函数组合使用。                                    |
| position     | 'top' \| 'bottom' \| 'middle' \| 'left' \| 'right'         | 指定当前 label 与当前图形的相对位置                                   |
| animate      | boolean \| AnimateOption                                   | 动画配置。                                                   |
| formatter    | Function                                                   | 格式化函数                                                   |
| autoHide     | boolean                                                    | 是否自动隐藏，默认 false                                         |
| autoEllipsis | boolean                                                    | 是否自动省略，默认 false                                         |

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

| 细分配置项名称        | 类型                  | 功能描述                            |
| -------------- | ------------------- | ------------------------------- |
| line           | _lineStyle_         | 线的样式                            |
| alternateColor | _string\|string\[]_ | 两个栅格线间的填充色                      |
| closed         | _boolean_           | 对于 circle 是否关闭 grid             |
| alignTick      | _boolean_           | 是否同刻度线对齐，如果值为 false，则会显示在两个刻度中间 |

**_lineStyle_**

<!--线条样式-->

| 属性名           | 类型              | 介绍                                                         |
| ------------- | --------------- | ---------------------------------------------------------- |
| stroke        | string          | 线的颜色                                                       |
| lineWidth     | number          | 线宽                                                         |
| lineDash      | [number,number] | 虚线配置，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为[0,0]的效果为没有描边。 |
| opacity       | number          | 透明度                                                        |
| shadowColor   | string          | 阴影颜色                                                       |
| shadowBlur    | number          | 高斯模糊系数                                                     |
| shadowOffsetX | number          | 设置阴影距图形的水平距离                                               |
| shadowOffsetY | number          | 设置阴影距图形的垂直距离                                               |
| cursor        | string          | 鼠标样式。同 css 的鼠标样式,默认 'default'。                             |

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


#### legend

配置图例有两种方式
第一种，传入 `boolean` 设置是否显示图例。

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

<description>**optional** _horizontal | vertical_ </description>

布局方式

##### position

<description>**optional** _top | top-left | top-right | right | right-top | right-bottom | left | left-top | left-bottom | bottom | bottom-left | bottom-right_ </description>

图例的位置。

##### background

<description>**optional** _LegendBackgroundCfg_ </description>

背景框配置项。_LegendBackgroundCfg_ 配置如下：

| 参数名     | 类型                  | 是否必选 | 默认值 | 描述      |
| ------- | ------------------- | ---- | --- | ------- |
| padding | number \| number\[] |      | -   | 背景的留白   |
| style   | object 参考绘图属性       |      | -   | 背景样式配置项 |

##### flipPage

<description>**optional** _boolean_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，当图例项过多时是否进行分页。

##### handler

<description>**optional** _ContinueLegendHandlerCfg_ </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块的配置项。_ContinueLegendHandlerCfg_ 配置如下：

| 参数名   | 类型            | 是否必选 | 默认值 | 描述      |
| ----- | ------------- | ---- | --- | ------- |
| size  | number        |      | -   | 滑块的大小   |
| style | object 参考绘图属性 |      | -   | 滑块的样式设置 |

##### itemHeight

<description>**optional** _number_ _default:_ `null`</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例的高度, 默认为 null。

##### itemWidth

<description>**optional** _number_ _default:_ `null`</description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项的宽度, 默认为 null，自动计算。

##### itemName

<description>**optional** _LegendItemNameCfg_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项 name 文本的配置。_LegendItemNameCfg_ 配置如下：

| 参数名       | 类型                                                      | 是否必选 | 默认值 | 描述                      |
| --------- | ------------------------------------------------------- | ---- | --- | ----------------------- |
| style     | object 参考绘图属性                                           |      | -   | 文本样式配置项                 |
| spacing   | number                                                  |      | -   | 图例项 marker 同后面 name 的间距 |
| formatter | `(text: string, item: ListItem, index: number) => any;` |      |     | 格式化函数                   |

##### itemSpacing

<description>**optional** _number_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，控制图例项水平方向的间距。

##### itemValue

<description>**optional** _LegendItemValueCfg_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项 value 附加值的配置项。_LegendItemValueCfg_ 配置如下：

| 参数名        | 类型                                                      | 是否必选 | 默认值     | 描述                           |
| ---------- | ------------------------------------------------------- | ---- | ------- | ---------------------------- |
| style      | object 参考绘图属性                                           |      | -       | 文本样式配置项                      |
| alignRight | boolean                                                 |      | `false` | 是否右对齐，默认为 false，仅当设置图例项宽度时生效 |
| formatter  | `(text: string, item: ListItem, index: number) => any;` |      |         | 格式化函数                        |

##### animate

<description>**optional** _boolean_ </description>

是否开启动画开关。

##### animateOption

<description>**optional** _ComponentAnimateOption_ </description>

动画参数配置，当且仅当 animate 属性为 true，即动画开启时生效。动画配置详情点击 [ComponentAnimateOption](animate-option) 查看。

##### label

<description>**optional** _ContinueLegendLabelCfg_ </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，文本的配置项。_ContinueLegendLabelCfg_ 配置如下：

| 参数名     | 类型            | 是否必选 | 默认值 | 描述                                                                                                   |
| ------- | ------------- | ---- | --- | ---------------------------------------------------------------------------------------------------- |
| align   | string        |      | -   | 文本同滑轨的对齐方式 <br/> - rail ： 同滑轨对齐，在滑轨的两端 <br/> - top, bottom: 图例水平布局时有效 <br/> - left, right: 图例垂直布局时有效 |
| style   | object 参考绘图属性 |      | -   | 文本样式配置项                                                                                              |
| spacing | number        |      | -   | 文本同滑轨的距离                                                                                             |

##### marker

<description>**optional** _MarkerCfg_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项的 marker 图标的配置。

| 参数名     | 类型                           | 是否必选 | 默认值 | 描述                      |
| ------- | ---------------------------- | ---- | --- | ----------------------- |
| symbol  | _Marker_ \| _MarkerCallback_ |      | -   | 配置图例 marker 的 symbol 形状 |
| style   | ShapeAttrs                   |      | -   | 图例项 marker 的配置项         |
| spacing | number                       |      | -   | 图例项 marker 同后面 name 的间距 |

_Marker_ 为支持的标记类型有： _circle | square | line | diamond | triangle | triangleDown | hexagon | bowtie | cross | tick | plus | hyphen_；
_MarkerCallback_ 为 `(x: number, y: number, r: number) => PathCommand`；


##### min

<description>**optional** _number_ </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最小值。

##### max

<description>**optional** _number_ </description>

适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的最大值。

##### maxWidth

<description>**optional** _number_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项最大宽度设置。

##### maxHeight

<description>**optional** _number_ </description>

适用于 <tag color="green" text="分类图例">分类图例</tag>，图例项最大高度设置。

##### offsetX

<description>**optional** _number_ </description>

图例 x 方向的偏移。

##### offsetY

<description>**optional** _number_ </description>

图例 y 方向的偏移。

##### rail

<description>**optional** _ContinueLegendRailCfg_ </description>
适用于 <tag color="green" text="分类图例">分类图例</tag>，图例滑轨（背景）的样式配置项。_ContinueLegendRailCfg_ 配置如下：

| 参数名           | 类型            | 是否必选 | 默认值 | 描述                                                 |
| ------------- | ------------- | ---- | --- | -------------------------------------------------- |
| type          | string        |      | -   | rail 的类型，color, size                               |
| size          | number        |      | -   | 滑轨的宽度                                              |
| defaultLength | number        |      | -   | 滑轨的默认长度，，当限制了 maxWidth,maxHeight 时，不会使用这个属性会自动计算长度 |
| style         | object 参考绘图属性 |      | -   | 滑轨的样式                                              |

##### reversed

<description>**optional** _boolean_ </description>
适用于 <tag color="green" text="分类图例">分类图例</tag>，是否将图例项逆序展示。

##### slidable

<description>**optional** _boolean_ </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，滑块是否可以滑动。

##### title

<description>**optional** _G2LegendTitleCfg_ </description>

图例标题配置，默认不展示。_G2LegendTitleCfg_ 配置如下：

| 参数名     | 类型            | 是否必选 | 默认值 | 描述        |
| ------- | ------------- | ---- | --- | --------- |
| spacing | number        |      | -   | 标题同图例项的间距 |
| style   | object 参考绘图属性 |      | -   | 文本样式配置项   |

##### track

<description>**optional** _ContinueLegendTrackCfg_ </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择范围的色块样式配置项。_ContinueLegendTrackCfg_ 配置如下：

| 参数名   | 类型            | 是否必选 | 默认值 | 描述      |
| ----- | ------------- | ---- | --- | ------- |
| style | object 参考绘图属性 |      | -   | 选定范围的样式 |

##### values

<description>**optional** _number\[]_ </description>
适用于 <tag color="cyan" text="连续图例">连续图例</tag>，选择的值。

##### custom

<description>**optional** _boolean_ </description>

是否为自定义图例，当该属性为 true 时，需要声明 items 属性。

##### items

<description>**optional** _LegendItem\[]_ </description>
适用于 <tag color="green" text="分类图例">分类图例</tag>，用户自己配置图例项的内容。_LegendItem_ 配置如下：

| 参数名    | 类型          | 是否必选     | 默认值 | 描述           |
| ------ | ----------- | -------- | --- | ------------ |
| id     | string      |          | -   | 唯一值，用于动画或者查找 |
| name   | string      | required | -   | 名称           |
| value  | any         | required | -   | 值            |
| marker | _MarkerCfg_ |          | -   | 图形标记         |

| 参数名     | 类型                           | 是否必选 | 默认值 | 描述                      |
| ------- | ---------------------------- | ---- | --- | ----------------------- |
| symbol  | _Marker_ \| _MarkerCallback_ |      | -   | 配置图例 marker 的 symbol 形状 |
| style   | ShapeAttrs                   |      | -   | 图例项 marker 的配置项         |
| spacing | number                       |      | -   | 图例项 marker 同后面 name 的间距 |

_Marker_ 为支持的标记类型有： _circle | square | line | diamond | triangle | triangleDown | hexagon | bowtie | cross | tick | plus | hyphen_；
_MarkerCallback_ 为 `(x: number, y: number, r: number) => PathCommand`；


#### slider

object 类型的请参考[绘图属性](../../manual/graphic-style)

| 配置项             | 类型       | 功能描述      |
| --------------- | -------- | --------- |
| start           | number   | 默认起始位置    |
| end             | number   | 默认结束位置    |
| height          | number   | 缩略轴高度     |
| trendCfg        | trendCfg | 背景趋势的配置   |
| backgroundStyle | object   | 背景配置      |
| foregroundStyle | object   | 背景配置      |
| handlerStyle    | object   | handle 配置 |
| textStyle       | object   | 文本配置      |
| minLimit        | number   | 允许滑动位置下限  |
| maxLimit        | number   | 允许滑动位置上限  |
| formatter       | Function | 滑块文本格式化函数 |

trendCfg

| 配置项             | 类型        | 功能描述      |
| --------------- | --------- | --------- |
| data            | number\[] | 统计文本的样式   |
| smooth          | boolean   | 是否平滑      |
| isArea          | boolean   | 是否面积图     |
| backgroundStyle | object    | 背景样式配置    |
| lineStyle       | object    | line 样式配置 |
| areaStyle       | object    | area 样式配置 |


#### annotations

标注是数组类型，可以设置多个。

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

##### type

<description>**required** _string_ </description>

标注类型, text | line | image | region | dataMarker | dataRegion | regionFilter | shape | html.

##### position

<description>**required** _object_ </description>

标注位置。

-   第一种，object 使用图表 x, y 对应的原始数据例如：{ time: '2010-01-01', value: 200 };
-   第二种，数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
    1、对应数据源中的原始数据；
    2、关键字：'min'、'max'、'median'、'start'、'end' 分别代表数据的最大值、最小值、中间值以及坐标系区间的起始和结束；
    3、x, y 都是百分比的形式，如 30%，在绘图区域定位(即坐标系内)。
    1 和 2 两种类型的数据可以混用，但是使用百分比形式时 x 和 y 必须都是百分比形式。
-   第三种，回调函数，可以动态得确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景。

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

<description>**optional** _head | middle | tail _ </description>

文本截断的位置。

##### isVertical

<description>**optional** _boolean_ </description>

文本在二维坐标系的显示位置，是沿着 x 轴显示 还是沿着 y 轴显示。

##### background

<description>**optional** _object_ </description>

文字包围盒样式设置。

| 参数名     | 类型                  | 是否必选 | 默认值 | 描述        |
| ------- | ------------------- | ---- | --- | --------- |
| style   | object 参考绘图属性       |      | -   | 文本背景的样式   |
| padding | number \| number\[] |      | -   | 文本背景周围的留白 |

##### color

<description>**optional** _string_ </description>

染色色值，一般用于 regionFilter。

##### apply

<description>**optional** _string\[]_ </description>

设定 regionFilter 只对特定 geometry 类型起作用，如 apply: ['area']，一般用于 regionFilter。

##### autoAdjust

<description>**optional** _boolean_ </description>

文本超出绘制区域时，是否自动调节文本方向。

##### direction

<description>**optional** _upward | downward_ </description>

朝向。

##### lineLength

<description>**optional** _number_ </description>

line 长度，用于 dataRegion。

##### render

<description>**optional** _string_ </description>

自定义标记的绘制 render 函数，其他 container 为标记绘制的父容器, view 为图形实例, helpers 为辅助函数，其他 parserPosition 可以用来计算数据点对应的坐标位置，用于 shape。

##### container

<description>**optional** _string | HTMLElement_ </description>

自定义 HTML 图形标记的容器元素，用于 html

##### container

<description>**optional** _string | HTMLElement_ </description>

自定义的图形标记的 HTML 元素，可为 HTML DOM 字符串，或 HTML 元素，或 html 回调函数，用于 html

##### alignX

<description>**optional** _left' | 'middle' | 'right'_ </description>

DOM 元素在 X 方向的对齐方式，用于 html

##### alignY

<description>**optional** _left' | 'middle' | 'right'_ </description>

DOM 元素在 Y 方向的对齐方式，用于 html


#### theme

主题支持 `light`、 `dark` 两种模式，当然也可以自己指定， 默认使用 `light`。

```ts
theme: 'dark';
```

默认配置如下， `dark` 和 `light` 配置项没有区别，只是预设值不一样。

<div style="max-height: 400px; overflow: hiddenn; overflow-y: auto; background-color: f5f7ff">

```ts
const BLACK_COLORS = {
  100: '#000',
  95: '#0D0D0D',
  85: '#262626',
  65: '#595959',
  45: '#8C8C8C',
  25: '#BFBFBF',
  15: '#D9D9D9',
  6: '#F0F0F0',
};

const WHITE_COLORS = {
  100: '#FFFFFF',
  95: '#F2F2F2',
  85: '#D9D9D9',
  65: '#A6A6A6',
  45: '#737373',
  25: '#404040',
  15: '#262626',
  6: '#0F0F0F',
};

const QUALITATIVE_10 = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#E86452',
  '#6DC8EC',
  '#945FB9',
  '#FF9845',
  '#1E9493',
  '#FF99C3',
];

const QUALITATIVE_20 = [
  '#5B8FF9',
  '#CDDDFD',
  '#5AD8A6',
  '#CDF3E4',
  '#5D7092',
  '#CED4DE',
  '#F6BD16',
  '#FCEBB9',
  '#E86452',
  '#F8D0CB',
  '#6DC8EC',
  '#D3EEF9',
  '#945FB9',
  '#DECFEA',
  '#FF9845',
  '#FFE0C7',
  '#1E9493',
  '#BBDEDE',
  '#FF99C3',
  '#FFE0ED',
];

export const antvLight = {
  /** 图表背景色 */
  backgroundColor: 'transparent',
  /** 主题色 */
  brandColor: QUALITATIVE_10[0],
  /** 分类色板 1，在数据量小于等于 10 时使用 */
  paletteQualitative10: QUALITATIVE_10,
  /** 分类色板 2，在数据量大于 10 时使用 */
  paletteQualitative20: QUALITATIVE_20,
  /** 语义色 */
  paletteSemanticRed: '#F4664A',
  /** 语义色 */
  paletteSemanticGreen: '#30BF78',
  /** 语义色 */
  paletteSemanticYellow: '#FAAD14',
  /** 字体 */
  fontFamily: `"-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,
  "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  "Noto Color Emoji"`,

  // -------------------- 坐标轴 --------------------
  /** 坐标轴线颜色 */
  axisLineBorderColor: BLACK_COLORS[25],
  /** 坐标轴线粗细 */
  axisLineBorder: 1,
  /** 坐标轴线 lineDash 设置 */
  axisLineDash: null,

  /** 坐标轴标题颜色 */
  axisTitleTextFillColor: BLACK_COLORS[65],
  /** 坐标轴标题文本字体大小 */
  axisTitleTextFontSize: 12,
  /** 坐标轴标题文本行高 */
  axisTitleTextLineHeight: 12,
  /** 坐标轴标题文本字体粗细 */
  axisTitleTextFontWeight: 'normal',
  /** 坐标轴标题距离坐标轴文本的间距 */
  axisTitleSpacing: 12,

  /** 坐标轴刻度线颜色 */
  axisTickLineBorderColor: BLACK_COLORS[25],
  /** 坐标轴刻度线长度 */
  axisTickLineLength: 4,
  /** 坐标轴刻度线粗细 */
  axisTickLineBorder: 1,

  /** 坐标轴次刻度线颜色 */
  axisSubTickLineBorderColor: BLACK_COLORS[15],
  /** 坐标轴次刻度线长度 */
  axisSubTickLineLength: 2,
  /** 坐标轴次刻度线粗细 */
  axisSubTickLineBorder: 1,

  /** 坐标轴刻度文本颜色 */
  axisLabelFillColor: BLACK_COLORS[45],
  /** 坐标轴刻度文本字体大小 */
  axisLabelFontSize: 12,
  /** 坐标轴刻度文本行高 */
  axisLabelLineHeight: 12,
  /** 坐标轴刻度文本字体粗细 */
  axisLabelFontWeight: 'normal',
  /** 坐标轴刻度文本距离坐标轴线的间距 */
  axisLabelOffset: 8,

  /** 坐标轴网格线颜色 */
  axisGridBorderColor: BLACK_COLORS[15],
  /** 坐标轴网格线粗细 */
  axisGridBorder: 1,
  /** 坐标轴网格线虚线设置 */
  axisGridLineDash: null,

  // -------------------- 图例 --------------------
  /** 图例标题颜色 */
  legendTitleTextFillColor: BLACK_COLORS[45],
  /** 图例标题文本字体大小 */
  legendTitleTextFontSize: 12,
  /** 图例标题文本行高 */
  legendTitleTextLineHeight: 21,
  /** 图例标题文本字体粗细 */
  legendTitleTextFontWeight: 'normal',

  /** 图例 marker 颜色 */
  legendMarkerColor: QUALITATIVE_10[0],
  /** 图例 marker 距离图例文本的间距 */
  legendMarkerSpacing: 8,
  /** 图例 marker 默认半径大小 */
  legendMarkerSize: 4,
  /** 图例 'circle' marker 半径 */
  legendCircleMarkerSize: 4,
  /** 图例 'square' marker 半径 */
  legendSquareMarkerSize: 4,
  /** 图例 'line' marker 半径 */
  legendLineMarkerSize: 5,

  /** 图例项文本颜色 */
  legendItemNameFillColor: BLACK_COLORS[65],
  /** 图例项文本字体大小 */
  legendItemNameFontSize: 12,
  /** 图例项文本行高 */
  legendItemNameLineHeight: 12,
  /** 图例项粗细 */
  legendItemNameFontWeight: 'normal',
  /** 图例项之间的水平间距 */
  legendItemSpacing: 24,
  /** 图例项垂直方向的间隔 */
  legendItemMarginBottom: 12,
  /** 图例与图表绘图区域的偏移距离  */
  legendPadding: [8, 8, 8, 8],

  /** 连续图例滑块填充色 */
  sliderRailFillColor: BLACK_COLORS[15],
  /** 连续图例滑块边框粗细 */
  sliderRailBorder: 0,
  /** 连续图例滑块边框颜色 */
  sliderRailBorderColor: null,
  /** 连续图例滑块宽度 */
  sliderRailWidth: 100,
  /** 连续图例滑块高度 */
  sliderRailHeight: 12,

  /** 连续图例文本颜色 */
  sliderLabelTextFillColor: BLACK_COLORS[45],
  /** 连续图例文本字体大小 */
  sliderLabelTextFontSize: 12,
  /** 连续图例文本行高 */
  sliderLabelTextLineHeight: 12,
  /** 连续图例文本字体粗细 */
  sliderLabelTextFontWeight: 'normal',

  /** 连续图例滑块颜色 */
  sliderHandlerFillColor: BLACK_COLORS[6],
  /** 连续图例滑块宽度 */
  sliderHandlerWidth: 10,
  /** 连续图例滑块高度 */
  sliderHandlerHeight: 14,
  /** 连续图例滑块边框粗细 */
  sliderHandlerBorder: 1,
  /** 连续图例滑块边框颜色 */
  sliderHandlerBorderColor: BLACK_COLORS[25],

  // -------------------- Annotation，图形标注 --------------------
  /** arc 图形标注描边颜色 */
  annotationArcBorderColor: BLACK_COLORS[15],
  /** arc 图形标注粗细 */
  annotationArcBorder: 1,

  /** line 图形标注颜色 */
  annotationLineBorderColor: BLACK_COLORS[25],
  /** line 图形标注粗细 */
  annotationLineBorder: 1,
  /** lube 图形标注的虚线间隔 */
  annotationLineDash: null,

  /** text 图形标注文本颜色 */
  annotationTextFillColor: BLACK_COLORS[65],
  /** text 图形标注文本字体大小 */
  annotationTextFontSize: 12,
  /** text 图形标注文本行高 */
  annotationTextLineHeight: 12,
  /** text 图形标注文本字体粗细 */
  annotationTextFontWeight: 'normal',
  /** text 图形标注文本边框颜色 */
  annotationTextBorderColor: null,
  /** text 图形标注文本边框粗细 */
  annotationTextBorder: 0,

  /** region 图形标注填充颜色 */
  annotationRegionFillColor: BLACK_COLORS[100],
  /** region 图形标注填充颜色透明色 */
  annotationRegionFillOpacity: 0.06,
  /** region 图形标注描边粗细 */
  annotationRegionBorder: 0,
  /** region 图形标注描边颜色 */
  annotationRegionBorderColor: null,

  /** dataMarker 图形标注线的长度 */
  annotationDataMarkerLineLength: 16,

  // -------------------- Tooltip --------------------
  /** tooltip crosshairs 辅助线颜色 */
  tooltipCrosshairsBorderColor: BLACK_COLORS[25],
  /** tooltip crosshairs 辅助线粗细 */
  tooltipCrosshairsBorder: 1,
  /** tooltip crosshairs 辅助线虚线间隔 */
  tooltipCrosshairsLineDash: null,

  /** tooltip 内容框背景色 */
  tooltipContainerFillColor: 'rgb(255, 255, 255)',
  tooltipContainerFillOpacity: 0.95,
  /** tooltip 内容框阴影 */
  tooltipContainerShadow: '0px 0px 10px #aeaeae',
  /** tooltip 内容框圆角 */
  tooltipContainerBorderRadius: 3,

  /** tooltip 文本颜色 */
  tooltipTextFillColor: BLACK_COLORS[65],
  /** tooltip 文本字体大小 */
  tooltipTextFontSize: 12,
  /** tooltip 文本行高 */
  tooltipTextLineHeight: 12,
  /** tooltip 文本字体粗细 */
  tooltipTextFontWeight: 'bold',

  // -------------------- Geometry labels --------------------
  /** Geometry label 文本颜色 */
  labelFillColor: BLACK_COLORS[65],
  labelFillColorDark: '#2c3542',
  labelFillColorLight: '#ffffff',
  /** Geometry label 文本字体大小 */
  labelFontSize: 12,
  /** Geometry label 文本行高 */
  labelLineHeight: 12,
  /** Geometry label 文本字体粗细 */
  labelFontWeight: 'normal',
  /** Geometry label 文本描边颜色 */
  labelBorderColor: null,
  /** Geometry label 文本描边粗细 */
  labelBorder: 0,

  /** Geometry innerLabel 文本颜色 */
  innerLabelFillColor: WHITE_COLORS[100],
  /** Geometry innerLabel 文本字体大小 */
  innerLabelFontSize: 12,
  /** Geometry innerLabel 文本行高 */
  innerLabelLineHeight: 12,
  /** Geometry innerLabel 文本字体粗细 */
  innerLabelFontWeight: 'normal',
  /** Geometry innerLabel 文本描边颜色 */
  innerLabelBorderColor: null,
  /** Geometry innerLabel 文本描边粗细 */
  innerLabelBorder: 0,

  /** Geometry label　文本连接线粗细 */
  labelLineBorder: 1,
  /** Geometry label 文本连接线颜色 */
  labelLineBorderColor: BLACK_COLORS[25],

  // -------------------- Geometry 图形样式--------------------
  /** 点图填充颜色 */
  pointFillColor: QUALITATIVE_10[0],
  /** 点图填充颜色透明度 */
  pointFillOpacity: 0.95,
  /** 点图大小 */
  pointSize: 4,
  /** 点图描边粗细 */
  pointBorder: 1,
  /** 点图描边颜色 */
  pointBorderColor: WHITE_COLORS[100],
  /** 点图描边透明度 */
  pointBorderOpacity: 1,

  /** 点图 active 状态下描边颜色 */
  pointActiveBorderColor: BLACK_COLORS[100],

  /** 点图 selected 状态下描边粗细 */
  pointSelectedBorder: 2,
  /** 点图 selected 状态下描边颜色 */
  pointSelectedBorderColor: BLACK_COLORS[100],

  /** 点图 inactive 状态下填充颜色透明度 */
  pointInactiveFillOpacity: 0.3,
  /** 点图 inactive 状态下描边透明度 */
  pointInactiveBorderOpacity: 0.3,

  /** 空心点图大小 */
  hollowPointSize: 4,
  /** 空心点图描边粗细 */
  hollowPointBorder: 1,
  /** 空心点图描边颜色 */
  hollowPointBorderColor: QUALITATIVE_10[0],
  /** 空心点图描边透明度 */
  hollowPointBorderOpacity: 0.95,
  hollowPointFillColor: WHITE_COLORS[100],

  /** 空心点图 active 状态下描边粗细 */
  hollowPointActiveBorder: 1,
  /** 空心点图 active 状态下描边颜色 */
  hollowPointActiveBorderColor: BLACK_COLORS[100],
  /** 空心点图 active 状态下描边透明度 */
  hollowPointActiveBorderOpacity: 1,

  /** 空心点图 selected 状态下描边粗细 */
  hollowPointSelectedBorder: 2,
  /** 空心点图 selected 状态下描边颜色 */
  hollowPointSelectedBorderColor: BLACK_COLORS[100],
  /** 空心点图 selected 状态下描边透明度 */
  hollowPointSelectedBorderOpacity: 1,

  /** 空心点图 inactive 状态下描边透明度 */
  hollowPointInactiveBorderOpacity: 0.3,

  /** 线图粗细 */
  lineBorder: 2,
  /** 线图颜色 */
  lineBorderColor: QUALITATIVE_10[0],
  /** 线图透明度 */
  lineBorderOpacity: 1,

  /** 线图 Active 状态下粗细 */
  lineActiveBorder: 3,

  /** 线图 selected 状态下粗细 */
  lineSelectedBorder: 3,

  /** 线图 inactive 状态下透明度 */
  lineInactiveBorderOpacity: 0.3,

  /** area 填充颜色 */
  areaFillColor: QUALITATIVE_10[0],
  /** area 填充透明度 */
  areaFillOpacity: 0.25,

  /** area 在 active 状态下的填充透明度 */
  areaActiveFillColor: QUALITATIVE_10[0],
  areaActiveFillOpacity: 0.5,

  /** area 在 selected 状态下的填充透明度 */
  areaSelectedFillColor: QUALITATIVE_10[0],
  areaSelectedFillOpacity: 0.5,

  /** area inactive 状态下填充透明度 */
  areaInactiveFillOpacity: 0.3,

  /** hollowArea 颜色 */
  hollowAreaBorderColor: QUALITATIVE_10[0],
  /** hollowArea 边框粗细 */
  hollowAreaBorder: 2,
  /** hollowArea 边框透明度 */
  hollowAreaBorderOpacity: 1,

  /** hollowArea active 状态下的边框粗细 */
  hollowAreaActiveBorder: 3,
  hollowAreaActiveBorderColor: BLACK_COLORS[100],

  /** hollowArea selected 状态下的边框粗细 */
  hollowAreaSelectedBorder: 3,
  hollowAreaSelectedBorderColor: BLACK_COLORS[100],

  /** hollowArea inactive 状态下的边框透明度 */
  hollowAreaInactiveBorderOpacity: 0.3,

  /** interval 填充颜色 */
  intervalFillColor: QUALITATIVE_10[0],
  /** interval 填充透明度 */
  intervalFillOpacity: 0.95,

  /** interval active 状态下边框粗细 */
  intervalActiveBorder: 1,
  /** interval active 状态下边框颜色 */
  intervalActiveBorderColor: BLACK_COLORS[100],
  intervalActiveBorderOpacity: 1,

  /** interval selected 状态下边框粗细 */
  intervalSelectedBorder: 2,
  /** interval selected 状态下边框颜色 */
  intervalSelectedBorderColor: BLACK_COLORS[100],
  /** interval selected 状态下边框透明度 */
  intervalSelectedBorderOpacity: 1,

  /** interval inactive 状态下边框透明度 */
  intervalInactiveBorderOpacity: 0.3,
  /** interval inactive 状态下填充透明度 */
  intervalInactiveFillOpacity: 0.3,

  /** interval 边框粗细 */
  hollowIntervalBorder: 2,
  /** hollowInterval 边框颜色 */
  hollowIntervalBorderColor: QUALITATIVE_10[0],
  /** hollowInterval 边框透明度 */
  hollowIntervalBorderOpacity: 1,
  hollowIntervalFillColor: WHITE_COLORS[100],

  /** hollowInterval active 状态下边框粗细 */
  hollowIntervalActiveBorder: 2,
  /** hollowInterval active 状态下边框颜色 */
  hollowIntervalActiveBorderColor: BLACK_COLORS[100],

  /** hollowInterval selected 状态下边框粗细 */
  hollowIntervalSelectedBorder: 3,
  /** hollowInterval selected 状态下边框颜色 */
  hollowIntervalSelectedBorderColor: BLACK_COLORS[100],
  /** hollowInterval selected 状态下边框透明度 */
  hollowIntervalSelectedBorderOpacity: 1,

  /** hollowInterval inactive 状态下边框透明度 */
  hollowIntervalInactiveBorderOpacity: 0.3,
};
```

</div>


### 事件

在 Chart 和 View 上通过 on 绑定事件、off 移除绑定事件。

```ts
// 绑定事件
chart.on('eventName', callback);
// 移除事件
chart.off('eventName', callback);
```

#### eventName

组成方式：element + ':' + es。

element 指要绑定的元素类型，例如 `element`、`legend-item`、`axis-label`、`mask`、`plot`、`legend-item-name`、`reset-button` 等。

es 对应 DOM 常见事件，例如 `click`、`mousedown`、`mouseup`、`dblclick`、`mouseenter`、`mouseout`、`mouseover`、`mousemove`、`mouseleave`、`contextmenu` 等，同时支持几个移动端事件：`touchstart`、`touchmove`、`touchend`

```ts
// plot添加点击事件,整个图表区域
chart.on('plot:click', (e) => {
  console.log(e);
});

// element 添加点击事件， element 代指 label|point 等
chart.on('element:click', (e) => {
  console.log(e);
});

// 图例添加点击事件
chart.on('legend-item:click', (e) => {
  console.log(e);
});

// 图例名称添加点击事件
chart.on('legend-item-name:click', (e) => {
  console.log(e);
});

// label 添加点击事件
chart.on('label:click', (e) => {
  console.log(e);
});

// mask 添加点击事件
chart.on('mask:click', (e) => {
  console.log(e);
});

// axis-label 添加点击事件
chart.on('axis-label:click', (e) => {
  console.log(e);
});

// 给 annotation 添加点击事件
chart.on('annotation:click', (e) => {
  console.log(e);
});

// 给 slider 添加点击事件
chart.on('slider:valuechanged', (e) => {
  console.log(e);
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
