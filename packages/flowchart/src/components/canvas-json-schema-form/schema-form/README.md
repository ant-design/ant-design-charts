# GUIDE 实验使用的 schema form

## schema 目标示例

```typescript
const schema = {
  tabs: [
    {
      name: 'tabName',
      groups: [
        {
          name: 'groupName',
          controls: [
            {
              type: 'String', // String | Number | Boolean
              shape: 'Input',
              disabled: false,
              required: true,
              tooltip: '',
              extra: '',
              placeholder: '',
              name: 'controlName', // 也可以是数组
              value: '',
              defaultValue: '', // 可以认为是默认值
              label: '',
              hidden: false,
              options: [{ title: '', value: '' }],
              originData: {}, // 原始数据
              dependencies: [
                { name: '', condition: '', hidden: false, disabled: false }, // name 也可以是一个数组
              ],
            },
          ],
        },
      ],
    },
  ],
};
```
