import { ILayerConfig } from '../index.d';

/**
 * 附图默认配置
 * 默认使用主图的 color
 */
// @ts-ignore
export const getAttachConfig = (layerConfig: ILayerConfig = {}) => {
  // @ts-ignore
  const { fill } = layerConfig;
  return {
    style: {
      position: 'absolute' as 'absolute',
      width: 98,
      height: 125,
      right: 24,
      bottom: 24,
      border: '1px solid #ddd',
      zIndex: 9,
      background: '#fff',
    },
    mapConfig: {
      center: [113.60540108435657, 12.833692637803168] as [number, number],
      pitch: 0,
      style: 'blank',
      zoom: 1.93,
      minZoom: 0,
      maxZoom: 3,
      interactive: false,
    },
    layerConfig: {
      data: [],
      label: {
        enable: false,
      },
      popup: {
        enable: false,
      },
      autoFit: false,
      depth: 1,
      fill: fill || {
        color: {
          field: 'NAME_CHN',
          values: ['#feedde', '#fdd0a2', '#fdae6b', '#fd8d3c', '#e6550d', '#a63603'],
        },
      },
    },
  };
};
