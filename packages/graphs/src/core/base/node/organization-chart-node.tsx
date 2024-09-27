import React from 'react';
import styled, { css } from 'styled-components';

export interface OrganizationChartNodeProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
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
  status?: string;
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
  border: none;
  background-color: #fff;
  box-sizing: content-box;

  ${(props) =>
    props.$isActive &&
    css`
      transform: translate(-3px, -3px);
      border: 3px solid #1783ff;
    `}

  .org-chart-node-line {
    width: 100%;
    height: 6px;
    background-color: ${(props) => props.$color};
    border-radius: 2px 2px 0 0;
  }

  .org-chart-node-content {
    height: calc(100% - 6px);
    margin: 0 16px 3px;
    display: flex;
    align-items: center;

    &-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 16px;
      background-color: ${(props) => props.$color};
      font-weight: 600;
      font-size: 18px;
      text-align: center;
      line-height: 40px;
      color: #fff;
    }

    &-detail {
      width: calc(100% - 56px);
    }

    &-name {
      color: #242424;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-post {
      color: #616161;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const OrganizationChartNode: React.FC<OrganizationChartNodeProps> = (props) => {
  const { name, position, status = 'online', isActive, className, style } = props;

  const colorMap = {
    online: '#1783FF',
    busy: '#00C9C9',
    offline: '#F08F56',
  };

  return (
    <StyledWrapper $color={colorMap[status]} $isActive={isActive} className={className} style={style}>
      <div className="org-chart-node-line"></div>
      <div className="org-chart-node-content">
        <div className="org-chart-node-content-avatar">{name.slice(0, 1)}</div>
        <div className="org-chart-node-content-detail">
          <div className="org-chart-node-content-name">{name}</div>
          {position && <div className="org-chart-node-content-post">{position}</div>}
        </div>
      </div>
    </StyledWrapper>
  );
};
