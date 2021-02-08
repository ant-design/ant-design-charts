// 附图默认配置
const DefaultAttachConfig = {
  style: {
    position: 'absolute' as 'absolute',
    width: 98,
    height: 125,
    right: 24,
    bottom: 24,
    border: '1px solid #ddd',
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
  },
};

export { DefaultAttachConfig };
