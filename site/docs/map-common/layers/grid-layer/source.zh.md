### `options.`source

`SourceOptions` required

数据配置。

#### `source.`aggregation

`GridAggregation` required

数据网格聚合配置，GridAggregation 配置如下：

| 属性   | 描述     | 类型                                   | 默认值  | 是否必填 |
| ------ | -------- | -------------------------------------- | ------- | -------- |
| field  | 聚合字段 | `string`                               |         | required |
| radius | 网格半径 | `number`                               | `15000` | optional |
| method | 聚合类型 | `'count'｜'max'｜'min'｜'sum'｜'mean'` | `'sum'` | optional |

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' },
    aggregation: { field: 't', radius: 15000, type: 'sum' }
  }
}
```

其它配置详见 [Source](/zh/docs/map-api/source)。
