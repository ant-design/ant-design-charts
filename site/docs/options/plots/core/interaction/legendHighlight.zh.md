---
title: legendHighlight
order: 18
---

图例高亮元素。

## 开始使用

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*M4eVSKTMPs4AAAAAAAAAAAAADmJ7AQ/original" width="640">

```ts
{
  "legend": {
    "color": {
      "state": {
        "inactive": {
          "labelOpacity": 0.5,
          "markerOpacity": 0.5
        }
      }
    }
  },
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  },
  "interaction": {
    "legendHighlight": true
  }
}
```

## 案例

### 获得数据

```js
chart.on('legend:highlight', (e) => {
  const { nativeEvent, data } = e;
  if (!nativeEvent) return;
  console.log(data);
});

chart.on('legend:highlight', (e) => {
  const { nativeEvent, data } = e;
  if (!nativeEvent) return;
  console.log(data);
});

chart.on('legend:unhighlight', (e) => {
  const { nativeEvent } = e;
  if (!nativeEvent) return;
  console.log('unhighlight');
});

chart.on('legend:unhighlight', (e) => {
  const { nativeEvent } = e;
  if (!nativeEvent) return;
  console.log('unhighlight');
});

chart.on('legend:highlight', (e) => {
  const { nativeEvent, data } = e;
  if (!nativeEvent) return;
  console.log(data);
});

chart.on('legend:unhighlight', (e) => {
  const { nativeEvent } = e;
  if (!nativeEvent) return;
  console.log('unhighlight');
});

```

### 触发交互

```js
chart.emit('legend:highlight', {
  data: { channel: 'color', value: 'Increase' },
});

chart.emit('legend:unhighlight', {});

```
