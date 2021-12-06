---
title: PlotLayer
order: 0
---

---
title: 图层 - PlotLayer
order: 0
---

`PlotLayer` 是所有图表图层的基类，定义了图层的通用属性和方法。

```js
constructor(options: PlotLayerOptions)
```

## 一、配置

### `options.`name

`string` optional

图层名。

### `options.`zIndex

`number` optional default: `0`

图层层叠顺序，数值越大，图层层叠最高。

### `options.`visible

`boolean` optional default: `true`

图层是否可见。

### `options.`minZoom

`number` optional

图层可见最小缩放层级。

### `options.`maxZoom

`number` optional

图层可见最大缩放层级。

### `options.`autoFit

`boolean` optional default: `false`

图层加载成功后是否自动定位到图层可见范围。

### `options.`pickingBuffer

`number` optional default: `0`

图层可拾取范围。

### `options.`blend

`string` optional default: `normal`

图层的元素混合效果，支持以下效果：

*   normal：正常效果，默认效果
*   additive：叠加模式
*   subtractive：相减模式
*   max：最大值

## 三、属性

### name

`string`

当前图层名。

### type

`string`

当前图层所属类型。

### options

`PlotLayerOptions`

当前图层的所有配置项。

## 三、方法

### update

更新配置且重新渲染。

```js
plot.update(options: Partial<PlotLayerOptions>);
```

### changeData

更新数据源。

```js
plot.changeData(source: SourceOptions);
```

### setIndex

设置图层层叠值。

```js
plot.setIndex();
```

### setBlend

设置图层的元素混合配置。

```js
plot.setBlend();
```

### setMinZoom

设置图层可见最小缩放层级。

```js
plot.setMinZoom();
```

### setMaxZoom

设置图层可见最大缩放层级。

```js
plot.setMaxZoom();
```

### show

显示图层。

```js
plot.show();
```

### hide

隐藏图层。

```js
plot.hide();
```

### toggleVisible

切换图层显隐状态。

```js
plot.toggleVisible();
```

### isVisible

图层是否可见。

```js
plot.isVisible() : boolean;
```

### fitBounds

图层缩放到范围。

```js
plot.fitBounds(fitBoundsOptions?: Bounds) : boolean;
```

## 四、事件

**生命周期事件**

| 事件名     | 类型         | 描述                      |
| ---------- | ------------ | ------------------------- |
| inited     | 生命周期事件 | 图层初始化完成事件        |
| add        | 生命周期事件 | 图层添加到场景 scene 事件 |
| remove     | 生命周期事件 | 图层移除时事件            |
| dataUpdate | 生命周期事件 | 图层数据源更新事件        |

**点击事件**

| 事件名        | 类型     | 描述                     |
| ------------- | -------- | ------------------------ |
| click         | 左键事件 | 左键点击图层事件         |
| unclick       | 左键事件 | 图层外左键点击事件       |
| contextmenu   | 右键事件 | 图层要素点击右键菜单事件 |
| uncontextmenu | 右键事件 | 图层外点击右键事件       |

**鼠标事件**

| 事件名      | 类型     | 描述                       |
| ----------- | -------- | -------------------------- |
| mouseenter  | 滑动事件 | 鼠标进入图层要素事件       |
| mousemove   | 滑动事件 | 鼠标在图层上移动时触发事件 |
| unmousemove | 滑动事件 | 图层外鼠标移动事件         |
| mouseout    | 滑动事件 | 鼠标移出图层要素事件       |
| mouseup     | 滑动事件 | 鼠标在图层上单击抬起事件   |
| unmouseup   | 滑动事件 | 图层外鼠标抬起             |
| mousedown   | 滑动事件 | 鼠标在图层上单击按下事件   |
| unmousedown | 滑动事件 | 图层外单击按下事件         |
| unpick      | 鼠标事件 | 图层外的操作的所有事件     |
