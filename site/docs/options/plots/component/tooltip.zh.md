---
title: tooltip
order: 1
---

提示（Tooltip）可以提供关于数据点的额外信息，帮助用户更好地理解和解释可视化。

## 开始使用

<img alt="built-in-tooltip" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*r95yTqow_1EAAAAAAAAAAAAADmJ7AQ/original" width="600" />

```js
const config = {
  tooltip: {
    title: 'Date',
    items: [{ channel: 'y' }],
  }
}
```

## 选项

| 属性  | 描述                                  | 类型          | 默认值 |
| ----- | ------------------------------------- | ------------- | ------ |
| title | 标题，支持一段文本或 innerHTML 字符串 | `TooltipItem` | \-     |
| items | 定义每一个提示项的配置                | `TooltipItem` | \-     |

```ts
type TooltipItem =
  | string
  | false
  | {
      name?: string;
      color?: string;
      channel?: string;
      field?: string;
      value?: string;
      // 格式化 tooltip item 的值（支持 d3-format 对应的字符串）
      valueFormatter?: string | ((d: any) => string);
    };
```

## 案例

### title

```js
const config = {
  tooltip: {
    title: (d) => (d.value > 100 ? d.name : d.age), // transform
  }
}
```

### item

```js
// 单个字段
const config = {
  tooltip: {
    field: 'a'
  }
}

// 单个通道
const config = {
  tooltip: {
    channel: 'y'
  }
}

// 格式化
const config = {
  tooltip: { channel: 'y', valueFormatter: (d) => d.toFixed(1) }
}

// d3-format 支持的字符
// https://github.com/d3/d3-format
const config = {
  tooltip: { channel: 'y', valueFormatter: '~s' }
}

// 完整信息
const config = {
  tooltip: { name: 'name', color: 'red', value: 'color' }
}

// 回调
const config = {
  tooltip: (
    d, // 每一个数据项
    index, // 索引
    data, // 完整数据
    column, // 通道
  ) => ({
    value: `${column.y.value[index]} - ${column.y1.value[index]}`,
  })
}

// 多个 item
const config = {
  tooltip: { items: [{ channel: 'y' }, { channel: 'x' }] }
}
```

### title + item

```js
const config = {
  tooltip: {
    title: 'a',
    items: [{ channel: 'x' }, { channel: 'y' }],
  }
}
```
