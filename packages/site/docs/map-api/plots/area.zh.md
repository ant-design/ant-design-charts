---
title: 区域图 - Area
order: 8
---

`Area` 继承基类 [Plot](/zh/docs/map-api/plot-api)。

## 一、配置

创建地图实例：

```ts
```

### container

`string|HTMLDivElement` required

地图渲染的 DOM 容器。

### options

`AreaOptions` required

区域图的所有配置项，继承自 [Plot options](/zh/docs/map-api/plot-api#options)。

### `options.`source

`SourceOptions` required

数据配置，详见 [Source](/zh/docs/map-api/source)。

```js
const data = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: '上海市', code: 310000, c: 'red', t: 20 },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [115.1806640625, 30.637912028341123],
            [114.9609375, 29.152161283318915],
            [117.79541015625001, 27.430289738862594],
            [118.740234375, 29.420460341013133],
            [117.46582031249999, 31.50362930577303],
            [115.1806640625, 30.637912028341123],
            // ......
          ],
        ],
      },
    },
  ],
};
```

```js
{
  source: {
    data,
    parser: { type: 'geojson' }
  }
}
```


### `options.`color

`string|object|Function` optional default: `'#5FD3A6'`

元素颜色。

```js
{ color: 'red', }
```

#### `color.`field

`string` optional

元素颜色值映射关联字段。

```js
{
  color: { fied: 'c', }
}
```

#### `color.`value

`string|string[]|Function` optional

元素颜色值映射值。

```js
{
  color: {
    fied: 't',
    value: ({ t }) => {
      return t > 20 ? 'red': 'blue'
    }
  }
}
```

#### `color.`scale

`ScaleConfig` optional default: `{type: ''}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举


```js
{
  color: {
    fied: 't',
    value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
    scale: { type: 'quantile' }
  }
}
```


### `options.`style

`AreaLayerStyle` optional

区域样式，AreaLayerStyle 配置如下：

| 属性        | 描述                       | 类型               | 默认值      | 是否必填 |
| ----------- | -------------------------- | ------------------ | ----------- | -------- |
| opacity     | 填充透明度                 | `number`           | `1`         | optional |
| stroke      | 边线描边颜色               | `string`           | `'#2f54eb'` | optional |
| strokeWidth | 描边的宽度                 | `number`           | `1.5`       | optional |
| lineOpacity | 描边透明度                 | `number`           | `0.8`       | optional |
| lineType    | 描边线类型，支持实线与虚线 | `‘solid’｜'dash'`  | `‘solid’`   | optional |
| dashArray   | 虚线间隔                   | `[number, number]` |             | optional |

> dashArray: 虚线间隔，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为 `[0,0]` 的效果为没有虚线。

```js
{
  style: {
    opacity: 0.8,
    stroke: 'white',
    strokeWidth: 2,
  }
}
```


### `options.`enabledMultiSelect

`boolean` optional default: `false`

是否启用多选。

### `options.`state

`object` optional

区域交互反馈效果。

```js
{
  state: {
    active: {
      stroke: 'yellow',
      lineWidth: 1.5,
      lineOpacity: 0.8,
    },
    select: false,
  }
}
```

#### `state.`active

`boolean｜AreaLayerActiveOptions` optional default: `false`

AreaLayerActiveOptions 配置如下：

| 属性        | 描述       | 类型            | 默认值      | 是否必填 |
| ----------- | ---------- | --------------- | ----------- | -------- |
| fill        | 填充颜色   | `false｜string` | `false`     | optional |
| stroke      | 描边颜色   | `false｜string` | `'#2f54eb'` | optional |
| lineWidth   | 描边的宽度 | `number`        | `1.5`       | optional |
| lineOpacity | 描边透明度 | `number`        | `0.8`       | optional |

标签 mousehover 高亮效果，开启 mousehover 元素高亮效果：

```js
{
  state: { active: true, }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    active: {
      fill: false,
      stroke: 'yellow',
      lineWidth: 1.5,
      lineOpacity: 0.8,
    }
  }
}
```

#### `state.`select

`boolean｜AreaLayerActiveOptions` optional default: `false`

元素 mouseclick 选中高亮效果，开启 mouseclick 元素高亮效果：

```js
{
  state: { select: true, }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    select: {
      fill: 'red',
      stroke: false,
      lineWidth: 1.5,
      lineOpacity: 0.8,
    }
  }
}
```


### `options.`label

`false｜LabelOptions` optional default: `false`

地图数据标签配置，详见 [Label](/zh/docs/map-api/components/label)。

### `options.`tooltip

`false｜TooltipOptions` optional default: `false`

数据悬浮提示组件配置，详见 [Tooltip](/zh/docs/map-api/components/tooltip)。

### `options.`legend

`false｜LegendOptions` optional default: `false`

地图图例组件配置，详见 [Legend](/zh/docs/map-api/components/legend)。

### `options.`zoom

`false｜ZoomControlOptions` optional default: `false`

地图放大缩小控件，详见 [Zoom](/zh/docs/map-api/components/zoom)。

### `options.`scale

`false｜ScaleControlOptions` optional default: `false`

地图比例尺控件，详见 [Scale](/zh/docs/map-api/components/scale)。

### `options.`layerMenu

`false｜LayerMenuControlOptions` optional default: `false`

地图图层列表控件，详见 [LayerMenu](/zh/docs/map-api/components/layerMenu)。


## 二、属性

继承 [Plot 属性](/zh/docs/map-api/plot-api#二、属性)。

### areaLayer

`AreaLayer`

填充面图层实例。

### labelLayer

`undefined|TextLayer`

数据标签图层实例。

## 三、方法

继承 [Plot 方法](/zh/docs/map-api/plot-api#三、方法)。

## 四、事件

继承 [Plot 方法](/zh/docs/map-api/plot-api#四、事件)。

内置图层名称分别为：

*   areaLayer
*   labelLayer

```js
areaMap.on('areaLayer:click', (e: MouseEvent) => void);
```
