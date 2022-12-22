---
title: 数据 - Source
order: 1
---

## 属性配置

### `source.`data

`array|object|string` required

数据源配置。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  }
}
```

### `source.`parser

`object` required

数据格式解析配置

#### `parser.`type

`string` required

支持以下数据类型：

*   <tag color="cyan" text="CSV">CSV</tag>

```js
{
  source: {
    data: `Latitude,Longitude,Name
      104.101,30.649,chengdu`,
    parser: { type: "csv", x: 'Longitude', y: 'Latitude' },
  },
}
```

*   <tag color="green" text="JSON">JSON</tag>

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  }
}
```

*   <tag color="blue" text="GEOJSON">GEOJSON</tag>

```js
{
  source: {
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [104.101, 30.649] },
          properties: { name: "chengdu" },
        },
      ],
    },
    parser: { type: 'geojson' }
  }
}
```

#### `parser.`x

`string` optional

点数据的经度映射。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  }
}
```

#### `parser.`y

`string` optional

点数据的维度映射。

#### `parser.`x1

`string` optional

线数据的第二个点经度映射。

```js
{
  source: {
    data: [{ lng1: 112.345, lat1: 30.455, lng2: 112.345, lat2: 30.455, value: 10 }],
    parser: {
      type: 'json',
      x: 'lng1',
      y: 'lat1',
      x1: 'lng1',
      y1: 'lat2'
    }
  }
}
```

#### `parser.`y1

`string` optional

线数据的第二个点维度映射。

#### `parser.`coordinates

`array` optional

映射 [GeoJSON](https://datatracker.ietf.org/doc/html/draft-butler-geojson-06) 中的 Geometry 的 coordinates 数据类型。

```js
{
  source: {
    data: [
      {
        name: "chengdu",
        coordinates: [104.101, 30.649]
      },
    ],
    parser: { type: 'json', coordinates: 'coordinates' },
  },
}
```

### `source.`transform

`array` optional

数据处理配置。

#### `transform.`grid

将数据处理为方格网布局，以下为配置参数：

*   type: `'grid'`
*   size: `number` 网格半径
*   field: `string` 数据统计字段
*   method: `'count'|'max'|'min'|'sum'|'mean'` 聚合方法

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' },
    transforms: [
      {
        type: 'grid',
        size: 15000,
        field: 't',
        method: 'sum',
      }
    ]
  }
}
```

#### `transform.`hexagon

将数据处理为六边形网格布局，以下为配置参数：

*   type: `'hexagon'`
*   size: `number` 网格半径
*   field: `string` 数据统计字段
*   method: `'count'|'max'|'min'|'sum'|'mean'` 聚合方法

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' },
    transforms: [
      {
        type: 'hexagon',
        size: 15000,
        field: 't',
        method: 'sum',
      }
    ]
  }
}
```

#### `transform.`join

将地理数据和元数据进行关联，以下为配置参数：

*   type: `'join'`
*   targetField: `string` 地理数据字段名称
*   sourceField: `number` 元数据字段名称
*   data: `array` 需要关联的数据源

```js
{
  source: {
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [104.101, 30.649] },
          properties: { name: "chengdu" },
        },
      ],
    },
    parser: { type: 'geojson' },
    transforms: [
      {
        type: 'join',
        targetField: 'name',
        sourceField: 'city',
        data: [{ city: 'chengdu', value: 13 }]
      }
    ]
  }
}
```

### `source.`cluster

`boolean` optional default: `false`

是否开启数据聚合处理。

### `source.`clusterOption

`object` optional

数据聚合处理配置。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' },
    cluster: true,
    clusterOption: {
      radius: 30,
      minZoom: 3,
      maxZoom: 22
    }
  }
}
```

#### `clusterOption.`radius

`number` optional default: `40`

聚合半径。

#### `clusterOption.`minZoom

`number` optional default: `0`

最小聚合缩放等级。

#### `clusterOption.`maxZoom

`number` optional default: `16`

最大聚合缩放等级。
