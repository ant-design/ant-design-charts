---
title: 高级图表 - Advanced Plot
order: 9
---

<tag color="red" text="Unstable API">Unstable API</tag>

`L7Plot` 是高级图表类，可以组合多个图层以及图表。

```js
constructor(container: string | HTMLDivElement, options: L7PlotOptions)
```

## 一、配置

### container

`string|HTMLDivElement` required

图表渲染的 DOM 容器。

### options

`L7PlotOptions` required

配置项。

### `options.`width

`number` optional default: `null`

设置容器宽度。

### `options.`height

`number` optional default: `null`

设置容器高度。

### `options.`map

`MapConfig` required

地图容器配置项。

#### `map.`type

`string` optional default: `'amap'`

地图底图类型，支持以下两种类型：

*   amap: 高德地图
*   mapbox: Mapbox 地图

地图底图类型不同时，`map` 下面的有的配置项不相同，比如 `maxZoom`，AMap 最大缩放等级 18，Mapbox 最大缩放等级 20。除此之外还有，底图的交互状态配置，`zoomEnable`、`dragEnable`等。各配置项可详见各官网：高德地图 [配置项](https://lbs.amap.com/api/javascript-api/reference/map)；Mapbox 地图 [配置项](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)。

#### `map.`token

`string` required

地图服务 token，需服务平台申请。

#### `map.`center

`number[]` optional default: `[0, 0]`

初始中心经纬度。

#### `map.`pitch

`number` optional default: `0`

初始倾角。

#### `map.`rotation

`number` optional default: `0`

初始旋转角度。

#### `map.`zoom

`number` optional default: `0`

初始缩放层级，底图可缩放层级分布为：

*   Mapbox （0-24）
*   高德 （2-19）

#### `map.`minZoom

`number` optional default: `0`

地图最小缩放等级。

#### `map.`maxZoom

`number` optional default: `20`

地图最大缩放等级，AMap 最大缩放等级 18，Mapbox 最大缩放等级 20。

#### `map.`style

`string` optional default: `dark`

内置样式:

*   dark: 黑暗
*   light: 明亮
*   normal: 普通
*   blank: 无底图

自定义样式:

```js
{
  style: 'amap://styles/2a09079c3daac9420ee53b67307a8006?isPublic=true';
}
```


### `options.`antialias

`boolean` optional default: `true`

是否开启抗锯齿。

### `options.`preserveDrawingBuffer

`boolean` optional default: `false`

是否保留缓冲区数据。

### `options.`logo

`bool` optional default: `true`

是否显示 logo。

### `options.`layers

`LayerConfigType[]` optional default: `[]`

图层组配置，图层类型支持 L7Plot 内置的图层。

```js
{
  layers: [
    {
      name: 'myDotLayer',
      type: 'dotLayer',
      zIndex: 1,
      source: {
        data: data,
        parser: { type: 'json', x: 'lng', y: 'lat' },
      },
      color: '#ffed11',
      size: 40,
    },
    {
      name: 'myLabelLayer',
      type: 'textLayer',
      zIndex: 2,
      source: {
        data: data,
        parser: { type: 'json', x: 'lng', y: 'lat' },
      },
      field: 'name',
    },
  ],
}
```

### `options.`plots

`PlotConfigType[]` optional default: `[]`

图表组配置，图表类型支持 L7Plot 内置的图表。

```js
{
  plots: [
    {
      type: 'choropleth',
      zIndex: 1,
      source: {
        data: [],
        joinBy: {
          sourceField: 'code',
          geoField: 'adcode',
        },
      },
      viewLevel: {
        level: 'world',
        adcode: 'all',
      },
      autoFit: true,
    },
    {
      type: 'dot',
      zIndex: 2,
      source: {
        data: data,
        parser: { type: 'json', x: 'lng', y: 'lat' },
      },
      color: '#1AA9FF',
      tooltip: {
        items: ['name', 'value'],
      },
    },
  ],
}
```

### `options.`theme

`string|object` optional default: `'light'`

图表主题，详见 [Theme](/zh/docs/map-api/theme)。

<!-- ### `options.`tooltip

`false｜TooltipOptions` optional default: `false`

数据悬浮提示组件配置，详见 [Tooltip](/zh/docs/map-api/components/tooltip)。

### `options.`legend

`false｜LegendOptions` optional default: `false`

地图图例组件配置，详见 [Legend](/zh/docs/map-api/components/legend)。 -->

### `options.`zoom

`false｜ZoomControlOptions` optional default: `false`

地图放大缩小控件，详见 [Zoom](/zh/docs/map-api/components/zoom)。

### `options.`scale

`false｜ScaleControlOptions` optional default: `false`

地图比例尺控件，详见 [Scale](/zh/docs/map-api/components/scale)。

<!-- ### `options.`layerMenu

`false｜LayerMenuControlOptions` optional default: `false`

地图图层列表控件，详见 [LayerMenu](/zh/docs/map-api/components/layerMenu)。 -->

## 二、属性

### DefaultOptions

`object` **static**

### container

`HTMLDivElement`

渲染的 DOM 容器。

### options

`PlotOptions`

配置项。

### scene

`Scene`

地图场景实例。

### layerGroup

`LayerGroup`

图层组。

### sceneLoaded

`boolean`

地图场景是否加载完成。

### layersLoaded

`boolean`

图层是否加载完成。

### zoomControl

`undefined｜Zoom`

放缩器控件实例。

### scaleControl

`undefined｜Scale`

比例尺控件实例。

<!-- ### layerMenuControl

`undefined｜Layers`

图层列表控件实例。 -->

<!-- ### legendControl

`undefined｜Legend`

图例控件实例。 -->

<!-- ### tooltip

`undefined｜Tooltip`

悬浮提示组件实例。 -->

## 三、方法

<!-- ### update

更新配置且重新渲染。

```js
plot.update(options: Partial<PlotOptions>);
``` -->

### changeSize

修改容器大小。

```js
plot.changeSize(width: number, height: number);
```

### getScene

获取地图 scene 实例。

```js
plot.getScene() : Scene;
```

### getMap

获取 map 实例。

```js
plot.getMap() : MapboxInstance | AMapInstance;
```

### addLayer

添加图层。

```js
plot.addLayer(layer: LayerConfigType | IPlotLayer);
```

### getLayers

获取所有图层。

```js
plot.getLayers(): PlotLayer[];
```

### getLayerByName

根据图层名称获取图层。

```js
plot.getLayerByName(name: string): PlotLayer | undefined;
```

### removeLayer

移除图层。

```js
plot.removeLayer(layer: PlotLayer);
```

### removeLayerByName

根据图层名称移除图层。

```js
plot.removeLayerByName(name: string);
```

### removeAllLayer

移除容器内所有的图层。

```js
plot.removeAllLayer();
```

### addPlot

添加图表。

```js
plot.addPlot(plotConfig: PlotConfigType);
```

### getPlots

获取所有图表。

```js
plot.getPlots(): Plot[];
```

### getPlotByName

根据图表名称获取图表。

```js
plot.getPlotByName(name: string): Plot | undefined;
```

### removePlotByName

移除图表。

```js
plot.removePlotByName(name: string);
```

### removeAllPlot

移除容器内所有的图表。

```js
plot.removeAllPlot();
```

### zoomIn

地图放大一级。

```js
plot.zoomIn();
```

### zoomOut

地图缩小一级。

```js
plot.zoomOut();
```

### setPitch

设置地图倾角。

```js
plot.setPitch(pitch: number);
```

### fitBounds

设置地图缩放范围。

```js
plot.fitBounds(bound: Bounds);
```

### addZoomControl

添加地图缩放器控件。

```js
plot.addZoomControl(options: ZoomControlOptions);
```

### removeZoomControl

移除地图缩放器控件。

```js
plot.removeZoomControl();
```

### addScaleControl

添加地图比例尺控件。

```js
plot.addScaleControl(options: ScaleControlOptions);
```

### removeScaleControl

移除地图比例尺控件。

```js
plot.removeScaleControl();
```

<!-- ### addLayerMenuControl

添加地图图层列表控件。

```js
plot.addLayerMenuControl(options: LayerMenuControlOptions);
```

### removeLayerMenuControl

移除地图图层列表控件。

```js
plot.removeLayerMenuControl();
``` -->

<!-- ### addLegendControl

添加图例控件。

```js
plot.addLegendControl(options: LegendOptions);
```

### removeLegendControl

移除图例控件。

```js
plot.removeLegendControl();
``` -->

### exportPng

```js
plot.exportPng(type?: 'png' | 'jpg');
```

### on

绑定事件。

```js
plot.on(event: string, callback: Function);
```

### once

绑定一次事件。

```js
plot.once(event: string, callback: Function);
```

### off

解绑事件。

```js
plot.off(event: string, callback: Function);
```

### destroy

```js
plot.destroy();
```

## 四、事件

### 事件监听

#### 绑定事件

```js
plot.on(event: string, callback: Function);
```

#### 绑定一次事件

```js
plot.once(event: string, callback: Function);
```

#### 解绑事件

```js
plot.off(event: string, callback: Function);
```
