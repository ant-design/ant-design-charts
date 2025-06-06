---
title: fetch
order: 2
---

Load data from a `url` specified by the `value` option. Ant Design Charts will infer the data type from the file extension by default. The format of input data can also be specified by the `format` option.

```js
{
    type: 'point',
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
    }
}
```

```js
{
  "data": {
      "data": {
      "type": "fetch",
      "value": "https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json"
    }
  }
}
```

## 开始使用

```js | ob { autoMount: true }
import { Scatter } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
      data: {
        type: 'fetch',
        value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json',
      },
      xField: 'weight',
      yField: 'height',
      colorField: 'gender'
  };

  return <Scatter {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## 选项

| 属性      | 描述                                                  | 类型              | 默认值 |
| --------- | ----------------------------------------------------- | ----------------- | ------ |
| value     | requested url                                         | `string`          | `[]`   |
| format    | data format                                           | `'json' \| 'csv'` | `json` |
| delimiter | delimiter for parsing for csv data                    | `string`          | `,`    |
| autoType  | wether infers the types of values for csv data or not | `boolean`         | `true` |
| transform | data transform for loaded data                        | `DataTransform`   | `[]`   |
