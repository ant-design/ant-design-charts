### 事件监听

#### 绑定事件

```js
layer.on(eventName: string, callback: (...args) => void);
```

#### 绑定一次事件

```js
layer.once(eventName: string, callback: (...args) => void);
```

#### 解绑事件

```js
layer.off(eventName: string, callback: (...args) => void);
```

### 事件类别

#### 生命周期事件

| 事件名     | 类型         | 描述                      |
| ---------- | ------------ | ------------------------- |
| inited     | 生命周期事件 | 图层初始化完成事件        |
| add        | 生命周期事件 | 图层添加到场景 scene 事件 |
| remove     | 生命周期事件 | 图层移除时事件            |
| dataUpdate | 生命周期事件 | 图层数据源更新事件        |

#### 点击事件

| 事件名        | 类型     | 描述                     |
| ------------- | -------- | ------------------------ |
| click         | 左键事件 | 左键点击图层事件         |
| unclick       | 左键事件 | 图层外左键点击事件       |
| contextmenu   | 右键事件 | 图层要素点击右键菜单事件 |
| uncontextmenu | 右键事件 | 图层外点击右键事件       |

#### 鼠标事件

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
