# ThoughtChain

ThoughtChain 是一个用于显示执行过程和状态的折叠组件，支持根据状态显示不同的图标和内容。

## 安装

确保你已经安装了必要的依赖：

```bash
npm install @petercatai/assitant
```

## 使用示例

```tsx
import React from 'react';
import { ThoughtChain } from '@petercatai/assistant';

export default () => (
  <ThoughtChain
    content={[
      {
        source: '已搜索知识库',
        knowledgeName: '测试知识库',
        status: 'success' as Status,
        timeCost: '0.6s',
        children: `recall slice 1:
          test：test`,
      },
      {
        source: '已调用必应搜索',
        pluginName: '必应搜索',
        status: 'success' as Status,
        timeCost: '4.3s：模型3.4s | 工具0.9s',
        children: `{"code":0,"data":{"_type":"SearchResponse","images":{"id":"","isFamilyFriendly":false,"readLink":"","value":null,"webSearchUrl":""},"queryContext":{"originalQuery":"杭州天气"},"rankingResponse":{"mainline":{"items":[{"answerType":"WebPages","value":{"id":"https://api.bing.microsoft.com/api/v7/#WebPages.0"}},{"answerType":"WebPages","resultIndex":1,"value":{"id":"https://api.bing.microsoft.com/api/v7/#WebPages.1"}},{"answerType":"WebPages","resultIndex":2,"value":{"id":"https://api.bing.microsoft.com/api/v7/#WebPages.2"}},{"answerType":"WebPages","resultIndex":3,"value":{"id":"https://api.bing.microsoft.com/api/v7/#WebPages.3"}},{"answerType":"WebPages","resultIndex":4,"value":{"id":"https://api.bing.microsoft.com/api/v7/#WebPages.4"}},`,
      },
    ]}
    status={'success'}
    source={'运行完毕'}
    timeCost={'4.9s（LLM 3.4s｜插件 0.9s｜知识库 0.6s）'}
  />
);
```

## API

| 属性名    | 类型              | 默认值      | 描述                                                                 |
| --------- | ----------------- | ----------- | -------------------------------------------------------------------- |
| `content` | `IExtraInfo`      | `undefined` | 额外的信息内容，通常包含需要显示的 JSON 数据或文本数据。               |
| `status`  | `Status`          | `undefined` | 当前的执行状态，影响组件的颜色和图标。                                |
| `source`  | `string`          | `undefined` | 数据来源的描述文本。                                                  |
| `timeCost`| `string`          | `undefined` | （可选）执行过程所花费的时间。                                        |
