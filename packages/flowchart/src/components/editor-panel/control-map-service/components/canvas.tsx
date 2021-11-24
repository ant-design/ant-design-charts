import React from 'react';
import { prefix } from './constants';

export const CanvasService: React.FC = () => {
  return (
    <div className={`${prefix}-canvas-panel`}>
      <span>未选中</span>
    </div>
  );
};
