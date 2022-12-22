### `options.`shape

`string` optional default: `'heatmap'`

支持三种热力类型，普通热力模式支持 2D 与 3D 热力：

*   heatmap
*   heatmap3D

蜂窝热力支持：

*   hexagon: 蜂窝
*   hexagonColumn: 蜂窝柱

网格热力支持：

*   2D
    *   circle: 圆形
    *   square: 正方形
    *   hexagon: 六边形
    *   triangle: 三角形
*   3D
    *   cylinder: 圆柱
    *   triangleColumn: 三角形柱
    *   hexagonColumn: 六角形柱
    *   squareColumn: 方柱

```js
{ shape: 'heatmap', }
```
