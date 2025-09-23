import { FlowGraph as FlowGraphComponent, type FlowGraphOptions, type G6 } from '@ant-design/graphs';
import { isBoolean } from 'lodash';
import React, { FC } from 'react';
import styled from 'styled-components';
import data from '../datasets/product-launch.json';
import { useGraphOptions } from './hooks/useQueryOptions';

interface StepData {
  name: string;
  status?: string;
  elapsed_time?: string;
}

interface NodeData extends G6.NodeData {
  data: StepData & {
    children?: StepData[];
    [key: string]: unknown;
  };
}

interface EdgeData extends G6.EdgeData {
  data: {
    elapsed_time?: string;
    [key: string]: unknown;
  };
}

const StyledStepCardWrapper = styled.div`
  height: 58px;
  width: 120px;
  background: #ecf2fe;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 6px 12px;
  font-size: 10px;
  font-weight: 500;
  color: #252525;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .elapsed-time {
    margin-top: 8px;

    &-title {
      color: #aaa;
      font-size: 8px;
    }
  }
`;

const StyledStepGroupCardWrapper = styled.div<{ $isCollapsed: boolean }>`
  width: inherit;
  height: inherit;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #eee;

  .header {
    height: 32px;
    line-height: 32px;
    background-color: #3875f7;
    color: #fff;
    border-radius: ${({ $isCollapsed }) => ($isCollapsed ? '4px' : '4px 4px 0 0')};
    display: flex;
    font-size: 10px;
    padding: 0 12px;
    gap: 2px;

    &-content {
      flex: 1;
      display: flex;
      justify-content: space-between;

      .elapsed-time {
        display: flex;
        gap: 2px;
        font-size: 9px;

        &-title {
          color: #acc7fb;
        }
      }
    }

    &-extra {
      cursor: pointer;
      width: fit-content;
      color: #acc7fb;
    }
  }

  .step-card-group {
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
  }
`;

const StepCard: FC<StepData> = ({ name, elapsed_time }) => {
  return (
    <StyledStepCardWrapper>
      <div className="name">{name}</div>
      {elapsed_time && (
        <div className="elapsed-time">
          <div className="elapsed-time-title">80分位耗时</div>
          <div className="elapsed-time-value">{elapsed_time}</div>
        </div>
      )}
    </StyledStepCardWrapper>
  );
};

const StepGroupCard: FC<StepData & { children?: StepData[]; isCollapsed: boolean; toggleCollapse: () => void }> = (
  props,
) => {
  const { name, elapsed_time, children, isCollapsed, toggleCollapse } = props;
  return (
    <StyledStepGroupCardWrapper $isCollapsed={isCollapsed}>
      <div className="header">
        <div className="header-content">
          <div className="name">{name}</div>
          {elapsed_time && (
            <div className="elapsed-time">
              <div className="elapsed-time-title">80分位耗时</div>
              <div className="elapsed-time-value">{elapsed_time}</div>
            </div>
          )}
        </div>
        <div className="header-extra" onClick={toggleCollapse}>
          {isCollapsed ? '展开' : '收起'}
        </div>
      </div>
      {!isCollapsed && (
        <div className="step-card-group">
          {children?.map((child, index) => (
            <StepCard key={index} {...child} />
          ))}
        </div>
      )}
    </StyledStepGroupCardWrapper>
  );
};

function isGroupCollapsed(data: NodeData) {
  return isBoolean(data.style?.collapsed) ? data.style?.collapsed : data.data.status === 'finished';
}

function isSingleStep(data: NodeData) {
  return !data.data.children;
}

export const FlowGraphProductLaunch = () => {
  const options = useGraphOptions<FlowGraphOptions>({
    autoFit: 'view',
    data,
    node: {
      style: {
        component: function (data: NodeData) {
          if (isSingleStep(data)) return <StepCard {...data.data} />;
          const toggleCollapse = async () => {
            const graph = this as unknown as G6.Graph;
            graph.updateNodeData([{ id: data.id, style: { collapsed: !isGroupCollapsed(data) } }]);
            await graph.render();
          };
          return <StepGroupCard {...data.data} isCollapsed={isGroupCollapsed(data)} toggleCollapse={toggleCollapse} />;
        },
        // @ts-ignore
        size: (data: NodeData) => {
          if (isSingleStep(data)) return [120, 58];
          const GAP = 8;
          const height = isGroupCollapsed(data) ? 32 : 56 + (58 + GAP) * (data.data?.children?.length || 0);
          return [200, height];
        },
      },
    },
    edge: {
      style: {
        lineWidth: 1,
        labelBackground: true,
        labelBackgroundOpacity: 1,
        labelFill: '#aaa',
        labelFontSize: 8,
        labelFontWeight: 500,
        labelText: (data) => (data.data?.elapsed_time ? `80分位耗时\n${data.data.elapsed_time}` : ''),
      },
    },
    layout: {
      type: 'dagre',
      nodeSize: (data: NodeData) => (isSingleStep(data) ? 160 : 400),
      animation: false,
    },
  });

  return <FlowGraphComponent {...options} />;
};
