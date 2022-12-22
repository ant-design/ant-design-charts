### `options.`state

`object` optional

区域交互反馈效果。

```js
{
  state: {
    active: {
      stroke: 'yellow',
      lineWidth: 1.5,
      lineOpacity: 0.8,
    },
    select: false,
  }
}
```

#### `state.`active

`boolean｜AreaLayerActiveOptions` optional default: `false`

AreaLayerActiveOptions 配置如下：

| 属性        | 描述       | 类型            | 默认值      | 是否必填 |
| ----------- | ---------- | --------------- | ----------- | -------- |
| fill        | 填充颜色   | `false｜string` | `false`     | optional |
| stroke      | 描边颜色   | `false｜string` | `'#2f54eb'` | optional |
| lineWidth   | 描边的宽度 | `number`        | `1.5`       | optional |
| lineOpacity | 描边透明度 | `number`        | `0.8`       | optional |

标签 mousehover 高亮效果，开启 mousehover 元素高亮效果：

```js
{
  state: { active: true, }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    active: {
      fill: false,
      stroke: 'yellow',
      lineWidth: 1.5,
      lineOpacity: 0.8,
    }
  }
}
```

#### `state.`select

`boolean｜AreaLayerActiveOptions` optional default: `false`

元素 mouseclick 选中高亮效果，开启 mouseclick 元素高亮效果：

```js
{
  state: { select: true, }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    select: {
      fill: 'red',
      stroke: false,
      lineWidth: 1.5,
      lineOpacity: 0.8,
    }
  }
}
```
