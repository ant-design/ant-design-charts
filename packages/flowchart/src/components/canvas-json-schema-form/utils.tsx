import { usePositionStyle } from '@antv/xflow';
import type { IPanelProps } from './interface';

export const usePanelLyaoutStyle = (config: IPanelProps, noSchema: boolean) => {
  return {
    bodyStyle: usePositionStyle({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      ...config.bodyPosition,
    }),
  };
};
