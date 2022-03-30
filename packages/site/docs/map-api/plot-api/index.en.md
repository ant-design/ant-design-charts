---
title: Plot
order: 0
redirect_from:
  - /en/docs/map-api
---

---
title: 图表 - Plot
order: 0
redirect_from:
  - /zh/docs/map-api
---

`Plot` 是所有图表的基类，定义了地图图表的通用属性和方法。

```js
constructor(container: string | HTMLDivElement, options: PlotOptions)
```

## 一、配置

### container

`string|HTMLDivElement` required

图表渲染的 DOM 容器。

### options

`PlotOptions` required

图表的所有配置项。

### `options.`width

`number` optional default: `null`

设置图表容器宽度。

### `options.`height

`number` optional default: `null`

设置图表容器高度。

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

### `options.`source

`ISource` required

数据配置，详见 [Source](/zh/docs/map-api/source)。

### `options.`autoFit

`bool` optional default: `false`

图层完成初始化之后，地图是否自动缩放到图层的数据边界范围。

### `options.`theme

`string|object` optional default: `'light'`

图表主题，详见 [Theme](/zh/docs/map-api/theme)。

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

### DefaultOptions

`object` **static**

### container

`HTMLDivElement`

图表渲染的 DOM 容器。

### options

`PlotOptions`

图表的所有配置项。

### scene

`Scene`

图表的地图场景实例。

### type

`string`

图表所属类型。

### layerGroup

`LayerGroup`

图表的图层组。

### sceneLoaded

`boolean`

图表的地图场景是否加载完成。

### layersLoaded

`boolean`

图表的图层是否加载完成。

### zoomControl

`undefined｜Zoom`

放缩器控件实例。

### scaleControl

`undefined｜Scale`

比例尺控件实例。

### layerMenuControl

`undefined｜Layers`

图层列表控件实例。

### legendControl

`undefined｜Legend`

图例控件实例。

### tooltip

`undefined｜Tooltip`

悬浮提示组件实例。

## 三、方法

### update

更新配置且重新渲染。

```js
plot.update(options: Partial<PlotOptions>);
```

### changeData

更新数据源。

```js
plot.changeData(data: any, cfg?: SourceOptions);
```

### changeSize

修改容器大小。

```js
plot.changeSize(width: number, height: number);
```

### getScene

获取图表的地图 scene 实例。

```js
plot.getScene() : Scene;
```

### getMap

获取图表的 map 实例。

```js
plot.getMap() : MapboxInstance | AMapInstance;
```

### addLayer

添加图层。

```js
plot.addLayer(layer: PlotLayer);
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

### removeAllLayer

移除容器内所有的图层。

```js
plot.removeAllLayer();
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

### setMapStatus

设置地图交互操作状态，可用来关闭地图的一些交互操作，缩放、平移、旋转等。

```js
plot.setMapStatus(status: MapStatusOptions);
```

### setBgColor

设置容器的背景色。

```js
plot.setBgColor(color: string);
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

### addLayerMenuControl

添加地图图层列表控件。

```js
plot.addLayerMenuControl(options: LayerMenuControlOptions);
```

### removeLayerMenuControl

移除地图图层列表控件。

```js
plot.removeLayerMenuControl();
```

### addLegendControl

添加图例控件。

```js
plot.addLegendControl(options: LegendOptions);
```

### removeLegendControl

移除图例控件。

```js
plot.removeLegendControl();
```

### exportPng

导出地图，目前仅支持导出可视化层，不支持底图导出。

```js
plot.exportPng(type?: 'png' | 'jpg'): string;
```

### addToScene

添加到容器，用于 L7 Scene 与图表混合使用场景。

```js
plot.addToScene(scene: Scene);
```

### removeFromScene

从容器上移除，用于 L7 Scene 与图表混合使用场景。

```js
plot.removeFromScene();
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

### 事件类别

#### 地图事件

*   生命周期事件
    *   loaded：加载完成事件。
    *   scene-loaded：scene 加载完成事件。
    *   destroy：销毁事件。
*   resize：地图容器大小改变事件。
*   地图容器事件
    *   mapmove：地图平移时触发事件。
    *   movestart：地图平移开始时触发。
    *   moveend：地图移动结束后触发，包括平移，以及中心点变化的缩放。如地图有拖拽缓动效果，则在缓动结束后触发。
    *   zoomchange：地图缩放级别更改后触发。
    *   zoomstart：缩放开始时触发。
    *   zoomend：缩放停止时触发。
*   click：单击事件。
*   dblclick：双击事件。
*   contextmenu：右键事件。
*   滑动事件
    *   mousemove：鼠标在地图上移动时触发。
    *   mousewheel：鼠标滚轮开始缩放地图时触发。
    *   mouseover：鼠标移入地图容器内时触发。
    *   mouseout：鼠标移出地图容器时触发。
    *   mouseup：鼠标在地图上单击抬起时触发。
    *   mousedown：鼠标在地图上单击按下时触发。
*   拖动事件
    *   dragstart：开始拖拽地图时触发。
    *   dragging：拖拽地图过程中触发。
    *   dragend：停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发。

#### 图层事件

详见[图层事件](/zh/docs/map-api/layers/plot-layer#四事件)，使用方式如下：

```js
plot.on('layerName:click', (event) => {});
```

#### 组件事件

详见各组件事件，使用方式如下：

```js
plot.on('tooltip:change', (event) => {});
```

## 五、资源注册

### 注册图片资源

#### registerImage(id: string, image: IImage)

注册单个图片。

params:

*   id: `string`
*   image: `HTMLImageElement|File|string`

```js
import { registerImage } from '@ant-design/charts';

registerImage('01', 'https://l7plot.antv.vision/xxx.svg');
```

#### registerImages(images)

注册多个图片。

params:

*   images: `Array`
    *   id: `string`
    *   image: `HTMLImageElement|File|string`

```js
import { registerImages } from '@ant-design/charts';

const images = [{ id: '01', image: 'https://l7plot.antv.vision/xxx.svg' }];
registerImages(images);
```

### 注册字体资源

#### registerFontFace(fontFamily: string, fontPath: string)

注册字体。

params:

*   fontFamily: `string`
*   fontPath: `string`

```js
import { registerFontFace } from '@ant-design/charts';

registerFontFace('iconfont', 'https://l7plot.antv.vision/xxx.woff2');
```

### 注册 iconfont 映射

#### registerIconFont(name: string, fontUnicode: string)

注册单个 iconfont 映射。

params:

*   name: `string`
*   fontUnicode: `string`

```js
import { registerIconFont } from '@ant-design/charts';

registerIconFont('icon1', '&#xe64b;');
```

#### registerIconFonts(iconFonts)

注册多个 iconfont 映射。

params:

*   iconFonts
    *   name: `string`
    *   fontUnicode: `string`

```js
import { registerIconFonts } from '@ant-design/charts';

const iconFonts = [{ name: 'icon1', fontUnicode: '&#xe64b;' }];
registerIconFonts(iconFonts);
```
