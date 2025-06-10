import { FlowDirectionGraph, type FlowDirectionGraphOptions } from '@ant-design/graphs';
import insertCss from 'insert-css';
import React from 'react';

const data = {
  nodes: [
    {
      id: 'node-0',
      name: '页面-0',
      layerName: '层级0',
      measure: {
        name: 'DAU',
        value: 17500000000,
        formattedValue: 175,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 1000000,
          formattedValue: 100,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-1',
      name: '页面1',
      layerName: '层级0',
      measure: {
        name: 'DAU',
        value: 5500000000,
        formattedValue: 55,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 500000,
          formattedValue: 50,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-2',
      name: '页面2',
      layerName: '层级0',
      measure: {
        name: 'DAU',
        value: 1000000000,
        formattedValue: 10,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 100000,
          formattedValue: 10,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-3',
      name: '页面3',
      layerName: '层级0',
      measure: {
        name: 'DAU',
        value: 900000000,
        formattedValue: 9,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 50000,
          formattedValue: 5,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-4',
      name: '页面4',
      layerName: '层级0',
      measure: {
        name: 'DAU',
        value: 5700000000,
        formattedValue: 57,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 60000,
          formattedValue: 6,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#F5A623',
      },
    },
    {
      id: 'node-5',
      name: '页面5',
      layerName: '层级1',
      measure: {
        name: 'DAU',
        value: 24000000000,
        formattedValue: 240,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 1600000,
          formattedValue: 160,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#4A90E2',
      },
    },
    {
      id: 'node-6',
      name: '页面6',
      layerName: '层级1',
      measure: {
        name: 'DAU',
        value: 6600000000,
        formattedValue: 66,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 110000,
          formattedValue: 11,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#4A90E2',
      },
    },
    {
      id: 'node-7',
      name: '页面7',
      layerName: '层级2',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 500000,
          formattedValue: 50,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-8',
      name: '页面8',
      layerName: '层级2',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 500000,
          formattedValue: 50,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-9',
      name: '页面9',
      layerName: '层级2',
      measure: {
        name: 'DAU',
        value: 90000000000,
        formattedValue: 90,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 500000,
          formattedValue: 50,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-10',
      name: '页面10',
      layerName: '层级2',
      measure: {
        name: 'DAU',
        value: 100000000000,
        formattedValue: 100,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 100000,
          formattedValue: 10,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-11',
      name: '页面11',
      layerName: '层级2',
      measure: {
        name: 'DAU',
        value: 1000000000,
        formattedValue: 10,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 90000,
          formattedValue: 9,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
    {
      id: 'node-12',
      name: '页面12',
      layerName: '层级2',
      measure: {
        name: 'DAU',
        value: 600000000,
        formattedValue: 6,
        formattedUnit: '万',
      },
      relatedMeasures: [
        {
          name: 'MAU',
          value: 10000,
          formattedValue: 1,
          formattedUnit: '万',
        },
      ],
      compareMeasures: [],
      style: {
        stroke: '#7ED321',
      },
    },
  ],
  edges: [
    {
      id: 'edge-0',
      source: 'node-0',
      target: 'node-5',
      measure: {
        name: 'DAU',
        value: 17500000000,
        formattedValue: 175,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-1',
      source: 'node-1',
      target: 'node-5',
      measure: {
        name: 'DAU',
        value: 5500000000,
        formattedValue: 55,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-2',
      source: 'node-2',
      target: 'node-5',
      measure: {
        name: 'DAU',
        value: 1000000000,
        formattedValue: 10,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-3',
      source: 'node-3',
      target: 'node-6',
      measure: {
        name: 'DAU',
        value: 900000000,
        formattedValue: 9,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-4',
      source: 'node-5',
      target: 'node-7',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-5',
      source: 'node-5',
      target: 'node-8',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-6',
      source: 'node-5',
      target: 'node-9',
      measure: {
        name: 'DAU',
        value: 9000000000,
        formattedValue: 90,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-7',
      source: 'node-5',
      target: 'node-10',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-8',
      source: 'node-6',
      target: 'node-11',
      measure: {
        name: 'DAU',
        value: 1000000000,
        formattedValue: 10,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-9',
      source: 'node-4',
      target: 'node-6',
      measure: {
        name: 'DAU',
        value: 5700000000,
        formattedValue: 57,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-11',
      source: 'node-6',
      target: 'node-12',
      measure: {
        name: 'DAU',
        value: 600000000,
        formattedValue: 6,
        formattedUnit: '万',
      },
    },
    {
      id: 'edge-12',
      source: 'node-6',
      target: 'node-10',
      measure: {
        name: 'DAU',
        value: 5000000000,
        formattedValue: 50,
        formattedUnit: '万',
      },
    },
  ],
};

if (typeof window !== 'undefined') {
  insertCss(`
  .user-flow-node {
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    background-color: #f6f7f9;
    border-radius: 8px;
    padding: 10px 16px 24px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    box-sizing: content-box;
  }

  .user-flow-node-name {
    font-size: 16px;
    font-weight: bold;
    color: #252525;
    margin-bottom: 4px;
  }

  .user-flow-node-metric {
    font-size: 12px;
    color: #666666;
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }

  .user-flow-node-metric--value {
    font-weight: bold;
  }
`);
}

const UserFlowNode = ({ data }) => {
  const metrics = [
    { name: 'DAU', value: data.measure.formattedValue + data.measure.formattedUnit },
    { name: 'MAU', value: data.relatedMeasures[0].formattedValue + data.relatedMeasures[0].formattedUnit },
  ];

  return (
    <div className="user-flow-node">
      <div className="user-flow-node-name">{data.name}</div>
      {metrics.map((metric) => (
        <div className="user-flow-node-metric" key={metric.name}>
          <div className="user-flow-node-metric-name">{metric.name}</div>
          <div className="user-flow-node-metric-value">{metric.value}</div>
        </div>
      ))}
    </div>
  );
};

const transformData = (data) => {
  const REF_NODE_IDS = ['node-5', 'node-6'];
  const findNodeById = (id) => data.nodes.find((node) => node.id === id);
  data.edges.forEach((edge) => {
    edge.data ||= {};
    const isSplit = REF_NODE_IDS.includes(edge.source);
    edge.data.type = isSplit ? 'split' : 'proportion';
    edge.data.ratio = edge.measure.value / findNodeById(isSplit ? edge.source : edge.target).measure.value;
  });
  return data;
};

export default () => {
  const options: FlowDirectionGraphOptions = {
    autoFit: 'view',
    padding: 8,
    data: transformData(data),
    node: {
      style: {
        component: (data) => <UserFlowNode data={data} />,
        size: [160, 90],
      },
    },
    edge: {
      style: {
        stroke: (d) =>
          d.data.type === 'split' ? 'l(0) 0:#F04864 0.5:#7EC2F3 1:#1890FF' : 'l(0) 0:#1890FF 0.5:#7EC2F3 1:#F04864',
        labelText: (d) => {
          const { type, ratio } = d.data;
          const text = type === 'split' ? '分流' : '占比';
          return `${text} ${(Number(ratio) * 100).toFixed(2)}%`;
        },
        labelBackground: true,
      },
    },
    transforms: (prev) => [
      ...prev,
      {
        type: 'map-edge-line-width',
        key: 'map-edge-line-width',
        value: (d) => d.data.ratio,
        minValue: 0,
        maxValue: 1,
        minLineWidth: 1,
        maxLineWidth: 32,
      },
    ],
    layout: {
      type: 'dagre',
      nodesep: 40,
      ranksep: 200,
    },
  };

  return <FlowDirectionGraph {...options} />;
};
