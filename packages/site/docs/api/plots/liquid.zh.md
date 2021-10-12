---
title: 水波图
order: 6
---

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

<!-- 先插入到这里 -->

#### locale

<description>**optional** *string*</description>

指定具体语言，目前内置 'zh-CN' and 'en-US' 两个语言，你也可以使用 `G2Plot.registerLocale` 方法注册新的语言。语言包格式参考：[src/locales/en\_US.ts](https://github.com/antvis/G2Plot/blob/master/src/locales/en\_US.ts)


### 数据映射

#### percent

<description>**required** *number*</description>

指标比例数据 \[0-1]。

#### radius

<description>**optional** *number* *default:* `0.9`</description>

外环的半径 \[0-1]，相对于画布宽高的最小值来计算的。

### 图形样式

#### liquidStyle

<description>**optional** *StyleAttr | Function*</description>

水波图的配色样式。

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


#### shape

<description>**optional** *String | Function* default: `circle`</description>

水波图有五种内置形状：`circle | diamond | triangle | pin | rect`。同时也支持自定义图形，这个时候需要传入一个构建 Path 的回调函数。

示例代码如下：

```ts
/**
 * @param x  外接矩形中心点的 x 坐标
 * @param y  外接矩形中心点的 y 坐标
 * @param width  外接矩形的宽
 * @param height  外接矩形的高
 * @return  PathCommand[]
 */
function shape(x: number, y: number, width: number, height: number) {
  const h = height / 2;
  const w = width / 2;
  return [
    ['M', x - x / 3, y - h],
    ['L', x + w, y - y / 3],
    ['L', x + x / 3, y + h],
    ['L', x - w, y + y / 3],
    ['Z'],
  ];
}
```

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


#### pattern ✨

<description>**optional** *object | Function*</description>

设置图形的贴图样式。

*   配置项：由`type`和`cfg`组成，`type`目前包括三种类型：`dot`、`line`、`square`，`cfg`为可选项。
*   特点：`pattern`会覆盖当前图形设置的`style`样式(如 pieStyle、columnStyle 等)。
*   使用方式：可通过 配置项(PatternOption) 或传入 CanvasPattern 对象 的方式给图表的所有图形设置统一的贴图样式，还提供了 callback 的方式给对应的图形设置样式。此外，提供了 getCanvasPattern 方法传入 PatternOption 配置来创建 pattern，以修改 Legend 样式[Demo](/zh/examples/plugin/pattern#legend-marker-with-pattern)

pattern 的类型定义如下：

```plain
PatternAttr =
  | CanvasPattern
  | PatternOption
  | ((datum: Datum, color: string /** inherit color */) => PatternOption | CanvasPattern);
```

具体用法：

```ts
// 给图形设置统一贴图
{
   pattern: {
    type: 'dot',
    cfg: {
      size: 4,
      padding: 4,
      rotation: 0,
      fill: '#FFF',
      isStagger: true,
    },
  },
}
// 给图形分别设置贴图
{
  pattern: ({type}, color) =>{
    if(type ==='分类一') {
      return { 
        type: 'dot',
        cfg: {
          backgroundColor: color, // 继承主题颜色
        }
      }
    } else if(type ==='分类二') {
      return {
         type: 'square',
         cfg: {
           backgroundColor: 'pink', // 自定义颜色
         }
       }
    } else if(type ==='分类三') {
      return { 
        type: 'line' 
      }
    }
  },
}
```

<!--各个 pattern 的配置项-->

pattern 共有的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| backgroundColor   | *string*         | 贴图的背景色            |
| fill     | *string*         | 贴图元素的填充色      |
| fillOpacity   |   *number* | 贴图元素填充的透明度 |
| stroke   | *string*         | 贴图元素的描边色          |
| strokeOpacity       | *number*         | 贴图元素的描边透明度色    |
| lineWidth   | *number*         | 贴图元素的描边粗细        |
| opacity | *number*         | 贴图整体的透明度              |
| rotation    | *number*         | 贴图整体的旋转角度             |

dotPattern 额外的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| size          | *number*         | 圆点的大小，默认为`6`  |
| padding          | *number*         | 圆点之间的间隔，默认为`2` |
| isStagger        | *boolean*         | 圆点之间是否交错，默认为`true`    |

linePattern 额外的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| spacing          | *number*         | 两条线之间的距离，默认为`5`  |

squarePattern 额外的 cfg 配置项

| 属性名        | 类型            | 介绍                |
| ------------- | --------------- | ---------------- |
| size          | *number*         | 矩形的大小，默认为`6`  |
| padding          | *number*         | 矩形之间的间隔，默认为`1` |
| isStagger        | *boolean*         | 矩形之间是否交错，默认为`true`    |


#### outline

<description>**optional** *Outline*</description>

水波图的外框容器配置。主要包含以下内容：

| 属性名   | 类型              | 介绍                                    |
| -------- | ----------------- | --------------------------------------- |
| border   | *number*          | 外框容器的 border 宽度，默认为 2 像素   |
| distance | *number*          | 外框容器和内部波形的间距，默认为 0 像素 |
| style    | *OutlineStyleCfg* | 外框容器的 border 样式设置              |

**OutlineStyleCfg** 支持配置的样式如下：

| 属性名        | 类型     | 介绍                                                      |
| ------------- | -------- | --------------------------------------------------------- |
| stroke        | *string* | 外框容器 border 填充色，默认和水波填充色 `color` 保持一致 |
| strokeOpacity | *number* | 外框容器 border 填充透明度                                |

#### wave

<description>**optional** *Wave*</description>

水波图的波形配置。主要包含以下内容：

| 属性名 | 类型           | 介绍                          |
| ------ | -------------- | ----------------------------- |
| count  | *number*       | 水波的个数，默认为 3 个       |
| length | *number* | 水波的波长度，默认为 192 像素 |

### 图表组件

#### statistic ✨

<description>**optional** *object*</description>

指标中心文本组件。

| 配置项  | 类型                   | 描述     |
| ------- | ---------------------- | -------- |
| title   | *false | StatisticText* | 标题     |
| content | *false | StatisticText* | 主体内容 |

StatisticText

| 配置项    | 类型     | 描述                 |
| --------- | -------- | -------------------- |
| style     | *CSSStyleDeclaration* | 统计文本的样式 (css 样式)      |
| content | *string* | 主体文本内容。优先级: `customHtml` > `formatter` > `content` |
| customHtml | *CustomHtml* | 自定义主体文本的 html，优先级高于 formatter |
| formatter | *Function* | 主体文本的格式化内容 |
| rotate    | *number*   | 旋转角度             |
| offsetX   | *number*   | X 偏移值             |
| offsetY   | *number*   | Y 偏移值             |

**CustomHtml** 类型定义如下：

```ts
type CustomHtml = (container: HTMLElement, view: View, datum: object, data: object[]) => string;
```
