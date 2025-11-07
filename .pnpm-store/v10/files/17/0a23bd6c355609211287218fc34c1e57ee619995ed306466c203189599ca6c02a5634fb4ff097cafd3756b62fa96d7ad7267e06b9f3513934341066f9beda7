import React from 'react';
import { createRoot } from 'react-dom/client';
import Assistant, { AssistantProps } from './index';

/**
 * 命令式初始化 Assistant 组件
 */
export function initAssistant(props: AssistantProps) {
  if (typeof document === 'undefined') {
    return;
  }

  // 创建挂载点
  const elm = document.createElement('div');
  document.body.appendChild(elm);

  const AssistantContainer = () => {
    React.useEffect(() => {
      return () => {
        if (document.body.contains(elm)) {
          document.body.removeChild(elm);
        }
      };
    }, []);

    return <Assistant {...props} />;
  };

  // 渲染 React 组件
  createRoot(elm).render(<AssistantContainer />);
}
