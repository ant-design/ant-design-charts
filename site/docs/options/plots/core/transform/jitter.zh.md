---
title: jitter
order: 2
---

根据离散的 x 和 离散的 y 比例尺，生成 dy 和 dx 通道，实现在某个区域散开的效果。

## 开始使用

<img alt="jitter" src="https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*eJQYQZQ_HZQAAAAAAAAAAAAADmJ7AQ" width="500" />

```ts
{
  "coordinate": {
    "type": "polar"
  },
  "legend": false,
  "transform": [
    {
      "type": "jitter"
    }
  ]
}
```

## 选项
| 属性               | 描述                                           | 类型                 | 默认值                 |
|-------------------|------------------------------------------------|---------------------|-----------------------|
| padding           | 分组在 x,y 方向上的间距 [0 ~ 1]                   | `number`            | `0`                   |
| paddingX          | 分组在 x 方向的间距 [0 ~ 1]                       | `number`            | `0`                   |
| paddingY          | 分组在 y 方向的间距 [0 ~ 1]                       | `number`            | `0`                   |
| random            | 随机函数，返回值为 [0, 1)                         | `() => number`      | `Math.random`         |
