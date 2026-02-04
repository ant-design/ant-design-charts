# use-merge-value

Easier to write a controlled component

此 hooks 可以轻松的实现一个受控组件。使用方式类似于 useState ，支持通过第二个参数传入 { value, onChange} 来覆盖掉默认的 value 与 setValue。

## Usage

```sh
yarn add use-merge-value
```

```tsx
import React, { useState } from 'react';
import useMergeState from 'use-merge-value';

const ControlledInput: React.FC<{ value: string; onChange: (value: string) => void }> = props => {
  const [value, setValue] = useMergeState('', props);
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)}></input>{' '}
    </div>
  );
};
```

## LICENSE

MIT
