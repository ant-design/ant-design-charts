## 简介

District Map 支持下面几种图，通过 type 类型指定

- WorldLayer 世界地图
- CountryLayer 国家地图，目前只支持中国
- ProvinceLayer 省级地图
- CityLayer 市级地图
- CountyLayer 县级地图
- DrillDownLayer 下钻地图

## 配置项 - layerConfig

#### zIndex

图层绘制顺序

#### data `Array`

属性数据用于可视化渲染

#### visible

地图是否可见

#### joinBy

数据关联，属性数据如何内部空间数据关联绑定 目前支持 NAME_CHN,adcode 字段连接对照表 `Array [string, string]` 第一个值为空间数据字段，第二个为传入数据字段名

#### showBorder `boolean`

是否显示国界线，默认显示，不建议不显示

#### simplifyTolerance

数据抽稀容差,默认不抽稀 `boolean | number` 单位为度，一度约 111km，数字越大精度越低。参考设置数据 0.01

#### depth

数据显示层级 0：国家级，1:省级，2: 市级，3：县级

#### stroke 填充描边颜色

`ProvinceLayer, CityLayer, CountyLayer`

#### strokeWidth 填充描边宽度

`ProvinceLayer, CityLayer, CountyLayer`

#### autoFit

是否自动缩放到图层范围 `boolean`

#### chinaNationalStroke

中国国界线颜色 `CountryLayer`

#### chinaNationalWidth

中国国界线宽度 `CountryLayer`

#### coastlineStroke

海岸线颜色 `CountryLayer`

#### coastlineWidth

海岸线宽度 `WorldLayer` `CountryLayer`

#### nationalWidth

国界线 `WorldLayer` `CountryLayer`

#### nationalStroke

国界线 `WorldLayer` `CountryLayer`

#### provinceStroke

省界颜色 `CountryLayer depth= 0，1，2时生效`

#### provinceStrokeWidth

省界宽度 `CountryLayer depth = 0，1，2时生效`

#### cityStroke 市级边界颜色

`CountryLayer depth =1，2时生效`

#### cityStrokeWidth 市级边界宽度

`CountryLayer depth =1，2 时生效`

#### countyStroke

县级边界颜色 `CountryLayer depth =2时生效`

#### countyStrokeWidth

县级边界宽度 `CountryLayer depth =2时生效`

#### 数据

District 提供 polygon 数据需要跟用户的属性数据，通过关系字段进行连接

