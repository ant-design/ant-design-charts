### `options.`animate

`boolean｜AnimateAttr` optional

水波动画，AnimateAttr 配置如下：

| 属性        | 描述                     | 类型      | 默认值  | 是否必填 |
| ----------- | ------------------------ | --------- | ------- | -------- |
| enable      | 是否开启动画             | `boolean` | `false` | optional |
| interval    | 轨迹间隔, 取值区间 0 - 1 | `number`  |         | optional |
| duration    | 动画时间，单位秒         | `number`  |         | optional |
| trailLength | 轨迹长度 取值区间 0 - 1  | `number`  |         | optional |

```js
{
  animate: {
    duration: 4,
    interval: 0.2,
    trailLength: 0.1,
  }
}
```
