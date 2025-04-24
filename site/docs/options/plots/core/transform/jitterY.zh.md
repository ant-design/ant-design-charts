---
title: jitterY
order: 2
---

根据离散的 y 比例尺，生成 dy 通道，实现在某个区域的 y 方向散开的效果。

## 开始使用

<img alt="jitterY" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*8JbhTLgg5ucAAAAAAAAAAAAADmJ7AQ/original" width="500" />

```ts
{
  "scale": {
    "color": {
      "type": "ordinal"
    },
    "y": {
      "type": "point"
    }
  },
  "transform": [
    {
      "type": "jitterY"
    },
    {
      "type": "sortY"
    }
  ]
}
```

## 选项

| 属性               | 描述                                           | 类型                 | 默认值                 |
|-------------------|------------------------------------------------|---------------------|-----------------------|
| padding           | 每个分组之间的间距 [0 ~ 1]                        | `number`            | `0`                   |  
| random            | 随机函数，返回值为 [0, 1)                         | `() => number`      | `Math.random`         |
