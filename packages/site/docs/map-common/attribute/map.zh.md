### `options.`map

`MapConfig` required

地图容器配置项。

#### `map.`type

`string` optional default: `'amap'`

地图类型，支持以下两种类型：

*   amap: 高德地图
*   mapbox: Mapbox 地图

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
