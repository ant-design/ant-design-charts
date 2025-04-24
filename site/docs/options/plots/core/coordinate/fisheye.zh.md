---
title: fisheye
order: 2
---

鱼眼坐标系变换对输入的维度应用笛卡尔鱼眼效果。

## 开始使用

<img alt="fisheye-scatter" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*K1tqQLDAZt0AAAAAAAAAAAAADmJ7AQ/original" height="600" />

```js
{
  "coordinate": {},
  "scale": {
    "size": {
      "range": [
        4,
        20
      ]
    }
  },
  "style": {
    "lineWidth": 1,
    "fillOpacity": 0.3
  }
}
```

## 选项

| 参数        | 说明                                  | 类型      | 默认值  |
| ----------- | ------------------------------------- | --------- | ------- |
| focusX      | 鱼眼变换中心点 x 方向位置             | `number`  | `0`     |
| focusY      | 鱼眼变换中心点 y 方向位置             | `number`  | `0`     |
| distortionX | 鱼眼变换 x 方向畸变大小               | `number`  | `2`     |
| distortionY | 鱼眼变换 y 方向畸变大小               | `number`  | `2`     |
| visual      | focusX 和 focusY 的值是否是视觉坐标点 | `boolean` | `false` |
