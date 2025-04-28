---
title: 概览
order: 1
---

Ant Design Charts 中动画是可视化中很重要的一部分，可以提高可视化的表现力。动画可以声明在标记层级：

```js
({
  animate: {
    enter: {
      duration: 100,
      delay: 10,
    },
    update: {},
  },
});

```

```js
{
  "animate": {
    "enter": {
      "duration": 100,
      "delay": 10
    },
    "update": {}
  }
}
```

## 动画属性

标记是通过 `mark.animate` 指定动画属性的，一共有三个部分的动画可以指定：

- **enter** - 新增的图形
- **update** - 更新的图形
- **exit** - 删除的图形

而每部分的动画有以下的属性：

- **type** - 种类
- **duration** - 持续时间
- **delay** - 延迟时间
- **easing** - 缓动函数

```js
{
  "animate": {
    "enter": {
      "duration": 1000
    }
  }
}
```

## 动画编码

在 Ant Design Charts 中动画属性可以作为一种通道，也可以编码数据。比如下面甘特图中，每个条的出现和持续时间是和数据线性相关的。

```js
{
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
}
```

## 分组动画

Ant Design Charts 也提供了 StackEnter 标记转换来实现分组动画，该标记转换会先将图形进行分组，然后将它们的出现时间和持续时间在空间上进行堆叠，从而实现依次出现的效果。


## 关键帧动画

上面的动画都是过渡动画，不涉及到数据的更新，Ant Design Charts 也提供了制作关键帧动画的能力。使用 `chart.timingKeyframe` 创建一个时间容器，用于放置一系列视图，它会对这些视图中有关系的图形元素应用平滑的过渡效果。而对应关系通过 **key** 和 **groupKey** 两个通道指定。

```js
{
  "attr": {
    "duration": 1000,
    "direction": "alternate",
    "iterationCount": 2
  },
  "call": {
    "0": "-",
    "1": "F",
    "2": "N",
    "3": "-",
    "4": "e",
    "5": "-",
    "6": "F",
    "7": "N",
    "8": "-",
    "undefined": "finallyLoc"
  }
}
```

## 时序动画

**时序动画（timingSequence）** 还在开发中，敬请期待。

## 开始使用

```ts
{
  "animate": {}
}
```

## 选项

关于 `animate` API 的参数，有以下，主要 3 种动画场景（enter、update、exit）和 动画 5 个属性（type、duration、delay、easing、fill）的组合。

| 属性 | 描述 | 类型 | 默认值|
| -------------| ----------------------------------------------------------- | -----------------| ----------|
| enterType         | 动画类型                                                     | `Type`         |           |
| enterDuration     | 动画持续时间 (ms)                                             | `number`         |           |
| enterDelay        | 延迟执行时间 (ms)                                             | `number`         |           |
| enterEasing       | 动画的缓动函数                                                | `Easing`           |          |
| enterFill         | 动画处于非运行状态时的展示效果                                   | `Fill`           |           |
| updateType        | 动画类型                                                     | `Type`         |           |
| updateDuration    | 动画持续时间 (ms)                                             | `number`         |           |
| updateDelay       | 延迟执行时间 (ms)                                             | `number`         |           |
| updateEasing      | 动画的缓动函数                                                | `Easing`           |          |
| updateFill        | 动画处于非运行状态时的展示效果                                   | `Fill`           |           |
| exitType          | 动画类型                                                     | `Type`         |           |
| exitDuration      | 动画持续时间 (ms)                                             | `number`         |           |
| exitDelay         | 延迟执行时间 (ms)                                             | `number`         |           |
| exitEasing        | 动画的缓动函数                                                | `Easing`           |          |
| exitFill          | 动画处于非运行状态时的展示效果                                   | `Fill`           |           |

### 动画类型 Type

动画类型 `Type` 本质是设置动画的方式，会影响的视觉属性。这里具体可以看对应的文档 [Animation](/api/overview#animation)。当然也可以设置为 `null`，`undefined`，`false`，代表关闭动画。

### 缓动函数 Easing

缓动函数指定的是动画过程中，视觉属性变化的插值函数。支持以下内置缓动函数，来自 [easings](https://easings.net/)，也可以上这个网站预览动画缓动的效果。

| constant   | accelerate         | decelerate     | accelerate-decelerate | decelerate-accelerate |
| ---------- | ------------------ | -------------- | --------------------- | --------------------- |
| linear     | ease-in / in       | ease-out / out | ease-in-out / in-out  | ease-out-in / out-in  |
| ease       | in-sine            | out-sine       | in-out-sine           | out-in-sine           |
| steps      | in-quad            | out-quad       | in-out-quad           | out-in-quad           |
| step-start | in-cubic           | out-cubic      | in-out-cubic          | out-in-cubic          |
| step-end   | in-quart           | out-quart      | in-out-quart          | out-in-quart          |
|            | in-quint           | out-quint      | in-out-quint          | out-in-quint          |
|            | in-expo            | out-expo       | in-out-expo           | out-in-expo           |
|            | in-circ            | out-circ       | in-out-circ           | out-in-circ           |
|            | in-back            | out-back       | in-out-back           | out-in-back           |
|            | in-bounce          | out-bounce     | in-out-bounce         | out-in-bounce         |
|            | in-elastic         | out-elastic    | in-out-elastic        | out-in-elastic        |
|            | spring / spring-in | spring-out     | spring-in-out         | spring-out-in         |

除此之外，还可以通过 `cubic-bezier(<number>, <number>, <number>, <number>)` 自定义形如三次贝塞尔曲线的函数。以上部分内置函数也是通过它定义完成的，例如 `ease-in-sine = cubic-bezier(0.47, 0, 0.745, 0.715)`。

### 动画填充 Fill

该属性规定了图形在动画处于非运行状态（例如动画开始前，结束后）时的展示效果，可以参考 [WebAPI](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill) 规范。支持以下值：

- `auto/none` - 默认值，这意味着动画在第一帧开始前和最后一帧结束后都不会影响到图形的展示效果。例如在动画完成后图形会恢复到动画前状态，如果设置了 delay 在延迟期间也不会应用第一帧的效果。
- `forwards` - 动画完成后停住，不恢复到初始状态
- `backwards` - 动画开始前应用第一帧效果
- `both` - 为 forwards 和 backwards 的组合效果

