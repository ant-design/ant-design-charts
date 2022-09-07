### `options.`state

`object` optional

区域面交互反馈效果。

```js
{
  state: {
    active: {
      fillColor: false,
      strokeColor: '#2f54eb',
      lineWidth: 1,
    },
    select: false,
  }
}
```

#### `state.`active

`boolean｜ChoroplethLayerActiveOptions` optional default: `false`

ChoroplethLayerActiveOptions 配置如下：

| 属性        | 描述       | 类型            | 默认值      | 是否必填 |
| ----------- | ---------- | --------------- | ----------- | -------- |
| fillColor   | 填充颜色   | `false｜string` | `false`     | optional |
| strokeColor | 描边颜色   | `false｜string` | `'#2f54eb'` | optional |
| lineWidth   | 描边的宽度 | `number`        | `1`         | optional |
| lineOpacity | 描边透明度 | `number`        | `1`         | optional |

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
      fillColor: false,
      strokeColor: '#2f54eb',
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
      fillColor: false,
      strokeColor: '#2f54eb',
    }
  }
}
```
