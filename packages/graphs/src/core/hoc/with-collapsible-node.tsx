import type { CardinalPlacement, Graph, NodeData } from '@antv/g6';
import { idOf } from '@antv/g6';
import { get, isEmpty } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import type { CollapseExpandReactNodeOptions } from '../transform';

const StyledWrapper = styled.div`
  position: relative;
  height: inherit;
  width: inherit;
`;

const StyledIconWrapper = styled.div<{ $placement: CardinalPlacement; $offsetX: number; $offsetY: number }>`
  position: absolute;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }

  ${({ $placement, $offsetX, $offsetY }) => {
    const positions = {
      top: `left: calc(50% + ${$offsetX}px); top: ${$offsetY}px;`,
      bottom: `left: calc(50% + ${$offsetX}px); top: calc(100% + ${$offsetY}px);`,
      right: `left: calc(100% + ${$offsetX}px); top: calc(50% + ${$offsetY}px);`,
      left: `left: ${$offsetX}px; top: calc(50% + ${$offsetY}px);`,
    };

    return css`
      ${positions[$placement]}
    `;
  }}
`;

interface CollapsibleNodeProps extends CollapseExpandReactNodeOptions {
  /**
   * Node data
   */
  data: NodeData;
  /**
   * G6 Graph instance
   */
  graph: Graph;
}

export const withCollapsibleNode = (NodeComponent: React.FC) => {
  return (props: CollapsibleNodeProps) => {
    const {
      data,
      graph,
      trigger,
      iconRender,
      iconPlacement,
      iconOffsetX,
      iconOffsetY,
      iconClassName,
      iconStyle,
      refreshLayout,
    } = props as Required<CollapsibleNodeProps>;
    const [isCollapsed, setIsCollapsed] = useState<boolean>(get(data, 'style.collapsed', false) as boolean);
    const wrapperRef = useRef(null);
    const iconRef = useRef(null);

    const isIconShown = trigger === 'icon' && !isEmpty(data.children);

    const handleClickCollapse = async (e) => {
      e.stopPropagation();

      const toggleExpandCollapse = isCollapsed ? 'expandElement' : 'collapseElement';
      await graph[toggleExpandCollapse](idOf(data));
      setIsCollapsed((prev) => !prev);

      if (refreshLayout) {
        await graph.layout();
      }
    };

    useEffect(() => {
      const target = trigger === 'icon' ? iconRef.current : trigger === 'node' ? wrapperRef.current : trigger;

      target?.addEventListener('click', handleClickCollapse);
      return () => {
        target?.removeEventListener('click', handleClickCollapse);
      };
    }, [trigger, isCollapsed]);

    const computeCallbackStyle = (callableStyle: Function | number | string) => {
      return typeof callableStyle === 'function' ? callableStyle.call(graph, data) : callableStyle;
    };

    return (
      <StyledWrapper ref={wrapperRef} className="collapsible-node-wrapper">
        {isIconShown && (
          <StyledIconWrapper
            ref={iconRef}
            $placement={computeCallbackStyle(iconPlacement)}
            $offsetX={computeCallbackStyle(iconOffsetX)}
            $offsetY={computeCallbackStyle(iconOffsetY)}
            className={iconClassName}
            style={iconStyle}
          >
            {iconRender?.call(graph, isCollapsed, data)}
          </StyledIconWrapper>
        )}
        {NodeComponent.call(graph, data)}
      </StyledWrapper>
    );
  };
};
