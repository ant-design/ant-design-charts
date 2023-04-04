---
title: 图形动画
order: 2
---

#### 使用方式

<b>图形动画配置有两种方式：</b>

第一种，传入 `false` 设置关闭动画。

```ts
animation: false; // 关闭动画
```

第二种，传入 *AnimateOption* 对进行动画参数配置。

```ts
animation: {
  // 配置图表第一次加载时的入场动画
  appear: {
    animation: 'wave-in', // 动画效果
    duration: 5000,  // 动画执行时间
  },
}
```

#### 配置项（*AnimateOption*）

<div class='custom-api-docs'>

*ComponentAnimateOption* 为组件各个动画类型配置。

```ts
interface ComponentAnimateOption {
  appear?: ComponentAnimateCfg; // 图表第一次加载时的入场动画
  enter?: ComponentAnimateCfg; // 图表绘制完成，发生更新后，产生的新图形的进场动画
  update?: ComponentAnimateCfg; // 图表绘制完成，数据发生变更后，有状态变更的图形的更新动画
  leave?: ComponentAnimateCfg; // 图表绘制完成，数据发生变更后，被销毁图形的销毁动画
}

interface ComponentAnimateCfg {
  animation?: string; // 动画效果，内置的动画效果见下表，也可以通过自定义动画的方式实现自定义效果
  duration?: number; // 动画执行时间
  easing?: string; // 动画缓动函数
  delay?: number; // 动画延迟时间
}
```

其中 `animation` 传入动画函数名称，内置默认动画函数如下表，同时也可以通过 `registerAnimation` 自定义动画函数。

**动画效果**，前往[图表示例](/zh/examples/dynamic-plots/animation)查看效果

| animation         | 效果           | 说明                         | 不适用场景 |
| ----------------- | --- | -------------------------------- |-------- |
| 'fade-in'         | ![fade-in.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*LTRRRL8JwfQAAAAAAAAAAABkARQnAQ)                                                                                                          | 渐现动画。                                                       | |
| 'fade-out'        | ![fade-out.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*s4Y4S5JJ6WEAAAAAAAAAAABkARQnAQ)                                                                                                         | 渐隐动画。                                                       | |
| 'grow-in-x'       | ![grow-in-x.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*vhRVSLxDqU8AAAAAAAAAAABkARQnAQ)                                                                                                        | 容器沿着 x 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。   | 不适用于饼图、玫瑰图等 polar、theta 坐标系下的图表以及柱、条状图 |
| 'grow-in-y'       | ![grow-in-y.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*L6mkQa3aG64AAAAAAAAAAABkARQnAQ)                                                                                                        | 容器沿着 y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。   | 不适用于饼图、玫瑰图等 polar、theta 坐标系下的图表以及柱、条状图 |
| 'grow-in-xy'      | ![grow-in-xy.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*LfPrQouGwYIAAAAAAAAAAABkARQnAQ)                                                                                                       | 容器沿着 x,y 方向放大的矩阵动画，多用于 G.Group 容器类进行动画。 ||
| 'scale-in-x'      | ![scale-in-x.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*oiaGTLx-dNcAAAAAAAAAAABkARQnAQ)                                                                                                       | 单个图形沿着 x 方向的生长动画。                                  ||
| 'scale-in-y'      | ![scale-in-y.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*T6mLTY3o9OoAAAAAAAAAAABkARQnAQ)                                                                                                       | 单个图形沿着 y 方向的生长动画。                                  ||
| 'wave-in'         | ![wave-in-p.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*W5CdQIWw-M4AAAAAAAAAAABkARQnAQ)![wave-in-r.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*z9jjQY-lHcwAAAAAAAAAAABkARQnAQ) | 划入入场动画效果，不同坐标系下效果不同。                         ||
| 'zoom-in'         | ![zoom-in.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*wc4dQp4E6vkAAAAAAAAAAABkARQnAQ)                                                                                                          | 沿着图形中心点的放大动画。                                       ||
| 'zoom-out'        | ![zoom-out.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*PZ2gTrkV29YAAAAAAAAAAABkARQnAQ)                                                                                                         | 沿着图形中心点的缩小动画。                                       ||
| 'path-in'         | ![path-in.gif](https://gw.alipayobjects.com/mdn/rms\_f5c722/afts/img/A\*gxZ1RIIMtdIAAAAAAAAAAABkARQnAQ)                                                                                                          | path 路径入场动画。                                              ||
| 'position-update' |                                                                                                                                                                                                                | 图形位置移动动画。                                               | 限用于图表标签 label 上 |

</div>


#### 缓动效果 (*Easing Effects*)

`easing` 用来控制动画中的缓动效果，更多的缓动效果可以参见 [d3-ease](https://github.com/d3/d3-ease)。

<Playground path="dynamic-plots/animation/demo/easing-effects.ts" rid="easing-effect"></playground>
