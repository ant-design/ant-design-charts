# StarterList

StarterList 是一个用于展示机器人开场白的组件。

## 安装

确保你已经安装了必要的依赖：

```bash
npm install @petercatai/assistant
```

## 使用示例

```jsx
import React, { useEffect, useState } from 'react';
import { StarterList } from '@petercatai/assistant';

export default () => {
  return (
    <StarterList starters={['你好', '你好啊', '你好呀']}/>
  );
};
```

## API

| 属性名      | 类型                           | 默认值      | 描述                                                                 |
| ----------- | ------------------------------ | ----------- | -------------------------------------------------------------------- |
| `starters`  | `string[]`                      | `[]`        | 启动器字符串数组，用于展示启动器按钮。                                |
| `onClick`   | `(msg: string) => void`         | `undefined` | 点击启动器按钮时的回调函数，参数为被点击的启动器字符串。              |
| `style`     | `React.CSSProperties`           | `undefined` | 自定义内联样式，应用于启动器列表的容器。                              |
| `className` | `string`                        | `undefined` | 自定义类名，应用于启动器列表的容器。                                  |

