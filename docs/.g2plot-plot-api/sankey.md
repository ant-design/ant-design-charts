



### Plot Container

#### width

<description>**optional** *number* *default:* `400`</description>

Set the width of the chart.

#### height

<description>**optional** *number* *default:* `400`</description>

Set the height of the chart.

#### autoFit

<description>**optional** *boolean* *default:* `true`</description>

Whether the chart automatically adjusts to fit the container. If it is set to `true`, `width` and `height` configuration would fail.

#### padding

<description>**optional** *number\[] | number | 'auto'*</description>

Set `padding` value of the canvas. You can also use `auto`.

#### appendPadding

<description>**optional** *number\[] | number*</description>

Extra `appendPadding` value.

#### renderer

<description>**optional** *string* *default:* `canvas`</description>

Set the render way to `canvas` or `svg`.

#### pixelRatio

<description>**optional** *number* *default:* `window.devicePixelRatio`</description>

Set the pixel ratio of the chart.

#### limitInPlot

<description>**optional** *boolean*</description>

Whether clip the Geometry beyond the coordinate system。


### Data Mapping

#### data

<description>**required** *array object*</description>

设置图表数据源。数据源为对象集合，例如：`[{ source: '支付宝首页', target: '花呗', value: 20 }, ...]`。

#### sourceField

<description>**required** *string*</description>

设置桑基图的来源节点数据字段。比如针对上述数据，就是： `source`。

#### targetField

<description>**required** *string*</description>

设置桑基图的目标节点数据字段。比如针对上述数据，就是： `target`。

#### weightField

<description>**required** *string*</description>

设置节点之间关系的权重字段信息，数据越大，边越大。比如针对上述数据，就是： `value`。

### Geometry Style

#### nodeStyle

<description>**optional** *StyleAttr | Function*</description>

桑基图节点样式的配置。

#### edgeStyle

<description>**optional** *StyleAttr | Function*</description>

桑基图变样式的配置。

#### color

<description>**optional** *string | string\[] | Function*</description>

Configure the color. If there is no colorField configured, set one single color. Otherwise you can set a series of colors, or you can use callback function.

Default: The color board of the theme.

```ts
// set one single color
{
  color: '#a8ddb5'
}
// set a series of colors
{
  colorField: 'type', // or seriesField in some cases
  color: ['#d62728', '#2ca02c', '#000000'],
}
// Function
{
  colorField: 'type', // or seriesField in some cases
  color: ({ type }) => {
    if(type === 'male'){
      return 'red';
    }
    return 'yellow';
  }
}
```


#### nodeWidthRatio

<description>**optional** *number*</description>

桑基图节点的宽度配置，0 ~ 1，参考画布的宽度，默认为 `0.008`。

#### nodeWidthPadding

<description>**optional** *number*</description>

桑基图节点的之间垂直方向的间距，0 ~ 1，参考画布的高度，默认为 `0.01`。

#### nodeAlign

<description>**optional** *string*</description>

桑基图节点的布局方向，默认为 `justify`，可以选择 'left' | 'right' | 'center' | 'justify' 四种方式。

### Event

在 Chart 和 View 上通过 on 绑定事件、off 移除绑定事件。

```ts
// 绑定事件
chart.on('eventName', callback);
// 移除事件
chart.off('eventName', callback);
```

#### eventName

组成方式：element + ':' + events。

element 指要绑定的元素类型，例如 `element`、`legend-item`、`axis-label`、`mask`、`plot`、`legend-item-name`、`reset-button` 等。

events 对应 DOM 常见事件，例如 `click`、`mousedown`、`mouseup`、`dblclick`、`mouseenter`、`mouseout`、`mouseover`、`mousemove`、`mouseleave`、`contextmenu` 等，同时支持几个移动端事件：`touchstart`、`touchmove`、`touchend`

