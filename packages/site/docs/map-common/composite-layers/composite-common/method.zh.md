### addTo

添加到场景。

```js
layer.addTo(scene: Scene);
```

### remove

从场景移除。

```js
layer.remove();
```

### update

更新配置且重新渲染。

```js
layer.update(options: Partial<LayerOptions>);
```

### changeData

更新数据。

```js
layer.changeData(source: SourceOptions);
```

### setIndex

设置图层层叠值。

```js
layer.setIndex();
```

### setBlend

设置图层的元素混合配置。

```js
layer.setBlend();
```

### setMinZoom

设置图层可见最小缩放层级。

```js
layer.setMinZoom();
```

### setMaxZoom

设置图层可见最大缩放层级。

```js
layer.setMaxZoom();
```

### show

显示图层。

```js
layer.show();
```

### hide

隐藏图层。

```js
layer.hide();
```

### toggleVisible

切换图层显隐状态。

```js
layer.toggleVisible();
```

### isVisible

图层是否可见。

```js
layer.isVisible() : boolean;
```

### fitBounds

图层缩放到范围。

```js
layer.fitBounds(fitBoundsOptions?: Bounds);
```

### getLegendItems

获取图例数据。

```js
layer.getLegendItems(type: string): Record<string, any>[];
```

### destroy

摧毁。

```js
layer.destroy();
```
