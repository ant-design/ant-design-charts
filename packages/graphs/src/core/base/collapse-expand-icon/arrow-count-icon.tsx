import type { Graph, NodeData } from '@antv/g6';
import React, { FC } from 'react';
import styled from 'styled-components';

interface ArrowCountIconProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  /**
   * The placement of the icon
   */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * G6 Graph instance
   */
  graph: Graph;
  /**
   * Node data
   */
  data: NodeData;
  /**
   * Whether the node is collapsed
   */
  isCollapsed: boolean;
  /**
   * Determines the count to show when the node is collapsed
   */
  countType?: 'descendant' | 'children';
}

const StyledWrapper = styled.div<{
  $color: string;
  $isCollapsed: boolean;
  $placement: 'top' | 'right' | 'bottom' | 'left';
}>`
  ${({ $placement }) => {
    switch ($placement) {
      case 'top':
        return 'transform: translate(-50%, -100%); flex-direction: column-reverse;';
      case 'right':
        return 'transform: translate(0, -50%);';
      case 'left':
        return 'transform: translate(-100%, -50%); flex-direction: row-reverse;';
      default:
        return 'transform: translate(-50%, 0); flex-direction: column;';
    }
  }}

  .indented-icon-bar {
    ${({ $placement }) => {
      const isVertical = $placement === 'top' || $placement === 'bottom';
      return isVertical ? 'width: 2px; height: 8px; margin: 0 7px;' : 'width: 8px; height: 2px; margin: 7px 0;';
    }}
    background-color: ${({ $color }) => $color};
  }

  .indented-icon-circle {
    width: 16px;
    height: 16px;
    color: #fff;
    font-weight: 600;
    font-size: 10px;
    line-height: ${({ $isCollapsed }) => ($isCollapsed ? '16px' : '14px')};
    text-align: center;
    background-color: ${({ $color }) => $color};
    border-radius: 50%;
  }

  .indented-icon-circle-arrow {
    width: 16px;
    height: 16px;
    transform: ${({ $isCollapsed, $placement }) => {
      if ($isCollapsed) return 'none';
      switch ($placement) {
        case 'top':
          return 'translateY(1px) rotate(-90deg)';
        case 'right':
          return 'translateX(-1px) rotate(0deg)';
        case 'left':
          return 'translateX(1px) rotate(180deg)';
        default:
          return 'translateY(-1px) rotate(90deg)';
      }
    }};
  }

  display: ${({ $isCollapsed }) => ($isCollapsed ? 'flex' : 'none')};

  .collapsible-node-wrapper:hover & {
    display: flex;
  }
`;

export const ArrowCountIcon: FC<ArrowCountIconProps> = (props) => {
  const { className, style, graph, data, isCollapsed, countType = 'descendant', placement = 'bottom' } = props;
  const color = (graph.getNodeData(data.id).style?.color as string) || '#99ADD1';
  const count = (countType === 'descendant' ? graph.getDescendantsData(data.id) : graph.getChildrenData(data.id))
    .length;

  return (
    <StyledWrapper $color={color} $isCollapsed={isCollapsed} $placement={placement} className={className} style={style}>
      <div className="indented-icon-bar" />
      <div className="indented-icon-circle">
        {isCollapsed ? (
          count
        ) : (
          <div className="indented-icon-circle-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M11,4 L5,8 L11,12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};
