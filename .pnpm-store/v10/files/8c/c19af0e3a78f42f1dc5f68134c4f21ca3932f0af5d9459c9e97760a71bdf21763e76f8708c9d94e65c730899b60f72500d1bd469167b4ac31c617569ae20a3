---
atomId: Assistant
---

# Assistant

Assistant 是一个带有浮动气泡和可拖动的聊天助手组件。

## 安装

确保你已经安装了必要的依赖：

```bash
npm install @petercatai/assistant
```

## 使用示例

```jsx
import React, { useEffect, useState } from 'react';
import { Assistant } from '@petercatai/assistant';

export default () => {
  const [token, setToken] = useState('');

  return (
    <div>
      <a onClick={() => setToken('1234')}>点我变token{token}</a>
      <Assistant
        editBotId ={token}
        apiUrl='/api/chat/stream_qa'
        token='0553365a-edb1-435c-b69c-4c645290b86e'
        clearMessage={true}
      />
    </div>
  );
};
```
## API

| 属性名                 | 类型                      | 默认值      | 描述                                                                                 |
| ---------------------- | ------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| `showBubble`           | `boolean`                 | `true`      | 是否显示浮动气泡。                                                                   |
| `isVisible`            | `boolean`                 | `false`     | 控制聊天窗口是否可见。                                                               |
| `onClose`              | `() => void`              | `undefined` | 聊天窗口关闭时的回调函数。                                                           |
| `drawerWidth`          | `number`                  | `500`       | 控制聊天窗口的宽度。                                                                 |
| `helloMessage`         | `string`                  | `undefined` | 设定聊天窗口打开时的欢迎消息。                                                       |
| `assistantMeta`        | `MetaData`                | `{}`        | 设置聊天助手的元数据信息，包括头像、标题和背景颜色。                                  |
| `starters`             | `string[]`                | `[]`        | 聊天启动器消息的数组，用户可以选择这些消息来快速开始对话。                           |
| `style`                | `React.CSSProperties`     | `{}`        | 自定义聊天组件的内联样式。                                                           |
| `hideLogo`             | `boolean`                 | `false`     | 是否隐藏聊天窗口顶部的Logo。                                                         |
| `disabled`             | `boolean`                 | `false`     | 是否禁用聊天输入区域，禁用后用户无法输入消息。                                        |
| `disabledPlaceholder`  | `string`                  | `undefined` | 当聊天输入区域被禁用时显示的占位符文本。                                             |
| `getToolsResult`       | `(response: any) => void` | `undefined` | 用于接收工具处理结果的回调函数。                                                     |
| `bottom` | `number` | `120` | 聊天助手距离底部的距离，单位为像素。 |
