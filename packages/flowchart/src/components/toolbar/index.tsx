import React from 'react';
import { ToolbarPanel as XFlowToolbarPanel } from '@ali/xflow';
import { useToolbarConfig } from './util';
import { FlowchartProps } from '../../interface';

export const ToolbarPanel: React.FC<FlowchartProps['toolbarPanelProps']> = (props) => {
  const {
    layout = 'horizontal',
    position = { top: 0, left: 240, right: 240, bottom: 0 },
    show = true,
    className,
    style,
  } = props;

  const toolbarConfig = useToolbarConfig();
  if (!show) {
    return null;
  }
  return (
    <XFlowToolbarPanel
      className={className}
      layout={layout}
      config={toolbarConfig}
      style={{ borderBottom: '1px solid #ccc', ...style }}
      position={position}
    />
  );
};

export default ToolbarPanel;
