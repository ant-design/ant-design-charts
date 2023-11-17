---
title: fisheye
---

鱼眼交互，用于聚焦于局部数据。

## 开始使用

<img alt="example" src="https://gw.alipayobjects.com/zos/raptor/1669041902028/fisheye.gif" width="640">

```ts
{
  interaction: {
    fisheye: true
  }
}
```

## 选项

| 属性     | 描述                             | 类型      | 默认值 |
| -------- | -------------------------------- | --------- | ------ |
| wait     | 鱼眼更新的时间间隔，单位为毫秒   | `number`  | 30     |
| leading  | 是否在时间间隔开始的时候更新鱼眼 | `boolean` | true   |
| trailing | 是否在时间间隔结束的时候更新鱼眼 | `boolean` | false  |