```ts
// plot添加点击事件,整个图表区域
chart.on('plot:click', (...args) => {
  console.log(...args);
});

// element 添加点击事件， element 代指 label|point 等
chart.on('element:click', (...args) => {
  console.log(...args);
});

// 图例添加点击事件
chart.on('legend-item:click', (...args) => {
  console.log(...args);
});

// 图例名称添加点击事件
chart.on('legend-item-name:click', (...args) => {
  console.log(...args);
});

// label 添加点击事件
chart.on('label:click', (...args) => {
  console.log(...args);
});

// mask 添加点击事件
chart.on('mask:click', (...args) => {
  console.log(...args);
});

// axis-label 添加点击事件
chart.on('axis-label:click', (...args) => {
  console.log(...args);
});

// 给 annotation 添加点击事件
chart.on('annotation:click', (...args) => {
  console.log(...args);
});
```


### Plot Method

#### render()

Render the chart.

#### update()

<description>**optional** </description>

Update chart configuration and overwrite it without comparing difference.

Example：

```ts
plot.update({
  ...currentConfig,
  legend: false,
});
```

<!--
#### changeData()

<description>**optional** </description>

更新图表数据。`update()`方法会导致图形区域销毁并重建，如果只进行数据更新，而不涉及其他配置项更新，推荐使用本方法。。

默认配置：`无`

使用示例：

```ts
plot.changeData(newData);
``` -->


### Plot Theme

#### 内置主题

目前默认的内置主要要两套：`default` 和 `dark`

```plain
{
  theme: 'default', // 'dark',
}
```

#### 主题属性

除了使用内置的 `default` 和 `dark` 主题之外，还可以通过设置主题属性来修改部分主题内容：

下表列出了组成主题的大配置项上的具体属性：

| 主题属性 | 类型 |	描述 |
| --- | --- | ---|
| defaultColor | string | 主题色 |
| padding |	number |	number\[] |
| fontFamily |	string |	图表字体 |
| colors10 | string\[] |	分类颜色色板，分类个数小于 10 时使用 |
| colors20 |	string\[] |	分类颜色色板，分类个数大于 10 时使用 |
| columnWidthRatio |	number |	一般柱状图宽度占比，0 - 1 范围数值
| maxColumnWidth |	number |	柱状图最大宽度，像素值 |
| minColumnWidth|	number |	柱状图最小宽度，像素值 |
| roseWidthRatio |	number |	玫瑰图占比，0 - 1 范围数值 |
| multiplePieWidthRatio	| number | 多层饼图/环图占比，0 - 1 范围数值 |
| geometries | object |	配置每个 Geometry 下每个 shape 的样式，包括默认样式以及各个状态下的样式 |
| components | object |	配置坐标轴，图例，tooltip, annotation 的主题样式 |
| labels | object |	配置 Geometry 下 label 的主题样式 |
| innerLabels	| object  | 配置 Geometry 下展示在图形内部的 labels 的主题样式 |
| pieLabels	| object | 配置饼图 labels 的主题样式 |

使用方式：

```plain
{
  theme: {
    colors10: ['#FF6B3B', '#626681', '#FFC100', '#9FB40F', '#76523B', '#DAD5B5', '#0E8E89', '#E19348', '#F383A2', '#247FEA']
  }
}
```

#### 更新主题

使用方式：

```plain
// 示例1:
plot.update({ theme: 'dark' });

// 示例2:
plot.update({ theme: { defaultColor: '#FF6B3B' } })
```

#### 自定义注册主题

另外，还可以通过 G2 提供了自定义主题机制来定义全新的主题结构，以允许用户切换、定义图表主题。

```plain
import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie: React.FC = () => {
  G2.registerTheme('new-theme', {
    defaultColor: '#FF6B3B',
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
        '#247FEA'
    ],
    colors20: [
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
        '#2BCB95',
        '#B1ABF4',
        '#1D42C2',
        '#1D9ED1',
        '#D64BC0',
        '#255634',
        '#8C8C47',
        '#8CDAE5',
        '#8E283B',
        '#791DC9'
    ]
});
const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    theme: 'new-theme'
};
  return <Pie {...config} />;
};

export default DemoPie;


```
