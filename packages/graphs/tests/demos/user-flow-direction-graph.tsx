import type { GraphOptions } from '@ant-design/graphs';
import { FlowDirectionGraph } from '@ant-design/graphs';
import { Flex } from 'antd';
import React from 'react';
import styled from 'styled-components';
import data from '../datasets/user-flow.json';

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

/**
 * 用户路径分析图，展示了用户从不同来源页面进入活动页面后的转化路径
 */
export const UserFlowDirectionGraph = () => {
  const options: GraphOptions = {
    autoFit: 'view',
    padding: 20,
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
          d.data!.type === 'split' ? 'l(0) 0:#F04864 0.5:#7EC2F3 1:#1890FF' : 'l(0) 0:#1890FF 0.5:#7EC2F3 1:#F04864',
        labelText: (d) => {
          const { type, ratio } = d.data as { type: string; ratio: number };
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
      type: 'antv-dagre',
      nodesep: 16,
      ranksep: 100,
    },
  };

  return <FlowDirectionGraph {...options} />;
};

const StyledWrapper = styled.div`
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  background-color: #f6f7f9;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  .user-flow-node-name {
    font-size: 16px;
    font-weight: bold;
    color: #252525;
    margin-bottom: 8px;
  }

  .user-flow-node-metric {
    font-size: 12px;
    color: #666666;

    &-value {
      font-weight: bold;
    }
  }
`;

const UserFlowNode = ({ data }) => {
  const metrics = [
    { name: 'DAU', value: data.measure.formattedValue + data.measure.formattedUnit },
    { name: 'MAU', value: data.relatedMeasures[0].formattedValue + data.relatedMeasures[0].formattedUnit },
  ];

  return (
    <StyledWrapper>
      <div className="user-flow-node-name">{data.name}</div>
      {metrics.map((metric) => (
        <Flex justify="space-between" className="user-flow-node-metric" key={metric.name}>
          <div className="user-flow-node-metric-name">{metric.name}</div>
          <div className="user-flow-node-metric-value">{metric.value}</div>
        </Flex>
      ))}
    </StyledWrapper>
  );
};
