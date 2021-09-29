import { usePositionStyle } from '@ali/xflow';
import { IPanelProps } from './interface';
import { PANEL_HEADER_HEIGHT, PANEL_FOOTER_HEIGHT } from './constants';

export const usePanelLyaoutStyle = (config: IPanelProps) => {
  const headerHeight =
    (config && config.headerPosition && config.headerPosition.height) || PANEL_HEADER_HEIGHT;
  const footerHeight =
    (config.footerPosition && config.footerPosition.height) || PANEL_FOOTER_HEIGHT;

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
    footerStyle: usePositionStyle({
      left: 0,
      right: 0,
      lineHeight: footerHeight,
      height: footerHeight,
      bottom: 0,
      ...config.footerPosition,
    }),
  };
};
