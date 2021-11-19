---
title: 热力图 - Heatmap
order: 3
---

`Heatmap` 继承基类 [Plot](/zh/docs/map-api/plot-api)。

## 一、配置

创建地图实例：

```ts
```

### container

`string|HTMLDivElement` required

地图渲染的 DOM 容器。

### options

`HeatmapOptions` required

热力地图的所有配置项，继承自 [Plot options](/zh/docs/map-api/plot-api#options)。

### `options.`shape

`string` optional default: `'heatmap'`

元素形状，分别支持 2D 与 3D 热力：

*   heatmap
*   heatmap3D

```js
{
  shape: 'heatmap';
}
```

### `options.`size

`object|Function` optional default: `{ value: [0, 1] }`

热力大小。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  size: {
    field: 't',
    value: [0, 1]
  };
}
```

#### `size.`field

`string` required

热力图权重字段。

#### `size.`value

`number[]|Function` optional default: `[0, 1]`

热力数据映射区间。

#### `size.`scale

`ScaleConfig` optional default: `{type: 'linear'}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举


### `options.`style

`object` optional

热力全局样式。

```js
{
  style: {
    intensity: 3,
    radius: 20,
    opacity: 1,
    colorsRamp: [
      { color: 'rgba(33,102,172,0.0)', position: 0 },
      { color: 'rgb(103,169,207)', position: 0.2 },
      { color: 'rgb(209,229,240)', position: 0.4 },
      { color: 'rgb(253,219,199)', position: 0.6 },
      { color: 'rgb(239,138,98)', position: 0.8 },
      { color: 'rgb(178,24,43,1.0)', position: 1 },
    ],
  }
}
```

#### `style.`intensity

`number` optional default: `3`

全局热力权重。

#### `style.`radius

`number` optional default: `20`

热力半径，单位像素。

#### `style.`opacity

`number` optional default: `1`

透明度。

#### `style.`colorsRamp

`array` optional

热力色带。

params:

*   color: `string` 颜色
*   position: `number` 数据

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

### heatmapLayer

`PlotLayer`

热力图层实例。

### labelLayer

`undefined|PlotLayer`

数据标签图层实例。

## 三、方法

继承 [Plot 方法](/zh/docs/map-api/plot-api#三、方法)。

## 四、事件

继承 [Plot 方法](/zh/docs/map-api/plot-api#四、事件)。

内置图层名称分别为：

*   heatmapLayer
*   labelLayer

```js
heatmap.on('heatmapLayer:click', (e: MouseEvent) => void);
```
