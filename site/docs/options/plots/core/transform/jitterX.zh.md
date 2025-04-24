---
title: jitterX
order: 2
---

根据离散的 x 比例尺，生成 dx 通道，实现在某个区域的 x 方向散开的效果。

## 开始使用

<img alt="jitterX" src="https://mdn.alipayobjects.com/mdn/huamei_qa8qxu/afts/img/A*0BaMRpu8tN8AAAAAAAAAAAAADmJ7AQ" width="500" />

```ts
{
  "scale": {
    "color": {
      "type": "ordinal"
    },
    "x": {
      "type": "point"
    }
  },
  "transform": [
    {
      "type": "jitterX"
    }
  ]
}
```

## 选项

| 属性               | 描述                                           | 类型                 | 默认值                 |
|-------------------|------------------------------------------------|---------------------|-----------------------|
| padding           | 每个分组之间的间距 [0 ~ 1]                        | `number`            | `0`                   |  
| random            | 随机函数，返回值为 [0, 1)                         | `() => number`      | `Math.random`         |
