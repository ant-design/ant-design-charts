English | [简体中文](./README-zh_CN.md)

Provides advanced camera features, including full camera movements and animations.

### Usage

It's already built-in in `@antv/g`, with the lite version to use the following way：

```js
import '@antv/g-lite';
import '@antv/g-camera-api';
```

The camera can then be retrieved from the canvas to perform the camera action.

```js
const camera = canvas.getCamera();
camera.pan(100, 20);
```

### API

#### Action

The camera's three axes in the camera coordinate system are uvn, and the camera action is actually moving and rotating along these three axes.

<https://g-next.antv.vision/en/docs/api/camera#camera-action>

#### Animation

We can record the current position and viewpoint of the camera and save it as a Landmark, and then when the camera parameters change, we can switch to any of the previously saved Landmark at any time, with a smooth switching animation, similar to the camera pendulum on a real set, also called flyTo in some applications.

<https://g-next.antv.vision/en/docs/api/camera#camera-animation>
