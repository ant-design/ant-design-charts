import React from 'react';
import { Tooltip as ATooltip } from 'antd';
import type { AbstractTooltipProps } from 'antd/es/tooltip';

interface Props extends AbstractTooltipProps {
  text: React.ReactNode;
}

export const Tooltip: React.FC<Props> = (props) => {
  const { text, ...otherProps } = props;

  if (!text) {
    return null;
  }

  return (
    <ATooltip placement="left" title={text} {...otherProps}>
      <div className="text-truncate">{text}</div>
    </ATooltip>
  );
};

// 渲染 FormItem 的 extra 项
export function renderFormItemExtra(text?: string) {
  if (!text) {
    return undefined;
  }
  return <Tooltip text={text} />;
}
