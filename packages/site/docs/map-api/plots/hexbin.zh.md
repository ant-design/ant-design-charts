---
title: 蜂窝聚合图 - Hexbin
order: 5
---

`Hexbin` 继承基类 [Plot](/zh/docs/map-api/plot-api)。

## 一、配置

创建地图实例：

```ts
```

### container

`string|HTMLDivElement` required

地图渲染的 DOM 容器。

### options

`HexbinOptions` required

蜂窝地图的所有配置项，继承自 [Plot options](/zh/docs/map-api/plot-api#options)。

### `options.`source

`SourceOptions` required

数据配置。

#### `source.`aggregation

`GridAggregation` required

数据网格聚合配置，GridAggregation 配置如下：

| 属性   | 描述     | 类型                                   | 默认值  | 是否必填 |
| ------ | -------- | -------------------------------------- | ------- | -------- |
| field  | 聚合字段 | `string`                               |         | required |
| radius | 网格半径 | `number`                               | `15000` | optional |
| method | 聚合类型 | `'count'｜'max'｜'min'｜'sum'｜'mean'` | `'sum'` | optional |

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' },
    aggregation: { field: 't', radius: 15000, type: 'sum' }
  }
}
```

其它配置详见 [Source](/zh/docs/map-api/source)。


### `options.`shape

`string` optional default: `'hexagon'`

元素形状，分别支持 2D 与 3D 蜂窝：

*   hexagon: 蜂窝
*   hexagonColumn: 蜂窝柱

```js
{ shape: 'hexagon', }
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
  color: { field: 'c', }
}
```

#### `color.`value

`string|string[]|Function` optional

元素颜色值映射值。

```js
{
  color: {
    field: 't',
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
    field: 't',
    value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
    scale: { type: 'quantile' }
  }
}
```


### `options.`size

`number|object|Function` optional

元素大小。

**shape 为 2D 时，size 无需设置；shape 为 3D 时，size 表示高度。**

```js
{
  size: {
    field: 'value',
    value: ({ value }) => value * 2
  }
}
```

#### `size.`field

`string` required

网格大小映射字段。

#### `size.`value

`number|number[]|Function` optional

网格大小值映射值。

#### `size.`scale

`ScaleConfig` optional default: `{type: ''}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举


### `options.`style

`GridHeatmapLayerStyleOptions` optional

元素样式, GridHeatmapLayerStyleOptions 配置如下：

| 属性     | 描述                    | 类型     | 默认值 | 是否必填 |
| -------- | ----------------------- | -------- | ------ | -------- |
| opacity  | 透明度                  | `number` | `1`    | optional |
| coverage | 覆盖度，范围 0 到 1     | `string` | `0.9`  | optional |
| angle    | 旋转角度，范围 0 到 360 | `number` | `0`    | optional |

```js
{
  style: {
    coverage: 0.9,
    angle: 0,
    opacity: 1.0,
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

### hexbinLayer

`HexbinLayer`

蜂窝图层实例。

### labelLayer

`undefined|HexbinLayer`

数据标签图层实例。

## 三、方法

继承 [Plot 方法](/zh/docs/map-api/plot-api#三、方法)。

## 四、事件

继承 [Plot 方法](/zh/docs/map-api/plot-api#四、事件)。

内置图层名称分别为：

*   hexbinLayer
*   labelLayer

```js
hexbin.on('hexbinLayer:click', (e: MouseEvent) => void);
```
