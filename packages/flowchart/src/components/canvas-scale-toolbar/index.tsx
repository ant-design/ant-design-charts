/**
 * 缩放组件
 * - 放大
 * - 缩小
 * - 缩放到适应屏幕
 * - 缩放到 1:1
 */
import type { IPosition } from '@ali/xflow-core';
import React from 'react';
import { CanvasToolbar } from '../canvas-toolbar';
import { useConfig, CANVAS_SCALE_TOOLBAR_CONFIG } from './config';

interface IProps {
  position: IPosition;
  className?: string;
  style?: React.CSSProperties;
}

const CanvasScaleToolbar: React.FC<IProps> = (props) => {
  const config = useConfig(props);
  return (
    <CanvasToolbar layout="vertical" {...props} config={config} position={props.position || { top: 12, right: 12 }} />
  );
};

export { CanvasScaleToolbar, CANVAS_SCALE_TOOLBAR_CONFIG };
