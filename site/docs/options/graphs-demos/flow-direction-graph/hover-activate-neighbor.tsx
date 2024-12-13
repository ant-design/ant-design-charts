import { FlowDirectionGraph, type FlowDirectionGraphOptions } from '@ant-design/graphs';
import React from 'react';

const blue = 'rgba(99, 149, 250, 1)';
const green = 'rgba(100, 218, 171, 1)';
const gray = 'rgba(89, 89, 89, 1)';

const data = {
  nodes: [
    { id: '-3', data: { type: 'source', title: '来源页面A' } },
    { id: '-2', data: { type: 'source', title: '来源页面B' } },
    { id: '-1', data: { type: 'source', title: '来源页面C' } },
    { id: '0', data: { type: 'activity', title: '活动页面' } },
    { id: '1', data: { type: 'destination', title: '去向页面A' } },
    { id: '2', data: { type: 'destination', title: '去向页面B' } },
    { id: '3', data: { type: 'destination', title: '去向页面C' } },
    { id: '4', data: { type: 'destination', title: '去向页面D' } },
  ],
  edges: [
    { source: '-3', target: '0', data: { type: 'in', value: 40 } },
    { source: '-2', target: '0', data: { type: 'in', value: 35 } },
    { source: '-1', target: '0', data: { type: 'in', value: 25 } },
    { source: '0', target: '1', data: { type: 'out', value: 22 } },
    { source: '0', target: '2', data: { type: 'out', value: 18 } },
    { source: '0', target: '3', data: { type: 'out', value: 32 } },
    { source: '0', target: '4', data: { type: 'out', value: 38 } },
  ],
};

const CustomNode = ({ text, isActive, color }: { text: string; isActive: boolean; color: string }) => {
  const style = {
    height: 'inherit',
    width: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: !isActive ? color.replace('1)', '0.2)') : color,
    color: isActive ? '#fff' : '#000',
  };

  return <div style={style}>{text}</div>;
};

export default () => {
  const options: FlowDirectionGraphOptions = {
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (d) => {
          const isActive = d.states?.includes('active');
          const color = d.data.type === 'source' ? blue : d.data.type === 'destination' ? green : gray;
          return <CustomNode text={d.data.title} isActive={isActive} color={color} />;
        },
        size: [130, 58],
      },
    },
    edge: {
      style: {
        stroke: (d) => (d.data.type === 'in' ? blue : green),
        strokeOpacity: 0.2,
      },
      state: {
        active: {
          halo: false,
          strokeOpacity: 1,
        },
      },
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
    behaviors: (behaviors) => [
      ...behaviors,
      {
        type: 'hover-activate-neighbors',
        onHover: (e) => {
          e.view.setCursor('pointer');
        },
        onHoverEnd: (e) => {
          e.view.setCursor('default');
        },
      },
    ],
  };

  return <FlowDirectionGraph {...options} />;
};
