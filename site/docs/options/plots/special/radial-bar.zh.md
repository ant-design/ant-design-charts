---
title: RadialBar
order: 21
---

#### markBackground

<description>**optional** *BarOptions*</description>

data参数
```ts
const data = [
  { name: 'X6', star: 297 , color:'pink'},
  { name: 'G', star: 506 , color:'pink'},
  { name: 'AVA', star: 805 , color:'pink'},
  { name: 'G2Plot', star: 1478, color:'orange' },
  { name: 'L7', star: 2029, color:'orange' },
  { name: 'G6', star: 7100, color:'orange' },
  { name: 'F2', star: 7346, color:'orange' },
  { name: 'G2', star: 10178 , color:'blue'},
];
```

mark 背景配置

```ts
{
  scale: {
    y: {
      domain: [0, 200]
    }
  },
  /** 不配置任何参数，默认开启背景颜色 '#e0e4ee' */
  // markBackground:{}
  markBackground: {
    color: 'color'; // 指定color的参数，即根据color字段进行颜色映射
  },
}
```

示例：

<img src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*4IsBSoYrLL4AAAAAAAAAAAAADmJ7AQ/original" />
