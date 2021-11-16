import { usePositionStyle } from '@antv/xflow';
import { IPanelProps } from './interface';
import { PANEL_HEADER_HEIGHT, PANEL_FOOTER_HEIGHT } from './constants';

export const usePanelLyaoutStyle = (config: IPanelProps) => {
  const headerHeight = config?.headerPosition?.height || PANEL_HEADER_HEIGHT;
  const footerHeight = config?.footerPosition?.height || PANEL_FOOTER_HEIGHT;

  return {
    headerStyle: usePositionStyle({
      height: headerHeight,
      lineHeight: headerHeight,
      top: 0,
      left: 0,
      right: 0,
      ...config.headerPosition,
    }),
    bodyStyle: usePositionStyle({
      left: 0,
      right: 0,
      top: headerHeight,
      bottom: footerHeight,
      ...config.bodyPosition,
    }),
  };
};
