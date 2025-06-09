---
title: 方法（Methods）
order: 12.1
---

## 获取图表实例

图表实例用于后续事件监听、绑定、图表下载等，目前提供 2 种获取方式。

1. 通过 onReady 获取
```js
const config = {
  ...,
  xField: 'date',
  onReady: ( plot ) => {
    const { chart } = plot;
    chart.on('element:click', (evt) => {
      console.log(evt.target)
    })
  }
}
```

2. 通过 ref 获取
```jsx
const ref = useRef(null);
return <Line {...config} ref={ref} />;
```

## 图表下载

1. 图片下载

```tsx | pure
const DemoChangeData = () => {
  const chartRef = React.useRef(null);
  const config = {
    onReady: ({ chart }) => (chartRef.current = chart),
    ...
  };
  return (
    <div>
      <button
        onClick={() => {
          /**
          * Download Image
          * @param {string} name A name of image
          * @param {string} type A DOMString indicating the image format. The default format type is image/png.
          * @param {number} encoderOptions A Number between 0 and 1 indicating the image quality
          */
          chartRef.current.downloadImage('image', 'image/png', 1);
        }}
      >
        图表下载
      </button>
      <Line {...config} />
    </div>
  );
};
```

2. 获取 base64 数据

```tsx | pure
const DemoChangeData = () => {
  const chartRef = React.useRef(null);
  const config = {
    onReady: ({ chart }) => (chartRef.current = chart),
    ...
  };
  return (
    <div>
      <button
        onClick={() => {
          /**
          * Get data base64
          * @param {string} type A DOMString indicating the image format. The default format type is image/png.
          * @param {number} encoderOptions A Number between 0 and 1 indicating the image quality
          */
          chartRef.current.toDataURL('image', 1);
        }}
      >
        获取图表 base64 数据
      </button>
      <Line {...config} />
    </div>
  );
};
```

## 图表更新

1. useState

组件基于 React 封装，只需调用 `React.useState` 进行数据更新即可达到更新效果，在部分情况下需结合 `React.memo` 避免二次渲染，可[参考](/examples/case/interactions/#memo)。

```tsx | pure
const DemoChangeData = () => {
  const [data, setData] = React.useState(defaultData);

  const config = {
    data,
    ...
  };

  return (
    <div>
      <button
        onClick={() => {
          setData(newData);
        }}
      >
        数据更新
      </button>
      <Line {...config} />
    </div>
  );
};
```

2. changeData

也可以通过获取图表实例，直接调用 `changeData` 实现。

```tsx | pure
const DemoChangeData = () => {
  const chartRef = React.useRef(null);
  const config = {
    data,
    onReady: ({ chart }) => (chartRef.current = chart),
    ...
  };
  return (
    <div>
      <button
        onClick={() => {
          chartRef.current.changeData(newData);
        }}
      >
        数据更新
      </button>
      <Line {...config} />
    </div>
  );
};
```
