import { Avatar, Flex } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';

interface OrganizationChartNodeProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  /**
   * Name of the person
   */
  name: string;
  /**
   * Position of the person
   */
  position: string;
  /**
   * Working status of the person
   */
  status: string;
  /**
   * Whether the node is hovered
   */
  isActive?: boolean;
}

const StyledWrapper = styled.div<{ $color?: string; $isActive?: boolean }>`
  height: inherit;
  width: inherit;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  border: 3px solid transparent;
  background-color: #fff;

  ${(props) =>
    props.$isActive &&
    css`
      border: 3px solid #1783ff;
    `}

  .org-chart-node-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: ${(props) => props.$color};
    border-radius: 2px 2px 0 0;
  }

  .org-chart-node-content {
    height: inherit;
    margin: 4px 16px 8px;

    &-avatar {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      background-color: ${(props) => props.$color};
      font-weight: 600;
      font-size: 18px;
    }

    &-detail {
      flex: 1;
    }

    &-name {
      color: #242424;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 5px;
    }

    &-post {
      color: #616161;
      font-size: 14px;
    }
  }
`;

export const OrganizationChartNode: React.FC<OrganizationChartNodeProps> = (props) => {
  const { name, position, status, isActive, className, style } = props;

  const colorMap = {
    online: '#1783FF',
    busy: '#00C9C9',
    offline: '#F08F56',
  };

  return (
    <StyledWrapper $color={colorMap[status]} $isActive={isActive} className={className} style={style}>
      <div className="org-chart-node-line"></div>
      <Flex className="org-chart-node-content" align="center">
        <Avatar className="org-chart-node-content-avatar">{name.slice(0, 1)}</Avatar>
        <Flex vertical className="org-chart-node-content-detail">
          <div className="org-chart-node-content-name">{name}</div>
          <div className="org-chart-node-content-post">{position}</div>
        </Flex>
      </Flex>
    </StyledWrapper>
  );
};