- [国家名称对照表](https://gw.alipayobjects.com/os/bmw-prod/b6fcd072-72a7-4875-8e05-9652ffc977d9.csv)

- [省级行政名称*adcode*对照表.csv](https://gw.alipayobjects.com/os/bmw-prod/2aa6fb7b-3694-4df3-b601-6f6f9adac496.csv)

- [市级行政区划及编码](https://gw.alipayobjects.com/os/bmw-prod/d2aefd78-f5df-486f-9310-7449cc7f5569.csv)

- [县级行政区名称级编码](https://gw.alipayobjects.com/os/bmw-prod/fafd299e-0e1e-4fa2-a8ac-10a984c6e983.csv)

#### 方法

#### updateLayerAttribute

更新图层渲染样式参数

- layerName 'fill' | 'line' | 'label' | 'bubble' = 'fill',
- type: 'color' | 'size' | 'shape' | 'filter',
- attr: AttributeType | undefined,

```ts
const config = {
  onReady: (scene, layer) => {
    layer.updateLayerAttribute('fill', 'color', 'red');
  },
};
```

#### updateDistrict

根据 adcode 更新 行政区块

参数

- adcode 行政区划编码
- data 数据
- joinByField 绑定字段

```ts
citylayer.updateDistrict(['330100', '340100']);
```

#### updateData(data, joinBy)

更新显示数据，

参数：

- data 需要更新的数据
- joinBy 关联字段 可选，如果不设置保持和初始化一致。

#### getFillData

获取填充数据，可用于绘制独立的边界线

#### show

显示图层

#### hide

图层隐藏不显示

#### destroy

移除并销毁图层

#### 事件

行政区划图事件监听默认添加在 fillLayer 上，你点击填充的色块才能接收到事件响应。

支持的事件类型同

#### on 添加事件

参数

- type
- handle
- layerType 可选 `'fill' | 'line' | 'label' | 'bubble'` 默认值 `fill`

```ts
const config = {
  onReady: (scene, layer) => {
    layer.on('click', (e) => {
      console.log(e);
    });
  },
};
```

#### off 移除事件

参数

- type
- handle
- layerType 可选 `'fill' | 'line' | 'label' | 'bubble'` 默认值 `fill`

## 地图配置项 - sceneOption

#### logoPosition

<description> _bottomleft_ **可选** </description>

Logo 的显示位置 默认左下角

- bottomright
- topright
- bottomleft,
- topleft`

#### logoVisible logo 是否可见

<description> _bottomleft_ **可选** _default: true_ </description>

是否显示 Logo {boolean} false

#### antialias 是否开启抗锯齿

<description> _boolean_ **可选** _default: true_ </description>

是否开始前抗锯齿 `boolean` `true`

#### preserveDrawingBuffer

<description> _boolean_ **可选** _default: false_ </description>

是否保留缓冲区数据 `boolean` `false`

## Map 配置项 - mapConfig

#### zoom 初始化缩放等级

<description> _number_ </description>

地图初始显示级别 {number} Mapbox （0-24） 高德 （3-18）

#### center 地图中心

地图初始中心经纬度 {Lnglat}

#### pitch 地图倾角

地图初始俯仰角度 {number}  default 0

#### style 地图图样式

简化地图样式设置，内置了三种主题默认样式 高德，mapbox 都可以使用

- dark
- light
- normal
- blank 无底图

除了内置的样式，你也可以传入自定义的其他属性。

比如高德地图

⚠️ 高德地图样式 增加 `isPublic=true` 参数

```typescript
{
  style: 'amap://styles/2a09079c3daac9420ee53b67307a8006?isPublic=true'; // 设置方法和高德地图一致
}
```

#### minZoom 最小缩放等级

地图最小缩放等级 {number}  default 0 Mapbox 0-24） 高德 （3-18）

#### maxZoom 最大缩放等级

地图最大缩放等级 {number}  default 22 Mapbox（0-24） 高德 （3-18）

#### rotateEnable 是否允许旋转

地图是否可旋转 {Boolean} default true

## 实验参数

参数可能会废弃

#### offsetCoordinate

{ boolean } default true

高德地图适用,是否关闭偏移坐标系

## 方法

#### getZoom 获取缩放等级

获取当前缩放等级

```typescript
scene.getZoom();
```

return {float}   当前缩放等级

#### getLayers() 获取所有图层

获取所有的地图图层

```typescript
scene.getLayers();
```

#### getLayerByName(name) 根据名称获取图层

根据图层名称获取图层

参数

- name {string}

layer 初始化可配置图层 name

```typescript
scene.getLayerByName(name);
```

return Layer 图层对象

#### getCenter() 获取地图中心

获取地图中心点

```typescript
scene.getCenter();
```

return {Lnglat} :地图中心点

#### getSize() 获取地图容器大小

获取地图容器大小

```typescript
scene.getSize();
```

return { Object } 地图容器的 width,height

#### getPitch() 获取地图倾角

获取地图俯仰角

```typescript
scene.getPitch();
```

return {number} pitch

#### getContainer 获取地图容器

获取地图容器 return htmlElement

```typescript
scene.getContainer();
```

#### setMapStyle 设置地图样式

参数：`style` {string} 地图样式 具体样式格式和各底图设置方法一致

内置了三种地图样式，AMAP 和 MapBox 都适用

- light
- dark
- normal

设置地图底图样式的方法

```typescript
// 快捷名称设置

scene.setMapStyle('light');

// mapbox 主题设置
scene.setMapStyle('mapbox://styles/mapbox/streets-v11');

// AMap
scene.setMapStyle('amap://styles/2a09079c3daac9420ee53b67307a8006?isPublic=true');
```

#### setCenter() 设置地图中心点

设置地图中心点坐标

```typescript
scene.setCenter([lng, lat]);
```

参数：`center` {LngLat} 地图中心点

#### setZoomAndCenter 设置地图缩放等级和中心点

设置地图等级和中心

```typescript
scene.setZoomAndCenter(zoom, center);
```

参数：

- zoom {number}
- center {LngLat}

#### setRotation 设置地图旋转

设置地图顺时针旋转角度，旋转原点为地图容器中心点，取值范围 [0-360]

```typescript
scene.setRotation(rotation);
```

参数： `rotation` {number}

#### zoomIn 地图放大一级

地图放大一级

```typescript
scene.zoomIn();
```

#### zoomOut 地图缩小一级

地图缩小一级

```typescript
scene.ZoomOUt();
```

#### panTo 地图移动到

地图平移到指定的位置

```typescript
scene.panTo(LngLat);
```

参数：

- `center` LngLat 中心位置坐标

#### panBy 地图平移

以像素为单位沿 X 方向和 Y 方向移动地图

```typescript
scene.panBy(x, y);
```

参数：

- `x` {number} 水平方向移动像素 向右为正方向

- `y` {number} 垂直方向移动像素 向下为正方向

#### setPitch 设置地图倾角

设置地图仰俯角度

```typescript
scene.setPitch(pitch);
```

#### setMapStatus 设置地图状态

参数 :

```typescript
 IStatusOptions {
  showIndoorMap: boolean;
  resizeEnable: boolean;
  dragEnable: boolean;
  keyboardEnable: boolean;
  doubleClickZoom: boolean;
  zoomEnable: boolean;
  rotateEnable: boolean;
```

```typescript
scene.setMapStatus({ dragEnable: false });
```

- `pitch` {number}

#### fitBounds 设置地图缩放范围

地图缩放到某个范围内

参数 :

- `extent` { array} 经纬度范围 [[minlng,minlat],[maxlng,maxlat]]

```typescript
scene.fitBounds([
  [112, 32],
  [114, 35],
]);
```

#### removeLayer 移除图层

移除 layer

```typescript
scene.removeLayer(layer);
```

参数

- `layer` {Layer}

#### exportMap 导出地图图片

导出地图，目前仅支持导出可视化层，不支持底图导出

- 参数 type `png|jpg` 默认 png

```typescript
scene.exportMap('png');
```

#### destroy 场景销毁

scene 销毁方法，离开页面，已经内置

```
scene.destroy();
```

## 事件

#### on

事件监听

##### 参数

`eventName` {string} 事件名 `handler` {function } 事件回调函数

#### off

移除事件监听 `eventName` {string} 事件名 `handler` {function } 事件回调函数

#### 场景事件

##### resize

地图容器变化事件

```typescript
scene.on('resize', () => {}); // 地图容器大小改变事件
```

#### 地图事件

```typescript
scene.on('loaded', () => {}); //地图加载完成触发
scene.on('mapmove', () => {}); // 地图平移时触发事件
scene.on('movestart', () => {}); // 地图平移开始时触发
scene.on('moveend', () => {}); // 地图移动结束后触发，包括平移，以及中心点变化的缩放。如地图有拖拽缓动效果，则在缓动结束后触发
scene.on('zoomchange', () => {}); // 地图缩放级别更改后触发
scene.on('zoomstart', () => {}); // 缩放开始时触发
scene.on('zoomend', () => {}); // 缩放停止时触发
```

其他地图事件可以查看相应底图的事件文档,地图事件也可以通过 Scene.map 进行设置

[Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/#map.event) [高德](https://lbs.amap.com/api/typescript-api/reference/map)

#### 鼠标事件

```typescript
scene.on('click', (ev) => {}); // 鼠标左键点击事件
scene.on('dblclick', (ev) => {}); // 鼠标左键双击事件
scene.on('mousemove', (ev) => {}); // 鼠标在地图上移动时触发
scene.on('mousewheel', (ev) => {}); // 鼠标滚轮开始缩放地图时触发
scene.on('mouseover', (ev) => {}); // 鼠标移入地图容器内时触发
scene.on('mouseout', (ev) => {}); // 鼠标移出地图容器时触发
scene.on('mouseup', (ev) => {}); // 鼠标在地图上单击抬起时触发
scene.on('mousedown', (ev) => {}); // 鼠标在地图上单击按下时触发
scene.on('contextmenu', (ev) => {}); // 鼠标右键单击事件
scene.on('dragstart', (ev) => {}); //开始拖拽地图时触发
scene.on('dragging', (ev) => {}); // 拖拽地图过程中触发
scene.on('dragend', (ev) => {}); //停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发
```
