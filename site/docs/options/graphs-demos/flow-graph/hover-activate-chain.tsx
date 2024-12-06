import { type FlowDirectionGraphOptions, FlowGraph, RCNode } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

const { TextNode } = RCNode;

export default () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: FlowDirectionGraphOptions = {
    containerStyle: { height: '400px' },
    autoFit: 'view',
    padding: [20, 0, 0, 40],
    data,
    node: {
      style: {
        component: (d) => {
          const isActive = d.states?.includes('active');
          return <TextNode color={isActive ? '#D580FF' : '#1783FF'} text={d.id} type="filled" />;
        },
      },
    },
    edge: {
      state: {
        active: {
          stroke: '#D580FF',
          halo: false
        }
      }
    },
    behaviors: (prev) => [...prev, {
      type: 'hover-activate-chain',
      onHover: (e) => {
        e.view.setCursor('pointer');
      },
      onHoverEnd: (e) => {
        e.view.setCursor('default');
      }
    }],
    layout: {
      type: 'dagre',
      rankSep: 100,
      nodeSep: 20
    },
    animation: false
  };

  return <FlowGraph {...options} />;
};
