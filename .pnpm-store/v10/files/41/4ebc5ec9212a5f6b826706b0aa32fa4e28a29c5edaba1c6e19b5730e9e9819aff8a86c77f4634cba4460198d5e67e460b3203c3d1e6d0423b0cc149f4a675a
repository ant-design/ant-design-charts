# @antv/g-plugin-canvas-renderer

使用 CanvasRenderingContext2D 绘制各类图形。

包含了两个插件：

1. CanvasRendererPlugin 实现了以下 hook：

   1. `beginFrame` 保存上下文，如果开启了脏矩形渲染，创建脏矩形对应的 clip rect 并擦除
   2. `renderFrame` 绘制各个图形，如果开启了脏矩形渲染，仅在该区域内重绘
   3. `endFrame` 恢复上下文

2. LoadImagePlugin 负责加载图片，实现了以下 hook：
   1. `mounted` Image 图形首次进入画布，异步加载包含的图片
   2. `attributeChanged` 如果 Image 图形的图片地址发生改变，重新加载图片
