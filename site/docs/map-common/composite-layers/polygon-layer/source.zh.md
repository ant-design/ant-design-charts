### `options.`source

`SourceOptions` required

数据配置，详见 [Source](/zh/docs/map-api/source)。

```js
const data = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: '上海市', code: 310000, c: 'red', t: 20 },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [115.1806640625, 30.637912028341123],
            [114.9609375, 29.152161283318915],
            [117.79541015625001, 27.430289738862594],
            [118.740234375, 29.420460341013133],
            [117.46582031249999, 31.50362930577303],
            [115.1806640625, 30.637912028341123],
            // ......
          ],
        ],
      },
    },
  ],
};
```

```js
{
  source: {
    data,
    parser: { type: 'geojson' }
  }
}
```
