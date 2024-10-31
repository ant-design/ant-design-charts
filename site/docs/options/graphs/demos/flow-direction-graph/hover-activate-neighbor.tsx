import { FlowDirectionGraph, type FlowDirectionGraphOptions } from '@ant-design/graphs';
import React from 'react';

const blue = '#6395FA';
const green = '#64DAAB';
const gray = '#595959';

const data = {
  "nodes": [
    { "id": "-3", "data": { type: 'source', "title": "来源页面A" } },
    { "id": "-2", "data": { type: 'source', "title": "来源页面B" } },
    { "id": "-1", "data": { type: 'source', "title": "来源页面C" } },
    { "id": "0", "data": { type: 'activity', "title": "活动页面" } },
    { "id": "1", "data": { type: 'destination', "title": "去向页面A", } },
    { "id": "2", "data": { type: 'destination', "title": "去向页面B", } },
    { "id": "3", "data": { type: 'destination', "title": "去向页面C", } },
    { "id": "4", "data": { type: 'destination', "title": "去向页面D", } },
  ],
  "edges": [
    { "source": "-3", "target": "0", data: { type: 'in', value: 40 } },
    { "source": "-2", "target": "0", data: { type: 'in', value: 35 } },
    { "source": "-1", "target": "0", data: { type: 'in', value: 25 } },
    { "source": "0", "target": "1", data: { type: 'out', value: 22 } },
    { "source": "0", "target": "2", data: { type: 'out', value: 18 } },
    { "source": "0", "target": "3", data: { type: 'out', value: 32 } },
    { "source": "0", "target": "4", data: { type: 'out', value: 38 } },
  ]
}

const hexToRgba = (hex: string, alpha: number): string => {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const CustomNode = ({ text, isActive, color }: { text: string, isActive: boolean, color: string }) => {
  const style = {
    height: 'inherit',
    width: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: hexToRgba(color, isActive ? 1 : 0.2),
    color: isActive ? '#fff' : '#000',
  };

  return <div style={style}>{text}</div>
}

export default () => {
  const options: FlowDirectionGraphOptions = {
    containerStyle: { height: '380px' },
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (d) => {
          const isActive = d.states?.includes('active');
          const color = d.data.type === 'source' ? blue : (d.data.type === 'destination' ? green : gray);
          return <CustomNode text={d.data.title} isActive={isActive} color={color} />
        },
        size: [130, 58],
      },
    },
    edge: {
      style: {
        stroke: (d) =>
          d.data.type === 'in' ? blue : green,
        strokeOpacity: 0.2,
      },
      state: {
        active: {
          halo: false,
          strokeOpacity: 1,
        }
      }
    },
    transforms: (transforms) => [
      ...transforms,
      {
        type: 'map-edge-line-width',
        key: 'map-edge-line-width',
        value: (d) => d.data.value,
        minValue: 0,
        maxValue: 100,
        minLineWidth: 1,
        maxLineWidth: 32,
      },
    ],
    behaviors: (behaviors) => [...behaviors, {
      type: 'hover-activate-neighbors',
      onHover: (e) => {
        e.view.setCursor('pointer');
      },
      onHoverEnd: (e) => {
        e.view.setCursor('default');
      }
    }],
    layout: {
      type: 'antv-dagre',
      nodesep: -3,
      ranksep: 60,
    },
    animation: false
  };

  return <FlowDirectionGraph {...options} />;
};
