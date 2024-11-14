import type { ID, NodeData, SingleLayoutOptions, Size } from '@antv/g6';
import type { FishboneOptions } from "./types";
import { measureTextSize } from '../../core/utils/measure-text';

export const DEFAULT_OPTIONS: FishboneOptions = {
  node: {
    style: {
      size: 10,
      labelText: d => d.id,
      labelPlacement: 'center',
    }
  },
  edge: {
    type: 'polyline',
  },
  layout: {
    type: 'fishbone',
    hGap: 40,
    vGap: 60,
  },
  animation: false,
};

const FONT_FAMILY = 'system-ui, sans-serif';

const getNodeSize = (id: ID, depth: number): Size => {
  if (depth === 0) return measureTextSize(id, [80, 48], { fontSize: 24, fontWeight: 600, fontFamily: FONT_FAMILY });
  if (depth === 1) return measureTextSize(id, [80, 30], { fontSize: 18, fontFamily: FONT_FAMILY });
  return [2, 30];
};

const getNodeFill = (node: NodeData): string => {
  const depth = node.depth as number;
  if (depth === 0) return '#EFF0F0';
  if (depth === 1) return (node.style?.color as string) || '#EFF0F0';
  return 'transparent';
}

export function getFishboneOptions({ type }: Pick<FishboneOptions, 'type'>): FishboneOptions {
  const options: FishboneOptions = {
    node: {
      type: 'rect',
      style: {
        fill: d => getNodeFill(d),
        labelFill: d => d.depth === 1 ? '#fff' : '#262626',
        labelFillOpacity: 1,
        labelFontSize: d => d.depth === 0 ? 24 : d.depth === 1 ? 18 : 16,
        labelFontWeight: d => d.depth === 0 ? 600 : 400,
        labelLineHeight: d => d.depth === 0 ? 26 : d.depth === 1 ? 20 : 18,
        labelText: d => d.id,
        radius: 8,
        size: d => getNodeSize(d.id, d.depth!),
      }
    },
    edge: {
      type: 'polyline',
      style: {
        lineWidth: 3,
        stroke: function (data) {
          return (this.getNodeData(data.target).style!.color as string) || '#99ADD1';
        },
      },
    },
    transforms: (prev) => [
      ...prev,
      {
        type: 'assign-color-by-branch',
        key: 'assign-color-by-branch',
      },
      {
        type: 'arrange-edge-z-index',
        key: 'arrange-edge-z-index',
      },
    ]
  };

  options.layout ||= {} as SingleLayoutOptions;
  if (type === 'decision') {
    // @ts-ignore
    options.node.style.labelPlacement = d => d.depth === 0 || d.depth === 1 ? 'center' : 'right';
    Object.assign(options.layout!, { direction: 'LR' })
  } else if (type === 'cause') {
    // @ts-ignore
    options.node.style.labelPlacement = d => d.depth === 0 || d.depth === 1 ? 'center' : 'left';
    Object.assign(options.layout!, { direction: 'RL' })
  }

  return options;
}
