# @antv/g-plugin-rough-canvas-renderer

Use [rough.js](https://roughjs.com/)(Canvas version) to render sketchy styled shapes, inspired by [roughViz](https://github.com/jwilber/roughViz).

<img src="https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*d4iiS5_3YVIAAAAAAAAAAAAAARQnAQ" width="300">

## Getting started

Use `g-canvas` and register this plugin.

The dirty-rectangle rendering won't work in this scenario, any change on display objects will cause fullscreen re-rendering.

```js
import { Canvas } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import { Plugin as PluginRoughCanvasRenderer } from '@antv/g-plugin-rough-canvas-renderer';

// create a renderer
const renderer = new Renderer();
renderer.registerPlugin(new PluginRoughCanvasRenderer());

// create a canvas & use `g-canvas`
const canvas = new Canvas({
    container: 'container',
    width: 600,
    height: 500,
    renderer,
});
```

## Features

### Basic shapes

- [x] Group
- [x] Circle
- [x] Ellipse
- [x] Rect, `radius` won't work
- [x] Line
- [x] Polyline
- [x] Polygon
- [x] Path
- [x] Text
- [x] Image

### Opacity

rough.js don't support `opacity` now, but we can augment it with `globalAlpha`.

<img src="https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*gl6ETYiyCCQAAAAAAAAAAAAAARQnAQ" width="200">

We can use `opacity` but not `fillOpacity` or `strokeOpacity` separately:

```js
circle.style.opacity = 0.5;
```

### Shadow

<img src="https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*JKLVSrYk7BYAAAAAAAAAAAAAARQnAQ" width="300">

Shadow can also work:

```js
circle.style.shadowColor = '#000';
circle.style.shadowBlur = 0;
circle.style.shadowOffsetX = 0;
circle.style.shadowOffsetY = 0;
```

### Other rough.js options

<https://github.com/rough-stuff/rough/wiki#options>

### Plugin Options

When initializing the plugin, you can pass the following options:

```ts
export interface RoughCanvasRendererPluginOptions {
    // is element rough render
    roughRendering?: boolean | ((value: DisplayObject) => boolean);
}
```

### Text & Image

Text & Image should be the same in `canvas-renderer`.

### Picking

Maybe it's not necessary to pick target in a precise way.
