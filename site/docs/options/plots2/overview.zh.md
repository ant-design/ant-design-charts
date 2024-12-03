---
title: 总览
order: 0
---

## 通用属性

| 属性          | 说明                                                                                               | 类型                                                                                           | 默认值 |
| ------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------ |
| width         | 设置图表宽度                                                                                       | number                                                                                         | 400    |
| height        | 设置图表高度                                                                                       | number                                                                                         | 400    |
| depth         | 设置图表深度，仅在绘制 3D 图表时生效                                                               | number                                                                                         | 400    |
| autoFit       | 图表是否自适应容器宽高。当 autoFit 设置为 true 时，width 和 height 的设置将失效                    | number                                                                                         | true   |
| renderer      | 设置图表渲染方式，默认使用 Canvas 渲染器。切换渲染器的方式，可参考 [FAQ](#如何使用-svg-来绘制图表) | -                                                                                              | -      |
| margin        | 设置外边距，具体指组件（坐标轴、图例等）到画布边界的距离。优先级别比分别设置低                     | number                                                                                         | -      |
| marginTop     | 语法糖，设置上外边距                                                                               | number                                                                                         | -      |
| marginRight   | 语法糖，设置右外边距                                                                               | number                                                                                         | -      |
| marginBottom  | 语法糖，设置下外边距                                                                               | number                                                                                         | -      |
| marginLeft    | 语法糖，设置左外边距                                                                               | number                                                                                         | -      |
| padding       | 设置内边距，该区域用于绘制组件。优先级别比分别设置低                                               | number                                                                                         | -      |
| paddingLeft   | 语法糖，设置上呼吸区域                                                                             | number                                                                                         | -      |
| paddingRight  | 语法糖，设置上呼吸区域                                                                             | number                                                                                         | -      |
| paddingBottom | 语法糖，设置上呼吸区域                                                                             | number                                                                                         | -      |
| paddingLeft   | 语法糖，设置上呼吸区域                                                                             | number                                                                                         | -      |
| inset         | 设置呼吸区域四个方向的值，具体指组件（坐标轴、图例等）到标记的距离。优先级别比分别设置低           | number                                                                                         | -      |
| insetLeft     | 语法糖，设置上呼吸区域                                                                             | number                                                                                         | -      |
| insetRight    | 语法糖，设置右呼吸区域                                                                             | number                                                                                         | -      |
| insetBottom   | 语法糖，设置下呼吸区域                                                                             | number                                                                                         | -      |
| insetLeft     | 语法糖，设置左呼吸区域                                                                             | number                                                                                         | -      |
| title         | 设置图表标题                                                                                       | [Title](#title)                                                                                | -      |
| data          | 设置图表数据源                                                                                     | [Data](#data)                                                                                  | -      |
| clip          |                                                                                                    |                                                                                                |        |
| label         | 设置数据标签，将图形的一些数据信息，比如值，名称等映射到图形的文本上。                             | 配置项可参考 [G2 - 数据标签选项](https://g2.antv.antgroup.com/spec/label/overview#选项options) | -      |

### Title

定义图表的标题。

| 属性                        | 说明                                                                                                                               | 类型                                                         | 默认值 |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------ |
| size                        | 设置标题高度                                                                                                                       | number                                                       | 36     |
| title                       | 设置主标题文本内容                                                                                                                 | string                                                       | -      |
| subtitle                    | 设置副标题文本内容                                                                                                                 | string                                                       | -      |
| align                       | 设置标题对齐方式                                                                                                                   | `left` \| `center` \| `right`                                | `left` |
| titleAlign                  | 设置主标题的对齐方式，其优先级别高于 titleAlign                                                                                    | `left` \| `center` \| `right`                                | `left` |
| subtitleAlign               | 设置副标题的对齐方式，其优先级别高于 titleAlign                                                                                    | `left` \| `center` \| `right`                                | `left` |
| spacing                     | 设置主标题与副标题间的垂直间距                                                                                                     | number                                                       | 2      |
| `title${TextStyleProps}`    | 设置主标题文字样式，可参考 [TextStyleProps](https://g.antv.antgroup.com/api/basic/text) 配置。例如 titleFontSize 代表主标题字号    | [TextStyleProps](https://g.antv.antgroup.com/api/basic/text) | -      |
| `subtitle${TextStyleProps}` | 设置副标题文字样式，可参考 [TextStyleProps](https://g.antv.antgroup.com/api/basic/text) 配置。例如 subtitleFontSize 代表副标题字号 | [TextStyleProps](https://g.antv.antgroup.com/api/basic/text) | -      |

### Data

定义数据源，支持下列两种数据获取方式：

1. fetch 远程数据

```json
{
  "data": {
    "type": "fetch",
    "value": "https://gw.alipayobjects.com/os/basement_prod/6b4aa721-b039-49b9-99d8-540b3f87d339.json"
  }
}
```

2. 使用本地数据

```json
{
  "data": {
    "type": "inline",
    "value": [
      { "genre": "Sports", "sold": 275 },
      { "genre": "Strategy", "sold": 115 },
      { "genre": "Action", "sold": 120 },
      { "genre": "Shooter", "sold": 350 },
      { "genre": "Other", "sold": 150 }
    ]
  }
}
```

也可以使用语法糖直接指定：

```json
{
  "data": [
    { "genre": "Sports", "sold": 275 },
    { "genre": "Strategy", "sold": 115 },
    { "genre": "Action", "sold": 120 },
    { "genre": "Shooter", "sold": 350 },
    { "genre": "Other", "sold": 150 }
  ]
}
```

| 属性      | 说明                                                                                             | 类型                                                                               | 默认值   |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | -------- |
| type      | 获得数据的方式                                                                                   | `fetch` \| `inline`                                                                | `inline` |
| value     | fetch 远程数据时填入请求的网络地址，inline 内联数据时写入具体的数组数据                          | - type is `fetch`: string <br> - type is `inline`: any                             | -        |
| format    | 远程文件的数据格式类型，决定用什么方式解析。仅在 type 为 `fetch` 时有用                          | `json` \| `csv`                                                                    | `json`   |
| delimiter | 如果是 csv 文件，解析时使用的分割符。仅在 type 为 `fetch` 且 format 为 `csv`时有用               | string                                                                             | `,`      |
| autoType  | 如果是 csv 文件，解析的时候是否自动判断列数据类型。仅在 type 为 `fetch` 且 format 为 `csv`时有用 | boolean                                                                            | true     |
| transform | 对加载后的数据进行变换操作                                                                       | 配置项可参考 [G2 - Data 数据转换](https://g2.antv.antgroup.com/spec/overview#data) | []       |

### Others

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
|      |      |      |        |

## FAQ

### 如何使用 svg 来绘制图表？

支持 [G - SVG 渲染器](https://g.antv.antgroup.com/api/renderer/svg) 绘制：

```js {2,5,7}
import { Line } from '@ant-design/plots';
import { Renderer } from '@antv/g-svg';

export default () => {
  const svgRenderer = new Renderer();

  return <Line renderer={svgRenderer} {...} />
}
```
