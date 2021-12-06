### `options.`source

`SourceOptions` required

数据配置，详见 [Source](/zh/docs/map-api/source)。

```js
{
  source: {
    data: [{
        path: [[58.00, 32.84],[85.7, 25.161],[101.95, 41.77],[114.96, 39.63],[117.421, 28.61]],
        c: 'red',
        t: 20,
        n: 'chengdu'
      }],
    parser: { type: 'json', coordinates: 'path', }
  }
}
```
