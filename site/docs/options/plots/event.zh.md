---
title: 事件（Event）
order: 9
---

Ant Design Charts 对外暴露了一些事件，用于获取图表的生命周期，以及交互信息。Ant Design Charts 导出了一个 `ChartEvent` 类型，用于定义事件的类型。

<img alt="click event" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*z61ZQ5DM5IUAAAAAAAAAAAAADmJ7AQ/original" width="800" />

```js
{
  onReady: ({ chart }) => {
    chart.on('interval:click', (e) => {
      console.log(e.data.data); // 展示点击的数据
    });
    chart.on('element:click', (e) => {
      console.log(e.data.data); // 展示点击的数据
    });
  }
}
```

## 获取图表实例

图表实例用于后续事件监听、绑定、图表下载等，目前提供 2 种获取方式。

```js
// 通过 onReady 配置获取
const config = {
  onReady: ( plot ) => {
    const { chart } = plot;
    chart.on('element:click', (evt) => {
      console.log(evt.target)
    })
  }
}

// 通过 ref 获取
const ref = useRef(null);
return (
  <div>
    <button onClick={() => console.log(ref.current)}>点我</button>
    <Line {...config} ref={ref} />
  </div>
);
```

## 交互事件

如果你想要获取图表的交互信息，可以通过下面的方式：

- 监听全局 `element` 事件

```js
chart.on(`element:${ChartEvent.EventType}`, (ev) => {
  console.log(ev);
});
```

- 监听指定 `element` 事件

```js
chart.on(`${markType}:${ChartEvent.EventType}`, (ev) => {
  console.log(ev);
});
chart.on(`interval:${ChartEvent.CLICK}`, (ev) => {
  console.log(ev);
});
```

- 监听 plot 区域事件

```js
chart.on('plot:click', (event) => console.log(event));
```

- 监听全局 component 事件

```js
chart.on('component:click', (event) => console.log(event));
```

- 监听全局 label 事件

```js
chart.on('label:click', (event) => console.log(event));
```

### 点击事件

| 事件名                | 说明 | 回调参数 |
| --------------------- | ---- | -------- |
| `ChartEvent.`CLICK    | 点击 | `Event`  |
| `ChartEvent.`DBLCLICK | 双击 | `Event`  |

### 指针事件

| 事件名                         | 说明                           | 回调参数 |
| ------------------------------ | ------------------------------ | -------- |
| `ChartEvent.`POINTER_TAP       |                                | `Event`  |
| `ChartEvent.`POINTER_DOWN      | 当指针按下时                   | `Event`  |
| `ChartEvent.`POINTER_UP        | 当指针松开时                   | `Event`  |
| `ChartEvent.`POINTER_OVER      | 当指针进入目标元素时           | `Event`  |
| `ChartEvent.`POINTER_OUT       | 当指针离开目标元素时           | `Event`  |
| `ChartEvent.`POINTER_MOVE      | 当指针改变坐标时               | `Event`  |
| `ChartEvent.`POINTER_ENTER     | 当指针进入目标元素或其子元素时 | `Event`  |
| `ChartEvent.`POINTER_LEAVE     | 当指针离开目标元素或其子元素时 | `Event`  |
| `ChartEvent.`POINTER_UPOUTSIDE |                                | `Event`  |

### 拖拽事件

如果希望监听拖拽事件，需要设置 draggable 和 droppable 属性

```js
{
  "style": {
    "droppable": true,
    "draggable": true
  }
}
```

| 事件名                  | 说明                         | 回调参数 |
| ----------------------- | ---------------------------- | -------- |
| `ChartEvent.`DRAG_START | 开始拖拽时                   | `Event`  |
| `ChartEvent.`DRAG       | 拖拽过程中                   | `Event`  |
| `ChartEvent.`DRAG_END   | 拖拽完成时                   | `Event`  |
| `ChartEvent.`DRAG_ENTER | 元素被拖拽进入目标元素内时   | `Event`  |
| `ChartEvent.`DRAG_LEAVE | 元素被拖拽离开目标元素时     | `Event`  |
| `ChartEvent.`DRAG_OVER  | 元素被拖拽悬停在目标元素内时 | `Event`  |
| `ChartEvent.`DROP       | 元素被放置到目标元素内时     | `Event`  |

## 其它

- 图表下载

```js
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

- 获取 base64 数据

```js
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

### 图表更新

- useState

组件基于 React 封装，只需调用 `React.useState` 进行数据更新即可达到更新效果，在部分情况下需结合 `React.memo` 避免二次渲染，可[参考](/examples/case/interactions/#memo)。

```js
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

- changeData

也可以通过获取图表实例，直接调用 `changeData` 实现。

```js
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

## 典型案例

详见交互-事件[示例](/examples#interaction-event)
