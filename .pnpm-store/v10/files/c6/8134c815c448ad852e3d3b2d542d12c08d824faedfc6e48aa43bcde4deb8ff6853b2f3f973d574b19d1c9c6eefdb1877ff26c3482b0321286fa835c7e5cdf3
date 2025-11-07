# @antv/g-plugin-svg-renderer

使用 SVG 绘制各类图形。

- `mounted` 使用 DOM API 创建 SVGElement
- `unmounted` 移除 SVGElement
- `renderFrame` 对于每一个图形，应用变换，设置 SVGElement 属性
- `attributeChanged` 更新 SVGElement 属性。如果是 z-index 改变，需要对 SVGElement 重新排序

## 使用方式

```javascript
import { Plugin } from '@antv/g-plugin-svg-renderer';

// create a renderer
const svgRenderer = new SVGRenderer();
svgRenderer.registerPlugin(new Plugin());
```
